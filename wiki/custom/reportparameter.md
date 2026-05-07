---
logical: "reportparameter"
display: "Report Parameter"
entitySetName: "reportparameters"
primaryId: "reportparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Report Parameter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `reportparameter` |
| Display name | Report Parameter |
| Display (plural) | Report Parameters |
| Schema name | `ReportParameter` |
| Entity set (Web API) | `reportparameters` |
| Primary id attribute | `reportparameterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/reportparameters?$select=name&$top=10
GET /api/data/v9.2/reportparameters(<guid>)
POST /api/data/v9.2/reportparameters
PATCH /api/data/v9.2/reportparameters(<guid>)
DELETE /api/data/v9.2/reportparameters(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`environmentvariabledefinitionid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `reportid`, `reportparameterid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `ownerid`, `owneridtype`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_reportparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_reportparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_reportparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_reportparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Report_ReportParameter_ReportId` | [report](report.md) | `reportid` | `Report_ReportParameters` |
| `EnvironmentVariableDefinition_ReportParameter_EvironmentVariableDefinitionId` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariabledefinitionid` | `EnvironmentVariableDefinition_ReportParameters` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `reportparameter_SyncErrors` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `reportparameter_DuplicateMatchingRecord` | [reportparameter](reportparameter.md) | `duplicaterecordid` | `duplicaterecordid_reportparameter` |
| `reportparameter_DuplicateBaseRecord` | [reportparameter](reportparameter.md) | `baserecordid` | `baserecordid_reportparameter` |
| `reportparameter_AsyncOperations` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `reportparameter_MailboxTrackingFolders` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `reportparameter_UserEntityInstanceDatas` | [reportparameter](reportparameter.md) | `objectid` | `objectid_reportparameter` |
| `reportparameter_ProcessSession` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `reportparameter_BulkDeleteFailures` | [reportparameter](reportparameter.md) | `regardingobjectid` | `regardingobjectid_reportparameter` |
| `reportparameter_PrincipalObjectAttributeAccesses` | [reportparameter](reportparameter.md) | `objectid` | `objectid_reportparameter` |


## Source

Generated from [reportparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='reportparameter')) on 2026-05-07.