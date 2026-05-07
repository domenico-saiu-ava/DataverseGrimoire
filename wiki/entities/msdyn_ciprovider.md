---
logical: "msdyn_ciprovider"
display: "Channel Integration Framework v1.0 Provider"
entitySetName: "msdyn_ciproviders"
primaryId: "msdyn_ciproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Channel Integration Framework v1.0 Provider

Entity that holds the configuration data for a channel provider based on Channel Integration Framework v1.0

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ciprovider` |
| Display name | Channel Integration Framework v1.0 Provider |
| Display (plural) | Channel Integration Framework v1.0 Providers |
| Schema name | `msdyn_ciprovider` |
| Entity set (Web API) | `msdyn_ciproviders` |
| Primary id attribute | `msdyn_ciproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ciproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ciproviders(<guid>)
POST /api/data/v9.2/msdyn_ciproviders
PATCH /api/data/v9.2/msdyn_ciproviders(<guid>)
DELETE /api/data/v9.2/msdyn_ciproviders(<guid>)
```

## Attributes

Writable: **21** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_AppSelector`, `msdyn_channelprovidericon`, `msdyn_cifsolversion`, `msdyn_ciproviderapiversion`, `msdyn_ciproviderId`, `msdyn_ClickToAct`, `msdyn_customparams`, `msdyn_EnableAnalytics`, `msdyn_Label`, `msdyn_LandingUrl`, `msdyn_name`, `msdyn_RoleSelector`, `msdyn_sandboxconfiguration`, `msdyn_SortOrder`, `msdyn_trusteddomain`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ciprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ciprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ciprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ciprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_webresource_ciprovider_channelprovidericon` | [webresource](webresource.md) | `msdyn_channelprovidericon` | `msdyn_channelprovidericon` |
| `organization_msdyn_ciprovider` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ciprovider_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ciprovider_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ciprovider_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ciprovider_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ciprovider_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ciprovider_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ciprovider_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ciprovider_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ciprovider_systemuser_membership` | [msdyn_ciproviderid](msdyn_ciproviderid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_ciprovider.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ciprovider.md) on 2026-05-06.