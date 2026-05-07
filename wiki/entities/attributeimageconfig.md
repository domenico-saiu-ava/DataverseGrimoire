---
logical: "attributeimageconfig"
display: "Image Attribute Configuration"
entitySetName: "attributeimageconfigs"
primaryId: "attributeimageconfigid"
primaryName: "attributelogicalname"
tableType: "Standard"
ownership: "None"
---

# Image Attribute Configuration

Store configuration for each image attribute

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attributeimageconfig` |
| Display name | Image Attribute Configuration |
| Display (plural) | Image Attribute Configurations |
| Schema name | `AttributeImageConfig` |
| Entity set (Web API) | `attributeimageconfigs` |
| Primary id attribute | `attributeimageconfigid` |
| Primary name attribute | `attributelogicalname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/attributeimageconfigs?$select=attributelogicalname&$top=10
GET /api/data/v9.2/attributeimageconfigs(<guid>)
POST /api/data/v9.2/attributeimageconfigs
PATCH /api/data/v9.2/attributeimageconfigs(<guid>)
DELETE /api/data/v9.2/attributeimageconfigs(<guid>)
```

## Attributes

Writable: **4** · Read-only: **7**

### Writable

`AttributeImageConfigId`, `AttributeLogicalName`, `CanStoreFullImage`, `ParentEntityLogicalName`

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships


### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attributeimageconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributeimageconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributeimageconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributeimageconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `attributeimageconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [attributeimageconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/attributeimageconfig.md) on 2026-05-06.