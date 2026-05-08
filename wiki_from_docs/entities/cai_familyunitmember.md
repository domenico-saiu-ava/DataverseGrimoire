---
logical: "cai_familyunitmember"
display_it: "Componente nucleo"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1"]
synonyms_it: ["componente nucleo"]
processes: ["Focus Lead mutui › Vista di dettaglio lead mutui"]
dataverse_logical: "cai_familyunitmember"
is_custom: false
schema_name: "cai_familyunitmember"
generated: "2026-05-07"
---

# Componente nucleo — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_familyunitmember`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_familyunitmemberid` | Componente nucleo | Guid | No | ✓ | Identificativo univoco record di Componente nucleo |
| `cai_code` | Codice | Text | No | ✓ |  |
| `cai_familyunitid` | Nucleo | Lookup | No | ✓ | Il Nucleo cui appartiene il componente |
| `cai_ispointofcontact` | Referente | Two options | No | ✓ | Indica se il componente è referente del nucleo |
| `cai_isheir` | Erede | Two options | No | ✓ | Indica se il componente è un erede |
| `cai_familyunitmemberrelationshipid` | Legame | Lookup | No | ✓ | Legame del componente del nucleo |
| `cai_isbankcustomer` | Cliente banca? | Two options | No | ✓ | Indica se il componente è un cliente banca o un non cliente |
| `cai_customermemberid` | Membro cliente | Customer | No | ✓ | Componente del nucleo avente un NDG |
| `cai_name` | Nome membro Non cliente | Text | No | ✓ | Nome del componente del nucleo che non è cliente |
| `cai_lastname` | Cognome membro Non cliente | Text | No | ✓ | Cognome del componente del nucleo che non è cliente |
| `statuscode` | Motivo stato | Choice | No |  | Motivo stato del record di Componente nucleo |
| `statecode` | Stato | Choice | No |  | Stato del record di Componente nucleo |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_familyunitid` | Nucleo | `cai_familyunit` |
| `cai_familyunitmemberrelationshipid` | Legame | `cai_familyunitmemberrelationship` |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > Figura 24- Dettagli lead mutui La schermata è accessibile partendo dalla scheda lead tramite un’azione rapida di visualizza tutti i dati visibile ed attivabile specifica nel widget prodotti per le lea
- **AF servizio clienti - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > La schermata è accessibile partendo dalla scheda lead tramite la selezione del tab “Dettagli”. Campi Visualizzati: Dettagli Campo 1: “Lead ID” Valori ammessi: codice univoco assegnato alla lead Campo 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1  
Data generazione: 2026-05-07