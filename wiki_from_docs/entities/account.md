---
logical: "account"
display_it: "Account"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1"]
synonyms_it: ["account"]
processes: ["Elenco delle User Stories trattate", "Next best product", "Elementi comuni › Menu laterale", "Elementi comuni › Collaborazione", "Home – To-do list", "Scheda cliente (account o contatto)", "Scheda cliente (account o contatto) › Inserisci contatto da scheda cliente", "Scheda cliente (account o contatto) › Inserisci lead da scheda cliente"]
dataverse_logical: "account"
is_custom: false
schema_name: "Account"
generated: "2026-05-07"
---

# Account — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `account`  
**Custom:** No  
**Ownership:** UserOwned

Azienda che rappresenta un cliente o un potenziale cliente. Società a cui viene intestata la fattura nelle transazioni aziendali.

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `accountid` | Account | Uniqueidentifier | **Sì** |  | Identificatore univoco dell'account. |
| `accountnumber` | Numero account | Text | No |  | Digitare un numero ID o un codice per l'account per cercare e identificare rapidamente l'account nelle visualizzazioni di sistema. |
| `businesstypecode` | Tipo di azienda | Choice | No |  | Selezionare la designazione giuridica o il tipo di società dell'account per contratti o per scopi di report. |
| `createdby` | Autore | Lookup | No |  | Mostra chi ha creato il record. |
| `createdon` | Data creazione | DateTime | No |  | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 36 |
| `createdonbehalfby` | Autore (delegato) | Lookup | No |  | Mostra chi ha creato il record per conto di un altro utente. |
| `customertypecode` | Tipo relazione | Choice | No |  | Selezionare la categoria che meglio descrive la relazione tra l'account e l'organizzazione. |
| `description` | Descrizione | Multiline Text | No |  | Digitare informazioni aggiuntive per descrivere l'account, ad esempio un estratto del sito Web della società. |
| `donotemail` | Non consentire invio di messaggi e-mail | Two options | No |  | Seleziona se l'account consente l'invio di e-mail dirette da Microsoft Dynamics 365. |
| `donotphone` | Non consentire telefonate | Two options | No |  | Selezionare se l'account consente le telefonate. Se si seleziona Non consentire, l'account sarà escluso dagli impegni di tipo telefonata distribuiti n |
| `emailaddress1` | E-mail | Text | No |  | Digitare l'indirizzo e-mail primario per l'account. |
| `industrycode` | Settore | Choice | No |  | Selezionare il settore primario dell'account da usare nella segmentazione di marketing e nell'analisi demografica. |
| `modifiedby` | Autore modifica | Lookup | No |  | Mostra chi ha aggiornato il record per ultimo. |
| `modifiedon` | Data modifica | DateTime | No |  | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsof |
| `modifiedonbehalfby` | Autore modifica (delegato) | Lookup | No |  | Mostra chi ha creato il record per conto di un altro utente. |
| `msdyn_segmentid` | ID segmento | Lookup | No | ✓ | Identificatore univoco del segmento associato a account. |
| `name` | Nome account | Text | **Sì** |  | Digitare il nome della società o dell'azienda. |
| `originatingleadid` | Lead di origine | Lookup | No |  | Mostra il lead da cui è stato creato l'account se l'account è stato creato convertendo un lead in Microsoft Dynamics 365. Usato per associare l'accoun |
| `ownerid` | Proprietario | Owner | **Sì** |  | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un ute |
| `parentaccountid` | Account padre | Lookup | No |  | Scegli l'account padre associato a questo account per mostrare le aziende padre e figlio a scopo di report e analisi. |
| `statecode` | Stato | State | **Sì** |  | Mostra se l'account è attivo o inattivo. Gli account inattivi sono di sola lettura e non possono essere modificati a meno che non vengano riattivati. |
| `statuscode` | Motivo stato | Status | No |  | Selezionare lo stato dell'account. |
| `telephone1` | Telefono principale | Text | No |  | Digitare il numero di telefono principale per questo account. |
| `telephone2` | Altro telefono | Text | No |  | Digitare un secondo numero di telefono per questo account. |
| `territoryid` | Area | Lookup | No |  | Scegli un'area di vendita per l'account per assicurarti che venga assegnato al rappresentante corretto e da usare nella segmentazione e nell'analisi. |
| `cai_legalformcode` | Codice natura giuridica | Text | No | ✓ |  |
| `cai_legalformname` | Nome natura Giuridica | Text | No | ✓ |  |
| `cai_legalformid` | Natura Giuridica | Lookup | No | ✓ | Lookup alla natura giuridica (cai_legalform) |
| `cai_segmentcode` | Codice segmento | Text | No | ✓ |  |
| `cai_segmentname` | Nome segmento | Text | No | ✓ |  |
| `cai_segmentid` | Segmento | Lookup | No | ✓ | Lookup al segmento (cai_segment) |
| `cai_orgunitid` | Unità organizzativa | Lookup | No | ✓ | Lookup all'unità organizzativa (cai_orgunit) |
| `cai_walletid` | Portafoglio | Lookup | No | ✓ | Lookup al Portafoglio |
| `cai_institutecode` | Codice istituto | Text | No | ✓ | Codice identificativo dell'istituto bancario |
| `cai_ndgcode` | Codice NDG | Text | No | ✓ | Codice identificativo del cliente |
| `cai_score` | Score o Temperatura o Priorità | Choice | No | ✓ |  |
| `cai_customertype` | Tipologia cliente | Choice | No | ✓ | Anagrafato / Prospect / Disattivato - Scaduto |
| `cai_extinctiondate` | Data estinzione | DateTime | No | ✓ |  |
| `cai_relationshipcode` | Codice titolarità rapporti | Text | No | ✓ |  |
| `cai_relationshipname` | Nome titolarità rapporti | Text | No | ✓ |  |
| `cai_relationshipdate` | Data titolarità rapporti | DateTime | No | ✓ |  |
| `cai_relationshipid` | Titolarità Rapporto | Lookup | No | ✓ | Lookup alla titolarità rapporto (cai_ownershiprelation) |
| `cai_atecocode` | Codice ATECO | Text | No | ✓ |  |
| `cai_fiscalcode` | Codice fiscale | Text | No | ✓ |  |
| `cai_vatcode` | Partita IVA | Text | No | ✓ |  |
| `cai_coi` | Cointestazione | Two options | No | ✓ |  |
| `cai_firstname` | Nome | Text | No | ✓ |  |
| `cai_lastname` | Cognome | Text | No | ✓ |  |
| `cai_age` | Età | Whole number | No | ✓ | Età del cliente |
| `cai_job` | Professione | Text | No | ✓ | Professione del cliente |
| `cai_birthdate` | Data di nascita | DateTime | No | ✓ | Data di nascita del cliente |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `createdby` | Autore | `systemuser` |
| `createdonbehalfby` | Autore (delegato) | `systemuser` |
| `modifiedby` | Autore modifica | `systemuser` |
| `modifiedonbehalfby` | Autore modifica (delegato) | `systemuser` |
| `msdyn_segmentid` | ID segmento | `msdyn_segment` |
| `originatingleadid` | Lead di origine | `lead` |
| `parentaccountid` | Account padre | `account` |
| `territoryid` | Area | `territory` |
| `cai_orgunitid` | Unità organizzativa | `cai_orgunit` |
| `cai_walletid` | Portafoglio | `Portafoglio` |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Elenco delle User Stories trattate
  > ID Tema Sprint Epica Descrizione User Stories User Stories 1 Elementi comuni 1 Header Ricerca Come utente, voglio utilizzare una barra di ricerca sempre accessibile che suggerisca risultati e ricerche
