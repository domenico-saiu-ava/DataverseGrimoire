---
logical: "msdyn_dmsrequeststatus"
display: "Data Movement Service Request Status"
entitySetName: "msdyn_dmsrequeststatuses"
primaryId: "msdyn_dmsrequeststatusid"
primaryName: "msdyn_jobuniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Movement Service Request Status

Table for Data Movement Service Request Status

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmsrequeststatus` |
| Display name | Data Movement Service Request Status |
| Display (plural) | Data Movement Service Request Statuses |
| Schema name | `msdyn_dmsrequeststatus` |
| Entity set (Web API) | `msdyn_dmsrequeststatuses` |
| Primary id attribute | `msdyn_dmsrequeststatusid` |
| Primary name attribute | `msdyn_jobuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmsrequeststatuses?$select=msdyn_jobuniquename&$top=10
GET /api/data/v9.2/msdyn_dmsrequeststatuses(<guid>)
POST /api/data/v9.2/msdyn_dmsrequeststatuses
PATCH /api/data/v9.2/msdyn_dmsrequeststatuses(<guid>)
DELETE /api/data/v9.2/msdyn_dmsrequeststatuses(<guid>)
```

## Attributes

Writable: **19** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_DataflowId`, `msdyn_DataflowJobId`, `msdyn_dmsrequeststatusId`, `msdyn_ErrorDetails`, `msdyn_JobUniqueName`, `msdyn_lookupfield_uploadrequest`, `msdyn_UploadEndTime`, `msdyn_UploadStartTime`, `msdyn_UploadStatus`, `msdyn_UploadStatusDetails`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dmsrequeststatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dmsrequeststatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmsrequeststatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmsrequeststatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmsrequeststatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_uploadrequest_jobstatus` | [msdyn_dmsrequest](msdyn_dmsrequest.md) | `msdyn_lookupfield_uploadrequest` | `msdyn_lookupfield_uploadrequest` |
| `owner_msdyn_dmsrequeststatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dmsrequeststatus` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dmsrequeststatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmsrequeststatus_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequeststatus_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequeststatus_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dmsrequeststatus_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dmsrequeststatus_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequeststatus_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dmsrequeststatus_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dmsrequeststatus_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dmsrequeststatus.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dmsrequeststatus.md) on 2026-05-06.