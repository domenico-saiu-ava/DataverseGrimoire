---
logical: "recurringappointmentmaster"
display: "Recurring Appointment"
entitySetName: "recurringappointmentmasters"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["appuntamento ricorrente", "ricorrenza"]
synonyms_en: ["recurring appointment", "recurring meeting"]
---

# Recurring Appointment

The Master appointment of a recurring appointment series.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recurringappointmentmaster` |
| Display name | Recurring Appointment |
| Display (plural) | Recurring Appointments |
| Schema name | `RecurringAppointmentMaster` |
| Entity set (Web API) | `recurringappointmentmasters` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/recurringappointmentmasters?$select=subject&$top=10
GET /api/data/v9.2/recurringappointmentmasters(<guid>)
POST /api/data/v9.2/recurringappointmentmasters
PATCH /api/data/v9.2/recurringappointmentmasters(<guid>)
DELETE /api/data/v9.2/recurringappointmentmasters(<guid>)
```

## Attributes

Writable: **58** · Read-only: **26**

### Writable

`ActivityId`, `Category`, `DayOfMonth`, `DaysOfWeekMask`, `Description`, `Duration`, `EffectiveEndDate`, `EffectiveStartDate`, `EndTime`, `FirstDayOfWeek`, `GlobalObjectId`, `ImportSequenceNumber`, `Instance`, `Interval`, `IsAllDayEvent`, `IsBilled`, `IsMapiPrivate`, `IsNthMonthly`, `IsNthYearly`, `IsOnlineMeeting`, `IsRegenerate`, `IsWeekDayPattern`, `IsWorkflowCreated`, `Location`, `MonthOfYear`, `Occurrences`, `OnlineMeetingChatId`, `OnlineMeetingId`, `OnlineMeetingJoinUrl`, `OnlineMeetingType`, `OptionalAttendees`, `Organizer`, `OutlookOwnerApptId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PatternEndDate`, `PatternEndType`, `PatternStartDate`, `PriorityCode`, `ProcessId`, `RecurrencePatternType`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `SeriesStatus`, `SortDate`, `StageId`, `StartTime`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeletedExceptionsList`, `ExchangeRate`, `ExpansionStateCode`, `GroupId`, `InstanceTypeCode`, `IsRegularActivity`, `IsUnsafe`, `LastExpandedInstanceDate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `NextExpansionInstanceDate`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `RuleId`, `SafeDescription`, `ScheduledEnd`, `ScheduledStart`, `VersionNumber`

## Relationships

### Many-to-One (23)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_RecurringAppointmentMasters` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_recurringappointmentmaster` |
| `activity_pointer_recurringappointmentmaster` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_RecurringAppointmentMasters` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_recurringappointmentmaster` |
| `business_unit_recurringappointmentmaster_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_recurringappointmentmaster` |
| `Contact_RecurringAppointmentMasters` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_recurringappointmentmaster` |
| `KnowledgeArticle_RecurringAppointmentMasters` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_recurringappointmentmaster` |
| `KnowledgeBaseRecord_RecurringAppointmentMasters` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_recurringappointmentmaster` |
| `lk_recurringappointmentmaster_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_recurringappointmentmaster` |
| `lk_recurringappointmentmaster_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_recurringappointmentmaster` |
| `lk_recurringappointmentmaster_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_recurringappointmentmaster` |
| `lk_recurringappointmentmaster_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_recurringappointmentmaster` |
| `mspp_adplacement_RecurringAppointmentMasters` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_recurringappointmentmaster` |
| `mspp_pollplacement_RecurringAppointmentMasters` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_recurringappointmentmaster` |
| `mspp_publishingstatetransitionrule_RecurringAppointmentMasters` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_recurringappointmentmaster` |
| `mspp_redirect_RecurringAppointmentMasters` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_recurringappointmentmaster` |
| `mspp_shortcut_RecurringAppointmentMasters` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_recurringappointmentmaster` |
| `mspp_website_RecurringAppointmentMasters` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_recurringappointmentmaster` |
| `owner_recurringappointmentmasters` | [owner](owner.md) | `ownerid` | `ownerid_recurringappointmentmaster` |
| `processstage_recurringappointmentmasters` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `recurrencerule_recurringappointmentmaster` | [recurrencerule](recurrencerule.md) | `activityid` | `activityid_recurrencerule` |
| `team_recurringappointmentmaster` | [team](team.md) | `owningteam` | `owningteam_recurringappointmentmaster` |
| `TransactionCurrency_RecurringAppointmentMaster` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_recurringappointmentmaster` |
| `user_recurringappointmentmaster` | [systemuser](systemuser.md) | `owninguser` | `owninguser_recurringappointmentmaster` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `recurringappointmentmaster_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recurringappointmentmaster_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `RecurringAppointmentMaster_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `recurringappointmentmaster_appointment` | _n/a_ | `seriesid` | _n/a_ |
| `RecurringAppointmentMaster_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `RecurringAppointmentMaster_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recurringappointmentmaster_connections1` | _n/a_ | `record1id` | _n/a_ |
| `recurringappointmentmaster_connections2` | _n/a_ | `record2id` | _n/a_ |
| `RecurringAppointmentMaster_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `RecurringAppointmentMaster_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `recurringappointmentmaster_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recurringappointmentmaster_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `recurringappointmentmaster_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `RecurringAppointmentMaster_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `RecurringAppointmentMaster_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `RecurringAppointmentMaster_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [recurringappointmentmaster.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/recurringappointmentmaster.md) on 2026-05-06.