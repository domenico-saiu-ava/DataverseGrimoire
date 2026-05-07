---
logical: "ava_offertaadobe"
display: "Offerta Adobe"
entitySetName: "ava_offertaadobes"
primaryId: "ava_offertaadobeid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Offerta Adobe

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_offertaadobe` |
| Display name | Offerta Adobe |
| Display (plural) | Offerte Adobe |
| Schema name | `ava_offertaadobe` |
| Entity set (Web API) | `ava_offertaadobes` |
| Primary id attribute | `ava_offertaadobeid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_offertaadobes?$select=ava_name&$top=10
GET /api/data/v9.2/ava_offertaadobes(<guid>)
POST /api/data/v9.2/ava_offertaadobes
PATCH /api/data/v9.2/ava_offertaadobes(<guid>)
DELETE /api/data/v9.2/ava_offertaadobes(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`ava_codice`, `ava_name`, `ava_offertaadobeid`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_offertaadobe_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_offertaadobe_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_offertaadobe_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_offertaadobe_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_offertaadobe` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_offertaadobe` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_offertaadobe` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_offertaadobe` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_offertaadobe_SyncErrors` | [ava_offertaadobe](ava_offertaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_offertaadobe` |
| `ava_offertaadobe_AsyncOperations` | [ava_offertaadobe](ava_offertaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_offertaadobe` |
| `ava_offertaadobe_MailboxTrackingFolders` | [ava_offertaadobe](ava_offertaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_offertaadobe` |
| `ava_offertaadobe_UserEntityInstanceDatas` | [ava_offertaadobe](ava_offertaadobe.md) | `objectid` | `objectid_ava_offertaadobe` |
| `ava_offertaadobe_ProcessSession` | [ava_offertaadobe](ava_offertaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_offertaadobe` |
| `ava_offertaadobe_BulkDeleteFailures` | [ava_offertaadobe](ava_offertaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_offertaadobe` |
| `ava_offertaadobe_PrincipalObjectAttributeAccesses` | [ava_offertaadobe](ava_offertaadobe.md) | `objectid` | `objectid_ava_offertaadobe` |


## Source

Generated from [ava_offertaadobe (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_offertaadobe')) on 2026-05-07.