---
logical: "msdyn_vivacustomerlist"
display: "Copilot for Sales customer list"
entitySetName: "msdyn_vivacustomerlists"
primaryId: "msdyn_vivacustomerlistid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Copilot for Sales customer list

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_vivacustomerlist` |
| Display name | Copilot for Sales customer list |
| Display (plural) | Copilot for Sales customer lists |
| Schema name | `msdyn_vivacustomerlist` |
| Entity set (Web API) | `msdyn_vivacustomerlists` |
| Primary id attribute | `msdyn_vivacustomerlistid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_vivacustomerlists?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_vivacustomerlists(<guid>)
POST /api/data/v9.2/msdyn_vivacustomerlists
PATCH /api/data/v9.2/msdyn_vivacustomerlists(<guid>)
DELETE /api/data/v9.2/msdyn_vivacustomerlists(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_backingview`, `msdyn_listtype`, `msdyn_name`, `msdyn_orderindex`, `msdyn_producttype`, `msdyn_sortexpression`, `msdyn_timerangequalifier`, `msdyn_timerangetype`, `msdyn_userid`, `msdyn_vivacustomerlistid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_vivacustomerlist_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_vivacustomerlist_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_vivacustomerlist_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_vivacustomerlist_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_vivacustomerlist` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_vivacustomerlist` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_vivacustomerlist` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_vivacustomerlist` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_vivacustomerlist_SyncErrors` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_DuplicateMatchingRecord` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_DuplicateBaseRecord` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `baserecordid` | `baserecordid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_AsyncOperations` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_MailboxTrackingFolders` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_UserEntityInstanceDatas` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `objectid` | `objectid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_ProcessSession` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_BulkDeleteFailures` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivacustomerlist` |
| `msdyn_vivacustomerlist_PrincipalObjectAttributeAccesses` | [msdyn_vivacustomerlist](msdyn_vivacustomerlist.md) | `objectid` | `objectid_msdyn_vivacustomerlist` |


## Source

Generated from [msdyn_vivacustomerlist (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_vivacustomerlist')) on 2026-05-07.