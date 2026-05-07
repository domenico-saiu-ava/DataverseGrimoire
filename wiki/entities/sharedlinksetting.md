---
logical: "sharedlinksetting"
display: "Shared Link Setting"
entitySetName: "sharedlinksettings"
primaryId: "sharedlinksettingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Shared Link Setting

Shared Link Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharedlinksetting` |
| Display name | Shared Link Setting |
| Display (plural) | Shared Link Settings |
| Schema name | `SharedLinkSetting` |
| Entity set (Web API) | `sharedlinksettings` |
| Primary id attribute | `sharedlinksettingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sharedlinksettings?$select=name&$top=10
GET /api/data/v9.2/sharedlinksettings(<guid>)
POST /api/data/v9.2/sharedlinksettings
PATCH /api/data/v9.2/sharedlinksettings(<guid>)
DELETE /api/data/v9.2/sharedlinksettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`ExtensionOfRecordId`, `ImportSequenceNumber`, `IsCustomizable`, `IsEnabledForSharedLinkCreation`, `Name`, `OverriddenCreatedOn`, `SharedLinkSettingId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedlinksetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedlinksetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedlinksetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedlinksetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sharedlinksetting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sharedlinksetting_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedlinksetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedlinksetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedlinksetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `sharedlinksetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `sharedlinksetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedlinksetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sharedlinksetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedlinksetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sharedlinksetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharedlinksetting.md) on 2026-05-06.