---
logical: "ava_sottocategoriareclamolamentela"
display: "Sottocategoria Reclamo / Lamentela"
entitySetName: "ava_sottocategoriareclamolamentelas"
primaryId: "ava_sottocategoriareclamolamentelaid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sottocategoria Reclamo / Lamentela

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_sottocategoriareclamolamentela` |
| Display name | Sottocategoria Reclamo / Lamentela |
| Display (plural) | Sottocategorie Reclamo / Lamentela |
| Schema name | `ava_SottocategoriaReclamoLamentela` |
| Entity set (Web API) | `ava_sottocategoriareclamolamentelas` |
| Primary id attribute | `ava_sottocategoriareclamolamentelaid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_sottocategoriareclamolamentelas?$select=ava_name&$top=10
GET /api/data/v9.2/ava_sottocategoriareclamolamentelas(<guid>)
POST /api/data/v9.2/ava_sottocategoriareclamolamentelas
PATCH /api/data/v9.2/ava_sottocategoriareclamolamentelas(<guid>)
DELETE /api/data/v9.2/ava_sottocategoriareclamolamentelas(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`ava_categoriareclamolamentela`, `ava_codice`, `ava_name`, `ava_sottocategoriareclamolamentelaid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_sottocategoriareclamolamentela_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_sottocategoriareclamolamentela_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_sottocategoriareclamolamentela_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_sottocategoriareclamolamentela_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_sottocategoriareclamolamentela` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_sottocategoriareclamolamentela` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_sottocategoriareclamolamentela` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_sottocategoriareclamolamentela` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ava_sottocategoriareclamolamentela_CategoriaReclamoLamentela_ava_categoriareclamolamentela` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `ava_categoriareclamolamentela` | `ava_CategoriaReclamoLamentela` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_reclamo_SottocategoriaReclamoLamentela_ava_sottocategoriareclamolamentela` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `ava_sottocategoriareclamolamentela` | `ava_SottocategoriaReclamoLamentela` |
| `ava_lamentela_SottocategoriaReclamoLamentela_ava_sottocategoriareclamolamentela` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `ava_sottocategoriareclamolamentela` | `ava_SottocategoriaReclamoLamentela` |
| `ava_sottocategoriareclamolamentela_SyncErrors` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriareclamolamentela` |
| `ava_sottocategoriareclamolamentela_AsyncOperations` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriareclamolamentela` |
| `ava_sottocategoriareclamolamentela_MailboxTrackingFolders` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriareclamolamentela` |
| `ava_sottocategoriareclamolamentela_UserEntityInstanceDatas` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `objectid` | `objectid_ava_sottocategoriareclamolamentela` |
| `ava_sottocategoriareclamolamentela_ProcessSession` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriareclamolamentela` |
| `ava_sottocategoriareclamolamentela_BulkDeleteFailures` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `regardingobjectid` | `regardingobjectid_ava_sottocategoriareclamolamentela` |
| `ava_sottocategoriareclamolamentela_PrincipalObjectAttributeAccesses` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `objectid` | `objectid_ava_sottocategoriareclamolamentela` |


## Source

Generated from [ava_sottocategoriareclamolamentela (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_sottocategoriareclamolamentela')) on 2026-05-07.