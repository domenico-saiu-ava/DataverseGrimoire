---
slug: "appuntamenti"
title: "Gestione Appuntamenti"
source: "docs_analysis"
doc_sources: ["AF Servizio clienti- MVP0_Sprint2", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
entities_involved: ["appointment", "recurringappointmentmaster", "cai_appointmentrequest"]
generated: "2026-05-07"
---

# Gestione Appuntamenti — Processo funzionale

**Entità coinvolte:** `appointment`, `recurringappointmentmaster`, `cai_appointmentrequest`

## Sezioni AF di riferimento

- **AF Servizio clienti- MVP0_Sprint2** — §Dettagli appuntamento
- **AF Servizio clienti- MVP0_Sprint2** — §Modifica appuntamento
- **AF Servizio clienti- MVP0_Sprint2** — §Cancella appuntamento
- **AF Servizio clienti- MVP0_Sprint2** — §Esitazione appuntamento
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Fissa un appuntamento”
- **AF Retail - MVP0_Sprint1** — §Gestione lead con conferma appuntamento prenotato da terzi (APP, SC, terzi)
- **AF Retail - MVP0_Sprint1** — §Gestione lead con riprogrammazione proposta di appuntamento prenotato
- **AF servizio clienti - MVP0_Sprint1** — §Gestione lead con esito “Fissa un appuntamento (inviato in filiale)”
- **AF Retail - MVP0_Sprint2** — §Pianificazione disponibilità › Appuntamento decontestualizzato (cliente da selezionare)
- **AF Retail - MVP0_Sprint2** — §Pianificazione disponibilità › Appuntamento contestualizzato (cliente già selezionato­)
- **AF Retail - MVP0_Sprint2** — §Visualizzazione dettagli appuntamento
- **AF Retail - MVP0_Sprint2** — §Modifica appuntamento
- **AF Retail - MVP0_Sprint2** — §Cancella appuntamento
- **AF Retail - MVP0_Sprint2** — §Inoltra appuntamento
- **AF Retail - MVP0_Sprint2** — §Conferma /Rifiuta Appuntamento da APP
- **AF Retail - MVP0_Sprint2** — §Esitazione appuntamento

## Estratti rilevanti

### AF Servizio clienti- MVP0_Sprint2 — Dettagli appuntamento

> Figura 5 – Dettagli appuntamento Elementi Ribbon: Tasto Back Salva: salva la pagina, incluso modifiche e ripianificazioni sull’appuntamento Segna come completato: modifica lo stato dell’incontro in completato, attivabile solo a seguito dell’esitazione dello stesso Aggiorna: aggiorna la pagina Partecipa alla riunione: link per partecipare alla riunione via Teams, se impostata tramite questo canale Previsti altri elementi standard di Dynamics 365 Azioni previste: Elimina: per eliminare l’appuntame

### AF Servizio clienti- MVP0_Sprint2 — Modifica appuntamento

> Avvio del flusso di modifica dalla pagina di dettaglio appuntamento descritta nel paragrafo Dettagli appuntamento Al click su Salva, elemento del ribbon descritto nel paragrafo Dettagli appuntamento, le modifiche vengono salvate Flusso che segue gli standard di Dynamics 365

### AF Servizio clienti- MVP0_Sprint2 — Cancella appuntamento

> Avvio del flusso di cancella appuntamento dalla pagina di dettaglio appuntamento descritta nel paragrafo Dettagli appuntamento Al click su Elimina, elemento del ribbon descritto nel paragrafo Dettagli appuntamento, l’appuntamento viene eliminato Flusso che segue gli standard di Dynamics 365

### AF Servizio clienti- MVP0_Sprint2 — Esitazione appuntamento

> Figura 10 – Esitazione appuntamento Avvio del flusso di esitazione appuntamento dal tab Prodotti lead e suggerimenti presente nella pagina di dettaglio appuntamento descritta nel paragrafo Dettagli appuntamento Campi previsti: Esito: esiti specificati in analisi funzionale Servizio clienti Sprint 1 Note esito Dove non altrimenti espresso, la pagina segue la struttura e le funzionalità standard D365

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “Fissa un appuntamento”

> Premessa: il seguente capitolo sarà oggetto di ulteriore analisi nel corso dello sprint dedicato all’agenda Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni esito “Fissa appuntamento” per la descrizione del presente flusso. Si specifica che tale esito non è definitivo e la lead non sarà chiusa dopo tale esitazione Step 1: Dopo la selezione dell’esito “Fissa appuntamento” si prevede la comparsa azione rapida di fissa appuntamento (obbligato

### AF Retail - MVP0_Sprint1 — Gestione lead con conferma appuntamento prenotato da terzi (APP, SC, terzi)

> Premessa: il seguente capitolo sarà oggetto di ulteriore analisi nel corso dello sprint dedicato all’agenda Avviabile al click sull’azione rapida di Conferma appuntamento (visbile ed attivabile per lead con appuntamento da confermare) in Gestione lead ed in Vista lead Step 1: Rimando alla vista di dettaglio dell’appuntamento da confermare, secondo modello integrato MicroSoft 365 (teams). Dettagli appuntamento previsti: Data in formato dd/mm/yyyy, hh:mm Nome e cognome del cliente che ha effettuat

## Fonte

Generato da: AF Servizio clienti- MVP0_Sprint2, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07