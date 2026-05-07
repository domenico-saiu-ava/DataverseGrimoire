---
logical: "msdyn_conversationquestion"
display: "Conversation Question"
entitySetName: "msdyn_conversationquestions"
primaryId: "msdyn_conversationquestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Conversation Question

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationquestion` |
| Display name | Conversation Question |
| Display (plural) | Conversation Questions |
| Schema name | `msdyn_ConversationQuestion` |
| Entity set (Web API) | `msdyn_conversationquestions` |
| Primary id attribute | `msdyn_conversationquestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationquestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationquestions(<guid>)
POST /api/data/v9.2/msdyn_conversationquestions
PATCH /api/data/v9.2/msdyn_conversationquestions(<guid>)
DELETE /api/data/v9.2/msdyn_conversationquestions(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_category`, `msdyn_conversationparticipantinsights`, `msdyn_conversationquestionid`, `msdyn_durationinms`, `msdyn_fragmentend`, `msdyn_fragmentstart`, `msdyn_locale`, `msdyn_name`, `msdyn_offsetinms`, `msdyn_text`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationquestion_ConversationPa` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `lk_msdyn_conversationquestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationquestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationquestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationquestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationquestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationquestion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationquestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationquestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationquestion_SyncErrors` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_DuplicateMatchingRecord` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_DuplicateBaseRecord` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `baserecordid` | `baserecordid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_AsyncOperations` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_MailboxTrackingFolders` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_UserEntityInstanceDatas` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `objectid` | `objectid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_ProcessSession` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_BulkDeleteFailures` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationquestion` |
| `msdyn_conversationquestion_PrincipalObjectAttributeAccesses` | [msdyn_conversationquestion](msdyn_conversationquestion.md) | `objectid` | `objectid_msdyn_conversationquestion` |


## Source

Generated from [msdyn_conversationquestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationquestion')) on 2026-05-07.