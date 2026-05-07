---
logical: "bookableresourcebooking"
display: "Bookable Resource Booking"
entitySetName: "bookableresourcebookings"
primaryId: "bookableresourcebookingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["prenotazione risorsa", "prenotazione"]
synonyms_en: ["booking", "resource booking"]
---

# Bookable Resource Booking

Represents the line details of a resource booking.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bookableresourcebooking` |
| Display name | Bookable Resource Booking |
| Display (plural) | Bookable Resource Bookings |
| Schema name | `BookableResourceBooking` |
| Entity set (Web API) | `bookableresourcebookings` |
| Primary id attribute | `bookableresourcebookingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bookableresourcebookings?$select=name&$top=10
GET /api/data/v9.2/bookableresourcebookings(<guid>)
POST /api/data/v9.2/bookableresourcebookings
PATCH /api/data/v9.2/bookableresourcebookings(<guid>)
DELETE /api/data/v9.2/bookableresourcebookings(<guid>)
```

## Attributes

Writable: **21** · Read-only: **13**

### Writable

`BookableResourceBookingId`, `BookingStatus`, `BookingType`, `Duration`, `EndTime`, `Header`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ProcessId`, `Resource`, `StageId`, `StartTime`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresource_bookableresourcebooking_Resource` | [bookableresource](bookableresource.md) | `resource` | `Resource` |
| `bookableresourcebookingheader_bookableresourcebooking_Header` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `header` | `Header` |
| `bookingstatus_bookableresourcebooking_BookingStatus` | [bookingstatus](bookingstatus.md) | `bookingstatus` | `BookingStatus` |
| `business_unit_bookableresourcebooking` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_bookableresourcebooking_createdby` | [systemuser](systemuser.md) | `createdby` | `createdbyname` |
| `lk_bookableresourcebooking_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfbyname` |
| `lk_bookableresourcebooking_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedbyname` |
| `lk_bookableresourcebooking_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfbyname` |
| `owner_bookableresourcebooking` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_BookableResourceBooking` | [processstage](processstage.md) | `stageid` | `stageid` |
| `team_bookableresourcebooking` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_bookableresourcebooking` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_bookableresourcebooking` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (35)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bookableresourcebooking_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcebooking_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_BulkOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_CampaignActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_CampaignResponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `bookableresourcebooking_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `bookableresourcebooking_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_PrincipalObjectAttributeAccess` | _n/a_ | `objectid` | _n/a_ |
| `bookableresourcebooking_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BookableResourceBooking_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bookableresourcebooking_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [bookableresourcebooking.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bookableresourcebooking.md) on 2026-05-06.