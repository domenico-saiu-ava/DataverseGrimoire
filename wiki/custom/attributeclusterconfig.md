---
logical: "attributeclusterconfig"
display: "Configurazione cluster di attributi"
entitySetName: "attributeclusterconfigs"
primaryId: "attributeclusterconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione cluster di attributi

Contiene la configurazione cluster di attributi per le entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attributeclusterconfig` |
| Display name | Configurazione cluster di attributi |
| Display (plural) | Configurazioni cluster di attributi |
| Schema name | `AttributeClusterConfig` |
| Entity set (Web API) | `attributeclusterconfigs` |
| Primary id attribute | `attributeclusterconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/attributeclusterconfigs?$select=name&$top=10
GET /api/data/v9.2/attributeclusterconfigs(<guid>)
POST /api/data/v9.2/attributeclusterconfigs
PATCH /api/data/v9.2/attributeclusterconfigs(<guid>)
DELETE /api/data/v9.2/attributeclusterconfigs(<guid>)
```

## Attributes

Writable: **11** · Read-only: **15**

### Writable

`attributeclusterconfigid`, `extensionofrecordid`, `importsequencenumber`, `iscustomizable`, `isinheritedparentforcluster`, `overriddencreatedon`, `skipautoreplicate`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `name`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_attributeclusterconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_attributeclusterconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_attributeclusterconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_attributeclusterconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_attributeclusterconfig` | [organization](organization.md) | `organizationid` | `organizationid` |
| `attributeclusterconfig_extensionofrecordid_attribute` | [attribute](attribute.md) | `extensionofrecordid` | `Attribute` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attributeclusterconfig_SyncErrors` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeclusterconfig_AsyncOperations` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeclusterconfig_MailboxTrackingFolders` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeclusterconfig_UserEntityInstanceDatas` | [attributeclusterconfig](attributeclusterconfig.md) | `objectid` | `objectid_attributeclusterconfig` |
| `attributeclusterconfig_ProcessSession` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeclusterconfig_BulkDeleteFailures` | [attributeclusterconfig](attributeclusterconfig.md) | `regardingobjectid` | `regardingobjectid_attributeclusterconfig` |
| `attributeclusterconfig_PrincipalObjectAttributeAccesses` | [attributeclusterconfig](attributeclusterconfig.md) | `objectid` | `objectid_attributeclusterconfig` |


## Source

Generated from [attributeclusterconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='attributeclusterconfig')) on 2026-05-07.