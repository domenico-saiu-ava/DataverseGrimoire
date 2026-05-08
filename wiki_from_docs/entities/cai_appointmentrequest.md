---
logical: "cai_appointmentrequest"
display_it: "Richiesta Appuntamento"
source: "docs_analysis"
business_area: "Retail / CRM"
doc_sources: ["Datamodel_D365 1.xlsx", "AF Retail - MVP0_Sprint1", "AF servizio clienti - MVP0_Sprint1", "AF Retail - MVP0_Sprint2"]
synonyms_it: ["richiesta appuntamento"]
processes: ["Classificazione di lead per flusso di origine", "Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico", "Notifiche di gestione lead", "Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista", "Visualizzazione dettagli appuntamento", "Comunicazioni ai clienti – template NPU ed SMS"]
dataverse_logical: "cai_appointmentrequest"
is_custom: false
schema_name: "cai_appointmentrequest"
generated: "2026-05-07"
---

# Richiesta Appuntamento — Scheda funzionale

**Business area:** Retail / CRM  
**Entità Dataverse:** `cai_appointmentrequest`  
**Custom:** No  
**Ownership:** UserOwned

## Campi documentati

| Logical Name | Display IT | Tipo | Obbligatorio | Custom | Descrizione |
| --- | --- | --- | --- | --- | --- |
| `cai_appointmentid` | Appuntamento Collegato | Lookup | No | ✓ |  |
| `cai_argumentid` | Argomento | Lookup | No | ✓ |  |
| `cai_contactchannelid` | Canale Contatto | Lookup | No | ✓ | Unique identifier for Canale di Contatto associated with Richiesta Appuntamento. |
| `customerid` | Cliente | Lookup | No | ✓ |  |
| `cai_enddate` | Data Fine | DateTime | No | ✓ |  |
| `cai_startdate` | Data Inizio | DateTime | No | ✓ |  |
| `cai_managerid` | Gestore | Lookup | No | ✓ |  |
| `cai_customerheader` | Intestazione Cliente | Text | No | ✓ |  |
| `cai_sendemail` | Invio Mail | Two options | No | ✓ |  |
| `cai_institutecode` | Codice istituto | Text | No | ✓ |  |
| `cai_name` | Name | Text | No | ✓ |  |
| `cai_ndgnotification` | NDG Notifica | Text | No | ✓ |  |
| `cai_externalnotes` | Note Esterne | Multiline Text | No | ✓ |  |
| `cai_appointmentrequestid` | Richiesta Appuntamento | Uniqueidentifier | No |  | Unique identifier for entity instances |
| `statecode` | Status | State | No |  | Status of the Richiesta Appuntamento |
| `statuscode` | Status Reason | Status | No |  | Reason for the status of the Richiesta Appuntamento |
| `cai_code` | Codice | Text | No | ✓ |  |

## Relazioni (inferite da campi Lookup)

| Campo | Display IT | Entità target |
| --- | --- | --- |
| `cai_appointmentid` | Appuntamento Collegato | `appointment` |
| `cai_argumentid` | Argomento | `crp_argomento` |
| `cai_contactchannelid` | Canale Contatto | `crp_canaledicontatto` |
| `customerid` | Cliente | `account` |
| `cai_managerid` | Gestore | `systemuser` |

## Processi correlati

- **AF Retail - MVP0_Sprint1** — §Classificazione di lead per flusso di origine
  > Le tipologie di origini previste per Lead e Suggerimenti sono: Lead da CJ : nel campo origine si prevede che tali lead presentino la nomenclatura “CJ- Macro prodotto ” ed in tooltip il codice del CJ e
- **AF Retail - MVP0_Sprint1** — §Visualizzazione lead e suggerimenti, tempistiche di assegnazione/lavorazione e presa in carico
  > Premessa: Si prevede che tutti i parametri orari sottoindicati siano da intendere come default e dunque in MVP0 sono non modificabili dall’utente e di natura prettamente tecnica. Tali orari potranno e
- **AF Retail - MVP0_Sprint1** — §Notifiche di gestione lead
  > Figura 22- notifiche Le notifiche relative alle lead saranno visibili al click sull’elemento comune in spalla destra (Ref Elementi comuni) Di seguito le notifiche previste per i profili con visualizza
- **AF Retail - MVP0_Sprint1** — §Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista
  > Configurazione lead (nome As-Is) Fonte Richiesta (As-Is) Fonte To-Be Regola di distribuzione To-Be App - Prodotti Kids and Teen (0-17) Mobile App Mobile 3 App - CA Vita Multismart Mobile App Mobile 3 
- **AF servizio clienti - MVP0_Sprint1** — §Elenco delle configurazioni lead gestite da Rete, regole associate e fonte prevista
  > Configurazione lead (nome As-Is) Fonte Richiesta (As-Is) Fonte To-Be Regola di distribuzione To-Be App - Prodotti Kids and Teen (0-17) Mobile App Mobile 3 App - CA Vita Multismart Mobile App Mobile 3 
- **AF Retail - MVP0_Sprint2** — §Visualizzazione dettagli appuntamento
  > Figura 33 – Dettagli appuntamento Avvio del processo da click sul dettaglio di un appuntamento nell’agenda vista griglia o lista descritta nei capitoli in Visualizzazione propria agenda e filtri di vi
- **AF Retail - MVP0_Sprint2** — §Comunicazioni ai clienti – template NPU ed SMS
  > Richiesta appuntamento da APP Conferma appuntamento da APP Notifica Push come da As-Is Titolo: “Appuntamento confermato” Testo: “E’ stato confermato l’appuntamento richiesto con Nome Cognome del gesto

## Fonte

Generato da: Datamodel_D365 1.xlsx, AF Retail - MVP0_Sprint1, AF servizio clienti - MVP0_Sprint1, AF Retail - MVP0_Sprint2  
Data generazione: 2026-05-07