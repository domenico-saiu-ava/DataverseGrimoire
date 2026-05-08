# Confronto wiki_from_docs ↔ wiki

> Generato il: **2026-05-08** · Script: `node scripts/compare-wikis.mjs && node scripts/export-wiki-compare-report.mjs`

## Riepilogo

| Categoria | N° entità | Note |
|-----------|-----------|------|
| ✅ Allineate (presenti in entrambi, nessun campo mancante) | 21 | — |
| ⚠️ Con gap di campi (presenti in entrambi, campi AF assenti dal wiki tecnico) | 23 | 303 campi totali mancanti |
| ❌ Assenti dal wiki tecnico (richiedono `npm run custom`) | 21 | Tutte `cai_*` custom |
| **Totale entità analizzate** | **66** | |

> **Azione consigliata:** eseguire `npm run custom -- --url https://<env>.crm4.dynamics.com` per popolare `wiki/custom/`. Dopo l'ingestione la maggior parte dei gap di campi `cai_*` si chiuderà automaticamente.

---

## A — Entità allineate ✅

Presenti in entrambi i wiki, nessun campo documentato nelle AF risulta mancante nel wiki tecnico.

| Entità | Display IT | Business area | Campi AF | Campi wiki | Fonte wiki |
|--------|-----------|---------------|----------|------------|------------|
| `cai_accountplan` | BDI Account plan | Business Dev Intelligence | 0 | 20 | custom |
| `cai_accountplannote` | BDI Note Account Plan | Business Dev Intelligence | 0 | 18 | custom |
| `cai_argument` | Argomento | Retail / CRM | 9 | 19 | custom |
| `cai_brokermortgageloan` | Canale intermediario mutuo | Retail / CRM | 14 | 26 | custom |
| `cai_campaignoffer` | Offerta campagna | Retail / CRM | 20 | 33 | custom |
| `cai_configuration` | Configurazione | Retail / CRM | 3 | 18 | custom |
| `cai_contactchannel` | Canale di Contatto | Retail / CRM | 7 | 19 | custom |
| `cai_dispatchingrule` | Regola smistamento Lead | Retail / CRM | 20 | 32 | custom |
| `cai_dispatchingruleadditionalfields` | Campi aggiuntivi regola smistamento Lead | Retail / CRM | 7 | 19 | custom |
| `cai_leadoutcomegoal` | Obiettivo Esito Lead | Retail / CRM | 6 | 18 | custom |
| `cai_legalform` | Natura Giuridica | Retail / CRM | 4 | 17 | custom |
| `cai_modirole` | Ruolo Modi | Retail / CRM | 0 | 18 | custom |
| `cai_nboproduct` | Prodotto NBO | Retail / CRM | 6 | 18 | custom |
| `cai_nextbestproduct` | Next best product | Retail / CRM | 10 | 25 | custom |
| `cai_preferredcalendar` | Agenda preferita | Retail / CRM | 10 | 20 | custom |
| `cai_productgroup` | Gruppo prodotto | Retail / CRM | 7 | 17 | custom |
| `cai_queueitemlead` | Elemento Coda Lead | Retail / CRM | 7 | 22 | custom |
| `cai_requestorigin` | Fonte Richiesta | Retail / CRM | 5 | 17 | custom |
| `cai_segment` | Segmento | Retail / CRM | 4 | 17 | custom |
| `cai_suggestedaction` | Azione suggerita | Retail / CRM | 8 | 22 | custom |
| `cai_userprofile` | Profilo Utente | Retail / CRM | 0 | 19 | custom |

---

## B — Entità con campi mancanti nel wiki tecnico ⚠️

Ordinate per numero di campi mancanti (decrescente). I campi con prefisso `cai_` o `msdyn_` sono custom fields del tenant — si risolvono con `npm run custom`. I campi `*name` virtuali sono comportamento atteso (Dataverse non li espone come attributi schema).

