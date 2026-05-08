---
logical: "cai_qualitativeinfosassets"
display_it: "Info qualitative - Patrimonio"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["info qualitative - patrimonio"]
dataverse_logical: "cai_qualitativeinfosassets"
is_custom: false
schema_name: "cai_qualitativeinfosassets"
generated: "2026-05-07"
---

# Info qualitative - Patrimonio — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_qualitativeinfosassets`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_qualitativeinfosassetsid` | Info qualitative - Patrimonio | Guid | No | ✓ | Identificativo del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato del record |
| `cai_customerid` | Cliente | Customer | No | ✓ |  |
| `cai_properties` | Immobili | Whole number | No | ✓ | Precompilato, non modificabile (da DSS) |
| `cai_totalpropertyvalue` | Valore complessivo immobili | Text | No | ✓ | Precompilato, non modificabile (da DSS) |
| `cai_artcollectibleassets` | Patrimonio artistico/da collezione | Choice | No |  | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_artcollectibleassettype` | Tipologia patrimonio artistico/da collezione | Multi choice | No |  | Quadri; Sculture; Lingotti; Gioielli; Francobolli; Monete; Orologi; Arredi; Tappeti; Automobile; Altro (se disponibile, altrimenti vuoto) |
| `cai_artcollectibleassetvalue` | Valore patrimonio artistico/da collezione | Decimal | No |  | Importo espresso in euro |
| `cai_multibanked` | Multibancarizzato | Choice | No |  | Sì; No — precompilato, non modificabile (da FrEE) |
| `cai_otherfinancialinstitutions` | Altri istituti | Multi choice | No |  | Fideuram; Intesa San Paolo; Unicredit; MPS; Banca Generali; Allianz Bank; Fineco bank; BNL; BNP Paribas; BPER; Mediolanum; Banca Sella; Azimut; Credem |
| `cai_percentageoftotalassetsinca` | % Patrimonio complessivo in CA | Text | No |  | Precompilato, non modificabile (da DSS) |
| `cai_alternativefinanceinstruments` | Strumenti di finanza alternativa | Choice | No |  | Club deal; Venture capital; Private equity e debt; Angel investor; Associazione a Le Village (se disponibile, altrimenti vuoto) |
| `cai_assetsnotes` | Note Patrimonio | Text | No |  | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07