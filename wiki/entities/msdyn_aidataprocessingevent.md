---
logical: "msdyn_aidataprocessingevent"
display: "Data Processing Event"
entitySetName: "msdyn_aidataprocessingevents"
primaryId: "msdyn_aidataprocessingeventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Data Processing Event

Events that are triggered by Data Processing.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aidataprocessingevent` |
| Display name | Data Processing Event |
| Display (plural) | Data Processing Events |
| Schema name | `msdyn_AIDataProcessingEvent` |
| Entity set (Web API) | `msdyn_aidataprocessingevents` |
| Primary id attribute | `msdyn_aidataprocessingeventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aidataprocessingevents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aidataprocessingevents(<guid>)
POST /api/data/v9.2/msdyn_aidataprocessingevents
PATCH /api/data/v9.2/msdyn_aidataprocessingevents(<guid>)
DELETE /api/data/v9.2/msdyn_aidataprocessingevents(<guid>)
```

## Attributes

Writable: **19** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_AIDataProcessingEventId`, `msdyn_CustomData`, `msdyn_InputDataFormat`, `msdyn_Name`, `msdyn_ProcessedData`, `msdyn_ProcessingStatus`, `msdyn_ProcessorName`, `msdyn_ProcessorType`, `msdyn_ReceivedDate`, `msdyn_UpdatedDate`, `msdyn_ValidationResult`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_InputData`, `msdyn_InputData_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aidataprocessingevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIDataProcessingEvent_msdyn_InputData` | [fileattachment](fileattachment.md) | `msdyn_inputdata` | `msdyn_inputdata` |
| `lk_msdyn_aidataprocessingevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aidataprocessingevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aidataprocessingevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aidataprocessingevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_aidataprocessingevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aidataprocessingevent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aidataprocessingevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidataprocessingevent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidataprocessingevent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidataprocessingevent_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aidataprocessingevent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidataprocessingevent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aidataprocessingevent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aidataprocessingevent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aidataprocessingevent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aidataprocessingevent.md) on 2026-05-06.