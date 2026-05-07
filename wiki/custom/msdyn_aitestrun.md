---
logical: "msdyn_aitestrun"
display: "AI Test Run"
entitySetName: "msdyn_aitestruns"
primaryId: "msdyn_aitestrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Test Run

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aitestrun` |
| Display name | AI Test Run |
| Display (plural) | AI Test Run |
| Schema name | `msdyn_AITestRun` |
| Entity set (Web API) | `msdyn_aitestruns` |
| Primary id attribute | `msdyn_aitestrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aitestruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aitestruns(<guid>)
POST /api/data/v9.2/msdyn_aitestruns
PATCH /api/data/v9.2/msdyn_aitestruns(<guid>)
DELETE /api/data/v9.2/msdyn_aitestruns(<guid>)
```

## Attributes

Writable: **23** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accuracyscore`, `msdyn_actualoutput`, `msdyn_additionalresponsemetadata`, `msdyn_aitestcaseid`, `msdyn_aitestrunbatchid`, `msdyn_aitestrunid`, `msdyn_comment`, `msdyn_completedon`, `msdyn_configurationid`, `msdyn_errormessage`, `msdyn_expectedoutput`, `msdyn_name`, `msdyn_runduration`, `msdyn_startedon`, `msdyn_testrunsetting`, `msdyn_testrunstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aitestrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aitestrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aitestrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aitestrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aitestrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aitestrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aitestrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aitestrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_aitestcase_msdyn_aitestrun` | [msdyn_aitestcase](msdyn_aitestcase.md) | `msdyn_aitestcaseid` | `msdyn_AITestCaseId` |
| `msdyn_aitestrunbatch_msdyn_aitestrun` | [msdyn_aitestrunbatch](msdyn_aitestrunbatch.md) | `msdyn_aitestrunbatchid` | `msdyn_AITestRunBatchId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aitestrun_SyncErrors` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrun_AsyncOperations` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrun_MailboxTrackingFolders` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrun_UserEntityInstanceDatas` | [msdyn_aitestrun](msdyn_aitestrun.md) | `objectid` | `objectid_msdyn_aitestrun` |
| `msdyn_aitestrun_ProcessSession` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrun_BulkDeleteFailures` | [msdyn_aitestrun](msdyn_aitestrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_aitestrun` |
| `msdyn_aitestrun_PrincipalObjectAttributeAccesses` | [msdyn_aitestrun](msdyn_aitestrun.md) | `objectid` | `objectid_msdyn_aitestrun` |


## Source

Generated from [msdyn_aitestrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aitestrun')) on 2026-05-07.