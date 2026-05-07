---
logical: "list"
display: "Marketing List"
entitySetName: "lists"
primaryId: "listid"
primaryName: "listname"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["lista", "lista marketing", "marketing list"]
synonyms_en: ["marketing list", "list"]
---

# Marketing List

Group of existing or potential customers created for a marketing campaign or other sales purposes.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `list` |
| Display name | Marketing List |
| Display (plural) | Marketing Lists |
| Schema name | `List` |
| Entity set (Web API) | `lists` |
| Primary id attribute | `listid` |
| Primary name attribute | `listname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/lists?$select=listname&$top=10
GET /api/data/v9.2/lists(<guid>)
POST /api/data/v9.2/lists
PATCH /api/data/v9.2/lists(<guid>)
DELETE /api/data/v9.2/lists(<guid>)
```

## Attributes

Writable: **29** · Read-only: **14**

### Writable

`Cost`, `CreatedFromCode`, `Description`, `DoNotSendOnOptOut`, `IgnoreInactiveListMembers`, `ImportSequenceNumber`, `LastUsedOn`, `ListId`, `ListName`, `LockStatus`, `MemberCount`, `MemberType`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `processedMemberCount`, `processFetchXML`, `ProcessId`, `Purpose`, `Query`, `Source`, `StageId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`Cost_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_list` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_list_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_list_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_list_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_list_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_lists` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_lists` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `team_list` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_list` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_list` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `List_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `List_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `List_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `List_BulkOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `list_connections1` | _n/a_ | `record1id` | _n/a_ |
| `list_connections2` | _n/a_ | `record2id` | _n/a_ |
| `List_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `List_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `list_listoperation_ListId` | _n/a_ | `listid` | _n/a_ |
| `list_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `list_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `List_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `List_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaignactivitylist_association` | [itemid](itemid.md) | _n/a_ | _n/a_ |
| `campaignlist_association` | [entityid](entityid.md) | _n/a_ | _n/a_ |
| `listaccount_association` | [listid](listid.md) | _n/a_ | _n/a_ |
| `listcontact_association` | [listid](listid.md) | _n/a_ | _n/a_ |
| `listlead_association` | [listid](listid.md) | _n/a_ | _n/a_ |

## Source

Generated from [list.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/list.md) on 2026-05-06.