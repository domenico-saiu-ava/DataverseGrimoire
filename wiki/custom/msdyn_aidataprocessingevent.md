---
logical: "msdyn_aidataprocessingevent"
display: "Data Processing Event"
entitySetName: "msdyn_aidataprocessingevents"
primaryId: "msdyn_aidataprocessingeventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **18** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_aidataprocessingeventid`, `msdyn_customdata`, `msdyn_inputdataformat`, `msdyn_name`, `msdyn_processeddata`, `msdyn_processingstatus`, `msdyn_processorname`, `msdyn_processortype`, `msdyn_receiveddate`, `msdyn_updateddate`, `msdyn_validationresult`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_inputdata`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aidataprocessingevent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aidataprocessingevent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aidataprocessingevent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aidataprocessingevent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aidataprocessingevent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aidataprocessingevent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aidataprocessingevent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aidataprocessingevent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIDataProcessingEvent_msdyn_InputData` | [fileattachment](fileattachment.md) | `msdyn_inputdata` | `msdyn_inputdata` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidataprocessingevent_SyncErrors` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidataprocessingevent_AsyncOperations` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidataprocessingevent_MailboxTrackingFolders` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidataprocessingevent_UserEntityInstanceDatas` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `objectid` | `objectid_msdyn_aidataprocessingevent` |
| `msdyn_aidataprocessingevent_ProcessSession` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidataprocessingevent_BulkDeleteFailures` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aidataprocessingevent` |
| `msdyn_aidataprocessingevent_PrincipalObjectAttributeAccesses` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `objectid` | `objectid_msdyn_aidataprocessingevent` |
| `msdyn_aidataprocessingevent_FileAttachments` | [msdyn_aidataprocessingevent](msdyn_aidataprocessingevent.md) | `objectid` | `objectid_msdyn_aidataprocessingevent` |


## Source

Generated from [msdyn_aidataprocessingevent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aidataprocessingevent')) on 2026-05-07.