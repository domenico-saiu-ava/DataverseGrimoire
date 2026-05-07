---
logical: "msdyn_conversationtag"
display: "Conversation Tag"
entitySetName: "msdyn_conversationtags"
primaryId: "msdyn_conversationtagid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Conversation Tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationtag` |
| Display name | Conversation Tag |
| Display (plural) | Conversation Tags |
| Schema name | `msdyn_ConversationTag` |
| Entity set (Web API) | `msdyn_conversationtags` |
| Primary id attribute | `msdyn_conversationtagid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationtags?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationtags(<guid>)
POST /api/data/v9.2/msdyn_conversationtags
PATCH /api/data/v9.2/msdyn_conversationtags(<guid>)
DELETE /api/data/v9.2/msdyn_conversationtags(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationtagid`, `msdyn_name`, `msdyn_tagtarget`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationtag_TagTarget_m` | [msdyn_sciconversation](msdyn_sciconversation.md) | `msdyn_tagtarget` | `msdyn_tagtarget` |
| `lk_msdyn_conversationtag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationtag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationtag` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationtag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationtag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtag_SyncErrors` | [msdyn_conversationtag](msdyn_conversationtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtag` |
| `msdyn_conversationtag_DuplicateMatchingRecord` | [msdyn_conversationtag](msdyn_conversationtag.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationtag` |
| `msdyn_conversationtag_DuplicateBaseRecord` | [msdyn_conversationtag](msdyn_conversationtag.md) | `baserecordid` | `baserecordid_msdyn_conversationtag` |
| `msdyn_conversationtag_AsyncOperations` | [msdyn_conversationtag](msdyn_conversationtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtag` |
| `msdyn_conversationtag_MailboxTrackingFolders` | [msdyn_conversationtag](msdyn_conversationtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtag` |
| `msdyn_conversationtag_UserEntityInstanceDatas` | [msdyn_conversationtag](msdyn_conversationtag.md) | `objectid` | `objectid_msdyn_conversationtag` |
| `msdyn_conversationtag_ProcessSession` | [msdyn_conversationtag](msdyn_conversationtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtag` |
| `msdyn_conversationtag_BulkDeleteFailures` | [msdyn_conversationtag](msdyn_conversationtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationtag` |
| `msdyn_conversationtag_PrincipalObjectAttributeAccesses` | [msdyn_conversationtag](msdyn_conversationtag.md) | `objectid` | `objectid_msdyn_conversationtag` |


## Source

Generated from [msdyn_conversationtag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationtag')) on 2026-05-07.