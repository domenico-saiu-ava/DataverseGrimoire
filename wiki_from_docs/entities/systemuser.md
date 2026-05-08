---
logical: "systemuser"
display_it: "Utente"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["utente"]
processes: ["Principi guida e best practice", "Configurazioni di agenda", "Visualizzazione propria agenda e filtri di visualizzazione", "Dettagli appuntamento", "Interazione filtro FrEE e coni di visibilità su CRM in gestione lead", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico", "Fonti alimentanti – vista generale", "Elementi comuni › Collaborazione"]
dataverse_logical: "systemuser"
is_custom: false
schema_name: "SystemUser"
generated: "2026-05-07"
---

# Utente — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `systemuser`  
**Custom:** No  
**Ownership:** BusinessOwned

Persona che ha accesso al sistema Microsoft CRM ed è proprietaria di oggetti nel database di Microsoft CRM.

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `businessunitid` | Business Unit | Lookup | **Sì** |  | Identificatore univoco della Business Unit a cui è associato l'utente. |
| `domainname` | Nome utente | Text | **Sì** |  | Dominio di Active Directory di cui è membro l'utente. |
| `firstname` | Nome | Text | **Sì** |  | Nome dell'utente. |
| `fullname` | Nome completo | Text | No |  | Nome completo dell'utente. |
| `internalemailaddress` | Indirizzo e-mail primario | Text | **Sì** |  | Indirizzo e-mail interno per l'utente. |
| `lastname` | Cognome | Text | **Sì** |  | Cognome dell'utente. |
| `middlename` | Secondo nome | Text | No |  | Secondo nome dell'utente. |
| `nickname` | Nome alternativo | Text | No |  | Nome alternativo dell'utente. |
| `parentsystemuserid` | Responsabile | Lookup | No |  | Identificatore univoco del responsabile dell'utente. |
| `systemuserid` | Utente | Uniqueidentifier | **Sì** |  | Identificatore univoco dell'utente. |
| `title` | Titolo | Text | No |  | Identificatore dipendente dell'utente (formato J12345) |
| `cai_userprofileid` | Profilo | Lookup | No | ✓ |  |
| `cai_modiroleid` | Ruolo Modi | Lookup | No | ✓ |  |
| `cai_orgunitid` | Unità organizzativa | Lookup | No | ✓ | Lookup all'unità organizzativa (cai_orgunit) |
| `cai_iddepartimental` | Id matricola dipartimentale | Text | No | ✓ | Matricola dipartimentale |
| `cai_institutecode` | Codice istituto | Text | No | ✓ |  |
| `cai_parttime` | Part-time | Two options | No | ✓ | Indica se l'utente segua un orario part-time |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `businessunitid` | Business Unit | `businessunit` |
| `parentsystemuserid` | Responsabile | `systemuser` |
| `cai_userprofileid` | Profilo | `cai_userprofile` |
| `cai_modiroleid` | Ruolo Modi | `cai_modirole` |
| `cai_orgunitid` | Unità organizzativa | `cai_orgunitid` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Principi guida e best practice
  > Nella progettazione del nuovo CRM sono stati adottati i seguenti principi guida, in linea con le best practice del settore e le soluzioni leader di mercato. Centralità dell’utente: interfacce intuitiv
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Servizio clienti- MVP0_Sprint2** — §Visualizzazione propria agenda e filtri di visualizzazione
  > Figura 1 - Visualizzazione propria agenda (Vista settimanale) Figura 2 - Visualizzazione agenda (Vista giornaliera) Figura 3 - Visualizzazione agenda (Vista mensile) Figura 4 - Visualizzazione agenda 
- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
  > Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in co
- **AF Retail - MVP0_Sprint1** — §Principi guida e best practice
  > Nella progettazione del nuovo CRM sono stati adottati i seguenti principi guida, in linea con le best practice del settore e le soluzioni leader di mercato. Centralità dell’utente: interfacce intuitiv
- **AF Retail - MVP0_Sprint1** — §Interazione filtro FrEE e coni di visibilità su CRM in gestione lead
  > Se l’utente imposta il filtro relativo ad “UO” vedrà tutte le anagrafiche lead portafogliate all’interno dell’unità organizzativa di riferimento Se l’utente imposta il filtro relativo ad un portafogli
- **AF Retail - MVP0_Sprint1** — §Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico
  > Premessa: Si prevede che tutti i parametri orari sottoindicati siano da intendere come default e dunque in MVP0 sono non modificabili dall’utente e di natura prettamente tecnica. Tali orari potranno e
- **AF Retail - MVP0_Sprint1** — §Fonti alimentanti – vista generale
  > Si prevedono ad alto livello le seguenti fonti dati FrEE: dati della scheda anagrafica Adobe/DB contatti: dati di marketing, campagne ed interazione di marketing con clienti Dati di lead mgmt attualme

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07