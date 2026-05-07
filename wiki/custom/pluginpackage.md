---
logical: "pluginpackage"
display: "Pacchetto di plug-in"
entitySetName: "pluginpackages"
primaryId: "pluginpackageid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Pacchetto di plug-in

## Identity

| Property | Value |
| --- | --- |
| Logical name | `pluginpackage` |
| Display name | Pacchetto di plug-in |
| Display (plural) | Pacchetti di plug-in |
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

Writable: **14** · Read-only: **16**

### Writable

`content`, `exportkeyversion`, `importsequencenumber`, `iscustomizable`, `managedidentityid`, `name`, `overriddencreatedon`, `pluginpackageid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `version`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `fileid`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `package`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_pluginpackage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_pluginpackage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_pluginpackage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_pluginpackage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_pluginpackage` | [organization](organization.md) | `organizationid` | `organizationid` |
| `FileAttachment_pluginpackage_FileId` | [fileattachment](fileattachment.md) | `fileid` | `FileId` |
| `FileAttachment_pluginpackage_Package` | [fileattachment](fileattachment.md) | `package` | `Package` |
| `managedidentity_pluginpackage` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `pluginpackage_SyncErrors` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `pluginpackage_AsyncOperations` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `pluginpackage_MailboxTrackingFolders` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `pluginpackage_UserEntityInstanceDatas` | [pluginpackage](pluginpackage.md) | `objectid` | `objectid_pluginpackage` |
| `pluginpackage_BulkDeleteFailures` | [pluginpackage](pluginpackage.md) | `regardingobjectid` | `regardingobjectid_pluginpackage` |
| `pluginpackage_PrincipalObjectAttributeAccesses` | [pluginpackage](pluginpackage.md) | `objectid` | `objectid_pluginpackage` |
| `pluginpackage_FileAttachments` | [pluginpackage](pluginpackage.md) | `objectid` | `objectid_pluginpackage` |
| `pluginpackage_pluginassembly` | [pluginpackage](pluginpackage.md) | `packageid` | `PackageId` |


## Source

Generated from [pluginpackage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='pluginpackage')) on 2026-05-07.