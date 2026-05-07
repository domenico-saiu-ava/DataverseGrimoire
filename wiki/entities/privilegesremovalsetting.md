---
logical: "privilegesremovalsetting"
display: "Privileges Removal Setting"
entitySetName: "privilegesremovalsettings"
primaryId: "privilegesremovalsettingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Privileges Removal Setting

Privileges Removal Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `privilegesremovalsetting` |
| Display name | Privileges Removal Setting |
| Display (plural) | Privileges Removal Settings |
| Schema name | `PrivilegesRemovalSetting` |
| Entity set (Web API) | `privilegesremovalsettings` |
| Primary id attribute | `privilegesremovalsettingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/privilegesremovalsettings?$select=name&$top=10
GET /api/data/v9.2/privilegesremovalsettings(<guid>)
POST /api/data/v9.2/privilegesremovalsettings
PATCH /api/data/v9.2/privilegesremovalsettings(<guid>)
DELETE /api/data/v9.2/privilegesremovalsettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ExtensionOfRecordId`, `ImportSequenceNumber`, `IsAppendRemoved`, `IsAppendToRemoved`, `IsAssignRemoved`, `IsCreateRemoved`, `IsCustomizable`, `IsDeleteRemoved`, `IsReadRemoved`, `IsWriteRemoved`, `Name`, `OverriddenCreatedOn`, `PrivilegesRemovalSettingId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_privilegesremovalsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_privilegesremovalsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_privilegesremovalsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_privilegesremovalsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_privilegesremovalsetting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `privilegesremovalsetting_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `privilegesremovalsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegesremovalsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegesremovalsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `privilegesremovalsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `privilegesremovalsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegesremovalsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `privilegesremovalsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `privilegesremovalsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [privilegesremovalsetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/privilegesremovalsetting.md) on 2026-05-06.