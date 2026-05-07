---
logical: "msdyn_entityconfig"
display: "Configurazione entità flusso di lavoro deprecata"
entitySetName: "msdyn_entityconfigs"
primaryId: "msdyn_entityconfigid"
primaryName: "msdyn_entity"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione entità flusso di lavoro deprecata

Archivia la configurazione di distribuzione entità per flusso di lavoro

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityconfig` |
| Display name | Configurazione entità flusso di lavoro deprecata |
| Display (plural) | Configurazioni entità flusso di lavoro deprecate |
| Schema name | `msdyn_entityconfig` |
| Entity set (Web API) | `msdyn_entityconfigs` |
| Primary id attribute | `msdyn_entityconfigid` |
| Primary name attribute | `msdyn_entity` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityconfigs?$select=msdyn_entity&$top=10
GET /api/data/v9.2/msdyn_entityconfigs(<guid>)
POST /api/data/v9.2/msdyn_entityconfigs
PATCH /api/data/v9.2/msdyn_entityconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_entityconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_entity`, `msdyn_entityconfigid`, `msdyn_entitysetname`, `msdyn_liveworkstreamid`, `msdyn_relationshipname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entityconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entityconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entityconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entityconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_liveworkstream_msdyn_entityconfig` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_LiveWorkStreamId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityconfig_SyncErrors` | [msdyn_entityconfig](msdyn_entityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityconfig` |
| `msdyn_entityconfig_AsyncOperations` | [msdyn_entityconfig](msdyn_entityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityconfig` |
| `msdyn_entityconfig_MailboxTrackingFolders` | [msdyn_entityconfig](msdyn_entityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityconfig` |
| `msdyn_entityconfig_UserEntityInstanceDatas` | [msdyn_entityconfig](msdyn_entityconfig.md) | `objectid` | `objectid_msdyn_entityconfig` |
| `msdyn_entityconfig_ProcessSession` | [msdyn_entityconfig](msdyn_entityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityconfig` |
| `msdyn_entityconfig_BulkDeleteFailures` | [msdyn_entityconfig](msdyn_entityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityconfig` |
| `msdyn_entityconfig_PrincipalObjectAttributeAccesses` | [msdyn_entityconfig](msdyn_entityconfig.md) | `objectid` | `objectid_msdyn_entityconfig` |


## Source

Generated from [msdyn_entityconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityconfig')) on 2026-05-07.