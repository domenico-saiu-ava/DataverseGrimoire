---
logical: "entityimageconfig"
display: "Entity Image Configuration"
entitySetName: "entityimageconfigs"
primaryId: "entityimageconfigid"
primaryName: "parententitylogicalname"
tableType: "Standard"
ownership: "None"
---

# Entity Image Configuration

Store image configuration for each entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityimageconfig` |
| Display name | Entity Image Configuration |
| Display (plural) | Entity Image Configurations |
| Schema name | `EntityImageConfig` |
| Entity set (Web API) | `entityimageconfigs` |
| Primary id attribute | `entityimageconfigid` |
| Primary name attribute | `parententitylogicalname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entityimageconfigs?$select=parententitylogicalname&$top=10
GET /api/data/v9.2/entityimageconfigs(<guid>)
POST /api/data/v9.2/entityimageconfigs
PATCH /api/data/v9.2/entityimageconfigs(<guid>)
DELETE /api/data/v9.2/entityimageconfigs(<guid>)
```

## Attributes

Writable: **3** · Read-only: **7**

### Writable

`EntityImageConfigId`, `ParentEntityLogicalName`, `PrimaryImageAttribute`

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships


### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityimageconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityimageconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityimageconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityimageconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entityimageconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entityimageconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entityimageconfig.md) on 2026-05-06.