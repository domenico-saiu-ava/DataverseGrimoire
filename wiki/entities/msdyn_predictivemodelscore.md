---
logical: "msdyn_predictivemodelscore"
display: "Predictive Model Score"
entitySetName: "msdyn_predictivemodelscores"
primaryId: "msdyn_predictivemodelscoreid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Predictive Model Score

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictivemodelscore` |
| Display name | Predictive Model Score |
| Display (plural) | Predictive Model Score |
| Schema name | `msdyn_predictivemodelscore` |
| Entity set (Web API) | `msdyn_predictivemodelscores` |
| Primary id attribute | `msdyn_predictivemodelscoreid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictivemodelscores?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictivemodelscores(<guid>)
POST /api/data/v9.2/msdyn_predictivemodelscores
PATCH /api/data/v9.2/msdyn_predictivemodelscores(<guid>)
DELETE /api/data/v9.2/msdyn_predictivemodelscores(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_EntityId`, `msdyn_EntityType`, `msdyn_Grade`, `msdyn_ModelName`, `msdyn_name`, `msdyn_PredictionID`, `msdyn_predictivemodelscoreId`, `msdyn_PredictiveScoreId`, `msdyn_Score`, `msdyn_ScoredOn`, `msdyn_ScoreHistory`, `msdyn_ScoreReasons`, `msdyn_ScoreTrend`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictivemodelscore_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictivemodelscore_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictivemodelscore_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictivemodelscore_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_PS_PMS` | [msdyn_predictivescore](msdyn_predictivescore.md) | `msdyn_predictivescoreid` | `msdyn_PredictiveScoreId` |
| `organization_msdyn_predictivemodelscore` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictivemodelscore_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivemodelscore_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivemodelscore_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_predictivemodelscore_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_predictivemodelscore_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_predictivemodelscore_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivemodelscore_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_predictivemodelscore.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_predictivemodelscore.md) on 2026-05-06.