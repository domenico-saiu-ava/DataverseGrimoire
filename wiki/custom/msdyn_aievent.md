---
logical: "msdyn_aievent"
display: "AI Event"
entitySetName: "msdyn_aievents"
primaryId: "msdyn_aieventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Event

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aievent` |
| Display name | AI Event |
| Display (plural) | AI Events |
| Schema name | `msdyn_AIEvent` |
| Entity set (Web API) | `msdyn_aievents` |
| Primary id attribute | `msdyn_aieventid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aievents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aievents(<guid>)
POST /api/data/v9.2/msdyn_aievents
PATCH /api/data/v9.2/msdyn_aievents(<guid>)
DELETE /api/data/v9.2/msdyn_aievents(<guid>)
```

## Attributes

Writable: **24** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_aiconfigurationid`, `msdyn_aieventid`, `msdyn_aimodelid`, `msdyn_approvalid`, `msdyn_automationlink`, `msdyn_automationname`, `msdyn_consumptionsource`, `msdyn_creditconsumed`, `msdyn_datainfo`, `msdyn_datatype`, `msdyn_eventdata`, `msdyn_name`, `msdyn_output`, `msdyn_partnersource`, `msdyn_processingdate`, `msdyn_processingstatus`, `msdyn_quicktest`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_datainfofile`, `msdyn_outputfile`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aievent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aievent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aievent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aievent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aievent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aievent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aievent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aievent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIEvent_msdyn_DataInfoFile` | [fileattachment](fileattachment.md) | `msdyn_datainfofile` | `msdyn_datainfofile` |
| `FileAttachment_msdyn_AIEvent_msdyn_OutputFile` | [fileattachment](fileattachment.md) | `msdyn_outputfile` | `msdyn_outputfile` |
| `msdyn_aimodel_msdyn_aievent` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `msdyn_aiconfiguration_msdyn_aievent` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aievent_SyncErrors` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aievent_DuplicateMatchingRecord` | [msdyn_aievent](msdyn_aievent.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aievent` |
| `msdyn_aievent_DuplicateBaseRecord` | [msdyn_aievent](msdyn_aievent.md) | `baserecordid` | `baserecordid_msdyn_aievent` |
| `msdyn_aievent_AsyncOperations` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aievent_MailboxTrackingFolders` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aievent_UserEntityInstanceDatas` | [msdyn_aievent](msdyn_aievent.md) | `objectid` | `objectid_msdyn_aievent` |
| `msdyn_aievent_ProcessSession` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aievent_BulkDeleteFailures` | [msdyn_aievent](msdyn_aievent.md) | `regardingobjectid` | `regardingobjectid_msdyn_aievent` |
| `msdyn_aievent_PrincipalObjectAttributeAccesses` | [msdyn_aievent](msdyn_aievent.md) | `objectid` | `objectid_msdyn_aievent` |
| `msdyn_aievent_FileAttachments` | [msdyn_aievent](msdyn_aievent.md) | `objectid` | `objectid_msdyn_aievent` |


## Source

Generated from [msdyn_aievent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aievent')) on 2026-05-07.