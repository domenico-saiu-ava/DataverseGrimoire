---
logical: "msdyn_conversationsignal"
display: "Conversation Signal"
entitySetName: "msdyn_conversationsignals"
primaryId: "msdyn_conversationsignalid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Signal

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsignal` |
| Display name | Conversation Signal |
| Display (plural) | Conversation Signals |
| Schema name | `msdyn_ConversationSignal` |
| Entity set (Web API) | `msdyn_conversationsignals` |
| Primary id attribute | `msdyn_conversationsignalid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsignals?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsignals(<guid>)
POST /api/data/v9.2/msdyn_conversationsignals
PATCH /api/data/v9.2/msdyn_conversationsignals(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsignals(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ActualText`, `msdyn_Confidence`, `msdyn_ConversationParticipantInsights`, `msdyn_ConversationSignalId`, `msdyn_DurationInMS`, `msdyn_FragmentEnd`, `msdyn_FragmentStart`, `msdyn_Locale`, `msdyn_Name`, `msdyn_OffsetInMS`, `msdyn_Text`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationsignal` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationsignal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsignal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsignal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsignal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationsignal_ConversationPart` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `owner_msdyn_conversationsignal` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationsignal` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationsignal` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsignal_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsignal_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsignal_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationsignal_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationsignal_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsignal_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsignal_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsignal_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_conversationsegmentsentiment_msdyn_conversationsignal_msdyn_SentimentTarget` | _n/a_ | `msdyn_sentimenttarget` | _n/a_ |


## Source

Generated from [msdyn_conversationsignal.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsignal.md) on 2026-05-06.