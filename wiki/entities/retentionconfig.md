---
logical: "retentionconfig"
display: "RetentionConfig"
entitySetName: "retentionconfigs"
primaryId: "retentionconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# RetentionConfig

Holds retention policies for a table.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionconfig` |
| Display name | RetentionConfig |
| Display (plural) | RetentionConfig |
| Schema name | `retentionconfig` |
| Entity set (Web API) | `retentionconfigs` |
| Primary id attribute | `retentionconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionconfigs?$select=name&$top=10
GET /api/data/v9.2/retentionconfigs(<guid>)
POST /api/data/v9.2/retentionconfigs
PATCH /api/data/v9.2/retentionconfigs(<guid>)
DELETE /api/data/v9.2/retentionconfigs(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`AsyncOperationId`, `Criteria`, `EntityLogicalName`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `NextRun`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Recurrence`, `ReferenceConfigId`, `retentionconfigId`, `StartTime`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `ViewId`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_retentionconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_retentionconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_retentionconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_retentionconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_retentionconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `retentionconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `retentionconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `retentionconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionconfig_retentionoperatio` | _n/a_ | `retentionconfigid` | _n/a_ |
| `retentionconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [retentionconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/retentionconfig.md) on 2026-05-06.