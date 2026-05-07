---
logical: "msdyn_shareasconfiguration"
display: "ShareAs Configuration"
entitySetName: "msdyn_shareasconfigurations"
primaryId: "msdyn_shareasconfigurationid"
primaryName: "msdyn_shareashashid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# ShareAs Configuration

ShareAs Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_shareasconfiguration` |
| Display name | ShareAs Configuration |
| Display (plural) | ShareAs Configuration |
| Schema name | `msdyn_shareasconfiguration` |
| Entity set (Web API) | `msdyn_shareasconfigurations` |
| Primary id attribute | `msdyn_shareasconfigurationid` |
| Primary name attribute | `msdyn_shareashashid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_shareasconfigurations?$select=msdyn_shareashashid&$top=10
GET /api/data/v9.2/msdyn_shareasconfigurations(<guid>)
POST /api/data/v9.2/msdyn_shareasconfigurations
PATCH /api/data/v9.2/msdyn_shareasconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_shareasconfigurations(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_forecastconfigurationid`, `msdyn_hierarchyrecordid`, `msdyn_shareasconfigurationId`, `msdyn_shareashashid`, `msdyn_sharedbyuserid`, `msdyn_sharedon`, `msdyn_sharedwithuserid`, `msdyn_sharelevel`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_shareasconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_shareasconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_shareasconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_shareasconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastconfiguration_msdyn_shareasconfiguration_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |
| `msdyn_msdyn_shareasconfiguration_sharedbyuserid` | [systemuser](systemuser.md) | `msdyn_sharedbyuserid` | `msdyn_sharedbyuserid` |
| `msdyn_msdyn_shareasconfiguration_sharedwithuserid` | [systemuser](systemuser.md) | `msdyn_sharedwithuserid` | `msdyn_sharedwithuserid` |
| `organization_msdyn_shareasconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_shareasconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_shareasconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_shareasconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_shareasconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_shareasconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_shareasconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_shareasconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_shareasconfiguration.md) on 2026-05-06.