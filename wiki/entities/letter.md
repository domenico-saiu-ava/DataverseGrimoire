---
logical: "letter"
display: "Letter"
entitySetName: "letters"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["lettera", "lettere"]
synonyms_en: ["letter"]
---

# Letter

Activity that tracks the delivery of a letter. The activity can contain the electronic copy of the letter.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `letter` |
| Display name | Letter |
| Display (plural) | Letters |
| Schema name | `Letter` |
| Entity set (Web API) | `letters` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/letters?$select=subject&$top=10
GET /api/data/v9.2/letters(<guid>)
POST /api/data/v9.2/letters
PATCH /api/data/v9.2/letters(<guid>)
DELETE /api/data/v9.2/letters(<guid>)
```

## Attributes

Writable: **37** · Read-only: **18**

### Writable

`ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `Address`, `bcc`, `Category`, `cc`, `Description`, `DirectionCode`, `from`, `ImportSequenceNumber`, `IsBilled`, `IsWorkflowCreated`, `LastOnHoldTime`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `to`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ScheduledDurationMinutes`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (24)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_Letters` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_letter` |
| `activity_pointer_letter` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_Letters` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_letter` |
| `business_unit_letter_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_letter` |
| `Contact_Letters` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_letter` |
| `KnowledgeArticle_Letters` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_letter` |
| `KnowledgeBaseRecord_Letters` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_letter` |
| `lk_letter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_letter` |
| `lk_letter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_letter` |
| `lk_letter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_letter` |
| `lk_letter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_letter` |
| `manualsla_letter` | [sla](sla.md) | `slaid` | `sla_letter_sla` |
| `mspp_adplacement_Letters` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_letter` |
| `mspp_pollplacement_Letters` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_letter` |
| `mspp_publishingstatetransitionrule_Letters` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_letter` |
| `mspp_redirect_Letters` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_letter` |
| `mspp_shortcut_Letters` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_letter` |
| `mspp_website_Letters` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_letter` |
| `owner_letters` | [owner](owner.md) | `ownerid` | `ownerid_letter` |
| `processstage_letters` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_letter` | [sla](sla.md) | `slainvokedid` | `slainvokedid_letter_sla` |
| `team_letter` | [team](team.md) | `owningteam` | `owningteam_letter` |
| `TransactionCurrency_Letter` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_letter` |
| `user_letter` | [systemuser](systemuser.md) | `owninguser` | `owninguser_letter` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `letter_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `letter_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `Letter_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Letter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Letter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `letter_connections1` | _n/a_ | `record1id` | _n/a_ |
| `letter_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Letter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Letter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `letter_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Letter_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Letter_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `Letter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_letter` | _n/a_ | `regarding` | _n/a_ |


## Source

Generated from [letter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/letter.md) on 2026-05-06.