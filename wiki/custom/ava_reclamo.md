---
logical: "ava_reclamo"
display: "Reclamo"
entitySetName: "ava_reclamos"
primaryId: "ava_reclamoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Reclamo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_reclamo` |
| Display name | Reclamo |
| Display (plural) | Reclami |
| Schema name | `ava_Reclamo` |
| Entity set (Web API) | `ava_reclamos` |
| Primary id attribute | `ava_reclamoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_reclamos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_reclamos(<guid>)
POST /api/data/v9.2/ava_reclamos
PATCH /api/data/v9.2/ava_reclamos(<guid>)
DELETE /api/data/v9.2/ava_reclamos(<guid>)
```

## Attributes

Writable: **24** · Read-only: **10**

### Writable

`ava_assegnatario`, `ava_categoriareclamolamentela`, `ava_clienteanagrafato`, `ava_codice`, `ava_datacreazionereclamo`, `ava_datadicompletamento`, `ava_datascadenzareclamo`, `ava_descrizionereclamo`, `ava_name`, `ava_nomedenominazione`, `ava_noteaggiuntive`, `ava_numerodisollecito`, `ava_recapitoemail`, `ava_recapitotelefonico`, `ava_reclamoid`, `ava_segnacomecompletato`, `ava_sottocategoriareclamolamentela`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_reclamo_CategoriaReclamoLamentela_ava_categoriareclamolamentela` | [ava_categoriareclamolamentela](ava_categoriareclamolamentela.md) | `ava_categoriareclamolamentela` | `ava_CategoriaReclamoLamentela` |
| `ava_reclamo_SottocategoriaReclamoLamentela_ava_sottocategoriareclamolamentela` | [ava_sottocategoriareclamolamentela](ava_sottocategoriareclamolamentela.md) | `ava_sottocategoriareclamolamentela` | `ava_SottocategoriaReclamoLamentela` |
| `ava_reclamo_Assegnatario_systemuser` | [systemuser](systemuser.md) | `ava_assegnatario` | `ava_Assegnatario` |
| `lk_ava_reclamo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_reclamo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_reclamo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_reclamo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_reclamo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_reclamo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_reclamo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_reclamo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_visibilitareclamo_Reclamo_ava_reclamo` | [ava_reclamo](ava_reclamo.md) | `ava_reclamo` | `ava_Reclamo` |
| `ava_documentoreclamo_Reclamo_ava_reclamo` | [ava_reclamo](ava_reclamo.md) | `ava_reclamo` | `ava_Reclamo` |
| `ava_reclamo_SyncErrors` | [ava_reclamo](ava_reclamo.md) | `regardingobjectid` | `regardingobjectid_ava_reclamo` |
| `ava_reclamo_AsyncOperations` | [ava_reclamo](ava_reclamo.md) | `regardingobjectid` | `regardingobjectid_ava_reclamo` |
| `ava_reclamo_MailboxTrackingFolders` | [ava_reclamo](ava_reclamo.md) | `regardingobjectid` | `regardingobjectid_ava_reclamo` |
| `ava_reclamo_UserEntityInstanceDatas` | [ava_reclamo](ava_reclamo.md) | `objectid` | `objectid_ava_reclamo` |
| `ava_reclamo_ProcessSession` | [ava_reclamo](ava_reclamo.md) | `regardingobjectid` | `regardingobjectid_ava_reclamo` |
| `ava_reclamo_BulkDeleteFailures` | [ava_reclamo](ava_reclamo.md) | `regardingobjectid` | `regardingobjectid_ava_reclamo` |
| `ava_reclamo_PrincipalObjectAttributeAccesses` | [ava_reclamo](ava_reclamo.md) | `objectid` | `objectid_ava_reclamo` |


## Source

Generated from [ava_reclamo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_reclamo')) on 2026-05-07.