### `lead` — Lead

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 229 |
| Campi nel wiki tecnico | 169 |
| Campi mancanti totali | **168** |
| Fonte wiki tecnico | docs |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_firstndgprospectapplicant`, `cai_leadtype`, `cai_leadformat`, `cai_leadscore`, `cai_mainlead`, `cai_segmentname`, `cai_retailassignmentdeadlinelefttime`, `cai_retailassignmentdeadlinedate`, `cai_leadcode`, `cai_takeinchargedate`, `cai_customerleadttype`, `cai_leadactivefrom`, `cai_assigneduserid`, `cai_futureinterestdate`, `cai_productid`, `cai_sourcerequestid`, `cai_iscustomer`, `cai_productserviceinterest`, `cai_contactusformtype`, `cai_messagetype`, `cai_attemptsbeforeescalationtocustomerservice`, `cai_brokermortgageloanid`, `cai_firstassignment`, `cai_sendingstatustofree`, `cai_errorsendingtofree`, `cai_campaignid`, `cai_campaignofferid`, `cai_channel`, `cai_ndgcode`, `cai_treatmentcode`, `cai_migrated`, `cai_customertype`, `cai_plh1`, `cai_plh2`, `cai_plh3`, `cai_plh4`, `cai_plh5`, `cai_plh6`, `cai_plh7`, `cai_plh8`, `cai_plh9`, `cai_plh10`, `cai_currentassignment`, `cai_concurrencyperiodstartdate`, `cai_concurrencyperiodlefttime`, `cai_visibility`, `cai_passedthroughretail`, `cai_passedthroughcustomerservice`, `cai_receiveddate`, `cai_origininformations`, `cai_leadloanschannels`, `cai_number`, `cai_loanreason`, `cai_loanexpired`, `cai_branchrequested`, `cai_consaprequest`, `cai_forwardingdate`, `cai_expirationdate`, `cai_propertysearchstatus`, `cai_requestpurpose`, `cai_fulldigitalloan`, `cai_substandardloans`, `cai_substandardloansstartdate`, `cai_nonperformingloansstartdate`, `cai_substandardloansenddate`, `cai_nonperformingloansenddate`, `cai_alreadybankcustomer`, `cai_firstndgapplicant`, `cai_firstndgprospectapplicant`, `cai_firstapplicantfirstname`, `cai_firstapplicantlastname`, `cai_firstapplicantfiscalcode`, `cai_firstapplicantbirthdate`, `cai_firstapplicantbirthcountry`, `cai_firstapplicantcitizenshipcountry`, `cai_firstapplicantbirthprovince`, `cai_firstndgapplicantbirthcity`, `cai_firstapplicantgendercode`, `cai_firstapplicantmaritalstatus`, `cai_firstapplicantmembersofthehousehold`, `cai_secondndgapplicant`, `cai_secondndgprospectapplicant`, `cai_dependentfamilymember`, `cai_currentoccupation`, `cai_employer`, `cai_pepcrimeamlinformationpresence`, `cai_lengthofservice`, `cai_jobdescription`, `cai_membersofthehousehold`, `cai_jobposition`, `cai_personalincome`, `cai_othersincomesources`, `cai_monthlypayment`, `cai_requestpurpose`, `cai_propertyvalue`, `cai_loanamount`, `cai_typeofrate`, `cai_duration`, `cai_ltv`, `cai_rr`, `cai_institute`, `cai_taeg`, `cai_tan`, `cai_spread`, `cai_calculatedpaymentamount`, `cai_productname`, `cai_initialexpenses`, `cai_propertysearchstatus`, `cai_semaphore`, `cai_propertycity`, `cai_properyprovince`, `cai_propertytype`, `cai_totalarea`, `cai_marketvalue`, `cai_propertycondition`, `cai_propertywithmortgage`, `cai_energyclass`, `cai_firstloan`, `cai_remainingloanamount`, `cai_firstloanmonthlypayment`, `cai_earlyterminationfirstloan`, `cai_existingloanbank`, `cai_existingloansigningdate`, `cai_existingloanpaymentamount`, `cai_addionalnotes`, `cai_practicecode`, `cai_paymentmonth`, `cai_paymentamount`, `cai_paid`, `cai_invoicereference`, `cai_loanpurposewithchoice`, `cai_paymentmodewithchoice`, `cai_administrativechecksinprogress`, `cai_authorized`, `cai_secondapplicantbirthdate`, `cai_secondapplicantbirthcountry`, `cai_secondapplicantcitizenshipcountry`, `cai_secondapplicantbirthprovince`, `cai_secondndgapplicantbirthcity`, `cai_secondapplicantgendercode`, `cai_secondapplicantmaritalstatus`, `cai_secondapplicantmembersofthehousehold`, `cai_secondapplicantresidencecity`, `cai_secondapplicantresidenceprovince`, `cai_secondapplicantresidencepostalcode`, `cai_secondapplicantresidenceaddress`, `cai_secondapplicantresidencehousenumber`, `cai_secondapplicantprimaryphone`, `cai_secondapplicantemailaddress`, `cai_secondapplicantotherphone`, `cai_secondapplicantjobposition`, `cai_secondapplicantcurrentoccupation`, `cai_secondapplicantjobdescription`, `cai_secondapplicantlengthofservice`, `cai_secondapplicantpersonalincome`, `cai_secondapplicantdependentfamilymember`, `cai_secondapplicantothersincomesources`, `cai_secondapplicantemployer`, `cai_secondapplicantcurrentemploymentdate`, `cai_secondapplicantmonthlypayment`, `cai_brokerguid`, `cai_authorid`, `cai_opportunityprospectname`, `cai_opportunityprospectlastname`, `cai_opportunityprospectlegalname`, `cai_opportunityprospectemail`, `cai_opportunityprospectphone`, `cai_opportunityprospectvalue`

### `account` — Account

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 51 |
| Campi nel wiki tecnico | 154 |
| Campi mancanti totali | **29** |
| Fonte wiki tecnico | docs |

**Campi custom mancanti** (richiedono `npm run custom`):

`msdyn_segmentid`, `cai_legalformcode`, `cai_legalformname`, `cai_legalformid`, `cai_segmentcode`, `cai_segmentname`, `cai_segmentid`, `cai_orgunitid`, `cai_walletid`, `cai_institutecode`, `cai_ndgcode`, `cai_score`, `cai_customertype`, `cai_extinctiondate`, `cai_relationshipcode`, `cai_relationshipname`, `cai_relationshipdate`, `cai_relationshipid`, `cai_atecocode`, `cai_fiscalcode`, `cai_vatcode`, `cai_coi`, `cai_firstname`, `cai_lastname`, `cai_age`, `cai_job`, `cai_birthdate`

**Campi standard mancanti** (verificare manualmente):

`originatingleadid`, `territoryid`

### `contact` — Contatto

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 55 |
| Campi nel wiki tecnico | 233 |
| Campi mancanti totali | **25** |
| Fonte wiki tecnico | docs |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_legalformcode`, `cai_legalformname`, `cai_legalformid`, `cai_segmentcode`, `cai_segmentname`, `cai_segmentid`, `cai_orgunitid`, `cai_walletid`, `cai_institutecode`, `cai_ndgcode`, `cai_score`, `cai_customertype`, `cai_extinctiondate`, `cai_relationshipcode`, `cai_relationshipname`, `cai_relationshipdate`, `cai_relationshipid`, `cai_atecocode`, `cai_fiscalcode`, `cai_vatcode`, `cai_coi`, `cai_heading`, `cai_age`, `cai_job`

