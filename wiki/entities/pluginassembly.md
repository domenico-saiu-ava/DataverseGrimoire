---
logical: "pluginassembly"
display: "Plug-in Assembly"
entitySetName: "pluginassemblies"
primaryId: "pluginassemblyid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Plug-in Assembly

Assembly that contains one or more plug-in types.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `pluginassembly` |
| Display name | Plug-in Assembly |
| Display (plural) | Plug-in Assemblies |
| Schema name | `PluginAssembly` |
| Entity set (Web API) | `pluginassemblies` |
| Primary id attribute | `pluginassemblyid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/pluginassemblies?$select=name&$top=10
GET /api/data/v9.2/pluginassemblies(<guid>)
POST /api/data/v9.2/pluginassemblies
PATCH /api/data/v9.2/pluginassemblies(<guid>)
DELETE /api/data/v9.2/pluginassemblies(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`AuthType`, `Content`, `Culture`, `Description`, `IntroducedVersion`, `IsCustomizable`, `IsHidden`, `IsolationMode`, `ManagedIdentityId`, `Name`, `PackageId`, `Password`, `Path`, `PluginAssemblyId`, `PublicKeyToken`, `SourceHash`, `SourceType`, `Url`, `UserName`, `Version`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomizationLevel`, `IsManaged`, `IsPasswordSet`, `Major`, `Minor`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `PluginAssemblyIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_pluginassembly` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_pluginassembly_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_pluginassembly_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `managedidentity_PluginAssembly` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `modifiedby_pluginassembly` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_pluginassembly` | [organization](organization.md) | `organizationid` | `organizationid` |
| `pluginpackage_pluginassembly` | [pluginpackage](pluginpackage.md) | `packageid` | `PackageId` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `pluginassembly_plugintype` | _n/a_ | `pluginassemblyid` | _n/a_ |


## Source

Generated from [pluginassembly.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/pluginassembly.md) on 2026-05-06.