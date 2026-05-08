---
logical: "cai_leadoutcome"
display_it: "Esito lead"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1"]
synonyms_it: ["esito lead"]
processes: ["Focus Lead mutui › Vista di dettaglio lead mutui"]
dataverse_logical: "cai_leadoutcome"
is_custom: false
schema_name: "cai_leadoutcome"
generated: "2026-05-07"
---

# Esito lead — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_leadoutcome`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `cai_leadstatecode` | Stato Lead | OptionSet | No |  | Status |
| `cai_leadstatuscode` | Motivo stato lead | OptionSet | No |  | Reason for the status |
| `cai_leadoutcome` | Esito lead | Uniqueidentifier | No |  |  |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |
| `cai_code` | Codice esito | Text | No | ✓ | Codice dell'esito |
| `cai_isfinal` | Definitivo | Two options | No | ✓ | Descrive se l'esito sia o meno definitivo |
| `cai_technicalcode` | Codice tecnico esito | Text | No | ✓ | Codice tecnico dell'esito condiviso con Adobe (ex codice DbContatti) |
| `cai_type` | Tipo | OptionSet | No | ✓ | Specifica se l'esito sia associato al Contatto o alla Lead |
| `cai_selectableonfree` | Selezionabile su FrEE | Two options | No |  | Indica se l'esito sia selezionabile su FrEE |
| `cai_retail` | Retail | Two options | No | ✓ | Indica se l'esito sia previsto per Retail |
| `cai_private` | Private | Two options | No | ✓ | Indica se l'esito sia previsto per Private |
| `cai_bdi` | Banca d'impresa | Two options | No | ✓ | Indica se l'esito sia previsto per Banca d'impresa |
| `cai_customerservice` | Servizio clienti | Two options | No | ✓ | Indica se l'esito sia previsto per Servizio clienti |
| `cai_visibility` | Visibilità | Multichoice | No | ✓ | Indica in quali scenari potrà essere visibile l'esito |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > Figura 24- Dettagli lead mutui La schermata è accessibile partendo dalla scheda lead tramite un’azione rapida di visualizza tutti i dati visibile ed attivabile specifica nel widget prodotti per le lea
- **AF servizio clienti - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > La schermata è accessibile partendo dalla scheda lead tramite la selezione del tab “Dettagli”. Campi Visualizzati: Dettagli Campo 1: “Lead ID” Valori ammessi: codice univoco assegnato alla lead Campo 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1  
Data generazione: 2026-05-07