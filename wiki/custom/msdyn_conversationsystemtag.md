---
logical: "msdyn_conversationsystemtag"
display: "Conversation System Tag"
entitySetName: "msdyn_conversationsystemtags"
primaryId: "msdyn_conversationsystemtagid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Conversation System Tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationsystemtag` |
| Display name | Conversation System Tag |
| Display (plural) | Conversation System Tags |
| Schema name | `msdyn_ConversationSystemTag` |
| Entity set (Web API) | `msdyn_conversationsystemtags` |
| Primary id attribute | `msdyn_conversationsystemtagid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationsystemtags?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationsystemtags(<guid>)
POST /api/data/v9.2/msdyn_conversationsystemtags
PATCH /api/data/v9.2/msdyn_conversationsystemtags(<guid>)
DELETE /api/data/v9.2/msdyn_conversationsystemtags(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationsystemtagid`, `msdyn_name`, `msdyn_tagtarget`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationsystemtag_TagTarget_msd` | [msdyn_sciconversation](msdyn_sciconversation.md) | `msdyn_tagtarget` | `msdyn_tagtarget` |
| `lk_msdyn_conversationsystemtag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsystemtag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsystemtag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsystemtag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationsystemtag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationsystemtag` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationsystemtag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationsystemtag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsystemtag_SyncErrors` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_DuplicateMatchingRecord` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_DuplicateBaseRecord` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `baserecordid` | `baserecordid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_AsyncOperations` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_MailboxTrackingFolders` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_UserEntityInstanceDatas` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `objectid` | `objectid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_ProcessSession` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_BulkDeleteFailures` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationsystemtag` |
| `msdyn_conversationsystemtag_PrincipalObjectAttributeAccesses` | [msdyn_conversationsystemtag](msdyn_conversationsystemtag.md) | `objectid` | `objectid_msdyn_conversationsystemtag` |


## Source

Generated from [msdyn_conversationsystemtag (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationsystemtag')) on 2026-05-07.