---
logical: "reportparameter"
display: "Report Parameter"
entitySetName: "reportparameters"
primaryId: "reportparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
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

`EnvironmentVariableDefinitionId`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `ReportId`, `ReportParameterId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `EnvironmentVariableDefinition_ReportParameter_EvironmentVariableDefinitionId` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariabledefinitionid` | `EnvironmentVariableDefinition_ReportParameters` |
| `lk_reportparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_reportparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_reportparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_reportparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `Report_ReportParameter_ReportId` | [report](report.md) | `reportid` | `Report_ReportParameters` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `reportparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `reportparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `reportparameter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `reportparameter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `reportparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `reportparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `reportparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `reportparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [reportparameter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/reportparameter.md) on 2026-05-06.