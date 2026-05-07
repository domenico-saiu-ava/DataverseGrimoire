---
logical: "bookableresourcegroup"
display: "Bookable Resource Group"
entitySetName: "bookableresourcegroups"
primaryId: "bookableresourcegroupid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bookable Resource Group

Associates resources with resource groups that they are a member of.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookableresourcegroup` |
| Display name | Bookable Resource Group |
| Display (plural) | Bookable Resource Groups |
| Schema name | `BookableResourceGroup` |
| Entity set (Web API) | `bookableresourcegroups` |
| Primary id attribute | `bookableresourcegroupid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookableresourcegroups?$select=name&$top=10
GET /api/data/v9.2/bookableresourcegroups(<guid>)
POST /api/data/v9.2/bookableresourcegroups
PATCH /api/data/v9.2/bookableresourcegroups(<guid>)
DELETE /api/data/v9.2/bookableresourcegroups(<guid>)
```

## Attributes

Writable: **15** · Read-only: **13**

### Writable

`BookableResourceGroupId`, `ChildResource`, `FromDate`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentResource`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `ToDate`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresource_bookableresourcegroup_ChildResource` | [bookableresource](bookableresource.md) | `childresource` | `ChildResource` |
| `bookableresource_bookableresourcegroup_ParentResource` | [bookableresource](bookableresource.md) | `parentresource` | `ParentResource` |
| `business_unit_bookableresourcegroup` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bookableresourcegroup_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookableresourcegroup_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookableresourcegroup_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookableresourcegroup_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookableresourcegroup` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_bookableresourcegroup` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookableresourcegroup` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookableresourcegroup` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresourcegroup_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcegroup_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcegroup_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcegroup_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookableresourcegroup_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookableresourcegroup_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcegroup_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcegroup_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookableResourceGroup_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [bookableresourcegroup.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookableresourcegroup.md) on 2026-05-06.