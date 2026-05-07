---
logical: "msdyn_skillattachmentruleitem"
display: "Regola di assegnazione delle competenze"
entitySetName: "msdyn_skillattachmentruleitems"
primaryId: "msdyn_skillattachmentruleitemid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di assegnazione delle competenze

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_skillattachmentruleitem` |
| Display name | Regola di assegnazione delle competenze |
| Display (plural) | Regole di assegnazione delle competenze |
| Schema name | `msdyn_skillattachmentruleitem` |
| Entity set (Web API) | `msdyn_skillattachmentruleitems` |
| Primary id attribute | `msdyn_skillattachmentruleitemid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_skillattachmentruleitems?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_skillattachmentruleitems(<guid>)
POST /api/data/v9.2/msdyn_skillattachmentruleitems
PATCH /api/data/v9.2/msdyn_skillattachmentruleitems(<guid>)
DELETE /api/data/v9.2/msdyn_skillattachmentruleitems(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_condition`, `msdyn_description`, `msdyn_expression`, `msdyn_liveworkstream`, `msdyn_name`, `msdyn_rulejson`, `msdyn_skillattachmentruleitemid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_skillattachmentruleitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_skillattachmentruleitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_skillattachmentruleitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_skillattachmentruleitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_skillattachmentruleitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_skillattachmentruleitem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_skillattachmentruleitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_skillattachmentruleitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_liveworkstream_skillattachmentruleitem` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstream` | `msdyn_liveworkstream` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_skillattachmentruleitem_SyncErrors` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_DuplicateMatchingRecord` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_DuplicateBaseRecord` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `baserecordid` | `baserecordid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_AsyncOperations` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_MailboxTrackingFolders` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_UserEntityInstanceDatas` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `objectid` | `objectid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_ProcessSession` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_BulkDeleteFailures` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_PrincipalObjectAttributeAccesses` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `objectid` | `objectid_msdyn_skillattachmentruleitem` |
| `msdyn_skillattachmentruleitem_target` | [msdyn_skillattachmentruleitem](msdyn_skillattachmentruleitem.md) | `msdyn_skillattachmentruleitemid` | `msdyn_skillattachmentruleitemid` |


## Source

Generated from [msdyn_skillattachmentruleitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_skillattachmentruleitem')) on 2026-05-07.