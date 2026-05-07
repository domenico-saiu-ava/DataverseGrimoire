---
logical: "msdyn_forecastdefinition"
display: "Forecast definition"
entitySetName: "msdyn_forecastdefinitions"
primaryId: "msdyn_forecastdefinitionid"
primaryName: "msdyn_forecastdefinitionname"
tableType: "Standard"
ownership: "UserOwned"
---

# Forecast definition

Defines the parameters used for forecasting.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastdefinition` |
| Display name | Forecast definition |
| Display (plural) | Forecast definitions |
| Schema name | `msdyn_forecastdefinition` |
| Entity set (Web API) | `msdyn_forecastdefinitions` |
| Primary id attribute | `msdyn_forecastdefinitionid` |
| Primary name attribute | `msdyn_forecastdefinitionname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastdefinitions?$select=msdyn_forecastdefinitionname&$top=10
GET /api/data/v9.2/msdyn_forecastdefinitions(<guid>)
POST /api/data/v9.2/msdyn_forecastdefinitions
PATCH /api/data/v9.2/msdyn_forecastdefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_forecastdefinitions(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_fiscalmonth`, `msdyn_fiscalquarter`, `msdyn_fiscalyear`, `msdyn_forecastdefinitionId`, `msdyn_forecastdefinitionname`, `msdyn_forecastperiodtype`, `msdyn_metricid`, `msdyn_numberofrecurrences`, `msdyn_quotasource`, `msdyn_rollupquery`, `msdyn_validfrom`, `msdyn_validto`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_forecastdefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_forecastdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery` | [goalrollupquery](goalrollupquery.md) | `msdyn_rollupquery` | `msdyn_rollupquery` |
| `msdyn_metric_msdyn_forecastdefinition_metricid` | [metric](metric.md) | `msdyn_metricid` | `msdyn_metricid` |
| `owner_msdyn_forecastdefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_forecastdefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_forecastdefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastdefinition_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastdefinition_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastdefinition_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_forecastdefinition_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_forecastdefinition_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastdefinition_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastdefinition_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastdefinition_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastinstance` | _n/a_ | `msdyn_forecastdefinitionid` | _n/a_ |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence` | _n/a_ | `msdyn_forecastdefinitionid` | _n/a_ |


## Source

Generated from [msdyn_forecastdefinition.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastdefinition.md) on 2026-05-06.