---
logical: "msdyn_conversationactionitem"
display: "Conversation Action Item"
entitySetName: "msdyn_conversationactionitems"
primaryId: "msdyn_conversationactionitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Conversation Action Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationactionitem` |
| Display name | Conversation Action Item |
| Display (plural) | Conversation Action Items |
| Schema name | `msdyn_ConversationActionItem` |
| Entity set (Web API) | `msdyn_conversationactionitems` |
| Primary id attribute | `msdyn_conversationactionitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationactionitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationactionitems(<guid>)
POST /api/data/v9.2/msdyn_conversationactionitems
PATCH /api/data/v9.2/msdyn_conversationactionitems(<guid>)
DELETE /api/data/v9.2/msdyn_conversationactionitems(<guid>)
```

## Attributes

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ActionItemJSON`, `msdyn_ConversationActionItemId`, `msdyn_ConversationParticipantInsights`, `msdyn_CreatedActivity`, `msdyn_CreatedActivityIdType`, `msdyn_DefaultText`, `msdyn_DurationInMS`, `msdyn_ExternalResourceUri`, `msdyn_FragmentEnd`, `msdyn_FragmentStart`, `msdyn_Locale`, `msdyn_Name`, `msdyn_OffsetInMS`, `msdyn_State`, `msdyn_Type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationactionitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationactionitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationactionitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationactionitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationactionitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity` | [appointment](appointment.md) | `msdyn_createdactivity` | `msdyn_createdactivity_appointment` |
| `msdyn_msdyn_conversationactionitem_Conversation` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationactionitem_email_msdyn_CreatedActivity` | [email](email.md) | `msdyn_createdactivity` | `msdyn_createdactivity_email` |
| `msdyn_msdyn_conversationactionitem_phonecall_msdyn_CreatedActivity` | [phonecall](phonecall.md) | `msdyn_createdactivity` | `msdyn_createdactivity_phonecall` |
| `msdyn_msdyn_conversationactionitem_task_msdyn_CreatedActivity` | [task](task.md) | `msdyn_createdactivity` | `msdyn_createdactivity_task` |
| `owner_msdyn_conversationactionitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationactionitem` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationactionitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationactionitem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionitem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionitem_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationactionitem_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationactionitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationactionitem_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationactionitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationactionitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationactionitem.md) on 2026-05-06.