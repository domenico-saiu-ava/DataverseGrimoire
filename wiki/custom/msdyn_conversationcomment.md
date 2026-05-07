---
logical: "msdyn_conversationcomment"
display: "Comment"
entitySetName: "msdyn_conversationcomments"
primaryId: "msdyn_conversationcommentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Comment

A comment on a specific section in a transcript

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationcomment` |
| Display name | Comment |
| Display (plural) | Comments |
| Schema name | `msdyn_ConversationComment` |
| Entity set (Web API) | `msdyn_conversationcomments` |
| Primary id attribute | `msdyn_conversationcommentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationcomments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationcomments(<guid>)
POST /api/data/v9.2/msdyn_conversationcomments
PATCH /api/data/v9.2/msdyn_conversationcomments(<guid>)
DELETE /api/data/v9.2/msdyn_conversationcomments(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_content`, `msdyn_conversationcommentid`, `msdyn_durationinms`, `msdyn_fragmentend`, `msdyn_fragmentstart`, `msdyn_name`, `msdyn_offsetinms`, `msdyn_transcript`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationcomment_Transcript_msdyn_transcr` | [msdyn_transcript](msdyn_transcript.md) | `msdyn_transcript` | `msdyn_transcript` |
| `lk_msdyn_conversationcomment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationcomment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationcomment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationcomment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationcomment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationcomment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationcomment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationcomment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationcomment_SyncErrors` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_DuplicateMatchingRecord` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_DuplicateBaseRecord` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `baserecordid` | `baserecordid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_AsyncOperations` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_MailboxTrackingFolders` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_UserEntityInstanceDatas` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `objectid` | `objectid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_ProcessSession` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_BulkDeleteFailures` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationcomment` |
| `msdyn_conversationcomment_PrincipalObjectAttributeAccesses` | [msdyn_conversationcomment](msdyn_conversationcomment.md) | `objectid` | `objectid_msdyn_conversationcomment` |


## Source

Generated from [msdyn_conversationcomment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationcomment')) on 2026-05-07.