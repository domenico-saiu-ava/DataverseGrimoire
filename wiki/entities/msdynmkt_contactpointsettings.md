---
logical: "msdynmkt_contactpointsettings"
display: "Contact Point Settings"
entitySetName: "msdynmkt_contactpointsettingses"
primaryId: "msdynmkt_contactpointsettingsid"
primaryName: "msdynmkt_entityname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Contact Point Settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_contactpointsettings` |
| Display name | Contact Point Settings |
| Display (plural) | Contact Point Settings |
| Schema name | `msdynmkt_contactpointsettings` |
| Entity set (Web API) | `msdynmkt_contactpointsettingses` |
| Primary id attribute | `msdynmkt_contactpointsettingsid` |
| Primary name attribute | `msdynmkt_entityname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_contactpointsettingses?$select=msdynmkt_entityname&$top=10
GET /api/data/v9.2/msdynmkt_contactpointsettingses(<guid>)
POST /api/data/v9.2/msdynmkt_contactpointsettingses
PATCH /api/data/v9.2/msdynmkt_contactpointsettingses(<guid>)
DELETE /api/data/v9.2/msdynmkt_contactpointsettingses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdynmkt_contactablefields`, `msdynmkt_contactpointsettingsId`, `msdynmkt_contactpointtype`, `msdynmkt_emailaddressfields`, `msdynmkt_entityname`, `msdynmkt_phonenumberfields`, `msdynmkt_timezonefields`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_contactpointsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_contactpointsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_contactpointsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_contactpointsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_contactpointsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_contactpointsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_contactpointsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_contactpointsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_contactpointsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_contactpointsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_contactpointsettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_contactpointsettings.md) on 2026-05-06.