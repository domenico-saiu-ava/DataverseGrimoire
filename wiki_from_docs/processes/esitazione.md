---
slug: "esitazione"
title: "Esitazione Lead"
source: "docs_analysis"
doc_sources: ["AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
entities_involved: ["cai_leadoutcomeactivity", "lead", "cai_leadoutcome", "cai_leadoutcomesessionparams"]
generated: "2026-05-07"
---

# Esitazione Lead — Processo funzionale

**Entità coinvolte:** `cai_leadoutcomeactivity`, `lead`, `cai_leadoutcome`, `cai_leadoutcomesessionparams`

## Sezioni AF di riferimento

- **AF Servizio clienti- MVP0_Sprint2** — §Esitazione appuntamento
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “venduto”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Non interessato”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Fissa un appuntamento”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Interessato per il futuro”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Impossibilità a procedere”
- **AF Retail - MVP0_Sprint1** — §Gestione lead con esito “Eseguito” (Lead non mirate alla vendita)
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito multiplo
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con inserimento prodotto aggiuntivo in esito
- **AF servizio clienti - MVP0_Sprint1** — §Gestione lead con esito definitivo
- **AF servizio clienti - MVP0_Sprint1** — §Gestione lead con esito “Fissa un appuntamento (inviato in filiale)”
- **AF servizio clienti - MVP0_Sprint1** — §Gestione lead con esito “Interessato per il futuro” e “Da richiamare”
- **AF Retail - MVP0_Sprint2** — §Esitazione appuntamento

## Estratti rilevanti

### AF Servizio clienti- MVP0_Sprint2 — Esitazione appuntamento

> Figura 10 – Esitazione appuntamento Avvio del flusso di esitazione appuntamento dal tab Prodotti lead e suggerimenti presente nella pagina di dettaglio appuntamento descritta nel paragrafo Dettagli appuntamento Campi previsti: Esito: esiti specificati in analisi funzionale Servizio clienti Sprint 1 Note esito Dove non altrimenti espresso, la pagina segue la struttura e le funzionalità standard D365

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “venduto”

> Figura 12 - Pagina di Esitazione Figura 13 - Pagina di esitazione CTA Esita attivato Figura 14 - Pagina di esitazione con esito registrato L’azione rapida per esitare si trova sulla schermata Scheda lead, sempre visibile ma attivabile solo se almeno una lead è selezionata tramite flag in checkbox Apertura pagina di esitazione con flusso in 2 step Step 1: Esitazione Campo 1: “Interazione” Valori ammessi: opzioni di interazione selezionabili (campo obbligatorio): Telefonata/distanza In filiale Pre

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “Non interessato”

> Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni esito “Non Interessato” per la descrizione del presente flusso Step 2: Messaggio di esito registrato La Lead è stata chiusa Azione rapida sempre visbile ed attivabile con rimando alla Scheda cliente in altra scheda Azione rapida sempre visibile ed attivabile per la chiusura del flusso. Si chiude la modale e l’utente atterra nella pagina di Gestione lead

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “Fissa un appuntamento”

> Premessa: il seguente capitolo sarà oggetto di ulteriore analisi nel corso dello sprint dedicato all’agenda Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni esito “Fissa appuntamento” per la descrizione del presente flusso. Si specifica che tale esito non è definitivo e la lead non sarà chiusa dopo tale esitazione Step 1: Dopo la selezione dell’esito “Fissa appuntamento” si prevede la comparsa azione rapida di fissa appuntamento (obbligato

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “Interessato per il futuro”

> Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni esito “Interessato per il futuro” per la descrizione del presente flusso. Si specifica che tale esito non è definitivo e la lead non sarà chiusa dopo tale esitazione Step 1: Dopo la selezione dell’esito “Interessato per il futuro” si prevede la comparsa azione rapida di fissa appuntamento (facoltativa) e segua al click processo come descritto in Gestione lead con esito “Fissa un appuntamento

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “Impossibilità a procedere”

> Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni esito “Impossibilità a procedere” per la descrizione del presente flusso e confermi l’esitazione tramite apposita cta di esitazione in modale Step 2: Messaggio di esito registrato La Lead è stata chiusa Azione rapida sempre visibile ed attivabile con rimando alla Scheda cliente in nuova scheda Azione rapida sempre visibile ed attivabile per la chiusura del flusso in modale, l’utente atterra 

## Fonte

Generato da: AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07