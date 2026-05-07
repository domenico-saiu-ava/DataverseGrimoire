---
logical: "msdyn_conversationcomment"
display: "Comment"
entitySetName: "msdyn_conversationcomments"
primaryId: "msdyn_conversationcommentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Content`, `msdyn_ConversationCommentId`, `msdyn_DurationInMS`, `msdyn_FragmentEnd`, `msdyn_FragmentStart`, `msdyn_Name`, `msdyn_OffsetInMS`, `msdyn_Transcript`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationcomment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationcomment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationcomment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationcomment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationcomment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationcomment_Transcript_msdyn_transcr` | [msdyn_transcript](msdyn_transcript.md) | `msdyn_transcript` | `msdyn_transcript` |
| `owner_msdyn_conversationcomment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationcomment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationcomment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationcomment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationcomment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationcomment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationcomment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationcomment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationcomment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationcomment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationcomment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationcomment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationcomment.md) on 2026-05-06.