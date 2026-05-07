---
logical: "plugintype"
display: "Plug-in Type"
entitySetName: "plugintypes"
primaryId: "plugintypeid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Plug-in Type

Type that inherits from the IPlugin interface and is contained within a plug-in assembly.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `plugintype` |
| Display name | Plug-in Type |
| Display (plural) | Plug-in Types |
| Schema name | `PluginType` |
| Entity set (Web API) | `plugintypes` |
| Primary id attribute | `plugintypeid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/plugintypes?$select=name&$top=10
GET /api/data/v9.2/plugintypes(<guid>)
POST /api/data/v9.2/plugintypes
PATCH /api/data/v9.2/plugintypes(<guid>)
DELETE /api/data/v9.2/plugintypes(<guid>)
```

## Attributes

Writable: **8** · Read-only: **23**

### Writable

`Description`, `FriendlyName`, `Name`, `PluginAssemblyId`, `PluginTypeExportKey`, `PluginTypeId`, `TypeName`, `WorkflowActivityGroupName`

### Read-only

`AssemblyName`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Culture`, `CustomizationLevel`, `CustomWorkflowActivityInfo`, `IsManaged`, `IsWorkflowActivity`, `Major`, `Minor`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `PluginTypeIdUnique`, `PublicKeyToken`, `SolutionId`, `SupportingSolutionId`, `Version`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_plugintype` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_plugintype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_plugintype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_plugintype` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_plugintype` | [organization](organization.md) | `organizationid` | `organizationid` |
| `pluginassembly_plugintype` | [pluginassembly](pluginassembly.md) | `pluginassemblyid` | `pluginassemblyid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `plugintype_customapi` | _n/a_ | `plugintypeid` | _n/a_ |
| `plugintype_plugintypestatistic` | _n/a_ | `plugintypeid` | _n/a_ |
| `plugintype_sdkmessageprocessingstep` | _n/a_ | `eventhandler` | _n/a_ |
| `plugintypeid_sdkmessageprocessingstep` | _n/a_ | `plugintypeid` | _n/a_ |


## Source

Generated from [plugintype.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/plugintype.md) on 2026-05-06.