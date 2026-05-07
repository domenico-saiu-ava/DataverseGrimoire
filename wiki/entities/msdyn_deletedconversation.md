---
logical: "msdyn_deletedconversation"
display: "DeletedConversation"
entitySetName: "msdyn_deletedconversations"
primaryId: "msdyn_deletedconversationid"
primaryName: "msdyn_ocliveworkitemid"
tableType: "Standard"
ownership: "UserOwned"
---

# DeletedConversation

Holds id of deleted conversation

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

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_deletedconversationId`, `msdyn_ocliveworkitemid`, `msdyn_reason`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_deletedconversation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_deletedconversation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_deletedconversation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_deletedconversation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_deletedconversation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_deletedconversation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_deletedconversation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_deletedconversation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_deletedconversation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_deletedconversation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_deletedconversation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_deletedconversation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_deletedconversation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_deletedconversation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_deletedconversation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_deletedconversation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_deletedconversation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_deletedconversation.md) on 2026-05-06.