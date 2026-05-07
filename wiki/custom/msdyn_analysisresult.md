---
logical: "msdyn_analysisresult"
display: "Risultato dell'analisi"
entitySetName: "msdyn_analysisresults"
primaryId: "msdyn_analysisresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato dell'analisi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisresult` |
| Display name | Risultato dell'analisi |
| Display (plural) | Risultati dell'analisi |
| Schema name | `msdyn_analysisresult` |
| Entity set (Web API) | `msdyn_analysisresults` |
| Primary id attribute | `msdyn_analysisresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysisresults(<guid>)
POST /api/data/v9.2/msdyn_analysisresults
PATCH /api/data/v9.2/msdyn_analysisresults(<guid>)
DELETE /api/data/v9.2/msdyn_analysisresults(<guid>)
```

## Attributes

Writable: **33** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_analysiscomponentid`, `msdyn_analysiscomponenttype`, `msdyn_analysisjobid`, `msdyn_analysisresultid`, `msdyn_category`, `msdyn_componenttype`, `msdyn_entityname`, `msdyn_fileuri`, `msdyn_hasresolution`, `msdyn_helplink`, `msdyn_level`, `msdyn_line`, `msdyn_member`, `msdyn_message`, `msdyn_messagearguments`, `msdyn_messageid`, `msdyn_module`, `msdyn_name`, `msdyn_repairissuetype`, `msdyn_returnstatus`, `msdyn_ruleid`, `msdyn_rulereferenceuri`, `msdyn_severity`, `msdyn_snippet`, `msdyn_solutionhealthmessage`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analysisresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analysisresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analysisresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analysisresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analysisresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_analysiscomponent_msdyn_analysisresult` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `msdyn_analysiscomponentid` | `msdyn_AnalysisComponentId` |
| `msdyn_analysisjob_msdyn_analysisresult` | [msdyn_analysisjob](msdyn_analysisjob.md) | `msdyn_analysisjobid` | `msdyn_AnalysisJobId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisresult_SyncErrors` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresult_DuplicateMatchingRecord` | [msdyn_analysisresult](msdyn_analysisresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisresult` |
| `msdyn_analysisresult_DuplicateBaseRecord` | [msdyn_analysisresult](msdyn_analysisresult.md) | `baserecordid` | `baserecordid_msdyn_analysisresult` |
| `msdyn_analysisresult_AsyncOperations` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresult_MailboxTrackingFolders` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresult_UserEntityInstanceDatas` | [msdyn_analysisresult](msdyn_analysisresult.md) | `objectid` | `objectid_msdyn_analysisresult` |
| `msdyn_analysisresult_ProcessSession` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresult_BulkDeleteFailures` | [msdyn_analysisresult](msdyn_analysisresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisresult` |
| `msdyn_analysisresult_PrincipalObjectAttributeAccesses` | [msdyn_analysisresult](msdyn_analysisresult.md) | `objectid` | `objectid_msdyn_analysisresult` |
| `msdyn_msdyn_analysisresult_msdyn_analysisresultdetail_AnalysisResult` | [msdyn_analysisresult](msdyn_analysisresult.md) | `msdyn_analysisresult` | `msdyn_AnalysisResult` |


## Source

Generated from [msdyn_analysisresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analysisresult')) on 2026-05-07.