---
logical: "cai_pingprofile"
display_it: "Profilo PING"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["profilo ping"]
processes: ["Permessi, coni di visibilità e azioni consentite", "Ruoli e responsabilità – Descrizione dettagliata"]
dataverse_logical: "cai_pingprofile"
is_custom: false
schema_name: "cai_pingprofile"
generated: "2026-05-07"
---

# Profilo PING — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_pingprofile`  
**Custom:** No  
**Ownership:** Organization

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice | Text | No | ✓ |  |
| `cai_name` | Nome | Text | No | ✓ |  |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Permessi, coni di visibilità e azioni consentite
  > Ruolo Codice Ruolo MoDi Profilo Ping Cono di visibilità Livello gerarchico Può lavorare task/opportunità Riceve notifiche standard di lead management Riceve notifiche di escalation per segnalare azion
- **AF Retail - MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07