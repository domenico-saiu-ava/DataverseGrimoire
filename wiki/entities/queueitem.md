---
logical: "queueitem"
display: "Queue Item"
entitySetName: "queueitems"
primaryId: "queueitemid"
primaryName: "title"
tableType: "Standard"
ownership: "None"
synonyms_it: ["elemento coda", "voce coda"]
synonyms_en: ["queue item", "queueitem"]
---

# Queue Item

A specific item in a queue, such as a case record or an activity record.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `queueitem` |
| Display name | Queue Item |
| Display (plural) | Queue Items |
| Schema name | `QueueItem` |
| Entity set (Web API) | `queueitems` |
| Primary id attribute | `queueitemid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/queueitems?$select=title&$top=10
GET /api/data/v9.2/queueitems(<guid>)
POST /api/data/v9.2/queueitems
PATCH /api/data/v9.2/queueitems(<guid>)
DELETE /api/data/v9.2/queueitems(<guid>)
```

## Attributes

Writable: **19** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `ObjectId`, `ObjectIdTypeCode`, `OverriddenCreatedOn`, `Priority`, `QueueId`, `QueueItemId`, `Sender`, `State`, `StateCode`, `Status`, `StatusCode`, `TimeZoneRuleVersionNumber`, `Title`, `ToRecipients`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`, `WorkerId`, `WorkerIdType`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EnteredOn`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `ObjectTypeCode`, `OrganizationId`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `VersionNumber`, `WorkerIdModifiedOn`

## Relationships

### Many-to-One (23)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActivityPointer_QueueItem` | [activitypointer](activitypointer.md) | `objectid` | `objectid_activitypointer` |
| `adx_inviteredemption_QueueItems` | [adx_inviteredemption](adx_inviteredemption.md) | `objectid` | `objectid_adx_inviteredemption` |
| `adx_portalcomment_QueueItems` | [adx_portalcomment](adx_portalcomment.md) | `objectid` | `objectid_adx_portalcomment` |
| `Appointment_QueueItem` | [appointment](appointment.md) | `objectid` | `objectid_appointment` |
| `chat_QueueItems` | [chat](chat.md) | `objectid` | `objectid_chat` |
| `Email_QueueItem` | [email](email.md) | `objectid` | `objectid_email` |
| `Fax_QueueItem` | [fax](fax.md) | `objectid` | `objectid_fax` |
| `knowledgearticle_QueueItems` | [knowledgearticle](knowledgearticle.md) | `objectid` | `objectid_knowledgearticle` |
| `Letter_QueueItem` | [letter](letter.md) | `objectid` | `objectid_letter` |
| `lk_queueitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_queueitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_queueitembase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_queueitembase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_queueitembase_workerid` | [systemuser](systemuser.md) | `workerid` | `workerid_systemuser` |
| `msdyn_knowledgearticletemplate_QueueItems` | [msdyn_knowledgearticletemplate](msdyn_knowledgearticletemplate.md) | `objectid` | `objectid_msdyn_knowledgearticletemplate` |
| `organization_queueitems` | [organization](organization.md) | `organizationid` | `organizationid` |
| `PhoneCall_QueueItem` | [phonecall](phonecall.md) | `objectid` | `objectid_phonecall` |
| `queue_entries` | [queue](queue.md) | `queueid` | `queueid` |
| `RecurringAppointmentMaster_QueueItem` | [recurringappointmentmaster](recurringappointmentmaster.md) | `objectid` | `objectid_recurringappointmentmaster` |
| `SocialActivity_QueueItem` | [socialactivity](socialactivity.md) | `objectid` | `objectid_socialactivity` |
| `Task_QueueItem` | [task](task.md) | `objectid` | `objectid_task` |
| `team_queueitembase_workerid` | [team](team.md) | `workerid` | `workerid_team` |
| `TransactionCurrency_QueueItem` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `QueueItem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `QueueItem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `queueitem_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `QueueItem_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `QueueItem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [queueitem.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/queueitem.md) on 2026-05-06.