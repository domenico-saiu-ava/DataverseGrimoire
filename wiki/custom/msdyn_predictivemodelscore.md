---
logical: "msdyn_predictivemodelscore"
display: "Punteggio modello predittivo"
entitySetName: "msdyn_predictivemodelscores"
primaryId: "msdyn_predictivemodelscoreid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Punteggio modello predittivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictivemodelscore` |
| Display name | Punteggio modello predittivo |
| Display (plural) | Punteggio modello predittivo |
| Schema name | `msdyn_predictivemodelscore` |
| Entity set (Web API) | `msdyn_predictivemodelscores` |
| Primary id attribute | `msdyn_predictivemodelscoreid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictivemodelscores?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictivemodelscores(<guid>)
POST /api/data/v9.2/msdyn_predictivemodelscores
PATCH /api/data/v9.2/msdyn_predictivemodelscores(<guid>)
DELETE /api/data/v9.2/msdyn_predictivemodelscores(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_entityid`, `msdyn_entitytype`, `msdyn_grade`, `msdyn_modelname`, `msdyn_name`, `msdyn_predictionid`, `msdyn_predictivemodelscoreid`, `msdyn_predictivescoreid`, `msdyn_score`, `msdyn_scoredon`, `msdyn_scorehistory`, `msdyn_scorereasons`, `msdyn_scoretrend`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictivemodelscore_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictivemodelscore_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictivemodelscore_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictivemodelscore_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_predictivemodelscore` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_PS_PMS` | [msdyn_predictivescore](msdyn_predictivescore.md) | `msdyn_predictivescoreid` | `msdyn_PredictiveScoreId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictivemodelscore_SyncErrors` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_DuplicateMatchingRecord` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_DuplicateBaseRecord` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `baserecordid` | `baserecordid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_AsyncOperations` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_MailboxTrackingFolders` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_UserEntityInstanceDatas` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `objectid` | `objectid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_ProcessSession` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_BulkDeleteFailures` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivemodelscore` |
| `msdyn_predictivemodelscore_PrincipalObjectAttributeAccesses` | [msdyn_predictivemodelscore](msdyn_predictivemodelscore.md) | `objectid` | `objectid_msdyn_predictivemodelscore` |


## Source

Generated from [msdyn_predictivemodelscore (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_predictivemodelscore')) on 2026-05-07.