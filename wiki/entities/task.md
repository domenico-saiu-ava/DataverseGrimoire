---
logical: "task"
display: "Task"
entitySetName: "tasks"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["compito", "task", "attivita da fare", "todo"]
synonyms_en: ["task", "todo", "to-do"]
---

# Task

Generic activity representing work needed to be done.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `task` |
| Display name | Task |
| Display (plural) | Tasks |
| Schema name | `Task` |
| Entity set (Web API) | `tasks` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/tasks?$select=subject&$top=10
GET /api/data/v9.2/tasks(<guid>)
POST /api/data/v9.2/tasks
PATCH /api/data/v9.2/tasks(<guid>)
DELETE /api/data/v9.2/tasks(<guid>)
```

## Attributes

Writable: **34** · Read-only: **18**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `Category`, `CrmTaskAssignedUniqueId`, `Description`, `ImportSequenceNumber`, `IsBilled`, `IsWorkflowCreated`, `LastOnHoldTime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PercentComplete`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ScheduledDurationMinutes`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (24)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_Tasks` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_task` |
| `activity_pointer_task` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_Tasks` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_task` |
| `business_unit_task_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_task` |
| `Contact_Tasks` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_task` |
| `KnowledgeArticle_Tasks` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_task` |
| `KnowledgeBaseRecord_Tasks` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_task` |
| `lk_task_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_task` |
| `lk_task_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_task` |
| `lk_task_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_task` |
| `lk_task_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_task` |
| `manualsla_task` | [sla](sla.md) | `slaid` | `sla_task_sla` |
| `mspp_adplacement_Tasks` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_task` |
| `mspp_pollplacement_Tasks` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_task` |
| `mspp_publishingstatetransitionrule_Tasks` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_task` |
| `mspp_redirect_Tasks` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_task` |
| `mspp_shortcut_Tasks` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_task` |
| `mspp_website_Tasks` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_task` |
| `owner_tasks` | [owner](owner.md) | `ownerid` | `ownerid_task` |
| `processstage_tasks` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_task` | [sla](sla.md) | `slainvokedid` | `slainvokedid_task_sla` |
| `team_task` | [team](team.md) | `owningteam` | `owningteam_task` |
| `TransactionCurrency_Task` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_task` |
| `user_task` | [systemuser](systemuser.md) | `owninguser` | `owninguser_task` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `slakpiinstance_task` | _n/a_ | `regarding` | _n/a_ |
| `task_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `task_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `Task_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Task_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Task_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `task_connections1` | _n/a_ | `record1id` | _n/a_ |
| `task_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Task_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Task_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `task_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `task_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `task_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Task_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Task_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `Task_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [task.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/task.md) on 2026-05-06.