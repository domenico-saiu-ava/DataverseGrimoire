---
logical: "msdyn_forecastdefinition"
display: "Definizione di previsione"
entitySetName: "msdyn_forecastdefinitions"
primaryId: "msdyn_forecastdefinitionid"
primaryName: "msdyn_forecastdefinitionname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione di previsione

Definisce i parametri utilizzati per la previsione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastdefinition` |
| Display name | Definizione di previsione |
| Display (plural) | Definizioni di previsione |
| Schema name | `msdyn_forecastdefinition` |
| Entity set (Web API) | `msdyn_forecastdefinitions` |
| Primary id attribute | `msdyn_forecastdefinitionid` |
| Primary name attribute | `msdyn_forecastdefinitionname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastdefinitions?$select=msdyn_forecastdefinitionname&$top=10
GET /api/data/v9.2/msdyn_forecastdefinitions(<guid>)
POST /api/data/v9.2/msdyn_forecastdefinitions
PATCH /api/data/v9.2/msdyn_forecastdefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_forecastdefinitions(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_fiscalmonth`, `msdyn_fiscalquarter`, `msdyn_fiscalyear`, `msdyn_forecastdefinitionid`, `msdyn_forecastdefinitionname`, `msdyn_forecastperiodtype`, `msdyn_metricid`, `msdyn_numberofrecurrences`, `msdyn_quotasource`, `msdyn_rollupquery`, `msdyn_validfrom`, `msdyn_validto`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastdefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastdefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastdefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastdefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_forecastdefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_forecastdefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_forecastdefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_forecastdefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_metric_msdyn_forecastdefinition_metricid` | [metric](metric.md) | `msdyn_metricid` | `msdyn_metricid` |
| `msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery` | [goalrollupquery](goalrollupquery.md) | `msdyn_rollupquery` | `msdyn_rollupquery` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastdefinition_SyncErrors` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_DuplicateMatchingRecord` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_DuplicateBaseRecord` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `baserecordid` | `baserecordid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_AsyncOperations` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_MailboxTrackingFolders` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_UserEntityInstanceDatas` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `objectid` | `objectid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_ProcessSession` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_BulkDeleteFailures` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastdefinition` |
| `msdyn_forecastdefinition_PrincipalObjectAttributeAccesses` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `objectid` | `objectid_msdyn_forecastdefinition` |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastinstance` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `msdyn_forecastdefinitionid` | `msdyn_forecastdefinitionid` |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `msdyn_forecastdefinitionid` | `msdyn_ForecastDefinitionId` |


## Source

Generated from [msdyn_forecastdefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastdefinition')) on 2026-05-07.