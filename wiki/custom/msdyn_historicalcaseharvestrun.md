---
logical: "msdyn_historicalcaseharvestrun"
display: "msdyn_historicalcaseharvestrun"
entitySetName: "msdyn_historicalcaseharvestruns"
primaryId: "msdyn_historicalcaseharvestrunid"
primaryName: "msdyn_paginationmarker"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_historicalcaseharvestrun

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_historicalcaseharvestrun` |
| Display name | msdyn_historicalcaseharvestrun |
| Display (plural) | msdyn_historicalcaseharvestruns |
| Schema name | `msdyn_historicalcaseharvestrun` |
| Entity set (Web API) | `msdyn_historicalcaseharvestruns` |
| Primary id attribute | `msdyn_historicalcaseharvestrunid` |
| Primary name attribute | `msdyn_paginationmarker` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_historicalcaseharvestruns?$select=msdyn_paginationmarker&$top=10
GET /api/data/v9.2/msdyn_historicalcaseharvestruns(<guid>)
POST /api/data/v9.2/msdyn_historicalcaseharvestruns
PATCH /api/data/v9.2/msdyn_historicalcaseharvestruns(<guid>)
DELETE /api/data/v9.2/msdyn_historicalcaseharvestruns(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionaldetails`, `msdyn_caseidentificationcompletedon`, `msdyn_conditions`, `msdyn_fieldmapping`, `msdyn_harvestingdatatype`, `msdyn_harvestsourceentity`, `msdyn_historicalcaseharvestrunid`, `msdyn_pageIndex`, `msdyn_paginationmarker`, `msdyn_totalarticlescreated`, `msdyn_totalcasesdiscovered`, `msdyn_totalcasesprocessed`, `overriddencreatedon`, `ownerid`, `processstartedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_historicalcaseharvestrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_historicalcaseharvestrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_historicalcaseharvestrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_historicalcaseharvestrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_historicalcaseharvestrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_historicalcaseharvestrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_historicalcaseharvestrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_historicalcaseharvestrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_historicalcaseharvestrun_SyncErrors` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_historicalcaseharvestrun_AsyncOperations` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_historicalcaseharvestrun_MailboxTrackingFolders` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_historicalcaseharvestrun_UserEntityInstanceDatas` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `objectid` | `objectid_msdyn_historicalcaseharvestrun` |
| `msdyn_historicalcaseharvestrun_ProcessSession` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_historicalcaseharvestrun_BulkDeleteFailures` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_historicalcaseharvestrun` |
| `msdyn_historicalcaseharvestrun_PrincipalObjectAttributeAccesses` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `objectid` | `objectid_msdyn_historicalcaseharvestrun` |
| `msdyn_historicalcaseharvestbatch_historicalcaseharvestrun` | [msdyn_historicalcaseharvestrun](msdyn_historicalcaseharvestrun.md) | `msdyn_historicalcaseharvestrunid` | `msdyn_historicalcaseharvestrunid` |


## Source

Generated from [msdyn_historicalcaseharvestrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_historicalcaseharvestrun')) on 2026-05-07.