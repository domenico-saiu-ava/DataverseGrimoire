---
logical: "site"
display: "Site"
entitySetName: "sites"
primaryId: "siteid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Site

Location or branch office where an organization does business. An organization can have multiple sites.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `site` |
| Display name | Site |
| Display (plural) | Sites |
| Schema name | `Site` |
| Entity set (Web API) | `sites` |
| Primary id attribute | `siteid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sites?$select=name&$top=10
GET /api/data/v9.2/sites(<guid>)
POST /api/data/v9.2/sites
PATCH /api/data/v9.2/sites(<guid>)
DELETE /api/data/v9.2/sites(<guid>)
```

## Attributes

Writable: **50** · Read-only: **8**

### Writable

`Address1_AddressId`, `Address1_AddressTypeCode`, `Address1_City`, `Address1_Country`, `Address1_County`, `Address1_Fax`, `Address1_Latitude`, `Address1_Line1`, `Address1_Line2`, `Address1_Line3`, `Address1_Longitude`, `Address1_Name`, `Address1_PostalCode`, `Address1_PostOfficeBox`, `Address1_ShippingMethodCode`, `Address1_StateOrProvince`, `Address1_Telephone1`, `Address1_Telephone2`, `Address1_Telephone3`, `Address1_UPSZone`, `Address1_UTCOffset`, `Address2_AddressId`, `Address2_AddressTypeCode`, `Address2_City`, `Address2_Country`, `Address2_County`, `Address2_Fax`, `Address2_Latitude`, `Address2_Line1`, `Address2_Line2`, `Address2_Line3`, `Address2_Longitude`, `Address2_Name`, `Address2_PostalCode`, `Address2_PostOfficeBox`, `Address2_ShippingMethodCode`, `Address2_StateOrProvince`, `Address2_Telephone1`, `Address2_Telephone2`, `Address2_Telephone3`, `Address2_UPSZone`, `Address2_UTCOffset`, `EMailAddress`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `SiteId`, `TimeZoneCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_site_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_site_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_sitebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sitebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_sites` | [organization](organization.md) | `organizationid` | `organizationid_organization` |

### One-to-Many (32)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `site_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Site_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Site_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_equipment` | _n/a_ | `siteid` | _n/a_ |
| `site_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `Site_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_resources` | _n/a_ | `siteid` | _n/a_ |
| `site_service_appointments` | _n/a_ | `siteid` | _n/a_ |
| `site_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Site_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `site_system_users` | _n/a_ | `siteid` | _n/a_ |
| `site_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [site.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/site.md) on 2026-05-06.