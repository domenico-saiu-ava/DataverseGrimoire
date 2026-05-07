---
logical: "msdyn_transcript"
display: "Transcript"
entitySetName: "msdyn_transcripts"
primaryId: "msdyn_transcriptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Transcript

Stores the transcript of the communication  between the user and the customer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_transcript` |
| Display name | Transcript |
| Display (plural) | Transcripts |
| Schema name | `msdyn_transcript` |
| Entity set (Web API) | `msdyn_transcripts` |
| Primary id attribute | `msdyn_transcriptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_transcripts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_transcripts(<guid>)
POST /api/data/v9.2/msdyn_transcripts
PATCH /api/data/v9.2/msdyn_transcripts(<guid>)
DELETE /api/data/v9.2/msdyn_transcripts(<guid>)
```

## Attributes

Writable: **16** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `msdyn_applicationid`, `msdyn_channelinstanceid`, `msdyn_LiveWorkItemIdId`, `msdyn_name`, `msdyn_transcriptId`, `msdyn_transcripttarget`, `msdyn_transcripttargetIdType`, `msdyn_transcripturi`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_englishtranslatedtranscriptformatted`, `msdyn_englishtranslatedtranscriptformatted_Name`, `msdyn_rawvoicetranscript`, `msdyn_rawvoicetranscript_Name`, `msdyn_voicetranscript`, `msdyn_voicetranscript_formatted`, `msdyn_voicetranscript_formatted_Name`, `msdyn_voicetranscript_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_transcript` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_transcript_msdyn_englishtranslatedtranscriptformatted` | [fileattachment](fileattachment.md) | `msdyn_englishtranslatedtranscriptformatted` | `msdyn_englishtranslatedtranscriptformatted` |
| `FileAttachment_msdyn_transcript_msdyn_rawvoicetranscript` | [fileattachment](fileattachment.md) | `msdyn_rawvoicetranscript` | `msdyn_rawvoicetranscript` |
| `FileAttachment_msdyn_transcript_msdyn_voicetranscript` | [fileattachment](fileattachment.md) | `msdyn_voicetranscript` | `msdyn_voicetranscript` |
| `FileAttachment_msdyn_transcript_msdyn_voicetranscript_formatted` | [fileattachment](fileattachment.md) | `msdyn_voicetranscript_formatted` | `msdyn_voicetranscript_formatted` |
| `lk_msdyn_transcript_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_transcript_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_transcript_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_transcript_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_appointment_msdyn_transcript_transcripttarget` | [appointment](appointment.md) | `msdyn_transcripttarget` | `msdyn_transcripttarget_appointment` |
| `msdyn_msdyn_ocliveworkitem_msdyn_transcript` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemidid` | `msdyn_LiveWorkItemIdId` |
| `msdyn_msdyn_transcript_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `msdyn_phonecall_msdyn_transcript_transcripttarget` | [phonecall](phonecall.md) | `msdyn_transcripttarget` | `msdyn_transcripttarget_phonecall` |
| `owner_msdyn_transcript` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_transcript` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_transcript` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationcomment_Transcript_msdyn_transcr` | _n/a_ | `msdyn_transcript` | _n/a_ |
| `msdyn_msdyn_sciconversation_Transcript_msdyn_tr` | _n/a_ | `msdyn_transcript` | _n/a_ |
| `msdyn_transcript_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_transcript_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_transcript_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_transcript_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_transcript_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_transcript_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_transcript_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_transcript_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_transcript.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_transcript.md) on 2026-05-06.