- **AF servizio clienti - MVP0_Sprint1** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 1 Servizio Clienti INDICE 1 Introduzione 4 1.1 Contesto di business 4 1.2 Obiettivi e valore atteso 4 1.3 Principi guida e best practice 5 1.4 Stru
- **AF servizio clienti - MVP0_Sprint1** — §Next best product
  > Si prevede l’utilizzo del motore di raccomandazione AS-IS, che restituisce per anagrafica mediamente 8 suggerimenti, con riferimento a elementi censiti dalla variabile “Prodotto” del catalogo Si preve
- **AF servizio clienti - MVP0_Sprint1** — §Elementi comuni › Menu laterale
  > Si prevedono le menu laterale le seguenti voci: Home  scheda di atterraggio di default Recenti  voce espandibile che mostra le ultime pagine visualizzate dall’utente secondo default D365 Aggiunti v
- **AF servizio clienti - MVP0_Sprint1** — §Elementi comuni › Collaborazione
  > Si prevede la disponibilità di azione di condivisione rapida presente in ogni pagina di CRM posizionata nel ribbon in alto Al click si apre la dropdown ch econsente all’utente di: Copiare collegamento
- **AF servizio clienti - MVP0_Sprint1** — §Home – To-do list
  > Elementi del ribbon Tasto back + Nuovo: Prevista la disponibilità di un’azione rapida in pagina, sempre visibile ed attivabile, che abilità l’avvio del flusso di creazione di una lead spontanea, trami
- **AF servizio clienti - MVP0_Sprint1** — §Scheda cliente (account o contatto)
  > La schermata è accessibile dal menu laterale “Account” se PG o “Contatto” se PF o dalla To-Do list secondo processo descritto nel capitolo corrispondente La scheda cliente rappresenta il punto di cons
- **AF servizio clienti - MVP0_Sprint1** — §Scheda cliente (account o contatto) › Inserisci contatto da scheda cliente
  > Azione prevista dal Widget sequenza temporale Prevista la possibilità di selezionare un contatto ed anche di esitare lead trattate nel corso del contatto Dove non altrimenti espresso, la pagina segue 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1  
Data generazione: 2026-05-07