---
logical: "cai_orgunit"
display_it: "Unità organizzativa"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["unità organizzativa"]
processes: ["Permessi, coni di visibilità e azioni consentite", "Configurazioni di portafoglio retail", "Interazione filtro FrEE e coni di visibilità su CRM in gestione lead", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico", "3La mia giornata", "Vista lead e suggerimenti", "Creazione nuova lead spontanea di cliente o ex cliente (anagrafato su anagrafe ordinaria o prospect)", "Visualizzazione lead e tempistiche di assegnazione/lavorazione e presa in carico"]
dataverse_logical: "cai_orgunit"
is_custom: false
schema_name: "cai_orgunit"
generated: "2026-05-07"
---

# Unità organizzativa — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_orgunit`  
**Custom:** No  
**Ownership:** Organization owned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `businessunitid` | Business Unit | Lookup | No |  | Identificatore univoco della Business Unit |
| `cai_name` | Nome unità organizzativa | Text | **Sì** |  | Nome |
| `cai_orgunitid` | Unità organizzativa | Uniqueidentifier | **Sì** |  | Identificatore univoco |
| `cai_code` | Codice unità organizzativa | Text | No | ✓ |  |
| `cai_institutecode` | Codice istituto | Text | No | ✓ |  |
| `cai_areacode` | Codice area | Text | No | ✓ |  |
| `cai_areaname` | Nome area | Text | No | ✓ |  |
| `cai_regioncode` | Codice regione | Text | No | ✓ |  |
| `cai_regionname` | Nome regione | Text | No | ✓ |  |
| `cai_channelcode` | Codice canale | Text | No | ✓ |  |
| `cai_channelname` | Nome canale | Text | No | ✓ |  |
| `cai_macrochannelcode` | Codice macro canale | Text | No | ✓ |  |
| `cai_macrochannelname` | Nome macro canale | Text | No | ✓ |  |
| `cai_typecode` | Codice tipo unità organizzativa | Text | No | ✓ |  |
| `cai_typename` | Nome tipo Unità organizzativa | Text | No | ✓ |  |
| `cai_channel` | Canale struttura | Text | No | ✓ |  |
| `cai_zone` | Zona | Text | No | ✓ |  |
| `cai_ownerid` | Responsabile | Lookup | No |  |  |
| `cai_parentcode` | Codice unità organizzativa superiore | Text | No | ✓ |  |
| `cai_parentname` | Nome unità organizzativa superiore | Text | No | ✓ |  |
| `cai_parenttypecode` | Codice tipo unità organizzativa superiore | Text | No | ✓ |  |
| `cai_mail` | Mail unità organizzativa | Text | No | ✓ |  |
| `cai_level` | Livello gerarchico | Choice | No | ✓ |  |
| `cai_status` | Stato unità organizzativa | Text | No | ✓ |  |
| `cai_enrolled` | Direzione regionale enrolled | Two options | No | ✓ | Campo che, su una direzione regionale, indica se sia stata inclusa nell'enroll |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `businessunitid` | Business Unit | `businessunit` |
| `cai_ownerid` | Responsabile | `systemuser` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Cono di visibilità clienti Livello gerarchico Visibilità agende di Retail Visibilità agende Servizio clienti Fissare appuntamento Riprogrammare Appuntamento Cancellare appuntamento Centro Tutti 
- **AF Retail - MVP0_Sprint1** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Codice Ruolo MoDi Profilo Ping Cono di visibilità Livello gerarchico Può lavorare task/opportunità Riceve notifiche standard di lead management Riceve notifiche di escalation per segnalare azion
- **AF Retail - MVP0_Sprint1** — §Configurazioni di portafoglio retail
  > Ogni cliente è riconducibile ad un portafoglio di riferimento. Ad ogni portafoglio è associata un’unità organizzativa. Una matricola (titolare) può essere associata ad uno o più portafogli, anche di s
- **AF Retail - MVP0_Sprint1** — §Interazione filtro FrEE e coni di visibilità su CRM in gestione lead
  > Se l’utente imposta il filtro relativo ad “UO” vedrà tutte le anagrafiche lead portafogliate all’interno dell’unità organizzativa di riferimento Se l’utente imposta il filtro relativo ad un portafogli
- **AF Retail - MVP0_Sprint1** — §Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico
  > Premessa: Si prevede che tutti i parametri orari sottoindicati siano da intendere come default e dunque in MVP0 sono non modificabili dall’utente e di natura prettamente tecnica. Tali orari potranno e
- **AF Retail - MVP0_Sprint1** — §3La mia giornata
  > Figura 7 - Home Gestione lead Premessa: nel seguente paragrafo si descrive la sezione che funge da entrypoint per la gestione lead. L’analisi di dettaglio della to-do list sarà prevista in sprint di a
- **AF Retail - MVP0_Sprint1** — §Vista lead e suggerimenti
  > ­ Figura 8 – Vista lead clienti Figura 9 – Vista lead singole La schermata è accessibile dal menu laterale “Home - Gestione Lead”. La vista sarà filtrabile sulla base dei filtri in header impostati da
- **AF Retail - MVP0_Sprint1** — §Creazione nuova lead spontanea di cliente o ex cliente (anagrafato su anagrafe ordinaria o prospect)
  > Figura 17 Creazione nuova lead Figure 18 Creazione nuova lead Figure 19 Creazione nuova lead Figure 20 Creazione nuova lead Figure 21 Creazione nuova lead Si specifica che sarà possibile in questa fas

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07