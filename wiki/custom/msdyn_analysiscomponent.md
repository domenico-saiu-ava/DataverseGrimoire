---
logical: "msdyn_analysiscomponent"
display: "Componente di analisi"
entitySetName: "msdyn_analysiscomponents"
primaryId: "msdyn_analysiscomponentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Componente di analisi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysiscomponent` |
| Display name | Componente di analisi |
| Display (plural) | Componenti di analisi |
| Schema name | `msdyn_analysiscomponent` |
| Entity set (Web API) | `msdyn_analysiscomponents` |
| Primary id attribute | `msdyn_analysiscomponentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysiscomponents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysiscomponents(<guid>)
POST /api/data/v9.2/msdyn_analysiscomponents
PATCH /api/data/v9.2/msdyn_analysiscomponents(<guid>)
DELETE /api/data/v9.2/msdyn_analysiscomponents(<guid>)
```

## Attributes

Writable: **27** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_analysiscomponentid`, `msdyn_analysiscomponenttype`, `msdyn_analysisjobid`, `msdyn_componentid`, `msdyn_componentname`, `msdyn_componenttype`, `msdyn_componentversion`, `msdyn_errorcount`, `msdyn_name`, `msdyn_retrycount`, `msdyn_rulefailcount`, `msdyn_rulepasscount`, `msdyn_rulepassrate`, `msdyn_sevcriticalcount`, `msdyn_sevhighcount`, `msdyn_sevlowcount`, `msdyn_sevmediumcount`, `msdyn_solutionhealthrulesetid`, `msdyn_suggestioncount`, `msdyn_warningcount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analysiscomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysiscomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysiscomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysiscomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analysiscomponent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analysiscomponent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analysiscomponent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analysiscomponent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_analysisjob_msdyn_analysiscomponent` | [msdyn_analysisjob](msdyn_analysisjob.md) | `msdyn_analysisjobid` | `msdyn_AnalysisJobId` |
| `msdyn_msdyn_solutionhealthruleset_msdyn_analysi` | [msdyn_solutionhealthruleset](msdyn_solutionhealthruleset.md) | `msdyn_solutionhealthrulesetid` | `msdyn_SolutionHealthRuleSetId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysiscomponent_SyncErrors` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_DuplicateMatchingRecord` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_DuplicateBaseRecord` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `baserecordid` | `baserecordid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_AsyncOperations` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_MailboxTrackingFolders` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_UserEntityInstanceDatas` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `objectid` | `objectid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_ProcessSession` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_BulkDeleteFailures` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_PrincipalObjectAttributeAccesses` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `objectid` | `objectid_msdyn_analysiscomponent` |
| `msdyn_analysiscomponent_msdyn_analysisresult` | [msdyn_analysiscomponent](msdyn_analysiscomponent.md) | `msdyn_analysiscomponentid` | `msdyn_AnalysisComponentId` |


## Source

Generated from [msdyn_analysiscomponent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analysiscomponent')) on 2026-05-07.