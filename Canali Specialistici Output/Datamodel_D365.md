# Datamodel Dynamics 365 - Credit Agricole Italia

> Documento generato automaticamente dal file Datamodel_D365.xlsx.
> Utilizzare questo documento come base dati per la generazione di query FetchXML / Web API.

## Indice delle Entità

1. [Agenda preferita](#agenda-preferita)
2. [Anagrafe campagna](#anagrafe-campagna)
3. [Anagrafe offerte campagna](#anagrafe-offerte-campagna)
4. [Argomento (cai_argument)](#argomento-cai_argument)
5. [Appuntamento (Appointment)](#appuntamento-appointment)
6. [Appuntamento Ricorrente](#appuntamento-ricorrente)
7. [Azienda (Account)](#azienda-account)
8. [Business Unit (BusinessUnit)](#business-unit-businessunit)
9. [Azione suggerita](#azione-suggerita)
10. [Campi regola smist.](#campi-regola-smist)
11. [Canale di contatto](#canale-di-contatto)
12. [Canale intermediario mutuo](#canale-intermediario-mutuo)
13. [Contatto generico](#contatto-generico)
14. [Cliente (Contact)](#cliente-contact)
15. [Configurazioni](#configurazioni)
16. [Conflitto](#conflitto)
17. [Elemento Coda Lead](#elemento-coda-lead)
18. [Esito Lead](#esito-lead)
19. [Esitazione](#esitazione)
20. [Gruppo prodotto](#gruppo-prodotto)
21. [Regola smistamento Lead](#regola-smistamento-lead)
22. [Lead (Lead)](#lead-lead)
23. [Fonte Richiesta](#fonte-richiesta)
24. [Macro prodotto](#macro-prodotto)
25. [Macro categoria](#macro-categoria)
26. [Membro Portafoglio](#membro-portafoglio)
27. [Natura Giuridica](#natura-giuridica)
28. [Next best product](#next-best-product)
29. [Obiettivo Esito Lead](#obiettivo-esito-lead)
30. [Obiettivo Marketing](#obiettivo-marketing)
31. [Portafoglio](#portafoglio)
32. [Richiesta appuntamento](#richiesta-appuntamento)
33. [Prodotto (cai_product)](#prodotto-cai_product)
34. [Prodotto NBO](#prodotto-nbo)
35. [Profilo Utente](#profilo-utente)
36. [Ruolo Modi](#ruolo-modi)
37. [Segmento](#segmento)
38. [Telefonata (PhoneCall)](#telefonata-phonecall)
39. [Titolarità Rapporto](#titolarità-rapporto)
40. [Unità organizzativa](#unità-organizzativa)
41. [Utente (SystemUser)](#utente-systemuser)
42. [SC Sessione di Esitazione](#sc-sessione-di-esitazione)
43. [SC Sessione Esitazione Params](#sc-sessione-esitazione-params)
44. [PRV Nucleo](#prv-nucleo)
45. [PRV Componenti nucleo](#prv-componenti-nucleo)
46. [PRV Legami componenti Nucleo](#prv-legami-componenti-nucleo)
47. [PRV Evento](#prv-evento)
48. [PRV Accompagnatore evento](#prv-accompagnatore-evento)
49. [PRV Livello gerarchico](#prv-livello-gerarchico)
50. [PRV Gruppi economici](#prv-gruppi-economici)
51. [PRV Collegamenti NDG](#prv-collegamenti-ndg)
52. [PRV Recapiti](#prv-recapiti)
53. [PRV Mint Fenice](#prv-mint-fenice)
54. [PRV Budget](#prv-budget)
55. [PRV Centrale rischi](#prv-centrale-rischi)
56. [PRV Opportunità](#prv-opportunità)
57. [PRV Coge giornaliera](#prv-coge-giornaliera)

---

## 1. Agenda preferita

| Proprietà | Valore |
|---|---|
| **Entity Name** | Agenda preferita |
| **Plural Display Name** | Agende preferite |
| **Schema Name** | `cai_preferredcalendar` |
| **Logical Name** | `cai_preferredcalendar` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| cai_preferredcalendarid | cai_preferredcalendarid | Agenda preferita | Uniqueidentifier |  | False |  |  |  |
| cai_code | cai_code | Codice Agenda preferita | Text |  | True | Simple | Automumber CALPRF00000001 |  |
| cai_systemuserid | cai_systemuserid | Utente | Lookup | Utente che esprime la preferenza | True | Simple | Lookup a systemuser | Yes |
| cai_colleagueid | cai_colleagueid | Collega | Lookup | Utente di cui si sta salvando l'agenda | True | Simple | Lookup a systemuser | Yes |
| cai_name | cai_name | Name | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Agenda preferita | False | Simple | States: ; 0: Active ; 1: Inactive | Yes |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Agenda preferita | False | Simple | States: ; 1: Active ; 2: Inactive | Yes |
| cai_othercalendarpreferred | cai_othercalendarpreferred | Altra agenda preferita | Two options | Flag che indica se la "altra agenda" sia o meno segnata come preferita | True | Simple |  |  |

---

## 2. Anagrafe campagna

| Proprietà | Valore |
|---|---|
| **Entity Name** | Anagrafe campagna |
| **Plural Display Name** | Anagrafi campagna |
| **Schema Name** | `cai_campaign` |
| **Logical Name** | `cai_campaign` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| cai_campaignid | cai_campaignid | Campagna | Uniqueidentifier |  | False |  |  |  |
| cai_code | cai_code | Codice campagna | Text |  | True | Simple | Autonumber pattern CMPCRM00000001 |  |
| cai_adobecode | cai_adobecode | Codice campagna adobe | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_adobeid | cai_adobeid | ID campagna adobe | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_startdate | cai_startdate | Data di avvio | DateTime |  | True | Simple |  | Yes |
| cai_enddate | cai_enddate | Data di scadenza | DateTime |  | True | Simple |  | Yes |
| cai_goal | cai_goal | Obiettivo | Text | ? | True | Simple | Format: Text ; Max length: 100 |  |
| cai_target | cai_target | Target | Text | ? | True | Simple | Format: Text ; Max length: 100 |  |
| cai_mode | cai_mode | Modalità | Text | ? | True | Simple | Format: Text ; Max length: 100 |  |
| cai_channel | cai_channel | Canale | Text | ? | True | Simple | Format: Text ; Max length: 100 |  |
| cai_frequency | cai_frequency | Frequenza | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_type | cai_type | Tipo | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_duration | cai_duration | Durata validità | Whole number |  | True | Simple |  |  |
| cai_segment | cai_segment | Segmento | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_redemption | cai_redemption | Redemption | Text | ? | True | Simple | Format: Text ; Max length: 100 |  |
| cai_description | cai_description | Descrizione | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_name | cai_name | Name | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Argomento | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Argomento | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_status | cai_status | Stato campagna | Text | Stato della campagna riportato sul flusso | True | Simple | Format: Text ; Max length: 100 | Yes |
| cai_inventoryschedule | cai_inventoryschedule | Scadenziere/Magazzino | Two options | Indica se le offerte della campagna siano da intendere come Scadenziere o Magazzino | True | Simple |  |  |

---

## 3. Anagrafe offerte campagna

| Proprietà | Valore |
|---|---|
| **Entity Name** | Offerta campagna |
| **Plural Display Name** | Offerte campagna |
| **Schema Name** | `cai_campaignoffer` |
| **Logical Name** | `cai_campaignoffer` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| cai_campaignofferid | cai_campaignofferid | Offerta campagna | Uniqueidentifier |  | False |  |  |  |
| cai_code | cai_code | Codice offerta campagna | Text |  | True | Simple | Autonumber pattern OFFCRM00000001 |  |
| cai_adobecode | cai_adobecode | Codice offerta campagna adobe | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_adobeid | cai_adobeid | ID offerta campagna adobe | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_startdate | cai_startdate | Data di avvio | DateTime |  | True | Simple |  | Yes |
| cai_enddate | cai_enddate | Data di scadenza | DateTime |  | True | Simple |  | Yes |
| cai_txt | cai_txt | TXT | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_channel | cai_channel | Canale | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_contenttype | cai_contenttype | Tipo contenuto | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_contentcode | cai_contentcode | Codice contenuto | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_activitytype | cai_activitytype | Tipo attività | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_argumentid | cai_argumentid | Argomento | Lookup | Lookup a cai_argument | True | Simple | Lookup a cai_argument | Yes |
| cai_duration | cai_duration | Durata validità | Whole number |  | True | Simple |  | Yes |
| cai_description | cai_description | Descrizione | Text |  | True | Simple | Format: Text ; Max length: 100 | Yes |
| cai_name | cai_name | Name | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Argomento | False | Simple | States: ; 0: Active ; 1: Inactive | Yes |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Argomento | False | Simple | States: ; 1: Active ; 2: Inactive | Yes |
| cai_productid | cai_productid | Prodotto | Lookup | Prodotto da associare all'offerta | False | Simple | Target: cai_product | Yes |

---

## 4. Argomento (cai_argument)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Argomento |
| **Plural Display Name** | Argomenti |
| **Description** | Definisce gli Argomenti usati nel processo di Esitazione di Contatti e Appuntamenti |
| **Schema Name** | `cai_argument` |
| **Logical Name** | `cai_argument` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| cai_argumentid | cai_argumentid | Argomento | Uniqueidentifier |  | False |  |  |  |
| cai_code | cai_code | Codice Argomento | Text |  | True | Simple | Format: Text ; Max length: 100 | Yes |
| cai_colorcode | cai_colorcode | Colore | Text |  | True | Simple | Format: Text ; Max length: 100 | Yes |
| cai_name | cai_name | Name | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Argomento | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Argomento | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_minterclass | cai_minterclass | Classe minter | Choice |  | True | Simple | Global Option set "Classi minter": ; 100000000: Bassa ; 100000001: Media ; 100000002: Alta ; 100000003: Molto alta | Yes |

---

## 5. Appuntamento (Appointment)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Appuntamento |
| **Plural Display Name** | Appuntamenti |
| **Description** | Impegno che rappresenta un intervallo di tempo di cui sono indicati l'ora di inizio, quella di fine e la durata. |
| **Schema Name** | `Appointment` |
| **Logical Name** | `appointment` |
| **Object Type Code** | 4201 |
| **Is Custom Entity** | False |
| **Ownership Type** | UserOwned |

### Campi

| Field Type | Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Standard (Not used / System-owned) | activityid | ActivityId | Appuntamento | Uniqueidentifier | Identificatore univoco dell'appuntamento. | False | Simple | SystemRequired |  |  |
| Standard (Not used / System-owned) | activitytypecode | ActivityTypeCode | Tipo di impegno | EntityName | Tipo di impegno. | False | Simple | SystemRequired |  |  |
| Standard (Used / Configured) | createdby | CreatedBy | Autore | Lookup | Mostra chi ha creato il record. | False | Simple | None | Targets: ; systemuser |  |
| Standard (Used / Configured) | createdon | CreatedOn | Data creazione | DateTime | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| Standard (Used / Configured) | description | Description | Descrizione | Multiline Text | Digita informazioni aggiuntive per descrivere lo scopo dell'appuntamento. | False | Simple | None | Format: Text ; Max length: 1048576 | Yes |
| Standard (Not used / System-owned) | globalobjectid | GlobalObjectId | Appuntamento di Outlook | Text | Mostra l'ID dell'appuntamento in Microsoft Office Outlook. L'ID viene usato per sincronizzare l'appuntamento tra Microsoft Dynamics 365 e l'account di Exchange corretto. | False | Simple | None | Format: Text ; Max length: 300 |  |
| Standard (Not used / System-owned) | instancetypecode | InstanceTypeCode | Tipo di appuntamento | Choice | Tipo di istanza di una serie ricorrente. | False | Simple | SystemRequired | Options: ; 0: Non ricorrente ; 1: Master ricorrente ; 2: Istanza ricorrente ; 3: Eccezione ricorrente ; 4: Eccezione ricorrente futura ; Default: 0 |  |
| Standard (Not used / System-owned) | isalldayevent | IsAllDayEvent | Giornata intera | Two options | Selezionare se l'appuntamento è un evento per l'intera giornata per assicurare che le risorse richieste siano pianificate per l'intera giornata. | False | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Standard (Not used / System-owned) | isdraft | IsDraft | IsDraft | Two options | Informazioni che indicano se l'appuntamento è una bozza. | False | Simple | SystemRequired | True: Sì ; False: No ; Default Value: False |  |
| Standard (Not used / System-owned) | isonlinemeeting | IsOnlineMeeting | Riunione online | Two options | Visualizza se si tratta di una riunione online. | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Standard (Not used / System-owned) | location | Location | Luogo | Text | Digitare il luogo in cui si svolgerà l'appuntamento, ad esempio una sala conferenze o l'ufficio del cliente. | False | Simple | None | Format: Text ; Max length: 200 | Yes |
| Standard (Used / Configured) | modifiedby | ModifiedBy | Autore modifica | Lookup | Mostra chi ha aggiornato il record per ultimo. | False | Simple | None | Targets: ; systemuser |  |
| Standard (Used / Configured) | modifiedon | ModifiedOn | Data modifica | DateTime | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| Standard (Used / Configured) | modifiedonbehalfby | ModifiedOnBehalfBy | Autore modifica (delegato) | Lookup | Mostra chi ha creato il record per conto di un altro utente. | False | Simple | None | Targets: ; systemuser |  |
| Standard (Not used / System-owned) | onlinemeetingid | OnlineMeetingId | ID riunione online | Text | Mostra l'ID della riunione online. | True | Simple | None | Format: Text ; Max length: 300 |  |
| Standard (Not used / System-owned) | onlinemeetingjoinurl | OnlineMeetingJoinUrl | URL partecipazione riunione online | Text | Mostra l'URL di partecipazione alla riunione online. | True | Simple | None | Format: Text ; Max length: 600 |  |
| Standard (Not used / System-owned) | onlinemeetingtype | OnlineMeetingType | Tipo di riunione online | Choice | Visualizza il tipo di riunione online. | True | Simple | None | Options: ; 1: Riunione di Teams ; Default: N/A |  |
| Standard (Not used / System-owned) | optionalattendees | OptionalAttendees | Partecipanti facoltativi | PartyList | Immettere account, contatti, lead, utenti o attrezzature non necessari per l'appuntamento ma che possono partecipare facoltativamente. | False | Simple | None |  |  |
| Standard (Not used / System-owned) | organizer | Organizer | Organizzatore | PartyList | Immettere l'utente incaricato di coordinare o condurre l'appuntamento per assicurare che quest'ultimo venga mostrato nella visualizzazione Impegni personali dell'utente. | False | Simple | None |  |  |
| Standard (Not used / System-owned) | originalstartdate | OriginalStartDate | Data di inizio originale | DateTime | Data di inizio originale dell'appuntamento. | False | Simple | None | Format: DateAndTime |  |
| Standard (Used / Configured) | ownerid | OwnerId | Proprietario | Owner | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un utente diverso. | False | Simple | SystemRequired | Targets: ; systemuser ; team |  |
| Standard (Not used / System-owned) | prioritycode | PriorityCode | Priorità | Choice | Selezionare la priorità in modo che i clienti preferiti o i problemi critici vengano gestiti rapidamente. | False | Simple | None | Options: ; 0: Bassa ; 1: Normale ; 2: Alta ; Default: 1 |  |
| Standard (Used / Configured) | regardingobjectid | RegardingObjectId | Tema | Lookup | Scegliere il record correlato all'appuntamento. | False | Simple | None |  |  |
| Standard (Not used / System-owned) | requiredattendees | requiredattendees | Partecipanti necessari | PartyList | Immettere account, contatti, lead, utenti o attrezzature che devono partecipare all'appuntamento. | False | Simple | None |  |  |
| Standard (Not used / System-owned) | scheduleddurationminutes | ScheduledDurationMinutes | Durata | Whole number | Mostra la durata prevista dell'appuntamento in minuti. | False | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| Standard (Used / Configured) | scheduledend | ScheduledEnd | Ora di fine | DateTime | Immettere la data e l'ora di scadenza previste per il completamento dell'impegno per fornire dettagli sui tempi dell'appuntamento. | False | Simple | ApplicationRequired | Format: DateAndTime | Yes |
| Standard (Used / Configured) | scheduledstart | ScheduledStart | Ora di inizio | DateTime | Immettere la data e l'ora di inizio previste dell'impegno per fornire dettagli sui tempi dell'appuntamento. | False | Simple | ApplicationRequired | Format: DateAndTime | Yes |
| Standard (Not used / System-owned) | seriesid | SeriesId | ID serie | Uniqueidentifier | Mostra l'ID della serie ricorrente di un'istanza. | False | Simple | None |  |  |
| Standard (Used / Configured) | statecode | StateCode | Stato | State | Mostra se l'appuntamento è aperto, completato o annullato. Gli appuntamenti completati o annullati sono di sola lettura e non possono essere modificati. | False | Simple | SystemRequired | States: ; 0: Aperta ; 1: Completata ; 2: Annullata ; 3: Pianificato |  |
| Standard (Used / Configured) | statuscode | StatusCode | Motivo stato | Status | Selezionare lo stato dell'appuntamento. | False | Simple | None | States: ; 1: Disponibile ; 2: Provvisorio ; 3: Completato ; 4: Annullato ; 5: Occupato ; 6: Fuori sede |  |
| Standard (Used / Configured) | subject | Subject | Oggetto | Text | Digitare una breve descrizione dell'obiettivo o dell'argomento primario dell'appuntamento. | False | Simple | ApplicationRequired | Format: Text ; Max length: 200 |  |
| Custom | cai_contactchannelid | cai_contactchannelid | Modalità interazione | Lookup | Il tipo di interazione previsto, se a distanza o in filiale, etc | True | Simple | None | Target: cai_contactchannel | Yes |
| Custom | cai_expectedaction | cai_expectedaction | Azione prevista | Choice |  | True | Simple | None | Da svolgere, Da esitare, Da Confermare | Yes |
| Custom | cai_argumentid | cai_argumentid | Argomento prevalente | Lookup | L'argomento principale tra quelli delle Lead calcolato tramite plugin | True | Simple | None | cai_argument | Yes |
| Custom | cai_organizertype | cai_organizertype | Fissato da | Choice | Indica sommariamente chi ha fissato l'appuntamento: "Me”, “Servizio Clienti”, “APP”, “Altri collaboratori” | True | Simple | None | Global optionset "Tipologia organizzatore": "Me”, “Servizio Clienti”, “APP”, “Altri collaboratori” | Yes |
| Custom | cai_type | cai_type | Tipo | Choice | Appuntamento commerciale, Smart working, Indisponibilità, Part-time, Disponibilità Mobile App, Impegno | True | Simple | None | Global optionset "Tipologia Appuntamento": Appuntamento commerciale, Smart working, Indisponibilità, Part-time, Disponibilità Mobile App, Impegno |  |
| Custom | cai_status | cai_status | Stato appuntamento | Choice | “Esitato”, “Da svolgere”, “Da esitare”, “Da confermare”, "Confermato", "Rifiutato" | True | Simple | None | Global optionset "Stato appuntamento": “Esitato”, “Da svolgere”, “Da esitare”, “Da confermare” | Yes |
| Custom | cai_templatetype | cai_templatetype | Tipo di modello | Choice | "Appuntamento", "Impegno" | True | Simple | None | Global optionset "Appuntamento", "Impegno" |  |
| Custom | cai_authorid | cai_authorid | Autore | Lookup |  |  |  |  | Target: systemuser |  |

---

## 6. Appuntamento Ricorrente

| Proprietà | Valore |
|---|---|
| **Entity Name** | Appuntamento ricorrente |
| **Plural Display Name** | Appuntamenti ricorrenti |
| **Description** | Appuntamento master della serie di appuntamenti ricorrenti. |
| **Schema Name** | `RecurringAppointmentMaster` |
| **Logical Name** | `recurringappointmentmaster` |
| **Object Type Code** | 4251 |
| **Is Custom Entity** | False |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| activityid | ActivityId | Appuntamento ricorrente | Uniqueidentifier | Identificatore univoco della serie di appuntamenti ricorrenti. | False | Simple |  |  |
| createdby | CreatedBy | Autore | Lookup | Mostra chi ha creato il record. | False | Simple | Targets: ; systemuser |  |
| createdon | CreatedOn | Data creazione | DateTime | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | Format: DateAndTime |  |
| daysofweekmask | DaysOfWeekMask | Maschera giorni della settimana | Whole number | Maschera di bit che rappresenta i giorni della settimana in cui si verifica l'appuntamento ricorrente. | False | Simple | Minimum value: 1 ; Maximum value: 127 |  |
| description | Description | Descrizione | Multiline Text | Digitare informazioni aggiuntive per descrivere l'appuntamento ricorrente, ad esempio punti di discussione chiave oppure obiettivi. | False | Simple | Format: Text ; Max length: 1048576 |  |
| duration | Duration | Durata | Whole number | Durata in minuti della serie di appuntamenti ricorrenti. | False | Simple | Minimum value: 0 ; Maximum value: 2147483647 |  |
| firstdayofweek | FirstDayOfWeek | Primo giorno della settimana | Whole number | Primo giorno della settimana per il criterio di ricorrenza. | False | Simple | Minimum value: 0 ; Maximum value: 6 |  |
| globalobjectid | GlobalObjectId | Master appuntamento ricorrente in Outlook | Text | Identificatore univoco di Outlook utilizzato per creare una correlazione per la serie di appuntamenti ricorrenti nelle cassette postali di Exchange. | False | Simple | Format: Text ; Max length: 300 |  |
| instancetypecode | InstanceTypeCode | Tipo di appuntamento | Choice | Tipo di istanza di una serie di appuntamenti ricorrenti. | False | Simple | Options: ; 0: Non ricorrente ; 1: Master ricorrente ; 2: Istanza ricorrente ; 3: Eccezione ricorrente ; 4: Eccezione ricorrente futura ; Default: 0 |  |
| isalldayevent | IsAllDayEvent | Giornata intera | Two options | Selezionare se l'appuntamento ricorrente è un evento per l'intera giornata per garantire che le risorse richieste siano pianificate di conseguenza. | False | Simple | True: Sì ; False: No ; Default Value: False |  |
| isonlinemeeting | IsOnlineMeeting | Riunione online | Two options | Visualizza se si tratta di una riunione online. | True | Simple | True: Sì ; False: No ; Default Value: False |  |
| isregenerate | IsRegenerate | Rigenerazione | Two options | Solo per uso interno. | False | Simple | True: Sì ; False: No ; Default Value: False |  |
| isweekdaypattern | IsWeekDayPattern | Ogni giorno feriale | Two options | Indica se il criterio di ricorrenza settimanale è un criterio giornaliero applicato solo ai giorni feriali. Valido solo per il criterio di ricorrenza settimanale. | False | Simple | True: Sì ; False: No ; Default Value: False |  |
| location | Location | Posizione | Text | Digitare il luogo in cui si svolgerà l'appuntamento ricorrente, ad esempio una sala conferenze o l'ufficio del cliente. | False | Simple | Format: Text ; Max length: 200 |  |
| occurrences | Occurrences | Occorrenze | Whole number | Numero di occorrenze dell'appuntamento in una serie di appuntamenti ricorrenti. | False | Simple | Minimum value: 1 ; Maximum value: 999 |  |
| onlinemeetingid | OnlineMeetingId | ID riunione online | Text | Mostra l'ID della riunione online. | True | Simple | Format: Text ; Max length: 300 |  |
| onlinemeetingjoinurl | OnlineMeetingJoinUrl | URL partecipazione riunione online | Text | Mostra l'URL di partecipazione alla riunione online. | True | Simple | Format: Text ; Max length: 600 |  |
| onlinemeetingtype | OnlineMeetingType | Tipo di riunione online | Choice | Visualizza il tipo di riunione online. | True | Simple | Options: ; 1: Riunione di Teams ; Default: N/A |  |
| optionalattendees | OptionalAttendees | Partecipanti facoltativi | PartyList | Immetti account, contatti, lead, utenti o attrezzature non necessari per l'appuntamento ricorrente, ma che possono partecipare facoltativamente. | False | Simple |  |  |
| organizer | Organizer | Organizzatore | PartyList | Immettere l'utente incaricato di coordinare o condurre l'appuntamento ricorrente per garantire che quest'ultimo venga mostrato nella visualizzazione Impegni personali dell'utente. | False | Simple |  |  |
| ownerid | OwnerId | Proprietario | Owner | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un utente diverso. | False | Simple | Targets: ; systemuser ; team |  |
| patternenddate | PatternEndDate | Fine intervallo ricorrenza | DateTime | Data di fine dell'intervallo di ricorrenza. | False | Simple | Format: DateOnly |  |
| patternendtype | PatternEndType | Tipo di fine criterio | Choice | Selezionare il tipo di data di fine per l'appuntamento ricorrente, ad esempio nessuna data di fine o il numero di occorrenze. | False | Simple | Options: ; 1: Nessuna data di fine ; 2: Occorrenze ; 3: Data di fine criterio ; Default: N/A |  |
| patternstartdate | PatternStartDate | Inizio intervallo ricorrenza | DateTime | Data di inizio dell'intervallo di ricorrenza. | False | Simple | Format: DateOnly |  |
| recurrencepatterntype | RecurrencePatternType | Frequenza ricorrenza | Choice | Selezionare il tipo di criterio per l'appuntamento ricorrente per indicare se si verifica giornalmente, settimanalmente. mensilmente o annualmente. | False | Simple | Options: ; 0: Giornaliera ; 1: Settimanale ; 2: Mensile ; 3: Annuale ; Default: 0 |  |
| regardingobjectid | RegardingObjectId | Tema | Lookup | Scegliere il record correlato alla serie di appuntamenti ricorrenti. | False | Simple |  |  |
| requiredattendees | RequiredAttendees | Partecipanti necessari | PartyList | Immettere account, contatti, lead, utenti o attrezzature che devono partecipare all'appuntamento ricorrente. | False | Simple |  |  |
| ruleid | RuleId | Regola ricorrenza | Lookup | Identificatore univoco della regola di ricorrenza associata alla serie di appuntamenti ricorrenti. | False | Simple | Targets: ; recurrencerule |  |
| scheduledend | ScheduledEnd | Ora di fine | DateTime | Data e ora di fine pianificata della serie di appuntamenti ricorrenti. | False | Simple | Format: DateAndTime |  |
| scheduledstart | ScheduledStart | Ora di inizio | DateTime | Data e ora di inizio pianificata della serie di appuntamenti ricorrenti. | False | Simple | Format: DateAndTime |  |
| seriesstatus | SeriesStatus | Stato serie | Two options | Specifica se la serie di appuntamenti ricorrenti è attiva o inattiva. | False | Simple | True: Attiva ; False: Inattiva ; Default Value: True |  |
| statecode | StateCode | Stato | State | Mostra se l'appuntamento ricorrente è aperto, pianificato, completato o annullato. Gli appuntamenti completati o annullati sono di sola lettura e non possono essere modificati. | False | Simple | States: ; 0: Aperta ; 1: Completata ; 2: Annullata ; 3: Pianificato |  |
| statuscode | StatusCode | Motivo stato | Status | Selezionare lo stato dell'appuntamento ricorrente. | False | Simple | States: ; 1: Disponibile ; 2: Provvisorio ; 3: Completata ; 4: Annullata ; 5: Occupato ; 6: Fuori sede |  |
| subject | Subject | Oggetto | Text | Digitare una breve descrizione dell'obiettivo o dell'argomento primario dell'appuntamenti ricorrente. | False | Simple | Format: Text ; Max length: 200 |  |
| cai_organizertype | cai_organizertype | Fissato da | Choice | Indica sommariamente chi ha fissato l'appuntamento: "Me”, “Servizio Clienti”, “APP”, “Altri collaboratori” | True | Simple | Global optionset "Tipologia organizzatore": "Me”, “Servizio Clienti”, “APP”, “Altri collaboratori” |  |
| cai_type | cai_type | Tipo | Choice | Appuntamento commerciale, Smart working, Indisponibilità, Part-time, Disponibilità Mobile App | True | Simple | Global optionset "Tipologia Appuntamento": Appuntamento commerciale, Smart working, Indisponibilità, Part-time, Disponibilità Mobile App |  |

---

## 7. Azienda (Account)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Account |
| **Plural Display Name** | Account |
| **Description** | Azienda che rappresenta un cliente o un potenziale cliente. Società a cui viene intestata la fattura nelle transazioni aziendali. |
| **Schema Name** | `Account` |
| **Logical Name** | `account` |
| **Object Type Code** | 1 |
| **Is Custom Entity** | False |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| accountid | AccountId | Account | Uniqueidentifier | Identificatore univoco dell'account. | False | Simple | SystemRequired |  |  |
| accountnumber | AccountNumber | Numero account | Text | Digitare un numero ID o un codice per l'account per cercare e identificare rapidamente l'account nelle visualizzazioni di sistema. | False | Simple | None | Format: Text ; Max length: 20 |  |
| businesstypecode | BusinessTypeCode | Tipo di azienda | Choice | Selezionare la designazione giuridica o il tipo di società dell'account per contratti o per scopi di report. | False | Simple | None | Options: ; 1: Valore predefinito ; Default: 1 |  |
| createdby | CreatedBy | Autore | Lookup | Mostra chi ha creato il record. | False | Simple | None | Targets: ; systemuser |  |
| createdon | CreatedOn | Data creazione | DateTime | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| createdonbehalfby | CreatedOnBehalfBy | Autore (delegato) | Lookup | Mostra chi ha creato il record per conto di un altro utente. | False | Simple | None | Targets: ; systemuser |  |
| customertypecode | CustomerTypeCode | Tipo relazione | Choice | Selezionare la categoria che meglio descrive la relazione tra l'account e l'organizzazione. | False | Simple | None | Options: ; 1: Concorrente ; 2: Consulente ; 3: Cliente ; 4: Investitore ; 5: Partner ; 6: Influenzatore ; 7: Stampa ; 8: Potenziale cliente ; 9: Rivenditore ; 10: Produttore ; 11: Fornitore ; 12: Altro ; Default: N/A |  |
| description | Description | Descrizione | Multiline Text | Digitare informazioni aggiuntive per descrivere l'account, ad esempio un estratto del sito Web della società. | False | Simple | None | Format: TextArea ; Max length: 2000 |  |
| donotemail | DoNotEMail | Non consentire invio di messaggi e-mail | Two options | Seleziona se l'account consente l'invio di e-mail dirette da Microsoft Dynamics 365. | False | Simple | None | True: Non consentire ; False: Consenti ; Default Value: False |  |
| donotphone | DoNotPhone | Non consentire telefonate | Two options | Selezionare se l'account consente le telefonate. Se si seleziona Non consentire, l'account sarà escluso dagli impegni di tipo telefonata distribuiti nelle campagne di marketing. | False | Simple | None | True: Non consentire ; False: Consenti ; Default Value: False |  |
| emailaddress1 | EMailAddress1 | E-mail | Text | Digitare l'indirizzo e-mail primario per l'account. | False | Simple | None | Format: Email ; Max length: 100 |  |
| industrycode | IndustryCode | Settore | Choice | Selezionare il settore primario dell'account da usare nella segmentazione di marketing e nell'analisi demografica. | False | Simple | None | Options: ; 3: Industrie alimentari, delle bevande e del tabacco ; 16: Commercio all'ingrosso, al dettaglio, riparazioni ; 20: Editoria e stampa ; 34: Agricoltura, caccia, pesca e silvicoltura ; 38: Altre industrie manifatturiere ; 43: Altre attività di servizi ; 44: Fabbricazione di prodotti chimici ; 53: Edilizia ; 59: Estrazione di minerali energetici e non energetici ; 61: Prod. e distrib. di energia elettrica, gas e acqua ; 62: Commercio all'ingrosso, al dettaglio, riparazioni ; 63: Alberghi, ristoranti e pubblici esercizi ; 65: Attività immobiliari, noleggio ; 66: Pubblica Amministrazione e difesa; assicurazione soc. obbl. ; 67: Istruzione ; 68: Sanità e altri servizi sociali ; 69: Altri servizi pubblici, sociali e personali ; 71: Organizzazioni ed organismi extraterritoriali ; 74: Informatica e attività connesse ; 76: Industrie alimentari, delle bevande e del tabacco ; 93: Industrie tessili e dell'abbigliamento ; 119: Fabbricazione di articoli in gomma e plastica ; 123: Fabbricazione di prodotti farmaceutici e cosmetici ; 124: Poste e telecomunicazioni ; 125: Attività delle banche centrali ; 126: Attività legali e contabili ; 127: Consulenza amministrativo-gestionale ; 128: Pubblicità ; 129: Fabbricazione macchine e apparecchi meccanici ; 130: Fabbricazione macchine per ufficio e sistemi informatici ; 131: Fabbricazione macchine e apparecchi elettrici ; 132: Fabbricazione apparecchi di precisione ; 133: Fabbricazione di mezzi di trasporto ; 134: Trasporti, magazzinaggio ; Default: N/A |  |
| modifiedby | ModifiedBy | Autore modifica | Lookup | Mostra chi ha aggiornato il record per ultimo. | False | Simple | None | Targets: ; systemuser |  |
| modifiedon | ModifiedOn | Data modifica | DateTime | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| modifiedonbehalfby | ModifiedOnBehalfBy | Autore modifica (delegato) | Lookup | Mostra chi ha creato il record per conto di un altro utente. | False | Simple | None | Targets: ; systemuser |  |
| msdyn_segmentid | msdyn_segmentid | ID segmento | Lookup | Identificatore univoco del segmento associato a account. | True | Simple | None | Targets: ; msdyn_segment |  |
| name | Name | Nome account | Text | Digitare il nome della società o dell'azienda. | False | Simple | ApplicationRequired | Format: Text ; Max length: 160 | Yes |
| originatingleadid | OriginatingLeadId | Lead di origine | Lookup | Mostra il lead da cui è stato creato l'account se l'account è stato creato convertendo un lead in Microsoft Dynamics 365. Usato per associare l'account ai dati sul lead di origine a scopo di report e analisi. | False | Simple | None | Targets: ; lead |  |
| ownerid | OwnerId | Proprietario | Owner | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un utente diverso. | False | Simple | SystemRequired | Targets: ; systemuser ; team | Yes |
| parentaccountid | ParentAccountId | Account padre | Lookup | Scegli l'account padre associato a questo account per mostrare le aziende padre e figlio a scopo di report e analisi. | False | Simple | None | Targets: ; account |  |
| statecode | StateCode | Stato | State | Mostra se l'account è attivo o inattivo. Gli account inattivi sono di sola lettura e non possono essere modificati a meno che non vengano riattivati. | False | Simple | SystemRequired | States: ; 0: Attiva ; 1: Inattiva |  |
| statuscode | StatusCode | Motivo stato | Status | Selezionare lo stato dell'account. | False | Simple | None | States: ; 1: Attiva ; 2: Inattiva |  |
| telephone1 | Telephone1 | Telefono principale | Text | Digitare il numero di telefono principale per questo account. | False | Simple | None | Format: Text ; Max length: 50 |  |
| telephone2 | Telephone2 | Altro telefono | Text | Digitare un secondo numero di telefono per questo account. | False | Simple | None | Format: Text ; Max length: 50 |  |
| territoryid | TerritoryId | Area | Lookup | Scegli un'area di vendita per l'account per assicurarti che venga assegnato al rappresentante corretto e da usare nella segmentazione e nell'analisi. | False | Simple | None | Targets: ; territory |  |
| cai_legalformcode | cai_legalformcode | Codice natura giuridica | Text |  | True | Simple | None |  |  |
| cai_legalformname | cai_legalformname | Nome natura Giuridica | Text |  | True | Simple | None |  | Yes |
| cai_legalformid | cai_legalformid | Natura Giuridica | Lookup | Lookup alla natura giuridica (cai_legalform) | True | Simple | None |  |  |
| cai_segmentcode | cai_segmentcode | Codice segmento | Text |  | True | Simple | None |  |  |
| cai_segmentname | cai_segmentname | Nome segmento | Text |  | True | Simple | None |  | Yes |
| cai_segmentid | cai_segmentid | Segmento | Lookup | Lookup al segmento (cai_segment) | True | Simple | None |  |  |
| cai_orgunitid | cai_orgunitid | Unità organizzativa | Lookup | Lookup all'unità organizzativa (cai_orgunit) | True | Simple | None | Targets: cai_orgunit |  |
| cai_walletid | cai_walletid | Portafoglio | Lookup | Lookup al Portafoglio | True | Simple | None | Targets: Portafoglio |  |
| cai_institutecode | cai_institutecode | Codice istituto | Text | Codice identificativo dell'istituto bancario | True | Simple | None | Format: Text Max length: 2 | Yes |
| cai_ndgcode | cai_ndgcode | Codice NDG | Text | Codice identificativo del cliente | True | Simple | None | Format: Text Max length: 25 | Yes |
| cai_score | cai_score | Score o Temperatura o Priorità | Choice |  | True | ??? | None | Global optionset (Caldo / Tiepido / Freddo) | Yes |
| cai_customertype | cai_customertype | Tipologia cliente | Choice | Anagrafato / Prospect / Disattivato - Scaduto | True | Simple | None | Global Option set "Tipologia cliente": ; 100000000: Anagrafato ; 100000001: Prospect ; 100000002: Disattivato / Scaduto |  |
| cai_extinctiondate | cai_extinctiondate | Data estinzione | DateTime |  | True | Simple | None | Format: DateAndTime | Yes |
| cai_relationshipcode | cai_relationshipcode | Codice titolarità rapporti | Text |  | True | Simple | None |  | Yes |
| cai_relationshipname | cai_relationshipname | Nome titolarità rapporti | Text |  | True | Simple | None |  | Yes |
| cai_relationshipdate | cai_relationshipdate | Data titolarità rapporti | DateTime |  | True | Simple | None | Format: DateAndTime | Yes |
| cai_relationshipid | cai_relationshipid | Titolarità Rapporto | Lookup | Lookup alla titolarità rapporto (cai_ownershiprelation) | True | Simple | None |  |  |
| cai_atecocode | cai_atecocode | Codice ATECO | Text |  | True | Simple | None |  | Yes |
| cai_fiscalcode | cai_fiscalcode | Codice fiscale | Text |  | True | Simple | None | Format: Text Max length: 100 | Yes |
| cai_vatcode | cai_vatcode | Partita IVA | Text |  | True | Simple | None | Format: Text Max length: 100 | Yes |
| cai_coi | cai_coi | Cointestazione | Two options |  | True | Simple | None |  |  |
| cai_firstname | cai_firstname | Nome | Text |  | True | Simple | None | Format: Text Max length: 100 |  |
| cai_lastname | cai_lastname | Cognome | Text |  | True | Simple | None | Format: Text Max length: 100 |  |

---

## 8. Business Unit (BusinessUnit)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Business Unit |
| **Plural Display Name** | Business Unit |
| **Description** | Azienda, divisione o reparto nel database di Microsoft Dynamics 365 |
| **Schema Name** | `BusinessUnit` |
| **Logical Name** | `businessunit` |
| **Object Type Code** | 10 |
| **Is Custom Entity** | False |
| **Ownership Type** | BusinessOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| businessunitid | BusinessUnitId | Business Unit | Uniqueidentifier | Identificatore univoco della Business Unit. | False | Simple | SystemRequired |  |  |
| cai_checksumid | cai_checksumid | Checksum ID | Whole number |  | True | Simple | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |  |
| cai_code | cai_code | Codice | Text |  | True | Simple | Format: Text ; Max length: 100 |  |  |
| cai_dsscodeid | cai_dsscodeid | Codice DSS | Text |  | True | Simple | Format: Text ; Max length: 100 |  |  |
| cai_level | cai_level | Livello | Text |  | True | Simple |  |  |  |
| cai_ismigrated | cai_ismigrated | Migrata | Two options | Specifica se la Business Unit è stata migrata | True | Simple |  |  |  |
| cai_orderlevel | cai_orderlevel | Ordinamento | Number |  | True | Simple |  |  |  |
| cai_type | cai_type | Tipo | Optionset |  | True | Simple |  | - Centro ; - Direzione ; - Zona ; - Mercato |  |
| description | Description | Descrizione | Multiline Text | Descrizione della Business Unit. | False | Simple | None | Format: Text ; Max length: 2000 |  |
| isdisabled | IsDisabled | Disabilitata | Two options | Specifica se la Business Unit è abilitata o disabilitata. | False | Simple | SystemRequired | True: Sì ; False: No ; Default Value: False |  |
| name | Name | Nome | Text | Nome della Business Unit. | False | Simple | SystemRequired | Format: Text ; Max length: 160 |  |
| organizationid | OrganizationId | Organizzazione | Lookup | Identificatore univoco dell'organizzazione associata alla Business Unit. | False | Simple | SystemRequired | Targets: ; organization |  |
| parentbusinessunitid | ParentBusinessUnitId | Azienda padre | Lookup | Identificatore univoco della Business Unit padre. | False | Simple | ApplicationRequired | Targets: ; businessunit |  |

---

## 9. Azione suggerita

| Proprietà | Valore |
|---|---|
| **Entity Name** | Azione suggerita |
| **Plural Display Name** | Azioni suggerite |
| **Description** | Azioni suggerite per il gestore |
| **Schema Name** | `cai_suggestedaction` |
| **Logical Name** | `cai_suggestedaction` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| cai_suggestedactionid | cai_suggestedactionid | Azione suggerita | Uniqueidentifier |  | False |  |  |  |
| cai_code | cai_code | Codice azione suggerita | Text |  | True | Simple | "Autonumber pattern ; BACT00000001" |  |
| cai_suggestedactiontext | cai_suggestedactiontext | Azione da suggerire | Text | Testo dell'azione da suggerire all'utente | True | Simple | Format: Text ; Max length: 500 |  |
| cai_name | cai_name | Name | Text | Nome azione suggerita | True | Simple | Format: Text ; Max length: 100 |  |
| cai_operationtypesuggested | cai_operationtypesuggested | Modalità di azione suggerita | Text | Tipo della modalità di azione suggerita | True | Simple | Format: Text ; Max length: 100 |  |
| statecode | statecode | Status | State | Status of the Argomento | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Argomento | False | Simple | States: ; 1: Active ; 2: Inactive |  |

---

## 10. Campi regola smist.

| Proprietà | Valore |
|---|---|
| **Entity Name** | Campi aggiuntivi regola smistamento Lead |
| **Plural Display Name** | Campi aggiuntivi regola smistamento Lead |
| **Schema Name** | `cai_dispatchingruleadditionalfields` |
| **Logical Name** | `cai_dispatchingruleadditionalfields` |
| **Object Type Code** | 10158 |
| **Is Custom Entity** | True |
| **Ownership Type** | Organization owned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_dispatchingruleadditionalfieldsid | cai_dispatchingruleadditionalfieldsid | Campi Aggiuntivi regola smistamento lead | Uniqueidentifier | Unique identifier for entity instances | False | Simple |  |  |
| cai_dispatchingruleid | cai_dispatchingruleid | Regola smistamento lead | Lookup |  | True | Simple | Targets: cai_dispatchingrule |  |
| cai_name | cai_name | Name | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_additionalfieldname | cai_additionalfieldname | Nome Campo Aggiuntivo | Text |  | True | Simple | Format: Text ; Max length: 200 |  |
| cai_additionalfieldvalue | cai_additionalfieldvalue | Valore Campo Aggiuntivo | Text |  | True | Simple | Format: Text ; Max length: 2000 |  |
| statecode | statecode | Status | State | Status of the Campi aggiuntivi regola smistamento Lead | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Campi aggiuntivi regola smistamento Lead | False | Simple | States: ; 1: Active ; 2: Inactive |  |

---

## 11. Canale di contatto

| Proprietà | Valore |
|---|---|
| **Entity Name** | Canale di Contatto |
| **Plural Display Name** | Canali di Contatto |
| **Description** | Identifica i canali di contatto disponibili per esitare (Telefonata/distanza,In filiale, Presso cliente) |
| **Schema Name** | `cai_contactchannel` |
| **Logical Name** | `cai_contactchannel` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_contactchannelid | cai_contactchannelid | Canale di Contatto | Uniqueidentifier | Unique identifier for entity instances | False | Simple |  |  |
| cai_contactchannelcode | cai_contactchannelcode | Codice canale | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_name | cai_name | Nome canale | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_description | cai_description | Descrizione | Text |  | True | Simple | Format: Text ; Max length: 200 |  |
| statecode | statecode | Status | State | Status of the Canale di Contatto | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Canale di Contatto | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_selectableonfree | cai_selectableonfree | Selezionabile su FrEE | Two options | Indica se il canale di contatto sia selezionabile su FrEE | False | Simple |  |  |

---

## 12. Canale intermediario mutuo

| Proprietà | Valore |
|---|---|
| **Entity Name** | Canale intermediario mutuo |
| **Plural Display Name** | Canale intermediario mutuo |
| **Description** | Canali che possono censire Lead mutui |
| **Schema Name** | `cai_brokermortgageloan` |
| **Logical Name** | `cai_brokermortgageloan` |
| **Is Custom Entity** | False |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| statecode | StateCode | Stato | State | Mostra se ilrecord di Canale mutuo è attivo o disattivo | False | Simple | SystemRequired | States: ; 0: Active ; 1: Inactive |  |
| statuscode | StatusCode | Motivo stato | Status | Selezionare lo stato del Canale mutuo | False | Simple | None | States: ; 1: Active ; 2: Inactive |  |
| cai_name | cai_name | Nome canale intermediario mutuo | Text | Nome del Canale mutuo | True | Simple | None | Text max length: 50 |  |
| cai_description | cai_description | Descrizione canale intermediario mutuo | Text | Descrizione del Canale mutuo | True | Simple | None | Text max length: 200 |  |
| cai_code | cai_code | Codice | Text | Codice del canale mutuo | True | Simple | None | Text max length: 2 |  |
| cai_brokermortgageloanid | cai_brokermortgageloanid | Canale intermediario mutuo | Guid |  | True | Simple | None |  |  |
| cai_internalchannel | cai_internalchannel | Canale interno banca | Two options |  | True | Simple | None | Yes-No |  |
| cai_email | cai_email | E-mail | String |  | Yes | Simple | Optional |  |  |
| cai_intermediaryguid | cai_intermediaryguid | GUID Intermediario | String |  | Yes | Simple | Optional |  |  |
| cai_intermediaryndg | cai_intermediaryndg | NDG Intermediario | String |  | Yes | Simple | Optional |  |  |
| cai_isenabledforconsultantsending | cai_isenabledforconsultantsending | Enable invio al consulente | Boolean |  | Yes | Simple | Optional |  |  |
| cai_isenabledforpromoters | cai_isenabledforpromoters | Abilitato per Promotori | Boolean |  | Yes | Simple | Optional |  |  |
| cai_isintermediaryguidenabled | cai_isintermediaryguidenabled | Abilitazione Guid Intermediario | Boolean |  | Yes | Simple | Optional |  |  |
| cai_ismanagedexternally | cai_ismanagedexternally | Gestito Esternamente | Boolean |  | Yes | Simple | Optional |  |  |
|  | organizationid | ID organizzazione | Lookup |  | No |  | Optional |  |  |

---

## 13. Contatto generico

| Proprietà | Valore |
|---|---|
| **Entity Name** | Contatto generico |
| **Plural Display Name** | Contatto generico |
| **Description** | Rappresenta il contatto avvenuto tra il gestore e il cliente |
| **Schema Name** | `cai_genericcontact` |
| **Logical Name** | `cai_genericcontact` |
| **Object Type Code** | - |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice contatto generico | Text | Codice autonumber del contatto |  |  |  | Autonumber GNRCCNT000000001 |  |
| cai_genericcontactid | cai_genericcontactid | Contatto generico | UniqueIdentifier | Identificativo del record | True | Simple | None |  |  |
| regardingobjectid | regardingobjectid | Tema | Lookup | Il record di Account o Contact correlato al contatto generico | False | Simple | None |  |  |
| cai_contactdate | cai_contactdate | Data di contatto | DateTime | Data di censimento del contatto | True | Simple | None | Format: DateAndTime |  |
| cai_contactchannelid | cai_contactchannelid | Canale di contatto | Lookup | Canale tramite cui è stato effettuato il contatto con il cliente | True | Simple | None | Targets: ; cai_contactchannel |  |
| cai_notes | cai_notes | Nota | Text | Nota inserita in fase di esitazione | True | Simple | None | Format: Text ; Max length: 300 |  |
| cai_managerid | cai_managerid | Gestore | Lookup | Gestore che ha eseguito il contatto | True | Simple | None | Targets: ; systemuser |  |
| statecode | StateCode | Stato | State | State del record | False | Simple | SystemRequired | Status di default di un'activity |  |
| statuscode | StatusCode | Motivo stato | Status | Stato del contatto generico | False | Simple | None | Status reason di default di un'activity |  |
| ownerid | ownerid | Proprietario | Lookup | Gestore/Operatore che ha eseguito il contatto |  |  |  | Targets: ; systemuser |  |

---

## 14. Cliente (Contact)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Contatto |
| **Plural Display Name** | Contatti |
| **Description** | Persona con cui una Business Unit si relaziona, ad esempio un cliente, un fornitore o un collega. |
| **Schema Name** | `Contact` |
| **Logical Name** | `contact` |
| **Object Type Code** | 2 |
| **Is Custom Entity** | False |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| accountid | AccountId | Account | Lookup | Identificatore univoco dell'account a cui è associato il contatto. | False | Simple | None | Targets: ; account |  |
| accountrolecode | AccountRoleCode | Ruolo | Choice | Selezionare il ruolo del contatto nella società o nel processo di vendita, ad esempio decisore, dipendente o influenzatore. | False | Simple | None | Options: ; 1: Decisore ; 2: Dipendente ; 3: Influenzatore ; Default: N/A |  |
| contactid | ContactId | Contatto | Uniqueidentifier | Identificatore univoco del contatto. | False | Simple | SystemRequired |  |  |
| createdby | CreatedBy | Autore | Lookup | Mostra chi ha creato il record. | False | Simple | None | Targets: ; systemuser |  |
| createdon | CreatedOn | Data creazione | DateTime | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| description | Description | Descrizione | Multiline Text | Digitare informazioni aggiuntive per descrivere il contatto, ad esempio un estratto del sito Web della società. | False | Simple | None | Format: TextArea ; Max length: 2000 |  |
| donotemail | DoNotEMail | Non consentire invio di messaggi e-mail | Two options | Seleziona se il contatto consente l'invio di e-mail dirette da Microsoft Dynamics 365. Se si seleziona Non consentire, Microsoft Dynamics 365 non invierà e-mail. | False | Simple | None | True: Non consentire ; False: Consenti ; Default Value: False |  |
| donotphone | DoNotPhone | Non consentire telefonate | Two options | Selezionare se il contatto accetta le telefonate. Se si seleziona Non consentire, il contatto sarà escluso da qualsiasi impegno di tipo telefonata distribuito nelle campagne di marketing. | False | Simple | None | True: Non consentire ; False: Consenti ; Default Value: False |  |
| emailaddress1 | EMailAddress1 | E-mail | Text | Digitare l'indirizzo e-mail primario per il contatto. | False | Simple | None | Format: Email ; Max length: 100 |  |
| firstname | FirstName | Nome | Text | Digitare il nome del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne di marketing. | False | Simple | Recommended | Format: Text ; Max length: 50 |  |
| followemail | FollowEmail | Segui impegno e-mail | Two options | Specifica se consentire o meno che gli impegni dei messaggi e-mail inviati al contatto vengano seguiti fornendo informazioni quali: numero di volte in cui un messaggio viene aperto, numero di visualizzazioni degli allegati e numero di clic sul collegamento. | False | Simple | None | True: Consenti ; False: Non consentire ; Default Value: True |  |
| followemailname | FollowEmailName | N/A | Virtual | N/A | False | Simple | None |  |  |
| ftpsiteurl | FtpSiteUrl | Sito FTP | Text | Digitare l'URL per il sito FTP del contatto per consentire agli utenti di accedere ai dati e di condividere documenti. | False | Simple | None | Format: Url ; Max length: 200 |  |
| fullname | FullName | Nome completo | Text | Combina e mostra nome e cognome del contatto per consentire di mostrare il nome completo in visualizzazioni e report. | False | Simple | None | Format: Text ; Max length: 160 |  |
| gendercode | GenderCode | Sesso | Choice | Selezionare il sesso del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne di marketing. | False | Simple | None | Options: ; 1: Maschile ; 2: Femminile ; Default: N/A |  |
| governmentid | GovernmentId | Codice fiscale/partita IVA | Text | Digitare il numero di passaporto oppure codice fiscale o partita IVA del contatto da usare in documenti o report. | False | Simple | None | Format: Text ; Max length: 50 |  |
| jobtitle | JobTitle | Posizione | Text | Digitare la posizione del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne di marketing. | False | Simple | None | Format: Text ; Max length: 100 |  |
| lastname | LastName | Cognome | Text | Digitare il cognome del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nelle e-mail e nelle campagne di marketing. | False | Simple | ApplicationRequired | Format: Text ; Max length: 50 |  |
| middlename | MiddleName | Secondo nome | Text | Digitare il secondo nome o la relativa iniziale del contatto per assicurare che il contatto sia indicato correttamente. | False | Simple | None | Format: Text ; Max length: 50 |  |
| mobilephone | MobilePhone | Cellulare | Text | Digitare il numero di cellulare del contatto. | False | Simple | None | Format: Text ; Max length: 50 |  |
| modifiedby | ModifiedBy | Autore modifica | Lookup | Mostra chi ha aggiornato il record per ultimo. | False | Simple | None | Targets: ; systemuser |  |
| modifiedon | ModifiedOn | Data modifica | DateTime | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| originatingleadid | OriginatingLeadId | Lead di origine | Lookup | Mostra il lead da cui è stato creato il contatto, se è stato creato convertendo un lead in Microsoft Dynamics 365. Usato per associare il contatto ai dati sul lead di origine a scopo di report e analisi. | False | Simple | None | Targets: ; lead |  |
| ownerid | OwnerId | Proprietario | Owner | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un utente diverso. | False | Simple | SystemRequired | Targets: ; systemuser ; team |  |
| parentcustomerid | ParentCustomerId | Nome società | Customer | Selezionare l'account padre o il contatto padre per il contatto per fornire un collegamento rapido a dettagli aggiuntivi, ad esempio informazioni finanziarie, impegni e opportunità. | False | Simple | None | Targets: ; account ; contact |  |
| salutation | Salutation | Titolo | Text | Digitare il titolo del contatto per assicurare che il contatto sia indicato correttamente nelle chiamate di vendita, nei messaggi e-mail e nelle campagne di marketing. | False | Simple | None | Format: Text ; Max length: 100 |  |
| statecode | StateCode | Stato | State | Mostra se il contatto è attivo o inattivo. I contatti inattivi sono di sola lettura e non possono essere modificati a meno che non vengano riattivati. | False | Simple | SystemRequired | States: ; 0: Attiva ; 1: Inattiva |  |
| statuscode | StatusCode | Motivo stato | Status | Selezionare lo stato del contatto. | False | Simple | None | States: ; 1: Attiva ; 2: Inattiva |  |
| telephone1 | Telephone1 | Telefono ufficio | Text | Digitare il numero di telefono principale per questo contatto. | False | Simple | None | Format: Text ; Max length: 50 |  |
| territorycode | TerritoryCode | Area | Choice | Selezionare un'area per il contatto da usare nella segmentazione e nell'analisi. | False | Simple | None | Options: ; 1: Valore predefinito ; Default: 1 |  |
| cai_legalformcode | cai_legalformcode | Codice natura giuridica | Text |  | True | Simple | None |  |  |
| cai_legalformname | cai_legalformname | Nome natura Giuridica | Text |  | True | Simple | None |  |  |
| cai_legalformid | cai_legalformid | Natura Giuridica | Lookup | Lookup alla natura giuridica (cai_legalform) | True | Simple | None |  |  |
| cai_segmentcode | cai_segmentcode | Codice segmento | Text |  | True | Simple | None |  |  |
| cai_segmentname | cai_segmentname | Nome segmento | Text |  | True | Simple | None |  |  |
| cai_segmentid | cai_segmentid | Segmento | Lookup | Lookup al segmento (cai_segment) | True | Simple | None |  |  |
| cai_orgunitid | cai_orgunitid | Unità organizzativa | Lookup | Lookup all'unità organizzativa (cai_orgunit) | True | Simple | None | Targets: cai_orgunit |  |
| cai_walletid | cai_walletid | Portafoglio | Lookup | Lookup al Portafoglio | True | Simple | None | Targets: Portafoglio |  |
| cai_institutecode | cai_institutecode | Codice istituto | Text | Codice identificativo dell'istituto bancario | True | Simple | None | Format: Text Max length: 2 |  |
| cai_ndgcode | cai_ndgcode | Codice NDG | Text | Codice identificativo del cliente | True | Simple | None | Format: Text Max length: 25 |  |
| cai_score | cai_score | Score o Temperatura o Priorità | Choice |  | True | ??? | None | Caldo / Tiepido / Freddo |  |
| cai_customertype | cai_customertype | Tipologia cliente | Choice | Se Cliente o Prospect | True | Simple | None | Global Option set "Tipologia cliente": ; 100000000: Cliente ; 100000001: Prospect |  |
| cai_extinctiondate | cai_extinctiondate | Data estinzione | DateTime |  | True | Simple | None | Format: DateAndTime |  |
| cai_relationshipcode | cai_relationshipcode | Codice titolarità rapporti | Text |  | True | Simple | None |  |  |
| cai_relationshipname | cai_relationshipname | Nome titolarità rapporti | Text |  | True | Simple | None |  |  |
| cai_relationshipdate | cai_relationshipdate | Data titolarità rapporti | DateTime |  | True | Simple | None | Format: DateAndTime |  |
| cai_relationshipid | cai_relationshipid | Titolarità Rapporto | Lookup | Lookup alla titolarità rapporto (cai_ownershiprelation) | True | Simple | None |  |  |
| cai_atecocode | cai_atecocode | Codice ATECO | Text |  | True | Simple | None |  |  |
| cai_fiscalcode | cai_fiscalcode | Codice fiscale | Text |  | True | Simple | None | Format: Text Max length: 100 |  |
| cai_vatcode | cai_vatcode | Partita IVA | Text |  | True | Simple | None | Format: Text Max length: 100 |  |
| birthdate | birthdate | Compleanno/data di nascita | DateTime |  |  |  |  |  |  |
| cai_coi | cai_coi | Cointestazione | Two options |  | True | Simple | None |  |  |
| cai_heading | cai_heading | Intestazione | Text | Campo predisposto per salvare l'Intestazione in caso venisse passato da flusso | True | Simple | None |  |  |

---

## 15. Configurazioni

| Proprietà | Valore |
|---|---|
| **Entity Name** | Configurazione |
| **Plural Display Name** | Configurazioni |
| **Description** | Parametri di configurazione |
| **Schema Name** | `cai_configuration` |
| **Logical Name** | `cai_configuration` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice configurazione | Text | Codice della configurazione | True | Simple |  | Format: Text ; Max length: 100 |  |
| cai_name | cai_name | Nome configurazione | Text | Nome della configurazione | True | Simple |  | Format: Text ; Max length: 100 |  |
| cai_value | cai_value | Valore | Multiline Text | Campo per tracciare un valore | True | Simple |  | Format: Text ; Max length: 4000 |  |

---

## 16. Conflitto

| Proprietà | Valore |
|---|---|
| **Entity Name** | Conflitto |
| **Plural Display Name** | Conflitti |
| **Schema Name** | `cai_conflict` |
| **Logical Name** | `cai_conflict` |
| **Object Type Code** | 11346 |
| **Is Custom Entity** | TRUE |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data |
| --- | --- | --- | --- | --- | --- | --- | --- |
| cai_appointmentid | cai_appointmentid | Appuntamento | Lookup |  | True | Simple | Targets: appointment |
| cai_appointmentidname | cai_appointmentidName | N/A | Text | N/A | True | Simple | Format: Text ; ; Max length: 200 |
| cai_conflictenddate | cai_conflictenddate | Data fine conflitto | DateTime |  | True | Simple | Format: DateAndTime |
| cai_conflictid | cai_conflictId | Conflitto | Uniqueidentifier | Identificatore univoco delle istanze di entità | False | Simple |  |
| cai_name | cai_name | Nome | Text |  | True | Simple | Format: Text ; ; Max length: 850 |
| cai_orgunitid | cai_orgunitid | Unità organizzativa | Lookup |  | True | Simple | Targets: ; ; cai_orgunit |
| cai_orgunitidname | cai_orgunitidName | N/A | Text | N/A | True | Simple | Format: Text ; ; Max length: 100 |
| cai_participantid | cai_participantid | Partecipante | Lookup |  | True | Simple | Targets: systemuser |
| cai_participantidname | cai_participantidName | N/A | Text | N/A | True | Simple | Format: Text ; ; Max length: 200 |
| cai_participantidyominame | cai_participantidYomiName | N/A | Text | N/A | True | Simple | Format: Text ; ; Max length: 200 |
| createdby | CreatedBy | Autore | Lookup | Identificatore univoco dell'utente che ha creato il record. | False | Simple | Targets: ; ; systemuser |
| createdbyname | CreatedByName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| createdbyyominame | CreatedByYomiName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| createdon | CreatedOn | Data creazione | DateTime | Data e ora di creazione del record. | False | Simple | Format: DateAndTime |
| createdonbehalfby | CreatedOnBehalfBy | Autore (delegato) | Lookup | Identificatore univoco dell'utente delegato che ha creato il record. | False | Simple | Targets: systemuser |
| createdonbehalfbyname | CreatedOnBehalfByName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| createdonbehalfbyyominame | CreatedOnBehalfByYomiName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| importsequencenumber | ImportSequenceNumber | Numero sequenza importazione | Whole number | Numero di sequenza dell'importazione che ha creato il record. | False | Simple | Minimum value: -2147483648 ; Maximum value: 2147483647 |
| modifiedby | ModifiedBy | Autore modifica | Lookup | Identificatore univoco dell'utente che ha modificato il record. | False | Simple | Targets: systemuser |
| modifiedbyname | ModifiedByName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| modifiedbyyominame | ModifiedByYomiName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| modifiedon | ModifiedOn | Data modifica | DateTime | Data e ora di modifica del record. | False | Simple | Format: DateAndTime |
| modifiedonbehalfby | ModifiedOnBehalfBy | Autore modifica (delegato) | Lookup | Identificatore univoco dell'utente delegato che ha modificato il record. | False | Simple | Targets: systemuser |
| modifiedonbehalfbyname | ModifiedOnBehalfByName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| modifiedonbehalfbyyominame | ModifiedOnBehalfByYomiName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| overriddencreatedon | OverriddenCreatedOn | Data creazione record | DateTime | Data e ora di migrazione del record. | False | Simple | Format: DateOnly |
| ownerid | OwnerId | Proprietario | Owner | ID proprietario | False | Simple | Targets: systemuser, team |
| owneridname | OwnerIdName | N/A | Text | Nome del proprietario | False | Simple | Format: Text ; ; Max length: 100 |
| owneridtype | OwnerIdType | N/A | EntityName | Tipo di ID proprietario | False | Simple |  |
| owneridyominame | OwnerIdYomiName | N/A | Text | Nome Yomi del proprietario | False | Simple | Format: Text ; ; Max length: 100 |
| owningbusinessunit | OwningBusinessUnit | Business Unit proprietaria | Lookup | Identificatore univoco della Business Unit a cui appartiene il record | False | Simple | Targets: businessunit |
| owningbusinessunitname | OwningBusinessUnitName | N/A | Text | N/A | False | Simple | Format: Text ; ; Max length: 100 |
| owningteam | OwningTeam | Team proprietario | Lookup | Identificatore univoco del team a cui appartiene il record. | False | Simple | Targets: team |
| owninguser | OwningUser | Utente proprietario | Lookup | Identificatore univoco dell'utente a cui appartiene il record. | False | Simple | Targets: systemuser, team |
| statecode | statecode | Stato | State | Stato di Conflitto | False | Simple | States: ; ; 0: Attivo ; ; 1: Inattivo |
| statecodename | statecodeName | N/A | Virtual | N/A | False | Simple |  |
| statuscode | statuscode | Motivo stato | Status | Motivo dello stato di Conflitto | False | Simple | States: ; ; 1: Attivo ; ; 2: Inattivo |
| statuscodename | statuscodeName | N/A | Virtual | N/A | False | Simple |  |
| timezoneruleversionnumber | TimeZoneRuleVersionNumber | Numero di versione regola fuso orario | Whole number | Solo per uso interno. | False | Simple | Minimum value: -1 ; ; Maximum value: 2147483647 |
| utcconversiontimezonecode | UTCConversionTimeZoneCode | Codice fuso orario conversione UTC | Whole number | Codice del fuso orario utilizzato al momento della creazione del record. | False | Simple | Minimum value: -1 ; ; Maximum value: 2147483647 |
| versionnumber | VersionNumber | Numero di versione | BigInt | Numero di versione | False | Simple | Minimum value: -9223372036854775808 ; ; Maximum value: 9223372036854775807 |

---

## 17. Elemento Coda Lead

| Proprietà | Valore |
|---|---|
| **Entity Name** | Elemento Coda Lead |
| **Plural Display Name** | Elemento Coda Leads |
| **Schema Name** | `cai_queueitemlead` |
| **Logical Name** | `cai_queueitemlead` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Product Group | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Product Group | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_leadid | cai_leadid | Lead | Lookup | Lead | True | Simple | Foreign Key to Lead Table |  |
| cai_queueitemid | cai_queueitemid | Elemento Coda | Lookup | Elemento Coda | True | Simple | Foreign Key to Queue Item Table |  |
| cai_relationship | cai_relationship | Relazione | Choice | Tipo di relazione tra Elemento Coda e Lead | True | Simple | Global Option set ; Tipo di relazione Elemento Coda - Lead ; 100000000: Lead collegati allo stesso cliente dell'Elemento Coda |  |

---

## 18. Esito Lead

| Proprietà | Valore |
|---|---|
| **Entity Name** | Esito lead |
| **Plural Display Name** | Esiti lead |
| **Schema Name** | `cai_leadoutcome` |
| **Logical Name** | `cai_leadoutcome` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| cai_leadstatecode | cai_leadstatecode | Stato Lead | OptionSet | Status | False | Simple | States: ; 0: Apri ; 1: Qualificato ; 2: Non qualificato |  |
| cai_leadstatuscode | cai_leadstatuscode | Motivo stato lead | OptionSet | Reason for the status | False | Simple | States: ; 1: Nuovo ; 2: Contattato ; 3: Qualificato ; 4: Perso ; 5: Non contattabile ; 6: Non più interessato ; 7: Annullato ; 100000000: In lavorazione ; 100000001: Chiuso ; 100000002: Sospeso |  |
| cai_leadoutcome | cai_leadoutcome | Esito lead | Uniqueidentifier |  | False |  |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_code | cai_code | Codice esito | Text | Codice dell'esito | True | Simple | "Autonumber pattern ; LDOUT0001" |  |
| cai_isfinal | cai_isfinal | Definitivo | Two options | Descrive se l'esito sia o meno definitivo | True | Simple |  |  |
| cai_technicalcode | cai_technicalcode | Codice tecnico esito | Text | Codice tecnico dell'esito condiviso con Adobe (ex codice DbContatti) | True | Simple | Format: Text ; Max length: 20 |  |
| cai_type | cai_type | Tipo | OptionSet | Specifica se l'esito sia associato al Contatto o alla Lead | True | Simple | Contatto; Lead |  |
| cai_selectableonfree | cai_selectableonfree | Selezionabile su FrEE | Two options | Indica se l'esito sia selezionabile su FrEE | False | Simple |  |  |

---

## 19. Esitazione

| Proprietà | Valore |
|---|---|
| **Entity Name** | Esitazione |
| **Plural Display Name** | Esitazione |
| **Schema Name** | `cai_leadoutcomeactivity` |
| **Logical Name** | `cai_leadoutcomeactivity` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text | Codice autogenerato per il record che rappresenta l'attività di esitazione | True | Simple | Autonumber pattern ; LDOUTACT00000001 |  |
| cai_leadid | cai_leadid | Lead | Lookup | Lead esitato | True | Simple | Target: Lead |  |
| cai_leadoutcomeid | cai_leadoutcomeid | Esito lead | Lookup | Esito applicato alla Lead | True | Simple | Target: Lead outcome |  |
| cai_notes | cai_notes | Note esitazione | Memo | Note inserite dall'utente in fase di esitazione | True | Simple | Memo |  |
| cai_appointmentid | cai_appointmentid | Appuntamento | Lookup | Contatto di tipo appuntamento | True | Simple | Target: appointment |  |
| cai_phonecallid | cai_phonecallid | Telefonata | Lookup | Contatto di tipo telefonata | True | Simple | Target: phonecall |  |
| cai_genericcontactid | cai_genericcontactid | Contatto generico | Lookup | Contatto generico | True | Simple | Target: cai_genericcontact |  |
| cai_contactdate | cai_contactdate | Data di contatto | DateTime | Data di censimento del contatto | True | Simple | None |  |
| cai_managerid | cai_managerid | Gestore | Lookup | Gestore che ha eseguito il contatto | True | Simple | None |  |
| cai_invalidcontactmethods | cai_invalidcontactmethods | Recapiti non validi | Multichoice | Recapiti contatto non validi | True | Simple | None |  |
| cai_interaction | cai_interaction | Interazione |  |  |  |  |  |  |
| cai_leadoutcomereason | cai_leadoutcomereason | Motivo Esito | Choice | Dettaglio motivazione in caso di esito: "Non interessato" oppure "Impossibilità a procedere" | True | Simple | None |  |

---

## 20. Gruppo prodotto

| Proprietà | Valore |
|---|---|
| **Entity Name** | Gruppo prodotto |
| **Plural Display Name** | Gruppi prodotto |
| **Schema Name** | `cai_productgroup` |
| **Logical Name** | `cai_productgroup` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Product Group | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Product Group | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_productgroupid | cai_productgroupid | Gruppo prodotto | Uniqueidentifier |  | False |  |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_code | cai_code | Codice | Text | Codice del gruppo prodotto da precedente catalogo | True | Simple | Format: Text ; Max length: 100 |  |

---

## 21. Regola smistamento Lead

| Proprietà | Valore |
|---|---|
| **Entity Name** | Regola smistamento Lead |
| **Plural Display Name** | Regole smistamento Lead |
| **Description** | Entità realizzata per definire il criterio di smistamento delle |
| **Schema Name** | `cai_dispatchingrule` |
| **Logical Name** | `cai_dispatchingrule` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_dispatchingruleid | cai_dispatchingruleid | Regola smistamento Lead | Guid |  | True | Simple |  |  |  |
| cai_sourcerequestid | cai_sourcerequestid | Fonte Richiesta | Lookup | Campo Fonte richiesta, ricevuto in ricezione lead (ex Ticket) | True | Simple |  | Targets: ; crp_fonterichiesta |  |
| cai_code | cai_code | Codice regola | Text | Codice regola | True | Simple |  | Autonumber pattern ; LDDSPR0001 |  |
| cai_iscustomer | cai_iscustomer | Cliente? | Choice | Campo Cliente?, ricevuto in ricezione lead (ex Ticket) | False | Simple |  | Global optionset IsCliente: ; 100000000: SI ; 100000001: NO ; 100000002: Null ; Default: N/A |  |
| cai_complexitylevelofadditionalfields | cai_complexitylevelofadditionalfields | Livello Complessità Campi Aggiuntivi | Whole number | Campo calcolato - livello complessità Campi aggiuntivi | True | Simple |  | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| cai_complexitylevelticketdata | cai_complexitylevelticketdata | Livello Complessità Dati Ticket | Whole number | Campo calcolato - livello complessità Dati Ticket | True | Simple |  | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| cai_name | cai_name | Nome Regola | Text |  | True | Simple |  | Format: Text ; Max length: 400 |  |
| cai_productid | cai_productid | Prodotto | Lookup | Il Prodotto da applicare alla Lead nel momento in cui fa match con la regola | True | Simple |  | Target: cai_product |  |
| cai_productserviceinterest | cai_productserviceinterest | Prodotto Servizio Interesse | Text | Campo Prodotto Servizio Interesse, ricevuto in ricezione lead (ex Ticket) | True | Simple |  | Format: Text ; Max length: 200 |  |
| cai_contactusformtype | cai_contactusformtype | Tipologia Form Contattaci | Text | Campo Tipologia Form Contattaci, ricevuto in ricezione lead (ex Ticket) | True | Simple |  | Format: Text ; Max length: 200 |  |
| cai_messagetype | cai_messagetype | Famiglia Prodotto | Text | Campo Famiglia Prodotto, ricevuto in ricezione lead (ex Ticket) | True | Simple |  | Format: Text ; Max length: 200 |  |
| cai_destination | cai_destination | Destinazione Lead | Choice | La destinazione prevista per la Lead | True | Simple |  | Rete; Servizio clienti |  |
| cai_leadtype | cai_leadtype | Tipologia Lead | Choice | La Tipologia di Lead da assegnare alla Lead nel momento in cui fa match con la regola | True | Simple |  | Global optionset Lead Types: ; Lead da CJ: 100000000 ; Lead mutui da portali terzi: 100000001 ; Lead mutui da sito: 100000002 ; Lead con fonte sito: 100000003 ; Lead con fonte ricontatto da DEM (escluse DEM CJ): 100000004 ; Lead con fonte APP Mobile: 100000005 ; Lead con fonte da Home Banking: 100000006 ; Lead con richiesta appuntamento via APP: 100000007 ; Lead derivante da Next Best Product: 100000008 ; Lead spontanea: 100000009 ; Suggerimenti: 100000010 |  |
| cai_assignmentdeadlinehours | cai_assignmentdeadlinehours | Tempo di scadenza presa in carico | Whole number | Il Tempo di scadenza presa in carico, espresso in ore, da assegnare alla Lead nel momento in cui fa match con la regola | True | Simple |  | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| cai_concurrencytimehours | cai_concurrencytimehours | Tempo di concorrenza | Whole number | Il Tempo di concorrenza, espresso in ore, da assegnare alla Lead nel momento in cui fa match con la regola | True | Simple |  | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| cai_attemptsbeforeescalationtocustomerservice | cai_attemptsbeforeescalationtocustomerservice | Numero tentativi prima del passaggio al Servizio clienti | Whole number | Il numero di tentativi massimo previsto prima del passaggio al servizio clienti, da assegnare alla Lead nel momento in cui fa match con la regola | True | Simple |  | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| statecode | statecode | Status | State |  | False | Simple |  | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status reason | Status |  | False | Simple |  | States: ; 1: Attivo ; 170950000: Bozza ; 2: Inactive |  |
| cai_leadformat | cai_leadformat | Formato del Lead | Choice |  | False | Simple |  | Global optionset "Formato del lead" |  |
| cai_firstassignment | cai_firstassignment | Prima assegnazione | Choice |  | True | Simple |  |  |  |

---

## 22. Lead (Lead)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Lead |
| **Plural Display Name** | Lead |
| **Description** | Prospect o opportunità di vendita potenziale. I lead vengono convertiti in account, contatti o opportunità se sono qualificati, in caso contrario vengono eliminati o archiviati. |
| **Schema Name** | `Lead` |
| **Logical Name** | `lead` |
| **Object Type Code** | 4 |
| **Is Custom Entity** | False |
| **Ownership Type** | UserOwned |

### Campi

| Field Type | Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Standard (Not used / System-owned) | accountid | AccountId | Account | Lookup | Identificatore univoco dell'account a cui è associato il lead. | False | Simple | None | Targets: ; account |  |
| Standard (Used / Configured) | address1_addressid | Address1_AddressId | Indirizzo 1: ID | Uniqueidentifier | Identificatore univoco dell'indirizzo 1. | False | Simple | None |  |  |
| Standard (Used / Configured) | address1_addresstypecode | Address1_AddressTypeCode | Indirizzo 1: tipo di indirizzo | Choice | Selezionare il tipo di indirizzo primario. | False | Simple | None | Options: ; 1: Valore predefinito ; Default: 1 |  |
| Standard (Used / Configured) | address1_addresstypecodename | Address1_AddressTypeCodeName | N/A | Virtual | N/A | False | Simple | None |  |  |
| Standard (Used / Configured) | address1_city | Address1_City | Comune di residenza (ex Città) | Text | Digitare la città per l'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 80 |  |
| Standard (Used / Configured) | address1_composite | Address1_Composite | Indirizzo 1 | Multiline Text | Mostra l'indirizzo primario completo. | False | Simple | None | Format: TextArea ; Max length: 1000 |  |
| Standard (Used / Configured) | address1_country | Address1_Country | Stato di cittadinanza (ex Paese/area geografica) | Text | Digitare il paese per l'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 80 |  |
| Standard (Used / Configured) | address1_county | Address1_County | Indirizzo 1: regione | Text | Digitare la regione per l'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 50 |  |
| Standard (Used / Configured) | address1_line1 | Address1_Line1 | Indirizzo di residenza (ex Via 1) | Text | Digitare la prima riga dell'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 250 |  |
| Standard (Used / Configured) | address1_line2 | Address1_Line2 | Numero civico (ex Via 2) | Text | Digitare la seconda riga dell'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 250 |  |
| Standard (Used / Configured) | address1_line3 | Address1_Line3 | Via 3 | Text | Digitare la terza riga dell'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 250 |  |
| Standard (Used / Configured) | address1_name | Address1_Name | Indirizzo 1: nome | Text | Digitare un nome descrittivo per l'indirizzo primario, ad esempio Sede centrale. | False | Simple | None | Format: Text Max length: 100 |  |
| Standard (Used / Configured) | address1_postalcode | Address1_PostalCode | CAP | Text | Digitare un codice postale per l'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 20 |  |
| Standard (Used / Configured) | address1_stateorprovince | Address1_StateOrProvince | Provincia di residenza (ex Provincia) | Text | Digitare la provincia dell'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 50 |  |
| Standard (Used / Configured) | address1_telephone1 | Address1_Telephone1 | Indirizzo 1: telefono 1 | Text | Digitare il numero di telefono principale associato all'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 50 |  |
| Standard (Used / Configured) | address1_telephone2 | Address1_Telephone2 | Indirizzo 1: telefono 2 | Text | Digitare un secondo numero di telefono associato all'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 50 |  |
| Standard (Used / Configured) | address1_telephone3 | Address1_Telephone3 | Indirizzo 1: telefono 3 | Text | Digita un terzo numero di telefono associato all'indirizzo primario. | False | Simple | None | Format: Text ; Max length: 50 |  |
|  | companyname | CompanyName | Nome società | Text | Digitare il nome della società associata al lead. Questa impostazione diventa il nome dell'account quando il lead è qualificato e convertito in un account cliente. | False | Simple | Recommended | Format: Text Max length: 100 |  |
|  | cai_firstndgprospectapplicant | ContactId | Contatto | Lookup | Identificatore univoco del contatto a cui è associato il lead. | False | Simple | None | Targets: ; contact |  |
| Standard (Used / Configured) | createdby | CreatedBy | Autore | Lookup | Mostra l'utente che ha creato il record. | False | Simple | None | Targets: ; systemuser |  |
| Standard (Used / Configured) | createdon | CreatedOn | Data creazione | DateTime | Data e ora di creazione del record. | False | Simple | None | Format: DateAndTime |  |
|  | createdonbehalfby | CreatedOnBehalfBy | Autore (delegato) | Lookup | Mostra l'utente che ha creato il record per conto di un altro utente. | False | Simple | None | Targets: ; systemuser |  |
|  | customerid | CustomerId | Nominativo | Customer | Seleziona l'account cliente o il contatto per fornire un link rapido a dettagli aggiuntivi sul cliente, ad esempio informazioni sull'account, impegni e opportunità. | False | Simple | None | Targets: ; account ; contact |  |
|  | customeridtype | CustomerIdType | Tipo di cliente | EntityName | N/A | False | Simple | None |  |  |
|  | description | Description | Descrizione | Multiline Text | Digitare informazioni aggiuntive per descrivere il lead, ad esempio un estratto del sito Web della società. | False | Simple | None | Format: TextArea ; Max length: 2000 |  |
|  | donotbulkemail | DoNotBulkEMail | Non consentire invio di messaggi e-mail in blocco | Two options | Specificare se il lead accetta l'invio di messaggi e-mail in blocco tramite campagne di marketing o mini-campagne. Se si seleziona Non consentire, il lead potrà essere aggiunto agli elenchi marketing ma sarà escluso dai messaggi e-mail. | False | Simple | None | True: Non consentire ; False: Consenti ; Default Value: False |  |
|  | donotemail | DoNotEMail | Non consentire invio di messaggi e-mail | Two options | Seleziona se il lead consente l'invio di mailing diretto da Microsoft Dynamics 365. | False | Simple | None | True: Non consentire ; False: Consenti ; Default Value: False |  |
|  | donotphone | DoNotPhone | Non consentire telefonate | Two options | Specificare se il lead consente le telefonate. | False | Simple | None | True: Non consentire ; False: Consenti ; Default Value: False |  |
|  | emailaddress1 | EMailAddress1 | E-mail | Text | Digitare l'indirizzo e-mail primario per il lead. | False | Simple | None | Format: Email ; Max length: 100 |  |
|  | emailaddress2 | EMailAddress2 | Indirizzo e-mail 2 | Text | Digitare l'indirizzo e-mail secondario per il lead. | False | Simple | None | Format: Email ; Max length: 100 |  |
|  | emailaddress3 | EMailAddress3 | Indirizzo e-mail 3 | Text | Digitare un terzo indirizzo e-mail per il lead. | False | Simple | None | Format: Email ; Max length: 100 |  |
|  | firstname | FirstName | Nome | Text | Digitare il nome del contatto primario per il lead per garantire che il prospect sia indicato correttamente nelle chiamate di vendita, nei messaggi e-mail e nelle campagne di marketing. | False | Simple | Recommended | Format: Text ; Max length: 50 |  |
|  | followemail | FollowEmail | Segui impegno e-mail | Two options | Specifica se consentire o meno che gli impegni dei messaggi e-mail inviati al lead vengano seguiti fornendo informazioni quali: numero di volte in cui un messaggio viene aperto, numero di visualizzazioni degli allegati e numero di clic sul collegamento. | False | Simple | None | True: Consenti ; False: Non consentire ; Default Value: True |  |
|  | followemailname | FollowEmailName | N/A | Virtual | N/A | False | Simple | None |  |  |
|  | fullname | FullName | Lead | Text | Combina e mostra nome e cognome del lead per consentire di mostrare il nome completo in visualizzazioni e report. | False | Simple | None | Format: Text ; Max length: 160 |  |
|  | industrycode | IndustryCode | Settore | Choice | Selezionare il settore primario dell'azienda del lead da usare nella segmentazione di marketing e nell'analisi demografica. | False | Simple | None | Options: ; 3: Industrie alimentari, delle bevande e del tabacco ; 16: Commercio all'ingrosso, al dettaglio, riparazioni ; 20: Editoria e stampa ; 34: Agricoltura, caccia, pesca e silvicoltura ; 38: Altre industrie manifatturiere ; 43: Altre attività di servizi ; 44: Fabbricazione di prodotti chimici ; 53: Edilizia ; 59: Estrazione di minerali energetici e non energetici ; 61: Prod. e distrib. di energia elettrica, gas e acqua ; 62: Commercio all'ingrosso, al dettaglio, riparazioni ; 63: Alberghi, ristoranti e pubblici esercizi ; 65: Attività immobiliari, noleggio ; 66: Pubblica Amministrazione e difesa; assicurazione soc. obbl. ; 67: Istruzione ; 68: Sanità e altri servizi sociali ; 69: Altri servizi pubblici, sociali e personali ; 71: Organizzazioni ed organismi extraterritoriali ; 74: Informatica e attività connesse ; 76: Industrie alimentari, delle bevande e del tabacco ; 93: Industrie tessili e dell'abbigliamento ; 119: Fabbricazione di articoli in gomma e plastica ; 123: Fabbricazione di prodotti farmaceutici e cosmetici ; 124: Poste e telecomunicazioni ; 125: Attività delle banche centrali ; 126: Attività legali e contabili ; 127: Consulenza amministrativo-gestionale ; 128: Pubblicità ; 129: Fabbricazione macchine e apparecchi meccanici ; 130: Fabbricazione macchine per ufficio e sistemi informatici ; 131: Fabbricazione macchine e apparecchi elettrici ; 132: Fabbricazione apparecchi di precisione ; 133: Fabbricazione di mezzi di trasporto ; 134: Trasporti, magazzinaggio ; Default: N/A |  |
|  | jobtitle | JobTitle | Posizione | Text | Digitare la posizione del contatto primario per il lead per garantire che il prospect sia indicato correttamente nelle chiamate di vendita, nei messaggi e-mail e nelle campagne di marketing. | False | Simple | None | Format: Text Max length: 100 |  |
|  | lastname | LastName | Cognome | Text | Digitare il cognome del contatto primario per il lead per garantire che il prospect sia indicato correttamente nelle chiamate di vendita, nei messaggi e-mail e nelle campagne di marketing. | False | Simple | ApplicationRequired | Format: Text ; Max length: 50 |  |
|  | leadid | LeadId | Lead | Uniqueidentifier | Identificatore univoco del lead. | False | Simple | SystemRequired |  |  |
|  | middlename | MiddleName | Secondo nome | Text | Digitare il secondo nome o l'iniziale del contatto primario per il lead per garantire che il prospect sia indicato correttamente. | False | Simple | None | Format: Text ; Max length: 50 |  |
|  | mobilephone | MobilePhone | Cellulare | Text | Digitare il numero di cellulare per il contatto primario per il lead. | False | Simple | None | Format: Text ; Max length: 20 |  |
| Standard (Used / Configured) | modifiedby | ModifiedBy | Autore modifica | Lookup | Mostra l'utente che ha eseguito l'ultimo aggiornamento del record. | False | Simple | None | Targets: ; systemuser |  |
| Standard (Used / Configured) | modifiedon | ModifiedOn | Data di modifica | DateTime | Data e ora di modifica del record. | False | Simple | None | Format: DateAndTime |  |
|  | modifiedonbehalfby | ModifiedOnBehalfBy | Autore modifica (delegato) | Lookup | Mostra l'utente che ha eseguito l'ultimo aggiornamento del record per conto di un altro utente. | False | Simple | None | Targets: ; systemuser |  |
|  | need | Need | Esigenza | Choice | Scegliere il livello di esigenza per la società del lead. | False | Simple | None | Options: ; 0: Irrinunciabile ; 1: Necessaria ; 2: Accessoria ; 3: Nessuna esigenza ; Default: N/A |  |
|  | numberofemployees | NumberOfEmployees | N. dipendenti | Whole number | Digitare il numero di dipendenti che lavorano presso la società associata al lead da usare nella segmentazione di marketing e nell'analisi demografica. | False | Simple | None | Minimum value: 0 ; Maximum value: 1000000 |  |
|  | originatingcaseid | OriginatingCaseId | Caso di origine | Lookup | Questo attributo è usato per i processi aziendali servizio di esempio. | False | Simple | None | Targets: ; incident |  |
|  | overriddencreatedon | OverriddenCreatedOn | Data di creazione record | DateTime | Data e ora di migrazione del record. | False | Simple | None | Format: DateOnly |  |
| Standard (Used / Configured) | ownerid | OwnerId | In carico a | Owner | ID proprietario | False | Simple | SystemRequired | Targets: ; systemuser ; team |  |
| Standard (Used / Configured) | owningbusinessunit | OwningBusinessUnit | Business Unit proprietaria | Lookup | Identificatore univoco della Business Unit a cui appartiene il record | False | Simple | None | Targets: ; businessunit |  |
|  | parentaccountid | ParentAccountId | Account padre per il lead | Lookup | Scegli un account a cui connettere il lead in modo che la relazione sia visibile nei report e nelle analisi. | False | Simple | None | Targets: ; account |  |
|  | parentcontactid | ParentContactId | Contatto padre per il lead | Lookup | Scegli un contatto a cui connettere il lead in modo che la relazione sia visibile nei report e nelle analisi. | False | Simple | None | Targets: ; contact |  |
|  | prioritycode | PriorityCode | Score | Choice | Selezionare la priorità in modo che i clienti preferiti o i problemi critici vengano gestiti rapidamente. | False | Simple | None | Options: ; 1: Valore predefinito ; Default: 1 |  |
|  | qualifyingopportunityid | QualifyingOpportunityId | Opportunità qualificante | Lookup | Scegli l'opportunità in base alla quale il lead è stato qualificato e convertito. | False | Simple | None | Targets: ; opportunity |  |
|  | relatedobjectid | RelatedObjectId | Risposta campagna correlata | Lookup | Risposta campagna correlata. | False | Simple | None | Targets: ; campaignresponse |  |
|  | revenue | Revenue | Ricavi annuali | Currency | Digitare i ricavi annuali della società associati al lead per indicare informazioni sull'azienda del prospect. | False | Simple | None | Minimum value: 0 ; Maximum value: 100000000000000 ; Precision: 2 |  |
|  | revenue_base | Revenue_Base | Ricavi annuali (Base) | Currency | Value of the Ricavi annuali in base currency. | False | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 4 |  |
| Standard (Used / Configured) | statecode | StateCode | Stato | State | Mostra se il lead è aperto o impostato come qualificato o non qualificato. I lead impostati come qualificati e non qualificati sono di sola lettura e non possono essere modificati a meno che non vengano riattivati. | False | Simple | SystemRequired | States: ; 0: Apri ; 1: Qualificato ; 2: Non qualificato |  |
| Standard (Used / Configured) | statuscode | StatusCode | Motivo stato | Status | Selezionare lo stato del lead. | False | Simple | None | States: ; 1: Nuovo <-- default status (in afu indicato Open) ; 2: Contattato ; 3: Qualificato ; 4: Perso ; 5: Non contattabile ; 6: Non più interessato ; 7: Annullato ; 100000000: In lavorazione - (su state 0 "Apri") ; 100000001: Chiuso - (su state 2, "Non qualificato") ; 100000002: Sospeso - (su state 0, "Apri") |  |
|  | subject | Subject | Segmento | Text | Digitare un argomento o un nome descrittivo, ad esempio l'ordine previsto, il nome della società o l'elenco marketing di origine, per identificare il lead. | False | Simple | ApplicationRequired | Format: Text ; Max length: 300 |  |
|  | telephone1 | Telephone1 | Telefono di contatto (ex Telefono ufficio) | Text | Digitare il numero di cellulare dell'ufficio per il contatto primario per il lead. | False | Simple | None | Format: Text ; Max length: 50 |  |
|  | telephone2 | Telephone2 | Telefono abitazione | Text | Digitare il numero di telefono dell'abitazione per il contatto primario per il lead. | False | Simple | None | Format: Text ; Max length: 50 |  |
|  | telephone3 | Telephone3 | Altro telefono | Text | Digitare un numero di telefono alternativo per il contatto primario per il lead. | False | Simple | None | Format: Text ; Max length: 50 |  |
|  | websiteurl | WebSiteUrl | Sito Web | Text | Digitare l'URL del sito Web della società associata al lead. | False | Simple | None | Format: Url ; Max length: 200 |  |
| Custom (Used) | cai_leadtype | cai_leadtype | Tipologia Lead | Choice | Tipologia della Lead | True | Simple | None | Global optionset Tipologia Lead: ; Lead da CJ: 100000000 ; Lead mutui da portali terzi: 100000001 ; Lead mutui da sito: 100000002 ; Lead con fonte sito: 100000003 ; Lead con fonte ricontatto da DEM (escluse DEM CJ): 100000004 ; Lead con fonte APP Mobile: 100000005 ; Lead con fonte da Home Banking: 100000006 ; Lead con richiesta appuntamento via APP: 100000007 ; Lead derivante da Next Best Product: 100000008 ; Lead spontanea: 100000009 ; Suggerimenti: 100000010 |  |
| Custom (Used) | cai_leadformat | cai_leadformat | Formato del Lead | Choice |  | True | Simple | None | Global optionset: Formato Lead: {Lead Implicito; Lead Esplicito} |  |
| Custom (Used) | cai_leadscore | cai_leadscore | Lead Score o Temperatura o Priorità | Choice |  | True | ??? | None | Global option set (Caldo / Tiepido / Freddo) |  |
| Custom (Used) | cai_mainlead | cai_mainlead | Lead Principale | Two options |  | True | Simple | None | Principale / Altro |  |
| Custom (Used) | cai_segmentname | cai_segmentname | Segmento del cliente | Text | Il valore del segmento del cliente cui è riferita la Lead | True | Simple | None | Format: Text Max length: 100 |  |
| Custom (Used) | cai_retailassignmentdeadlinelefttime | cai_retailassignmentdeadlinelefttime | Tempo rimanente alla scadenza assegnazione Rete | Whole number | Da impostare la regola di calcolo: "Data scadenza - Now" | True | Calculated | None | Format: Duration |  |
| Custom (Used) | cai_retailassignmentdeadlinedate | cai_retailassignmentdeadlinedate | Data scadenza assegnazione Rete | DateTime |  | True | Simple | None | Format: DateAndTime |  |
| Custom (Used) | cai_leadcode | cai_leadcode | Codice Lead | Text |  | True | Simple | None | Format: Autonumber LD00000000 |  |
| Custom (Used) | cai_takeinchargedate | cai_takeinchargedate | Data presa in carico Lead | DateTime |  | True | Simple | None | Format: DateAndTime |  |
| Custom (Used) | cai_customerleadttype | cai_customerleadttype | Tipologia Lead-Cliente | Choice | Indica la tipologia di Lead: Lead Cliente Anagrafato / Lead Prospect / Lead Mutuo Cliente / Lead Mutuo Ex-Cliente / Lead Mutuo Prospect | True | Simple | None | Global optionset: Lead Cliente Anagrafato / Lead Prospect / Lead Mutuo Cliente / Lead Mutuo Ex-Cliente / Lead Mutuo Prospect |  |
| Custom (Used) | cai_leadactivefrom | cai_leadactivefrom | Lead attiva da | Whole number |  | True | Simple | None | Format: Duration |  |
| Custom (Used) | cai_assigneduserid | cai_assigneduserid | Utente incaricato | Lookup |  | True | Simple | None | Targets: ; systemuser |  |
| Custom (Used) | cai_futureinterestdate | cai_futureinterestdate | Data interesse futuro | DateTime |  | True | Simple | None | Format: DateAndTime |  |
| Custom (Used) | cai_productid | cai_productid | Prodotto | Lookup |  | True | Simple | None | Targets: cai_product |  |
| Custom (Used) | cai_sourcerequestid | cai_sourcerequestid | Fonte Richiesta | Lookup | Campo Fonte richiesta, ricevuto in ricezione lead (ex Ticket) | True | Simple | None | Targets: ; cai_requestorigin |  |
| Custom (Used) | cai_iscustomer | cai_iscustomer | Cliente? | Choice | Campo Cliente?, ricevuto in ricezione lead (ex Ticket) | True | Simple | None | Global optionset IsCliente: ; 100000000: SI ; 100000001: NO ; 100000002: Null ; Default: N/A |  |
| Custom (Used) | cai_productserviceinterest | cai_productserviceinterest | Prodotto Servizio Interesse | Text | Campo Prodotto Servizio Interesse, ricevuto in ricezione lead (ex Ticket) | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_contactusformtype | cai_contactusformtype | Tipologia Form Contattaci | Text | Campo Tipologia Form Contattaci, ricevuto in ricezione lead (ex Ticket) | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_messagetype | cai_messagetype | Famiglia Prodotto | Text | Campo Famiglia Prodotto, ricevuto in ricezione lead (ex Ticket) | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_attemptsbeforeescalationtocustomerservice | cai_attemptsbeforeescalationtocustomerservice | Numero tentativi prima del passaggio al Servizio clienti | Whole number | Il numero di tentativi massimo previsto prima del passaggio al servizio clienti | True | Simple | None | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_brokermortgageloanid | cai_brokermortgageloanid | Canale intermediario mutuo | Lookup | L'intermediario o il portale banca che ha generato la richiesta di mutuo | True | Simple | None | Targets: cai_brokermortgageloan |  |
| Custom (Used) | cai_firstassignment | cai_firstassignment | Ambito di prima assegnazione | Choice | Specifica a quale ambito è stata assegnata la lead per la prima volta dalla creazione (Global Option Set) ; Rete ; Servizio Clienti | True | Simple | None | Global optionset "cai_assignmentscope" (Rete; Servizio clienti; default value = null) |  |
| Custom (Used) | cai_sendingstatustofree | cai_sendingstatustofree | Invio lead a Free | Choice | Questo valore guiderà l'invio della Lead verso Free e indicherà se sia stato ricevuto un errore in fase di invio | True | Simple | None | Non inviato - Inviato - Reinoltrato da Servizio clienti - In errore |  |
| Custom (Used) | cai_errorsendingtofree | cai_errorsendingtofree | Errore in invio a FrEE | Multiline Text | Testo dell'errore riscontrato in invio lead a Free |  |  |  |  |  |
| Custom (Used) | cai_campaignid | cai_campaignid | Campagna | Lookup | La campagna di appartenenza del Suggerimento | True | Simple | None | Targets: cai_campaign |  |
| Custom (Used) | cai_campaignofferid | cai_campaignofferid | Offerta campagna | Lookup | L'offerta in cui rientra il Suggerimento | True | Simple | None | Targets: cai_campaignoffer |  |
| Custom (Used) | cai_channel | cai_channel | Canale | Text | Canale di destinazione del suggerimento | True | Simple | None | Format: Text Max length: 100 |  |
| Custom (Used) | cai_ndgcode | cai_ndgcode | Codice NDG | Text | Codice ndg del cliente cui è riferito il suggerimento | True | Simple | None | Format: Text Max length: 100 |  |
| Custom (Used) | cai_treatmentcode | cai_treatmentcode | Codice Treatment | Text | Il codice Treatment (codice trattamento) del Suggerimento | True | Simple | None | Format: Text Max length: 100 |  |
| Custom (Used) | cai_migrated | cai_migrated | Lead/Suggerimento migrato | Two options | Indica se il record sia stato migrato o meno | True | Simple | None |  |  |
| Custom (Used) | cai_customertype | cai_customertype | Tipo di anagrafica | Two options | Indica se si tratta di un cliente Account o Contatto | True | Simple | SystemRequired | Contatto: 0 ; Account: 1 |  |
| Custom (Used) | cai_plh1 | cai_plh1 | Placeholder campagna 1 | Text |  | True | Simple | None | Format: Text Max length: 100 |  |
| Custom (Used) | cai_plh2 | cai_plh2 | Placeholder campagna 2 | Text |  | True | Simple | None | Format: Text ; Max length: 101 |  |
| Custom (Used) | cai_plh3 | cai_plh3 | Placeholder campagna 3 | Text |  | True | Simple | None | Format: Text ; Max length: 102 |  |
| Custom (Used) | cai_plh4 | cai_plh4 | Placeholder campagna 4 | Text |  | True | Simple | None | Format: Text ; Max length: 103 |  |
| Custom (Used) | cai_plh5 | cai_plh5 | Placeholder campagna 5 | Text |  | True | Simple | None | Format: Text ; Max length: 104 |  |
| Custom (Used) | cai_plh6 | cai_plh6 | Placeholder campagna 6 | Text |  | True | Simple | None | Format: Text ; Max length: 105 |  |
| Custom (Used) | cai_plh7 | cai_plh7 | Placeholder campagna 7 | Text |  | True | Simple | None | Format: Text ; Max length: 106 |  |
| Custom (Used) | cai_plh8 | cai_plh8 | Placeholder campagna 8 | Text |  | True | Simple | None | Format: Text ; Max length: 107 |  |
| Custom (Used) | cai_plh9 | cai_plh9 | Placeholder campagna 9 | Text |  | True | Simple | None | Format: Text ; Max length: 108 |  |
| Custom (Used) | cai_plh10 | cai_plh10 | Placeholder campagna 10 | Text |  | True | Simple | None | Format: Text ; Max length: 109 |  |
| Custom (Used) | cai_currentassignment | cai_currentassignment | Ambito di assegnazione corrente | Choice | Specifica a quale ambito è correntemente assegnata la lead (Global Option Set) ; Rete ; Servizio Clienti | True | Simple | None | Rete; Servizio clienti; default value = null |  |
| Custom (Used) | cai_concurrencyperiodstartdate | cai_concurrencyperiodstartdate | Data di inizio del periodo di concorrenza | DateTime |  | True | Simple | None |  |  |
| Custom (Used) | cai_concurrencyperiodlefttime | cai_concurrencyperiodlefttime | Tempo rimanente al periodo di concorrenza | Whole number | Da impostare la regola di calcolo: "Now - Data inizio del periodo di concorrenza" | True | Calculated | None | Format: Duration |  |
| Custom (Used) | cai_visibility | cai_visibility | Ambiti di visibilità della Lead | Choice | Specifica gli ambiti di visibilità della Lead (Global Option Set) ; Rete ; Servizio Clienti ; Concorrenza | True | Simple | None | Valori: Rete, Servizio clienti, Concorrenza. ; Se prima assegnazione Rete -> Visibilità: Rete ; Se prima assegnazione Servizio clienti -> Visibilità: Servizio clienti ; Se raggiunto il periodo di concorrenza, laddove Data concorrenza è una data valida -> Visibilità: Concorrenza |  |
| Custom (Used) | cai_passedthroughretail | cai_passedthroughretail | Transitata su Retail | Two options |  | True | Simple | None |  |  |
| Custom (Used) | cai_passedthroughcustomerservice | cai_passedthroughcustomerservice | Transitata su Customer Service | Two options |  | True | Simple | None |  |  |
| Custom (Used) | cai_receiveddate | cai_receiveddate | Data di ricezione indicata sul record ricevuto dall'esterno (valido per ex ticket) | DateTime |  | True | Simple | None |  |  |
| Custom (Used) | cai_origininformations | cai_origininformations | Origine lead/suggerimento | Text | Riporta informazioni sulla tipologia di lead e sul prodotto associato ed eventualmente il CJ di riferimento |  |  |  |  |  |
| Campi lead mutuo |  |  |  |  |  |  |  |  |  |  |
| Custom (Used) | cai_leadloanschannels | cai_leadloanschannels | Canali lead mutui | Choice |  | True | Simple | None | Options: ; 100000000: Mutuo adesso ; 100000001: Mutuo adesso_Lead breve ; 100000002: Mutui online ; 100000003: Mutui.it ; 100000004: Telemutuo ; 100000005: Mutui si ; 100000006: Mutuisupermarket ; 100000007: Immobiliare ; 100000008: Facebook ; 100000009: N/A ; Default: N/A |  |
| Custom (Used) | cai_number | cai_number | Numero | Whole number |  | True | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_loanreason | cai_loanreason | Motivazione | Choice |  | True | Simple | None | Options: ; 100000000: Posizione non finanziabile ; 100000001: Ricevuta su altro canale ; 100000002: Altra tipologia di mutuo ; 100000003: Concluso con altro istituto ; 100000004: Perso immobile ; 100000005: Non interessato ; 100000006: R/R ; 100000007: LTV ; 100000008: Solo informativo ; 100000009: Problemi personali ; 100000010: Nessuno sviluppo ; 100000011: Fuori territorialità ; 100000012: Richiesta doppia/prova ; 100000013: N/A ; Default: N/A |  |
| Custom (Used) | cai_loanexpired | cai_loanexpired | Scaduto | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_branchrequested | cai_branchrequested | Filiale richiesta | Text |  | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_consaprequest | cai_consaprequest | Richiesta Consap | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_forwardingdate | cai_forwardingdate | Data di inoltro | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_expirationdate | cai_expirationdate | Data scadenza | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_propertysearchstatus | cai_propertysearchstatus | Stato ricerca immobile | Choice |  | True | Simple | None | Options: ; 100000000: Firmato compromesso ; 100000001: Immobile già di proprietà ; 100000002: Fatta proposta acquisto ; 100000003: Individuato immobile ; 100000004: Alla ricerca dell'immobile ; 100000005: N/A ; Default: N/A |  |
| Custom (Used) | cai_requestpurpose | cai_requestpurpose | Finalità della richiesta | Choice |  | True | Simple | None | Options: ; 100000000: Acquisto ; 100000001: Acquisto prima casa ; 100000002: Acquisto seconda casa ; 100000003: Acquisto asta giudiziaria ; 100000004: Acquisto prima casa Consap ; 100000005: Surroga ; 100000006: Ristrutturazione ; 100000007: Altro ; 100000008: N/A ; Default: N/A |  |
| Custom (Used) | cai_fulldigitalloan | cai_fulldigitalloan | Mutuo full Digital | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_substandardloans | cai_substandardloans | Incagli | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_substandardloansstartdate | cai_substandardloansstartdate | Data inizio incagli | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_nonperformingloansstartdate | cai_nonperformingloansstartdate | Data inizio sofferenze | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_substandardloansenddate | cai_substandardloansenddate | Data fine incagli | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_nonperformingloansenddate | cai_nonperformingloansenddate | Data fine sofferenze | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_alreadybankcustomer | cai_alreadybankcustomer | Già cliente banca pres | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_firstndgapplicant | cai_firstndgapplicant | NDG Rich. 1 | Text |  | True | Simple | None | Format: Text ; Max length: 100 |  |
| Custom (Used) | cai_firstndgprospectapplicant | cai_firstndgprospectapplicant | NDG Prospect Rich. 1 | Text |  | True | Simple | None | Format: Text ; Max length: 100 |  |
| Custom (Used) | cai_firstapplicantfirstname | cai_firstapplicantfirstname | Nome Rich. 1 | Text |  | True | Simple | None |  |  |
| Custom (Used) | cai_firstapplicantlastname | cai_firstapplicantlastname | Cognome Rich. 1 | Text |  |  |  |  |  |  |
| Custom (Used) | cai_firstapplicantfiscalcode | cai_firstapplicantfiscalcode | Codice Fiscale Rich. 1 | Text |  | True | Simple | None | Format: Text ; Max length: 100 |  |
| Custom (Used) | cai_firstapplicantbirthdate | cai_firstapplicantbirthdate | Data di nascita Rich. 1 | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_firstapplicantbirthcountry | cai_firstapplicantbirthcountry | Stato di nascita Rich. 1 | Text |  | False | Simple | None |  |  |
| Custom (Used) | cai_firstapplicantcitizenshipcountry | cai_firstapplicantcitizenshipcountry | Stato di cittadinanza Rich. 1 | Text |  |  |  |  |  |  |
| Custom (Used) | cai_firstapplicantbirthprovince | cai_firstapplicantbirthprovince | Provincia di nascita Rich. 1 | Text |  |  |  |  |  |  |
| Custom (Used) | cai_firstndgapplicantbirthcity | cai_firstndgapplicantbirthcity | Comune di nascita Rich. 1 | Text |  | False | Simple | None |  |  |
| Custom (Used) | cai_firstapplicantgendercode | cai_firstapplicantgendercode | Sesso Rich. 1 | Choice |  | True | Simple | None | Options: ; 100000000: F ; 100000001: M ; 100000002: N/A ; Default: N/A |  |
| Custom (Used) | cai_firstapplicantmaritalstatus | cai_firstapplicantmaritalstatus | Stato civile Rich. 1 | Choice |  | True | Simple | None | Options: ; 100000000: Celibe/Nubile ; 100000001: Coniugato/a (comunione dei beni) ; 100000002: Coniugato/a (separazione dei beni) ; 100000003: Separato/a ; 100000004: Vedovo/a ; 100000005: Divorziato/a ; 100000006: N/A ; Default: N/A |  |
| Custom (Used) | cai_firstapplicantmembersofthehousehold | cai_firstapplicantmembersofthehousehold | Componenti nucleo famigliare Rich. 1 | Whole number |  | True | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_secondndgapplicant | cai_secondndgapplicant | Secondo richiedente NDG | Text |  | True | Simple | None | Format: Text ; ; Max length: 100 |  |
| Custom (Used) | cai_secondndgprospectapplicant | cai_secondndgprospectapplicant | Secondo richiedente Prospect | Text |  | True | Simple | None | Format: Text ; ; Max length: 100 |  |
| Custom (Used) | cai_dependentfamilymember | cai_dependentfamilymember | Familiari a carico | Whole number |  | True | Simple | None | Minimum value: 0 ; ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_currentoccupation | cai_currentoccupation | Occupazione attuale | Text |  | True | Simple | None | Format: Text ; ; Max length: 200 |  |
| Custom (Used) | cai_employer | cai_employer | Datore di lavoro | Text |  | True | Simple | None | Format: Text ; ; Max length: 200 |  |
| Custom (Used) | cai_pepcrimeamlinformationpresence | cai_pepcrimeamlinformationpresence | Presenza informazione Pep/Crime/Aml” | Choice |  | True | Simple | None | Options: ; ; 100000000: Conforme ; ; 100000001: Non conforme ; ; 100000002: Non verificabile ; ; 100000003: N/A ; ; Default: N/A |  |
| Custom (Used) | cai_lengthofservice | cai_lengthofservice | Anzianità lavorativa | Whole number |  | True | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_jobdescription | cai_jobdescription | Descrizione occupazione | Multiline Text |  | True | Simple | None | Format: Text ; Max length: 5000 |  |
| Custom (Used) | address2_stateorprovince | Address2_StateOrProvince | Provincia di nascita | Text | Digitare la provincia dell'indirizzo secondario. | False | Simple | None | Format: Text ; Max length: 50 |  |
| Custom (Used) | cai_membersofthehousehold | cai_membersofthehousehold | Componenti nucleo famigliare | Whole number |  | True | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_jobposition | cai_jobposition | Posizione lavorativa | Choice |  | True | Simple | None | Options: ; 100000000: Dip tempo indeterminato ; 100000001: Dip tempo determinato ; 100000002: Autonomo con partita IVA ; 100000003: Titolare ditta ; 100000004: Professionista iscritto albo ; 100000005: Pensionato ; 100000006: Rendita da partecipazioni ; 100000007: N/A ; Default: N/A |  |
| Custom (Used) | cai_personalincome | cai_personalincome | Reddito personale | Currency |  | True | Simple | None | Minimum value: 0 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_othersincomesources | cai_othersincomesources | Altre fonti di reddito | Text |  | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_monthlypayment | cai_monthlypayment | Mensilità | Whole number |  | True | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_requestpurpose | cai_requestpurpose | Finalità della richiesta | Choice |  | True | Simple | None | Options: ; 100000000: Acquisto ; 100000001: Acquisto prima casa ; 100000002: Acquisto seconda casa ; 100000003: Acquisto asta giudiziaria ; 100000004: Acquisto prima casa Consap ; 100000005: Surroga ; 100000006: Ristrutturazione ; 100000007: Altro ; 100000008: N/A ; Default: N/A |  |
| Custom (Used) | cai_propertyvalue | cai_propertyvalue | Valore immobile | Currency |  | True | Simple | None | Minimum value: 0 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_loanamount | cai_loanamount | Importo mutuo | Currency |  | True | Simple | None | Minimum value: 0 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_typeofrate | cai_typeofrate | Tipo di tasso | Choice |  | True | Simple | None | Options: ; 100000000: Fisso ; 100000001: Variabile con cap ; 100000002: Variabile ; 100000003: Altro ; 100000004: N/A ; Default: N/A |  |
| Custom (Used) | cai_duration | cai_duration | Durata | Whole number |  | True | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| Custom (Used) | cai_ltv | cai_ltv | LTV % | Decimal |  | True | Simple | None | Minimum value: -100000000000 ; Maximum value: 100000000000 ; Precision: 2 |  |
| Custom (Used) | cai_rr | cai_rr | R/R% | Decimal |  | True | Simple | None | Minimum value: -100000000000 ; Maximum value: 100000000000 ; Precision: 2 |  |
| Custom (Used) | cai_institute | cai_institute | Istituto | Text |  | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_taeg | cai_taeg | TAEG | Decimal |  | True | Simple | None | Minimum value: 0 ; Maximum value: 100000000000 ; Precision: 2 |  |
| Custom (Used) | cai_tan | cai_tan | TAN | Decimal |  | True | Simple | None | Minimum value: 0 ; Maximum value: 100000000000 ; Precision: 2 |  |
| Custom (Used) | cai_spread | cai_spread | Spread | Decimal |  | True | Simple | None | Minimum value: -100000000000 ; Maximum value: 100000000000 ; Precision: 2 |  |
| Custom (Used) | cai_calculatedpaymentamount | cai_calculatedpaymentamount | Importo della rata calcolato | Currency |  | True | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_productname | cai_productname | Nome prodotto | Text |  | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_initialexpenses | cai_initialexpenses | Spese iniziali | Currency |  | True | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_propertysearchstatus | cai_propertysearchstatus | Stato ricerca immobile | Choice |  | True | Simple | None | Options: ; 100000000: Firmato compromesso ; 100000001: Immobile già di proprietà ; 100000002: Fatta proposta acquisto ; 100000003: Individuato immobile ; 100000004: Alla ricerca dell'immobile ; 100000005: N/A ; Default: N/A |  |
| Custom (Used) | cai_semaphore | cai_semaphore | Semaforo | Choice |  | True | Simple | None | Options: ; 100000000: Verde ; 100000001: Giallo ; 100000002: Rosso ; 100000003: N/A ; Default: N/A |  |
| Custom (Used) | cai_propertycity | cai_propertycity | Comune immobile | Text |  | True | Simple | None | Format: Text ; Max length: 100 |  |
| Custom (Used) | cai_properyprovince | cai_properyprovince | Provincia immobile | Text |  | True | Simple | None | Format: Text ; Max length: 100 |  |
| Custom (Used) | cai_propertytype | cai_propertytype | Tipo immobile | Choice |  | True | Simple | None | Options: ; 100000000: Villa ; 100000001: Villa a schiera ; 100000002: Rustico ; 100000003: Palazzina ; 100000004: Altro ; 100000005: N/A ; Default: N/A |  |
| Custom (Used) | cai_totalarea | cai_totalarea | Superficie totale | Choice |  | True | Simple | None | Options: ; 100000000: Piccola ; 100000001: Media ; 100000002: Grande ; Default: N/A |  |
| Custom (Used) | cai_marketvalue | cai_marketvalue | Valore di mercato | Currency |  | True | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_propertycondition | cai_propertycondition | Condizione immobile | Choice |  | True | Simple | None | Options: ; 100000000: Nuovo ; 100000001: Buono stato ; 100000002: Discreto stato ; 100000003: Da ristrutturare ; 100000004: Da ultimare ; 100000005: Da costruire ; 100000006: N/A ; Default: N/A |  |
| Custom (Used) | cai_propertywithmortgage | cai_propertywithmortgage | Immobile con ipoteca | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_energyclass | cai_energyclass | Classe energetica | Choice |  | True | Simple | None | Options: ; 100000000: A ; 100000001: B ; 100000002: N/A ; Default: N/A |  |
| Custom (Used) | cai_firstloan | cai_firstloan | Primo finanziamento | Choice |  | True | Simple | None | Options: ; 100000000: c ; Default: N/A |  |
| Custom (Used) | cai_remainingloanamount | cai_remainingloanamount | Importo residuo finanziamento | Currency |  | True | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_firstloanmonthlypayment | cai_firstloanmonthlypayment | Rata mensile primo finanziamento | Currency |  | True | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_earlyterminationfirstloan | cai_earlyterminationfirstloan | Estinzione anticipata primo finanziamento | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_existingloanbank | cai_existingloanbank | Banca del mutuo in essere | Choice |  | True | Simple | None | Options: ; 100000000: Cariparma ; 100000001: Carispezia ; 100000002: Friuladria ; 100000003: N/A ; Default: N/A |  |
| Custom (Used) | cai_existingloansigningdate | cai_existingloansigningdate | Data stipula mutuo in essere | DateTime |  | True | Simple | None | Format: DateOnly |  |
| Custom (Used) | cai_existingloanpaymentamount | cai_existingloanpaymentamount | Importo rata mutuo in essere | Currency |  | True | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_addionalnotes | cai_addionalnotes | Note aggiuntive | Multiline Text |  | True | Simple | None | Format: Text ; Max length: 10000 |  |
| Custom (Used) | cai_practicecode | cai_practicecode | Codice pratica | Text |  | True | Simple | None | Format: Text ; Max length: 100 |  |
| Custom (Used) | cai_paymentmonth | cai_paymentmonth | Mese erogazione | Text |  | True | Simple | None | Format: Text ; Max length: 100 |  |
| Custom (Used) | cai_paymentamount | cai_paymentamount | Importo | Currency |  | True | Simple | None | Minimum value: -922337203685477 ; Maximum value: 922337203685477 ; Precision: 2 |  |
| Custom (Used) | cai_paid | cai_paid | Pagato | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_invoicereference | cai_invoicereference | Fattura di riferimento | Text |  | True | Simple | None | Format: Text ; Max length: 200 |  |
| Custom (Used) | cai_loanpurposewithchoice | cai_loanpurposewithchoice | Finalità mutuo con scelta | Choice |  | True | Simple | None | Options: ; 100000000: Acquisto ; 100000001: Surroga ; 100000002: Ristrutturazione ; 100000003: N/A ; Default: N/A |  |
| Custom (Used) | cai_paymentmodewithchoice | cai_paymentmodewithchoice | Modalità erogazione con scelta | Choice |  | True | Simple | None | Options: ; 100000000: In convenzione ; 100000001: Fuori convenzione ; 100000002: Oltre i termini convenzione ; 100000003: N/A ; Default: N/A |  |
| Custom (Used) | cai_administrativechecksinprogress | cai_administrativechecksinprogress | In corso di verifiche autorizzative | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_authorized | cai_authorized | Autorizzato | Two options |  | True | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| Custom (Used) | cai_secondapplicantbirthdate | cai_secondapplicantbirthdate | DataDiNascitaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantbirthcountry | cai_secondapplicantbirthcountry | StatoDiNascitaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantcitizenshipcountry | cai_secondapplicantcitizenshipcountry | StatoDiCittadinanzaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantbirthprovince | cai_secondapplicantbirthprovince | ProvinciaDiNascitaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondndgapplicantbirthcity | cai_secondndgapplicantbirthcity | ComuneDiNascitaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantgendercode | cai_secondapplicantgendercode | SessoRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantmaritalstatus | cai_secondapplicantmaritalstatus | StatoCivileRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantmembersofthehousehold | cai_secondapplicantmembersofthehousehold | ComponentiNucleoFamigliareRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantresidencecity | cai_secondapplicantresidencecity | ComuneDiResidenzaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantresidenceprovince | cai_secondapplicantresidenceprovince | ProvinciaDiResidenzaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantresidencepostalcode | cai_secondapplicantresidencepostalcode | CAPRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantresidenceaddress | cai_secondapplicantresidenceaddress | IndirizzoDiResidenzaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantresidencehousenumber | cai_secondapplicantresidencehousenumber | NumeroCivicoRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantprimaryphone | cai_secondapplicantprimaryphone | TelefonoPrincipaleRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantemailaddress | cai_secondapplicantemailaddress | E-mailRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantotherphone | cai_secondapplicantotherphone | AltroTelefonoRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantjobposition | cai_secondapplicantjobposition | PosizioneLavorativaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantcurrentoccupation | cai_secondapplicantcurrentoccupation | OccupazioneAttualeRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantjobdescription | cai_secondapplicantjobdescription | DescrizioneOccupazioneRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantlengthofservice | cai_secondapplicantlengthofservice | AnzianitaLavorativaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantpersonalincome | cai_secondapplicantpersonalincome | RedditiPersonaliRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantdependentfamilymember | cai_secondapplicantdependentfamilymember | FamiliariAcaricoRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantothersincomesources | cai_secondapplicantothersincomesources | AltreFontiDiRedditoRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantemployer | cai_secondapplicantemployer | DatoreDiLavoroRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantcurrentemploymentdate | cai_secondapplicantcurrentemploymentdate | DataImpiegoAttualeRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_secondapplicantmonthlypayment | cai_secondapplicantmonthlypayment | MensilitaRich2 |  |  | True | Simple | None |  |  |
| Custom (Used) | cai_brokerguid | cai_brokerguid | Guid intermediario | Text |  | True | Simple | None |  |  |

---

## 23. Fonte Richiesta

| Proprietà | Valore |
|---|---|
| **Entity Name** | Fonte Richiesta |
| **Plural Display Name** | Fonti Richieste |
| **Schema Name** | `cai_requestorigin` |
| **Logical Name** | `cai_requestorigin` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text |  | True | Simple | Format: Text ; Max length: 20 |  |
| cai_requestoriginid | cai_requestoriginid | Fonte Richiesta | Uniqueidentifier | Unique identifier for entity instances | False | Simple |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| statecode | statecode | Status | State | Status of the Fonte Richiesta | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Fonte Richiesta | False | Simple | States: ; 1: Active ; 2: Inactive |  |

---

## 24. Macro prodotto

| Proprietà | Valore |
|---|---|
| **Entity Name** | Macroprodotto |
| **Plural Display Name** | Macroprodotti |
| **Schema Name** | `cai_macroproduct` |
| **Logical Name** | `cai_macroproduct` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Product Group | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Product Group | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_macroproduct | cai_macroproduct | Macroprodotto | Uniqueidentifier |  | False |  |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_code | cai_code | Codice macroprodotto | Text |  | True | Simple | Autonumber pattern ; MPRD00001 |  |

---

## 25. Macro categoria

| Proprietà | Valore |
|---|---|
| **Entity Name** | Macrocategoria |
| **Plural Display Name** | Macrocategorie |
| **Schema Name** | `cai_macrocategory` |
| **Logical Name** | `cai_macrocategory` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Product Group | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Product Group | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_macrocategory | cai_macrocategory | Macrocategoria | Uniqueidentifier |  | False |  |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_code | cai_code | Codice macrocategoria | Text |  | True | Simple | Autonumber pattern ; MCTG00001 |  |

---

## 26. Membro Portafoglio

| Proprietà | Valore |
|---|---|
| **Entity Name** | Membro Portafoglio |
| **Plural Display Name** | Membri Portafoglio |
| **Schema Name** | `cai_walletmembership` |
| **Logical Name** | `cai_walletmembership` |
| **Object Type Code** | 10035 |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_checksumid | cai_ChecksumID | Checksum ID | Whole number |  | True | Simple | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| cai_startdate | cai_startdate | Data Fine | DateTime |  | True | Simple | Format: DateOnly |  |
| cai_enddate | cai_enddate | Data Inizio | DateTime |  | True | Simple | Format: DateOnly |  |
| cai_systemuserid | cai_systemuserid | Utente | Lookup | Unique identifier for User associated with Delegato Portafoglio. | True | Simple | Targets: ; systemuser |  |
| cai_delegatoportafoglioid | cai_walletmembershipid | Membro Portafoglio | Uniqueidentifier | Unique identifier for entity instances | False | Simple |  |  |
| cai_name | cai_name | Name | Text | Verrà valorizzato dalla logica di inserimento come concatenazione di valori indicati sul portafoglio | True | Simple | Format: Text ; Max length: 100 |  |
| cai_walletid | cai_walletid | Portafoglio | Lookup | Unique identifier for Portafoglio | True | Simple | Targets: ; crp_portafoglio |  |
| cai_membershiptype | cai_membershiptype | Tipo | Choice |  | True | Simple | Delegato, Responsabile, Titolare |  |
| statecode | statecode | Status | State | Status of the Product Group | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Product Group | False | Simple | States: ; 1: Active ; 2: Inactive |  |

---

## 27. Natura Giuridica

| Proprietà | Valore |
|---|---|
| **Entity Name** | Natura Giuridica |
| **Plural Display Name** | Natura Giuridica |
| **Schema Name** | `cai_legalform` |
| **Logical Name** | `cai_legalform` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| cai_code | cai_code | Codice | Text |  | True | Simple |  |  |
| cai_name | cai_name | Nome | Text |  | True | Simple |  |  |

---

## 28. Next best product

| Proprietà | Valore |
|---|---|
| **Entity Name** | Next best product |
| **Plural Display Name** | Next best products |
| **Description** | Next best product da proporre ai clienti |
| **Schema Name** | `cai_nextbestproduct` |
| **Logical Name** | `cai_nextbestproduct` |
| **Is Custom Entity** | False |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_customerid | cai_customerid | Account/Contatto | Customer | Cliente/Azienda a cui è riferito il prodotto | True | Simple | Targets: ; contact/account |  |
| cai_enddate | cai_enddate | Data scadenza | DateTime |  | True | Simple |  |  |
| cai_priority | cai_priority | Priorità | Whole number |  | True | Simple |  |  |
| cai_name | cai_name | Nome | Text | codice istituto (presente nel tracciato di integrazione) + codice ndg + codice prodotto nbo + data rif. (presente nel tracciato di integrazione) |  |  |  |  |
| cai_nboproductid | cai_nboproductid | Lookup | Prodotto NBO | Riferimento al Prodotto NBO indicato su flusso dei Next best product | True | Simple | Target: cai_nboproduct |  |
| cai_productid | cai_productid | Lookup | Prodotto | Il prodotto suggerito | True | Simple | Target: cai_product |  |
| statecode | statecode | Status | State | Status del Next best product | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Status reason del Next best product | False | Simple | Tra gli stati attivi: ; - 1: Active ; ; Tra gli stati inattivi: ; -2: Inactive ; -100000001: Convertito in Lead ; -100000002: Lead già esistente con stesso Prodotto |  |
| cai_productmodel | cai_productmodel | Modello prodotto | Text |  | True | Simple |  |  |
| cai_sellingproposition | cai_sellingproposition | Proposta di acquisto | Text |  | True | Simple |  |  |

---

## 29. Obiettivo Esito Lead

| Proprietà | Valore |
|---|---|
| **Entity Name** | Obiettivo Esito Lead |
| **Plural Display Name** | Obiettivi Esito Lead |
| **Schema Name** | `cai_leadoutcomegoal` |
| **Logical Name** | `cai_leadoutcomegoal` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| cai_leadoutcomeid | cai_leadoutcomeid | Esito lead | Lookup | Lookup a Esito Lead | False | Simple | Lookup a Esito Lead |  |
| cai_marketinggoalid | cai_marketinggoalid | Obiettivo di marketing | Lookup | Lookup a Obiettivo di marketing | False | Simple | Lookup a Obiettivo di marketing |  |
| cai_leadoutcomegoalid | cai_leadoutcomegoalid | Obiettivo Esito Lead | Uniqueidentifier |  | False |  |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |

---

## 30. Obiettivo Marketing

| Proprietà | Valore |
|---|---|
| **Entity Name** | Obiettivo di marketing |
| **Plural Display Name** | Obiettivi di marketing |
| **Schema Name** | `cai_marketinggoal` |
| **Logical Name** | `cai_marketinggoal` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Product Group | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Product Group | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_marketinggoal | cai_marketinggoal | Obiettivo di marketing | Uniqueidentifier |  | False |  |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_code | cai_code | Codice obiettivo di marketing | Text | Codice dell'obbiettivo di marketing | True | Simple | Format: Text ; Max length: 100 |  |

---

## 31. Portafoglio

| Proprietà | Valore |
|---|---|
| **Entity Name** | Portafoglio |
| **Plural Display Name** | Portafogli |
| **Schema Name** | `cai_wallet` |
| **Logical Name** | `cai_wallet` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_checksumid | cai_checksumid | CheckSumID | Whole number |  | True | Simple | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| cai_code | cai_code | Codice Portafoglio | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_institutecode | cai_institutecode | Codice istituto | Text |  | True | Simple | Format: Text ; Max length: 2 |  |
| cai_description | cai_description | Descrizione | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_manager | cai_manager | Gestore | Lookup | E' il gestore (user) associato Proprietario che gestisce il portafoglio | True | Simple | Targets: ; systemuser |  |
| cai_name | cai_name | Name | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_walletid | cai_walletid | Portafoglio | Uniqueidentifier | Unique identifier for entity instances | True | Simple |  |  |
| cai_orgunitid | cai_orgunitid | Unità organizzativa | Lookup | Lookup all'unità organizzativa (cai_orgunit) | True | Simple | Targets: cai_orgunit |  |

---

## 32. Richiesta appuntamento

| Proprietà | Valore |
|---|---|
| **Entity Name** | Richiesta Appuntamento |
| **Plural Display Name** | Richieste Appuntamento |
| **Schema Name** | `cai_appointmentrequest` |
| **Logical Name** | `cai_appointmentrequest` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_appointmentid | cai_appointmentid | Appuntamento Collegato | Lookup |  | True | Simple | Targets: ; appointment |  |
| cai_argumentid | cai_argumentid | Argomento | Lookup |  | True | Simple | Targets: ; crp_argomento |  |
| cai_contactchannelid | cai_contactchannelid | Canale Contatto | Lookup | Unique identifier for Canale di Contatto associated with Richiesta Appuntamento. | True | Simple | Targets: ; crp_canaledicontatto |  |
| customerid | customerid | Cliente | Lookup |  | True | Simple | Targets: ; account |  |
| cai_enddate | cai_enddate | Data Fine | DateTime |  | True | Simple | Format: DateAndTime |  |
| cai_startdate | cai_startdate | Data Inizio | DateTime |  | True | Simple | Format: DateAndTime |  |
| cai_managerid | cai_managerid | Gestore | Lookup |  | True | Simple | Targets: ; systemuser |  |
| cai_customerheader | cai_customerheader | Intestazione Cliente | Text |  | True | Simple | Format: Text ; Max length: 255 |  |
| cai_sendemail | cai_sendemail | Invio Mail | Two options |  | True | Simple | True: Si ; False: No ; Default Value: True |  |
| cai_institutecode | cai_institutecode | Codice istituto | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_name | cai_name | Name | Text |  | True | Simple | Format: Text ; Max length: 254 |  |
| cai_ndgnotification | cai_ndgnotification | NDG Notifica | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_externalnotes | cai_externalnotes | Note Esterne | Multiline Text |  | True | Simple | Format: Text ; Max length: 2000 |  |
| cai_appointmentrequestid | cai_appointmentrequestid | Richiesta Appuntamento | Uniqueidentifier | Unique identifier for entity instances | False | Simple |  |  |
| statecode | statecode | Status | State | Status of the Richiesta Appuntamento | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Richiesta Appuntamento | False | Simple | Attivo → 1 ; Inviata → 100000001 ; Accettata → 100000002 ; Inattivo → 2 ; Rifiutata → 100000003 ; Cancellata → 100000004 |  |
| cai_code | cai_code | Codice | Text |  | True | Simple | Autonumber pattern ; RAPPT00000001 |  |

---

## 33. Prodotto (cai_product)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Prodotto |
| **Plural Display Name** | Prodotti |
| **Schema Name** | `cai_product` |
| **Logical Name** | `cai_product` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| statecode | statecode | Status | State | Status of the Product Group | False | Simple | States: ; 0: Active ; 1: Inactive |  |
| statuscode | statuscode | Status Reason | Status | Reason for the status of the Product Group | False | Simple | States: ; 1: Active ; 2: Inactive |  |
| cai_productid | cai_productid | Prodotto | Uniqueidentifier |  | False |  |  |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |
| cai_code | cai_code | Codice Prodotto | Text |  | True | Simple | Autonumber pattern ; PRD00001 |  |
| cai_macroproductid | cai_macroproductid | Macro prodotto | Lookup |  | True | Simple | Targets: ; cai_macroproduct |  |
| cai_macrocategoryid | cai_macrocategoryid | Macro categoria | Lookup |  | True | Simple | Targets: ; cai_macrocategory |  |
| cai_marketinggoalid | cai_marketinggoalid | Obiettivo di marketing | Lookup | Lookup a Obiettivo di marketing | False | Simple | Lookup a Obiettivo di marketing |  |
| cai_toretail | cai_toretail | Retail | Two options |  | True | Simple |  |  |
| cai_toprivate | cai_toprivate | Private | Two options |  | True | Simple |  |  |
| cai_tobdi | cai_tobdi | BDI | Two options |  | True | Simple |  |  |
| cai_productgroupid | cai_productgroupid | Gruppo prodotto | Lookup |  | True | Simple | Targets: ; cai_productgroup |  |
| cai_argumentid | cai_argumentid | Argomento | Lookup |  | True | Simple | Targets: ; cai_argument |  |
| cai_defaultforappointmentrequest | cai_defaultforappointmentrequest | Default per Richiesta appuntamento | Two options |  | ok | Simple |  |  |

---

## 34. Prodotto NBO

| Proprietà | Valore |
|---|---|
| **Entity Name** | Prodotto NBO |
| **Plural Display Name** | Prodotti NBO |
| **Schema Name** | `cai_nboproduct` |
| **Logical Name** | `cai_nboproduct` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| cai_productid | cai_productid | Prodotto | Lookup | Lookup a prodotto | False | Simple | Target: cai_product |  |
| cai_nboproductid | cai_nboproductid | Prodotto NBO | Uniqueidentifier |  | False | Simple |  |  |
| cai_nboproductcode | cai_nboproductcode | Codice Prodotto NBO | Text |  | True | Simple | Format: Text ; Max length: 100 |  |
| cai_name | cai_name | Nome | Text | The name of the custom entity. | True | Simple | Format: Text ; Max length: 100 |  |

---

## 35. Profilo Utente

| Proprietà | Valore |
|---|---|
| **Entity Name** | Profilo Utente |
| **Plural Display Name** | Profili Utente |
| **Description** | Dati aggiuntivi |
| **Schema Name** | `Nome Visualizzato` |
| **Logical Name** | `Schema Name` |
| **Is Custom Entity** | SI |
| **Ownership Type** | Organization owned |

### Campi

| Nome Logico | Schema Name | Nome Visualizzato | Tipo Attributo | Descrizione | Dati aggiuntivi | Obbligatorio | Sezione | Visibile | Editabile | Note | Release |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_userprofileid | cai_userprofileid | Profilo Utente | Guid |  |  |  |  |  |  |  |  |
| cai_name | cai_name | Nome | Text |  | 400 |  |  |  |  |  |  |
| cai_code | cai_code | Codice | Text |  | Text 100 |  |  |  |  |  |  |
| cai_modirolesforcalendar | cai_modirolesforcalendar | Ruoli modi abilitati a visualizzazione Profilo in Agenda | Text | Una elenco di codici di Ruoli modì suddivisi da pipe ("\|"). Utile per identificare quali Profili utente possano essere estratti per individuare il gestore di cui vedere l'agenda, in base al ruolo modì. | Text 500 |  |  |  |  |  |  |
| cai_hierarchicallevelid | cai_hierarchicallevelid | Livello gerarchico | Lookup |  | Target: cai_hierarchicallevel |  |  |  |  |  |  |

---

## 36. Ruolo Modi

| Proprietà | Valore |
|---|---|
| **Entity Name** | Ruolo modì |
| **Plural Display Name** | Ruoli modì |
| **Description** | Dati aggiuntivi |
| **Schema Name** | `Nome Visualizzato` |
| **Logical Name** | `Schema Name` |
| **Is Custom Entity** | SI |
| **Ownership Type** | Organization owned |

### Campi

| Nome Logico | Schema Name | Nome Visualizzato | Tipo Attributo | Descrizione | Dati aggiuntivi | Obbligatorio | Sezione | Visibile | Editabile | Note | Release |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_modiroleid | cai_modiroleid | Ruolo modì | Guid |  |  |  |  |  |  |  |  |
| cai_name | cai_name | Nome | Text |  | 200 |  |  |  |  |  |  |
| cai_code | cai_code | Codice ruolo modì | Text |  | 10 |  |  |  |  |  |  |
| cai_userprofileid | cai_userprofileid | Profilo utente | Lookup |  | Lookup a Profilo utente |  |  |  |  |  |  |

---

## 37. Segmento

| Proprietà | Valore |
|---|---|
| **Entity Name** | Segmento |
| **Plural Display Name** | Segmenti |
| **Schema Name** | `cai_segment` |
| **Logical Name** | `cai_segment` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| cai_code | cai_code | Codice | Text |  | True | Simple |  |  |
| cai_name | cai_name | Nome | Text |  | True | Simple |  |  |

---

## 38. Telefonata (PhoneCall)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Telefonata |
| **Plural Display Name** | Telefonate |
| **Description** | Impegno che consente di tenere traccia di una telefonata. |
| **Schema Name** | `PhoneCall` |
| **Logical Name** | `phonecall` |
| **Object Type Code** | 4210 |
| **Is Custom Entity** | False |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| activityadditionalparams | ActivityAdditionalParams | Parametri aggiuntivi | Multiline Text | Solo per uso interno. | False | Simple | None | Format: TextArea ; Max length: 8192 |  |
| activityid | ActivityId | Telefonata | Uniqueidentifier | Identificatore univoco dell'impegno di tipo telefonata. | False | Simple | SystemRequired |  |  |
| activitytypecode | ActivityTypeCode | Tipo di impegno | EntityName | Mostra il tipo di impegno. | False | Simple | SystemRequired |  |  |
| activitytypecodename | ActivityTypeCodeName | N/A | Virtual | N/A | False | Simple | None |  |  |
| actualdurationminutes | ActualDurationMinutes | Durata | Whole number | Digitare il numero di minuti dedicati alla telefonata. La durata viene usata nei report. | False | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| actualend | ActualEnd | Fine effettiva | DateTime | Immettere la data e l'ora di fine effettive della telefonata. Per impostazione predefinita, mostra la data e l'ora in cui l'impegno è stato completato o annullato ma può essere modificato in modo da riportare la durata effettiva della telefonata. | False | Simple | None | Format: DateOnly |  |
| actualstart | ActualStart | Inizio effettivo | DateTime | Immettere la data e l'ora di inizio effettive della telefonata. Per impostazione predefinita, mostra la data e l'ora in cui l'impegno è stato creato ma può essere modificato in modo da riportare la durata effettiva della telefonata. | False | Simple | None | Format: DateOnly |  |
| category | Category | Categoria | Text | Digitare una categoria per identificare il tipo di telefonata, ad esempio raccolta di lead o attività di completamento per i clienti, per associare la telefonata a una funzione o a un gruppo aziendale. | False | Simple | None | Format: Text ; Max length: 250 |  |
| createdby | CreatedBy | Autore | Lookup | Mostra chi ha creato il record. | False | Simple | None | Targets: ; systemuser |  |
| createdbyname | CreatedByName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| createdbyyominame | CreatedByYomiName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| createdon | CreatedOn | Data creazione | DateTime | Mostra la data e l'ora di creazione del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| createdonbehalfby | CreatedOnBehalfBy | Autore (delegato) | Lookup | Mostra chi ha creato il record per conto di un altro utente. | False | Simple | None | Targets: ; systemuser |  |
| createdonbehalfbyname | CreatedOnBehalfByName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| createdonbehalfbyyominame | CreatedOnBehalfByYomiName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| description | Description | Descrizione | Multiline Text | Digitare informazioni aggiuntive per descrivere la telefonata, ad esempio il messaggio primario o i prodotti e servizi discussi. | False | Simple | None | Format: Text ; Max length: 2000 |  |
| directioncode | DirectionCode | Direzione | Two options | Selezionare la direzione della telefonata, ovvero in ingresso o in uscita. | False | Simple | None | True: In uscita ; False: In ingresso ; Default Value: True |  |
| directioncodename | DirectionCodeName | N/A | Virtual | N/A | False | Simple | None |  |  |
| exchangerate | ExchangeRate | Tasso di cambio | Decimal | Mostra il tasso di conversione della valuta del record. Il tasso di cambio è usato per convertire tutti i campi di tipo money nel record dalla valuta locale alla valuta predefinita del sistema. | False | Simple | None | Minimum value: 0.000000000001 ; Maximum value: 100000000000 ; Precision: 12 |  |
| from | from | Autore chiamata | PartyList | Immettere l'account, il contatto, il lead o l'utente che ha effettuato la telefonata. | False | Simple | ApplicationRequired |  |  |
| importsequencenumber | ImportSequenceNumber | Numero sequenza importazione | Whole number | Identificatore univoco dell'importazione di dati o migrazione di dati che ha creato il record. | False | Simple | None | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| isbilled | IsBilled | Fatturato | Two options | Specifica se l'impegno di tipo telefonata è stato fatturato durante la risoluzione di un caso. | False | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| isbilledname | IsBilledName | N/A | Virtual | N/A | False | Simple | None |  |  |
| isregularactivity | IsRegularActivity | Impegno regolare | Two options | Indica se l'impegno è di tipo regolare o di tipo evento. | False | Simple | SystemRequired | True: Sì ; False: No ; Default Value: False |  |
| isregularactivityname | IsRegularActivityName | N/A | Virtual | N/A | False | Simple | None |  |  |
| isworkflowcreated | IsWorkflowCreated | Creato da flusso di lavoro | Two options | Indica se l'impegno di tipo telefonata è stato creato da una regola del flusso di lavoro. | False | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| isworkflowcreatedname | IsWorkflowCreatedName | N/A | Virtual | N/A | False | Simple | None |  |  |
| lastonholdtime | LastOnHoldTime | Ultimo periodo sospensione | DateTime | Contiene l'indicatore di data e ora dell'ultimo periodo di sospensione. | False | Simple | None | Format: DateAndTime |  |
| leftvoicemail | LeftVoiceMail | Messaggi vocali presenti | Two options | Specificare se per la persona è presente un messaggio vocale. | False | Simple | None | True: Sì ; False: No ; Default Value: False |  |
| leftvoicemailname | LeftVoiceMailName | N/A | Virtual | N/A | False | Simple | None |  |  |
| modifiedby | ModifiedBy | Autore modifica | Lookup | Mostra chi ha aggiornato il record per ultimo. | False | Simple | None | Targets: ; systemuser |  |
| modifiedbyname | ModifiedByName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| modifiedbyyominame | ModifiedByYomiName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| modifiedon | ModifiedOn | Data modifica | DateTime | Mostra la data e l'ora dell'ultimo aggiornamento del record. Data e ora sono visualizzate in base al fuso orario selezionato nelle opzioni di Microsoft Dynamics 365. | False | Simple | None | Format: DateAndTime |  |
| modifiedonbehalfby | ModifiedOnBehalfBy | Autore modifica (delegato) | Lookup | Mostra chi ha aggiornato l'ultima volta il record per conto di un altro utente. | False | Simple | None | Targets: ; systemuser |  |
| modifiedonbehalfbyname | ModifiedOnBehalfByName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| modifiedonbehalfbyyominame | ModifiedOnBehalfByYomiName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| onholdtime | OnHoldTime | Periodo di sospensione (minuti) | Whole number | Mostra la durata della sospensione del record in minuti. | False | Simple | None | Minimum value: -2147483648 ; Maximum value: 2147483647 |  |
| overriddencreatedon | OverriddenCreatedOn | Data creazione record | DateTime | Data e ora di migrazione del record. | False | Simple | None | Format: DateOnly |  |
| ownerid | OwnerId | Proprietario | Owner | Immettere l'utente o il team a cui è assegnata la gestione del record. Questo campo viene aggiornato ogni volta che il record viene assegnato a un utente diverso. | False | Simple | SystemRequired | Targets: ; systemuser ; team |  |
| owneridname | OwnerIdName | N/A | Text | N/A | False | Simple | SystemRequired | Format: Text ; Max length: 100 |  |
| owneridtype | OwnerIdType | N/A | EntityName | N/A | False | Simple | SystemRequired |  |  |
| owneridyominame | OwnerIdYomiName | N/A | Text | N/A | False | Simple | SystemRequired | Format: Text ; Max length: 100 |  |
| owningbusinessunit | OwningBusinessUnit | Business Unit proprietaria | Lookup | Identificatore univoco della Business Unit a cui appartiene l'impegno di tipo telefonata. | False | Simple | None | Targets: ; businessunit |  |
| owningbusinessunitname | OwningBusinessUnitName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 160 |  |
| owningteam | OwningTeam | Team proprietario | Lookup | Identificatore univoco del team a cui appartiene l'impegno di tipo telefonata. | False | Simple | None | Targets: ; team |  |
| owninguser | OwningUser | Utente proprietario | Lookup | Identificatore univoco dell'utente a cui appartiene l'impegno di tipo telefonata. | False | Simple | None | Targets: ; systemuser |  |
| phonenumber | PhoneNumber | Numero di telefono | Text | Digitare il numero di telefono. | False | Simple | None | Format: Text ; Max length: 200 |  |
| prioritycode | PriorityCode | Priorità | Choice | Selezionare la priorità in modo che i clienti preferiti o i problemi critici vengano gestiti rapidamente. | False | Simple | None | Options: ; 0: Bassa ; 1: Normale ; 2: Alta ; Default: 1 |  |
| prioritycodename | PriorityCodeName | N/A | Virtual | N/A | False | Simple | None |  |  |
| processid | ProcessId | Processo | Uniqueidentifier | Mostra l'ID del processo. | False | Simple | None |  |  |
| regardingobjectid | RegardingObjectId | Tema | Lookup | Scegliere il record correlato alla telefonata. | False | Simple | None | Targets: ; account ; adx_invitation ; bookableresourcebooking ; bookableresourcebookingheader ; bulkoperation ; campaign ; campaignactivity ; contact ; contract ; entitlement ; entitlementtemplate ; incident ; invoice ; knowledgearticle ; knowledgebaserecord ; lead ; msdyn_customerasset ; msdyn_playbookinstance ; msdyn_postalbum ; msdyn_salessuggestion ; msdyn_swarm ; mspp_adplacement ; mspp_pollplacement ; mspp_publishingstatetransitionrule ; mspp_redirect ; mspp_shortcut ; mspp_website ; opportunity ; quote ; salesorder ; site |  |
| regardingobjectidname | RegardingObjectIdName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 400 |  |
| regardingobjectidyominame | RegardingObjectIdYomiName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 400 |  |
| regardingobjecttypecode | RegardingObjectTypeCode | N/A | EntityName | N/A | False | Simple | None |  |  |
| scheduleddurationminutes | ScheduledDurationMinutes | Durata pianificata | Whole number | Durata pianificata dell'impegno di tipo telefonata espressa in minuti. | False | Simple | None | Minimum value: 0 ; Maximum value: 2147483647 |  |
| scheduledend | ScheduledEnd | Scadenza | DateTime | Immettere la data e l'ora di scadenza previste. | False | Simple | None | Format: DateAndTime |  |
| scheduledstart | ScheduledStart | Data di inizio | DateTime | Immettere la data e l'ora di scadenza previste. | False | Simple | None | Format: DateAndTime |  |
| serviceid | ServiceId | Servizio | Lookup | Identificatore univoco di un servizio associato. | False | Simple | None | Targets: ; service |  |
| serviceidname | ServiceIdName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 160 |  |
| slaid | SLAId | Contratto di servizio | Lookup | Scegli il contratto di servizio da applicare al record della telefonata. | False | Simple | None | Targets: ; sla |  |
| slainvokedid | SLAInvokedId | Ultimo contratto di servizio applicato | Lookup | Ultimo contratto di servizio applicato alla telefonata. Questo campo è solo per uso interno. | False | Simple | None | Targets: ; sla |  |
| slainvokedidname | SLAInvokedIdName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| slaname | SLAName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| sortdate | SortDate | Data di ordinamento | DateTime | Mostra la data e l'ora di ordinamento delle attività. | False | Simple | None | Format: DateAndTime |  |
| stageid | StageId | (Deprecata) Fase del processo | Uniqueidentifier | Mostra l'ID della fase. | False | Simple | None |  |  |
| statecode | StateCode | Stato impegno | State | Mostra se la telefonata è aperta, completata o annullata. Le telefonate completate e annullate sono di sola lettura e non possono essere modificate. | False | Simple | SystemRequired | States: ; 0: Aperta ; 1: Completata ; 2: Annullata |  |
| statecodename | StateCodeName | N/A | Virtual | N/A | False | Simple | None |  |  |
| statuscode | StatusCode | Motivo stato | Status | Selezionare lo stato della telefonata. | False | Simple | None | States: ; 1: Apri ; 2: Effettuata ; 3: Annullata ; 4: Ricevuta |  |
| statuscodename | StatusCodeName | N/A | Virtual | N/A | False | Simple | None |  |  |
| subcategory | Subcategory | Sottocategoria | Text | Digitare una sottocategoria per identificare il tipo di telefonata e associare l'impegno a un prodotto, un'area di vendita, un gruppo aziendale o un'altra funzione specifica. | False | Simple | None | Format: Text ; Max length: 250 |  |
| subject | Subject | Oggetto | Text | Digitare una breve descrizione dell'obiettivo o dell'argomento primario della telefonata. | False | Simple | ApplicationRequired | Format: Text ; Max length: 200 |  |
| subscriptionid | SubscriptionId | Sottoscrizione | Uniqueidentifier | Solo per uso interno. | False | Simple | None |  |  |
| timezoneruleversionnumber | TimeZoneRuleVersionNumber | Numero di versione regola fuso orario | Whole number | Solo per uso interno. | False | Simple | None | Minimum value: -1 ; Maximum value: 2147483647 |  |
| to | to | Ricevente chiamata | PartyList | Immettere l'account, il contatto, il lead o l'utente destinatario della telefonata. | False | Simple | ApplicationRequired |  |  |
| transactioncurrencyid | TransactionCurrencyId | Valuta | Lookup | Scegliere la valuta locale per il record per assicurare che i preventivi vengano espressi nella valuta corretta. | False | Simple | None | Targets: ; transactioncurrency |  |
| transactioncurrencyidname | TransactionCurrencyIdName | N/A | Text | N/A | False | Simple | None | Format: Text ; Max length: 100 |  |
| traversedpath | TraversedPath | (Deprecata) Percorso incrociato | Text | Solo per uso interno. | False | Simple | None | Format: Text ; Max length: 1250 |  |
| utcconversiontimezonecode | UTCConversionTimeZoneCode | Codice fuso orario conversione UTC | Whole number | Codice di fuso orario utilizzato al momento della creazione del record. | False | Simple | None | Minimum value: -1 ; Maximum value: 2147483647 |  |
| versionnumber | VersionNumber | Numero versione | BigInt | Numero di versione dell'impegno di tipo telefonata. | False | Simple | None | Minimum value: -9223372036854775808 ; Maximum value: 9223372036854775807 |  |

---

## 39. Titolarità Rapporto

| Proprietà | Valore |
|---|---|
| **Entity Name** | Titolarità Rapporto |
| **Plural Display Name** | Titolarità Rapporti |
| **Schema Name** | `cai_ownershiprelation` |
| **Logical Name** | `cai_ownershiprelation` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| createdon | CreatedOn | Created On | DateTime | Date and time when the record was created. | False | Simple | Format: DateAndTime |  |
| modifiedon | ModifiedOn | Modified On | DateTime | Date and time when the record was modified. | False | Simple | Format: DateAndTime |  |
| cai_code | cai_code | Codice | Text |  | True | Simple |  |  |
| cai_name | cai_name | Nome | Text |  | True | Simple |  |  |
| cai_date | cai_date | Data | DateTime |  | True | Simple | Format: Date |  |

---

## 40. Unità organizzativa

| Proprietà | Valore |
|---|---|
| **Entity Name** | Unità organizzativa |
| **Plural Display Name** | Unità organizzative |
| **Schema Name** | `cai_orgunit` |
| **Logical Name** | `cai_orgunit` |
| **Is Custom Entity** | True |
| **Ownership Type** | Organization owned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| businessunitid | businessunitid | Business Unit | Lookup | Identificatore univoco della Business Unit | False | Simple |  | Targets: ; businessunit |  |
| cai_name | cai_name | Nome unità organizzativa | Text | Nome | False | Simple | SystemRequired |  |  |
| cai_orgunitid | cai_orgunitid | Unità organizzativa | Uniqueidentifier | Identificatore univoco | False | Simple | SystemRequired |  |  |
| cai_code | cai_code | Codice unità organizzativa | Text |  | True | Simple |  | Format: Text |  |
| cai_institutecode | cai_institutecode | Codice istituto | Text |  | True | Simple |  | Format: Text |  |
| cai_areacode | cai_areacode | Codice area | Text |  | True | Simple |  | Format: Text |  |
| cai_areaname | cai_areaname | Nome area | Text |  | True | Simple |  | Format: Text |  |
| cai_regioncode | cai_regioncode | Codice regione | Text |  | True | Simple |  | Format: Text |  |
| cai_regionname | cai_regionname | Nome regione | Text |  | True | Simple |  | Format: Text |  |
| cai_channelcode | cai_channelcode | Codice canale | Text |  | True | Simple |  | Format: Text |  |
| cai_channelname | cai_channelname | Nome canale | Text |  | True | Simple |  | Format: Text |  |
| cai_macrochannelcode | cai_macrochannelcode | Codice macro canale | Text |  | True | Simple |  | Format: Text |  |
| cai_macrochannelname | cai_macrochannelname | Nome macro canale | Text |  | True | Simple |  | Format: Text |  |
| cai_typecode | cai_typecode | Codice tipo unità organizzativa | Text |  | True | Simple |  | Format: Text |  |
| cai_typename | cai_typename | Nome tipo Unità organizzativa | Text |  | True | Simple |  | Format: Text |  |
| cai_channel | cai_channel | Canale struttura | Text |  | True | Simple |  | Format: Text |  |
| cai_zone | cai_zone | Zona | Text |  | True | Simple |  | Format: Text |  |
| cai_ownerid | cai_ownerid | Responsabile | Lookup |  |  |  |  | Targets: ; systemuser |  |
| cai_parentcode | cai_parentcode | Codice unità organizzativa superiore | Text |  | True | Simple |  | Format: Text |  |
| cai_parentname | cai_parentname | Nome unità organizzativa superiore | Text |  | True | Simple |  | Format: Text |  |
| cai_parenttypecode | cai_parenttypecode | Codice tipo unità organizzativa superiore | Text |  | True | Simple |  | Format: Text |  |
| cai_mail | cai_mail | Mail unità organizzativa | Text |  | True | Simple |  | Format: Text |  |
| cai_level | cai_level | Livello gerarchico | Choice |  | True | Simple |  | FILIALE ; MERCATO ; DIREZIONE REGIONALE ; DIREZIONE CENTRALE |  |
| cai_status | cai_status | Stato unità organizzativa | Text |  | True | Simple |  | Format: Text |  |
| cai_enrolled | cai_enrolled | Direzione regionale enrolled | Two options | Campo che, su una direzione regionale, indica se sia stata inclusa nell'enroll | True | Simple |  |  |  |

---

## 41. Utente (SystemUser)

| Proprietà | Valore |
|---|---|
| **Entity Name** | Utente |
| **Plural Display Name** | Utenti |
| **Description** | Persona che ha accesso al sistema Microsoft CRM ed è proprietaria di oggetti nel database di Microsoft CRM. |
| **Schema Name** | `SystemUser` |
| **Logical Name** | `systemuser` |
| **Object Type Code** | 8 |
| **Is Custom Entity** | False |
| **Ownership Type** | BusinessOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Required Level | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| businessunitid | BusinessUnitId | Business Unit | Lookup | Identificatore univoco della Business Unit a cui è associato l'utente. | False | Simple | SystemRequired | Targets: ; businessunit |  |
| domainname | DomainName | Nome utente | Text | Dominio di Active Directory di cui è membro l'utente. | False | Simple | SystemRequired | Format: Text ; Max length: 1024 |  |
| firstname | FirstName | Nome | Text | Nome dell'utente. | False | Simple | ApplicationRequired | Format: Text ; Max length: 256 |  |
| fullname | FullName | Nome completo | Text | Nome completo dell'utente. | False | Simple | None | Format: Text ; Max length: 200 |  |
| internalemailaddress | InternalEMailAddress | Indirizzo e-mail primario | Text | Indirizzo e-mail interno per l'utente. | False | Simple | SystemRequired | Format: Email ; Max length: 100 |  |
| lastname | LastName | Cognome | Text | Cognome dell'utente. | False | Simple | ApplicationRequired | Format: Text ; Max length: 256 |  |
| middlename | middlename | Secondo nome | Text | Secondo nome dell'utente. | False | Simple | None | Format: Text ; Max length: 50 |  |
| nickname | NickName | Nome alternativo | Text | Nome alternativo dell'utente. | False | Simple | None | Format: Text ; Max length: 50 |  |
| parentsystemuserid | ParentSystemUserId | Responsabile | Lookup | Identificatore univoco del responsabile dell'utente. | False | Simple | None | Targets: ; systemuser |  |
| systemuserid | SystemUserId | Utente | Uniqueidentifier | Identificatore univoco dell'utente. | False | Simple | SystemRequired |  |  |
| title | Title | Titolo | Text | Identificatore dipendente dell'utente (formato J12345) | False | Simple | None | Format: Text ; Max length: 128 |  |
| cai_userprofileid | cai_userprofileid | Profilo | Lookup |  | True | Simple | None | Targets: ; cai_userprofile |  |
| cai_modiroleid | cai_modiroleid | Ruolo Modi | Lookup |  | True | Simple | None | Targets: ; cai_modirole |  |
| cai_orgunitid | cai_orgunitid | Unità organizzativa | Lookup | Lookup all'unità organizzativa (cai_orgunit) | True | Simple | None | Targets: cai_orgunitid |  |
| cai_iddepartimental | cai_iddepartimental | Id matricola dipartimentale | Text | Matricola dipartimentale | True | Simple | None | Format: Text ; Max length: 20 |  |
| cai_institutecode | cai_institutecode | Codice istituto | Text |  | True | Simple | None |  |  |
| cai_parttime | cai_parttime | Part-time | Two options | Indica se l'utente segua un orario part-time | True | Simple | None |  |  |

---

## 42. SC Sessione di Esitazione

| Proprietà | Valore |
|---|---|
| **Entity Name** | SC Sessione di Esitazione |
| **Plural Display Name** | SC Sessioni di Esitazione |
| **Schema Name** | `cai_leadoutcomeactivitycssession` |
| **Logical Name** | `cai_leadoutcomeactivitycssession` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_sessionguid | cai_sessionguid | ID Sessione | text | Guid che rappresenta la sessione di esitazione | True | Simple |  |  |
| cai_leadid | cai_leadid | Lead | Lookup | Lookup alla tabella Lead | True | Simple |  |  |
| cai_leadoutcomeid | cai_leadoutcomeid | Esito lead | Lookup | Esito applicato alla Lead | True | Simple |  |  |
| cai_notes | cai_notes | Note esitazione | Memo | Note inserite dall'utente in fase di esitazione | True | Simple |  |  |

---

## 43. SC Sessione Esitazione Params

| Proprietà | Valore |
|---|---|
| **Entity Name** | SC Parametri della Sessione di Esitazione |
| **Plural Display Name** | SC Parametri della Sessione di Esitazione |
| **Schema Name** | `cai_leadoutcomeactivitycssessionparams` |
| **Logical Name** | `cai_leadoutcomeactivitycssessionparams` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_sessionguid | cai_sessionguid | ID Sessione | Text | Guid che rappresenta la sessione di esitazione | True | Simple |  |  |
| cai_contactchannelcode | cai_contactchannelcode | Interazione | Text | Canale di contatto | True | Simple |  |  |
| cai_employeecode | cai_employeecode | Codice Utente | Text | Codice Utente | True | Simple |  |  |
| cai_ndg | cai_ndg | Codice Cliente | Text | Codice Cliente | True | Simple |  |  |
| cai_appointmentscheduledstart | cai_appointmentscheduledstart | Data Inizio | DateTime | Data Inizio | True | Simple |  |  |
| cai_appointmentscheduledend | cai_appointmentscheduledend | Data Fine | DateTime | Data Fine | True | Simple |  |  |
| cai_appointmenttypecode | cai_appointmenttypecode | Tipo di appuntamento | Choice | Tipo di contatto | True | Simple |  |  |
| cai_appointmentsubject | cai_appointmentsubject | Oggetto | Text | Oggetto appuntamento | True | Simple |  |  |
| cai_appointmentisallday | cai_appointmentisallday | Tutto il giorno | Boolean | Tutto il giorno | True | Simple |  |  |
| cai_leadoutcomereason | cai_leadoutcomereason | Motivo Esito | Choice | Dettaglio motivazione in caso di esito: "Non interessato" oppure "Impossibilità a procedere" | True | Simple | Global optionset "Motivazione Esito" (cai_leadoutcomereason) |  |

---

## 44. PRV Nucleo

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nucleo |
| **Plural Display Name** | Nuclei |
| **Schema Name** | `cai_core` |
| **Logical Name** | `cai_core` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text | Codice del nucleo | True | Simple | Autonumber: NL0000000001 |  |
| cai_iscorewithsinglemember | cai_iscorewithsinglemember | Nucleo con singolo componente | Boolean | Indica se il Nucleo ha un solo componente | True | Simple | Default: false |  |
| statuscode | statuscode | Motivo stato | Choice | Motivo stato del record di Componente nucleo | False | Simple | (Si userà Inactive per tracciare un Nucleo rimosso) ; States: ; 0: Active ; 1: Inactive |  |
| statecode | statecode | Stato | Choice | Stato del record di Componente nucleo | False | Simple | (Si userà Inactive per tracciare un Nucleo rimosso) ; States: ; 1: Active ; 2: Inactive |  |

---

## 45. PRV Componenti nucleo

| Proprietà | Valore |
|---|---|
| **Entity Name** | Componente nucleo |
| **Plural Display Name** | Componenti nucleo |
| **Schema Name** | `cai_coremember` |
| **Logical Name** | `cai_coremember` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text |  | True | Simple | Autonumber [CN0000000001] |  |
| cai_coreid | cai_coreid | Nucleo | Lookup | Il Nucleo cui appartiene il componente | True | Simple | Target: cai_core |  |
| cai_ispointofcontact | cai_ispointofcontact | Referente | Two options | Indica se il componente è referente del nucleo | True | Simple |  |  |
| cai_isheir | cai_isheir | Erede | Two options | Indica se il componente è un erede | True | Simple |  |  |
| cai_corememberrelationshipid | cai_corememberrelationshipid | Legame | Lookup | Legame del componente del nucleo | True | Simple | Target: cai_corememberrelationship |  |
| cai_isbankcustomer | cai_isbankcustomer | Cliente banca? | Two options | Indica se il componente è un cliente banca o un non cliente | True | Simple |  |  |
| cai_name | cai_name | Nome componente Non cliente | Text | Nome del componente del nucleo che non è cliente | True | Simple |  |  |
| cai_lastname | cai_lastname | Cognome componente Non cliente | Text | Cognome del componente del nucleo che non è cliente | True | Simple |  |  |
| statuscode | statuscode | Motivo stato | Choice | Motivo stato del record di Componente nucleo | False | Simple | (Si userà Inactive per tracciare un Componente nucleo rimosso) ; States: ; 0: Active ; 1: Inactive |  |
| statecode | statecode | Stato | Choice | Stato del record di Componente nucleo | False | Simple | (Si userà Inactive per tracciare un Componente nucleo rimosso) ; States: ; 1: Active ; 2: Inactive |  |

---

## 46. PRV Legami componenti Nucleo

| Proprietà | Valore |
|---|---|
| **Entity Name** | Legame componenti nucleo |
| **Plural Display Name** | Legami componenti nucleo |
| **Schema Name** | `cai_corememberrelationship` |
| **Logical Name** | `cai_corememberrelationship` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text | Codice legame componente nucleo | True | Simple | Autonumber: [CMR00001] |  |
| cai_name | cai_name | Nome | Text | Nome legame componente nucleo | True | Simple |  |  |
| cai_exportcode | cai_exportcode | Codice per export | Text | Codice univoco per l'export | True | Simple |  |  |

---

## 47. PRV Evento

| Proprietà | Valore |
|---|---|
| **Entity Name** | Evento |
| **Plural Display Name** | Eventi |
| **Schema Name** | `cai_event` |
| **Logical Name** | `cai_event` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text | Codice evento | True | Simple | Autonumber [EV0000000001] |  |
| cai_name | cai_name | Nome | Text | Nome evento | True | Simple |  |  |
| cai_notes | cai_notes | Note | Text | Note evento | True | Simple |  |  |
| cai_startdate | cai_startdate | Data inizio | DateTime | Data e ora inizio evento | True | Simple |  |  |
| cai_enddate | cai_enddate | Data fine | DateTime | Data e ora fine evento | True | Simple |  |  |
| cai_trackastask | cai_trackastask | Traccia come Impegno | Two options | Indica se l'Evento è stato tracciato anche come Impegno in agenda | True | Simple | Default value: false |  |
| cai_appointmentastaskid | cai_appointmentastaskid | Impegno | Lookup | Riferimento all'eventuale Impegno associato all'Evento | True | Simple | Target: appointment |  |
| regardingobjectid | regardingobjectid | Tema | Lookup | Il cliente (contact/account) cui è collegato l'evento | True | Simple | Target: account/contact |  |
| statuscode | statuscode | Motivo stato | Choice | Motivo stato del record di Evento | False | Simple | (Si userà Inactive per tracciare un Componente nucleo rimosso) ; States: ; 0: Active ; 1: Inactive |  |
| statecode | statecode | Stato | Choice | Stato del record di Evento | False | Simple | (Si userà Inactive per tracciare un Componente nucleo rimosso) ; States: ; 1: Active ; 2: Inactive |  |

---

## 48. PRV Accompagnatore evento

| Proprietà | Valore |
|---|---|
| **Entity Name** | Accompagnatore evento |
| **Plural Display Name** | Accompagnatori evento |
| **Schema Name** | `cai_eventattendant` |
| **Logical Name** | `cai_eventattendant` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text | Codice evento | True | Simple | Autonumber [EV0000000001] |  |
| cai_name | cai_name | Nome | Text | Nome accompagnatore | True | Simple |  |  |
| cai_lastname | cai_lastname | Cognome | Choice | Cognome accompagnatore | True | Simple |  |  |
| cai_eventid | cai_eventid | Evento | Lookup | Evento | True | Simple | Target: cai_event |  |
| statuscode | statuscode | Motivo stato | Choice | Motivo stato del record di Accompagnatore evento | False | Simple | (Si userà Inactive per tracciare un Accompagnatore evento rimosso) ; States: ; 0: Active ; 1: Inactive |  |
| statecode | statecode | Stato | Choice | Stato del record di Accompagnatore evento | False | Simple | (Si userà Inactive per tracciare un Accompagnatore evento rimosso) ; States: ; 1: Active ; 2: Inactive |  |

---

## 49. PRV Livello gerarchico

| Proprietà | Valore |
|---|---|
| **Entity Name** | Livello gerarchico |
| **Plural Display Name** | Livelli gerarchici |
| **Schema Name** | `cai_hierarchicallevel` |
| **Logical Name** | `cai_hierarchicallevel` |
| **Is Custom Entity** | True |
| **Ownership Type** | OrganizationOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_code | cai_code | Codice | Text |  | True | Simple | Autonumber [LG00001] |  |
| cai_name | cai_name | Nome | Text |  | True | Simple |  |  |

---

## 50. PRV Gruppi economici

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---

## 51. PRV Collegamenti NDG

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---

## 52. PRV Recapiti

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---

## 53. PRV Mint Fenice

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---

## 54. PRV Budget

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---

## 55. PRV Centrale rischi

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---

## 56. PRV Opportunità

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---

## 57. PRV Coge giornaliera

| Proprietà | Valore |
|---|---|
| **Entity Name** | Nome entità |
| **Plural Display Name** | Nome plurale |
| **Schema Name** | `cai_example` |
| **Logical Name** | `cai_example` |
| **Is Custom Entity** | True |
| **Ownership Type** | UserOwned |

### Campi

| Logical Name | Schema Name | Display Name | Attribute Type | Description | Custom Attribute | Type | Additional data | Audit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cai_example | cai_example | Example | Text |  | True | Simple |  |  |

---
