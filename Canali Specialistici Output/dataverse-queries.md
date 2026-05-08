# Query REST Dataverse — 2026-05-08

> Ambiente: `https://crmoperativodevevo.crm4.dynamics.com`  
> Entità selezionate casualmente da `Datamodel_D365.md`  
> `$top=3` record per query

## Elenco query

| # | Entità | Logical Name | Entity Set | Wiki source |
|---|--------|-------------|-----------|-------------|
| 1 | Agenda preferita | `cai_preferredcalendar` | `cai_preferredcalendars` | custom |
| 2 | Argomento (cai_argument) | `cai_argument` | `cai_arguments` | custom |
| 3 | Campi regola smist. | `cai_dispatchingruleadditionalfields` | `cai_dispatchingruleadditionalfieldses` | custom |
| 4 | Prodotto (cai_product) | `cai_product` | `cai_products` | custom |
| 5 | PRV Evento | `cai_event` | `cai_events` | — |
| 6 | Richiesta appuntamento | `cai_appointmentrequest` | `cai_appointmentrequests` | custom |
| 7 | Natura Giuridica | `cai_legalform` | `cai_legalforms` | custom |
| 8 | Gruppo prodotto | `cai_productgroup` | `cai_productgroups` | custom |
| 9 | Macro categoria | `cai_macrocategory` | `cai_macrocategories` | custom |
| 10 | Business Unit (BusinessUnit) | `businessunit` | `businessunits` | docs |

---

## Query 1 — Agenda preferita

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Agenda preferita |
| Fonte wiki | custom |
| Entity set | `cai_preferredcalendars` |
| Logical name | `cai_preferredcalendar` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_preferredcalendars?$select=createdon,cai_code,cai_systemuserid,cai_colleagueid,cai_name,modifiedon&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `createdon,cai_code,cai_systemuserid,cai_colleagueid,cai_name,modifiedon`

---

## Query 2 — Argomento (cai_argument)

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Argomento |
| Fonte wiki | custom |
| Entity set | `cai_arguments` |
| Logical name | `cai_argument` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_arguments?$select=createdon,cai_code,cai_colorcode,cai_name,modifiedon,cai_minterclass&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `createdon,cai_code,cai_colorcode,cai_name,modifiedon,cai_minterclass`

---

## Query 3 — Campi regola smist.

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Campi aggiuntivi regola smistamento Lead |
| Fonte wiki | custom |
| Entity set | `cai_dispatchingruleadditionalfieldses` |
| Logical name | `cai_dispatchingruleadditionalfields` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_dispatchingruleadditionalfieldses?$select=cai_dispatchingruleid,cai_name,cai_additionalfieldname,cai_additionalfieldvalue&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `cai_dispatchingruleid,cai_name,cai_additionalfieldname,cai_additionalfieldvalue`

---

## Query 4 — Prodotto (cai_product)

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Prodotto |
| Fonte wiki | custom |
| Entity set | `cai_products` |
| Logical name | `cai_product` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_products?$select=createdon,modifiedon,cai_name,cai_code,cai_macroproductid,cai_macrocategoryid&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `createdon,modifiedon,cai_name,cai_code,cai_macroproductid,cai_macrocategoryid`

---

## Query 5 — PRV Evento

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_events?$select=cai_code,cai_name,cai_notes,cai_startdate,cai_enddate,cai_trackastask&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `cai_code,cai_name,cai_notes,cai_startdate,cai_enddate,cai_trackastask`

---

## Query 6 — Richiesta appuntamento

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Richiesta Appuntamento |
| Fonte wiki | custom |
| Entity set | `cai_appointmentrequests` |
| Logical name | `cai_appointmentrequest` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_appointmentrequests?$select=cai_appointmentid,cai_argumentid,cai_contactchannelid,customerid,cai_enddate,cai_startdate&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `cai_appointmentid,cai_argumentid,cai_contactchannelid,customerid,cai_enddate,cai_startdate`

---

## Query 7 — Natura Giuridica

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Natura Giuridica |
| Fonte wiki | custom |
| Entity set | `cai_legalforms` |
| Logical name | `cai_legalform` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_legalforms?$select=createdon,modifiedon,cai_code,cai_name&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `createdon,modifiedon,cai_code,cai_name`

---

## Query 8 — Gruppo prodotto

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Gruppo prodotto |
| Fonte wiki | custom |
| Entity set | `cai_productgroups` |
| Logical name | `cai_productgroup` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_productgroups?$select=createdon,modifiedon,cai_name,cai_code&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `createdon,modifiedon,cai_name,cai_code`

---

## Query 9 — Macro categoria

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Macrocategoria |
| Fonte wiki | custom |
| Entity set | `cai_macrocategories` |
| Logical name | `cai_macrocategory` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/cai_macrocategories?$select=createdon,modifiedon,cai_name,cai_code&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `createdon,modifiedon,cai_name,cai_code`

---

## Query 10 — Business Unit (BusinessUnit)

| Proprietà | Valore |
|-----------|--------|
| Display (wiki) | Business Unit |
| Fonte wiki | docs |
| Entity set | `businessunits` |
| Logical name | `businessunit` |

```http
GET https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/businessunits?$select=cai_checksumid,cai_code,cai_dsscodeid,cai_level,cai_ismigrated,cai_orderlevel&$top=3
Authorization: Bearer <token>
OData-MaxVersion: 4.0
Accept: application/json
```

**$select:** `cai_checksumid,cai_code,cai_dsscodeid,cai_level,cai_ismigrated,cai_orderlevel`
