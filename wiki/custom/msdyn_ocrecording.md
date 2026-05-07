---
logical: "msdyn_ocrecording"
display: "Registrazione in corso"
entitySetName: "msdyn_ocrecordings"
primaryId: "msdyn_ocrecordingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registrazione in corso

Registra la sessione audio/video

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocrecording` |
| Display name | Registrazione in corso |
| Display (plural) | Registrazioni |
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

Writable: **14** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_applicationid`, `msdyn_liveworkitemid`, `msdyn_mediauri`, `msdyn_name`, `msdyn_ocrecordingid`, `msdyn_recordingtarget`, `msdyn_sourcelanguage`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_recording`, `msdyn_recordingmetadata`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocrecording_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocrecording_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocrecording_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocrecording_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocrecording` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocrecording` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocrecording` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocrecording` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ocrecording_msdyn_recording` | [fileattachment](fileattachment.md) | `msdyn_recording` | `msdyn_recording` |
| `FileAttachment_msdyn_ocrecording_msdyn_recordingmetadata` | [fileattachment](fileattachment.md) | `msdyn_recordingmetadata` | `msdyn_recordingmetadata` |
| `msdyn_appointment_msdyn_ocrecording_recordingtarget` | [appointment](appointment.md) | `msdyn_recordingtarget` | `msdyn_recordingtarget_appointment` |
| `msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_sourcelanguage` | `msdyn_sourcelanguage` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_recordingtarget` | `msdyn_recordingtarget_msdyn_liveworkitemid` |
| `msdyn_phonecall_msdyn_ocrecording_recordingtarget` | [phonecall](phonecall.md) | `msdyn_recordingtarget` | `msdyn_recordingtarget_phonecall` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_sciconversation_OCRecording_msdyn_o` | [msdyn_ocrecording](msdyn_ocrecording.md) | `msdyn_ocrecording` | `msdyn_ocrecording` |
| `msdyn_ocrecording_SyncErrors` | [msdyn_ocrecording](msdyn_ocrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrecording` |
| `msdyn_ocrecording_DuplicateMatchingRecord` | [msdyn_ocrecording](msdyn_ocrecording.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocrecording` |
| `msdyn_ocrecording_DuplicateBaseRecord` | [msdyn_ocrecording](msdyn_ocrecording.md) | `baserecordid` | `baserecordid_msdyn_ocrecording` |
| `msdyn_ocrecording_AsyncOperations` | [msdyn_ocrecording](msdyn_ocrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrecording` |
| `msdyn_ocrecording_MailboxTrackingFolders` | [msdyn_ocrecording](msdyn_ocrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrecording` |
| `msdyn_ocrecording_UserEntityInstanceDatas` | [msdyn_ocrecording](msdyn_ocrecording.md) | `objectid` | `objectid_msdyn_ocrecording` |
| `msdyn_ocrecording_ProcessSession` | [msdyn_ocrecording](msdyn_ocrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrecording` |
| `msdyn_ocrecording_BulkDeleteFailures` | [msdyn_ocrecording](msdyn_ocrecording.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocrecording` |
| `msdyn_ocrecording_PrincipalObjectAttributeAccesses` | [msdyn_ocrecording](msdyn_ocrecording.md) | `objectid` | `objectid_msdyn_ocrecording` |
| `msdyn_ocrecording_FileAttachments` | [msdyn_ocrecording](msdyn_ocrecording.md) | `objectid` | `objectid_msdyn_ocrecording` |


## Source

Generated from [msdyn_ocrecording (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocrecording')) on 2026-05-07.