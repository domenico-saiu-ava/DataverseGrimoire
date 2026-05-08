---
logical: "cai_argument"
display_it: "Argomento"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["argomento"]
processes: ["Catalogo prodotti", "Configurazioni di agenda", "Visualizzazione propria agenda e filtri di visualizzazione", "Dettagli appuntamento", "Gestione lead e suggerimenti con inserimento prodotto aggiuntivo in esito", "Creazione nuova lead spontanea di cliente o ex cliente (anagrafato su anagrafe ordinaria o prospect)", "Widget To-do list commerciale in scrivania", "Widget agenda in scrivania"]
dataverse_logical: "cai_argument"
is_custom: false
schema_name: "cai_argument"
generated: "2026-05-07"
---

# Argomento — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_argument`  
**Custom:** No  
**Ownership:** OrganizationOwned

Definisce gli Argomenti usati nel processo di Esitazione di Contatti e Appuntamenti

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `createdon` | Created On | DateTime | No |  | Date and time when the record was created. |
| `cai_argumentid` | Argomento | Uniqueidentifier | No |  |  |
| `cai_code` | Codice Argomento | Text | No | ✓ |  |
| `cai_colorcode` | Colore | Text | No | ✓ |  |
| `cai_name` | Name | Text | No | ✓ | The name of the custom entity. |
| `modifiedon` | Modified On | DateTime | No |  | Date and time when the record was modified. |
| `statecode` | Status | State | No |  | Status of the Argomento |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Argomento |
| `cai_minterclass` | Classe minter | Choice | No | ✓ |  |

## Processi correlati

- **AF Servizio clienti- MVP0_Sprint2** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF Servizio clienti- MVP0_Sprint2** — §Configurazioni di agenda
  > Nel flusso di fissa un appuntamento, si prevedono i seguenti limiti: Durata minima dell’appuntamento: 15 minuti Durata massima dell’appuntamento: non configurata come valore fisso, si prevede che un a
- **AF Servizio clienti- MVP0_Sprint2** — §Visualizzazione propria agenda e filtri di visualizzazione
  > Figura 1 - Visualizzazione propria agenda (Vista settimanale) Figura 2 - Visualizzazione agenda (Vista giornaliera) Figura 3 - Visualizzazione agenda (Vista mensile) Figura 4 - Visualizzazione agenda 
- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
  > Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in co
- **AF Retail - MVP0_Sprint1** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con inserimento prodotto aggiuntivo in esito
  > Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni l’azione rapida di aggiunta prodotto per la descrizione del presente flusso. Nel flusso sono p
- **AF Retail - MVP0_Sprint1** — §Creazione nuova lead spontanea di cliente o ex cliente (anagrafato su anagrafe ordinaria o prospect)
  > Figura 17 Creazione nuova lead Figure 18 Creazione nuova lead Figure 19 Creazione nuova lead Figure 20 Creazione nuova lead Figure 21 Creazione nuova lead Si specifica che sarà possibile in questa fas
- **AF servizio clienti - MVP0_Sprint1** — §Catalogo prodotti
  > In assenza di un catalogo prodotti, si prevede di mantenere la struttura del catalogo prodotti attualmente disponbile in NowDesk ed alimentata da DSS. Si prevede che, ai fini del seguente documento, l

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07