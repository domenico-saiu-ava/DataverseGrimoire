---
logical: "appointment"
display: "Appointment"
entitySetName: "appointments"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["appuntamento", "appuntamenti", "riunione", "meeting"]
synonyms_en: ["appointment", "meeting"]
---

# Appointment

Commitment representing a time interval with start/end times and duration.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appointment` |
| Display name | Appointment |
| Display (plural) | Appointments |
| Schema name | `Appointment` |
| Entity set (Web API) | `appointments` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/appointments?$select=subject&$top=10
GET /api/data/v9.2/appointments(<guid>)
POST /api/data/v9.2/appointments
PATCH /api/data/v9.2/appointments(<guid>)
DELETE /api/data/v9.2/appointments(<guid>)
```

## Attributes

Writable: **48** · Read-only: **26**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `AttachmentErrors`, `Category`, `Description`, `GlobalObjectId`, `ImportSequenceNumber`, `IsAllDayEvent`, `IsBilled`, `IsDraft`, `IsMapiPrivate`, `IsOnlineMeeting`, `IsWorkflowCreated`, `LastOnHoldTime`, `Location`, `OnlineMeetingChatId`, `OnlineMeetingId`, `OnlineMeetingJoinUrl`, `OnlineMeetingType`, `OptionalAttendees`, `Organizer`, `OutlookOwnerApptId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `requiredattendees`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `AttachmentCount`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `FormattedScheduledEnd`, `FormattedScheduledStart`, `InstanceTypeCode`, `IsRegularActivity`, `IsUnsafe`, `ModifiedBy`, `ModifiedFieldsMask`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OriginalStartDate`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SafeDescription`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (25)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_Appointments` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_appointment` |
| `activity_pointer_appointment` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_Appointments` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_appointment` |
| `business_unit_appointment_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_appointment` |
| `Contact_Appointments` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_appointment` |
| `KnowledgeArticle_Appointments` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_appointment` |
| `KnowledgeBaseRecord_Appointments` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_appointment` |
| `lk_appointment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_appointment` |
| `lk_appointment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_appointment` |
| `lk_appointment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_appointment` |
| `lk_appointment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_appointment` |
| `manualsla_appointment` | [sla](sla.md) | `slaid` | `sla_appointment_sla` |
| `mspp_adplacement_Appointments` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_appointment` |
| `mspp_pollplacement_Appointments` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_appointment` |
| `mspp_publishingstatetransitionrule_Appointments` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_appointment` |
| `mspp_redirect_Appointments` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_appointment` |
| `mspp_shortcut_Appointments` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_appointment` |
| `mspp_website_Appointments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_appointment` |
| `owner_appointments` | [owner](owner.md) | `ownerid` | `ownerid_appointment` |
| `processstage_appointments` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `recurringappointmentmaster_appointment` | [recurringappointmentmaster](recurringappointmentmaster.md) | `seriesid` | `seriesid_recurringappointmentmaster` |
| `sla_appointment` | [sla](sla.md) | `slainvokedid` | `slainvokedid_appointment_sla` |
| `team_appointment` | [team](team.md) | `owningteam` | `owningteam_appointment` |
| `TransactionCurrency_Appointment` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_appointment` |
| `user_appointment` | [systemuser](systemuser.md) | `owninguser` | `owninguser_appointment` |

### One-to-Many (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appointment_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appointment_activity_mime_attachment` | _n/a_ | `objectid` | _n/a_ |
| `appointment_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `Appointment_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Appointment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Appointment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appointment_connections1` | _n/a_ | `record1id` | _n/a_ |
| `appointment_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Appointment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Appointment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `appointment_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appointment_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appointment_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Appointment_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Appointment_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `Appointment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_appointment` | _n/a_ | `regarding` | _n/a_ |


## Source

Generated from [appointment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appointment.md) on 2026-05-06.