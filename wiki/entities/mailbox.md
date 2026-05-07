---
logical: "mailbox"
display: "Mailbox"
entitySetName: "mailboxes"
primaryId: "mailboxid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["casella postale", "mailbox", "casella email"]
synonyms_en: ["mailbox"]
---

# Mailbox

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mailbox` |
| Display name | Mailbox |
| Display (plural) | Mailboxes |
| Schema name | `Mailbox` |
| Entity set (Web API) | `mailboxes` |
| Primary id attribute | `mailboxid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mailboxes?$select=name&$top=10
GET /api/data/v9.2/mailboxes(<guid>)
POST /api/data/v9.2/mailboxes
PATCH /api/data/v9.2/mailboxes(<guid>)
DELETE /api/data/v9.2/mailboxes(<guid>)
```

## Attributes

Writable: **67** · Read-only: **49**

### Writable

`ACSEnabledForOutgoingEmail`, `ACSMailFromCreated`, `ACSOutgoingEmailStatus`, `ACTDeliveryMethod`, `ACTStatus`, `AllowEmailConnectorToUseCredentials`, `EmailAddress`, `EmailRouterAccessApproval`, `EmailServerProfile`, `EnabledForACT`, `EnabledForIncomingEmail`, `EnabledForOutgoingEmail`, `EntityImage`, `EWSURL`, `ExchangeContactsImportStatus`, `ExchangeSyncStateXml`, `FolderHierarchy`, `IncomingEmailDeliveryMethod`, `IncomingEmailStatus`, `IsACTSyncOrgFlagSet`, `IsEmailAddressApprovedByO365Admin`, `ItemsFailedForLastSync`, `ItemsProcessedForLastSync`, `LastAutoDiscoveredOn`, `LastIncomingEmailsRequestedFromEmailServerOn`, `LastMessageId`, `LastSuccessfulSyncCompletedOn`, `LastSyncError`, `LastSyncErrorCode`, `LastSyncErrorCount`, `LastSyncErrorMachineName`, `LastSyncErrorOccurredOn`, `LastTagCompletedOn`, `LastTaggedMessageId`, `LastTagProcessedMaxItems`, `MailboxId`, `MailboxProcessingContext`, `Name`, `OauthAccessToken`, `OauthRefreshToken`, `OauthTokenExpiresOn`, `OfficeAppsDeploymentScheduled`, `OfficeAppsDeploymentStatus`, `OrgMarkedAsPrimaryForExchangeSync`, `OutgoingEmailDeliveryMethod`, `OutgoingEmailStatus`, `OwnerId`, `OwnerIdType`, `Password`, `PostponeMailboxProcessingUntil`, `PostponeOfficeAppsDeploymentUntil`, `PostponeSendingUntil`, `PostponeTestEmailConfigurationUntil`, `ProcessAndDeleteEmails`, `ProcessEmailReceivedAfter`, `ProcessingLastAttemptedOn`, `StateCode`, `StatusCode`, `TagEmailsAfter`, `TestEmailConfigurationRetryCount`, `TestEmailConfigurationScheduled`, `TestMailboxAccessCompletedOn`, `TimeZoneRuleVersionNumber`, `UndeliverableFolder`, `Username`, `UTCConversionTimeZoneCode`, `VerboseLoggingEnabled`

### Read-only

`AverageTotalDuration`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EmailAddressApprovedBy`, `EmailAddressApprovedOn`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeContactsImportCompletedOn`, `ExchangeSyncStateXmlFileRef`, `ExchangeSyncStateXmlFileRef_Name`, `ForcedUnlockCount`, `HostId`, `IsExchangeContactsImportScheduled`, `IsForwardMailbox`, `IsOauthAccessTokenSet`, `IsOauthRefreshTokenSet`, `IsPasswordSet`, `IsServiceAccount`, `LastActiveOn`, `LastDuration`, `LastMailboxForcedUnlockOccurredOn`, `LastSyncStartedOn`, `MailboxStatus`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `NextScheduledACTSyncInSeconds`, `NoACTCount`, `NoEmailCount`, `OfficeAppsDeploymentCompleteOn`, `OfficeAppsDeploymentError`, `OrganizationId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ProcessedTimes`, `ProcessingStateCode`, `ReceivingPostponedUntil`, `ReceivingPostponedUntilForACT`, `RegardingObjectId`, `RegardingObjectTypeCode`, `TestAndEnableLastAttemptedBy`, `TestAndEnableLastAttemptedOn`, `TransientFailureCount`, `VersionNumber`

## Relationships

### Many-to-One (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_mailbox` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `emailserverprofile_mailbox` | [emailserverprofile](emailserverprofile.md) | `emailserverprofile` | `emailserverprofile` |
| `FileAttachment_Mailbox_ExchangeSyncStateXmlFileRef` | [fileattachment](fileattachment.md) | `exchangesyncstatexmlfileref` | `exchangesyncstatexmlfileref` |
| `lk_mailbox_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mailbox_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mailbox_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mailbox_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `mailbox_emailaddressapprovedby_systemuser` | [systemuser](systemuser.md) | `emailaddressapprovedby` | `emailaddressapprovedby_mailbox` |
| `mailbox_regarding_queue` | [queue](queue.md) | `regardingobjectid` | `regardingobjectid_queue` |
| `mailbox_regarding_systemuser` | [systemuser](systemuser.md) | `regardingobjectid` | `regardingobjectid` |
| `mailbox_testandenablelastattemptedby_systemuser` | [systemuser](systemuser.md) | `testandenablelastattemptedby` | `testandenablelastattemptedby_mailbox` |
| `organization_mailbox` | [organization](organization.md) | `organizationid` | `organizationid` |
| `owner_mailbox` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_mailbox` | [team](team.md) | `owningteam` | `owningteam` |
| `user_mailbox` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activitypointer_sendermailboxid_mailbox` | _n/a_ | `sendermailboxid` | _n/a_ |
| `adx_inviteredemption_mailbox_sendermailboxid` | _n/a_ | `sendermailboxid` | _n/a_ |
| `adx_portalcomment_mailbox_sendermailboxid` | _n/a_ | `sendermailboxid` | _n/a_ |
| `chat_mailbox_sendermailboxid` | _n/a_ | `sendermailboxid` | _n/a_ |
| `email_sendermailboxid_mailbox` | _n/a_ | `sendermailboxid` | _n/a_ |
| `Mailbox_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `mailbox_asyncoperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mailbox_email_ReceivingMailboxId` | _n/a_ | `receivingmailboxid` | _n/a_ |
| `mailbox_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `Mailbox_MailboxTrackingFolder` | _n/a_ | `mailboxid` | _n/a_ |
| `mailbox_processsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Mailbox_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `queue_defaultmailbox_mailbox` | _n/a_ | `defaultmailbox` | _n/a_ |
| `systemuser_defaultmailbox_mailbox` | _n/a_ | `defaultmailbox` | _n/a_ |
| `tracelog_Mailbox` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mailbox.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mailbox.md) on 2026-05-06.