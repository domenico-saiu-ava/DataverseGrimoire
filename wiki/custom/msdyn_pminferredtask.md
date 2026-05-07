---
logical: "msdyn_pminferredtask"
display: "Attività dedotta mining di processo"
entitySetName: "msdyn_pminferredtasks"
primaryId: "msdyn_pminferredtaskid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Attività dedotta mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pminferredtask` |
| Display name | Attività dedotta mining di processo |
| Display (plural) | Attività dedotte mining di processo |
| Schema name | `msdyn_pminferredtask` |
| Entity set (Web API) | `msdyn_pminferredtasks` |
| Primary id attribute | `msdyn_pminferredtaskid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pminferredtasks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pminferredtasks(<guid>)
POST /api/data/v9.2/msdyn_pminferredtasks
PATCH /api/data/v9.2/msdyn_pminferredtasks(<guid>)
DELETE /api/data/v9.2/msdyn_pminferredtasks(<guid>)
```

## Attributes

Writable: **26** · Read-only: **17**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_analysisschedule`, `msdyn_automationdata`, `msdyn_automationstatus`, `msdyn_businessprocessid`, `msdyn_datavalidation`, `msdyn_description`, `msdyn_inputdatabinding`, `msdyn_isreportavailable`, `msdyn_iterationid`, `msdyn_lasterrors`, `msdyn_lastreportrefreshdate`, `msdyn_name`, `msdyn_outputdata`, `msdyn_pminferredtaskid`, `msdyn_reportdata`, `msdyn_reportprovisioningstatus`, `msdyn_sharedrecordingmetadata`, `msdyn_source`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_lasterrorsreport`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pminferredtask_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pminferredtask_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pminferredtask_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pminferredtask_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pminferredtask` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pminferredtask` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pminferredtask` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pminferredtask` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_pminferredtask_msdyn_lasterrorsreport` | [fileattachment](fileattachment.md) | `msdyn_lasterrorsreport` | `msdyn_lasterrorsreport` |
| `msdyn_businessprocess_msdyn_pminferredtask_msdyn_businessprocessid` | [businessprocess](businessprocess.md) | `msdyn_businessprocessid` | `msdyn_businessprocessid` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pminferredtask_SyncErrors` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_DuplicateMatchingRecord` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_DuplicateBaseRecord` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `baserecordid` | `baserecordid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_AsyncOperations` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_MailboxTrackingFolders` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_UserEntityInstanceDatas` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `objectid` | `objectid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_ProcessSession` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_BulkDeleteFailures` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_PrincipalObjectAttributeAccesses` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `objectid` | `objectid_msdyn_pminferredtask` |
| `msdyn_pminferredtask_FileAttachments` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `objectid` | `objectid_msdyn_pminferredtask` |
| `msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |
| `msdyn_msdyn_pminferredtask_msdyn_pmanalysishistory_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |
| `msdyn_pminferredtask_msdyn_pmprocessusersettings_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |
| `msdyn_pminferredtask_msdyn_pmprocessversion` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |
| `msdyn_msdyn_pminferredtask_msdyn_pmprocesstemplate_pmnferredtaskid` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |
| `msdyn_msdyn_pminferredtask_msdyn_pmbusinessruleautomationconfig_PMInferredTaskId` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_PMInferredTaskId` |
| `msdyn_pmsimulation_pminferredtaskid_msdyn_pminferredtask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |
| `flowcapacityassignment_msdyn_pminferredtask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `regarding` | `regarding_msdyn_pminferredtask` |


## Source

Generated from [msdyn_pminferredtask (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pminferredtask')) on 2026-05-07.