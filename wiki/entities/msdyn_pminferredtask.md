---
logical: "msdyn_pminferredtask"
display: "PM Inferred Task"
entitySetName: "msdyn_pminferredtasks"
primaryId: "msdyn_pminferredtaskid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Inferred Task

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pminferredtask` |
| Display name | PM Inferred Task |
| Display (plural) | PM Inferred Tasks |
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

Writable: **27** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_analysisschedule`, `msdyn_automationdata`, `msdyn_automationstatus`, `msdyn_businessprocessid`, `msdyn_datavalidation`, `msdyn_description`, `msdyn_inputdatabinding`, `msdyn_isreportavailable`, `msdyn_iterationid`, `msdyn_lasterrors`, `msdyn_lastreportrefreshdate`, `msdyn_name`, `msdyn_outputdata`, `msdyn_pminferredtaskId`, `msdyn_reportdata`, `msdyn_reportprovisioningstatus`, `msdyn_sharedrecordingmetadata`, `msdyn_source`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_lasterrorsreport`, `msdyn_lasterrorsreport_Name`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pminferredtask` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_pminferredtask_msdyn_lasterrorsreport` | [fileattachment](fileattachment.md) | `msdyn_lasterrorsreport` | `msdyn_lasterrorsreport` |
| `lk_msdyn_pminferredtask_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pminferredtask_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pminferredtask_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pminferredtask_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_businessprocess_msdyn_pminferredtask_msdyn_businessprocessid` | [businessprocess](businessprocess.md) | `msdyn_businessprocessid` | `msdyn_businessprocessid` |
| `owner_msdyn_pminferredtask` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pminferredtask` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pminferredtask` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowcapacityassignment_msdyn_pminferredtask` | _n/a_ | `regarding` | _n/a_ |
| `msdyn_msdyn_pminferredtask_msdyn_pmanalysishistory_parenttask` | _n/a_ | `msdyn_parenttask` | _n/a_ |
| `msdyn_msdyn_pminferredtask_msdyn_pmbusinessruleautomationconfig_PMInferredTaskId` | _n/a_ | `msdyn_pminferredtaskid` | _n/a_ |
| `msdyn_msdyn_pminferredtask_msdyn_pmprocesstemplate_pmnferredtaskid` | _n/a_ | `msdyn_pminferredtaskid` | _n/a_ |
| `msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask` | _n/a_ | `msdyn_parenttask` | _n/a_ |
| `msdyn_pminferredtask_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pminferredtask_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pminferredtask_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pminferredtask_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pminferredtask_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pminferredtask_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pminferredtask_msdyn_pmprocessusersettings_parenttask` | _n/a_ | `msdyn_parenttask` | _n/a_ |
| `msdyn_pminferredtask_msdyn_pmprocessversion` | _n/a_ | `msdyn_pminferredtaskid` | _n/a_ |
| `msdyn_pminferredtask_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pminferredtask_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pminferredtask_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmsimulation_pminferredtaskid_msdyn_pminferredtask` | _n/a_ | `msdyn_pminferredtaskid` | _n/a_ |


## Source

Generated from [msdyn_pminferredtask.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pminferredtask.md) on 2026-05-06.