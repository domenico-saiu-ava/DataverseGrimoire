---
logical: "phonecall"
display: "Phone Call"
entitySetName: "phonecalls"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["telefonata", "chiamata", "chiamata telefonica"]
synonyms_en: ["phone call", "call", "phonecall"]
---

# Phone Call

Activity to track a telephone call.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `phonecall` |
| Display name | Phone Call |
| Display (plural) | Phone Calls |
| Schema name | `PhoneCall` |
| Entity set (Web API) | `phonecalls` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/phonecalls?$select=subject&$top=10
GET /api/data/v9.2/phonecalls(<guid>)
POST /api/data/v9.2/phonecalls
PATCH /api/data/v9.2/phonecalls(<guid>)
DELETE /api/data/v9.2/phonecalls(<guid>)
```

## Attributes

Writable: **37** · Read-only: **18**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `Category`, `Description`, `DirectionCode`, `from`, `ImportSequenceNumber`, `IsBilled`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PhoneNumber`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `to`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ScheduledDurationMinutes`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (24)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_Phonecalls` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_phonecall` |
| `activity_pointer_phonecall` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_PhoneCalls` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_phonecall` |
| `business_unit_phone_call_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_phonecall` |
| `Contact_Phonecalls` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_phonecall` |
| `KnowledgeArticle_Phonecalls` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_phonecall` |
| `KnowledgeBaseRecord_PhoneCalls` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_phonecall` |
| `lk_phonecall_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_phonecall` |
| `lk_phonecall_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_phonecall` |
| `lk_phonecall_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_phonecall` |
| `lk_phonecall_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_phonecall` |
| `manualsla_phonecall` | [sla](sla.md) | `slaid` | `sla_phonecall_sla` |
| `mspp_adplacement_PhoneCalls` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_phonecall` |
| `mspp_pollplacement_PhoneCalls` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_phonecall` |
| `mspp_publishingstatetransitionrule_PhoneCalls` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_phonecall` |
| `mspp_redirect_PhoneCalls` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_phonecall` |
| `mspp_shortcut_PhoneCalls` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_phonecall` |
| `mspp_website_PhoneCalls` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_phonecall` |
| `owner_phonecalls` | [owner](owner.md) | `ownerid` | `ownerid_phonecall` |
| `processstage_phonecalls` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_phonecall` | [sla](sla.md) | `slainvokedid` | `slainvokedid_phonecall_sla` |
| `team_phonecall` | [team](team.md) | `owningteam` | `owningteam_phonecall` |
| `TransactionCurrency_PhoneCall` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_phonecall` |
| `user_phonecall` | [systemuser](systemuser.md) | `owninguser` | `owninguser_phonecall` |

### One-to-Many (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `phonecall_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `phonecall_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `PhoneCall_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `PhoneCall_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PhoneCall_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `phonecall_connections1` | _n/a_ | `record1id` | _n/a_ |
| `phonecall_connections2` | _n/a_ | `record2id` | _n/a_ |
| `PhoneCall_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `PhoneCall_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `phonecall_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `phonecall_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `phonecall_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `PhoneCall_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PhoneCall_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `PhoneCall_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_phonecall` | _n/a_ | `regarding` | _n/a_ |


## Source

Generated from [phonecall.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/phonecall.md) on 2026-05-06.