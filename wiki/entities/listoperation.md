---
logical: "listoperation"
display: "List Operation"
entitySetName: "listoperations"
primaryId: "listoperationid"
primaryName: "listoperationprimaryname"
tableType: "Standard"
ownership: "UserOwned"
---

# List Operation

System operation used to perform lengthy and asynchronous list operations on large data sets, such as adding members to a list.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `listoperation` |
| Display name | List Operation |
| Display (plural) | List Operations |
| Schema name | `listoperation` |
| Entity set (Web API) | `listoperations` |
| Primary id attribute | `listoperationid` |
| Primary name attribute | `listoperationprimaryname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/listoperations?$select=listoperationprimaryname&$top=10
GET /api/data/v9.2/listoperations(<guid>)
POST /api/data/v9.2/listoperations
PATCH /api/data/v9.2/listoperations(<guid>)
DELETE /api/data/v9.2/listoperations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`Added`, `BatchInput`, `ErrorCode`, `ErrorDescription`, `ImportSequenceNumber`, `Input`, `ListId`, `listoperationId`, `ListOperationName`, `ListOperationPrimaryName`, `Log`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Processed`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_listoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `list_listoperation_ListId` | [list](list.md) | `listid` | `ListId` |
| `lk_listoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_listoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_listoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_listoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_listoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_listoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_listoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `listoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `listoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `listoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `listoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `listoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `listoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [listoperation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/listoperation.md) on 2026-05-06.