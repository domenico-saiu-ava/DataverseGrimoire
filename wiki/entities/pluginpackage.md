---
logical: "pluginpackage"
display: "Plugin Package"
entitySetName: "pluginpackages"
primaryId: "pluginpackageid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Plugin Package

## Identity

| Property | Value |
| --- | --- |
| Logical name | `pluginpackage` |
| Display name | Plugin Package |
| Display (plural) | Plugin Packages |
| Schema name | `PluginPackage` |
| Entity set (Web API) | `pluginpackages` |
| Primary id attribute | `pluginpackageid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/pluginpackages?$select=name&$top=10
GET /api/data/v9.2/pluginpackages(<guid>)
POST /api/data/v9.2/pluginpackages
PATCH /api/data/v9.2/pluginpackages(<guid>)
DELETE /api/data/v9.2/pluginpackages(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`Content`, `ExportKeyVersion`, `ImportSequenceNumber`, `IsCustomizable`, `managedidentityid`, `Name`, `OverriddenCreatedOn`, `PluginPackageId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `Version`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FileId`, `FileId_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `Package`, `Package_Name`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_pluginpackage_FileId` | [fileattachment](fileattachment.md) | `fileid` | `FileId` |
| `FileAttachment_pluginpackage_Package` | [fileattachment](fileattachment.md) | `package` | `Package` |
| `lk_pluginpackage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_pluginpackage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_pluginpackage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_pluginpackage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `managedidentity_pluginpackage` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `organization_pluginpackage` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `pluginpackage_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `pluginpackage_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `pluginpackage_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `pluginpackage_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `pluginpackage_pluginassembly` | _n/a_ | `packageid` | _n/a_ |
| `pluginpackage_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `pluginpackage_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [pluginpackage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/pluginpackage.md) on 2026-05-06.