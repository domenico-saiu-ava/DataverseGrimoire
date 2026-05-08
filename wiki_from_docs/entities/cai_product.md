---
logical: "cai_product"
display_it: "Prodotto"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["prodotto"]
processes: ["Ruoli e responsabilità – Descrizione dettagliata", "Catalogo prodotti", "Fonti alimentanti – vista generale", "Visualizzazione propria agenda e filtri di visualizzazione", "Dettagli appuntamento", "Esitazione appuntamento", "Classificazione di lead per flusso di origine", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico"]
dataverse_logical: "cai_product"
is_custom: false
schema_name: "cai_product"
generated: "2026-05-07"
---

# Prodotto — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_product`  
**Custom:** No  
**Ownership:** OrganizationOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Product Group |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Product Group |
| `cai_productid` | Prodotto | Uniqueidentifier | No |  |  |
| `cai_name` | Nome | Text | No | ✓ | The name of the custom entity. |
| `cai_code` | Codice Prodotto | Text | No | ✓ |  |
| `cai_macroproductid` | Macro prodotto | Lookup | No | ✓ |  |
| `cai_macrocategoryid` | Macro categoria | Lookup | No | ✓ |  |
| `cai_marketinggoalid` | Obiettivo di marketing | Lookup | No |  | Lookup a Obiettivo di marketing |
| `cai_toretail` | Retail | Two options | No | ✓ |  |
| `cai_toprivate` | Private | Two options | No | ✓ |  |
| `cai_tobdi` | BDI | Two options | No | ✓ |  |
| `cai_productgroupid` | Gruppo prodotto | Lookup | No | ✓ |  |
| `cai_argumentid` | Argomento | Lookup | No | ✓ |  |
| `cai_defaultforappointmentrequest` | Default per Richiesta appuntamento | Two options | No |  |  |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_macroproductid` | Macro prodotto | `cai_macroproduct` |
| `cai_macrocategoryid` | Macro categoria | `cai_macrocategory` |
| `cai_marketinggoalid` | Obiettivo di marketing | `Lookup a Obiettivo di marketing` |
| `cai_productgroupid` | Gruppo prodotto | `cai_productgroup` |
| `cai_argumentid` | Argomento | `cai_argument` |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 2 Servizio clienti INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 3 1.4 Stru
- **AF Servizio clienti- MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Servizio clienti- MVP0_Sprint2** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF Servizio clienti- MVP0_Sprint2** — §Fonti alimentanti – vista generale
  > Si prevedono ad alto livello le seguenti fonti dati FrEE: dati della scheda anagrafica Adobe/DB contatti: dati di marketing, campagne ed interazione di marketing con clienti Dati di lead mgmt attualme
- **AF Servizio clienti- MVP0_Sprint2** — §Visualizzazione propria agenda e filtri di visualizzazione
  > Figura 1 - Visualizzazione propria agenda (Vista settimanale) Figura 2 - Visualizzazione agenda (Vista giornaliera) Figura 3 - Visualizzazione agenda (Vista mensile) Figura 4 - Visualizzazione agenda 
- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
  > Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in co
- **AF Servizio clienti- MVP0_Sprint2** — §Esitazione appuntamento
  > Figura 10 – Esitazione appuntamento Avvio del flusso di esitazione appuntamento dal tab Prodotti lead e suggerimenti presente nella pagina di dettaglio appuntamento descritta nel paragrafo Dettagli ap
- **AF Retail - MVP0_Sprint1** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 1 Retail INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 4 1.4 Struttura del 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07