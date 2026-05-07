---
logical: "msdyn_agentgroupregion"
display: "Area geografica gruppo di agenti"
entitySetName: "msdyn_agentgroupregions"
primaryId: "msdyn_agentgroupregionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Area geografica gruppo di agenti

Rappresenta l'associazione dei gruppi di utenti all'area geografica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgroupregion` |
| Display name | Area geografica gruppo di agenti |
| Display (plural) | Aree geografiche gruppo di agenti |
| Schema name | `msdyn_agentgroupregion` |
| Entity set (Web API) | `msdyn_agentgroupregions` |
| Primary id attribute | `msdyn_agentgroupregionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgroupregions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgroupregions(<guid>)
POST /api/data/v9.2/msdyn_agentgroupregions
PATCH /api/data/v9.2/msdyn_agentgroupregions(<guid>)
DELETE /api/data/v9.2/msdyn_agentgroupregions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentgroupid`, `msdyn_agentgroupregionid`, `msdyn_name`, `msdyn_regionid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentgroupregion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroupregion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroupregion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroupregion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentgroupregion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentgroupregion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentgroupregion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentgroupregion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_agentgroupregion_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupregion_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupregion_SyncErrors` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_DuplicateMatchingRecord` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_DuplicateBaseRecord` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `baserecordid` | `baserecordid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_AsyncOperations` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_MailboxTrackingFolders` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_UserEntityInstanceDatas` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `objectid` | `objectid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_ProcessSession` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_BulkDeleteFailures` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentgroupregion` |
| `msdyn_agentgroupregion_PrincipalObjectAttributeAccesses` | [msdyn_agentgroupregion](msdyn_agentgroupregion.md) | `objectid` | `objectid_msdyn_agentgroupregion` |


## Source

Generated from [msdyn_agentgroupregion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentgroupregion')) on 2026-05-07.