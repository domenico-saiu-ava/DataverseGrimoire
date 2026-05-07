---
logical: "msdyn_ocskillidentmlmodel"
display: "Skill finder model"
entitySetName: "msdyn_ocskillidentmlmodels"
primaryId: "msdyn_ocskillidentmlmodelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Skill finder model

Indicates the OmniChannel Model for the corresponding AI model

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocskillidentmlmodel` |
| Display name | Skill finder model |
| Display (plural) | Skill finder models |
| Schema name | `msdyn_ocskillidentmlmodel` |
| Entity set (Web API) | `msdyn_ocskillidentmlmodels` |
| Primary id attribute | `msdyn_ocskillidentmlmodelid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocskillidentmlmodels?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocskillidentmlmodels(<guid>)
POST /api/data/v9.2/msdyn_ocskillidentmlmodels
PATCH /api/data/v9.2/msdyn_ocskillidentmlmodels(<guid>)
DELETE /api/data/v9.2/msdyn_ocskillidentmlmodels(<guid>)
```

## Attributes

Writable: **17** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_aimodelid`, `msdyn_name`, `msdyn_ocskillidentmlmodelId`, `msdyn_ocskillidentmlmodelstatus`, `msdyn_ocskillidentmlmodeltrainingstatus`, `msdyn_trainingconfiguration`, `msdyn_UniqueName`, `msdyn_wizzarddata`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocskillidentmlmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocskillidentmlmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocskillidentmlmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocskillidentmlmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocskillidentmlmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_ocskillidentmlmodel_aimodelid_msdyn` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |
| `owner_msdyn_ocskillidentmlmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocskillidentmlmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocskillidentmlmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsimltraining_ocskillidentmlmodeli` | _n/a_ | `msdyn_ocskillidentmlmodelid` | _n/a_ |
| `msdyn_ocsitdimportconfig_ocskillidentmlmo` | _n/a_ | `msdyn_ocskillidentmlmodelid` | _n/a_ |
| `msdyn_ocsitrainingdata_ocskillidentmlmode` | _n/a_ | `msdyn_ocskillidentmlmodelid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocskillidentmlmodel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocskillidentmlmodel.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocskillidentmlmodel.md) on 2026-05-06.