**Campi standard mancanti** (verificare manualmente):

`originatingleadid`

### `cai_conflict` — Conflitto

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 39 |
| Campi nel wiki tecnico | 23 |
| Campi mancanti totali | **16** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_appointmentidname`, `cai_orgunitidname`, `cai_participantidname`, `cai_participantidyominame`

**Campi standard mancanti** (verificare manualmente):

`owneridtype`

**Campi virtuali** *(comportamento atteso — non in schema)*:

`createdbyname`, `createdbyyominame`, `createdonbehalfbyname`, `createdonbehalfbyyominame`, `modifiedbyname`, `modifiedbyyominame`, `modifiedonbehalfbyname`, `modifiedonbehalfbyyominame`, `owneridname`, `owneridyominame`, `owningbusinessunitname`

### `phonecall` — Telefonata

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 71 |
| Campi nel wiki tecnico | 55 |
| Campi mancanti totali | **16** |
| Fonte wiki tecnico | docs |

**Campi standard mancanti** (verificare manualmente):

`serviceid`

**Campi virtuali** *(comportamento atteso — non in schema)*:

`createdbyname`, `createdbyyominame`, `createdonbehalfbyname`, `createdonbehalfbyyominame`, `modifiedbyname`, `modifiedbyyominame`, `modifiedonbehalfbyname`, `modifiedonbehalfbyyominame`, `owningbusinessunitname`, `regardingobjectidname`, `regardingobjectidyominame`, `serviceidname`, `slainvokedidname`, `slaname`, `transactioncurrencyidname`

### `appointment` — Appuntamento

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 24 |
| Campi nel wiki tecnico | 74 |
| Campi mancanti totali | **11** |
| Fonte wiki tecnico | docs |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_contactchannelid`, `cai_expectedaction`, `cai_argumentid`, `cai_organizertype`, `cai_type`, `cai_status`, `cai_templatetype`, `cai_authorid`, `cai_otherpartecipants`, `cai_freeappointment`, `cai_basesubjectforbdi`

