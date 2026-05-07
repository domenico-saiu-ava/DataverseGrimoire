---
logical: "msdynmkt_consentcenterconfiguration"
display: "CXP Consent Center Configuration"
entitySetName: "msdynmkt_consentcenterconfigurations"
primaryId: "msdynmkt_consentcenterconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# CXP Consent Center Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentcenterconfiguration` |
| Display name | CXP Consent Center Configuration |
| Display (plural) | CXP Consent Center Configurations |
| Schema name | `msdynmkt_consentcenterconfiguration` |
| Entity set (Web API) | `msdynmkt_consentcenterconfigurations` |
| Primary id attribute | `msdynmkt_consentcenterconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentcenterconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentcenterconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_consentcenterconfigurations
PATCH /api/data/v9.2/msdynmkt_consentcenterconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentcenterconfigurations(<guid>)
```

## Attributes

Writable: **8** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdynmkt_consentcenterconfigurationId`, `msdynmkt_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentcenterconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentcenterconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentcenterconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentcenterconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_consentcenterconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentcenterconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentcenterconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentcenterconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdynmkt_consentcenterconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdynmkt_consentcenterconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentcenterconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consentcenterconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentcenterconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_consentcenterconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consentcenterconfiguration.md) on 2026-05-06.