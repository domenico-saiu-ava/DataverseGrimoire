---
logical: "bookableresource"
display: "Bookable Resource"
entitySetName: "bookableresources"
primaryId: "bookableresourceid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["risorsa prenotabile", "risorsa", "risorse"]
synonyms_en: ["bookable resource", "resource"]
---

# Bookable Resource

Resource that has capacity which can be allocated to work.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookableresource` |
| Display name | Bookable Resource |
| Display (plural) | Bookable Resources |
| Schema name | `BookableResource` |
| Entity set (Web API) | `bookableresources` |
| Primary id attribute | `bookableresourceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookableresources?$select=name&$top=10
GET /api/data/v9.2/bookableresources(<guid>)
POST /api/data/v9.2/bookableresources
PATCH /api/data/v9.2/bookableresources(<guid>)
DELETE /api/data/v9.2/bookableresources(<guid>)
```

## Attributes

Writable: **20** · Read-only: **13**

### Writable

`AccountId`, `BookableResourceId`, `CalendarId`, `ContactId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessId`, `ResourceType`, `StageId`, `StateCode`, `StatusCode`, `TimeZone`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UserId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_bookableresource_AccountId` | [account](account.md) | `accountid` | `AccountId` |
| `business_unit_bookableresource` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `calendar_bookableresources` | [calendar](calendar.md) | `calendarid` | `calendarid` |
| `contact_bookableresource_ContactId` | [contact](contact.md) | `contactid` | `ContactId` |
| `lk_bookableresource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookableresource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookableresource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookableresource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookableresource` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_BookableResource` | [processstage](processstage.md) | `stageid` | `stageid` |
| `systemuser_bookableresource_UserId` | [systemuser](systemuser.md) | `userid` | `UserId` |
| `team_bookableresource` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookableresource` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookableresource` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresource_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `bookableresource_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresource_bookableresourcebooking_Resource` | _n/a_ | `resource` | _n/a_ |
| `bookableresource_bookableresourcecategoryassn_Resource` | _n/a_ | `resource` | _n/a_ |
| `bookableresource_bookableresourcecharacteristic_Resource` | _n/a_ | `resource` | _n/a_ |
| `bookableresource_bookableresourcegroup_ChildResource` | _n/a_ | `childresource` | _n/a_ |
| `bookableresource_bookableresourcegroup_ParentResource` | _n/a_ | `parentresource` | _n/a_ |
| `bookableresource_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresource_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookableresource_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookableresource_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresource_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookableresource_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookableResource_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_bookableresource_msdyn_bookableresourcecapacityprofile` | _n/a_ | `msdyn_bookableresourceid` | _n/a_ |


## Source

Generated from [bookableresource.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookableresource.md) on 2026-05-06.