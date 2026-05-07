---
logical: "chat"
display: "Teams chat"
entitySetName: "chats"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Teams chat

For internal use only. Entity which stores association data of Dynamics 365 records with Microsoft Teams chat

## Identity

| Property | Value |
| --- | --- |
| Logical name | `chat` |
| Display name | Teams chat |
| Display (plural) | Teams chats |
| Schema name | `chat` |
| Entity set (Web API) | `chats` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/chats?$select=subject&$top=10
GET /api/data/v9.2/chats(<guid>)
POST /api/data/v9.2/chats
PATCH /api/data/v9.2/chats(<guid>)
DELETE /api/data/v9.2/chats(<guid>)
```

## Attributes

Writable: **52** · Read-only: **28**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LastSyncError`, `LeftVoiceMail`, `ModifiedInTeamsBy`, `ModifiedInTeamsByActivityPartyId`, `ModifiedInTeamsOn`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `Resources`, `ScheduledDurationMinutes`, `ScheduledEnd`, `ScheduledStart`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `SyncStatus`, `teamschatid`, `TimeZoneRuleVersionNumber`, `To`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `EventsSummary`, `ExchangeRate`, `InstanceTypeCode`, `IsRegularActivity`, `LinkedBy`, `LinkedOn`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `UnLinkedBy`, `UnLinkedOn`, `VersionNumber`

## Relationships

### Many-to-One (27)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_chats` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_chat` |
| `activity_pointer_chat` | [activitypointer](activitypointer.md) | `activityid` | `activityid_chat` |
| `adx_invitation_chats` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_chat` |
| `chat_businessunit_owningbusinessunit` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_chat` |
| `chat_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_chat` |
| `chat_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_chat` |
| `chat_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_chat` |
| `chat_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_chat` |
| `chat_systemuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_chat` |
| `chat_systemuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_chat` |
| `chat_systemuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_chat` |
| `chat_systemuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_chat` |
| `chat_systemuser_owninguser` | [systemuser](systemuser.md) | `owninguser` | `owninguser_chat` |
| `chat_team_owningteam` | [team](team.md) | `owningteam` | `owningteam_chat` |
| `chat_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_chat` |
| `contact_chats` | [contact](contact.md) | `regardingobjectid` | `regardingobjectid_contact_chat` |
| `interactionforemail_chats` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_chat` |
| `knowledgearticle_chats` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_chat` |
| `knowledgebaserecord_chats` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_chat` |
| `mspp_adplacement_chats` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_chat` |
| `mspp_pollplacement_chats` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_chat` |
| `mspp_publishingstatetransitionrule_chats` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_chat` |
| `mspp_redirect_chats` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_chat` |
| `mspp_shortcut_chats` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_chat` |
| `mspp_website_chats` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_chat` |
| `teams_chat_activity_linkrecord_systemUser` | [systemuser](systemuser.md) | `linkedby` | `LinkedBy` |
| `teams_chat_activity_unlinkrecord_systemUser` | [systemuser](systemuser.md) | `unlinkedby` | `UnLinkedBy` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `chat_ActionCards` | _n/a_ | `regardingobjectid` | _n/a_ |
| `chat_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `chat_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `chat_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `chat_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `chat_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `chat_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `chat_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `chat_QueueItems` | _n/a_ | `objectid` | _n/a_ |
| `chat_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [chat.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/chat.md) on 2026-05-06.