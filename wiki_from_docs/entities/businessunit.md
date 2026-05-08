---
logical: "businessunit"
display_it: "Business Unit"
source: "docs_analysis"
business_area: "Standard D365"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["business unit"]
dataverse_logical: "businessunit"
is_custom: false
schema_name: "BusinessUnit"
generated: "2026-05-07"
---

# Business Unit — Scheda funzionale

**Business area:** Standard D365  
**Entità Dataverse:** `businessunit`  
**Custom:** No  
**Ownership:** BusinessOwned

Azienda, divisione o reparto nel database di Microsoft Dynamics 365

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `businessunitid` | Business Unit | Uniqueidentifier | **Sì** |  | Identificatore univoco della Business Unit. |
| `cai_checksumid` | Checksum ID | Whole number | No | ✓ |  |
| `cai_code` | Codice | Text | No | ✓ |  |
| `cai_dsscodeid` | Codice DSS | Text | No | ✓ |  |
| `cai_level` | Livello | Text | No | ✓ |  |
| `cai_ismigrated` | Migrata | Two options | No | ✓ | Specifica se la Business Unit è stata migrata |
| `cai_orderlevel` | Ordinamento | Number | No | ✓ |  |
| `cai_type` | Tipo | Optionset | No | ✓ |  |
| `description` | Descrizione | Multiline Text | No |  | Descrizione della Business Unit. |
| `isdisabled` | Disabilitata | Two options | **Sì** |  | Specifica se la Business Unit è abilitata o disabilitata. |
| `name` | Nome | Text | **Sì** |  | Nome della Business Unit. |
| `organizationid` | Organizzazione | Lookup | **Sì** |  | Identificatore univoco dell'organizzazione associata alla Business Unit. |
| `parentbusinessunitid` | Azienda padre | Lookup | **Sì** |  | Identificatore univoco della Business Unit padre. |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `organizationid` | Organizzazione | `organization` |
| `parentbusinessunitid` | Azienda padre | `businessunit` |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07