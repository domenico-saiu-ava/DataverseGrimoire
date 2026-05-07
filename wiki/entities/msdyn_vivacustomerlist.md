---
logical: "msdyn_vivacustomerlist"
display: "M365 Copilot Sales customer list"
entitySetName: "msdyn_vivacustomerlists"
primaryId: "msdyn_vivacustomerlistid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# M365 Copilot Sales customer list

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_vivacustomerlist` |
| Display name | M365 Copilot Sales customer list |
| Display (plural) | M365 Copilot Sales customer lists |
| Schema name | `msdyn_vivacustomerlist` |
| Entity set (Web API) | `msdyn_vivacustomerlists` |
| Primary id attribute | `msdyn_vivacustomerlistid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_vivacustomerlists?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_vivacustomerlists(<guid>)
POST /api/data/v9.2/msdyn_vivacustomerlists
PATCH /api/data/v9.2/msdyn_vivacustomerlists(<guid>)
DELETE /api/data/v9.2/msdyn_vivacustomerlists(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_backingview`, `msdyn_listtype`, `msdyn_Name`, `msdyn_orderindex`, `msdyn_producttype`, `msdyn_sortexpression`, `msdyn_timerangequalifier`, `msdyn_timerangetype`, `msdyn_userid`, `msdyn_vivacustomerlistId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_vivacustomerlist` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_vivacustomerlist_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_vivacustomerlist_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_vivacustomerlist_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_vivacustomerlist_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_vivacustomerlist` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_vivacustomerlist` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_vivacustomerlist` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_vivacustomerlist_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_vivacustomerlist_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_vivacustomerlist_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_vivacustomerlist_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_vivacustomerlist_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_vivacustomerlist_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_vivacustomerlist_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_vivacustomerlist_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_vivacustomerlist.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_vivacustomerlist.md) on 2026-05-06.