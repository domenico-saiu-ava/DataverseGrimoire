---
logical: "recurringappointmentmaster"
display_it: "Appuntamento ricorrente"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["appuntamento ricorrente"]
dataverse_logical: "recurringappointmentmaster"
is_custom: false
schema_name: "RecurringAppointmentMaster"
generated: "2026-05-07"
---

# Appuntamento ricorrente — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `recurringappointmentmaster`  
**Custom:** No  
**Ownership:** UserOwned

Appuntamento master della serie di appuntamenti ricorrenti.

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `activityid` | Appuntamento ricorrente | Uniqueidentifier | No |  | Identificatore univoco della serie di appuntamenti ricorrenti. |
| `createdby` | Autore | Lookup | No |  | Mostra chi ha creato il record. |
| `createdon` | Data creazione | DateTime | No |  | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 36 |
| `daysofweekmask` | Maschera giorni della settimana | Whole number | No |  | Maschera di bit che rappresenta i giorni della settimana in cui si verifica l'appuntamento ricorrente. |
| `description` | Descrizione | Multiline Text | No |  | Digitare informazioni aggiuntive per descrivere l'appuntamento ricorrente, ad esempio punti di discussione chiave oppure obiettivi. |
| `duration` | Durata | Whole number | No |  | Durata in minuti della serie di appuntamenti ricorrenti. |
| `firstdayofweek` | Primo giorno della settimana | Whole number | No |  | Primo giorno della settimana per il criterio di ricorrenza. |
| `globalobjectid` | Master appuntamento ricorrente in Outlook | Text | No |  | Identificatore univoco di Outlook utilizzato per creare una correlazione per la serie di appuntamenti ricorrenti nelle cassette postali di Exchange. |
| `instancetypecode` | Tipo di appuntamento | Choice | No |  | Tipo di istanza di una serie di appuntamenti ricorrenti. |
| `isalldayevent` | Giornata intera | Two options | No |  | Selezionare se l'appuntamento ricorrente è un evento per l'intera giornata per garantire che le risorse richieste siano pianificate di conseguenza. |
| `isonlinemeeting` | Riunione online | Two options | No | ✓ | Visualizza se si tratta di una riunione online. |
| `isregenerate` | Rigenerazione | Two options | No |  | Solo per uso interno. |
| `isweekdaypattern` | Ogni giorno feriale | Two options | No |  | Indica se il criterio di ricorrenza settimanale è un criterio giornaliero applicato solo ai giorni feriali. Valido solo per il criterio di ricorrenza  |
| `location` | Posizione | Text | No |  | Digitare il luogo in cui si svolgerà l'appuntamento ricorrente, ad esempio una sala conferenze o l'ufficio del cliente. |
| `occurrences` | Occorrenze | Whole number | No |  | Numero di occorrenze dell'appuntamento in una serie di appuntamenti ricorrenti. |
| `onlinemeetingid` | ID riunione online | Text | No | ✓ | Mostra l'ID della riunione online. |
| `onlinemeetingjoinurl` | URL partecipazione riunione online | Text | No | ✓ | Mostra l'URL di partecipazione alla riunione online. |
| `onlinemeetingtype` | Tipo di riunione online | Choice | No | ✓ | Visualizza il tipo di riunione online. |
| `optionalattendees` | Partecipanti facoltativi | PartyList | No |  | Immetti account, contatti, lead, utenti o attrezzature non necessari per l'appuntamento ricorrente, ma che possono partecipare facoltativamente. |
| `organizer` | Organizzatore | PartyList | No |  | Immettere l'utente incaricato di coordinare o condurre l'appuntamento ricorrente per garantire che quest'ultimo venga mostrato nella visualizzazione I |
| `ownerid` | Proprietario | Owner | No |  | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un ute |
| `patternenddate` | Fine intervallo ricorrenza | DateTime | No |  | Data di fine dell'intervallo di ricorrenza. |
| `patternendtype` | Tipo di fine criterio | Choice | No |  | Selezionare il tipo di data di fine per l'appuntamento ricorrente, ad esempio nessuna data di fine o il numero di occorrenze. |
| `patternstartdate` | Inizio intervallo ricorrenza | DateTime | No |  | Data di inizio dell'intervallo di ricorrenza. |
| `recurrencepatterntype` | Frequenza ricorrenza | Choice | No |  | Selezionare il tipo di criterio per l'appuntamento ricorrente per indicare se si verifica giornalmente, settimanalmente. mensilmente o annualmente. |
| `regardingobjectid` | Tema | Lookup | No |  | Scegliere il record correlato alla serie di appuntamenti ricorrenti. |
| `requiredattendees` | Partecipanti necessari | PartyList | No |  | Immettere account, contatti, lead, utenti o attrezzature che devono partecipare all'appuntamento ricorrente. |
| `ruleid` | Regola ricorrenza | Lookup | No |  | Identificatore univoco della regola di ricorrenza associata alla serie di appuntamenti ricorrenti. |
| `scheduledend` | Ora di fine | DateTime | No |  | Data e ora di fine pianificata della serie di appuntamenti ricorrenti. |
| `scheduledstart` | Ora di inizio | DateTime | No |  | Data e ora di inizio pianificata della serie di appuntamenti ricorrenti. |
| `seriesstatus` | Stato serie | Two options | No |  | Specifica se la serie di appuntamenti ricorrenti è attiva o inattiva. |
| `statecode` | Stato | State | No |  | Mostra se l'appuntamento ricorrente è aperto, pianificato, completato o annullato. Gli appuntamenti completati o annullati sono di sola lettura e non  |
| `statuscode` | Motivo stato | Status | No |  | Selezionare lo stato dell'appuntamento ricorrente. |
| `subject` | Oggetto | Text | No |  | Digitare una breve descrizione dell'obiettivo o dell'argomento primario dell'appuntamenti ricorrente. |
| `cai_organizertype` | Fissato da | Choice | No | ✓ | Indica sommariamente chi ha fissato l'appuntamento: "Me”, “Servizio Clienti”, “APP”, “Altri collaboratori” |
| `cai_type` | Tipo | Choice | No | ✓ | Appuntamento commerciale, Smart working, Indisponibilità, Part-time, Disponibilità Mobile App |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `createdby` | Autore | `systemuser` |
| `ruleid` | Regola ricorrenza | `recurrencerule` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07