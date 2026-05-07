---
logical: "ava_categoriacaso"
display: "Categoria Caso"
entitySetName: "ava_categoriacasos"
primaryId: "ava_categoriacasoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Categoria Caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_categoriacaso` |
| Display name | Categoria Caso |
| Display (plural) | Categorie Caso |
| Schema name | `ava_CategoriaCaso` |
| Entity set (Web API) | `ava_categoriacasos` |
| Primary id attribute | `ava_categoriacasoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_categoriacasos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_categoriacasos(<guid>)
POST /api/data/v9.2/ava_categoriacasos
PATCH /api/data/v9.2/ava_categoriacasos(<guid>)
DELETE /api/data/v9.2/ava_categoriacasos(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`ava_categoriacasoid`, `ava_codice`, `ava_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_categoriacaso_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_categoriacaso_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_categoriacaso_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_categoriacaso_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_categoriacaso` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_categoriacaso` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_categoriacaso` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_categoriacaso` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_incident_CategoriaCaso_ava_categoriacaso` | [ava_categoriacaso](ava_categoriacaso.md) | `ava_categoriacaso` | `ava_CategoriaCaso` |
| `ava_categoriacaso_SyncErrors` | [ava_categoriacaso](ava_categoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_categoriacaso` |
| `ava_categoriacaso_DuplicateMatchingRecord` | [ava_categoriacaso](ava_categoriacaso.md) | `duplicaterecordid` | `duplicaterecordid_ava_categoriacaso` |
| `ava_categoriacaso_DuplicateBaseRecord` | [ava_categoriacaso](ava_categoriacaso.md) | `baserecordid` | `baserecordid_ava_categoriacaso` |
| `ava_categoriacaso_AsyncOperations` | [ava_categoriacaso](ava_categoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_categoriacaso` |
| `ava_categoriacaso_MailboxTrackingFolders` | [ava_categoriacaso](ava_categoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_categoriacaso` |
| `ava_categoriacaso_UserEntityInstanceDatas` | [ava_categoriacaso](ava_categoriacaso.md) | `objectid` | `objectid_ava_categoriacaso` |
| `ava_categoriacaso_ProcessSession` | [ava_categoriacaso](ava_categoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_categoriacaso` |
| `ava_categoriacaso_BulkDeleteFailures` | [ava_categoriacaso](ava_categoriacaso.md) | `regardingobjectid` | `regardingobjectid_ava_categoriacaso` |
| `ava_categoriacaso_PrincipalObjectAttributeAccesses` | [ava_categoriacaso](ava_categoriacaso.md) | `objectid` | `objectid_ava_categoriacaso` |
| `ava_sottocategoriacaso_CategoriaCaso_ava_categoriacaso` | [ava_categoriacaso](ava_categoriacaso.md) | `ava_categoriacaso` | `ava_CategoriaCaso` |


## Source

Generated from [ava_categoriacaso (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_categoriacaso')) on 2026-05-07.