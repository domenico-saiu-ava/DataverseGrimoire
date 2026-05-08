---
logical: "cai_qualitativeinfosrelationshiptrend"
display_it: "Info qualitative - Andamento relazione"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["info qualitative - andamento relazione"]
dataverse_logical: "cai_qualitativeinfosrelationshiptrend"
is_custom: false
schema_name: "cai_qualitativeinfosrelationshiptrend"
generated: "2026-05-07"
---

# Info qualitative - Andamento relazione — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_qualitativeinfosrelationshiptrend`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_qualitativeinfosrelationshiptrendid` | Info qualitative - Andamento relazione | Guid | No | ✓ | Identificativo del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato del record |
| `cai_customerid` | Cliente | Customer | No | ✓ |  |
| `cai_relationshipstatus` | Andamento relazione | Choice | No | ✓ | Fidelizzata; Da sviluppare; In crescita; In deterioramento (se disponibile, altrimenti vuoto) |
| `cai_relationshipstatusnotes` | Note Andamento relazione | Text | No | ✓ | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |
| `cai_growthopportunities` | Opportunità di sviluppo | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_growthopportunitiesnotes` | Note Opportunità di sviluppo | Text | No | ✓ | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |
| `cai_strengths` | Punti di forza | Choice | No | ✓ | Referall; Fidelizzazione; Piena delega; Relazione con il gestore; Rapporto BdI (se disponibile, altrimenti vuoto) |
| `cai_strengthsnotes` | Note Punti di forza | Text | No | ✓ | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |
| `cai_areasofconcern` | Punti di attenzione | Choice | No | ✓ | Pricing; Family office; Credito; Difficoltà di contatto; Riservatezza cliente; Performance prodotti; Emotività cliente (se disponibile, altrimenti vuo |
| `cai_areasofconcernnotes` | Note Punti di attenzione | Text | No | ✓ | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |
| `cai_meetingwithspecialists` | Incontro con specialisti | Text | No | ✓ | Ruolo specialista: Financial advisor / Credit advisor / Wealth planner + data appuntamento — precompilato, non modificabile (da Agenda) |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07