### `businessunit` — Business Unit

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 13 |
| Campi nel wiki tecnico | 75 |
| Campi mancanti totali | **7** |
| Fonte wiki tecnico | docs |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_checksumid`, `cai_code`, `cai_dsscodeid`, `cai_level`, `cai_ismigrated`, `cai_orderlevel`, `cai_type`

### `cai_leadoutcome` — Esito lead

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 16 |
| Campi nel wiki tecnico | 22 |
| Campi mancanti totali | **7** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_leadoutcome`, `cai_selectableonfree`, `cai_retail`, `cai_private`, `cai_bdi`, `cai_customerservice`, `cai_visibility`

### `systemuser` — Utente

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 17 |
| Campi nel wiki tecnico | 136 |
| Campi mancanti totali | **6** |
| Fonte wiki tecnico | docs |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_userprofileid`, `cai_modiroleid`, `cai_orgunitid`, `cai_iddepartimental`, `cai_institutecode`, `cai_parttime`

### `cai_leadoutcomeactivitycssession` — SC Sessione di Esitazione

| Proprietà | Valore |
|-----------|--------|
| Business area | Servizio Clienti |
| Campi documentati nelle AF | 4 |
| Campi nel wiki tecnico | 38 |
| Campi mancanti totali | **4** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_sessionguid`, `cai_leadid`, `cai_leadoutcomeid`, `cai_notes`

### `recurringappointmentmaster` — Appuntamento ricorrente

| Proprietà | Valore |
|-----------|--------|
| Business area | Standard D365 |
| Campi documentati nelle AF | 36 |
| Campi nel wiki tecnico | 84 |
| Campi mancanti totali | **2** |
| Fonte wiki tecnico | docs |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_organizertype`, `cai_type`

### `cai_campaign` — Anagrafe campagna

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 23 |
| Campi nel wiki tecnico | 35 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_inventoryschedule`

### `cai_genericcontact` — Contatto generico

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 10 |
| Campi nel wiki tecnico | 72 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_genericcontactid`

### `cai_leadoutcomeactivity` — Esitazione

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 12 |
| Campi nel wiki tecnico | 30 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_interaction`

