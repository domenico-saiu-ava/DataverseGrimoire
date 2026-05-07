---
logical: "msdyn_pmanalysishistory"
display: "Cronologia analisi mining di processo"
entitySetName: "msdyn_pmanalysishistories"
primaryId: "msdyn_pmanalysishistoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Cronologia analisi mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmanalysishistory` |
| Display name | Cronologia analisi mining di processo |
| Display (plural) | Cronologia analisi mining di processo |
| Schema name | `msdyn_pmanalysishistory` |
| Entity set (Web API) | `msdyn_pmanalysishistories` |
| Primary id attribute | `msdyn_pmanalysishistoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmanalysishistories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmanalysishistories(<guid>)
POST /api/data/v9.2/msdyn_pmanalysishistories
PATCH /api/data/v9.2/msdyn_pmanalysishistories(<guid>)
DELETE /api/data/v9.2/msdyn_pmanalysishistories(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`actionableinsightsgenerationstatus`, `actionableinsightslastpublishedon`, `importsequencenumber`, `iscustomizable`, `msdyn_analysisresult`, `msdyn_analysistype`, `msdyn_iterationid`, `msdyn_lasterrors`, `msdyn_name`, `msdyn_parenttask`, `msdyn_pmanalysishistoryid`, `msdyn_starttime`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmanalysishistory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmanalysishistory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmanalysishistory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmanalysishistory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmanalysishistory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmanalysishistory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmanalysishistory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmanalysishistory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_pminferredtask_msdyn_pmanalysishistory_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmanalysishistory_SyncErrors` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_DuplicateMatchingRecord` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_DuplicateBaseRecord` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `baserecordid` | `baserecordid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_AsyncOperations` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_MailboxTrackingFolders` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_UserEntityInstanceDatas` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `objectid` | `objectid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_ProcessSession` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_BulkDeleteFailures` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmanalysishistory` |
| `msdyn_pmanalysishistory_PrincipalObjectAttributeAccesses` | [msdyn_pmanalysishistory](msdyn_pmanalysishistory.md) | `objectid` | `objectid_msdyn_pmanalysishistory` |


## Source

Generated from [msdyn_pmanalysishistory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmanalysishistory')) on 2026-05-07.