---
logical: "powerbimashupparameter"
display: "Parametro mashup Power BI"
entitySetName: "powerbimashupparameters"
primaryId: "powerbimashupparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parametro mashup Power BI

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerbimashupparameter` |
| Display name | Parametro mashup Power BI |
| Display (plural) | Parametri mashup Power BI |
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

Writable: **17** · Read-only: **16**

### Writable

`datasetid`, `environmentvariableid`, `importsequencenumber`, `iscustomizable`, `isnotrequired`, `name`, `overriddencreatedon`, `ownerid`, `parameterliteralvalue`, `parametername`, `parametervaluesource`, `powerbimashupparameterid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerbimashupparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerbimashupparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerbimashupparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerbimashupparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerbimashupparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerbimashupparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerbimashupparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerbimashupparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `envvardefinition_powerbimashupparameter` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariableid` | `EnvironmentVariableId` |
| `powerbidataset_powerbimashupparameter` | [powerbidataset](powerbidataset.md) | `datasetid` | `DatasetId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerbimashupparameter_SyncErrors` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbimashupparameter_DuplicateMatchingRecord` | [powerbimashupparameter](powerbimashupparameter.md) | `duplicaterecordid` | `duplicaterecordid_powerbimashupparameter` |
| `powerbimashupparameter_DuplicateBaseRecord` | [powerbimashupparameter](powerbimashupparameter.md) | `baserecordid` | `baserecordid_powerbimashupparameter` |
| `powerbimashupparameter_AsyncOperations` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbimashupparameter_MailboxTrackingFolders` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbimashupparameter_UserEntityInstanceDatas` | [powerbimashupparameter](powerbimashupparameter.md) | `objectid` | `objectid_powerbimashupparameter` |
| `powerbimashupparameter_ProcessSession` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbimashupparameter_BulkDeleteFailures` | [powerbimashupparameter](powerbimashupparameter.md) | `regardingobjectid` | `regardingobjectid_powerbimashupparameter` |
| `powerbimashupparameter_PrincipalObjectAttributeAccesses` | [powerbimashupparameter](powerbimashupparameter.md) | `objectid` | `objectid_powerbimashupparameter` |


## Source

Generated from [powerbimashupparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerbimashupparameter')) on 2026-05-07.