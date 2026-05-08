---
logical: "lead"
display_it: "Lead"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["lead"]
processes: ["Contesto di business", "Obiettivi e valore atteso", "Principi guida e best practice", "Ruoli e responsabilità – Descrizione dettagliata", "Permessi, coni di visibilità e azioni consentite", "Tassonomia generale", "Fonti alimentanti – vista generale", "Configurazioni di agenda"]
dataverse_logical: "lead"
is_custom: false
schema_name: "Lead"
generated: "2026-05-07"
---

# Lead — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `lead`  
**Custom:** No  
**Ownership:** UserOwned

Prospect o opportunità di vendita potenziale. I lead vengono convertiti in account, contatti o opportunità se sono qualificati, in caso contrario vengono eliminati o archiviati.

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `address1_addressid` | Indirizzo 1: ID | Uniqueidentifier | No |  | Identificatore univoco dell'indirizzo 1. |
| `address1_addresstypecode` | Indirizzo 1: tipo di indirizzo | Choice | No |  | Selezionare il tipo di indirizzo primario. |
| `address1_city` | Comune di residenza (ex Città) | Text | No |  | Digitare la città per l'indirizzo primario. |
| `address1_composite` | Indirizzo 1 | Multiline Text | No |  | Mostra l'indirizzo primario completo. |
| `address1_country` | Stato di cittadinanza (ex Paese/area geografica) | Text | No |  | Digitare il paese per l'indirizzo primario. |
| `address1_county` | Indirizzo 1: regione | Text | No |  | Digitare la regione per l'indirizzo primario. |
| `address1_line1` | Indirizzo di residenza (ex Via 1) | Text | No |  | Digitare la prima riga dell'indirizzo primario. |
| `address1_line2` | Numero civico (ex Via 2) | Text | No |  | Digitare la seconda riga dell'indirizzo primario. |
| `address1_line3` | Via 3 | Text | No |  | Digitare la terza riga dell'indirizzo primario. |
| `address1_name` | Indirizzo 1: nome | Text | No |  | Digitare un nome descrittivo per l'indirizzo primario, ad esempio Sede centrale. |
| `address1_postalcode` | CAP | Text | No |  | Digitare un codice postale per l'indirizzo primario. |
| `address1_stateorprovince` | Provincia di residenza (ex Provincia) | Text | No |  | Digitare la provincia dell'indirizzo primario. |
| `address1_telephone1` | Indirizzo 1: telefono 1 | Text | No |  | Digitare il numero di telefono principale associato all'indirizzo primario. |
| `address1_telephone2` | Indirizzo 1: telefono 2 | Text | No |  | Digitare un secondo numero di telefono associato all'indirizzo primario. |
| `address1_telephone3` | Indirizzo 1: telefono 3 | Text | No |  | Digita un terzo numero di telefono associato all'indirizzo primario. |
| `companyname` | Nome società | Text | No |  | Digitare il nome della società associata al lead. Questa impostazione diventa il nome dell'account quando il lead è qualificato e convertito in un acc |
| `cai_firstndgprospectapplicant` | Contatto | Lookup | No |  | Identificatore univoco del contatto a cui è associato il lead. |
| `createdby` | Autore | Lookup | No |  | Mostra l'utente che ha creato il record. |
| `createdon` | Data creazione | DateTime | No |  | Data e ora di creazione del record. |
| `createdonbehalfby` | Autore (delegato) | Lookup | No |  | Mostra l'utente che ha creato il record per conto di un altro utente. |
| `customerid` | Nominativo | Customer | No |  | Seleziona l'account cliente o il contatto per fornire un link rapido a dettagli aggiuntivi sul cliente, ad esempio informazioni sull'account, impegni  |
| `customeridtype` | Tipo di cliente | EntityName | No |  | N/A |
| `description` | Descrizione | Multiline Text | No |  | Digitare informazioni aggiuntive per descrivere il lead, ad esempio un estratto del sito Web della società. |
| `donotbulkemail` | Non consentire invio di messaggi e-mail in blocco | Two options | No |  | Specificare se il lead accetta l'invio di messaggi e-mail in blocco tramite campagne di marketing o mini-campagne. Se si seleziona Non consentire, il  |
| `donotemail` | Non consentire invio di messaggi e-mail | Two options | No |  | Seleziona se il lead consente l'invio di mailing diretto da Microsoft Dynamics 365. |
| `donotphone` | Non consentire telefonate | Two options | No |  | Specificare se il lead consente le telefonate. |
| `emailaddress1` | E-mail | Text | No |  | Digitare l'indirizzo e-mail primario per il lead. |
| `emailaddress2` | Indirizzo e-mail 2 | Text | No |  | Digitare l'indirizzo e-mail secondario per il lead. |
| `emailaddress3` | Indirizzo e-mail 3 | Text | No |  | Digitare un terzo indirizzo e-mail per il lead. |
| `firstname` | Nome | Text | No |  | Digitare il nome del contatto primario per il lead per garantire che il prospect sia indicato correttamente nelle chiamate di vendita, nei messaggi e- |
| `followemail` | Segui impegno e-mail | Two options | No |  | Specifica se consentire o meno che gli impegni dei messaggi e-mail inviati al lead vengano seguiti fornendo informazioni quali: numero di volte in cui |
| `fullname` | Lead | Text | No |  | Combina e mostra nome e cognome del lead per consentire di mostrare il nome completo in visualizzazioni e report. |
| `industrycode` | Settore | Choice | No |  | Selezionare il settore primario dell'azienda del lead da usare nella segmentazione di marketing e nell'analisi demografica. |
| `jobtitle` | Posizione | Text | No |  | Digitare la posizione del contatto primario per il lead per garantire che il prospect sia indicato correttamente nelle chiamate di vendita, nei messag |
| `lastname` | Cognome | Text | **Sì** |  | Digitare il cognome del contatto primario per il lead per garantire che il prospect sia indicato correttamente nelle chiamate di vendita, nei messaggi |
| `leadid` | Lead | Uniqueidentifier | **Sì** |  | Identificatore univoco del lead. |
| `middlename` | Secondo nome | Text | No |  | Digitare il secondo nome o l'iniziale del contatto primario per il lead per garantire che il prospect sia indicato correttamente. |
| `mobilephone` | Cellulare | Text | No |  | Digitare il numero di cellulare per il contatto primario per il lead. |
| `modifiedby` | Autore modifica | Lookup | No |  | Mostra l'utente che ha eseguito l'ultimo aggiornamento del record. |
| `modifiedon` | Data di modifica | DateTime | No |  | Data e ora di modifica del record. |
| `modifiedonbehalfby` | Autore modifica (delegato) | Lookup | No |  | Mostra l'utente che ha eseguito l'ultimo aggiornamento del record per conto di un altro utente. |
| `need` | Esigenza | Choice | No |  | Scegliere il livello di esigenza per la società del lead. |
| `numberofemployees` | N. dipendenti | Whole number | No |  | Digitare il numero di dipendenti che lavorano presso la società associata al lead da usare nella segmentazione di marketing e nell'analisi demografica |
| `originatingcaseid` | Caso di origine | Lookup | No |  | Questo attributo è usato per i processi aziendali servizio di esempio. |
| `overriddencreatedon` | Data di creazione record | DateTime | No |  | Data e ora di migrazione del record. |
| `ownerid` | In carico a | Owner | **Sì** |  | ID proprietario |
| `owningbusinessunit` | Business Unit proprietaria | Lookup | No |  | Identificatore univoco della Business Unit a cui appartiene il record |
| `parentaccountid` | Account padre per il lead | Lookup | No |  | Scegli un account a cui connettere il lead in modo che la relazione sia visibile nei report e nelle analisi. |
| `parentcontactid` | Contatto padre per il lead | Lookup | No |  | Scegli un contatto a cui connettere il lead in modo che la relazione sia visibile nei report e nelle analisi. |
| `prioritycode` | Score | Choice | No |  | Selezionare la priorità in modo che i clienti preferiti o i problemi critici vengano gestiti rapidamente. |
| `qualifyingopportunityid` | Opportunità qualificante | Lookup | No |  | Scegli l'opportunità in base alla quale il lead è stato qualificato e convertito. |
| `relatedobjectid` | Risposta campagna correlata | Lookup | No |  | Risposta campagna correlata. |
| `revenue` | Ricavi annuali | Currency | No |  | Digitare i ricavi annuali della società associati al lead per indicare informazioni sull'azienda del prospect. |
| `revenue_base` | Ricavi annuali (Base) | Currency | No |  | Value of the Ricavi annuali in base currency. |
| `statecode` | Stato | State | **Sì** |  | Mostra se il lead è aperto o impostato come qualificato o non qualificato. I lead impostati come qualificati e non qualificati sono di sola lettura e  |
| `statuscode` | Motivo stato | Status | No |  | Selezionare lo stato del lead. |
| `subject` | Segmento | Text | **Sì** |  | Digitare un argomento o un nome descrittivo, ad esempio l'ordine previsto, il nome della società o l'elenco marketing di origine, per identificare il  |
| `telephone1` | Telefono di contatto (ex Telefono ufficio) | Text | No |  | Digitare il numero di cellulare dell'ufficio per il contatto primario per il lead. |
| `telephone2` | Telefono abitazione | Text | No |  | Digitare il numero di telefono dell'abitazione per il contatto primario per il lead. |
| `telephone3` | Altro telefono | Text | No |  | Digitare un numero di telefono alternativo per il contatto primario per il lead. |
| `websiteurl` | Sito Web | Text | No |  | Digitare l'URL del sito Web della società associata al lead. |
| `cai_leadtype` | Tipologia Lead | Choice | No | ✓ | Tipologia della Lead |
| `cai_leadformat` | Formato del Lead | Choice | No | ✓ |  |
| `cai_leadscore` | Lead Score o Temperatura o Priorità | Choice | No | ✓ |  |
| `cai_mainlead` | Lead Principale | Two options | No | ✓ |  |
| `cai_segmentname` | Segmento del cliente | Text | No | ✓ | Il valore del segmento del cliente cui è riferita la Lead |
| `cai_retailassignmentdeadlinelefttime` | Tempo rimanente alla scadenza assegnazione Rete | Whole number | No | ✓ | Da impostare la regola di calcolo: "Data scadenza - Now" |
| `cai_retailassignmentdeadlinedate` | Data scadenza assegnazione Rete | DateTime | No | ✓ |  |
| `cai_leadcode` | Codice Lead | Text | No | ✓ |  |
| `cai_takeinchargedate` | Data presa in carico Lead | DateTime | No | ✓ |  |
| `cai_customerleadttype` | Tipologia Lead-Cliente | Choice | No | ✓ | Indica la tipologia di Lead: Lead Cliente Anagrafato / Lead Prospect / Lead Mutuo Cliente / Lead Mutuo Ex-Cliente / Lead Mutuo Prospect |
| `cai_leadactivefrom` | Lead attiva da | Whole number | No | ✓ |  |
| `cai_assigneduserid` | Utente incaricato | Lookup | No | ✓ |  |
| `cai_futureinterestdate` | Data interesse futuro | DateTime | No | ✓ |  |
| `cai_productid` | Prodotto | Lookup | No | ✓ |  |
| `cai_sourcerequestid` | Fonte Richiesta | Lookup | No | ✓ | Campo Fonte richiesta, ricevuto in ricezione lead (ex Ticket) |
| `cai_iscustomer` | Cliente? | Choice | No | ✓ | Campo Cliente?, ricevuto in ricezione lead (ex Ticket) |
| `cai_productserviceinterest` | Prodotto Servizio Interesse | Text | No | ✓ | Campo Prodotto Servizio Interesse, ricevuto in ricezione lead (ex Ticket) |
| `cai_contactusformtype` | Tipologia Form Contattaci | Text | No | ✓ | Campo Tipologia Form Contattaci, ricevuto in ricezione lead (ex Ticket) |
| `cai_messagetype` | Famiglia Prodotto | Text | No | ✓ | Campo Famiglia Prodotto, ricevuto in ricezione lead (ex Ticket) |
| `cai_attemptsbeforeescalationtocustomerservice` | Numero tentativi prima del passaggio al Servizio clienti | Whole number | No | ✓ | Il numero di tentativi massimo previsto prima del passaggio al servizio clienti |
| `cai_brokermortgageloanid` | Canale intermediario mutuo | Lookup | No | ✓ | L'intermediario o il portale banca che ha generato la richiesta di mutuo |
| `cai_firstassignment` | Ambito di prima assegnazione | Choice | No | ✓ | Specifica a quale ambito è stata assegnata la lead per la prima volta dalla creazione (Global Option Set)
Rete
Servizio Clienti |
| `cai_sendingstatustofree` | Invio lead a Free | Choice | No | ✓ | Questo valore guiderà l'invio della Lead verso Free e indicherà se sia stato ricevuto un errore in fase di invio |
| `cai_errorsendingtofree` | Errore in invio a FrEE | Multiline Text | No |  | Testo dell'errore riscontrato in invio lead a Free |
| `cai_campaignid` | Campagna | Lookup | No | ✓ | La campagna di appartenenza del Suggerimento |
| `cai_campaignofferid` | Offerta campagna | Lookup | No | ✓ | L'offerta in cui rientra il Suggerimento |
| `cai_channel` | Canale | Text | No | ✓ | Canale di destinazione del suggerimento |
| `cai_ndgcode` | Codice NDG | Text | No | ✓ | Codice ndg del cliente cui è riferito il suggerimento |
| `cai_treatmentcode` | Codice Treatment | Text | No | ✓ | Il codice Treatment (codice trattamento) del Suggerimento |
| `cai_migrated` | Lead/Suggerimento migrato | Two options | No | ✓ | Indica se il record sia stato migrato o meno |
| `cai_customertype` | Tipo di anagrafica | Two options | **Sì** | ✓ | Indica se si tratta di un cliente Account o Contatto |
| `cai_plh1` | Placeholder campagna 1 | Text | No | ✓ |  |
| `cai_plh2` | Placeholder campagna 2 | Text | No | ✓ |  |
| `cai_plh3` | Placeholder campagna 3 | Text | No | ✓ |  |
| `cai_plh4` | Placeholder campagna 4 | Text | No | ✓ |  |
| `cai_plh5` | Placeholder campagna 5 | Text | No | ✓ |  |
| `cai_plh6` | Placeholder campagna 6 | Text | No | ✓ |  |
| `cai_plh7` | Placeholder campagna 7 | Text | No | ✓ |  |
| `cai_plh8` | Placeholder campagna 8 | Text | No | ✓ |  |
| `cai_plh9` | Placeholder campagna 9 | Text | No | ✓ |  |
| `cai_plh10` | Placeholder campagna 10 | Text | No | ✓ |  |
| `cai_currentassignment` | Ambito di assegnazione corrente | Choice | No | ✓ | Specifica a quale ambito è correntemente assegnata la lead (Global Option Set)
Rete
Servizio Clienti |
| `cai_concurrencyperiodstartdate` | Data di inizio del periodo di concorrenza | DateTime | No | ✓ |  |
| `cai_concurrencyperiodlefttime` | Tempo rimanente al periodo di concorrenza | Whole number | No | ✓ | Da impostare la regola di calcolo: "Now - Data inizio del periodo di concorrenza" |
| `cai_visibility` | Ambiti di visibilità della Lead | Choice | No | ✓ | Specifica gli ambiti di visibilità della Lead (Global Option Set)
Rete
Servizio Clienti
Concorrenza |
| `cai_passedthroughretail` | Transitata su Retail | Two options | No | ✓ |  |
| `cai_passedthroughcustomerservice` | Transitata su Customer Service | Two options | No | ✓ |  |
| `cai_receiveddate` | Data di ricezione indicata sul record ricevuto dall'esterno (valido per ex ticket) | DateTime | No | ✓ |  |
| `cai_origininformations` | Origine lead/suggerimento | Text | No |  | Riporta informazioni sulla tipologia di lead e sul prodotto associato ed eventualmente il CJ di riferimento |
| `cai_leadloanschannels` | Canali lead mutui | Choice | No | ✓ |  |
| `cai_number` | Numero | Whole number | No | ✓ |  |
| `cai_loanreason` | Motivazione | Choice | No | ✓ |  |
| `cai_loanexpired` | Scaduto | Two options | No | ✓ |  |
| `cai_branchrequested` | Filiale richiesta | Text | No | ✓ |  |
| `cai_consaprequest` | Richiesta Consap | Two options | No | ✓ |  |
| `cai_forwardingdate` | Data di inoltro | DateTime | No | ✓ |  |
| `cai_expirationdate` | Data scadenza | DateTime | No | ✓ |  |
| `cai_propertysearchstatus` | Stato ricerca immobile | Choice | No | ✓ |  |
| `cai_requestpurpose` | Finalità della richiesta | Choice | No | ✓ |  |
| `cai_fulldigitalloan` | Mutuo full Digital | Two options | No | ✓ |  |
| `cai_substandardloans` | Incagli | Two options | No | ✓ |  |
| `cai_substandardloansstartdate` | Data inizio incagli | DateTime | No | ✓ |  |
| `cai_nonperformingloansstartdate` | Data inizio sofferenze | DateTime | No | ✓ |  |
| `cai_substandardloansenddate` | Data fine incagli | DateTime | No | ✓ |  |
| `cai_nonperformingloansenddate` | Data fine sofferenze | DateTime | No | ✓ |  |
| `cai_alreadybankcustomer` | Già cliente banca pres | Two options | No | ✓ |  |
| `cai_firstndgapplicant` | NDG Rich. 1 | Text | No | ✓ |  |
| `cai_firstndgprospectapplicant` | NDG Prospect Rich. 1 | Text | No | ✓ |  |
| `cai_firstapplicantfirstname` | Nome Rich. 1 | Text | No | ✓ |  |
| `cai_firstapplicantlastname` | Cognome Rich. 1 | Text | No |  |  |
| `cai_firstapplicantfiscalcode` | Codice Fiscale Rich. 1 | Text | No | ✓ |  |
| `cai_firstapplicantbirthdate` | Data di nascita Rich. 1 | DateTime | No | ✓ |  |
| `cai_firstapplicantbirthcountry` | Stato di nascita Rich. 1 | Text | No |  |  |
| `cai_firstapplicantcitizenshipcountry` | Stato di cittadinanza Rich. 1 | Text | No |  |  |
| `cai_firstapplicantbirthprovince` | Provincia di nascita Rich. 1 | Text | No |  |  |
| `cai_firstndgapplicantbirthcity` | Comune di nascita Rich. 1 | Text | No |  |  |
| `cai_firstapplicantgendercode` | Sesso Rich. 1 | Choice | No | ✓ |  |
| `cai_firstapplicantmaritalstatus` | Stato civile Rich. 1 | Choice | No | ✓ |  |
| `cai_firstapplicantmembersofthehousehold` | Componenti nucleo famigliare Rich. 1 | Whole number | No | ✓ |  |
| `cai_secondndgapplicant` | Secondo richiedente NDG | Text | No | ✓ |  |
| `cai_secondndgprospectapplicant` | Secondo richiedente Prospect | Text | No | ✓ |  |
| `cai_dependentfamilymember` | Familiari a carico | Whole number | No | ✓ |  |
| `cai_currentoccupation` | Occupazione attuale | Text | No | ✓ |  |
| `cai_employer` | Datore di lavoro | Text | No | ✓ |  |
| `cai_pepcrimeamlinformationpresence` | Presenza informazione Pep/Crime/Aml” | Choice | No | ✓ |  |
| `cai_lengthofservice` | Anzianità lavorativa | Whole number | No | ✓ |  |
| `cai_jobdescription` | Descrizione occupazione | Multiline Text | No | ✓ |  |
| `address2_stateorprovince` | Provincia di nascita | Text | No |  | Digitare la provincia dell'indirizzo secondario. |
| `cai_membersofthehousehold` | Componenti nucleo famigliare | Whole number | No | ✓ |  |
| `cai_jobposition` | Posizione lavorativa | Choice | No | ✓ |  |
| `cai_personalincome` | Reddito personale | Currency | No | ✓ |  |
| `cai_othersincomesources` | Altre fonti di reddito | Text | No | ✓ |  |
| `cai_monthlypayment` | Mensilità | Whole number | No | ✓ |  |
| `cai_requestpurpose` | Finalità della richiesta | Choice | No | ✓ |  |
| `cai_propertyvalue` | Valore immobile | Currency | No | ✓ |  |
| `cai_loanamount` | Importo mutuo | Currency | No | ✓ |  |
| `cai_typeofrate` | Tipo di tasso | Choice | No | ✓ |  |
| `cai_duration` | Durata | Whole number | No | ✓ |  |
| `cai_ltv` | LTV % | Decimal | No | ✓ |  |
| `cai_rr` | R/R% | Decimal | No | ✓ |  |
| `cai_institute` | Istituto | Text | No | ✓ |  |
| `cai_taeg` | TAEG | Decimal | No | ✓ |  |
| `cai_tan` | TAN | Decimal | No | ✓ |  |
| `cai_spread` | Spread | Decimal | No | ✓ |  |
| `cai_calculatedpaymentamount` | Importo della rata calcolato | Currency | No | ✓ |  |
| `cai_productname` | Nome prodotto | Text | No | ✓ |  |
| `cai_initialexpenses` | Spese iniziali | Currency | No | ✓ |  |
| `cai_propertysearchstatus` | Stato ricerca immobile | Choice | No | ✓ |  |
| `cai_semaphore` | Semaforo | Choice | No | ✓ |  |
| `cai_propertycity` | Comune immobile | Text | No | ✓ |  |
| `cai_properyprovince` | Provincia immobile | Text | No | ✓ |  |
| `cai_propertytype` | Tipo immobile | Choice | No | ✓ |  |
| `cai_totalarea` | Superficie totale | Choice | No | ✓ |  |
| `cai_marketvalue` | Valore di mercato | Currency | No | ✓ |  |
| `cai_propertycondition` | Condizione immobile | Choice | No | ✓ |  |
| `cai_propertywithmortgage` | Immobile con ipoteca | Two options | No | ✓ |  |
| `cai_energyclass` | Classe energetica | Choice | No | ✓ |  |
| `cai_firstloan` | Primo finanziamento | Choice | No | ✓ |  |
| `cai_remainingloanamount` | Importo residuo finanziamento | Currency | No | ✓ |  |
| `cai_firstloanmonthlypayment` | Rata mensile primo finanziamento | Currency | No | ✓ |  |
| `cai_earlyterminationfirstloan` | Estinzione anticipata primo finanziamento | Two options | No | ✓ |  |
| `cai_existingloanbank` | Banca del mutuo in essere | Choice | No | ✓ |  |
| `cai_existingloansigningdate` | Data stipula mutuo in essere | DateTime | No | ✓ |  |
| `cai_existingloanpaymentamount` | Importo rata mutuo in essere | Currency | No | ✓ |  |
| `cai_addionalnotes` | Note aggiuntive | Multiline Text | No | ✓ |  |
| `cai_practicecode` | Codice pratica | Text | No | ✓ |  |
| `cai_paymentmonth` | Mese erogazione | Text | No | ✓ |  |
| `cai_paymentamount` | Importo | Currency | No | ✓ |  |
| `cai_paid` | Pagato | Two options | No | ✓ |  |
| `cai_invoicereference` | Fattura di riferimento | Text | No | ✓ |  |
| `cai_loanpurposewithchoice` | Finalità mutuo con scelta | Choice | No | ✓ |  |
| `cai_paymentmodewithchoice` | Modalità erogazione con scelta | Choice | No | ✓ |  |
| `cai_administrativechecksinprogress` | In corso di verifiche autorizzative | Two options | No | ✓ |  |
| `cai_authorized` | Autorizzato | Two options | No | ✓ |  |
| `cai_secondapplicantbirthdate` | DataDiNascitaRich2 |  | No | ✓ |  |
| `cai_secondapplicantbirthcountry` | StatoDiNascitaRich2 |  | No | ✓ |  |
| `cai_secondapplicantcitizenshipcountry` | StatoDiCittadinanzaRich2 |  | No | ✓ |  |
| `cai_secondapplicantbirthprovince` | ProvinciaDiNascitaRich2 |  | No | ✓ |  |
| `cai_secondndgapplicantbirthcity` | ComuneDiNascitaRich2 |  | No | ✓ |  |
| `cai_secondapplicantgendercode` | SessoRich2 |  | No | ✓ |  |
| `cai_secondapplicantmaritalstatus` | StatoCivileRich2 |  | No | ✓ |  |
| `cai_secondapplicantmembersofthehousehold` | ComponentiNucleoFamigliareRich2 |  | No | ✓ |  |
| `cai_secondapplicantresidencecity` | ComuneDiResidenzaRich2 |  | No | ✓ |  |
| `cai_secondapplicantresidenceprovince` | ProvinciaDiResidenzaRich2 |  | No | ✓ |  |
| `cai_secondapplicantresidencepostalcode` | CAPRich2 |  | No | ✓ |  |
| `cai_secondapplicantresidenceaddress` | IndirizzoDiResidenzaRich2 |  | No | ✓ |  |
| `cai_secondapplicantresidencehousenumber` | NumeroCivicoRich2 |  | No | ✓ |  |
| `cai_secondapplicantprimaryphone` | TelefonoPrincipaleRich2 |  | No | ✓ |  |
| `cai_secondapplicantemailaddress` | E-mailRich2 |  | No | ✓ |  |
| `cai_secondapplicantotherphone` | AltroTelefonoRich2 |  | No | ✓ |  |
| `cai_secondapplicantjobposition` | PosizioneLavorativaRich2 |  | No | ✓ |  |
| `cai_secondapplicantcurrentoccupation` | OccupazioneAttualeRich2 |  | No | ✓ |  |
| `cai_secondapplicantjobdescription` | DescrizioneOccupazioneRich2 |  | No | ✓ |  |
| `cai_secondapplicantlengthofservice` | AnzianitaLavorativaRich2 |  | No | ✓ |  |
| `cai_secondapplicantpersonalincome` | RedditiPersonaliRich2 |  | No | ✓ |  |
| `cai_secondapplicantdependentfamilymember` | FamiliariAcaricoRich2 |  | No | ✓ |  |
| `cai_secondapplicantothersincomesources` | AltreFontiDiRedditoRich2 |  | No | ✓ |  |
| `cai_secondapplicantemployer` | DatoreDiLavoroRich2 |  | No | ✓ |  |
| `cai_secondapplicantcurrentemploymentdate` | DataImpiegoAttualeRich2 |  | No | ✓ |  |
| `cai_secondapplicantmonthlypayment` | MensilitaRich2 |  | No | ✓ |  |
| `cai_brokerguid` | Guid intermediario | Text | No | ✓ |  |
| `cai_authorid` | Autore creazione opportunità | lookup | No | ✓ | Utente che ha creato il record di opportunità. Pensato per tracciare l'informazione per gli utenti del mondo Private |
| `cai_opportunityprospectname` | Nome prospect opportunità | Text | No | ✓ | Nome del prospect |
| `cai_opportunityprospectlastname` | Cognome prospect opportunità | Text | No | ✓ | Cognome del prospect |
| `cai_opportunityprospectlegalname` | Ragione sociale prospect opportunità | Text | No | ✓ | Ragione sociale del prospect |
| `cai_opportunityprospectemail` | Email prospect opportunità | Text | No | ✓ | Email del prospect |
| `cai_opportunityprospectphone` | Telefono prospect opportunità | Text | No | ✓ | Telefono del prospect |
| `cai_opportunityprospectvalue` | Valore opportunità prospect | Decimal | No | ✓ | Valore del opportunità del prospect |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_firstndgprospectapplicant` | Contatto | `contact` |
| `createdby` | Autore | `systemuser` |
| `createdonbehalfby` | Autore (delegato) | `systemuser` |
| `modifiedby` | Autore modifica | `systemuser` |
| `modifiedonbehalfby` | Autore modifica (delegato) | `systemuser` |
| `originatingcaseid` | Caso di origine | `incident` |
| `owningbusinessunit` | Business Unit proprietaria | `businessunit` |
| `parentaccountid` | Account padre per il lead | `account` |
| `parentcontactid` | Contatto padre per il lead | `contact` |
| `qualifyingopportunityid` | Opportunità qualificante | `opportunity` |
| `relatedobjectid` | Risposta campagna correlata | `campaignresponse` |
| `cai_assigneduserid` | Utente incaricato | `systemuser` |
| `cai_productid` | Prodotto | `cai_product` |
| `cai_sourcerequestid` | Fonte Richiesta | `cai_requestorigin` |
| `cai_brokermortgageloanid` | Canale intermediario mutuo | `cai_brokermortgageloan` |
| `cai_campaignid` | Campagna | `cai_campaign` |
| `cai_campaignofferid` | Offerta campagna | `cai_campaignoffer` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Contesto di business
  > Crédit Agricole ha intrapreso un’iniziativa per generare nuove opportunità di business attraverso l’industrializzazione dei Customer Journey di Marketing, la personalizzazione dei canali digitali e l’
- **AF Servizio clienti- MVP0_Sprint2** — §Obiettivi e valore atteso
  > L’obiettivo primario della nuova piattaforma CRM Operativa è abilitare una gestione realmente omnicanale della relazione cliente, superando la frammentazione dei dati e delle attività che spesso carat
- **AF Servizio clienti- MVP0_Sprint2** — §Principi guida e best practice
  > Nella progettazione del nuovo CRM sono stati adottati i seguenti principi guida, in linea con le best practice del settore e le soluzioni leader di mercato. Centralità dell’utente: interfacce intuitiv
- **AF Servizio clienti- MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Servizio clienti- MVP0_Sprint2** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Cono di visibilità clienti Livello gerarchico Visibilità agende di Retail Visibilità agende Servizio clienti Fissare appuntamento Riprogrammare Appuntamento Cancellare appuntamento Centro Tutti 
- **AF Servizio clienti- MVP0_Sprint2** — §Tassonomia generale
  > In ambito CRM, si definisce “Appuntamento” ogni incontro associato ad una lead o suggerimento di un cliente/prospect e che richieda un’esitazione In ambito CRM, si definisce “Impegno” ogni attività ch
- **AF Servizio clienti- MVP0_Sprint2** — §Fonti alimentanti – vista generale
  > Si prevedono ad alto livello le seguenti fonti dati FrEE: dati della scheda anagrafica Adobe/DB contatti: dati di marketing, campagne ed interazione di marketing con clienti Dati di lead mgmt attualme
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07