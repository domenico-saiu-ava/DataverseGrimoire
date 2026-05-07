---
logical: "msdyn_sequencetemplate"
display: "Modello di sequenza"
entitySetName: "msdyn_sequencetemplates"
primaryId: "msdyn_sequencetemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di sequenza

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencetemplate` |
| Display name | Modello di sequenza |
| Display (plural) | Modelli di sequenza |
| Schema name | `msdyn_sequencetemplate` |
| Entity set (Web API) | `msdyn_sequencetemplates` |
| Primary id attribute | `msdyn_sequencetemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequencetemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequencetemplates(<guid>)
POST /api/data/v9.2/msdyn_sequencetemplates
PATCH /api/data/v9.2/msdyn_sequencetemplates(<guid>)
DELETE /api/data/v9.2/msdyn_sequencetemplates(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_cjodefinition`, `msdyn_cjodefinitionnew`, `msdyn_definition`, `msdyn_definitionnew`, `msdyn_description`, `msdyn_language`, `msdyn_maxduration`, `msdyn_maxstepcount`, `msdyn_maxstepcounttext`, `msdyn_name`, `msdyn_prefferedregardingEntityName`, `msdyn_prefferedregardingentitydisplayname`, `msdyn_sequencetemplateid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sequencetemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencetemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencetemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencetemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_sequencetemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_sequencetemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_sequencetemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_sequencetemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequencetemplate_SyncErrors` | [msdyn_sequencetemplate](msdyn_sequencetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetemplate` |
| `msdyn_sequencetemplate_AsyncOperations` | [msdyn_sequencetemplate](msdyn_sequencetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetemplate` |
| `msdyn_sequencetemplate_MailboxTrackingFolders` | [msdyn_sequencetemplate](msdyn_sequencetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetemplate` |
| `msdyn_sequencetemplate_UserEntityInstanceDatas` | [msdyn_sequencetemplate](msdyn_sequencetemplate.md) | `objectid` | `objectid_msdyn_sequencetemplate` |
| `msdyn_sequencetemplate_ProcessSession` | [msdyn_sequencetemplate](msdyn_sequencetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetemplate` |
| `msdyn_sequencetemplate_BulkDeleteFailures` | [msdyn_sequencetemplate](msdyn_sequencetemplate.md) | `regardingobjectid` | `regardingobjectid_msdyn_sequencetemplate` |
| `msdyn_sequencetemplate_PrincipalObjectAttributeAccesses` | [msdyn_sequencetemplate](msdyn_sequencetemplate.md) | `objectid` | `objectid_msdyn_sequencetemplate` |


## Source

Generated from [msdyn_sequencetemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sequencetemplate')) on 2026-05-07.