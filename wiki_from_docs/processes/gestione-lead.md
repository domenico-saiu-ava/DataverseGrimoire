---
slug: "gestione-lead"
title: "Gestione Lead e Suggerimenti"
source: "docs_analysis"
doc_sources: ["AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1"]
entities_involved: ["lead", "cai_leadoutcomeactivity", "cai_leadoutcome", "account", "contact"]
generated: "2026-05-07"
---

# Gestione Lead e Suggerimenti — Processo funzionale

**Entità coinvolte:** `lead`, `cai_leadoutcomeactivity`, `cai_leadoutcome`, `account`, `contact`

## Sezioni AF di riferimento

- **AF Retail - MVP0_Sprint1** — §Interazione filtro FrEE e coni di visibilità su CRM in gestione lead
- **AF Retail - MVP0_Sprint1** — §Vista lead e suggerimenti
- **AF Retail - MVP0_Sprint1** — §Scheda lead e suggerimenti
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “venduto”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Non interessato”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Fissa un appuntamento”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Interessato per il futuro”
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito “Impossibilità a procedere”
- **AF Retail - MVP0_Sprint1** — §Gestione lead con esito “Eseguito” (Lead non mirate alla vendita)
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con esito multiplo
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con inserimento prodotto aggiuntivo in esito
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con registrazione tentativo di contatto
- **AF Retail - MVP0_Sprint1** — §Gestione lead e suggerimenti con registrazione recapito di contatto non valido (indirizzi di recapito inesistenti)
- **AF Retail - MVP0_Sprint1** — §Gestione lead con conferma appuntamento prenotato da terzi (APP, SC, terzi)
- **AF Retail - MVP0_Sprint1** — §Gestione lead con riprogrammazione proposta di appuntamento prenotato
- **AF Retail - MVP0_Sprint1** — §Notifiche di gestione lead
- **AF Retail - MVP0_Sprint1** — §Focus Lead mutui › Scheda lead – dettaglio widget prodotto per lead mutui
- **AF servizio clienti - MVP0_Sprint1** — §Scheda lead e suggerimenti
- **AF servizio clienti - MVP0_Sprint1** — §Gestione lead con esito definitivo
- **AF servizio clienti - MVP0_Sprint1** — §Gestione lead con esito “Fissa un appuntamento (inviato in filiale)”

## Estratti rilevanti

### AF Retail - MVP0_Sprint1 — Interazione filtro FrEE e coni di visibilità su CRM in gestione lead

> Se l’utente imposta il filtro relativo ad “UO” vedrà tutte le anagrafiche lead portafogliate all’interno dell’unità organizzativa di riferimento Se l’utente imposta il filtro relativo ad un portafoglio su cui detiene diritti di visibilità (focus nel paragrafo Permessi, coni di visibilità e azioni consentite ) vedrà le anagrafiche presenti nel portafoglio selezionato. In aggiunta vedrà anche posizioni di altri portafogli che si è preso in carico Come precedentemente precisato, è previsto che la v

### AF Retail - MVP0_Sprint1 — Vista lead e suggerimenti

> ­ Figura 8 – Vista lead clienti Figura 9 – Vista lead singole La schermata è accessibile dal menu laterale “Home - Gestione Lead”. La vista sarà filtrabile sulla base dei filtri in header impostati dall’utente nella cornice di FrEE. Si rimanda alle linee guida FrEE per ulteriori dettagli FREE - UX Guidelines – Figma . In particolare, qualora sia impostato il filtro “UO (unità organizzativa) l’utente potrà visualizzare la lista di lead incluse quelle non appartenenti al proprio portafoglio ma rad

### AF Retail - MVP0_Sprint1 — Scheda lead e suggerimenti

> Figura 10 – Scheda lead (Tab Lead) Figura 11 – Scheda lead (Tab Dettagli) La schermata è accessibile dalla vista lead tramite click su una specifica lead o anagrafica dalla lista in riga. La schermata è accessibile dalla pagina di Gestione lead tramite click su una specifica lead dalla lista di task. La vista dettagliata si apre in una nuova pagina o tab, mantenendo la possibilità di navigare rapidamente verso la lista di origine. Sezioni e Campi Visualizzati nell’intestazione della scheda: Camp

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “venduto”

> Figura 12 - Pagina di Esitazione Figura 13 - Pagina di esitazione CTA Esita attivato Figura 14 - Pagina di esitazione con esito registrato L’azione rapida per esitare si trova sulla schermata Scheda lead, sempre visibile ma attivabile solo se almeno una lead è selezionata tramite flag in checkbox Apertura pagina di esitazione con flusso in 2 step Step 1: Esitazione Campo 1: “Interazione” Valori ammessi: opzioni di interazione selezionabili (campo obbligatorio): Telefonata/distanza In filiale Pre

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “Non interessato”

> Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni esito “Non Interessato” per la descrizione del presente flusso Step 2: Messaggio di esito registrato La Lead è stata chiusa Azione rapida sempre visbile ed attivabile con rimando alla Scheda cliente in altra scheda Azione rapida sempre visibile ed attivabile per la chiusura del flusso. Si chiude la modale e l’utente atterra nella pagina di Gestione lead

### AF Retail - MVP0_Sprint1 — Gestione lead e suggerimenti con esito “Fissa un appuntamento”

> Premessa: il seguente capitolo sarà oggetto di ulteriore analisi nel corso dello sprint dedicato all’agenda Vale quanto detto in Gestione lead con esito “venduto” fino allo Step 1 Si prevede che l’utente selezioni esito “Fissa appuntamento” per la descrizione del presente flusso. Si specifica che tale esito non è definitivo e la lead non sarà chiusa dopo tale esitazione Step 1: Dopo la selezione dell’esito “Fissa appuntamento” si prevede la comparsa azione rapida di fissa appuntamento (obbligato

## Fonte

Generato da: AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1  
Data generazione: 2026-05-07