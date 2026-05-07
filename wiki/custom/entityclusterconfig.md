---
logical: "entityclusterconfig"
display: "Configurazione cluster entità"
entitySetName: "entityclusterconfigs"
primaryId: "entityclusterconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione cluster entità

Contiene la configurazione cluster entità per le entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityclusterconfig` |
| Display name | Configurazione cluster entità |
| Display (plural) | Configurazioni cluster entità |
| Schema name | `EntityClusterConfig` |
| Entity set (Web API) | `entityclusterconfigs` |
| Primary id attribute | `entityclusterconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/entityclusterconfigs?$select=name&$top=10
GET /api/data/v9.2/entityclusterconfigs(<guid>)
POST /api/data/v9.2/entityclusterconfigs
PATCH /api/data/v9.2/entityclusterconfigs(<guid>)
DELETE /api/data/v9.2/entityclusterconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`clustermode`, `defaulttolocalpartition`, `entityclusterconfigid`, `extensionofrecordid`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `shouldautoreplicate`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `name`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_entityclusterconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entityclusterconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entityclusterconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entityclusterconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_entityclusterconfig` | [organization](organization.md) | `organizationid` | `organizationid` |
| `entityclusterconfig_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityclusterconfig_SyncErrors` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityclusterconfig_AsyncOperations` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityclusterconfig_MailboxTrackingFolders` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityclusterconfig_UserEntityInstanceDatas` | [entityclusterconfig](entityclusterconfig.md) | `objectid` | `objectid_entityclusterconfig` |
| `entityclusterconfig_ProcessSession` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityclusterconfig_BulkDeleteFailures` | [entityclusterconfig](entityclusterconfig.md) | `regardingobjectid` | `regardingobjectid_entityclusterconfig` |
| `entityclusterconfig_PrincipalObjectAttributeAccesses` | [entityclusterconfig](entityclusterconfig.md) | `objectid` | `objectid_entityclusterconfig` |


## Source

Generated from [entityclusterconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='entityclusterconfig')) on 2026-05-07.