---
logical: "msdyn_conversationactionitem"
display: "Conversation Action Item"
entitySetName: "msdyn_conversationactionitems"
primaryId: "msdyn_conversationactionitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **21** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actionitemjson`, `msdyn_conversationactionitemid`, `msdyn_conversationparticipantinsights`, `msdyn_createdactivity`, `msdyn_defaulttext`, `msdyn_durationinms`, `msdyn_externalresourceuri`, `msdyn_fragmentend`, `msdyn_fragmentstart`, `msdyn_locale`, `msdyn_name`, `msdyn_offsetinms`, `msdyn_state`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationactionitem_appointment_msdyn_CreatedActivity` | [appointment](appointment.md) | `msdyn_createdactivity` | `msdyn_createdactivity_appointment` |
| `msdyn_msdyn_conversationactionitem_Conversation` | [msdyn_conversationparticipantinsights](msdyn_conversationparticipantinsights.md) | `msdyn_conversationparticipantinsights` | `msdyn_conversationparticipantinsights` |
| `msdyn_msdyn_conversationactionitem_email_msdyn_CreatedActivity` | [email](email.md) | `msdyn_createdactivity` | `msdyn_createdactivity_email` |
| `msdyn_msdyn_conversationactionitem_phonecall_msdyn_CreatedActivity` | [phonecall](phonecall.md) | `msdyn_createdactivity` | `msdyn_createdactivity_phonecall` |
| `msdyn_msdyn_conversationactionitem_task_msdyn_CreatedActivity` | [task](task.md) | `msdyn_createdactivity` | `msdyn_createdactivity_task` |
| `lk_msdyn_conversationactionitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationactionitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationactionitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationactionitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationactionitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationactionitem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationactionitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationactionitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationactionitem_SyncErrors` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_DuplicateMatchingRecord` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_DuplicateBaseRecord` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `baserecordid` | `baserecordid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_AsyncOperations` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_MailboxTrackingFolders` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_UserEntityInstanceDatas` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `objectid` | `objectid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_ProcessSession` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_BulkDeleteFailures` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionitem` |
| `msdyn_conversationactionitem_PrincipalObjectAttributeAccesses` | [msdyn_conversationactionitem](msdyn_conversationactionitem.md) | `objectid` | `objectid_msdyn_conversationactionitem` |


## Source

Generated from [msdyn_conversationactionitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationactionitem')) on 2026-05-07.