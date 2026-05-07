---
logical: "msdyn_conversationsubject"
display: "Conversation Subject"
entitySetName: "msdyn_conversationsubjects"
primaryId: "msdyn_conversationsubjectid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationaggregatedinsights`, `msdyn_conversationsubjectid`, `msdyn_durationinms`, `msdyn_fragmentend`, `msdyn_fragmentstart`, `msdyn_name`, `msdyn_offsetinms`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsubject_ConversationAgg` | [msdyn_conversationaggregatedinsights](msdyn_conversationaggregatedinsights.md) | `msdyn_conversationaggregatedinsights` | `msdyn_conversationaggregatedinsights` |
| `lk_msdyn_conversationsubject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsubject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsubject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsubject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationsubject` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationsubject` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationsubject` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationsubject` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsubject_SyncErrors` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_DuplicateMatchingRecord` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_DuplicateBaseRecord` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `baserecordid` | `baserecordid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_AsyncOperations` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_MailboxTrackingFolders` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_UserEntityInstanceDatas` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `objectid` | `objectid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_ProcessSession` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_BulkDeleteFailures` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsubject` |
| `msdyn_conversationsubject_PrincipalObjectAttributeAccesses` | [msdyn_conversationsubject](msdyn_conversationsubject.md) | `objectid` | `objectid_msdyn_conversationsubject` |


## Source

Generated from [msdyn_conversationsubject (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsubject')) on 2026-05-07.