---
logical: "msdyn_aievent"
display: "AI Event"
entitySetName: "msdyn_aievents"
primaryId: "msdyn_aieventid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **25** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `msdyn_AIConfigurationId`, `msdyn_AIEventId`, `msdyn_AIModelId`, `msdyn_ApprovalId`, `msdyn_AutomationLink`, `msdyn_AutomationName`, `msdyn_ConsumptionSource`, `msdyn_CreditConsumed`, `msdyn_DataInfo`, `msdyn_DataType`, `msdyn_EventData`, `msdyn_Name`, `msdyn_Output`, `msdyn_PartnerSource`, `msdyn_ProcessingDate`, `msdyn_ProcessingStatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `QuickTest`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_DataInfoFile`, `msdyn_DataInfoFile_Name`, `msdyn_OutputFile`, `msdyn_OutputFile_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aievent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_AIEvent_msdyn_DataInfoFile` | [fileattachment](fileattachment.md) | `msdyn_datainfofile` | `msdyn_datainfofile` |
| `FileAttachment_msdyn_AIEvent_msdyn_OutputFile` | [fileattachment](fileattachment.md) | `msdyn_outputfile` | `msdyn_outputfile` |
| `lk_msdyn_aievent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aievent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aievent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aievent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aiconfiguration_msdyn_aievent` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |
| `msdyn_aimodel_msdyn_aievent` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `owner_msdyn_aievent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aievent` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aievent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aievent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_aievent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_aievent_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aievent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aievent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aievent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_aievent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aievent.md) on 2026-05-06.