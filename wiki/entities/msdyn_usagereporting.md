---
logical: "msdyn_usagereporting"
display: "Sales usage reporting"
entitySetName: "msdyn_usagereporting"
primaryId: "msdyn_usagereportingid"
primaryName: "msdyn_userId"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sales usage reporting

Sales usage reporting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_usagereporting` |
| Display name | Sales usage reporting |
| Display (plural) | Sales usage reporting |
| Schema name | `msdyn_usagereporting` |
| Entity set (Web API) | `msdyn_usagereporting` |
| Primary id attribute | `msdyn_usagereportingid` |
| Primary name attribute | `msdyn_userId` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_usagereporting?$select=msdyn_userId&$top=10
GET /api/data/v9.2/msdyn_usagereporting(<guid>)
POST /api/data/v9.2/msdyn_usagereporting
PATCH /api/data/v9.2/msdyn_usagereporting(<guid>)
DELETE /api/data/v9.2/msdyn_usagereporting(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_date`, `msdyn_info`, `msdyn_usagereportingId`, `msdyn_userId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_usagereporting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_usagereporting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_usagereporting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_usagereporting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_usagereporting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_usagereporting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagereporting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagereporting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagereporting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_usagereporting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_usagereporting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_usagereporting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_usagereporting.md) on 2026-05-06.