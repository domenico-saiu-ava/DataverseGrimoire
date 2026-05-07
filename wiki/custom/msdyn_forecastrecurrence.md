---
logical: "msdyn_forecastrecurrence"
display: "Ricorrenza di previsione"
entitySetName: "msdyn_forecastrecurrences"
primaryId: "msdyn_forecastrecurrenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Ricorrenza di previsione

Archivia le informazioni di ricalcolo per ogni ricorrenza della gerarchia di previsione. Per uso interno.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastrecurrence` |
| Display name | Ricorrenza di previsione |
| Display (plural) | Ricorrenze di previsione |
| Schema name | `msdyn_forecastrecurrence` |
| Entity set (Web API) | `msdyn_forecastrecurrences` |
| Primary id attribute | `msdyn_forecastrecurrenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastrecurrences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_forecastrecurrences(<guid>)
POST /api/data/v9.2/msdyn_forecastrecurrences
PATCH /api/data/v9.2/msdyn_forecastrecurrences(<guid>)
DELETE /api/data/v9.2/msdyn_forecastrecurrences(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actualparticipatingrecordsfetchxml`, `msdyn_failureinfo`, `msdyn_forecastdefinitionid`, `msdyn_forecastrecurrenceid`, `msdyn_inprogressparticipatingrecordsfetchxml`, `msdyn_ishierarchylocked`, `msdyn_lastrecalculatedon`, `msdyn_name`, `msdyn_recalculatestatuschangedon`, `msdyn_recalculationstarttime`, `msdyn_recalculationstatus`, `msdyn_recalculationstatusdescription`, `msdyn_recurrenceindex`, `msdyn_validfrom`, `msdyn_validto`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_forecastrecurrence_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastrecurrence_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastrecurrence_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastrecurrence_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_forecastrecurrence` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_forecastrecurrence` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_forecastrecurrence` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_forecastrecurrence` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `msdyn_forecastdefinitionid` | `msdyn_ForecastDefinitionId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastrecurrence_SyncErrors` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_DuplicateMatchingRecord` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_DuplicateBaseRecord` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `baserecordid` | `baserecordid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_AsyncOperations` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_MailboxTrackingFolders` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_UserEntityInstanceDatas` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `objectid` | `objectid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_ProcessSession` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_BulkDeleteFailures` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `regardingobjectid` | `regardingobjectid_msdyn_forecastrecurrence` |
| `msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `objectid` | `objectid_msdyn_forecastrecurrence` |
| `msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance` | [msdyn_forecastrecurrence](msdyn_forecastrecurrence.md) | `msdyn_forecastrecurrenceid` | `msdyn_forecastrecurrenceid` |


## Source

Generated from [msdyn_forecastrecurrence (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_forecastrecurrence')) on 2026-05-07.