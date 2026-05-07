---
logical: "msdyn_analysisjob"
display: "Processo di analisi"
entitySetName: "msdyn_analysisjobs"
primaryId: "msdyn_analysisjobid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Processo di analisi

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analysisjob` |
| Display name | Processo di analisi |
| Display (plural) | Processi di analisi |
| Schema name | `msdyn_analysisjob` |
| Entity set (Web API) | `msdyn_analysisjobs` |
| Primary id attribute | `msdyn_analysisjobid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analysisjobs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analysisjobs(<guid>)
POST /api/data/v9.2/msdyn_analysisjobs
PATCH /api/data/v9.2/msdyn_analysisjobs(<guid>)
DELETE /api/data/v9.2/msdyn_analysisjobs(<guid>)
```

## Attributes

Writable: **28** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_analysisjobid`, `msdyn_customdetails`, `msdyn_displaystatus`, `msdyn_endtime`, `msdyn_errorcount`, `msdyn_exception`, `msdyn_inappnotificationenabled`, `msdyn_name`, `msdyn_rulefailcount`, `msdyn_rulepasscount`, `msdyn_ruleruncount`, `msdyn_runcorrelationid`, `msdyn_sevcriticalcount`, `msdyn_sevhighcount`, `msdyn_sevlowcount`, `msdyn_sevmediumcount`, `msdyn_starttime`, `msdyn_suggestioncount`, `msdyn_tenantid`, `msdyn_triggertype`, `msdyn_warningcount`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_analysisjobsreport`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analysisjob_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analysisjob_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analysisjob_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analysisjob_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analysisjob` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analysisjob` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analysisjob` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analysisjob` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_analysisjob_msdyn_AnalysisJobsReport` | [fileattachment](fileattachment.md) | `msdyn_analysisjobsreport` | `msdyn_analysisjobsreport` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analysisjob_SyncErrors` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisjob_DuplicateMatchingRecord` | [msdyn_analysisjob](msdyn_analysisjob.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_analysisjob` |
| `msdyn_analysisjob_DuplicateBaseRecord` | [msdyn_analysisjob](msdyn_analysisjob.md) | `baserecordid` | `baserecordid_msdyn_analysisjob` |
| `msdyn_analysisjob_AsyncOperations` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisjob_MailboxTrackingFolders` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisjob_UserEntityInstanceDatas` | [msdyn_analysisjob](msdyn_analysisjob.md) | `objectid` | `objectid_msdyn_analysisjob` |
| `msdyn_analysisjob_ProcessSession` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisjob_BulkDeleteFailures` | [msdyn_analysisjob](msdyn_analysisjob.md) | `regardingobjectid` | `regardingobjectid_msdyn_analysisjob` |
| `msdyn_analysisjob_PrincipalObjectAttributeAccesses` | [msdyn_analysisjob](msdyn_analysisjob.md) | `objectid` | `objectid_msdyn_analysisjob` |
| `msdyn_analysisjob_FileAttachments` | [msdyn_analysisjob](msdyn_analysisjob.md) | `objectid` | `objectid_msdyn_analysisjob` |
| `msdyn_analysisjob_msdyn_analysiscomponent` | [msdyn_analysisjob](msdyn_analysisjob.md) | `msdyn_analysisjobid` | `msdyn_AnalysisJobId` |
| `msdyn_analysisjob_msdyn_analysisresult` | [msdyn_analysisjob](msdyn_analysisjob.md) | `msdyn_analysisjobid` | `msdyn_AnalysisJobId` |


## Source

Generated from [msdyn_analysisjob (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analysisjob')) on 2026-05-07.