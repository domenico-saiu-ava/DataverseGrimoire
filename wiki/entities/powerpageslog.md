---
logical: "powerpageslog"
display: "Power Pages Log"
entitySetName: "powerpageslogs"
primaryId: "powerpageslogid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Power Pages Log

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpageslog` |
| Display name | Power Pages Log |
| Display (plural) | Power Pages Logs |
| Schema name | `PowerPagesLog` |
| Entity set (Web API) | `powerpageslogs` |
| Primary id attribute | `powerpageslogid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpageslogs?$select=name&$top=10
GET /api/data/v9.2/powerpageslogs(<guid>)
POST /api/data/v9.2/powerpageslogs
PATCH /api/data/v9.2/powerpageslogs(<guid>)
DELETE /api/data/v9.2/powerpageslogs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ClientIP`, `Content`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `PortalId`, `PowerPagesLogId`, `RequestPath`, `RequestUrl`, `TTLInSeconds`, `Type`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpageslog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerpageslog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpageslog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpageslog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpageslog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpageslog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_powerpageslog` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpageslog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [powerpageslog.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpageslog.md) on 2026-05-06.