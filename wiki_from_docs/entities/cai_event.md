---
logical: "cai_event"
display_it: "Evento"
source: "docs_analysis"
business_area: "Private Banking"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["evento"]
processes: ["Gestione lead con riprogrammazione proposta di appuntamento prenotato", "Focus Lead mutui › Lead mutui: specifiche funzionali e di processo", "Focus Lead mutui › Vista di dettaglio lead mutui", "Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista", "Pianificazione disponibilità", "Pianificazione disponibilità › Appuntamento decontestualizzato (cliente da selezionare)", "Modifica appuntamento", "Cancella appuntamento"]
dataverse_logical: "cai_event"
is_custom: false
schema_name: "cai_event"
generated: "2026-05-07"
---

# Evento — Scheda funzionale

**Business area:** Private Banking  
**Entità Dataverse:** `cai_event`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_code` | Codice | Text | No | ✓ | Codice evento |
| `cai_name` | Nome | Text | No | ✓ | Nome evento |
| `cai_notes` | Note | Text | No | ✓ | Note evento |
| `cai_startdate` | Data inizio | DateTime | No | ✓ | Data e ora inizio evento |
| `cai_enddate` | Data fine | DateTime | No | ✓ | Data e ora fine evento |
| `cai_trackastask` | Traccia come Impegno | Two options | No | ✓ | Indica se l'Evento è stato tracciato anche come Impegno in agenda |
| `cai_appointmentastaskid` | Impegno | Lookup | No | ✓ | Riferimento all'eventuale Impegno associato all'Evento |
| `regardingobjectid` | Tema | Lookup | No | ✓ | Il cliente (contact/account) cui è collegato l'evento |
| `statuscode` | Motivo stato | Choice | No |  | Motivo stato del record di Evento |
| `statecode` | Stato | Choice | No |  | Stato del record di Evento |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_appointmentastaskid` | Impegno | `appointment` |
| `regardingobjectid` | Tema | `account/contact` |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Gestione lead con riprogrammazione proposta di appuntamento prenotato
  > Premessa: il seguente capitolo sarà oggetto di ulteriore analisi nel corso dello sprint dedicato all’agenda Avviabile al click sull’azione rapida di Conferma appuntamento (visibile ed attivabile solo 
- **AF Retail - MVP0_Sprint1** — §Focus Lead mutui › Lead mutui: specifiche funzionali e di processo
  > Si specifica che i canali dei lead mutui sono: 100000007: MutuoAdesso 100000011: Mutuo Card 100000001: Mutui Online 100000021: Mutui Online Filiale 100000002: Mutui.it 100000022: Mutui.it Service 1000
- **AF Retail - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > Figura 24- Dettagli lead mutui La schermata è accessibile partendo dalla scheda lead tramite un’azione rapida di visualizza tutti i dati visibile ed attivabile specifica nel widget prodotti per le lea
- **AF Retail - MVP0_Sprint1** — §Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista
  > Configurazione lead (nome As-Is) Fonte Richiesta (As-Is) Fonte To-Be Regola di distribuzione To-Be App - Prodotti Kids and Teen (0-17) Mobile App Mobile 3 App - CA Vita Multismart Mobile App Mobile 3 
- **AF servizio clienti - MVP0_Sprint1** — §Focus Lead mutui › Lead mutui: specifiche funzionali e di processo
  > Si specifica che i canali dei lead mutui sono: 100000007: MutuoAdesso 100000011: Mutuo Card 100000001: Mutui Online 100000021: Mutui Online Filiale 100000002: Mutui.it 100000022: Mutui.it Service 1000
- **AF servizio clienti - MVP0_Sprint1** — §Focus Lead mutui › Vista di dettaglio lead mutui
  > La schermata è accessibile partendo dalla scheda lead tramite la selezione del tab “Dettagli”. Campi Visualizzati: Dettagli Campo 1: “Lead ID” Valori ammessi: codice univoco assegnato alla lead Campo 
- **AF servizio clienti - MVP0_Sprint1** — §Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista
  > Configurazione lead (nome As-Is) Fonte Richiesta (As-Is) Fonte To-Be Regola di distribuzione To-Be App - Prodotti Kids and Teen (0-17) Mobile App Mobile 3 App - CA Vita Multismart Mobile App Mobile 3 
- **AF Retail - MVP0_Sprint2** — §Pianificazione disponibilità
  > Figura 22 – Pianificazione Figura 21 – La mia agenda Figura 23 – Impostazione ricorrenza Figura 24 – Disponibilità pianificate Previsto accesso dalla mia Agenda tramite CTA “Pianifica disponibilità”, 

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07