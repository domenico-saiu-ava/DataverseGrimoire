---
logical: "cai_qualitativeinfospersonalinfo"
display_it: "Info qualitative - Info personale"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx"]
synonyms_it: ["info qualitative - info personale"]
dataverse_logical: "cai_qualitativeinfospersonalinfo"
is_custom: false
schema_name: "cai_qualitativeinfospersonalinfo"
generated: "2026-05-07"
---

# Info qualitative - Info personale — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_qualitativeinfospersonalinfo`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_qualitativeinfospersonalinfoid` | Info qualitative - Info personale | Guid | No | ✓ | Identificativo del record |
| `cai_code` | Codice | Text | No | ✓ | Codice autogenerato del record |
| `cai_customerid` | Cliente | Customer | No | ✓ |  |
| `cai_isvip` | VIP | Choice | No | ✓ |  |
| `cai_qualitiveinfoskeyclientdomainid` | Key Client | Choice | No | ✓ | Esponente delle istituzioni/esponente politico; Personaggio sportivo/mondo dello spettacolo; Accademico/esponente del mondo della cultura/informazione |
| `cai_qualitiveinfosknownbydomainid` | Conosciuto da | Multi choice | No | ✓ | Top management; Responsabile di canale Private (se disponibile, altrimenti vuoto) |
| `cai_isfamilyoffice` | Family office | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_familyofficedenomination` | Denominazione Family office | Text | No | ✓ | Campo libero (manuale, facoltativo) max 70 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |
| `cai_interestedinbankevents` | Interessato a partecipare ad eventi Banca | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_joinlocalcommittees` | Partecipa ai comitati territoriali | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_qualitiveinfoshobbydomainid` | Hobby | Multi choice | No | ✓ | Arte; Cultura; Sport; Food and travel; Altro (se disponibile, altrimenti vuoto) |
| `cai_hobbynotes` | Note Hobby | Text | No | ✓ | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |
| `cai_joinclubsassociations` | Partecipa a club/associazioni | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_clubsassociationsnotes` | Note club/associazioni | Text | No | ✓ | Campo libero (manuale, facoltativo) max 280 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri |
| `cai_politicalrole` | Ruolo politico | Text | No | ✓ | Politico locale (NDGPIL); Persona politicamente esposta (PPEDIR, PEPINDIS, PEPINDWC); No — precompilato, non modificabile (da Anagrafe/Tabelle KYC) |
| `cai_publicpositions` | Incarichi pubblici | Choice | No | ✓ | Sì; No (se disponibile, altrimenti vuoto) |
| `cai_occupation` | Professione | Text | No | ✓ | Precompilato, non modificabile (da Anagrafe) — valori come da dominio Anagrafe (non specificati nella descrizione) |
| `cai_role` | Ruolo | Text | No | ✓ | Campo libero (manuale) max 70 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri — visibile solo se  |
| `cai_companyname` | Denominazione azienda | Text | No | ✓ | Campo libero (manuale) max 70 caratteri alfanumerici (caratteri speciali inclusi); oltre il limite non accetta ulteriori caratteri — visibile solo se  |
| `cai_companyownershippercentage` | Residenza fiscale | Whole number | No | ✓ | Valore manuale espresso in percentuale (es. 0–100%) — visibile solo se Professione = “Imprenditore” o “Soggetto apicale” |
| `cai_taxresidence` |  | Text | No | ✓ | Precompilato, non modificabile (da Anagrafe) |
| `cai_usperson` | US person | Choice | No | ✓ | Sì; No — precompilato, non modificabile (da Anagrafe) |
| `cai_corporatebankingsynergy` | Sinergia Banca di Impresa | Choice | No | ✓ | Sì; No — precompilato, non modificabile (da notizia anagrafica IMPRPRIV) |
| `cai_aliante` | Aliante | Choice | No | ✓ | Sì; No — precompilato, non modificabile (da notizia anagrafica CLICAIWI) |

## Fonte

Generato da: Datamodel_D365 1.xlsx  
Data generazione: 2026-05-07