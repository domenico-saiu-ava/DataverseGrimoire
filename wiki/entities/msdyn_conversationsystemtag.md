---
logical: "msdyn_conversationsystemtag"
display: "Conversation System Tag"
entitySetName: "msdyn_conversationsystemtags"
primaryId: "msdyn_conversationsystemtagid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ConversationSystemTagId`, `msdyn_Name`, `msdyn_TagTarget`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_conversationsystemtag` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_conversationsystemtag_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationsystemtag_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationsystemtag_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationsystemtag_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_conversationsystemtag_TagTarget_msd` | [msdyn_sciconversation](msdyn_sciconversation.md) | `msdyn_tagtarget` | `msdyn_tagtarget` |
| `owner_msdyn_conversationsystemtag` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_conversationsystemtag` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_conversationsystemtag` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationsystemtag_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsystemtag_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsystemtag_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_conversationsystemtag_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_conversationsystemtag_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsystemtag_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_conversationsystemtag_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_conversationsystemtag_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_conversationsystemtag.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_conversationsystemtag.md) on 2026-05-06.