---
logical: "contact"
display_it: "Contatto"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["contatto"]
processes: ["Obiettivi e valore atteso", "Ruoli e responsabilità – Descrizione dettagliata", "Fonti alimentanti – vista generale", "Configurazioni di agenda", "Riportafogliazioni", "Tassonomia generale", "Classificazione di lead per flusso di origine", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico"]
dataverse_logical: "contact"
is_custom: false
schema_name: "Contact"
generated: "2026-05-07"
---

# Contatto — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `contact`  
**Custom:** No  
**Ownership:** UserOwned

Persona con cui una Business Unit si relaziona, ad esempio un cliente, un fornitore o un collega.

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `accountid` | Account | Lookup | No |  | Identificatore univoco dell'account a cui è associato il contatto. |
| `accountrolecode` | Ruolo | Choice | No |  | Selezionare il ruolo del contatto nella società o nel processo di vendita, ad esempio decisore, dipendente o influenzatore. |
| `contactid` | Contatto | Uniqueidentifier | **Sì** |  | Identificatore univoco del contatto. |
| `createdby` | Autore | Lookup | No |  | Mostra chi ha creato il record. |
| `createdon` | Data creazione | DateTime | No |  | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 36 |
| `description` | Descrizione | Multiline Text | No |  | Digitare informazioni aggiuntive per descrivere il contatto, ad esempio un estratto del sito Web della società. |
| `donotemail` | Non consentire invio di messaggi e-mail | Two options | No |  | Seleziona se il contatto consente l'invio di e-mail dirette da Microsoft Dynamics 365. Se si seleziona Non consentire, Microsoft Dynamics 365 non invi |
| `donotphone` | Non consentire telefonate | Two options | No |  | Selezionare se il contatto accetta le telefonate. Se si seleziona Non consentire, il contatto sarà escluso da qualsiasi impegno di tipo telefonata dis |
| `emailaddress1` | E-mail | Text | No |  | Digitare l'indirizzo e-mail primario per il contatto. |
| `firstname` | Nome | Text | No |  | Digitare il nome del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne di ma |
| `followemail` | Segui impegno e-mail | Two options | No |  | Specifica se consentire o meno che gli impegni dei messaggi e-mail inviati al contatto vengano seguiti fornendo informazioni quali: numero di volte in |
| `ftpsiteurl` | Sito FTP | Text | No |  | Digitare l'URL per il sito FTP del contatto per consentire agli utenti di accedere ai dati e di condividere documenti. |
| `fullname` | Nome completo | Text | No |  | Combina e mostra nome e cognome del contatto per consentire di mostrare il nome completo in visualizzazioni e report. |
| `gendercode` | Sesso | Choice | No |  | Selezionare il sesso del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne d |
| `governmentid` | Codice fiscale/partita IVA | Text | No |  | Digitare il numero di passaporto oppure codice fiscale o partita IVA del contatto da usare in documenti o report. |
| `jobtitle` | Posizione | Text | No |  | Digitare la posizione del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne  |
| `lastname` | Cognome | Text | **Sì** |  | Digitare il cognome del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne di |
| `middlename` | Secondo nome | Text | No |  | Digitare il secondo nome o la relativa iniziale del contatto per assicurare che il contatto sia indicato correttamente. |
| `mobilephone` | Cellulare | Text | No |  | Digitare il numero di cellulare del contatto. |
| `modifiedby` | Autore modifica | Lookup | No |  | Mostra chi ha aggiornato il record per ultimo. |
| `modifiedon` | Data modifica | DateTime | No |  | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsof |
| `originatingleadid` | Lead di origine | Lookup | No |  | Mostra il lead da cui è stato creato il contatto, se è stato creato convertendo un lead in Microsoft Dynamics 365. Usato per associare il contatto ai  |
| `ownerid` | Proprietario | Owner | **Sì** |  | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un ute |
| `parentcustomerid` | Nome società | Customer | No |  | Selezionare l'account padre o il contatto padre per il contatto per fornire un collegamento rapido a dettagli aggiuntivi, ad esempio informazioni fina |
| `salutation` | Titolo | Text | No |  | Digitare il titolo del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nei messaggi e-mail e nelle campa |
| `statecode` | Stato | State | **Sì** |  | Mostra se il contatto è attivo o inattivo. I contatti inattivi sono di sola lettura e non possono essere modificati a meno che non vengano riattivati. |
| `statuscode` | Motivo stato | Status | No |  | Selezionare lo stato del contatto. |
| `telephone1` | Telefono ufficio | Text | No |  | Digitare il numero di telefono principale per questo contatto. |
| `territorycode` | Area | Choice | No |  | Selezionare un'area per il contatto da usare nella segmentazione e nell'analisi. |
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
| `cai_customertype` | Tipologia cliente | Choice | No | ✓ | Se Cliente o Prospect |
| `cai_extinctiondate` | Data estinzione | DateTime | No | ✓ |  |
| `cai_relationshipcode` | Codice titolarità rapporti | Text | No | ✓ |  |
| `cai_relationshipname` | Nome titolarità rapporti | Text | No | ✓ |  |
| `cai_relationshipdate` | Data titolarità rapporti | DateTime | No | ✓ |  |
| `cai_relationshipid` | Titolarità Rapporto | Lookup | No | ✓ | Lookup alla titolarità rapporto (cai_ownershiprelation) |
| `cai_atecocode` | Codice ATECO | Text | No | ✓ |  |
| `cai_fiscalcode` | Codice fiscale | Text | No | ✓ |  |
| `cai_vatcode` | Partita IVA | Text | No | ✓ |  |
| `birthdate` | Compleanno/data di nascita | DateTime | No |  |  |
| `cai_coi` | Cointestazione | Two options | No | ✓ |  |
| `cai_heading` | Intestazione | Text | No | ✓ | Campo predisposto per salvare l'Intestazione in caso venisse passato da flusso |
| `cai_age` | Età | Whole number | No | ✓ | Età del cliente |
| `cai_job` | Professione | Text | No | ✓ | Professione del cliente |
| `birthdate` | Data di nascita | DateTime | No | ✓ | Data di nascita del cliente |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `accountid` | Account | `account` |
| `createdby` | Autore | `systemuser` |
| `modifiedby` | Autore modifica | `systemuser` |
| `originatingleadid` | Lead di origine | `lead` |
| `cai_orgunitid` | Unità organizzativa | `cai_orgunit` |
| `cai_walletid` | Portafoglio | `Portafoglio` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Obiettivi e valore atteso
  > L’obiettivo primario della nuova piattaforma CRM Operativa è abilitare una gestione realmente omnicanale della relazione cliente, superando la frammentazione dei dati e delle attività che spesso carat
- **AF Servizio clienti- MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Servizio clienti- MVP0_Sprint2** — §Fonti alimentanti – vista generale
  > Si prevedono ad alto livello le seguenti fonti dati FrEE: dati della scheda anagrafica Adobe/DB contatti: dati di marketing, campagne ed interazione di marketing con clienti Dati di lead mgmt attualme
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Retail - MVP0_Sprint1** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 1 Retail INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 4 1.4 Struttura del 
- **AF Retail - MVP0_Sprint1** — §Obiettivi e valore atteso
  > L’obiettivo primario della nuova piattaforma CRM Operativa è abilitare una gestione realmente omnicanale della relazione cliente, superando la frammentazione dei dati e delle attività che spesso carat
- **AF Retail - MVP0_Sprint1** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint1** — §Riportafogliazioni
  > Gli item di lead e suggerimenti in volo dovranno essere migrati Per storico contatti , dato su dynamics (non contacthistory) , i dati dovranno essere visibili al nuovo gestore Per gli appuntamenti anc

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07