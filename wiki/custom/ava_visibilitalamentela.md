---
logical: "ava_visibilitalamentela"
display: "Visibilità Lamentela"
entitySetName: "ava_visibilitalamentelas"
primaryId: "ava_visibilitalamentelaid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Visibilità Lamentela

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_visibilitalamentela` |
| Display name | Visibilità Lamentela |
| Display (plural) | Visibilità Lamentele |
| Schema name | `ava_VisibilitaLamentela` |
| Entity set (Web API) | `ava_visibilitalamentelas` |
| Primary id attribute | `ava_visibilitalamentelaid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_visibilitalamentelas?$select=ava_name&$top=10
GET /api/data/v9.2/ava_visibilitalamentelas(<guid>)
POST /api/data/v9.2/ava_visibilitalamentelas
PATCH /api/data/v9.2/ava_visibilitalamentelas(<guid>)
DELETE /api/data/v9.2/ava_visibilitalamentelas(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`ava_lamentela`, `ava_name`, `ava_utente`, `ava_visibilitalamentelaid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_visibilitalamentela_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_visibilitalamentela_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_visibilitalamentela_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_visibilitalamentela_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_visibilitalamentela` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_visibilitalamentela` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_visibilitalamentela` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_visibilitalamentela` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ava_visibilitalamentela_Utente_systemuser` | [systemuser](systemuser.md) | `ava_utente` | `ava_Utente` |
| `ava_visibilitalamentela_Lamentela_ava_lamentela` | [ava_lamentela](ava_lamentela.md) | `ava_lamentela` | `ava_Lamentela` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_visibilitalamentela_SyncErrors` | [ava_visibilitalamentela](ava_visibilitalamentela.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitalamentela` |
| `ava_visibilitalamentela_AsyncOperations` | [ava_visibilitalamentela](ava_visibilitalamentela.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitalamentela` |
| `ava_visibilitalamentela_MailboxTrackingFolders` | [ava_visibilitalamentela](ava_visibilitalamentela.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitalamentela` |
| `ava_visibilitalamentela_UserEntityInstanceDatas` | [ava_visibilitalamentela](ava_visibilitalamentela.md) | `objectid` | `objectid_ava_visibilitalamentela` |
| `ava_visibilitalamentela_ProcessSession` | [ava_visibilitalamentela](ava_visibilitalamentela.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitalamentela` |
| `ava_visibilitalamentela_BulkDeleteFailures` | [ava_visibilitalamentela](ava_visibilitalamentela.md) | `regardingobjectid` | `regardingobjectid_ava_visibilitalamentela` |
| `ava_visibilitalamentela_PrincipalObjectAttributeAccesses` | [ava_visibilitalamentela](ava_visibilitalamentela.md) | `objectid` | `objectid_ava_visibilitalamentela` |


## Source

Generated from [ava_visibilitalamentela (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_visibilitalamentela')) on 2026-05-07.