---
logical: "powerpagecomponent_mspp_webrole_contact"
display: "powerpagecomponent_mspp_webrole_contact"
entitySetName: "powerpagecomponent_mspp_webrole_contactset"
primaryId: "powerpagecomponent_mspp_webrole_contactid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# powerpagecomponent_mspp_webrole_contact

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagecomponent_mspp_webrole_contact` |
| Display name | powerpagecomponent_mspp_webrole_contact |
| Schema name | `powerpagecomponent_mspp_webrole_contact` |
| Entity set (Web API) | `powerpagecomponent_mspp_webrole_contactset` |
| Primary id attribute | `powerpagecomponent_mspp_webrole_contactid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/powerpagecomponent_mspp_webrole_contactset?$select=&$top=10
GET /api/data/v9.2/powerpagecomponent_mspp_webrole_contactset(<guid>)
POST /api/data/v9.2/powerpagecomponent_mspp_webrole_contactset
PATCH /api/data/v9.2/powerpagecomponent_mspp_webrole_contactset(<guid>)
DELETE /api/data/v9.2/powerpagecomponent_mspp_webrole_contactset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`contactid`, `powerpagecomponent_mspp_webrole_contactid`, `powerpagecomponentid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagecomponent_mspp_webrole_contact` | [powerpagecomponent](powerpagecomponent.md) | _n/a_ | `powerpagecomponent_mspp_webrole_contact` |

## Source

Generated from [powerpagecomponent_mspp_webrole_contact (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagecomponent_mspp_webrole_contact')) on 2026-05-07.