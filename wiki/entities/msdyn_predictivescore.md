---
logical: "msdyn_predictivescore"
display: "Predictive Score"
entitySetName: "msdyn_predictivescores"
primaryId: "msdyn_predictivescoreid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Predictive Score

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictivescore` |
| Display name | Predictive Score |
| Display (plural) | Predictive Score |
| Schema name | `msdyn_predictivescore` |
| Entity set (Web API) | `msdyn_predictivescores` |
| Primary id attribute | `msdyn_predictivescoreid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictivescores?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictivescores(<guid>)
POST /api/data/v9.2/msdyn_predictivescores
PATCH /api/data/v9.2/msdyn_predictivescores(<guid>)
DELETE /api/data/v9.2/msdyn_predictivescores(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_ContributingPredictionIDs`, `msdyn_EntityId`, `msdyn_EntityType`, `msdyn_Grade`, `msdyn_name`, `msdyn_predictivescoreId`, `msdyn_Score`, `msdyn_ScoredOn`, `msdyn_ScoreReasons`, `msdyn_ScoreTrend`, `msdyn_similaropportunities`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictivescore_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictivescore_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictivescore_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictivescore_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_predictivescore` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_predictivescore_lead` | _n/a_ | `msdyn_predictivescoreid` | _n/a_ |
| `msdyn_msdyn_predictivescore_opportunity` | _n/a_ | `msdyn_predictivescoreid` | _n/a_ |
| `msdyn_predictivescore_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescore_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescore_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_predictivescore_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_predictivescore_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescore_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_predictivescore_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_predictivescore_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_PS_PMS` | _n/a_ | `msdyn_predictivescoreid` | _n/a_ |


## Source

Generated from [msdyn_predictivescore.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_predictivescore.md) on 2026-05-06.