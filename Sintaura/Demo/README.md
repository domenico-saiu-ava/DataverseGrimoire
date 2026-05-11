# Sintaura Demo — Appointment + Account

Mini progetto end-to-end che mostra il flusso completo **Grimoire → Sintaura → Mymithra**: dalla domanda di business in italiano fino a una pipeline di integrazione operativa con scaffold per-entità e test di collaborazione.

Il progetto è il prodotto delle tre skill applicate in sequenza: nessun file `.java` qui è scritto a mano, eccetto `application.properties` (template statico) e questo README.

---

## 1. Domanda di business

> "Voglio gli ultimi appuntamenti aperti collegati a clienti aziendali, con i recapiti dell'account."

## 2. Grimoire — risoluzione entità + query OData

`dataverse-grimoire` mappa la domanda sui logical name Dataverse e compone la URL Web API:

- "appuntamento" → `appointment` (entity set: `appointments`)
- "cliente azienda" → `account` (entity set: `accounts`)
- relazione M2O da appointment ad account: `regardingobjectid_account_appointment`

La URL prodotta è:

```
GET {org}/api/data/v9.2/appointments
    ?$select=subject,scheduledstart,scheduledend,location,statecode
    &$expand=regardingobjectid_account_appointment(
        $select=name,accountnumber,emailaddress1,telephone1,websiteurl)
    &$filter=regardingobjecttypecode eq 'account'
    &$orderby=scheduledstart desc
    &$top=50
```

## 3. Sintaura — scaffolding del progetto Java

Si passa la URL a `sintaura`. Lo skill estrae path + parametri OData e genera il progetto Maven seguendo la struttura standard:

```
src/main/java/.../appointment/
  core/
    Provider.java               Interface Provider<T> (consumed by Mymithra)
  models/
    Appointment.java            DTO con campi $select + nested Account ($expand)
    Account.java                DTO dell'entità espansa
  providers/
    AppointmentProvider.java    HttpClient + Jackson, espone URL_PATH, DEFAULT_QUERY,
                                findAll() + find(query) + fetch() (alias per Mymithra).
                                Due costruttori: (URI) per gli stub, (URI, accessToken)
                                per le chiamate reali con Authorization: Bearer ...

src/test/java/.../appointment/
  factories/
    AppointmentFactory.java     Instancio + Datafaker, con preamble paired-date
                                (scheduledend > scheduledstart garantito)
    AccountFactory.java         Composta in AppointmentFactory per popolare la nested DTO
  stubs/
    AppointmentStub.java        Registra lo stub WireMock su AppointmentProvider.URL_PATH
  AppointmentStubTest.java                  @WireMockTest end-to-end sul Provider
  AppointmentProviderIntegrationTest.java   Chiama un Dataverse reale, auto-skip via
                                            Assumptions se config assente

src/test/resources/
  application.properties        dataverse.baseUrl + accessToken (vuoti di default)

.sintaura/mapping.json          Override per-progetto delle regole di mapping campo→Datafaker
```

### Override locale del mapping

Account è l'unica entità con campo `name`, ma rappresenta una ragione sociale, non un nominativo. `.sintaura/mapping.json` rimappa `^(fullname|name|yominame|yomifullname)$` su `company().name()` invece della regola di skill (che produrrebbe un nome di persona).

## 4. Mymithra — pipeline operativa

A partire dal progetto Sintaura, `mymithra` legge `models/Appointment.java`, rileva il child `Account` (campo nested di tipo classe `models/`), e genera il telaio della pipeline:

```
src/main/java/.../appointment/
  core/                         (idempotente: 17 classi riusabili + 4 test)
    Logger.java + NullLogger + ConsoleLogger
    Provider.java + NullProvider + AbstractLoggingProvider
    Validator.java + NullValidator + AbstractLoggingValidator + ValidationResult
    Converter.java + AbstractLoggingConverter
    Publisher.java + AbstractLoggingPublisher + LoggingPublisher
    IntegrationPipeline.java + PipelineResult.java
  AppointmentOutput.java        Modello output del root (vuoto: lo riempi tu)
  AppointmentValidator.java     extends AbstractLoggingValidator<Appointment>
                                inietta AccountValidator via costruttore
  AppointmentConverter.java     extends AbstractLoggingConverter<Appointment, AppointmentOutput>
                                inietta AccountConverter via costruttore
  AppointmentPublisher.java     extends AbstractLoggingPublisher<AppointmentOutput>
                                ha AccountPublisher come field, cascade commentata
  AppointmentIntegration.java   main() + buildPipeline(provider, logger) statico
                                (testabile senza toccare main)
  AccountOutput.java            Modello output del child
  AccountValidator.java         Scaffold: AccountConverter / AccountPublisher analoghi

src/test/java/.../appointment/
  core/                         IntegrationPipelineTest + 3 AbstractLogging*Test
  AppointmentValidatorTest.java
  AppointmentConverterTest.java
  AppointmentPublisherTest.java
  AppointmentIntegrationTest.java   smoke wiring con Provider mockato
  AccountValidatorTest.java
  AccountConverterTest.java
  AccountPublisherTest.java
```

Tutti i test sono **collaboration tests** (Mockito + JUnit 5): istanziano il SUT con i collaboratori mockati e verificano che il dato fluisca attraverso le dipendenze (delegazione al child, prefisso degli errori col nav property, cascade publish NON chiamata di default).

## 5. Esecuzione

```powershell
cd Sintaura\Demo
mvn test
```

Output atteso (~22 test):

- `AppointmentStubTest` — 1 run, 0 failed (WireMock + Provider + DTO + nested Account)
- `AppointmentProviderIntegrationTest` — 1 run, **1 skipped** (no env vars)
- `IntegrationPipelineTest` — 5 run (golden path, validator skip, converter throw, publisher throw, lista vuota)
- `AbstractLoggingValidator/Converter/PublisherTest` — ~3 run ciascuno
- `AppointmentValidator/Converter/PublisherTest` — ~3 run ciascuno
- `AccountValidator/Converter/PublisherTest` — ~2 run ciascuno
- `AppointmentIntegrationTest` — 1 run, smoke wiring

Per attivare l'integration test e l'orchestrator contro un tenant reale:

```powershell
$env:DATAVERSE_BASE_URL    = "https://orgXXXXXXXX.crm4.dynamics.com"
$env:DATAVERSE_ACCESS_TOKEN = "<bearer token>"
mvn test -Dtest=AppointmentProviderIntegrationTest

# Run dell'orchestrator (pipeline end-to-end con Null* default):
mvn exec:java "-Dexec.mainClass=it.dataverse.skills.sintaura.tests.apistub.appointment.AppointmentIntegration"
```

L'orchestrator legge dal Dataverse, valida (NullValidator → tutto ok), converte (scaffold → output vuoto), pubblica (LoggingPublisher → stampa via Logger.info). Sostituisci progressivamente `Null*` e i metodi `doX()` degli scaffold per portare la pipeline a regime.
