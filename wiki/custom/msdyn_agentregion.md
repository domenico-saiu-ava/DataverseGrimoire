---
logical: "msdyn_agentregion"
display: "Area geografica agente"
entitySetName: "msdyn_agentregions"
primaryId: "msdyn_agentregionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Area geografica agente

Rappresenta l'associazione degli utenti all'area geografica

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentregion` |
| Display name | Area geografica agente |
| Display (plural) | Aree geografiche agente |
| Schema name | `msdyn_agentregion` |
| Entity set (Web API) | `msdyn_agentregions` |
| Primary id attribute | `msdyn_agentregionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentregions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentregions(<guid>)
POST /api/data/v9.2/msdyn_agentregions
PATCH /api/data/v9.2/msdyn_agentregions(<guid>)
DELETE /api/data/v9.2/msdyn_agentregions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentregionid`, `msdyn_name`, `msdyn_regionid`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentregion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentregion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentregion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentregion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentregion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentregion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentregion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentregion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_agentregion_regionid_msdyn_region` | [msdyn_region](msdyn_region.md) | `msdyn_regionid` | `msdyn_regionid` |
| `msdyn_agentregion_systemuserid_systemuser` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentregion_SyncErrors` | [msdyn_agentregion](msdyn_agentregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentregion` |
| `msdyn_agentregion_DuplicateMatchingRecord` | [msdyn_agentregion](msdyn_agentregion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentregion` |
| `msdyn_agentregion_DuplicateBaseRecord` | [msdyn_agentregion](msdyn_agentregion.md) | `baserecordid` | `baserecordid_msdyn_agentregion` |
| `msdyn_agentregion_AsyncOperations` | [msdyn_agentregion](msdyn_agentregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentregion` |
| `msdyn_agentregion_MailboxTrackingFolders` | [msdyn_agentregion](msdyn_agentregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentregion` |
| `msdyn_agentregion_UserEntityInstanceDatas` | [msdyn_agentregion](msdyn_agentregion.md) | `objectid` | `objectid_msdyn_agentregion` |
| `msdyn_agentregion_ProcessSession` | [msdyn_agentregion](msdyn_agentregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentregion` |
| `msdyn_agentregion_BulkDeleteFailures` | [msdyn_agentregion](msdyn_agentregion.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentregion` |
| `msdyn_agentregion_PrincipalObjectAttributeAccesses` | [msdyn_agentregion](msdyn_agentregion.md) | `objectid` | `objectid_msdyn_agentregion` |


## Source

Generated from [msdyn_agentregion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentregion')) on 2026-05-07.