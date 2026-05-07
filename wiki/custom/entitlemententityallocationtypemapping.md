---
logical: "entitlemententityallocationtypemapping"
display: "Mapping tipo allocazione entità diritto"
entitySetName: "entitlemententityallocationtypemappings"
primaryId: "entitlemententityallocationtypemappingid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping tipo allocazione entità diritto

Mapping per definire quali tipi di allocazione sono disponibili per il tipo di entità da utilizzare nel diritto

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitlemententityallocationtypemapping` |
| Display name | Mapping tipo allocazione entità diritto |
| Display (plural) | Mapping tipo allocazione entità diritto |
| Schema name | `EntitlementEntityAllocationTypeMapping` |
| Entity set (Web API) | `entitlemententityallocationtypemappings` |
| Primary id attribute | `entitlemententityallocationtypemappingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/entitlemententityallocationtypemappings?$select=name&$top=10
GET /api/data/v9.2/entitlemententityallocationtypemappings(<guid>)
POST /api/data/v9.2/entitlemententityallocationtypemappings
PATCH /api/data/v9.2/entitlemententityallocationtypemappings(<guid>)
DELETE /api/data/v9.2/entitlemententityallocationtypemappings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`allocationtype`, `entitlemententityallocationtypemappingid`, `entitytype`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_entitlemententityallocationtypemapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_entitlemententityallocationtypemapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_entitlemententityallocationtypemapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_entitlemententityallocationtypemapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_entitlemententityallocationtypemapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_entitlemententityallocationtypemapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_entitlemententityallocationtypemapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_entitlemententityallocationtypemapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entitlemententityallocationtypemapping_SyncErrors` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `regardingobjectid` | `regardingobjectid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_DuplicateMatchingRecord` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `duplicaterecordid` | `duplicaterecordid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_DuplicateBaseRecord` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `baserecordid` | `baserecordid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_AsyncOperations` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `regardingobjectid` | `regardingobjectid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_MailboxTrackingFolders` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `regardingobjectid` | `regardingobjectid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_UserEntityInstanceDatas` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `objectid` | `objectid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_ProcessSession` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `regardingobjectid` | `regardingobjectid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_BulkDeleteFailures` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `regardingobjectid` | `regardingobjectid_entitlemententityallocationtypemapping` |
| `entitlemententityallocationtypemapping_PrincipalObjectAttributeAccesses` | [entitlemententityallocationtypemapping](entitlemententityallocationtypemapping.md) | `objectid` | `objectid_entitlemententityallocationtypemapping` |


## Source

Generated from [entitlemententityallocationtypemapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='entitlemententityallocationtypemapping')) on 2026-05-07.