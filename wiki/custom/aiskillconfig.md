---
logical: "aiskillconfig"
display: "Configurazione competenze IA"
entitySetName: "aiskillconfigs"
primaryId: "aiskillconfigid"
primaryName: "description"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione competenze IA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aiskillconfig` |
| Display name | Configurazione competenze IA |
| Display (plural) | Configurazioni competenze IA |
| Schema name | `aiskillconfig` |
| Entity set (Web API) | `aiskillconfigs` |
| Primary id attribute | `aiskillconfigid` |
| Primary name attribute | `description` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aiskillconfigs?$select=description&$top=10
GET /api/data/v9.2/aiskillconfigs(<guid>)
POST /api/data/v9.2/aiskillconfigs
PATCH /api/data/v9.2/aiskillconfigs(<guid>)
DELETE /api/data/v9.2/aiskillconfigs(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`aimodel`, `aiskill`, `aiskillconfigid`, `attribute`, `config`, `description`, `entity`, `importsequencenumber`, `iscustomizable`, `overriddencreatedon`, `ownerid`, `scope`, `sdkmessageid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiskillconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiskillconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiskillconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiskillconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aiskillconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aiskillconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aiskillconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aiskillconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `attribute_aiskillconfig_Attribute` | [attribute](attribute.md) | `attribute` | `Attribute` |
| `entity_aiskillconfig_Entity` | [entity](entity.md) | `entity` | `Entity` |
| `msdyn_aimodel_aiskillconfig_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `aimodel` | `AIModel` |
| `sdkmessage_aiskillconfig_sdkmessageid` | [sdkmessage](sdkmessage.md) | `sdkmessageid` | `sdkmessageid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiskillconfig_SyncErrors` | [aiskillconfig](aiskillconfig.md) | `regardingobjectid` | `regardingobjectid_aiskillconfig` |
| `aiskillconfig_AsyncOperations` | [aiskillconfig](aiskillconfig.md) | `regardingobjectid` | `regardingobjectid_aiskillconfig` |
| `aiskillconfig_MailboxTrackingFolders` | [aiskillconfig](aiskillconfig.md) | `regardingobjectid` | `regardingobjectid_aiskillconfig` |
| `aiskillconfig_UserEntityInstanceDatas` | [aiskillconfig](aiskillconfig.md) | `objectid` | `objectid_aiskillconfig` |
| `aiskillconfig_ProcessSession` | [aiskillconfig](aiskillconfig.md) | `regardingobjectid` | `regardingobjectid_aiskillconfig` |
| `aiskillconfig_BulkDeleteFailures` | [aiskillconfig](aiskillconfig.md) | `regardingobjectid` | `regardingobjectid_aiskillconfig` |
| `aiskillconfig_PrincipalObjectAttributeAccesses` | [aiskillconfig](aiskillconfig.md) | `objectid` | `objectid_aiskillconfig` |
| `aiskillconfig_aiinsightcard_aiskillid` | [aiskillconfig](aiskillconfig.md) | `aiskillid` | `aiskillid` |
| `aiskillconfig_appelement_objectid` | [aiskillconfig](aiskillconfig.md) | `objectid` | `objectid` |


## Source

Generated from [aiskillconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aiskillconfig')) on 2026-05-07.