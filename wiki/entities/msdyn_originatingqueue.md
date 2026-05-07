---
logical: "msdyn_originatingqueue"
display: "Originating Queue Mapping"
entitySetName: "msdyn_originatingqueues"
primaryId: "msdyn_originatingqueueid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
---

# Originating Queue Mapping

This entity maps entities created by ARC to the queue that was being procesed at that time

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_originatingqueue` |
| Display name | Originating Queue Mapping |
| Display (plural) | Originating Queue Mappings |
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

`ImportSequenceNumber`, `msdyn_createdentityid`, `msdyn_createdentitytype`, `msdyn_createdincidentid`, `msdyn_emailid`, `msdyn_name`, `msdyn_originatingqueueId`, `msdyn_queueid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_originatingqueue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_originatingqueue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_originatingqueue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_originatingqueue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_email_msdyn_originatingqueue_email` | [email](email.md) | `msdyn_emailid` | `msdyn_emailid` |
| `msdyn_incident_msdyn_originatingqueue_createdincidentid` | [incident](incident.md) | `msdyn_createdincidentid` | `msdyn_createdincidentid` |
| `msdyn_queue_msdyn_originatingqueue_queueid` | [queue](queue.md) | `msdyn_queueid` | `msdyn_queueid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_originatingqueue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_originatingqueue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_originatingqueue_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_originatingqueue_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_originatingqueue_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_originatingqueue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_originatingqueue.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_originatingqueue.md) on 2026-05-06.