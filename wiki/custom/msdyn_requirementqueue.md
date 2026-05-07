---
logical: "msdyn_requirementqueue"
display: "Coda del fabbisogno"
entitySetName: "msdyn_requirementqueues"
primaryId: "msdyn_requirementqueueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Coda del fabbisogno

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementqueue` |
| Display name | Coda del fabbisogno |
| Display (plural) | Code del fabbisogno |
| Schema name | `msdyn_requirementqueue` |
| Entity set (Web API) | `msdyn_requirementqueues` |
| Primary id attribute | `msdyn_requirementqueueid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementqueues?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementqueues(<guid>)
POST /api/data/v9.2/msdyn_requirementqueues
PATCH /api/data/v9.2/msdyn_requirementqueues(<guid>)
DELETE /api/data/v9.2/msdyn_requirementqueues(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_queueid`, `msdyn_requirementqueueid`, `msdyn_resourcerequirementid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementqueue_queueid_queue` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `msdyn_requirementqueue_resourcerequirementid_ms` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirementid` | `msdyn_resourcerequirementid` |
| `lk_msdyn_requirementqueue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementqueue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementqueue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementqueue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementqueue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementqueue` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementqueue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementqueue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementqueue_SyncErrors` | [msdyn_requirementqueue](msdyn_requirementqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementqueue` |
| `msdyn_requirementqueue_AsyncOperations` | [msdyn_requirementqueue](msdyn_requirementqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementqueue` |
| `msdyn_requirementqueue_MailboxTrackingFolders` | [msdyn_requirementqueue](msdyn_requirementqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementqueue` |
| `msdyn_requirementqueue_UserEntityInstanceDatas` | [msdyn_requirementqueue](msdyn_requirementqueue.md) | `objectid` | `objectid_msdyn_requirementqueue` |
| `msdyn_requirementqueue_ProcessSession` | [msdyn_requirementqueue](msdyn_requirementqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementqueue` |
| `msdyn_requirementqueue_BulkDeleteFailures` | [msdyn_requirementqueue](msdyn_requirementqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementqueue` |
| `msdyn_requirementqueue_PrincipalObjectAttributeAccesses` | [msdyn_requirementqueue](msdyn_requirementqueue.md) | `objectid` | `objectid_msdyn_requirementqueue` |


## Source

Generated from [msdyn_requirementqueue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementqueue')) on 2026-05-07.