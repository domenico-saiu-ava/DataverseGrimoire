---
logical: "powerbimashupparameter"
display: "Power BI Mashup Parameter"
entitySetName: "powerbimashupparameters"
primaryId: "powerbimashupparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Power BI Mashup Parameter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbimashupparameter` |
| Display name | Power BI Mashup Parameter |
| Display (plural) | Power BI Mashup Parameters |
| Schema name | `powerbimashupparameter` |
| Entity set (Web API) | `powerbimashupparameters` |
| Primary id attribute | `powerbimashupparameterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerbimashupparameters?$select=name&$top=10
GET /api/data/v9.2/powerbimashupparameters(<guid>)
POST /api/data/v9.2/powerbimashupparameters
PATCH /api/data/v9.2/powerbimashupparameters(<guid>)
DELETE /api/data/v9.2/powerbimashupparameters(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`DatasetId`, `EnvironmentVariableId`, `ImportSequenceNumber`, `IsCustomizable`, `IsNotRequired`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParameterLiteralValue`, `ParameterName`, `ParameterValueSource`, `powerbimashupparameterId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerbimashupparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `envvardefinition_powerbimashupparameter` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariableid` | `EnvironmentVariableId` |
| `lk_powerbimashupparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbimashupparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbimashupparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbimashupparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerbimashupparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `powerbidataset_powerbimashupparameter` | [powerbidataset](powerbidataset.md) | `datasetid` | `DatasetId` |
| `team_powerbimashupparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerbimashupparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbimashupparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbimashupparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbimashupparameter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerbimashupparameter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerbimashupparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbimashupparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerbimashupparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerbimashupparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerbimashupparameter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerbimashupparameter.md) on 2026-05-06.