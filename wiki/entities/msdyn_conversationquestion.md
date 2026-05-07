---
logical: "msdyn_conversationquestion"
display: "Conversation Question"
entitySetName: "msdyn_conversationquestions"
primaryId: "msdyn_conversationquestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Category`, `msdyn_ConversationParticipantInsights`, `msdyn_ConversationQuestionId`, `msdyn_DurationInMS`, `msdyn_FragmentEnd`, `msdyn_FragmentStart`, `msdyn_Locale`, `msdyn_Name`, `msdyn_OffsetInMS`, `msdyn_Text`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationquestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationquestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationquestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationquestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationquestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationquestion_ConversationPa` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `owner_msdyn_conversationquestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationquestion` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationquestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationquestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationquestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationquestion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationquestion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationquestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationquestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationquestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationquestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationquestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationquestion.md) on 2026-05-06.