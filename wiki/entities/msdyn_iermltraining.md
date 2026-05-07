---
logical: "msdyn_iermltraining"
display: "Effort model training details"
entitySetName: "msdyn_iermltrainings"
primaryId: "msdyn_iermltrainingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Effort model training details

Indicates model's training details

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iermltraining` |
| Display name | Effort model training details |
| Display (plural) | Models training details |
| Schema name | `msdyn_iermltraining` |
| Entity set (Web API) | `msdyn_iermltrainings` |
| Primary id attribute | `msdyn_iermltrainingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iermltrainings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iermltrainings(<guid>)
POST /api/data/v9.2/msdyn_iermltrainings
PATCH /api/data/v9.2/msdyn_iermltrainings(<guid>)
DELETE /api/data/v9.2/msdyn_iermltrainings(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_errordetails`, `msdyn_iermlmodelid`, `msdyn_iermltrainingId`, `msdyn_mltrainingstatus`, `msdyn_name`, `msdyn_publishaiconfiguration`, `msdyn_publishedon`, `msdyn_trainaiconfiguration`, `msdyn_trainedon`, `msdyn_trainingdatacount`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iermltraining` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iermltraining_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iermltraining_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iermltraining_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iermltraining_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_iermltraining_iermlmodel` | [msdyn_iermlmodel](msdyn_iermlmodel.md) | `msdyn_iermlmodelid` | `msdyn_iermlmodelid` |
| `msdyn_iermltraining_publishaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_publishaiconfiguration` | `msdyn_publishaiconfiguration` |
| `msdyn_iermltraining_trainaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainaiconfiguration` | `msdyn_trainaiconfiguration` |
| `owner_msdyn_iermltraining` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iermltraining` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iermltraining` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iermltraining_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermltraining_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermltraining_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iermltraining_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iermltraining_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermltraining_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iermltraining_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermltraining_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_iermltraining.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iermltraining.md) on 2026-05-06.