---
logical: "msdyn_entityworkstreammap"
display: "Entity-Workstream Map"
entitySetName: "msdyn_entityworkstreammaps"
primaryId: "msdyn_entityworkstreammapid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entity-Workstream Map

This notes the entity (queue, agent etc.) mapped to the workstreams.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityworkstreammap` |
| Display name | Entity-Workstream Map |
| Display (plural) | Entity-Workstream Maps |
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_entityId`, `msdyn_entityIdType`, `msdyn_entityWorkstreamMapId`, `msdyn_Name`, `msdyn_workstreamId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_entityworkstreammap` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_entityworkstreammap_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityworkstreammap_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityworkstreammap_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityworkstreammap_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_liveworkstream_msdyn_workstreamId_msdyn_entityWorkstreamMap` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamId` |
| `owner_msdyn_entityworkstreammap` | [owner](owner.md) | `ownerid` | `ownerid` |
| `queue_msdyn_entityId_msdyn_entityWorkstreamMap` | [queue](queue.md) | `msdyn_entityid` | `msdyn_entityId_queue` |
| `team_msdyn_entityworkstreammap` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_entityworkstreammap` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityworkstreammap_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityworkstreammap_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityworkstreammap_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_entityworkstreammap_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_entityworkstreammap_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityworkstreammap_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityworkstreammap_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityworkstreammap_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entityworkstreammap.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_entityworkstreammap.md) on 2026-05-06.