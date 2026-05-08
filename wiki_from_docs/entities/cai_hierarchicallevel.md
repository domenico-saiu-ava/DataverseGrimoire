---
logical: "cai_hierarchicallevel"
display_it: "Livello gerarchico"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["livello gerarchico"]
processes: ["Permessi, coni di visibilità e azioni consentite", "Ruoli e responsabilità – Descrizione dettagliata", "Configurazioni di agenda", "Visualizzazione agenda di collaboratori e filtri di visualizzazione › Pagina agende dei colleghi e processi correlati"]
dataverse_logical: "cai_hierarchicallevel"
is_custom: false
schema_name: "cai_hierarchicallevel"
generated: "2026-05-07"
---

# Livello gerarchico — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_hierarchicallevel`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice | Text | No | ✓ |  |
| `cai_name` | Nome | Text | No | ✓ |  |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Cono di visibilità clienti Livello gerarchico Visibilità agende di Retail Visibilità agende Servizio clienti Fissare appuntamento Riprogrammare Appuntamento Cancellare appuntamento Centro Tutti 
- **AF Retail - MVP0_Sprint1** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Codice Ruolo MoDi Profilo Ping Cono di visibilità Livello gerarchico Può lavorare task/opportunità Riceve notifiche standard di lead management Riceve notifiche di escalation per segnalare azion
- **AF servizio clienti - MVP0_Sprint1** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Cono di visibilità Livello gerarchico Può lavorare task/opportunità Riceve alert standard di lead management Riceve alert di escalation per segnalare azioni specifiche da effettuare Centro Tutti
- **AF Retail - MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Retail - MVP0_Sprint2** — §Visualizzazione agenda di collaboratori e filtri di visualizzazione › Pagina agende dei colleghi e processi correlati
  > Figura 16 – La mia agenda Figura 17 – Agende dell amia filiale Figura 20 – Visualizzazione altre agende Figura 19 – Visualizzazione altre agende Figura 18 – Altre agende Previsto accesso al click sull

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07