---
logical: "ava_visibilitareclamo"
display: "Visibilità Reclamo"
entitySetName: "ava_visibilitareclamos"
primaryId: "ava_visibilitareclamoid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Visibilità Reclamo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_visibilitareclamo` |
| Display name | Visibilità Reclamo |
| Display (plural) | Visibilità Reclami |
| Schema name | `ava_VisibilitaReclamo` |
| Entity set (Web API) | `ava_visibilitareclamos` |
| Primary id attribute | `ava_visibilitareclamoid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_visibilitareclamos?$select=ava_name&$top=10
GET /api/data/v9.2/ava_visibilitareclamos(<guid>)
POST /api/data/v9.2/ava_visibilitareclamos
PATCH /api/data/v9.2/ava_visibilitareclamos(<guid>)
DELETE /api/data/v9.2/ava_visibilitareclamos(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`ava_name`, `ava_reclamo`, `ava_utente`, `ava_visibilitareclamoid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_visibilitareclamo_Utente_systemuser` | [systemuser](systemuser.md) | `ava_utente` | `ava_Utente` |
| `ava_visibilitareclamo_Reclamo_ava_reclamo` | [ava_reclamo](ava_reclamo.md) | `ava_reclamo` | `ava_Reclamo` |
| `lk_ava_visibilitareclamo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_visibilitareclamo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_visibilitareclamo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_visibilitareclamo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_visibilitareclamo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_visibilitareclamo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_visibilitareclamo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_visibilitareclamo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_visibilitareclamo_SyncErrors` | [ava_visibilitareclamo](ava_visibilitareclamo.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitareclamo` |
| `ava_visibilitareclamo_AsyncOperations` | [ava_visibilitareclamo](ava_visibilitareclamo.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitareclamo` |
| `ava_visibilitareclamo_MailboxTrackingFolders` | [ava_visibilitareclamo](ava_visibilitareclamo.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitareclamo` |
| `ava_visibilitareclamo_UserEntityInstanceDatas` | [ava_visibilitareclamo](ava_visibilitareclamo.md) | `objectid` | `objectid_ava_visibilitareclamo` |
| `ava_visibilitareclamo_ProcessSession` | [ava_visibilitareclamo](ava_visibilitareclamo.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitareclamo` |
| `ava_visibilitareclamo_BulkDeleteFailures` | [ava_visibilitareclamo](ava_visibilitareclamo.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitareclamo` |
| `ava_visibilitareclamo_PrincipalObjectAttributeAccesses` | [ava_visibilitareclamo](ava_visibilitareclamo.md) | `objectid` | `objectid_ava_visibilitareclamo` |


## Source

Generated from [ava_visibilitareclamo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_visibilitareclamo')) on 2026-05-07.