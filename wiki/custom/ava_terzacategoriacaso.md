---
logical: "ava_terzacategoriacaso"
display: "Terza Categoria Caso"
entitySetName: "ava_terzacategoriacasos"
primaryId: "ava_terzacategoriacasoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Terza Categoria Caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_terzacategoriacaso` |
| Display name | Terza Categoria Caso |
| Display (plural) | Terze Categoria Caso |
| Schema name | `ava_TerzaCategoriaCaso` |
| Entity set (Web API) | `ava_terzacategoriacasos` |
| Primary id attribute | `ava_terzacategoriacasoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_terzacategoriacasos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_terzacategoriacasos(<guid>)
POST /api/data/v9.2/ava_terzacategoriacasos
PATCH /api/data/v9.2/ava_terzacategoriacasos(<guid>)
DELETE /api/data/v9.2/ava_terzacategoriacasos(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`ava_codice`, `ava_name`, `ava_sottocategoriacaso`, `ava_terzacategoriacasoid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_terzacategoriacaso_SottocategoriaCaso_ava_sottocategoriacaso` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `ava_sottocategoriacaso` | `ava_SottocategoriaCaso` |
| `lk_ava_terzacategoriacaso_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_terzacategoriacaso_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_terzacategoriacaso_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_terzacategoriacaso_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_terzacategoriacaso` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_terzacategoriacaso` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_terzacategoriacaso` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_terzacategoriacaso` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_incident_TerzaCategoriaCaso_ava_terzacategoriacaso` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `ava_terzacategoriacaso` | `ava_TerzaCategoriaCaso` |
| `ava_terzacategoriacaso_SyncErrors` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_DuplicateMatchingRecord` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `duplicaterecordid` | `duplicaterecordid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_DuplicateBaseRecord` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `baserecordid` | `baserecordid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_AsyncOperations` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_MailboxTrackingFolders` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_UserEntityInstanceDatas` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `objectid` | `objectid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_ProcessSession` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_BulkDeleteFailures` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_terzacategoriacaso` |
| `ava_terzacategoriacaso_PrincipalObjectAttributeAccesses` | [ava_terzacategoriacaso](ava_terzacategoriacaso.md) | `objectid` | `objectid_ava_terzacategoriacaso` |


## Source

Generated from [ava_terzacategoriacaso (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_terzacategoriacaso')) on 2026-05-07.