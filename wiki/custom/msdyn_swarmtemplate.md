---
logical: "msdyn_swarmtemplate"
display: "Modello aggregato"
entitySetName: "msdyn_swarmtemplates"
primaryId: "msdyn_swarmtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello aggregato

Entità in cui sono archiviati modelli diversi per l'aggregato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_swarmtemplate` |
| Display name | Modello aggregato |
| Display (plural) | Modelli aggregato |
| Schema name | `msdyn_swarmtemplate` |
| Entity set (Web API) | `msdyn_swarmtemplates` |
| Primary id attribute | `msdyn_swarmtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_swarmtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_swarmtemplates(<guid>)
POST /api/data/v9.2/msdyn_swarmtemplates
PATCH /api/data/v9.2/msdyn_swarmtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_swarmtemplates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_entitytypeid`, `msdyn_isdefault`, `msdyn_name`, `msdyn_numberofexpertsperskill`, `msdyn_skillattachmentrulesetid`, `msdyn_swarmguide`, `msdyn_swarmtemplateid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_swarmtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_swarmtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_swarmtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_swarmtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_swarmtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_swarmtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_swarmtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_swarmtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_decisionruleset_msdyn_swarmtemplate_skillattachmentrulesetid` | [msdyn_decisionruleset](msdyn_decisionruleset.md) | `msdyn_skillattachmentrulesetid` | `msdyn_skillattachmentrulesetid` |
| `msdyn_entity_msdyn_swarmtemplate_entitytypeid` | [entity](entity.md) | `msdyn_entitytypeid` | `msdyn_entitytypeid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_swarmtemplate_SyncErrors` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_DuplicateMatchingRecord` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_DuplicateBaseRecord` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `baserecordid` | `baserecordid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_AsyncOperations` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_MailboxTrackingFolders` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_UserEntityInstanceDatas` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `objectid` | `objectid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_ProcessSession` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_BulkDeleteFailures` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_swarmtemplate` |
| `msdyn_swarmtemplate_PrincipalObjectAttributeAccesses` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `objectid` | `objectid_msdyn_swarmtemplate` |
| `msdyn_msdyn_swarmtemplate_msdyn_swarm_swarmtemplateid` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `msdyn_swarmtemplateid` | `msdyn_swarmtemplateid` |
| `msdyn_msdyn_swarmtemplate_msdyn_swarmparticipantrule_swarmtemplateid` | [msdyn_swarmtemplate](msdyn_swarmtemplate.md) | `msdyn_swarmtemplateid` | `msdyn_swarmtemplateid` |


## Source

Generated from [msdyn_swarmtemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_swarmtemplate')) on 2026-05-07.