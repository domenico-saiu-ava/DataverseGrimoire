---
logical: "msdyn_conversationtag"
display: "Conversation Tag"
entitySetName: "msdyn_conversationtags"
primaryId: "msdyn_conversationtagid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ConversationTagId`, `msdyn_Name`, `msdyn_TagTarget`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationtag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationtag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationtag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationtag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationtag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationtag_TagTarget_m` | [msdyn_sciconversation](msdyn_sciconversation.md) | `msdyn_tagtarget` | `msdyn_tagtarget` |
| `owner_msdyn_conversationtag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationtag` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationtag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationtag_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtag_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtag_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationtag_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationtag_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtag_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationtag_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationtag_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationtag.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationtag.md) on 2026-05-06.