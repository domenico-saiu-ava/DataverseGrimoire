---
logical: "msdynmkt_consentproviderlocalization"
display: "Consent provider Localization"
entitySetName: "msdynmkt_consentproviderlocalizations"
primaryId: "msdynmkt_consentproviderlocalizationid"
primaryName: "msdynmkt_localizationkey"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Consent provider Localization

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentproviderlocalization` |
| Display name | Consent provider Localization |
| Display (plural) | Consent provider Localizations |
| Schema name | `msdynmkt_ConsentproviderLocalization` |
| Entity set (Web API) | `msdynmkt_consentproviderlocalizations` |
| Primary id attribute | `msdynmkt_consentproviderlocalizationid` |
| Primary name attribute | `msdynmkt_localizationkey` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentproviderlocalizations?$select=msdynmkt_localizationkey&$top=10
GET /api/data/v9.2/msdynmkt_consentproviderlocalizations(<guid>)
POST /api/data/v9.2/msdynmkt_consentproviderlocalizations
PATCH /api/data/v9.2/msdynmkt_consentproviderlocalizations(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentproviderlocalizations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdynmkt_ConsentproviderLocalizationId`, `msdynmkt_LCID`, `msdynmkt_LocalizationKey`, `msdynmkt_LocalizationValue`, `msdynmkt_msdynmkt_consentprovider`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentproviderlocalization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentproviderlocalization_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentproviderlocalization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentproviderlocalization_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdynmkt_ConsentproviderLocalization_msdynmk` | [msdynmkt_consentprovider](msdynmkt_consentprovider.md) | `msdynmkt_msdynmkt_consentprovider` | `msdynmkt_msdynmkt_consentprovider` |
| `organization_msdynmkt_consentproviderlocalization` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentproviderlocalization_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderlocalization_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderlocalization_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderlocalization_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdynmkt_consentproviderlocalization_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdynmkt_consentproviderlocalization_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdynmkt_consentproviderlocalization.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdynmkt_consentproviderlocalization.md) on 2026-05-06.