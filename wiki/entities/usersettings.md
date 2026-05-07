---
logical: "usersettings"
display: "User Settings"
entitySetName: "usersettingscollection"
primaryId: "systemuserid"
tableType: "Standard"
ownership: "BusinessOwned"
---

# User Settings

User's preferred settings.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `usersettings` |
| Display name | User Settings |
| Display (plural) | User Settings |
| Schema name | `UserSettings` |
| Entity set (Web API) | `usersettingscollection` |
| Primary id attribute | `systemuserid` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/usersettingscollection?$select=&$top=10
GET /api/data/v9.2/usersettingscollection(<guid>)
POST /api/data/v9.2/usersettingscollection
PATCH /api/data/v9.2/usersettingscollection(<guid>)
DELETE /api/data/v9.2/usersettingscollection(<guid>)
```

## Attributes

Writable: **98** · Read-only: **11**

### Writable

`AddressBookSyncInterval`, `AdvancedFindStartupMode`, `AMDesignator`, `AutoCaptureUserStatus`, `AutoCreateContactOnPromote`, `BusinessUnitId`, `CalendarType`, `CurrencyDecimalPrecision`, `CurrencyFormatCode`, `CurrencySymbol`, `D365AutoInstallAttemptStatus`, `DataValidationModeForExportToExcel`, `DateFormatCode`, `DateFormatString`, `DateSeparator`, `DecimalSymbol`, `DefaultCalendarView`, `DefaultCountryCode`, `DefaultDashboardId`, `DefaultSearchExperience`, `EntityFormMode`, `FullNameConventionCode`, `GetStartedPaneContentEnabled`, `HelpLanguageId`, `HomepageArea`, `HomepageLayout`, `HomepageSubarea`, `IgnoreUnsolicitedEmail`, `IncomingEmailFilteringMethod`, `IsAppsForCrmAlertDismissed`, `IsAutoDataCaptureEnabled`, `IsDefaultCountryCodeCheckEnabled`, `IsDuplicateDetectionEnabledWhenGoingOnline`, `IsEmailConversationViewEnabled`, `IsGuidedHelpEnabled`, `IsResourceBookingExchangeSyncEnabled`, `IsSendAsAllowed`, `LastAlertsViewedTime`, `LastModifiedTimeForViewPersonalizationSettings`, `LocaleId`, `LongDateFormatCode`, `NegativeCurrencyFormatCode`, `NegativeFormatCode`, `NextTrackingNumber`, `NumberGroupFormat`, `NumberSeparator`, `OfflineSyncInterval`, `OutlookSyncInterval`, `PagingLimit`, `PersonalizationSettings`, `PMDesignator`, `PreferredSolution`, `PricingDecimalPrecision`, `ReleaseChannel`, `ReportScriptErrors`, `ResourceBookingExchangeSyncVersion`, `SelectedGlobalFilterId`, `ShowWeekNumber`, `SplitViewState`, `SyncContactCompany`, `SystemUserId`, `TableScopedDVSearchFeatureTeachingBubbleViews`, `TableScopedDVSearchQuickFindTeachingBubbleViews`, `TimeFormatCode`, `TimeFormatString`, `TimeSeparator`, `TimeZoneBias`, `TimeZoneCode`, `TimeZoneDaylightBias`, `TimeZoneDaylightDay`, `TimeZoneDaylightDayOfWeek`, `TimeZoneDaylightHour`, `TimeZoneDaylightMinute`, `TimeZoneDaylightMonth`, `TimeZoneDaylightSecond`, `TimeZoneDaylightYear`, `TimeZoneStandardBias`, `TimeZoneStandardDay`, `TimeZoneStandardDayOfWeek`, `TimeZoneStandardHour`, `TimeZoneStandardMinute`, `TimeZoneStandardMonth`, `TimeZoneStandardSecond`, `TimeZoneStandardYear`, `TrackingTokenId`, `TransactionCurrencyId`, `TryToggleSets`, `TryToggleStatus`, `UILanguageId`, `UseCrmFormForAppointment`, `UseCrmFormForContact`, `UseCrmFormForEmail`, `UseCrmFormForTask`, `UseImageStrips`, `UserProfile`, `VisualizationPaneLayout`, `WorkdayStartTime`, `WorkdayStopTime`

### Read-only

`AllowEmailCredentials`, `BusinessUnitIdName`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EmailPassword`, `EmailUsername`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_user_settings` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid_businessunit` |
| `lk_usersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_usersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_usersettingsbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_usersettingsbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `transactioncurrency_usersettings` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_settings` | [systemuser](systemuser.md) | `systemuserid` | `systemuserid_systemuser` |
| `user_settings_preferred_solution` | [solution](solution.md) | `preferredsolution` | `preferredsolution` |



## Source

Generated from [usersettings.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/usersettings.md) on 2026-05-06.