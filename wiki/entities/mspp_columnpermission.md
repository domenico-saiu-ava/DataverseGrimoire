---
logical: "mspp_columnpermission"
display: "Column Permission"
entitySetName: "mspp_columnpermissions"
primaryId: "mspp_columnpermissionid"
primaryName: "mspp_columnname"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Column Permission

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_columnpermission` |
| Display name | Column Permission |
| Display (plural) | Column Permissions |
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

`mspp_columnname`, `mspp_columnpermissionId`, `mspp_columnpermissionprofileid`, `mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_permissions`, `statecode`, `statuscode`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermission_columnpermissionprofile` | [mspp_columnpermissionprofile](mspp_columnpermissionprofile.md) | `mspp_columnpermissionprofileid` | `mspp_columnpermissionprofileid` |
| `mspp_systemuser_mspp_columnpermission_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_columnpermission_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |



## Source

Generated from [mspp_columnpermission.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_columnpermission.md) on 2026-05-06.