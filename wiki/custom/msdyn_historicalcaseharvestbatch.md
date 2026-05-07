---
logical: "msdyn_historicalcaseharvestbatch"
display: "msdyn_historicalcaseharvestbatch"
entitySetName: "msdyn_historicalcaseharvestbatches"
primaryId: "msdyn_historicalcaseharvestbatchid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_historicalcaseharvestbatch

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_historicalcaseharvestbatch` |
| Display name | msdyn_historicalcaseharvestbatch |
| Display (plural) | msdyn_historicalcaseharvestbatches |
| Schema name | `msdyn_historicalcaseharvestbatch` |
| Entity set (Web API) | `msdyn_historicalcaseharvestbatches` |
| Primary id attribute | `msdyn_historicalcaseharvestbatchid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_historicalcaseharvestbatches?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_historicalcaseharvestbatches(<guid>)
POST /api/data/v9.2/msdyn_historicalcaseharvestbatches
PATCH /api/data/v9.2/msdyn_historicalcaseharvestbatches(<guid>)
DELETE /api/data/v9.2/msdyn_historicalcaseharvestbatches(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `modulerunid`, `msdyn_articlescreated`, `msdyn_batchprocessingcompletedon`, `msdyn_batchsize`, `msdyn_casesskipped`, `msdyn_historicalcaseharvestbatchid`, `msdyn_historicalcaseharvestrunid`, `msdyn_incidentids`, `msdyn_name`, `msdyn_updatescheduledon`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_historicalcaseharvestbatch_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_historicalcaseharvestbatch_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_historicalcaseharvestbatch_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_historicalcaseharvestbatch_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_historicalcaseharvestbatch` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_historicalcaseharvestbatch` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_historicalcaseharvestbatch` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_historicalcaseharvestbatch` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_historicalcaseharvestbatch_historicalcaseharvestrun` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `msdyn_historicalcaseharvestrunid` | `msdyn_historicalcaseharvestrunid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_historicalcaseharvestbatch_SyncErrors` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestbatch_AsyncOperations` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestbatch_MailboxTrackingFolders` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestbatch_UserEntityInstanceDatas` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `objectid` | `objectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestbatch_ProcessSession` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestbatch_BulkDeleteFailures` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestbatch` |
| `msdyn_historicalcaseharvestbatch_PrincipalObjectAttributeAccesses` | [msdyn_historicalcaseharvestbatch](msdyn_historicalcaseharvestbatch.md) | `objectid` | `objectid_msdyn_historicalcaseharvestbatch` |


## Source

Generated from [msdyn_historicalcaseharvestbatch (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_historicalcaseharvestbatch')) on 2026-05-07.