---
logical: "socialactivity"
display: "Social Activity"
entitySetName: "socialactivities"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["attivita social", "post social"]
synonyms_en: ["social activity"]
---

# Social Activity

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `socialactivity` |
| Display name | Social Activity |
| Display (plural) | Social Activities |
| Schema name | `SocialActivity` |
| Entity set (Web API) | `socialactivities` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/socialactivities?$select=subject&$top=10
GET /api/data/v9.2/socialactivities(<guid>)
POST /api/data/v9.2/socialactivities
PATCH /api/data/v9.2/socialactivities(<guid>)
DELETE /api/data/v9.2/socialactivities(<guid>)
```

## Attributes

Writable: **49** · Read-only: **21**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `Community`, `Description`, `DirectionCode`, `From`, `ImportSequenceNumber`, `InResponseTo`, `IsBilled`, `IsWorkflowCreated`, `LastOnHoldTime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PostAuthor`, `PostAuthorAccount`, `PostAuthorAccountType`, `PostAuthorType`, `PostedOn`, `PostFromProfileId`, `PostId`, `PostMessageType`, `PostToProfileId`, `PostURL`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `SentimentValue`, `SLAId`, `SocialAdditionalParams`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `ThreadId`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostAuthorAccountName`, `PostAuthorAccountYomiName`, `PostAuthorName`, `PostAuthorYomiName`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (29)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_SocialActivities` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_socialactivity` |
| `activity_pointer_socialactivity` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_SocialActivities` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_socialactivity` |
| `AsyncOperation_SocialActivities` | [asyncoperation](asyncoperation.md) | `regardingobjectid` | `regardingobjectid_asyncoperation` |
| `business_unit_socialactivity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_socialactivity` |
| `Contact_SocialActivities` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_socialactivity` |
| `KnowledgeArticle_SocialActivities` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_socialactivity` |
| `KnowledgeBaseRecord_SocialActivities` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_socialactivity` |
| `lk_socialactivity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_socialactivity` |
| `lk_socialactivity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_socialactivity` |
| `lk_socialactivitybase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_socialactivity` |
| `lk_socialactivitybase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_socialactivity` |
| `manualsla_socialactivity` | [sla](sla.md) | `slaid` | `sla_socialactivity_sla` |
| `mspp_adplacement_SocialActivities` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_socialactivity` |
| `mspp_pollplacement_SocialActivities` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_socialactivity` |
| `mspp_publishingstatetransitionrule_SocialActivities` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_socialactivity` |
| `mspp_redirect_SocialActivities` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_socialactivity` |
| `mspp_shortcut_SocialActivities` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_socialactivity` |
| `mspp_website_SocialActivities` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_socialactivity` |
| `owner_socialactivities` | [owner](owner.md) | `ownerid` | `ownerid_socialactivity` |
| `sla_socialactivity` | [sla](sla.md) | `slainvokedid` | `slainvokedid_socialactivity_sla` |
| `SocialActivity_PostAuthor_accounts` | [account](account.md) | `postauthor` | `postauthor_account` |
| `socialactivity_postauthor_contacts` | [contact](contact.md) | `postauthor` | `postauthor_contact` |
| `SocialActivity_PostAuthorAccount_accounts` | [account](account.md) | `postauthoraccount` | `postauthoraccount_account` |
| `socialactivity_postauthoraccount_contacts` | [contact](contact.md) | `postauthoraccount` | `postauthoraccount_contact` |
| `Socialprofile_SocialActivities` | [socialprofile](socialprofile.md) | `postfromprofileid` | `postfromprofileid` |
| `team_socialactivity` | [team](team.md) | `owningteam` | `owningteam_socialactivity` |
| `transactioncurrency_socialactivity` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_socialactivity` |
| `user_socialactivity` | [systemuser](systemuser.md) | `owninguser` | `owninguser_socialactivity` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `slakpiinstance_socialactivity` | _n/a_ | `regarding` | _n/a_ |
| `socialactivity_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `SocialActivity_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `SocialActivity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SocialActivity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `socialactivity_connections1` | _n/a_ | `record1id` | _n/a_ |
| `socialactivity_connections2` | _n/a_ | `record2id` | _n/a_ |
| `SocialActivity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `SocialActivity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `socialactivity_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `SocialActivity_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SocialActivity_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `SocialActivity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [socialactivity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/socialactivity.md) on 2026-05-06.