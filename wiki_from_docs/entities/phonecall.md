---
logical: "phonecall"
display_it: "Telefonata"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["telefonata"]
processes: ["Configurazioni di agenda", "Visualizzazione propria agenda e filtri di visualizzazione", "Dettagli appuntamento", "Scheda lead e suggerimenti", "Gestione lead e suggerimenti con esito “venduto”", "Gestione lead e suggerimenti con registrazione recapito di contatto non valido (indirizzi di recapito inesistenti)", "Focus Lead mutui › Vista di dettaglio lead mutui", "Pianificazione disponibilità › Appuntamento decontestualizzato (cliente da selezionare)"]
dataverse_logical: "phonecall"
is_custom: false
schema_name: "PhoneCall"
generated: "2026-05-07"
---

# Telefonata — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `phonecall`  
**Custom:** No  
**Ownership:** UserOwned

Impegno che consente di tenere traccia di una telefonata.

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `activityadditionalparams` | Parametri aggiuntivi | Multiline Text | No |  | Solo per uso interno. |
| `activityid` | Telefonata | Uniqueidentifier | **Sì** |  | Identificatore univoco dell'impegno di tipo telefonata. |
| `activitytypecode` | Tipo di impegno | EntityName | **Sì** |  | Mostra il tipo di impegno. |
| `actualdurationminutes` | Durata | Whole number | No |  | Digitare il numero di minuti dedicati alla telefonata. La durata viene usata nei report. |
| `actualend` | Fine effettiva | DateTime | No |  | Immettere la data e l'ora di fine effettive della telefonata. Per impostazione predefinita, mostra la data e l'ora in cui l'impegno è stato completato |
| `actualstart` | Inizio effettivo | DateTime | No |  | Immettere la data e l'ora di inizio effettive della telefonata. Per impostazione predefinita, mostra la data e l'ora in cui l'impegno è stato creato m |
| `category` | Categoria | Text | No |  | Digitare una categoria per identificare il tipo di telefonata, ad esempio raccolta di lead o attività di completamento per i clienti, per associare la |
| `createdby` | Autore | Lookup | No |  | Mostra chi ha creato il record. |
| `createdbyname` | N/A | Text | No |  | N/A |
| `createdbyyominame` | N/A | Text | No |  | N/A |
| `createdon` | Data creazione | DateTime | No |  | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 36 |
| `createdonbehalfby` | Autore (delegato) | Lookup | No |  | Mostra chi ha creato il record per conto di un altro utente. |
| `createdonbehalfbyname` | N/A | Text | No |  | N/A |
| `createdonbehalfbyyominame` | N/A | Text | No |  | N/A |
| `description` | Descrizione | Multiline Text | No |  | Digitare informazioni aggiuntive per descrivere la telefonata, ad esempio il messaggio primario o i prodotti e servizi discussi. |
| `directioncode` | Direzione | Two options | No |  | Selezionare la direzione della telefonata, ovvero in ingresso o in uscita. |
| `exchangerate` | Tasso di cambio | Decimal | No |  | Mostra il tasso di conversione della valuta del record. Il tasso di cambio è usato per convertire tutti i campi di tipo money nel record dalla valuta  |
| `from` | Autore chiamata | PartyList | **Sì** |  | Immettere l'account, il contatto, il lead o l'utente che ha effettuato la telefonata. |
| `importsequencenumber` | Numero sequenza importazione | Whole number | No |  | Identificatore univoco dell'importazione di dati o migrazione di dati che ha creato il record. |
| `isbilled` | Fatturato | Two options | No |  | Specifica se l'impegno di tipo telefonata è stato fatturato durante la risoluzione di un caso. |
| `isregularactivity` | Impegno regolare | Two options | **Sì** |  | Indica se l'impegno è di tipo regolare o di tipo evento. |
| `isworkflowcreated` | Creato da flusso di lavoro | Two options | No |  | Indica se l'impegno di tipo telefonata è stato creato da una regola del flusso di lavoro. |
| `lastonholdtime` | Ultimo periodo sospensione | DateTime | No |  | Contiene l'indicatore di data e ora dell'ultimo periodo di sospensione. |
| `leftvoicemail` | Messaggi vocali presenti | Two options | No |  | Specificare se per la persona è presente un messaggio vocale. |
| `modifiedby` | Autore modifica | Lookup | No |  | Mostra chi ha aggiornato il record per ultimo. |
| `modifiedbyname` | N/A | Text | No |  | N/A |
| `modifiedbyyominame` | N/A | Text | No |  | N/A |
| `modifiedon` | Data modifica | DateTime | No |  | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsof |
| `modifiedonbehalfby` | Autore modifica (delegato) | Lookup | No |  | Mostra chi ha aggiornato l'ultima volta il record per conto di un altro utente. |
| `modifiedonbehalfbyname` | N/A | Text | No |  | N/A |
| `modifiedonbehalfbyyominame` | N/A | Text | No |  | N/A |
| `onholdtime` | Periodo di sospensione (minuti) | Whole number | No |  | Mostra la durata della sospensione del record in minuti. |
| `overriddencreatedon` | Data creazione record | DateTime | No |  | Data e ora di migrazione del record. |
| `ownerid` | Proprietario | Owner | **Sì** |  | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un ute |
| `owneridname` | N/A | Text | **Sì** |  | N/A |
| `owneridtype` | N/A | EntityName | **Sì** |  | N/A |
| `owneridyominame` | N/A | Text | **Sì** |  | N/A |
| `owningbusinessunit` | Business Unit proprietaria | Lookup | No |  | Identificatore univoco della Business Unit a cui appartiene l'impegno di tipo telefonata. |
| `owningbusinessunitname` | N/A | Text | No |  | N/A |
| `owningteam` | Team proprietario | Lookup | No |  | Identificatore univoco del team a cui appartiene l'impegno di tipo telefonata. |
| `owninguser` | Utente proprietario | Lookup | No |  | Identificatore univoco dell'utente a cui appartiene l'impegno di tipo telefonata. |
| `phonenumber` | Numero di telefono | Text | No |  | Digitare il numero di telefono. |
| `prioritycode` | Priorità | Choice | No |  | Selezionare la priorità in modo che i clienti preferiti o i problemi critici vengano gestiti rapidamente. |
| `processid` | Processo | Uniqueidentifier | No |  | Mostra l'ID del processo. |
| `regardingobjectid` | Tema | Lookup | No |  | Scegliere il record correlato alla telefonata. |
| `regardingobjectidname` | N/A | Text | No |  | N/A |
| `regardingobjectidyominame` | N/A | Text | No |  | N/A |
| `regardingobjecttypecode` | N/A | EntityName | No |  | N/A |
| `scheduleddurationminutes` | Durata pianificata | Whole number | No |  | Durata pianificata dell'impegno di tipo telefonata espressa in minuti. |
| `scheduledend` | Scadenza | DateTime | No |  | Immettere la data e l'ora di scadenza previste. |
| `scheduledstart` | Data di inizio | DateTime | No |  | Immettere la data e l'ora di scadenza previste. |
| `serviceid` | Servizio | Lookup | No |  | Identificatore univoco di un servizio associato. |
| `serviceidname` | N/A | Text | No |  | N/A |
| `slaid` | Contratto di servizio | Lookup | No |  | Scegli il contratto di servizio da applicare al record della telefonata. |
| `slainvokedid` | Ultimo contratto di servizio applicato | Lookup | No |  | Ultimo contratto di servizio applicato alla telefonata. Questo campo è solo per uso interno. |
| `slainvokedidname` | N/A | Text | No |  | N/A |
| `slaname` | N/A | Text | No |  | N/A |
| `sortdate` | Data di ordinamento | DateTime | No |  | Mostra la data e l'ora di ordinamento delle attività. |
| `stageid` | (Deprecata) Fase del processo | Uniqueidentifier | No |  | Mostra l'ID della fase. |
| `statecode` | Stato impegno | State | **Sì** |  | Mostra se la telefonata è aperta, completata o annullata. Le telefonate completate e annullate sono di sola lettura e non possono essere modificate. |
| `statuscode` | Motivo stato | Status | No |  | Selezionare lo stato della telefonata. |
| `subcategory` | Sottocategoria | Text | No |  | Digitare una sottocategoria per identificare il tipo di telefonata e associare l'impegno a un prodotto, un'area di vendita, un gruppo aziendale o un'a |
| `subject` | Oggetto | Text | **Sì** |  | Digitare una breve descrizione dell'obiettivo o dell'argomento primario della telefonata. |
| `subscriptionid` | Sottoscrizione | Uniqueidentifier | No |  | Solo per uso interno. |
| `timezoneruleversionnumber` | Numero di versione regola fuso orario | Whole number | No |  | Solo per uso interno. |
| `to` | Ricevente chiamata | PartyList | **Sì** |  | Immettere l'account, il contatto, il lead o l'utente destinatario della telefonata. |
| `transactioncurrencyid` | Valuta | Lookup | No |  | Scegliere la valuta locale per il record per assicurare che i preventivi vengano espressi nella valuta corretta. |
| `transactioncurrencyidname` | N/A | Text | No |  | N/A |
| `traversedpath` | (Deprecata) Percorso incrociato | Text | No |  | Solo per uso interno. |
| `utcconversiontimezonecode` | Codice fuso orario conversione UTC | Whole number | No |  | Codice di fuso orario utilizzato al momento della creazione del record. |
| `versionnumber` | Numero versione | BigInt | No |  | Numero di versione dell'impegno di tipo telefonata. |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `createdby` | Autore | `systemuser` |
| `createdonbehalfby` | Autore (delegato) | `systemuser` |
| `modifiedby` | Autore modifica | `systemuser` |
| `modifiedonbehalfby` | Autore modifica (delegato) | `systemuser` |
| `owningbusinessunit` | Business Unit proprietaria | `businessunit` |
| `owningteam` | Team proprietario | `team` |
| `owninguser` | Utente proprietario | `systemuser` |
| `regardingobjectid` | Tema | `account adx_invitation bookableresourcebooking bookableresourcebookingheader bulkoperation campaign campaignactivity contact contract entitlement entitlementtemplate incident invoice knowledgearticle knowledgebaserecord lead msdyn_customerasset msdyn_playbookinstance msdyn_postalbum msdyn_salessuggestion msdyn_swarm mspp_adplacement mspp_pollplacement mspp_publishingstatetransitionrule mspp_redirect mspp_shortcut mspp_website opportunity quote salesorder site` |
| `serviceid` | Servizio | `service` |
| `slaid` | Contratto di servizio | `sla` |
| `slainvokedid` | Ultimo contratto di servizio applicato | `sla` |
| `transactioncurrencyid` | Valuta | `transactioncurrency` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Servizio clienti- MVP0_Sprint2** — §Visualizzazione propria agenda e filtri di visualizzazione
  > Figura 1 - Visualizzazione propria agenda (Vista settimanale) Figura 2 - Visualizzazione agenda (Vista giornaliera) Figura 3 - Visualizzazione agenda (Vista mensile) Figura 4 - Visualizzazione agenda 
- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
  > Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in co
- **AF Retail - MVP0_Sprint1** — §Scheda lead e suggerimenti
  > Figura 10 – Scheda lead (Tab Lead) Figura 11 – Scheda lead (Tab Dettagli) La schermata è accessibile dalla vista lead tramite click su una specifica lead o anagrafica dalla lista in riga. La schermata
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “venduto”
  > Figura 12 - Pagina di Esitazione Figura 13 - Pagina di esitazione CTA Esita attivato Figura 14 - Pagina di esitazione con esito registrato L’azione rapida per esitare si trova sulla schermata Scheda l
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con registrazione recapito di contatto non valido (indirizzi di recapito inesistenti)
  > Figura 16 - Icone di registrazione tentativo contatto e contatto non valido Previsto tooltip di specifica sull’icona clickabile. Il tooltip sarà “Registra contatto non valido” Avviabile al click sull’
- **AF Retail - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > Figura 24- Dettagli lead mutui La schermata è accessibile partendo dalla scheda lead tramite un’azione rapida di visualizza tutti i dati visibile ed attivabile specifica nel widget prodotti per le lea
- **AF servizio clienti - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > La schermata è accessibile partendo dalla scheda lead tramite la selezione del tab “Dettagli”. Campi Visualizzati: Dettagli Campo 1: “Lead ID” Valori ammessi: codice univoco assegnato alla lead Campo 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07