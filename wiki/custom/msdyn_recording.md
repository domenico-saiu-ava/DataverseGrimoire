---
logical: "msdyn_recording"
display: "Registrazione (deprecato)"
entitySetName: "msdyn_recordings"
primaryId: "msdyn_recordingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Registrazione (deprecato)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recording` |
| Display name | Registrazione (deprecato) |
| Display (plural) | Registrazioni |
| Schema name | `msdyn_recording` |
| Entity set (Web API) | `msdyn_recordings` |
| Primary id attribute | `msdyn_recordingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recordings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_recordings(<guid>)
POST /api/data/v9.2/msdyn_recordings
PATCH /api/data/v9.2/msdyn_recordings(<guid>)
DELETE /api/data/v9.2/msdyn_recordings(<guid>)
```

## Attributes

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_appointment_activity`, `msdyn_ci_comments`, `msdyn_ci_id`, `msdyn_ci_insights_json`, `msdyn_ci_keywords`, `msdyn_ci_tags`, `msdyn_ci_transcript`, `msdyn_ci_transcript_json`, `msdyn_ci_translated_transcript`, `msdyn_ci_translated_transcript_json`, `msdyn_ci_url`, `msdyn_name`, `msdyn_phone_call_activity`, `msdyn_recordingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appointment_msdyn_recording_appointment_activity` | [appointment](appointment.md) | `msdyn_appointment_activity` | `msdyn_appointment_activity` |
| `msdyn_phonecall_msdyn_recording_phone_call_activity` | [phonecall](phonecall.md) | `msdyn_phone_call_activity` | `msdyn_phone_call_activity` |
| `lk_msdyn_recording_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recording_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recording_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recording_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_recording` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_recording` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_recording` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_recording` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recording_SyncErrors` | [msdyn_recording](msdyn_recording.md) | `regardingobjectid` | `regardingobjectid_msdyn_recording` |
| `msdyn_recording_DuplicateMatchingRecord` | [msdyn_recording](msdyn_recording.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_recording` |
| `msdyn_recording_DuplicateBaseRecord` | [msdyn_recording](msdyn_recording.md) | `baserecordid` | `baserecordid_msdyn_recording` |
| `msdyn_recording_AsyncOperations` | [msdyn_recording](msdyn_recording.md) | `regardingobjectid` | `regardingobjectid_msdyn_recording` |
| `msdyn_recording_MailboxTrackingFolders` | [msdyn_recording](msdyn_recording.md) | `regardingobjectid` | `regardingobjectid_msdyn_recording` |
| `msdyn_recording_UserEntityInstanceDatas` | [msdyn_recording](msdyn_recording.md) | `objectid` | `objectid_msdyn_recording` |
| `msdyn_recording_ProcessSession` | [msdyn_recording](msdyn_recording.md) | `regardingobjectid` | `regardingobjectid_msdyn_recording` |
| `msdyn_recording_BulkDeleteFailures` | [msdyn_recording](msdyn_recording.md) | `regardingobjectid` | `regardingobjectid_msdyn_recording` |
| `msdyn_recording_PrincipalObjectAttributeAccesses` | [msdyn_recording](msdyn_recording.md) | `objectid` | `objectid_msdyn_recording` |


## Source

Generated from [msdyn_recording (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recording')) on 2026-05-07.