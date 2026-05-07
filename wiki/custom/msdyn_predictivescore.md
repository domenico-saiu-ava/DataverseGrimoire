---
logical: "msdyn_predictivescore"
display: "Punteggio predittivo"
entitySetName: "msdyn_predictivescores"
primaryId: "msdyn_predictivescoreid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Punteggio predittivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictivescore` |
| Display name | Punteggio predittivo |
| Display (plural) | Punteggio predittivo |
| Schema name | `msdyn_predictivescore` |
| Entity set (Web API) | `msdyn_predictivescores` |
| Primary id attribute | `msdyn_predictivescoreid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictivescores?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictivescores(<guid>)
POST /api/data/v9.2/msdyn_predictivescores
PATCH /api/data/v9.2/msdyn_predictivescores(<guid>)
DELETE /api/data/v9.2/msdyn_predictivescores(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_contributingpredictionids`, `msdyn_entityid`, `msdyn_entitytype`, `msdyn_grade`, `msdyn_name`, `msdyn_predictivescoreid`, `msdyn_score`, `msdyn_scoredon`, `msdyn_scorereasons`, `msdyn_scoretrend`, `msdyn_similaropportunities`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictivescore_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictivescore_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictivescore_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictivescore_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_predictivescore` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictivescore_SyncErrors` | [msdyn_predictivescore](msdyn_predictivescore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescore` |
| `msdyn_predictivescore_DuplicateMatchingRecord` | [msdyn_predictivescore](msdyn_predictivescore.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_predictivescore` |
| `msdyn_predictivescore_DuplicateBaseRecord` | [msdyn_predictivescore](msdyn_predictivescore.md) | `baserecordid` | `baserecordid_msdyn_predictivescore` |
| `msdyn_predictivescore_AsyncOperations` | [msdyn_predictivescore](msdyn_predictivescore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescore` |
| `msdyn_predictivescore_MailboxTrackingFolders` | [msdyn_predictivescore](msdyn_predictivescore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescore` |
| `msdyn_predictivescore_UserEntityInstanceDatas` | [msdyn_predictivescore](msdyn_predictivescore.md) | `objectid` | `objectid_msdyn_predictivescore` |
| `msdyn_predictivescore_ProcessSession` | [msdyn_predictivescore](msdyn_predictivescore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescore` |
| `msdyn_predictivescore_BulkDeleteFailures` | [msdyn_predictivescore](msdyn_predictivescore.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescore` |
| `msdyn_predictivescore_PrincipalObjectAttributeAccesses` | [msdyn_predictivescore](msdyn_predictivescore.md) | `objectid` | `objectid_msdyn_predictivescore` |
| `msdyn_msdyn_predictivescore_lead` | [msdyn_predictivescore](msdyn_predictivescore.md) | `msdyn_predictivescoreid` | `msdyn_PredictiveScoreId` |
| `msdyn_msdyn_predictivescore_opportunity` | [msdyn_predictivescore](msdyn_predictivescore.md) | `msdyn_predictivescoreid` | `msdyn_PredictiveScoreId` |
| `msdyn_PS_PMS` | [msdyn_predictivescore](msdyn_predictivescore.md) | `msdyn_predictivescoreid` | `msdyn_PredictiveScoreId` |


## Source

Generated from [msdyn_predictivescore (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_predictivescore')) on 2026-05-07.