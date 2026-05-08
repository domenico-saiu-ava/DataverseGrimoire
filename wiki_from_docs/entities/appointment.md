---
logical: "appointment"
display_it: "Appuntamento"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["appuntamento"]
processes: ["Obiettivi e valore atteso", "Permessi, coni di visibilità e azioni consentite", "Tassonomia generale", "Fonti alimentanti – vista generale", "Configurazioni di agenda", "Visualizzazione propria agenda e filtri di visualizzazione", "Dettagli appuntamento", "Pagina agende dei colleghi e processi correlati"]
dataverse_logical: "appointment"
is_custom: false
schema_name: "Appointment"
generated: "2026-05-07"
---

# Appuntamento — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `appointment`  
**Custom:** No  
**Ownership:** UserOwned

Impegno che rappresenta un intervallo di tempo di cui sono indicati l'ora di inizio, quella di fine e la durata.

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdby` | Autore | Lookup | No |  | Mostra chi ha creato il record. |
| `createdon` | Data creazione | DateTime | No |  | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 36 |
| `description` | Descrizione | Multiline Text | No |  | Digita informazioni aggiuntive per descrivere lo scopo dell'appuntamento. |
| `modifiedby` | Autore modifica | Lookup | No |  | Mostra chi ha aggiornato il record per ultimo. |
| `modifiedon` | Data modifica | DateTime | No |  | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsof |
| `modifiedonbehalfby` | Autore modifica (delegato) | Lookup | No |  | Mostra chi ha creato il record per conto di un altro utente. |
| `ownerid` | Proprietario | Owner | **Sì** |  | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un ute |
| `regardingobjectid` | Tema | Lookup | No |  | Scegliere il record correlato all'appuntamento. |
| `scheduledend` | Ora di fine | DateTime | **Sì** |  | Immettere la data e l'ora di scadenza previste per il completamento dell'impegno per fornire dettagli sui tempi dell'appuntamento. |
| `scheduledstart` | Ora di inizio | DateTime | **Sì** |  | Immettere la data e l'ora di inizio previste dell'impegno per fornire dettagli sui tempi dell'appuntamento. |
| `statecode` | Stato | State | **Sì** |  | Mostra se l'appuntamento è aperto, completato o annullato. Gli appuntamenti completati o annullati sono di sola lettura e non possono essere modificat |
| `statuscode` | Motivo stato | Status | No |  | Selezionare lo stato dell'appuntamento. |
| `subject` | Oggetto | Text | **Sì** |  | Digitare una breve descrizione dell'obiettivo o dell'argomento primario dell'appuntamento. |
| `cai_contactchannelid` | Modalità interazione | Lookup | No | ✓ | Il tipo di interazione previsto, se a distanza o in filiale, etc |
| `cai_expectedaction` | Azione prevista | Choice | No | ✓ |  |
| `cai_argumentid` | Argomento prevalente | Lookup | No | ✓ | L'argomento principale tra quelli delle Lead calcolato tramite plugin |
| `cai_organizertype` | Fissato da | Choice | No | ✓ | Indica sommariamente chi ha fissato l'appuntamento: "Me”, “Servizio Clienti”, “APP”, “Altri collaboratori” |
| `cai_type` | Tipo | Choice | No | ✓ | Appuntamento commerciale, Smart working, Indisponibilità, Part-time, Disponibilità Mobile App, Impegno, Impegno prospect |
| `cai_status` | Stato appuntamento | Choice | No | ✓ | “Esitato”, “Da svolgere”, “Da esitare”, “Da confermare”, "Confermato", "Rifiutato" |
| `cai_templatetype` | Tipo di modello | Choice | No | ✓ | "Appuntamento", "Impegno" |
| `cai_authorid` | Autore | Lookup | No |  | Riporta il riferimento dell'utente che ha creato il record |
| `cai_otherpartecipants` | Altri partecipanti | Text | No | ✓ | Un campo che conterrà la concatenazione di indirizzi e-mail |
| `cai_freeappointment` | Appuntamento libero di Banca d'impresa | Two options | No | ✓ | Per appuntamenti di Banca d'impresa, indica se l'appuntamento non ha opportunità collegate |
| `cai_basesubjectforbdi` | Subject minimo per appuntamento BDI su Free | Text | No | ✓ | Il subject che verrà valorizzato dall'utente di Banca d'impresa in creazione di un appuntamento |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `createdby` | Autore | `systemuser` |
| `modifiedby` | Autore modifica | `systemuser` |
| `modifiedonbehalfby` | Autore modifica (delegato) | `systemuser` |
| `cai_contactchannelid` | Modalità interazione | `cai_contactchannel` |
| `cai_argumentid` | Argomento prevalente | `cai_argument` |
| `cai_authorid` | Autore | `systemuser` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 2 Servizio clienti INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 3 1.4 Stru
- **AF Servizio clienti- MVP0_Sprint2** — §Obiettivi e valore atteso
  > L’obiettivo primario della nuova piattaforma CRM Operativa è abilitare una gestione realmente omnicanale della relazione cliente, superando la frammentazione dei dati e delle attività che spesso carat
- **AF Servizio clienti- MVP0_Sprint2** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Cono di visibilità clienti Livello gerarchico Visibilità agende di Retail Visibilità agende Servizio clienti Fissare appuntamento Riprogrammare Appuntamento Cancellare appuntamento Centro Tutti 
- **AF Servizio clienti- MVP0_Sprint2** — §Tassonomia generale
  > In ambito CRM, si definisce “Appuntamento” ogni incontro associato ad una lead o suggerimento di un cliente/prospect e che richieda un’esitazione In ambito CRM, si definisce “Impegno” ogni attività ch
- **AF Servizio clienti- MVP0_Sprint2** — §Fonti alimentanti – vista generale
  > Si prevedono ad alto livello le seguenti fonti dati FrEE: dati della scheda anagrafica Adobe/DB contatti: dati di marketing, campagne ed interazione di marketing con clienti Dati di lead mgmt attualme
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Servizio clienti- MVP0_Sprint2** — §Visualizzazione propria agenda e filtri di visualizzazione
  > Figura 1 - Visualizzazione propria agenda (Vista settimanale) Figura 2 - Visualizzazione agenda (Vista giornaliera) Figura 3 - Visualizzazione agenda (Vista mensile) Figura 4 - Visualizzazione agenda 
- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
  > Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in co

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07