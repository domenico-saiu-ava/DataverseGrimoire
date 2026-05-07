---
logical: "incidentresolution"
display: "Case Resolution"
entitySetName: "incidentresolutions"
primaryId: "activityid"
primaryName: "subject"
tableType: "Standard"
ownership: "UserOwned"
---

# Case Resolution

Special type of activity that includes description of the resolution, billing status, and the duration of the case.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `incidentresolution` |
| Display name | Case Resolution |
| Display (plural) | Case Resolutions |
| Schema name | `IncidentResolution` |
| Entity set (Web API) | `incidentresolutions` |
| Primary id attribute | `activityid` |
| Primary name attribute | `subject` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/incidentresolutions?$select=subject&$top=10
GET /api/data/v9.2/incidentresolutions(<guid>)
POST /api/data/v9.2/incidentresolutions
PATCH /api/data/v9.2/incidentresolutions(<guid>)
DELETE /api/data/v9.2/incidentresolutions(<guid>)
```

## Attributes

Writable: **53** · Read-only: **27**

### Writable

`ActivityAdditionalParams`, `ActivityId`, `ActualDurationMinutes`, `ActualEnd`, `ActualStart`, `BCC`, `Category`, `CC`, `Community`, `Customers`, `DeliveryPriorityCode`, `Description`, `ExchangeItemId`, `ExchangeWebLink`, `From`, `ImportSequenceNumber`, `IncidentId`, `IsBilled`, `IsMapiPrivate`, `IsWorkflowCreated`, `LastOnHoldTime`, `LeftVoiceMail`, `msdyn_proposeknowledge`, `OptionalAttendees`, `Organizer`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Partners`, `PriorityCode`, `ProcessId`, `RegardingObjectId`, `RegardingObjectTypeCode`, `RequiredAttendees`, `ResolutionTypeCode`, `Resources`, `ScheduledEnd`, `ScheduledStart`, `ServiceId`, `SLAId`, `SortDate`, `StageId`, `StateCode`, `StatusCode`, `Subcategory`, `Subject`, `TimeSpent`, `TimeZoneRuleVersionNumber`, `To`, `TotalTimeSpent`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`ActivityTypeCode`, `CreatedBy`, `CreatedByExternalParty`, `CreatedOn`, `CreatedOnBehalfBy`, `DeliveryLastAttemptedOn`, `ExchangeRate`, `IncidentIdType`, `InstanceTypeCode`, `IsRegularActivity`, `ModifiedBy`, `ModifiedByExternalParty`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `PostponeActivityProcessingUntil`, `ScheduledDurationMinutes`, `SenderMailboxId`, `SentOn`, `SeriesId`, `SLAInvokedId`, `VersionNumber`

## Relationships

### Many-to-One (34)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_IncidentResolutions` | [account](account.md) | `regardingobjectid` | `regardingobjectid_account_incidentresolution` |
| `activity_pointer_incident_resolution` | [activitypointer](activitypointer.md) | `activityid` | `activityid_activitypointer` |
| `adx_invitation_IncidentResolutions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_incidentresolution` |
| `bookableresourcebooking_IncidentResolutions` | [bookableresourcebooking](bookableresourcebooking.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebooking_incidentresolution` |
| `bookableresourcebookingheader_IncidentResolutions` | [bookableresourcebookingheader](bookableresourcebookingheader.md) | `regardingobjectid` | `regardingobjectid_bookableresourcebookingheader_incidentresolution` |
| `bulkoperation_IncidentResolutions` | [bulkoperation](bulkoperation.md) | `regardingobjectid` | `regardingobjectid_bulkoperation_incidentresolution` |
| `business_unit_incident_resolution_activities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit_incidentresolution` |
| `campaign_IncidentResolutions` | [campaign](campaign.md) | `regardingobjectid` | `regardingobjectid_campaign_incidentresolution` |
| `campaignactivity_IncidentResolutions` | [campaignactivity](campaignactivity.md) | `regardingobjectid` | `regardingobjectid_campaignactivity_incidentresolution` |
| `entitlement_IncidentResolutions` | [entitlement](entitlement.md) | `regardingobjectid` | `regardingobjectid_entitlement_incidentresolution` |
| `entitlementtemplate_IncidentResolutions` | [entitlementtemplate](entitlementtemplate.md) | `regardingobjectid` | `regardingobjectid_entitlementtemplate_incidentresolution` |
| `Incident_IncidentResolutions` | [incident](incident.md) | `incidentid` | `incidentid` |
| `incidentresolution_mailbox_sendermailboxid` | [mailbox](mailbox.md) | `sendermailboxid` | `sendermailboxid_incidentresolution` |
| `incidentresolution_owner_ownerid` | [owner](owner.md) | `ownerid` | `ownerid_incidentresolution` |
| `incidentresolution_sla_slaid` | [sla](sla.md) | `slaid` | `sla_activitypointer_sla_incidentresolution` |
| `incidentresolution_sla_slainvokedid` | [sla](sla.md) | `slainvokedid` | `slainvokedid_activitypointer_sla_incidentresolution` |
| `incidentresolution_transactioncurrency_transactioncurrencyid` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid_incidentresolution` |
| `interactionforemail_IncidentResolutions` | [interactionforemail](interactionforemail.md) | `regardingobjectid` | `regardingobjectid_new_interactionforemail_incidentresolution` |
| `knowledgearticle_IncidentResolutions` | [knowledgearticle](knowledgearticle.md) | `regardingobjectid` | `regardingobjectid_knowledgearticle_incidentresolution` |
| `knowledgebaserecord_IncidentResolutions` | [knowledgebaserecord](knowledgebaserecord.md) | `regardingobjectid` | `regardingobjectid_knowledgebaserecord_incidentresolution` |
| `lead_IncidentResolutions` | [lead](lead.md) | `regardingobjectid` | `regardingobjectid_lead_incidentresolution` |
| `lk_incidentresolution_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby_incidentresolution` |
| `lk_incidentresolution_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby_incidentresolution` |
| `lk_incidentresolution_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby_incidentresolution` |
| `lk_incidentresolution_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby_incidentresolution` |
| `mspp_adplacement_IncidentResolutions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_incidentresolution` |
| `mspp_pollplacement_IncidentResolutions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_incidentresolution` |
| `mspp_publishingstatetransitionrule_IncidentResolutions` | [mspp_publishingstatetransitionrule](mspp_publishingstatetransitionrule.md) | `regardingobjectid` | `regardingobjectid_mspp_publishingstatetransitionrule_incidentresolution` |
| `mspp_redirect_IncidentResolutions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_incidentresolution` |
| `mspp_shortcut_IncidentResolutions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_incidentresolution` |
| `mspp_website_IncidentResolutions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_incidentresolution` |
| `service_incidentresolutions` | [service](service.md) | `serviceid` | `serviceid_incidentresolution` |
| `team_incidentresolution` | [team](team.md) | `owningteam` | `owningteam_incidentresolution` |
| `user_incidentresolution` | [systemuser](systemuser.md) | `owninguser` | `owninguser_incidentresolution` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CampaignResponse_IncidentResolutions` | _n/a_ | `originatingactivityid` | _n/a_ |
| `incidentresolution_activity_parties` | _n/a_ | `activityid` | _n/a_ |
| `IncidentResolution_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `IncidentResolution_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `IncidentResolution_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incidentresolution_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `incidentresolution_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `IncidentResolution_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [incidentresolution.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/incidentresolution.md) on 2026-05-06.