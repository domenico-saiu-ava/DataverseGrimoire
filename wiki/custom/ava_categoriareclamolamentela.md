---
logical: "ava_categoriareclamolamentela"
display: "Categoria Reclamo / Lamentela"
entitySetName: "ava_categoriareclamolamentelas"
primaryId: "ava_categoriareclamolamentelaid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Categoria Reclamo / Lamentela

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_categoriareclamolamentela` |
| Display name | Categoria Reclamo / Lamentela |
| Display (plural) | Categorie Reclamo / Lamentela |
| Schema name | `ava_CategoriaReclamoLamentela` |
| Entity set (Web API) | `ava_categoriareclamolamentelas` |
| Primary id attribute | `ava_categoriareclamolamentelaid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_categoriareclamolamentelas?$select=ava_name&$top=10
GET /api/data/v9.2/ava_categoriareclamolamentelas(<guid>)
POST /api/data/v9.2/ava_categoriareclamolamentelas
PATCH /api/data/v9.2/ava_categoriareclamolamentelas(<guid>)
DELETE /api/data/v9.2/ava_categoriareclamolamentelas(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`ava_categoriareclamolamentelaid`, `ava_codice`, `ava_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_categoriareclamolamentela_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_categoriareclamolamentela_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_categoriareclamolamentela_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_categoriareclamolamentela_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_categoriareclamolamentela` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_categoriareclamolamentela` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_categoriareclamolamentela` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_categoriareclamolamentela` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_reclamo_CategoriaReclamoLamentela_ava_categoriareclamolamentela` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `ava_categoriareclamolamentela` | `ava_CategoriaReclamoLamentela` |
| `ava_categoriareclamolamentela_SyncErrors` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_categoriareclamolamentela` |
| `ava_categoriareclamolamentela_AsyncOperations` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_categoriareclamolamentela` |
| `ava_categoriareclamolamentela_MailboxTrackingFolders` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_categoriareclamolamentela` |
| `ava_categoriareclamolamentela_UserEntityInstanceDatas` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `objectid` | `objectid_ava_categoriareclamolamentela` |
| `ava_categoriareclamolamentela_ProcessSession` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_categoriareclamolamentela` |
| `ava_categoriareclamolamentela_BulkDeleteFailures` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_categoriareclamolamentela` |
| `ava_categoriareclamolamentela_PrincipalObjectAttributeAccesses` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `objectid` | `objectid_ava_categoriareclamolamentela` |
| `ava_lamentela_CategoriaReclamoLamentela_ava_categoriareclamolamentela` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `ava_categoriareclamolamentela` | `ava_CategoriaReclamoLamentela` |
| `ava_sottocategoriareclamolamentela_CategoriaReclamoLamentela_ava_categoriareclamolamentela` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `ava_categoriareclamolamentela` | `ava_CategoriaReclamoLamentela` |


## Source

Generated from [ava_categoriareclamolamentela (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_categoriareclamolamentela')) on 2026-05-07.