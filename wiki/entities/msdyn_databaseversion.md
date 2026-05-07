---
logical: "msdyn_databaseversion"
display: "Database Version"
entitySetName: "msdyn_databaseversions"
primaryId: "msdyn_databaseversionid"
primaryName: "msdyn_solutionname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Database Version

Stores the latest database version for a solution, for internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_databaseversion` |
| Display name | Database Version |
| Display (plural) | Database Version |
| Schema name | `msdyn_databaseversion` |
| Entity set (Web API) | `msdyn_databaseversions` |
| Primary id attribute | `msdyn_databaseversionid` |
| Primary name attribute | `msdyn_solutionname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_databaseversions?$select=msdyn_solutionname&$top=10
GET /api/data/v9.2/msdyn_databaseversions(<guid>)
POST /api/data/v9.2/msdyn_databaseversions
PATCH /api/data/v9.2/msdyn_databaseversions(<guid>)
DELETE /api/data/v9.2/msdyn_databaseversions(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`CreatedOn`, `ImportSequenceNumber`, `msdyn_databaseversionId`, `msdyn_dbversion`, `msdyn_solutionname`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_databaseversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_databaseversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_databaseversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_databaseversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_databaseversion` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_databaseversion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_databaseversion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_databaseversion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_databaseversion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_databaseversion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_databaseversion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_databaseversion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_databaseversion.md) on 2026-05-06.