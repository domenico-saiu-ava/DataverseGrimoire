---
logical: "mspp_columnpermission"
display: "Autorizzazione colonna"
entitySetName: "mspp_columnpermissions"
primaryId: "mspp_columnpermissionid"
primaryName: "mspp_columnname"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Autorizzazione colonna

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_columnpermission` |
| Display name | Autorizzazione colonna |
| Display (plural) | Autorizzazioni colonna |
| Schema name | `mspp_columnpermission` |
| Entity set (Web API) | `mspp_columnpermissions` |
| Primary id attribute | `mspp_columnpermissionid` |
| Primary name attribute | `mspp_columnname` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_columnpermissions?$select=mspp_columnname&$top=10
GET /api/data/v9.2/mspp_columnpermissions(<guid>)
POST /api/data/v9.2/mspp_columnpermissions
PATCH /api/data/v9.2/mspp_columnpermissions(<guid>)
DELETE /api/data/v9.2/mspp_columnpermissions(<guid>)
```

## Attributes

Writable: **10** · Read-only: **0**

### Writable

`mspp_columnname`, `mspp_columnpermissionid`, `mspp_columnpermissionprofileid`, `mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_permissions`, `statecode`, `statuscode`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermission_columnpermissionprofile` | [mspp_columnpermissionprofile](mspp_columnpermissionprofile.md) | `mspp_columnpermissionprofileid` | `mspp_columnpermissionprofileid` |
| `mspp_systemuser_mspp_columnpermission_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_columnpermission_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |



## Source

Generated from [mspp_columnpermission (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_columnpermission')) on 2026-05-07.