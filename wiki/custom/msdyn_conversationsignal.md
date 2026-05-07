---
logical: "msdyn_conversationsignal"
display: "Conversation Signal"
entitySetName: "msdyn_conversationsignals"
primaryId: "msdyn_conversationsignalid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actualtext`, `msdyn_confidence`, `msdyn_conversationparticipantinsights`, `msdyn_conversationsignalid`, `msdyn_durationinms`, `msdyn_fragmentend`, `msdyn_fragmentstart`, `msdyn_locale`, `msdyn_name`, `msdyn_offsetinms`, `msdyn_text`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsignal_ConversationPart` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `lk_msdyn_conversationsignal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsignal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsignal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsignal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationsignal` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationsignal` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationsignal` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationsignal` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsegmentsentiment_msdyn_conversationsignal_msdyn_SentimentTarget` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `msdyn_sentimenttarget` | `msdyn_sentimenttarget_msdyn_conversationsignal` |
| `msdyn_conversationsignal_SyncErrors` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_DuplicateMatchingRecord` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_DuplicateBaseRecord` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `baserecordid` | `baserecordid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_AsyncOperations` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_MailboxTrackingFolders` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_UserEntityInstanceDatas` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `objectid` | `objectid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_ProcessSession` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_BulkDeleteFailures` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsignal` |
| `msdyn_conversationsignal_PrincipalObjectAttributeAccesses` | [msdyn_conversationsignal](msdyn_conversationsignal.md) | `objectid` | `objectid_msdyn_conversationsignal` |


## Source

Generated from [msdyn_conversationsignal (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsignal')) on 2026-05-07.