### `cai_macrocategory` — Macrocategoria

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 8 |
| Campi nel wiki tecnico | 18 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_macrocategory`

### `cai_macroproduct` — Macroprodotto

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 7 |
| Campi nel wiki tecnico | 17 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_macroproduct`

### `cai_walletmembership` — Membro Portafoglio

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 10 |
| Campi nel wiki tecnico | 25 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_delegatoportafoglioid`

### `cai_marketinggoal` — Obiettivo di marketing

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 7 |
| Campi nel wiki tecnico | 17 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_marketinggoal`

### `cai_wallet` — Portafoglio

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 9 |
| Campi nel wiki tecnico | 28 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_managertypecode`

### `cai_appointmentrequest` — Richiesta Appuntamento

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 17 |
| Campi nel wiki tecnico | 33 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi standard mancanti** (verificare manualmente):

`customerid`

### `cai_product` — Prodotto

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 16 |
| Campi nel wiki tecnico | 27 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_defaultforappointmentrequest`

### `cai_ownershiprelation` — Titolarità Rapporto

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 5 |
| Campi nel wiki tecnico | 17 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi custom mancanti** (richiedono `npm run custom`):

`cai_date`

### `cai_orgunit` — Unità organizzativa

| Proprietà | Valore |
|-----------|--------|
| Business area | Retail / CRM |
| Campi documentati nelle AF | 25 |
| Campi nel wiki tecnico | 38 |
| Campi mancanti totali | **1** |
| Fonte wiki tecnico | custom |

**Campi standard mancanti** (verificare manualmente):

`businessunitid`

---

## C — Entità assenti dal wiki tecnico ❌

Tutte entità custom (`cai_*`) presenti nelle AF ma non ancora in `wiki/custom/`. Richiedono `npm run custom -- --url <env-url>` per essere ingerite.

| Entità | Display IT | Business area |
|--------|-----------|---------------|
| `cai_coverageteam` | Coverage team | Private Banking |
| `cai_customerinterview` | Customer interview | Business Dev Intelligence |
| `cai_customerinterviewcoverageteam` | Customer interview - Coverage team | Business Dev Intelligence |
| `cai_customerinterviewpartecipant` | Partecipante Customer interview | Business Dev Intelligence |
| `cai_customerinterviewpointofcontact` | Referente Customer interview | Business Dev Intelligence |
| `cai_customerinterviewtopic` | Tema Customer interview | Business Dev Intelligence |
| `cai_event` | Evento | Private Banking |
| `cai_eventattendant` | Accompagnatore evento | Private Banking |
| `cai_familyunit` | Nucleo | Private Banking |
| `cai_familyunitmember` | Componente nucleo | Private Banking |
| `cai_familyunitmemberrelationship` | Legame componenti nucleo | Private Banking |
| `cai_group` | Gruppo | Business Dev Intelligence |
| `cai_hierarchicallevel` | Livello gerarchico | Private Banking |
| `cai_leadoutcomeactivitycssessionparams` | SC Parametri della Sessione di Esitazione | Servizio Clienti |
| `cai_opportunitycoverageteam` | Opportunità - Coverage team | Business Dev Intelligence |
| `cai_opportunityoutcome` | Esito opportunità | Business Dev Intelligence |
| `cai_pingprofile` | Profilo PING | Private Banking |
| `cai_qualitativeinfosassets` | Info qualitative - Patrimonio | Private Banking |
| `cai_qualitativeinfosestateplanning` | Info qualitative - Pianificazione successoria | Private Banking |
| `cai_qualitativeinfospersonalinfo` | Info qualitative - Info personale | Private Banking |
| `cai_qualitativeinfosrelationshiptrend` | Info qualitative - Andamento relazione | Private Banking |

---

*Report generato automaticamente da `scripts/export-wiki-compare-report.mjs` · 2026-05-08*