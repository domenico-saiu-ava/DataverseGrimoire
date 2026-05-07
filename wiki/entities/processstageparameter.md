---
logical: "processstageparameter"
display: "ProcessStageParameter"
entitySetName: "processstageparameters"
primaryId: "processstageparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# ProcessStageParameter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `processstageparameter` |
| Display name | ProcessStageParameter |
| Display (plural) | ProcessStageParameters |
| Schema name | `processstageparameter` |
| Entity set (Web API) | `processstageparameters` |
| Primary id attribute | `processstageparameterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/processstageparameters?$select=name&$top=10
GET /api/data/v9.2/processstageparameters(<guid>)
POST /api/data/v9.2/processstageparameters
PATCH /api/data/v9.2/processstageparameters(<guid>)
DELETE /api/data/v9.2/processstageparameters(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessStageId`, `processstageparameterId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `Value`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_processstageparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_processstageparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_processstageparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_processstageparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_processstageparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_processstageparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_processstageparameter` | [processstage](processstage.md) | `processstageid` | `ProcessStageId` |
| `team_processstageparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_processstageparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `processstageparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `processstageparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `processstageparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `processstageparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `processstageparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `processstageparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [processstageparameter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/processstageparameter.md) on 2026-05-06.