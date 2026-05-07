---
logical: "msdyn_transcript"
display: "Trascrizione"
entitySetName: "msdyn_transcripts"
primaryId: "msdyn_transcriptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trascrizione

Archivia la trascrizione della comunicazione tra l'utente e il cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_transcript` |
| Display name | Trascrizione |
| Display (plural) | Trascrizioni |
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

Writable: **14** · Read-only: **14**

### Writable

`importsequencenumber`, `msdyn_applicationid`, `msdyn_channelinstanceid`, `msdyn_liveworkitemidid`, `msdyn_name`, `msdyn_transcriptid`, `msdyn_transcripttarget`, `msdyn_transcripturi`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_englishtranslatedtranscriptformatted`, `msdyn_rawvoicetranscript`, `msdyn_voicetranscript`, `msdyn_voicetranscript_formatted`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_transcript_msdyn_channelinstance` | [msdyn_channelinstance](msdyn_channelinstance.md) | `msdyn_channelinstanceid` | `msdyn_channelinstanceid` |
| `lk_msdyn_transcript_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_transcript_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_transcript_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_transcript_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_transcript` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_transcript` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_transcript` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_transcript` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_transcript_msdyn_voicetranscript` | [fileattachment](fileattachment.md) | `msdyn_voicetranscript` | `msdyn_voicetranscript` |
| `FileAttachment_msdyn_transcript_msdyn_voicetranscript_formatted` | [fileattachment](fileattachment.md) | `msdyn_voicetranscript_formatted` | `msdyn_voicetranscript_formatted` |
| `FileAttachment_msdyn_transcript_msdyn_englishtranslatedtranscriptformatted` | [fileattachment](fileattachment.md) | `msdyn_englishtranslatedtranscriptformatted` | `msdyn_englishtranslatedtranscriptformatted` |
| `FileAttachment_msdyn_transcript_msdyn_rawvoicetranscript` | [fileattachment](fileattachment.md) | `msdyn_rawvoicetranscript` | `msdyn_rawvoicetranscript` |
| `msdyn_appointment_msdyn_transcript_transcripttarget` | [appointment](appointment.md) | `msdyn_transcripttarget` | `msdyn_transcripttarget_appointment` |
| `msdyn_msdyn_ocliveworkitem_msdyn_transcript` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemidid` | `msdyn_LiveWorkItemIdId` |
| `msdyn_phonecall_msdyn_transcript_transcripttarget` | [phonecall](phonecall.md) | `msdyn_transcripttarget` | `msdyn_transcripttarget_phonecall` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationcomment_Transcript_msdyn_transcr` | [msdyn_transcript](msdyn_transcript.md) | `msdyn_transcript` | `msdyn_transcript` |
| `msdyn_msdyn_sciconversation_Transcript_msdyn_tr` | [msdyn_transcript](msdyn_transcript.md) | `msdyn_transcript` | `msdyn_transcript` |
| `msdyn_transcript_SyncErrors` | [msdyn_transcript](msdyn_transcript.md) | `regardingobjectid` | `regardingobjectid_msdyn_transcript` |
| `msdyn_transcript_AsyncOperations` | [msdyn_transcript](msdyn_transcript.md) | `regardingobjectid` | `regardingobjectid_msdyn_transcript` |
| `msdyn_transcript_MailboxTrackingFolders` | [msdyn_transcript](msdyn_transcript.md) | `regardingobjectid` | `regardingobjectid_msdyn_transcript` |
| `msdyn_transcript_UserEntityInstanceDatas` | [msdyn_transcript](msdyn_transcript.md) | `objectid` | `objectid_msdyn_transcript` |
| `msdyn_transcript_ProcessSession` | [msdyn_transcript](msdyn_transcript.md) | `regardingobjectid` | `regardingobjectid_msdyn_transcript` |
| `msdyn_transcript_BulkDeleteFailures` | [msdyn_transcript](msdyn_transcript.md) | `regardingobjectid` | `regardingobjectid_msdyn_transcript` |
| `msdyn_transcript_PrincipalObjectAttributeAccesses` | [msdyn_transcript](msdyn_transcript.md) | `objectid` | `objectid_msdyn_transcript` |
| `msdyn_transcript_FileAttachments` | [msdyn_transcript](msdyn_transcript.md) | `objectid` | `objectid_msdyn_transcript` |
| `msdyn_transcript_Annotations` | [msdyn_transcript](msdyn_transcript.md) | `objectid` | `objectid_msdyn_transcript` |


## Source

Generated from [msdyn_transcript (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_transcript')) on 2026-05-07.