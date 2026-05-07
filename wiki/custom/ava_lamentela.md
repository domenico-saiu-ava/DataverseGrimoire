---
logical: "ava_lamentela"
display: "Lamentela"
entitySetName: "ava_lamentelas"
primaryId: "ava_lamentelaid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Lamentela

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_lamentela` |
| Display name | Lamentela |
| Display (plural) | Lamentele |
| Schema name | `ava_Lamentela` |
| Entity set (Web API) | `ava_lamentelas` |
| Primary id attribute | `ava_lamentelaid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_lamentelas?$select=ava_name&$top=10
GET /api/data/v9.2/ava_lamentelas(<guid>)
POST /api/data/v9.2/ava_lamentelas
PATCH /api/data/v9.2/ava_lamentelas(<guid>)
DELETE /api/data/v9.2/ava_lamentelas(<guid>)
```

## Attributes

Writable: **26** · Read-only: **10**

### Writable

`ava_assegnatario`, `ava_categoriareclamolamentela`, `ava_clienteanagrafato`, `ava_codice`, `ava_datacreazionelamentela`, `ava_datadicompletamento`, `ava_datascadenzalamentela`, `ava_descrizionelamentela`, `ava_dichiarazione`, `ava_intervallodisollecito`, `ava_lamentelaid`, `ava_name`, `ava_nomedenominazione`, `ava_noteaggiuntive`, `ava_numerodisollecito`, `ava_recapitoemail`, `ava_recapitotelefonico`, `ava_segnacomecompletato`, `ava_sottocategoriareclamolamentela`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_lamentela_Assegnatario_systemuser` | [systemuser](systemuser.md) | `ava_assegnatario` | `ava_Assegnatario` |
| `ava_lamentela_CategoriaReclamoLamentela_ava_categoriareclamolamentela` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `ava_categoriareclamolamentela` | `ava_CategoriaReclamoLamentela` |
| `ava_lamentela_SottocategoriaReclamoLamentela_ava_sottocategoriareclamolamentela` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `ava_sottocategoriareclamolamentela` | `ava_SottocategoriaReclamoLamentela` |
| `lk_ava_lamentela_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_lamentela_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_lamentela_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_lamentela_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_lamentela` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_lamentela` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_lamentela` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_lamentela` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_lamentela_SyncErrors` | [ava_lamentela](ava_lamentela.md) | `regardingobjectid` | `regardingobjectid_ava_lamentela` |
| `ava_lamentela_AsyncOperations` | [ava_lamentela](ava_lamentela.md) | `regardingobjectid` | `regardingobjectid_ava_lamentela` |
| `ava_lamentela_MailboxTrackingFolders` | [ava_lamentela](ava_lamentela.md) | `regardingobjectid` | `regardingobjectid_ava_lamentela` |
| `ava_lamentela_UserEntityInstanceDatas` | [ava_lamentela](ava_lamentela.md) | `objectid` | `objectid_ava_lamentela` |
| `ava_lamentela_ProcessSession` | [ava_lamentela](ava_lamentela.md) | `regardingobjectid` | `regardingobjectid_ava_lamentela` |
| `ava_lamentela_BulkDeleteFailures` | [ava_lamentela](ava_lamentela.md) | `regardingobjectid` | `regardingobjectid_ava_lamentela` |
| `ava_lamentela_PrincipalObjectAttributeAccesses` | [ava_lamentela](ava_lamentela.md) | `objectid` | `objectid_ava_lamentela` |
| `ava_documentolamentela_Lamentela_ava_lamentela` | [ava_lamentela](ava_lamentela.md) | `ava_lamentela` | `ava_Lamentela` |
| `ava_visibilitalamentela_Lamentela_ava_lamentela` | [ava_lamentela](ava_lamentela.md) | `ava_lamentela` | `ava_Lamentela` |


## Source

Generated from [ava_lamentela (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_lamentela')) on 2026-05-07.