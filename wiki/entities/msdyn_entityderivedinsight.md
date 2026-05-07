---
logical: "msdyn_entityderivedinsight"
display: "Entity derived insights"
entitySetName: "msdyn_entityderivedinsights"
primaryId: "msdyn_entityderivedinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Entity derived insights

Entity derived insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityderivedinsight` |
| Display name | Entity derived insights |
| Display (plural) | Entity derived insights |
| Schema name | `msdyn_entityderivedinsight` |
| Entity set (Web API) | `msdyn_entityderivedinsights` |
| Primary id attribute | `msdyn_entityderivedinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityderivedinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityderivedinsights(<guid>)
POST /api/data/v9.2/msdyn_entityderivedinsights
PATCH /api/data/v9.2/msdyn_entityderivedinsights(<guid>)
DELETE /api/data/v9.2/msdyn_entityderivedinsights(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_dataformatversion`, `msdyn_entityderivedinsightId`, `msdyn_entityrecordid`, `msdyn_entitytypename`, `msdyn_externalcrmorgid`, `msdyn_insightlocale`, `msdyn_insightsdata`, `msdyn_Name`, `msdyn_processedtimestamp`, `msdyn_processingretrycount`, `msdyn_status`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityderivedinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityderivedinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityderivedinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityderivedinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_entityderivedinsight` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_derivedinsightsrelatedentity_derivedinsight_msdyn_entityderivedinsight` | _n/a_ | `msdyn_derivedinsight` | _n/a_ |
| `msdyn_entityderivedinsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityderivedinsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityderivedinsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityderivedinsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityderivedinsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityderivedinsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entityderivedinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_entityderivedinsight.md) on 2026-05-06.