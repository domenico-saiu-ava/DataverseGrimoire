---
logical: "msdynmkt_consent"
display: "Consent"
entitySetName: "msdynmkt_consents"
primaryId: "msdynmkt_consentid"
primaryName: "msdynmkt_profileid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Consent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consent` |
| Display name | Consent |
| Display (plural) | Consents |
| Schema name | `msdynmkt_consent` |
| Entity set (Web API) | `msdynmkt_consents` |
| Primary id attribute | `msdynmkt_consentid` |
| Primary name attribute | `msdynmkt_profileid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consents?$select=msdynmkt_profileid&$top=10
GET /api/data/v9.2/msdynmkt_consents(<guid>)
POST /api/data/v9.2/msdynmkt_consents
PATCH /api/data/v9.2/msdynmkt_consents(<guid>)
DELETE /api/data/v9.2/msdynmkt_consents(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdynmkt_AllowEmail`, `msdynmkt_AllowSMS`, `msdynmkt_AllowTracking`, `msdynmkt_changesource`, `msdynmkt_consentId`, `msdynmkt_profileId`, `msdynmkt_reason`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_consent` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consent_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consent_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consent_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_consent_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_consent_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consent_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consent_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consent_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_consent.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consent.md) on 2026-05-06.