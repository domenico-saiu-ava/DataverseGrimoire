---
logical: "msdyn_originatingqueue"
display: "Mapping coda di origine"
entitySetName: "msdyn_originatingqueues"
primaryId: "msdyn_originatingqueueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping coda di origine

Questa entità esegue il mapping delle entità create da ARC nella coda in corso di elaborazione in quel momento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_originatingqueue` |
| Display name | Mapping coda di origine |
| Display (plural) | Mapping code di origine |
| Schema name | `msdyn_originatingqueue` |
| Entity set (Web API) | `msdyn_originatingqueues` |
| Primary id attribute | `msdyn_originatingqueueid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_originatingqueues?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_originatingqueues(<guid>)
POST /api/data/v9.2/msdyn_originatingqueues
PATCH /api/data/v9.2/msdyn_originatingqueues(<guid>)
DELETE /api/data/v9.2/msdyn_originatingqueues(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_createdentityid`, `msdyn_createdentitytype`, `msdyn_createdincidentid`, `msdyn_emailid`, `msdyn_name`, `msdyn_originatingqueueid`, `msdyn_queueid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_incident_msdyn_originatingqueue_createdincidentid` | [incident](incident.md) | `msdyn_createdincidentid` | `msdyn_createdincidentid` |
| `lk_msdyn_originatingqueue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_originatingqueue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_originatingqueue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_originatingqueue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_queue_msdyn_originatingqueue_queueid` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |
| `msdyn_email_msdyn_originatingqueue_email` | [email](email.md) | `msdyn_emailid` | `msdyn_emailid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_originatingqueue_SyncErrors` | [msdyn_originatingqueue](msdyn_originatingqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_originatingqueue` |
| `msdyn_originatingqueue_AsyncOperations` | [msdyn_originatingqueue](msdyn_originatingqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_originatingqueue` |
| `msdyn_originatingqueue_MailboxTrackingFolders` | [msdyn_originatingqueue](msdyn_originatingqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_originatingqueue` |
| `msdyn_originatingqueue_UserEntityInstanceDatas` | [msdyn_originatingqueue](msdyn_originatingqueue.md) | `objectid` | `objectid_msdyn_originatingqueue` |
| `msdyn_originatingqueue_ProcessSession` | [msdyn_originatingqueue](msdyn_originatingqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_originatingqueue` |
| `msdyn_originatingqueue_BulkDeleteFailures` | [msdyn_originatingqueue](msdyn_originatingqueue.md) | `regardingobjectid` | `regardingobjectid_msdyn_originatingqueue` |
| `msdyn_originatingqueue_PrincipalObjectAttributeAccesses` | [msdyn_originatingqueue](msdyn_originatingqueue.md) | `objectid` | `objectid_msdyn_originatingqueue` |


## Source

Generated from [msdyn_originatingqueue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_originatingqueue')) on 2026-05-07.