---
logical: "service"
display: "Service"
entitySetName: "services"
primaryId: "serviceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
synonyms_it: ["servizio", "servizi"]
synonyms_en: ["service"]
---

# Service

Activity that represents work done to satisfy a customer's need.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `service` |
| Display name | Service |
| Display (plural) | Services |
| Schema name | `Service` |
| Entity set (Web API) | `services` |
| Primary id attribute | `serviceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/services?$select=name&$top=10
GET /api/data/v9.2/services(<guid>)
POST /api/data/v9.2/services
PATCH /api/data/v9.2/services(<guid>)
DELETE /api/data/v9.2/services(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`AnchorOffset`, `CalendarId`, `Description`, `Duration`, `Granularity`, `ImportSequenceNumber`, `InitialStatusCode`, `IsSchedulable`, `IsVisible`, `Name`, `OverriddenCreatedOn`, `ResourceSpecId`, `ServiceId`, `ShowResources`, `StrategyId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `calendar_services` | [calendar](calendar.md) | `calendarid` | `calendarid_calendar` |
| `lk_service_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_service_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_service_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_service_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_services` | [organization](organization.md) | `organizationid` | `organizationid` |
| `plugin_type_service` | [plugintype](plugintype.md) | `strategyid` | `strategyid` |
| `resource_spec_services` | [resourcespec](resourcespec.md) | `resourcespecid` | `resourcespecid` |

### One-to-Many (37)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_inviteredemption_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `adx_portalcomment_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `msdyn_copilottranscript_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `msdyn_ocliveworkitem_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `msdyn_ocsession_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `msfp_alert_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `msfp_surveyinvite_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `msfp_surveyresponse_service_serviceid` | _n/a_ | `serviceid` | _n/a_ |
| `service_accounts` | _n/a_ | `preferredserviceid` | _n/a_ |
| `service_activity_pointers` | _n/a_ | `serviceid` | _n/a_ |
| `service_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `service_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Service_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `service_appointments` | _n/a_ | `serviceid` | _n/a_ |
| `Service_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Service_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `service_calendar_rules` | _n/a_ | `serviceid` | _n/a_ |
| `service_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `service_contacts` | _n/a_ | `preferredserviceid` | _n/a_ |
| `Service_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Service_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `service_emails` | _n/a_ | `serviceid` | _n/a_ |
| `service_faxes` | _n/a_ | `serviceid` | _n/a_ |
| `service_incidentresolutions` | _n/a_ | `serviceid` | _n/a_ |
| `service_letters` | _n/a_ | `serviceid` | _n/a_ |
| `service_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `service_opportunityclose` | _n/a_ | `serviceid` | _n/a_ |
| `service_orderclose` | _n/a_ | `serviceid` | _n/a_ |
| `service_phonecalls` | _n/a_ | `serviceid` | _n/a_ |
| `service_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `Service_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `service_quoteclose` | _n/a_ | `serviceid` | _n/a_ |
| `service_recurringappointmentmasters` | _n/a_ | `serviceid` | _n/a_ |
| `service_service_appointments` | _n/a_ | `serviceid` | _n/a_ |
| `service_socialactivities` | _n/a_ | `serviceid` | _n/a_ |
| `Service_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `service_tasks` | _n/a_ | `serviceid` | _n/a_ |


## Source

Generated from [service.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/service.md) on 2026-05-06.