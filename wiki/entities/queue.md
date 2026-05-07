---
logical: "queue"
display: "Queue"
entitySetName: "queues"
primaryId: "queueid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["coda", "code"]
synonyms_en: ["queue"]
---

# Queue

A list of records that require action, such as accounts, activities, and cases.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `queue` |
| Display name | Queue |
| Display (plural) | Queues |
| Schema name | `Queue` |
| Entity set (Web API) | `queues` |
| Primary id attribute | `queueid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/queues?$select=name&$top=10
GET /api/data/v9.2/queues(<guid>)
POST /api/data/v9.2/queues
PATCH /api/data/v9.2/queues(<guid>)
DELETE /api/data/v9.2/queues(<guid>)
```

## Attributes

Writable: **20** · Read-only: **26**

### Writable

`BusinessUnitId`, `Description`, `EMailAddress`, `EmailRouterAccessApproval`, `EntityImage`, `IgnoreUnsolicitedEmail`, `ImportSequenceNumber`, `IncomingEmailDeliveryMethod`, `IncomingEmailFilteringMethod`, `Name`, `OutgoingEmailDeliveryMethod`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PrimaryUserId`, `QueueId`, `QueueViewType`, `StateCode`, `StatusCode`, `TransactionCurrencyId`

### Read-only

`AllowEmailCredentials`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DefaultMailbox`, `EmailPassword`, `EmailUsername`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `IsEmailAddressApprovedByO365Admin`, `IsFaxQueue`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `NumberOfItems`, `NumberOfMembers`, `OrganizationId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `QueueTypeCode`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_queues` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `business_unit_queues2` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_queue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_queue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_queuebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_queuebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_queues` | [organization](organization.md) | `organizationid` | `organizationid` |
| `owner_queues` | [owner](owner.md) | `ownerid` | `ownerid` |
| `queue_defaultmailbox_mailbox` | [mailbox](mailbox.md) | `defaultmailbox` | `defaultmailbox` |
| `queue_primary_user` | [systemuser](systemuser.md) | `primaryuserid` | `primaryuserid` |
| `TransactionCurrency_Queue` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `email_acceptingentity_queue` | _n/a_ | `acceptingentityid` | _n/a_ |
| `mailbox_regarding_queue` | _n/a_ | `regardingobjectid` | _n/a_ |
| `queue_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Queue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Queue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Queue_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Queue_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Queue_Email_EmailSender` | _n/a_ | `emailsender` | _n/a_ |
| `queue_entries` | _n/a_ | `queueid` | _n/a_ |
| `queue_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `queue_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `queue_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Queue_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Queue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `queue_system_user` | _n/a_ | `queueid` | _n/a_ |
| `queue_team` | _n/a_ | `queueid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `queuemembership_association` | [queueid](queueid.md) | _n/a_ | _n/a_ |

## Source

Generated from [queue.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/queue.md) on 2026-05-06.