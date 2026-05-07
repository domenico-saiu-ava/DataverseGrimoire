---
logical: "msdyn_conversationaction"
display: "Azione conversazione"
entitySetName: "msdyn_conversationactions"
primaryId: "msdyn_conversationactionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Azione conversazione

Azione che può essere eseguita nella conversazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationaction` |
| Display name | Azione conversazione |
| Display (plural) | Azione conversazione |
| Schema name | `msdyn_conversationaction` |
| Entity set (Web API) | `msdyn_conversationactions` |
| Primary id attribute | `msdyn_conversationactionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationactions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationactions(<guid>)
POST /api/data/v9.2/msdyn_conversationactions
PATCH /api/data/v9.2/msdyn_conversationactions(<guid>)
DELETE /api/data/v9.2/msdyn_conversationactions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationactionid`, `msdyn_eventname`, `msdyn_eventparameter`, `msdyn_functionname`, `msdyn_icon`, `msdyn_name`, `msdyn_order`, `msdyn_webresource`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationaction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationaction` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationaction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationaction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction` | [msdyn_conversationaction](msdyn_conversationaction.md) | `msdyn_conversationaction` | `msdyn_ConversationAction` |
| `msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey` | [msdyn_conversationaction](msdyn_conversationaction.md) | `msdyn_conversationactionkey` | `msdyn_conversationactionkey` |
| `msdyn_conversationaction_SyncErrors` | [msdyn_conversationaction](msdyn_conversationaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaction` |
| `msdyn_conversationaction_DuplicateMatchingRecord` | [msdyn_conversationaction](msdyn_conversationaction.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationaction` |
| `msdyn_conversationaction_DuplicateBaseRecord` | [msdyn_conversationaction](msdyn_conversationaction.md) | `baserecordid` | `baserecordid_msdyn_conversationaction` |
| `msdyn_conversationaction_AsyncOperations` | [msdyn_conversationaction](msdyn_conversationaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaction` |
| `msdyn_conversationaction_MailboxTrackingFolders` | [msdyn_conversationaction](msdyn_conversationaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaction` |
| `msdyn_conversationaction_UserEntityInstanceDatas` | [msdyn_conversationaction](msdyn_conversationaction.md) | `objectid` | `objectid_msdyn_conversationaction` |
| `msdyn_conversationaction_ProcessSession` | [msdyn_conversationaction](msdyn_conversationaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaction` |
| `msdyn_conversationaction_BulkDeleteFailures` | [msdyn_conversationaction](msdyn_conversationaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationaction` |
| `msdyn_conversationaction_PrincipalObjectAttributeAccesses` | [msdyn_conversationaction](msdyn_conversationaction.md) | `objectid` | `objectid_msdyn_conversationaction` |


## Source

Generated from [msdyn_conversationaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationaction')) on 2026-05-07.