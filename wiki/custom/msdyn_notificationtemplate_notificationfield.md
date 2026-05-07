---
logical: "msdyn_notificationtemplate_notificationfield"
display: "msdyn_notificationtemplate_notificationfield"
entitySetName: "msdyn_notificationtemplate_notificationfieldset"
primaryId: "msdyn_notificationtemplate_notificationfieldid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_notificationtemplate_notificationfield

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notificationtemplate_notificationfield` |
| Display name | msdyn_notificationtemplate_notificationfield |
| Schema name | `msdyn_notificationtemplate_notificationfield` |
| Entity set (Web API) | `msdyn_notificationtemplate_notificationfieldset` |
| Primary id attribute | `msdyn_notificationtemplate_notificationfieldid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notificationtemplate_notificationfieldset?$select=&$top=10
GET /api/data/v9.2/msdyn_notificationtemplate_notificationfieldset(<guid>)
POST /api/data/v9.2/msdyn_notificationtemplate_notificationfieldset
PATCH /api/data/v9.2/msdyn_notificationtemplate_notificationfieldset(<guid>)
DELETE /api/data/v9.2/msdyn_notificationtemplate_notificationfieldset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`componentidunique`, `componentstate`, `ismanaged`, `msdyn_notificationfieldid`, `msdyn_notificationtemplate_notificationfieldid`, `msdyn_notificationtemplateid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notificationtemplate_notificationfield` | [msdyn_notificationtemplate](msdyn_notificationtemplate.md) | _n/a_ | `msdyn_notificationtemplate_notificationfield` |

## Source

Generated from [msdyn_notificationtemplate_notificationfield (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_notificationtemplate_notificationfield')) on 2026-05-07.