---
logical: "msdyn_derivedinsightsrelatedentity"
display: "Derived insights related entity"
entitySetName: "msdyn_derivedinsightsrelatedentities"
primaryId: "msdyn_derivedinsightsrelatedentityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Derived insights related entity

Derived insights related entities

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_derivedinsightsrelatedentity` |
| Display name | Derived insights related entity |
| Display (plural) | Derived insights related entities |
| Schema name | `msdyn_derivedinsightsrelatedentity` |
| Entity set (Web API) | `msdyn_derivedinsightsrelatedentities` |
| Primary id attribute | `msdyn_derivedinsightsrelatedentityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_derivedinsightsrelatedentities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_derivedinsightsrelatedentities(<guid>)
POST /api/data/v9.2/msdyn_derivedinsightsrelatedentities
PATCH /api/data/v9.2/msdyn_derivedinsightsrelatedentities(<guid>)
DELETE /api/data/v9.2/msdyn_derivedinsightsrelatedentities(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_derivedinsight`, `msdyn_derivedinsightsrelatedentityId`, `msdyn_entityrecordid`, `msdyn_entitytypename`, `msdyn_keyfieldshash`, `msdyn_lastmodifiedtimestamp`, `msdyn_Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_derivedinsightsrelatedentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_derivedinsightsrelatedentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_derivedinsightsrelatedentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_derivedinsightsrelatedentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_derivedinsightsrelatedentity_derivedinsight_msdyn_entityderivedinsight` | [msdyn_entityderivedinsight](msdyn_entityderivedinsight.md) | `msdyn_derivedinsight` | `msdyn_derivedinsight` |
| `organization_msdyn_derivedinsightsrelatedentity` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_derivedinsightsrelatedentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_derivedinsightsrelatedentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_derivedinsightsrelatedentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_derivedinsightsrelatedentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_derivedinsightsrelatedentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_derivedinsightsrelatedentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_derivedinsightsrelatedentity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_derivedinsightsrelatedentity.md) on 2026-05-06.