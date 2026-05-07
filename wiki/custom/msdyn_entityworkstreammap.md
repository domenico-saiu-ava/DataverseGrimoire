---
logical: "msdyn_entityworkstreammap"
display: "Mapping flusso di lavoro entità"
entitySetName: "msdyn_entityworkstreammaps"
primaryId: "msdyn_entityworkstreammapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping flusso di lavoro entità

Indica l'entità (coda, agente e così via) mappata ai flussi di lavoro.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityworkstreammap` |
| Display name | Mapping flusso di lavoro entità |
| Display (plural) | Mapping flusso di lavoro entità |
| Schema name | `msdyn_entityWorkstreamMap` |
| Entity set (Web API) | `msdyn_entityworkstreammaps` |
| Primary id attribute | `msdyn_entityworkstreammapid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityworkstreammaps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityworkstreammaps(<guid>)
POST /api/data/v9.2/msdyn_entityworkstreammaps
PATCH /api/data/v9.2/msdyn_entityworkstreammaps(<guid>)
DELETE /api/data/v9.2/msdyn_entityworkstreammaps(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_entityid`, `msdyn_entityworkstreammapid`, `msdyn_name`, `msdyn_workstreamid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entityworkstreammap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityworkstreammap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityworkstreammap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityworkstreammap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_entityworkstreammap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_entityworkstreammap` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_entityworkstreammap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_entityworkstreammap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `queue_msdyn_entityId_msdyn_entityWorkstreamMap` | [queue](queue.md) | `msdyn_entityid` | `msdyn_entityId_queue` |
| `msdyn_liveworkstream_msdyn_workstreamId_msdyn_entityWorkstreamMap` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityworkstreammap_SyncErrors` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_DuplicateMatchingRecord` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_DuplicateBaseRecord` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `baserecordid` | `baserecordid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_AsyncOperations` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_MailboxTrackingFolders` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_UserEntityInstanceDatas` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `objectid` | `objectid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_ProcessSession` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_BulkDeleteFailures` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `regardingobjectid` | `regardingobjectid_msdyn_entityworkstreammap` |
| `msdyn_entityworkstreammap_PrincipalObjectAttributeAccesses` | [msdyn_entityworkstreammap](msdyn_entityworkstreammap.md) | `objectid` | `objectid_msdyn_entityworkstreammap` |


## Source

Generated from [msdyn_entityworkstreammap (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entityworkstreammap')) on 2026-05-07.