---
logical: "adx_portalcomment"
display: "Portal Comment"
entitySetName: "adx_portalcomments"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Portal Comment

An activity which is used to share information between the user and the customer on the portal.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_portalcomment` |
| Display name | Portal Comment |
| Display (plural) | Portal Comments |
| Schema name | `adx_portalcomment` |
| Entity set (Web API) | `adx_portalcomments` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_portalcomments?$select=subject&$top=10
GET /api/data/v9.2/adx_portalcomments(<guid>)
POST /api/data/v9.2/adx_portalcomments
PATCH /api/data/v9.2/adx_portalcomments(<guid>)
DELETE /api/data/v9.2/adx_portalcomments(<guid>)
```

## Attributes

Writable: **47** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `adx_PortalCommentDirectionCode`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (26)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_adx_portalcomments` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_adx_portalcomment` |
| `activity_pointer_adx_portalcomment` | [activitypointer](activitypointer.md) | `activityid` | `activityid_adx_portalcomment` |
| `adx_invitation_adx_portalcomments` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_adx_portalcomment` |
| `adx_portalcomment_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_adx_portalcomment` |
| `adx_portalcomment_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_adx_portalcomment` |
| `adx_portalcomment_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_adx_portalcomment` |
| `adx_portalcomment_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_adx_portalcomment` |
| `adx_portalcomment_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_adx_portalcomment` |
| `adx_portalcomment_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_adx_portalcomment` |
| `adx_portalcomment_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_adx_portalcomment` |
| `adx_portalcomment_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_adx_portalcomment` |
| `adx_portalcomment_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_adx_portalcomment` |
| `adx_portalcomment_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_adx_portalcomment` |
| `adx_portalcomment_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_adx_portalcomment` |
| `adx_portalcomment_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_adx_portalcomment` |
| `contact_adx_portalcomments` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_adx_portalcomment` |
| `interactionforemail_adx_portalcomments` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_adx_portalcomment` |
| `knowledgearticle_adx_portalcomments` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_adx_portalcomment` |
| `knowledgebaserecord_adx_portalcomments` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_adx_portalcomment` |
| `mspp_adplacement_adx_portalcomments` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_adx_portalcomment` |
| `mspp_pollplacement_adx_portalcomments` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_adx_portalcomment` |
| `mspp_publishingstatetransitionrule_adx_portalcomments` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_adx_portalcomment` |
| `mspp_redirect_adx_portalcomments` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_adx_portalcomment` |
| `mspp_shortcut_adx_portalcomments` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_adx_portalcomment` |
| `mspp_website_adx_portalcomments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_adx_portalcomment` |
| `processstage_adx_portalcomment` | [processstage](processstage.md) | `stageid` | `stageid_adx_portalcomment` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_portalcomment_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_portalcomment_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `adx_portalcomment_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `adx_portalcomment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_portalcomment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_portalcomment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_portalcomment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `adx_portalcomment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_portalcomment_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `adx_portalcomment_SharePointDocumentLocations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_portalcomment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [adx_portalcomment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/adx_portalcomment.md) on 2026-05-06.