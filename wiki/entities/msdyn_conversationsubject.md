---
logical: "msdyn_conversationsubject"
display: "Conversation Subject"
entitySetName: "msdyn_conversationsubjects"
primaryId: "msdyn_conversationsubjectid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Subject

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsubject` |
| Display name | Conversation Subject |
| Display (plural) | Conversation Subjects |
| Schema name | `msdyn_ConversationSubject` |
| Entity set (Web API) | `msdyn_conversationsubjects` |
| Primary id attribute | `msdyn_conversationsubjectid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsubjects?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsubjects(<guid>)
POST /api/data/v9.2/msdyn_conversationsubjects
PATCH /api/data/v9.2/msdyn_conversationsubjects(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsubjects(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ConversationAggregatedInsights`, `msdyn_ConversationSubjectId`, `msdyn_DurationInMS`, `msdyn_FragmentEnd`, `msdyn_FragmentStart`, `msdyn_Name`, `msdyn_OffsetInMS`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationsubject` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationsubject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsubject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsubject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsubject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationsubject_ConversationAgg` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `owner_msdyn_conversationsubject` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationsubject` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationsubject` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsubject_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsubject_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsubject_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationsubject_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationsubject_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsubject_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsubject_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsubject_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationsubject.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsubject.md) on 2026-05-06.