---
logical: "fax"
display: "Fax"
entitySetName: "faxes"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["fax"]
synonyms_en: ["fax"]
---

# Fax

Activity that tracks call outcome and number of pages for a fax and optionally stores an electronic copy of the document.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fax` |
| Display name | Fax |
| Display (plural) | Faxes |
| Schema name | `Fax` |
| Entity set (Web API) | `faxes` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/faxes?$select=subject&$top=10
GET /api/data/v9.2/faxes(<guid>)
POST /api/data/v9.2/faxes
PATCH /api/data/v9.2/faxes(<guid>)
DELETE /api/data/v9.2/faxes(<guid>)
```

## Attributes

Writable: **39** · Read-only: **18**

### Writable

`ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BillingCode`, `Category`, `CoverPageName`, `Description`, `DirectionCode`, `FaxNumber`, `from`, `ImportSequenceNumber`, `IsBilled`, `IsWorkflowCreated`, `LastOnHoldTime`, `NumberOfPages`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `SubscriptionId`, `TimeZoneRuleVersionNumber`, `to`, `TransactionCurrencyId`, `TraversedPath`, `Tsid`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ScheduledDurationMinutes`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (24)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Account_Faxes` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_fax` |
| `activity_pointer_fax` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_Faxes` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_fax` |
| `business_unit_fax_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_fax` |
| `Contact_Faxes` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_fax` |
| `KnowledgeArticle_Faxes` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_fax` |
| `KnowledgeBaseRecord_Faxes` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_fax` |
| `lk_fax_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_fax` |
| `lk_fax_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_fax` |
| `lk_fax_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_fax` |
| `lk_fax_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_fax` |
| `manualsla_fax` | [sla](sla.md) | `slaid` | `sla_fax_sla` |
| `mspp_adplacement_Faxes` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_fax` |
| `mspp_pollplacement_Faxes` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_fax` |
| `mspp_publishingstatetransitionrule_Faxes` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_fax` |
| `mspp_redirect_Faxes` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_fax` |
| `mspp_shortcut_Faxes` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_fax` |
| `mspp_website_Faxes` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_fax` |
| `owner_faxes` | [owner](owner.md) | `ownerid` | `ownerid_fax` |
| `processstage_faxes` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_fax` | [sla](sla.md) | `slainvokedid` | `slainvokedid_fax_sla` |
| `team_fax` | [team](team.md) | `owningteam` | `owningteam_fax` |
| `TransactionCurrency_Fax` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_fax` |
| `user_fax` | [systemuser](systemuser.md) | `owninguser` | `owninguser_fax` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `fax_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fax_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `Fax_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Fax_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Fax_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fax_connections1` | _n/a_ | `record1id` | _n/a_ |
| `fax_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Fax_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Fax_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `fax_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Fax_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Fax_QueueItem` | _n/a_ | `objectid` | _n/a_ |
| `Fax_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `slakpiinstance_fax` | _n/a_ | `regarding` | _n/a_ |


## Source

Generated from [fax.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/fax.md) on 2026-05-06.