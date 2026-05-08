---
logical: "cai_familyunit"
display_it: "Nucleo"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["nucleo"]
processes: ["Ruoli e responsabilità – Descrizione dettagliata", "Focus Lead mutui › Vista di dettaglio lead mutui"]
dataverse_logical: "cai_familyunit"
is_custom: false
schema_name: "cai_familyunit"
generated: "2026-05-07"
---

# Nucleo — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_familyunit`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice | Text | No | ✓ | Codice del nucleo |
| `cai_familyunitid` | Nucleo | Guid | No | ✓ | Identificativo univoco del record di Nucleo |
| `cai_pointofcontactid` | Referente | Customer | No | ✓ | Referente del nucleo |
| `cai_isfamilyunitwithsinglemember` | Nucleo con singolo componente | Boolean | No | ✓ | Indica se il Nucleo ha un solo componente |
| `statuscode` | Motivo stato | Choice | No |  | Motivo stato del record di Componente nucleo |
| `statecode` | Stato | Choice | No |  | Stato del record di Componente nucleo |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > Figura 24- Dettagli lead mutui La schermata è accessibile partendo dalla scheda lead tramite un’azione rapida di visualizza tutti i dati visibile ed attivabile specifica nel widget prodotti per le lea
- **AF servizio clienti - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > La schermata è accessibile partendo dalla scheda lead tramite la selezione del tab “Dettagli”. Campi Visualizzati: Dettagli Campo 1: “Lead ID” Valori ammessi: codice univoco assegnato alla lead Campo 
- **AF Retail - MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07