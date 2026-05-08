---
logical: "cai_group"
display_it: "Gruppo"
source: "docs_analysis"
business_area: "Business Dev Intelligence"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["gruppo"]
processes: ["Catalogo prodotti", "Ruoli e responsabilità – Descrizione dettagliata", "Dispatching automatico di lead"]
dataverse_logical: "cai_group"
is_custom: false
schema_name: "cai_group"
generated: "2026-05-07"
---

# Gruppo — Scheda funzionale

**Business area:** Business Dev Intelligence  
**Entità Dataverse:** `cai_group`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_groupid` | Gruppo | Guid | No | ✓ | Identificativo univoco del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato |
| `cai_parentcompanyid` | Capogruppo | Customer | No | ✓ | Azienda capogruppo del gruppo |
| `cai_counterpartyid` | Controparte | Customer | No | ✓ | Azienda membro del gruppo |
| `statuscode` | Motivo stato | Choice | No |  | Motivo stato del record di Gruppo |
| `statecode` | Stato | Choice | No |  | Stato del record di Gruppo |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF Retail - MVP0_Sprint1** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint1** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF servizio clienti - MVP0_Sprint1** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF servizio clienti - MVP0_Sprint1** — §Dispatching automatico di lead
  > Si prevede un meccanismo di dispatching automatico delle lead, configurabile dalle figure di risalita dal livello di Team Leader Le regole di dispatching si basano sulle variabili descritte precedente
- **AF Retail - MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Retail - MVP0_Sprint2** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07