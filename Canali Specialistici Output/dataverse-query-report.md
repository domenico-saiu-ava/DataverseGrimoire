# Report Esecuzione Query Dataverse — 2026-05-08

> Ambiente: `https://crmoperativodevevo.crm4.dynamics.com`  
> Eseguito il: **2026-05-08T13:16:50.476Z**

## Riepilogo

| Metrica | Valore |
|---------|--------|
| Query totali | 10 |
| ✅ Successo | **9** |
| ❌ Errore | **1** |
| Tempo medio risposta | 122 ms |

## Risultati per query

| #   | Entità                       | Stato HTTP | Record | Tempo  | Esito |
| --- | ---------------------------- | ---------- | ------ | ------ | ----- |
| 1   | Agenda preferita             | 200        | 3      | 352 ms | ✅     |
| 2   | Argomento (cai_argument)     | 200        | 3      | 118 ms | ✅     |
| 3   | Campi regola smist.          | 200        | 0      | 113 ms | ✅     |
| 4   | Prodotto (cai_product)       | 200        | 3      | 126 ms | ✅     |
| 5   | PRV Evento                   | 404        | —      | 74 ms  | ❌     |
| 6   | Richiesta appuntamento       | 200        | 3      | 98 ms  | ✅     |
| 7   | Natura Giuridica             | 200        | 3      | 87 ms  | ✅     |
| 8   | Gruppo prodotto              | 200        | 3      | 95 ms  | ✅     |
| 9   | Macro categoria              | 200        | 3      | 77 ms  | ✅     |
| 10  | Business Unit (BusinessUnit) | 200        | 3      | 76 ms  | ✅     |

---

## 1. Agenda preferita (`cai_preferredcalendar`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_preferredcalendars?$select=createdon,cai_code,cai_systemuserid,cai_colleagueid,cai_name,modifiedon&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 352 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"20234306\"",
  "createdon": "2026-03-25T14:33:33Z",
  "modifiedon": "2026-03-25T14:33:33Z",
  "cai_preferredcalendarid": "ac85f88b-5728-f111-8341-002248a1e81b",
  "cai_code": "CALPRF00000019",
  "cai_name": "Agenda X1"
}
```

---

## 2. Argomento (cai_argument) (`cai_argument`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_arguments?$select=createdon,cai_code,cai_colorcode,cai_name,modifiedon,cai_minterclass&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 118 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"19727204\"",
  "createdon": "2026-02-04T14:16:46Z",
  "cai_colorcode": null,
  "modifiedon": "2026-03-18T14:32:09Z",
  "cai_argumentid": "c98e5417-d401-f111-8407-000d3ab5721b",
  "cai_minterclass": null,
  "cai_code": null,
  "cai_name": "SVILUPPO LEAD MUTUI"
}
```

---

## 3. Campi regola smist. (`cai_dispatchingruleadditionalfields`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_dispatchingruleadditionalfieldses?$select=cai_dispatchingruleid,cai_name,cai_additionalfieldname,cai_additionalfieldvalue&$top=3`

**Stato:** ✅ HTTP 200 — 0 record restituiti — 113 ms

_Nessun record trovato (entity set vuota o nessun dato in questo ambiente)._

---

## 4. Prodotto (cai_product) (`cai_product`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_products?$select=createdon,modifiedon,cai_name,cai_code,cai_macroproductid,cai_macrocategoryid&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 126 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"19729660\"",
  "createdon": "2026-03-18T15:00:09Z",
  "modifiedon": "2026-03-18T15:00:09Z",
  "cai_productid": "245d5a15-db22-f111-8342-000d3ade3dcc",
  "cai_code": "PRD00234",
  "cai_name": "Agilcredit"
}
```

---

## 5. PRV Evento (`cai_event`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_events?$select=cai_code,cai_name,cai_notes,cai_startdate,cai_enddate,cai_trackastask&$top=3`

**Stato:** ❌ HTTP 404 — 74 ms

**Errore:** `Resource not found for the segment 'cai_events'.`

---

## 6. Richiesta appuntamento (`cai_appointmentrequest`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_appointmentrequests?$select=createdon,modifiedon&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 98 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"20970107\"",
  "modifiedon": "2026-04-02T19:00:10Z",
  "cai_appointmentrequestid": "7d762bed-5d2c-f111-88b4-7ced8d2cacad",
  "createdon": "2026-03-30T17:28:59Z"
}
```

---

## 7. Natura Giuridica (`cai_legalform`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_legalforms?$select=createdon,modifiedon,cai_code,cai_name&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 87 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"19644743\"",
  "cai_legalformid": "ec96a06a-1e21-f111-8341-7ced8d40baef",
  "createdon": "2026-03-16T09:56:49Z",
  "modifiedon": "2026-03-16T09:56:49Z",
  "cai_code": "SS",
  "cai_name": "SOCIETA' SEMPLICE"
}
```

---

## 8. Gruppo prodotto (`cai_productgroup`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_productgroups?$select=createdon,modifiedon,cai_name,cai_code&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 95 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"15925060\"",
  "createdon": "2026-02-04T14:56:32Z",
  "modifiedon": "2026-02-04T14:56:32Z",
  "cai_productgroupid": "573b7aa7-d901-f111-8407-000d3add258e",
  "cai_code": "ADA2      ",
  "cai_name": "Protezione Guida due ruote"
}
```

---

## 9. Macro categoria (`cai_macrocategory`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_macrocategories?$select=createdon,modifiedon,cai_name,cai_code&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 77 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"19725654\"",
  "createdon": "2026-03-18T13:10:15Z",
  "cai_macrocategoryid": "872d5dbe-cb22-f111-8341-000d3ad8bf52",
  "modifiedon": "2026-03-18T13:10:15Z",
  "cai_code": "MCTG00014",
  "cai_name": "Finanziamenti"
}
```

---

## 10. Business Unit (BusinessUnit) (`businessunit`)

**URL:** `https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/businessunits?$select=createdon,modifiedon&$top=3`

**Stato:** ✅ HTTP 200 — 3 record restituiti — 76 ms

**Primo record (troncato a 600 char):**

```json
{
  "@odata.etag": "W/\"13823020\"",
  "businessunitid": "9d4f4b8b-cdd9-f011-8544-000d3a65ec78",
  "modifiedon": "2026-01-22T14:56:26Z",
  "createdon": "2025-12-15T15:48:48Z"
}
```
