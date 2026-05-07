---
logical: "bookableresourcebookingheader"
display: "Bookable Resource Booking Header"
entitySetName: "bookableresourcebookingheaders"
primaryId: "bookableresourcebookingheaderid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bookable Resource Booking Header

Reservation entity representing the summary of the associated resource bookings.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookableresourcebookingheader` |
| Display name | Bookable Resource Booking Header |
| Display (plural) | Bookable Resource Booking Headers |
| Schema name | `BookableResourceBookingHeader` |
| Entity set (Web API) | `bookableresourcebookingheaders` |
| Primary id attribute | `bookableresourcebookingheaderid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookableresourcebookingheaders?$select=name&$top=10
GET /api/data/v9.2/bookableresourcebookingheaders(<guid>)
POST /api/data/v9.2/bookableresourcebookingheaders
PATCH /api/data/v9.2/bookableresourcebookingheaders(<guid>)
DELETE /api/data/v9.2/bookableresourcebookingheaders(<guid>)
```

## Attributes

Writable: **17** · Read-only: **13**

### Writable

`BookableResourceBookingHeaderId`, `Duration`, `EndTime`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessId`, `StageId`, `StartTime`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_bookableresourcebookingheader` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bookableresourcebookingheader_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookableresourcebookingheader_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookableresourcebookingheader_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookableresourcebookingheader_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookableresourcebookingheader` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_BookableResourceBookingHeader` | [processstage](processstage.md) | `stageid` | `stageid` |
| `team_bookableresourcebookingheader` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookableresourcebookingheader` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookableresourcebookingheader` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (36)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresourcebookingheader_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcebookingheader_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_bookableresourcebooking_Header` | _n/a_ | `header` | _n/a_ |
| `bookableresourcebookingheader_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_BulkOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_CampaignActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_CampaignResponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookableresourcebookingheader_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookableresourcebookingheader_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcebookingheader_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookableResourceBookingHeader_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebookingheader_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [bookableresourcebookingheader.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookableresourcebookingheader.md) on 2026-05-06.