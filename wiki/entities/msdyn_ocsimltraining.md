---
logical: "msdyn_ocsimltraining"
display: "Model training details"
entitySetName: "msdyn_ocsimltrainings"
primaryId: "msdyn_ocsimltrainingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Model training details

Indicates model's training details

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsimltraining` |
| Display name | Model training details |
| Display (plural) | Models training details |
| Schema name | `msdyn_ocsimltraining` |
| Entity set (Web API) | `msdyn_ocsimltrainings` |
| Primary id attribute | `msdyn_ocsimltrainingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsimltrainings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsimltrainings(<guid>)
POST /api/data/v9.2/msdyn_ocsimltrainings
PATCH /api/data/v9.2/msdyn_ocsimltrainings(<guid>)
DELETE /api/data/v9.2/msdyn_ocsimltrainings(<guid>)
```

## Attributes

Writable: **20** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_errordetails`, `msdyn_mltrainingstatus`, `msdyn_name`, `msdyn_ocsimltrainingId`, `msdyn_ocskillidentmlmodelid`, `msdyn_publishaiconfiguration`, `msdyn_publishedon`, `msdyn_trainaiconfiguration`, `msdyn_trainedon`, `msdyn_trainingdatacount`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocsimltraining` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocsimltraining_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsimltraining_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsimltraining_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsimltraining_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocsimltraining_ocskillidentmlmodeli` | [msdyn_ocskillidentmlmodel](msdyn_ocskillidentmlmodel.md) | `msdyn_ocskillidentmlmodelid` | `msdyn_ocskillidentmlmodelid` |
| `msdyn_ocsimltraining_publishaiconfigurati` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_publishaiconfiguration` | `msdyn_publishaiconfiguration` |
| `msdyn_ocsimltraining_trainaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainaiconfiguration` | `msdyn_trainaiconfiguration` |
| `owner_msdyn_ocsimltraining` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocsimltraining` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocsimltraining` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsimltraining_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsimltraining_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsimltraining_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocsimltraining_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocsimltraining_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsimltraining_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocsimltraining_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocsimltraining_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocsimltraining.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocsimltraining.md) on 2026-05-06.