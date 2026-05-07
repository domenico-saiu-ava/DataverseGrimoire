---
logical: "ava_campagnaadobe"
display: "Campagna Adobe"
entitySetName: "ava_campagnaadobes"
primaryId: "ava_campagnaadobeid"
primaryName: "ava_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Campagna Adobe

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ava_campagnaadobe` |
| Display name | Campagna Adobe |
| Display (plural) | Campagne Adobe |
| Schema name | `ava_campagnaadobe` |
| Entity set (Web API) | `ava_campagnaadobes` |
| Primary id attribute | `ava_campagnaadobeid` |
| Primary name attribute | `ava_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ava_campagnaadobes?$select=ava_name&$top=10
GET /api/data/v9.2/ava_campagnaadobes(<guid>)
POST /api/data/v9.2/ava_campagnaadobes
PATCH /api/data/v9.2/ava_campagnaadobes(<guid>)
DELETE /api/data/v9.2/ava_campagnaadobes(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`ava_campagnaadobeid`, `ava_codice`, `ava_idcampagnaadobe`, `ava_name`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ava_campagnaadobe_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ava_campagnaadobe_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ava_campagnaadobe_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ava_campagnaadobe_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_ava_campagnaadobe` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_ava_campagnaadobe` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_ava_campagnaadobe` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_ava_campagnaadobe` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ava_campagnaadobe_SyncErrors` | [ava_campagnaadobe](ava_campagnaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_campagnaadobe` |
| `ava_campagnaadobe_AsyncOperations` | [ava_campagnaadobe](ava_campagnaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_campagnaadobe` |
| `ava_campagnaadobe_MailboxTrackingFolders` | [ava_campagnaadobe](ava_campagnaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_campagnaadobe` |
| `ava_campagnaadobe_UserEntityInstanceDatas` | [ava_campagnaadobe](ava_campagnaadobe.md) | `objectid` | `objectid_ava_campagnaadobe` |
| `ava_campagnaadobe_ProcessSession` | [ava_campagnaadobe](ava_campagnaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_campagnaadobe` |
| `ava_campagnaadobe_BulkDeleteFailures` | [ava_campagnaadobe](ava_campagnaadobe.md) | `regardingobjectid` | `regardingobjectid_ava_campagnaadobe` |
| `ava_campagnaadobe_PrincipalObjectAttributeAccesses` | [ava_campagnaadobe](ava_campagnaadobe.md) | `objectid` | `objectid_ava_campagnaadobe` |


## Source

Generated from [ava_campagnaadobe (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='ava_campagnaadobe')) on 2026-05-07.