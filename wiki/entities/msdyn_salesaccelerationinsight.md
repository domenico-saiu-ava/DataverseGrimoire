---
logical: "msdyn_salesaccelerationinsight"
display: "Sales acceleration insights"
entitySetName: "msdyn_salesaccelerationinsights"
primaryId: "msdyn_salesaccelerationinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sales acceleration insights

Sales acceleration insights

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesaccelerationinsight` |
| Display name | Sales acceleration insights |
| Display (plural) | Sales acceleration insights |
| Schema name | `msdyn_salesaccelerationinsight` |
| Entity set (Web API) | `msdyn_salesaccelerationinsights` |
| Primary id attribute | `msdyn_salesaccelerationinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesaccelerationinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesaccelerationinsights(<guid>)
POST /api/data/v9.2/msdyn_salesaccelerationinsights
PATCH /api/data/v9.2/msdyn_salesaccelerationinsights(<guid>)
DELETE /api/data/v9.2/msdyn_salesaccelerationinsights(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_name`, `msdyn_relatedrecord`, `msdyn_salesaccelerationinsightId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesaccelerationinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesaccelerationinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesaccelerationinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesaccelerationinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesaccelerationinsights_account` | [account](account.md) | `msdyn_relatedrecord` | `msdyn_relatedrecord` |
| `organization_msdyn_salesaccelerationinsight` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_insightsid_salesaccelerationinsights` | _n/a_ | `msdyn_salesaccelerationinsightid` | _n/a_ |
| `msdyn_salesaccelerationinsight_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationinsight_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationinsight_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesaccelerationinsight_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesaccelerationinsight_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationinsight_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesaccelerationinsight_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationinsight_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesaccelerationinsight.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesaccelerationinsight.md) on 2026-05-06.