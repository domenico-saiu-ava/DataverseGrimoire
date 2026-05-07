---
logical: "msdyn_iermlmodel"
display: "Effort estimation model"
entitySetName: "msdyn_iermlmodels"
primaryId: "msdyn_iermlmodelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Effort estimation model

Indicates the OmniChannel Model for the corresponding AI model

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_iermlmodel` |
| Display name | Effort estimation model |
| Display (plural) | Effort estimation model |
| Schema name | `msdyn_iermlmodel` |
| Entity set (Web API) | `msdyn_iermlmodels` |
| Primary id attribute | `msdyn_iermlmodelid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_iermlmodels?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_iermlmodels(<guid>)
POST /api/data/v9.2/msdyn_iermlmodels
PATCH /api/data/v9.2/msdyn_iermlmodels(<guid>)
DELETE /api/data/v9.2/msdyn_iermlmodels(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_aimodelid`, `msdyn_iermlmodelId`, `msdyn_iermlmodelstatus`, `msdyn_iermlmodeltrainingstatus`, `msdyn_name`, `msdyn_trainingconfiguration`, `msdyn_UniqueName`, `msdyn_wizarddata`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_iermlmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_iermlmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_iermlmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_iermlmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_iermlmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_iermlmodel_aimodelid_msdyn` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |
| `owner_msdyn_iermlmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_iermlmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_iermlmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_iermlmodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermlmodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermlmodel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_iermlmodel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_iermlmodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermlmodel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_iermlmodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermlmodel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_iermltraining_iermlmodel` | _n/a_ | `msdyn_iermlmodelid` | _n/a_ |


## Source

Generated from [msdyn_iermlmodel.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_iermlmodel.md) on 2026-05-06.