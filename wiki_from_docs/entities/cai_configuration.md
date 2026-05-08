---
logical: "cai_configuration"
display_it: "Configurazione"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["configurazione"]
processes: ["Ruoli e responsabilità – Descrizione dettagliata", "Catalogo prodotti", "Tassonomia generale", "Fonti alimentanti – vista generale", "Configurazioni di agenda", "Visualizzazione propria agenda e filtri di visualizzazione", "Dettagli appuntamento", "Configurazioni di portafoglio retail"]
dataverse_logical: "cai_configuration"
is_custom: false
schema_name: "cai_configuration"
generated: "2026-05-07"
---

# Configurazione — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_configuration`  
**Custom:** No  
**Ownership:** OrganizationOwned

Parametri di configurazione

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice configurazione | Text | No | ✓ | Codice della configurazione |
| `cai_name` | Nome configurazione | Text | No | ✓ | Nome della configurazione |
| `cai_value` | Valore | Multiline Text | No | ✓ | Campo per tracciare un valore |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §
  > CRM CRÉDIT AGRICOLE Analisi Funzionale MVP0 | Sprint 2 Servizio clienti INDICE 1 Introduzione 3 1.1 Contesto di business 3 1.2 Obiettivi e valore atteso 3 1.3 Principi guida e best practice 3 1.4 Stru
- **AF Servizio clienti- MVP0_Sprint2** — §Ruoli e responsabilità – Descrizione dettagliata
  > Centro : responsabile delle policy, processi, campagne nazionali e compliance. Ha visibilità e potere di intervento su tutta la Rete. Dipartimenti trasversali di Centro (CRM, MKT, Distribuzioni) : res
- **AF Servizio clienti- MVP0_Sprint2** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF Servizio clienti- MVP0_Sprint2** — §Tassonomia generale
  > In ambito CRM, si definisce “Appuntamento” ogni incontro associato ad una lead o suggerimento di un cliente/prospect e che richieda un’esitazione In ambito CRM, si definisce “Impegno” ogni attività ch
- **AF Servizio clienti- MVP0_Sprint2** — §Fonti alimentanti – vista generale
  > Si prevedono ad alto livello le seguenti fonti dati FrEE: dati della scheda anagrafica Adobe/DB contatti: dati di marketing, campagne ed interazione di marketing con clienti Dati di lead mgmt attualme
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Servizio clienti- MVP0_Sprint2** — §Visualizzazione propria agenda e filtri di visualizzazione
  > Figura 1 - Visualizzazione propria agenda (Vista settimanale) Figura 2 - Visualizzazione agenda (Vista giornaliera) Figura 3 - Visualizzazione agenda (Vista mensile) Figura 4 - Visualizzazione agenda 
- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
  > Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in co

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07