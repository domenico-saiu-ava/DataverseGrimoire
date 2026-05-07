---
logical: "adx_inviteredemption"
display: "Invite Redemption"
entitySetName: "adx_inviteredemptions"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Invite Redemption

Holds information about the redemption of an invite.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_inviteredemption` |
| Display name | Invite Redemption |
| Display (plural) | Invite Redemptions |
| Schema name | `adx_inviteredemption` |
| Entity set (Web API) | `adx_inviteredemptions` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_inviteredemptions?$select=subject&$top=10
GET /api/data/v9.2/adx_inviteredemptions(<guid>)
POST /api/data/v9.2/adx_inviteredemptions
PATCH /api/data/v9.2/adx_inviteredemptions(<guid>)
DELETE /api/data/v9.2/adx_inviteredemptions(<guid>)
```

## Attributes

Writable: **47** · Read-only: **23**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `adx_ipAddress`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (25)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_adx_inviteredemptions` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_adx_inviteredemption` |
| `activity_pointer_adx_inviteredemption` | [activitypointer](activitypointer.md) | `activityid` | `activityid_adx_inviteredemption` |
| `adx_invitation_adx_inviteredemptions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_adx_inviteredemption` |
| `adx_inviteredemption_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_adx_inviteredemption` |
| `adx_inviteredemption_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_adx_inviteredemption` |
| `adx_inviteredemption_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_adx_inviteredemption` |
| `adx_inviteredemption_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_adx_inviteredemption` |
| `adx_inviteredemption_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_adx_inviteredemption` |
| `adx_inviteredemption_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_adx_inviteredemption` |
| `adx_inviteredemption_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_adx_inviteredemption` |
| `adx_inviteredemption_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_adx_inviteredemption` |
| `contact_adx_inviteredemptions` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_adx_inviteredemption` |
| `interactionforemail_adx_inviteredemptions` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_adx_inviteredemption` |
| `knowledgearticle_adx_inviteredemptions` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_adx_inviteredemption` |
| `knowledgebaserecord_adx_inviteredemptions` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_adx_inviteredemption` |
| `mspp_adplacement_adx_inviteredemptions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_adx_inviteredemption` |
| `mspp_pollplacement_adx_inviteredemptions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_adx_inviteredemption` |
| `mspp_publishingstatetransitionrule_adx_inviteredemptions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_adx_inviteredemption` |
| `mspp_redirect_adx_inviteredemptions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_adx_inviteredemption` |
| `mspp_shortcut_adx_inviteredemptions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_adx_inviteredemption` |
| `mspp_website_adx_inviteredemptions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_adx_inviteredemption` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_inviteredemption_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_inviteredemption_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `adx_inviteredemption_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `adx_inviteredemption_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_inviteredemption_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_inviteredemption_connections1` | _n/a_ | `record1id` | _n/a_ |
| `adx_inviteredemption_connections2` | _n/a_ | `record2id` | _n/a_ |
| `adx_inviteredemption_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `adx_inviteredemption_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `adx_inviteredemption_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_inviteredemption_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `adx_inviteredemption_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adx_inviteredemption_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `adx_inviteredemption_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [adx_inviteredemption.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/adx_inviteredemption.md) on 2026-05-06.