---
logical: "msdyn_screenrecording"
display: "Registrazione schermo"
entitySetName: "msdyn_screenrecordings"
primaryId: "msdyn_screenrecordingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registrazione schermo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_screenrecording` |
| Display name | Registrazione schermo |
| Display (plural) | Registrazioni schermo |
| Schema name | `msdyn_ScreenRecording` |
| Entity set (Web API) | `msdyn_screenrecordings` |
| Primary id attribute | `msdyn_screenrecordingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_screenrecordings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_screenrecordings(<guid>)
POST /api/data/v9.2/msdyn_screenrecordings
PATCH /api/data/v9.2/msdyn_screenrecordings(<guid>)
DELETE /api/data/v9.2/msdyn_screenrecordings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_screenrecordedagent`, `msdyn_screenrecordingdurationinminutes`, `msdyn_screenrecordingendtime`, `msdyn_screenrecordingid`, `msdyn_screenrecordingmetadata`, `msdyn_screenrecordingsessiontype`, `msdyn_screenrecordingstarttime`, `msdyn_screenrecordinguploadstatus`, `msdyn_uploaddiagnosticmessage`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_screenrecordingfile`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_screenrecording_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_screenrecording_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_screenrecording_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_screenrecording_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_screenrecording` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_screenrecording` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_screenrecording` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_screenrecording` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ScreenRecording_msdyn_ScreenRecordingFile` | [fileattachment](fileattachment.md) | `msdyn_screenrecordingfile` | `msdyn_screenrecordingfile` |
| `msdyn_screenrecording_ScreenRecordedAgent_systemuser` | [systemuser](systemuser.md) | `msdyn_screenrecordedagent` | `msdyn_ScreenRecordedAgent` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_screenrecording_SyncErrors` | [msdyn_screenrecording](msdyn_screenrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecording` |
| `msdyn_screenrecording_DuplicateMatchingRecord` | [msdyn_screenrecording](msdyn_screenrecording.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_screenrecording` |
| `msdyn_screenrecording_DuplicateBaseRecord` | [msdyn_screenrecording](msdyn_screenrecording.md) | `baserecordid` | `baserecordid_msdyn_screenrecording` |
| `msdyn_screenrecording_AsyncOperations` | [msdyn_screenrecording](msdyn_screenrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecording` |
| `msdyn_screenrecording_MailboxTrackingFolders` | [msdyn_screenrecording](msdyn_screenrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecording` |
| `msdyn_screenrecording_UserEntityInstanceDatas` | [msdyn_screenrecording](msdyn_screenrecording.md) | `objectid` | `objectid_msdyn_screenrecording` |
| `msdyn_screenrecording_ProcessSession` | [msdyn_screenrecording](msdyn_screenrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecording` |
| `msdyn_screenrecording_BulkDeleteFailures` | [msdyn_screenrecording](msdyn_screenrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_screenrecording` |
| `msdyn_screenrecording_PrincipalObjectAttributeAccesses` | [msdyn_screenrecording](msdyn_screenrecording.md) | `objectid` | `objectid_msdyn_screenrecording` |
| `msdyn_screenrecording_FileAttachments` | [msdyn_screenrecording](msdyn_screenrecording.md) | `objectid` | `objectid_msdyn_screenrecording` |
| `msdyn_screenrecordinglink_ScreenRecording_msdyn_screenrecording` | [msdyn_screenrecording](msdyn_screenrecording.md) | `msdyn_screenrecording` | `msdyn_ScreenRecording` |


## Source

Generated from [msdyn_screenrecording (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_screenrecording')) on 2026-05-07.