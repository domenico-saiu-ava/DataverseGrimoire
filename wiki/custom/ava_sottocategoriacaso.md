---
logical: "ava_sottocategoriacaso"
display: "Sottocategoria Caso"
entitySetName: "ava_sottocategoriacasos"
primaryId: "ava_sottocategoriacasoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sottocategoria Caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_sottocategoriacaso` |
| Display name | Sottocategoria Caso |
| Display (plural) | Sottocategoria Caso |
| Schema name | `ava_SottocategoriaCaso` |
| Entity set (Web API) | `ava_sottocategoriacasos` |
| Primary id attribute | `ava_sottocategoriacasoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_sottocategoriacasos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_sottocategoriacasos(<guid>)
POST /api/data/v9.2/ava_sottocategoriacasos
PATCH /api/data/v9.2/ava_sottocategoriacasos(<guid>)
DELETE /api/data/v9.2/ava_sottocategoriacasos(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`ava_categoriacaso`, `ava_codice`, `ava_name`, `ava_sottocategoriacasoid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_sottocategoriacaso_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_sottocategoriacaso_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_sottocategoriacaso_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_sottocategoriacaso_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_sottocategoriacaso` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_sottocategoriacaso` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_sottocategoriacaso` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_sottocategoriacaso` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ava_sottocategoriacaso_CategoriaCaso_ava_categoriacaso` | [ava_categoriacaso](ava_categoriacaso.md) | `ava_categoriacaso` | `ava_CategoriaCaso` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_terzacategoriacaso_SottocategoriaCaso_ava_sottocategoriacaso` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `ava_sottocategoriacaso` | `ava_SottocategoriaCaso` |
| `ava_incident_SottocategoriaCaso_ava_sottocategoriacaso` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `ava_sottocategoriacaso` | `ava_SottocategoriaCaso` |
| `ava_sottocategoriacaso_SyncErrors` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_DuplicateMatchingRecord` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `duplicaterecordid` | `duplicaterecordid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_DuplicateBaseRecord` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `baserecordid` | `baserecordid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_AsyncOperations` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_MailboxTrackingFolders` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_UserEntityInstanceDatas` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `objectid` | `objectid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_ProcessSession` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_BulkDeleteFailures` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriacaso` |
| `ava_sottocategoriacaso_PrincipalObjectAttributeAccesses` | [ava_sottocategoriacaso](ava_sottocategoriacaso.md) | `objectid` | `objectid_ava_sottocategoriacaso` |


## Source

Generated from [ava_sottocategoriacaso (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_sottocategoriacaso')) on 2026-05-07.