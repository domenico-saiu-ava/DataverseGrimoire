---
logical: "msdyn_deletedconversation"
display: "DeletedConversation"
entitySetName: "msdyn_deletedconversations"
primaryId: "msdyn_deletedconversationid"
primaryName: "msdyn_ocliveworkitemid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DeletedConversation

Contiene l'ID della conversazione eliminata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_deletedconversation` |
| Display name | DeletedConversation |
| Display (plural) | DeletedConversations |
| Schema name | `msdyn_deletedconversation` |
| Entity set (Web API) | `msdyn_deletedconversations` |
| Primary id attribute | `msdyn_deletedconversationid` |
| Primary name attribute | `msdyn_ocliveworkitemid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_deletedconversations?$select=msdyn_ocliveworkitemid&$top=10
GET /api/data/v9.2/msdyn_deletedconversations(<guid>)
POST /api/data/v9.2/msdyn_deletedconversations
PATCH /api/data/v9.2/msdyn_deletedconversations(<guid>)
DELETE /api/data/v9.2/msdyn_deletedconversations(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_deletedconversationid`, `msdyn_ocliveworkitemid`, `msdyn_reason`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_deletedconversation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_deletedconversation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_deletedconversation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_deletedconversation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_deletedconversation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_deletedconversation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_deletedconversation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_deletedconversation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_deletedconversation_SyncErrors` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_DuplicateMatchingRecord` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_DuplicateBaseRecord` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `baserecordid` | `baserecordid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_AsyncOperations` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_MailboxTrackingFolders` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_UserEntityInstanceDatas` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `objectid` | `objectid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_ProcessSession` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_BulkDeleteFailures` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `regardingobjectid` | `regardingobjectid_msdyn_deletedconversation` |
| `msdyn_deletedconversation_PrincipalObjectAttributeAccesses` | [msdyn_deletedconversation](msdyn_deletedconversation.md) | `objectid` | `objectid_msdyn_deletedconversation` |


## Source

Generated from [msdyn_deletedconversation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_deletedconversation')) on 2026-05-07.