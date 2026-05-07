---
logical: "retentionoperation"
display: "RetentionOperation"
entitySetName: "retentionoperations"
primaryId: "retentionoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# RetentionOperation

Retention policy execution details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionoperation` |
| Display name | RetentionOperation |
| Display (plural) | RetentionOperation |
| Schema name | `retentionoperation` |
| Entity set (Web API) | `retentionoperations` |
| Primary id attribute | `retentionoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionoperations?$select=name&$top=10
GET /api/data/v9.2/retentionoperations(<guid>)
POST /api/data/v9.2/retentionoperations
PATCH /api/data/v9.2/retentionoperations(<guid>)
DELETE /api/data/v9.2/retentionoperations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`AdditionalDetails`, `AsyncOperationId`, `Criteria`, `EndTime`, `FailedCount`, `ImportSequenceNumber`, `LastMarkedVersionNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PagingCookie`, `RetentionConfigId`, `RetentionCount`, `retentionoperationId`, `RootEntityLogicalName`, `StartTime`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_retentionoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_retentionoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_retentionoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `retentionconfig_retentionoperatio` | [retentionconfig](retentionconfig.md) | `retentionconfigid` | `retentionconfigid` |
| `team_retentionoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_retentionoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `retentionoperation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `retentionoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `retentionoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperation_retentionopera` | _n/a_ | `retentionoperationid` | _n/a_ |
| `retentionoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [retentionoperation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/retentionoperation.md) on 2026-05-06.