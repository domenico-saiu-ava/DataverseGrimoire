---
logical: "msdyn_provider"
display: "Provider"
entitySetName: "msdyn_providers"
primaryId: "msdyn_providerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Provider

A list of third-party providers that bring capabilities into the application.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_provider` |
| Display name | Provider |
| Display (plural) | Providers |
| Schema name | `msdyn_provider` |
| Entity set (Web API) | `msdyn_providers` |
| Primary id attribute | `msdyn_providerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_providers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_providers(<guid>)
POST /api/data/v9.2/msdyn_providers
PATCH /api/data/v9.2/msdyn_providers(<guid>)
DELETE /api/data/v9.2/msdyn_providers(<guid>)
```

## Attributes

Writable: **8** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_providerId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_provider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_provider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_provider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_provider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_provider` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_provider_msdyn_channelcapability_Provider` | _n/a_ | `msdyn_provider` | _n/a_ |
| `msdyn_provider_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_provider_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_provider_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_provider_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_provider_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_provider_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_provider_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_provider_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_provider.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_provider.md) on 2026-05-06.