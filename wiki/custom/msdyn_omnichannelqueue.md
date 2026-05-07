---
logical: "msdyn_omnichannelqueue"
display: "Coda multicanale (deprecata)"
entitySetName: "msdyn_omnichannelqueues"
primaryId: "msdyn_omnichannelqueueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Coda multicanale (deprecata)

Archivia elementi di lavoro multicanale di un tipo di problema o un team specifico

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_omnichannelqueue` |
| Display name | Coda multicanale (deprecata) |
| Display (plural) | Code multicanale (deprecata) |
| Schema name | `msdyn_omnichannelqueue` |
| Entity set (Web API) | `msdyn_omnichannelqueues` |
| Primary id attribute | `msdyn_omnichannelqueueid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_omnichannelqueues?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_omnichannelqueues(<guid>)
POST /api/data/v9.2/msdyn_omnichannelqueues
PATCH /api/data/v9.2/msdyn_omnichannelqueues(<guid>)
DELETE /api/data/v9.2/msdyn_omnichannelqueues(<guid>)
```

## Attributes

Writable: **11** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_isdefaultqueue`, `msdyn_name`, `msdyn_omnichannelqueueid`, `msdyn_priority`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_omnichannelqueue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_omnichannelqueue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_omnichannelqueue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_omnichannelqueue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_omnichannelqueue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_omnichannelqueue` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_omnichannelqueue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_omnichannelqueue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_omnichannelqueue_SyncErrors` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelqueue` |
| `msdyn_omnichannelqueue_AsyncOperations` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelqueue` |
| `msdyn_omnichannelqueue_MailboxTrackingFolders` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelqueue` |
| `msdyn_omnichannelqueue_UserEntityInstanceDatas` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `objectid` | `objectid_msdyn_omnichannelqueue` |
| `msdyn_omnichannelqueue_ProcessSession` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelqueue` |
| `msdyn_omnichannelqueue_BulkDeleteFailures` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelqueue` |
| `msdyn_omnichannelqueue_PrincipalObjectAttributeAccesses` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `objectid` | `objectid_msdyn_omnichannelqueue` |
| `msdyn_msdyn_omnichannelqueue_msdyn_ocliveworkitem_queueid` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueid` | `msdyn_queueid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_omnichannelqueue_msdyn_liveconversation` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `msdyn_msdyn_omnichannelqueue_msdyn_ocsession_queueid` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueid` | `msdyn_queueid_msdyn_ocsession` |
| `msdyn_omnichannelqueue_ocruleitem` | [msdyn_omnichannelqueue](msdyn_omnichannelqueue.md) | `msdyn_queueassignid` | `msdyn_QueueAssignId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_systemuser_msdyn_omnichannelqueue` | [systemuser](systemuser.md) | _n/a_ | `msdyn_systemuser_msdyn_omnichannelqueue` |

## Source

Generated from [msdyn_omnichannelqueue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_omnichannelqueue')) on 2026-05-07.