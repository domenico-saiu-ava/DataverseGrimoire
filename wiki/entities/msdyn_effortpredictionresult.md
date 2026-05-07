---
logical: "msdyn_effortpredictionresult"
display: "Effort estimate"
entitySetName: "msdyn_effortpredictionresults"
primaryId: "msdyn_effortpredictionresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Effort estimate

Entity to persist effort model prediction results

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_effortpredictionresult` |
| Display name | Effort estimate |
| Display (plural) | Effort estimates |
| Schema name | `msdyn_effortpredictionresult` |
| Entity set (Web API) | `msdyn_effortpredictionresults` |
| Primary id attribute | `msdyn_effortpredictionresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_effortpredictionresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_effortpredictionresults(<guid>)
POST /api/data/v9.2/msdyn_effortpredictionresults
PATCH /api/data/v9.2/msdyn_effortpredictionresults(<guid>)
DELETE /api/data/v9.2/msdyn_effortpredictionresults(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_aimodelid`, `msdyn_effortconfidencescore`, `msdyn_effortpredictionresultId`, `msdyn_liveworkitemid`, `msdyn_name`, `msdyn_predictedeffort`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_effortpredictionresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_effortpredictionresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_effortpredictionresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_effortpredictionresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_effortpredictionresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |
| `msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_liveworkitemid` | `msdyn_liveworkitemid` |
| `owner_msdyn_effortpredictionresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_effortpredictionresult` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_effortpredictionresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_effortpredictionresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_effortpredictionresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_effortpredictionresult_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_effortpredictionresult_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_effortpredictionresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_effortpredictionresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_effortpredictionresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_effortpredictionresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult` | _n/a_ | `msdyn_effortpredictionresult` | _n/a_ |


## Source

Generated from [msdyn_effortpredictionresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_effortpredictionresult.md) on 2026-05-06.