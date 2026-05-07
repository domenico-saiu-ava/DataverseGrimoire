---
logical: "msdyn_agentresourceforecasting"
display: "Agent Resource Forecasting"
entitySetName: "msdyn_agentresourceforecastings"
primaryId: "msdyn_agentresourceforecastingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Agent Resource Forecasting

Agent Resource Forecasting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentresourceforecasting` |
| Display name | Agent Resource Forecasting |
| Display (plural) | Agent Resource Forecastings |
| Schema name | `msdyn_agentresourceforecasting` |
| Entity set (Web API) | `msdyn_agentresourceforecastings` |
| Primary id attribute | `msdyn_agentresourceforecastingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentresourceforecastings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentresourceforecastings(<guid>)
POST /api/data/v9.2/msdyn_agentresourceforecastings
PATCH /api/data/v9.2/msdyn_agentresourceforecastings(<guid>)
DELETE /api/data/v9.2/msdyn_agentresourceforecastings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_agentresourceforecastingId`, `msdyn_channel`, `msdyn_concurrency`, `msdyn_name`, `msdyn_servicetime`, `msdyn_shrinkage`, `msdyn_sla`, `msdyn_type`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentresourceforecasting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentresourceforecasting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentresourceforecasting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentresourceforecasting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_occhannelconfiguration_msdyn_agentresourceforecasting_channel` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `msdyn_channel` | `msdyn_channel` |
| `organization_msdyn_agentresourceforecasting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentresourceforecasting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentresourceforecasting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentresourceforecasting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentresourceforecasting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentresourceforecasting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentresourceforecasting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentresourceforecasting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentresourceforecasting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentresourceforecasting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentresourceforecasting.md) on 2026-05-06.