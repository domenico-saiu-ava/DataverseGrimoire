---
logical: "msdyn_occhannelapimethodmapping"
display: "Mapping metodi API canale"
entitySetName: "msdyn_occhannelapimethodmappings"
primaryId: "msdyn_occhannelapimethodmappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping metodi API canale

Entità mapping metodi API canale OC.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelapimethodmapping` |
| Display name | Mapping metodi API canale |
| Display (plural) | Mapping metodi API canale |
| Schema name | `msdyn_occhannelapimethodmapping` |
| Entity set (Web API) | `msdyn_occhannelapimethodmappings` |
| Primary id attribute | `msdyn_occhannelapimethodmappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelapimethodmappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelapimethodmappings(<guid>)
POST /api/data/v9.2/msdyn_occhannelapimethodmappings
PATCH /api/data/v9.2/msdyn_occhannelapimethodmappings(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelapimethodmappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_channel`, `msdyn_mappedtoentityname`, `msdyn_methodname`, `msdyn_name`, `msdyn_occhannelapimethodmappingid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_occhannelapimethodmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelapimethodmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelapimethodmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelapimethodmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_occhannelapimethodmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_occhannelapimethodmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_occhannelapimethodmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_occhannelapimethodmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelapimethodmapping_SyncErrors` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_DuplicateMatchingRecord` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_DuplicateBaseRecord` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `baserecordid` | `baserecordid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_AsyncOperations` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_MailboxTrackingFolders` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_UserEntityInstanceDatas` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `objectid` | `objectid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_ProcessSession` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_BulkDeleteFailures` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelapimethodmapping` |
| `msdyn_occhannelapimethodmapping_PrincipalObjectAttributeAccesses` | [msdyn_occhannelapimethodmapping](msdyn_occhannelapimethodmapping.md) | `objectid` | `objectid_msdyn_occhannelapimethodmapping` |


## Source

Generated from [msdyn_occhannelapimethodmapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_occhannelapimethodmapping')) on 2026-05-07.