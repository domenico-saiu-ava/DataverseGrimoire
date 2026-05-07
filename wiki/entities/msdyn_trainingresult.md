---
logical: "msdyn_trainingresult"
display: "Training Result"
entitySetName: "msdyn_trainingresults"
primaryId: "msdyn_trainingresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Training Result

Stores Training results for the model

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_trainingresult` |
| Display name | Training Result |
| Display (plural) | Training Results |
| Schema name | `msdyn_trainingresult` |
| Entity set (Web API) | `msdyn_trainingresults` |
| Primary id attribute | `msdyn_trainingresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_trainingresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_trainingresults(<guid>)
POST /api/data/v9.2/msdyn_trainingresults
PATCH /api/data/v9.2/msdyn_trainingresults(<guid>)
DELETE /api/data/v9.2/msdyn_trainingresults(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_ModelAccuracyMetrics`, `msdyn_ModelId`, `msdyn_name`, `msdyn_PredictionDistribution`, `msdyn_PredictionGuid`, `msdyn_PredictionName`, `msdyn_trainingresultId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_trainingresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_trainingresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_trainingresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_trainingresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_trainingresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_trainingresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_trainingresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_trainingresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_trainingresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_trainingresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_trainingresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_trainingresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_trainingresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_trainingresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_trainingresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_trainingresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_trainingresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_trainingresult.md) on 2026-05-06.