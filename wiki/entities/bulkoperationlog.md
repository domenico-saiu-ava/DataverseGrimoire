---
logical: "bulkoperationlog"
display: "Bulk Operation Log"
entitySetName: "bulkoperationlogs"
primaryId: "bulkoperationlogid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Bulk Operation Log

Log used to track bulk operation execution, successes, and failures.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkoperationlog` |
| Display name | Bulk Operation Log |
| Display (plural) | Bulk Operation Logs |
| Schema name | `BulkOperationLog` |
| Entity set (Web API) | `bulkoperationlogs` |
| Primary id attribute | `bulkoperationlogid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bulkoperationlogs?$select=name&$top=10
GET /api/data/v9.2/bulkoperationlogs(<guid>)
POST /api/data/v9.2/bulkoperationlogs
PATCH /api/data/v9.2/bulkoperationlogs(<guid>)
DELETE /api/data/v9.2/bulkoperationlogs(<guid>)
```

## Attributes

Writable: **17** · Read-only: **9**

### Writable

`AdditionalInfo`, `BulkOperationId`, `BulkOperationIdType`, `BulkOperationLogId`, `CampaignActivityId`, `CampaignActivityIdType`, `CreatedObjectId`, `CreatedObjectIdTypeCode`, `ErrorDescriptionFormatted`, `ErrorNumberFormatted`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `RegardingObjectId`, `RegardingObjectIdTypeCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ErrorNumber`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activity_pointer_BulkOperation_logs` | [activitypointer](activitypointer.md) | `bulkoperationid` | `bulkoperationid_activitypointer` |
| `BulkOperation_logs` | [bulkoperation](bulkoperation.md) | `bulkoperationid` | `bulkoperationid` |
| `CampaignActivity_logs` | [campaignactivity](campaignactivity.md) | `campaignactivityid` | `CampaignActivityId_Logs` |
| `CreatedAccount_BulkOperationLogs2` | [account](account.md) | `createdobjectid` | `createdobjectid_account` |
| `CreatedActivity_BulkOperationLogs` | [activitypointer](activitypointer.md) | `createdobjectid` | `createdobjectid_activitypointer` |
| `CreatedContact_BulkOperationLogs` | [contact](contact.md) | `createdobjectid` | `createdobjectid_contact` |
| `CreatedLead_BulkOperationLogs` | [lead](lead.md) | `createdobjectid` | `createdobjectid_lead` |
| `CreatedOpportunity_BulkOperationLogs` | [opportunity](opportunity.md) | `createdobjectid` | `createdobjectid_opportunity` |
| `SourceAccount_BulkOperationLogs` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account` |
| `SourceContact_BulkOperationLogs` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact` |
| `SourceLead_BulkOperationLogs` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead` |
| `team_bulkoperationlog` | [team](team.md) | `owningteam` | `owningteam` |
| `user_bulkoperationlog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BulkOperationLog_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `BulkOperationLog_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperationlog_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `bulkoperationlog_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `bulkoperationlog_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BulkOperation_Accounts` | _n/a_ | _n/a_ | _n/a_ |
| `BulkOperation_Contacts` | _n/a_ | _n/a_ | _n/a_ |
| `BulkOperation_Leads` | _n/a_ | _n/a_ | _n/a_ |
| `CampaignActivity_Accounts` | _n/a_ | _n/a_ | _n/a_ |
| `CampaignActivity_Contacts` | _n/a_ | _n/a_ | _n/a_ |
| `CampaignActivity_Leads` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [bulkoperationlog.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/bulkoperationlog.md) on 2026-05-06.