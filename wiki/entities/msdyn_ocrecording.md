---
logical: "msdyn_ocrecording"
display: "Recording"
entitySetName: "msdyn_ocrecordings"
primaryId: "msdyn_ocrecordingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Recording

Records the audio/video session

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrecording` |
| Display name | Recording |
| Display (plural) | Recordings |
| Schema name | `msdyn_ocrecording` |
| Entity set (Web API) | `msdyn_ocrecordings` |
| Primary id attribute | `msdyn_ocrecordingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocrecordings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocrecordings(<guid>)
POST /api/data/v9.2/msdyn_ocrecordings
PATCH /api/data/v9.2/msdyn_ocrecordings(<guid>)
DELETE /api/data/v9.2/msdyn_ocrecordings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `msdyn_applicationid`, `msdyn_liveworkitemid`, `msdyn_mediauri`, `msdyn_name`, `msdyn_ocrecordingId`, `msdyn_recordingtarget`, `msdyn_recordingtargetIdType`, `msdyn_sourcelanguage`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_recording`, `msdyn_recording_Name`, `msdyn_recordingmetadata`, `msdyn_recordingmetadata_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocrecording` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ocrecording_msdyn_recording` | [fileattachment](fileattachment.md) | `msdyn_recording` | `msdyn_recording` |
| `FileAttachment_msdyn_ocrecording_msdyn_recordingmetadata` | [fileattachment](fileattachment.md) | `msdyn_recordingmetadata` | `msdyn_recordingmetadata` |
| `lk_msdyn_ocrecording_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrecording_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrecording_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrecording_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_appointment_msdyn_ocrecording_recordingtarget` | [appointment](appointment.md) | `msdyn_recordingtarget` | `msdyn_recordingtarget_appointment` |
| `msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_sourcelanguage` | `msdyn_sourcelanguage` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_recordingtarget` | `msdyn_recordingtarget_msdyn_liveworkitemid` |
| `msdyn_phonecall_msdyn_ocrecording_recordingtarget` | [phonecall](phonecall.md) | `msdyn_recordingtarget` | `msdyn_recordingtarget_phonecall` |
| `owner_msdyn_ocrecording` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocrecording` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocrecording` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_sciconversation_OCRecording_msdyn_o` | _n/a_ | `msdyn_ocrecording` | _n/a_ |
| `msdyn_ocrecording_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrecording_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrecording_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocrecording_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocrecording_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocrecording_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrecording_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocrecording_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocrecording_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocrecording.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocrecording.md) on 2026-05-06.