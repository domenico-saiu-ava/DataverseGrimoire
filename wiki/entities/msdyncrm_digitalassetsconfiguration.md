---
logical: "msdyncrm_digitalassetsconfiguration"
display: "Digital assets configuration"
entitySetName: "msdyncrm_digitalassetsconfigurations"
primaryId: "msdyncrm_digitalassetsconfigurationid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Digital assets configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_digitalassetsconfiguration` |
| Display name | Digital assets configuration |
| Display (plural) | Digital assets configurations |
| Schema name | `msdyncrm_digitalassetsconfiguration` |
| Entity set (Web API) | `msdyncrm_digitalassetsconfigurations` |
| Primary id attribute | `msdyncrm_digitalassetsconfigurationid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_digitalassetsconfigurations?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_digitalassetsconfigurations(<guid>)
POST /api/data/v9.2/msdyncrm_digitalassetsconfigurations
PATCH /api/data/v9.2/msdyncrm_digitalassetsconfigurations(<guid>)
DELETE /api/data/v9.2/msdyncrm_digitalassetsconfigurations(<guid>)
```

## Attributes

Writable: **22** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyncrm_configcacheexpirationdate`, `msdyncrm_ConfigCacheExpirationPeriodInMs`, `msdyncrm_default`, `msdyncrm_digitalassetsconfigurationId`, `msdyncrm_DiscoveryEndpointUrl`, `msdyncrm_httptimeout`, `msdyncrm_IsCxpFlowEnabled`, `msdyncrm_IsInstallComplete`, `msdyncrm_librarystatus`, `msdyncrm_maxretryattempts`, `msdyncrm_migrationstatus`, `msdyncrm_name`, `msdyncrm_organization_config`, `msdyncrm_tokenauthenticationresource`, `msdyncrm_UseBasicAuth`, `msdyncrm_usedlibrary`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_digitalassetsconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_digitalassetsconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_digitalassetsconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_digitalassetsconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyncrm_digitalassetsconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_digitalassetsconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_digitalassetsconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_digitalassetsconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_digitalassetsconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_digitalassetsconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_digitalassetsconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_digitalassetsconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_digitalassetsconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyncrm_digitalassetsconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_digitalassetsconfiguration.md) on 2026-05-06.