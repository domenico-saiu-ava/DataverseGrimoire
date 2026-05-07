---
logical: "lead"
display: "Lead"
entitySetName: "leads"
primaryId: "leadid"
primaryName: "fullname"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["lead", "contatto interessato", "prospect", "potenziale cliente"]
synonyms_en: ["lead", "prospect"]
---

# Lead

Prospect or potential sales opportunity. Leads are converted into accounts, contacts, or opportunities when they are qualified. Otherwise, they are deleted or archived.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `lead` |
| Display name | Lead |
| Display (plural) | Leads |
| Schema name | `Lead` |
| Entity set (Web API) | `leads` |
| Primary id attribute | `leadid` |
| Primary name attribute | `fullname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/leads?$select=fullname&$top=10
GET /api/data/v9.2/leads(<guid>)
POST /api/data/v9.2/leads
PATCH /api/data/v9.2/leads(<guid>)
DELETE /api/data/v9.2/leads(<guid>)
```

## Attributes

Writable: **135** · Read-only: **34**

### Writable

`Address1_AddressId`, `Address1_AddressTypeCode`, `Address1_City`, `Address1_Country`, `Address1_County`, `Address1_Fax`, `Address1_Latitude`, `Address1_Line1`, `Address1_Line2`, `Address1_Line3`, `Address1_Longitude`, `Address1_Name`, `Address1_PostalCode`, `Address1_PostOfficeBox`, `Address1_ShippingMethodCode`, `Address1_StateOrProvince`, `Address1_Telephone1`, `Address1_Telephone2`, `Address1_Telephone3`, `Address1_UPSZone`, `Address1_UTCOffset`, `Address2_AddressId`, `Address2_AddressTypeCode`, `Address2_City`, `Address2_Country`, `Address2_County`, `Address2_Fax`, `Address2_Latitude`, `Address2_Line1`, `Address2_Line2`, `Address2_Line3`, `Address2_Longitude`, `Address2_Name`, `Address2_PostalCode`, `Address2_PostOfficeBox`, `Address2_ShippingMethodCode`, `Address2_StateOrProvince`, `Address2_Telephone1`, `Address2_Telephone2`, `Address2_Telephone3`, `Address2_UPSZone`, `Address2_UTCOffset`, `BudgetAmount`, `BudgetStatus`, `BusinessCard`, `BusinessCardAttributes`, `CampaignId`, `CompanyName`, `ConfirmInterest`, `CustomerId`, `CustomerIdType`, `DecisionMaker`, `Description`, `DoNotBulkEMail`, `DoNotEMail`, `DoNotFax`, `DoNotPhone`, `DoNotPostalMail`, `DoNotSendMM`, `EMailAddress1`, `EMailAddress2`, `EMailAddress3`, `EntityImage`, `EstimatedAmount`, `EstimatedCloseDate`, `EstimatedValue`, `EvaluateFit`, `Fax`, `FirstName`, `FollowEmail`, `ImportSequenceNumber`, `IndustryCode`, `InitialCommunication`, `JobTitle`, `LastName`, `LastOnHoldTime`, `LastUsedInCampaign`, `LeadId`, `LeadQualityCode`, `LeadSourceCode`, `MiddleName`, `MobilePhone`, `msdyn_gdproptout`, `msdyn_LeadGrade`, `msdyn_leadkpiid`, `msdyn_LeadScore`, `msdyn_LeadScoreTrend`, `msdyn_PredictiveScoreId`, `msdyn_salesassignmentresult`, `msdyn_ScoreHistory`, `msdyn_ScoreReasons`, `msdyn_segmentid`, `Need`, `NumberOfEmployees`, `OriginatingCaseId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Pager`, `ParentAccountId`, `ParentContactId`, `ParticipatesInWorkflow`, `PreferredContactMethodCode`, `PriorityCode`, `ProcessId`, `PurchaseProcess`, `PurchaseTimeFrame`, `QualificationComments`, `QualifyingOpportunityId`, `RelatedObjectId`, `Revenue`, `SalesStage`, `SalesStageCode`, `Salutation`, `ScheduleFollowUp_Prospect`, `ScheduleFollowUp_Qualify`, `SIC`, `SLAId`, `StageId`, `StateCode`, `StatusCode`, `Subject`, `TeamsFollowed`, `Telephone1`, `Telephone2`, `Telephone3`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`, `WebSiteUrl`, `YomiCompanyName`, `YomiFirstName`, `YomiLastName`, `YomiMiddleName`

### Read-only

`AccountId`, `Address1_Composite`, `Address2_Composite`, `BudgetAmount_Base`, `ContactId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `EstimatedAmount_Base`, `ExchangeRate`, `FullName`, `IsAutoCreate`, `IsPrivate`, `MasterId`, `Merged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `Revenue_Base`, `SLAInvokedId`, `TimeSpentByMeOnEmailAndMeetings`, `VersionNumber`, `YomiFullName`

## Relationships

### Many-to-One (24)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_leads` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `campaign_leads` | [campaign](campaign.md) | `campaignid` | `campaignid` |
| `CampaignResponse_Lead` | [campaignresponse](campaignresponse.md) | `relatedobjectid` | `relatedobjectid` |
| `lead_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `lead_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `lead_master_lead` | [lead](lead.md) | `masterid` | `masterid` |
| `lead_owning_team` | [team](team.md) | `owningteam` | `owningteam` |
| `lead_owning_user` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `lead_parent_account` | [account](account.md) | `parentaccountid` | `parentaccountid` |
| `lead_parent_contact` | [contact](contact.md) | `parentcontactid` | `parentcontactid` |
| `lead_qualifying_opportunity` | [opportunity](opportunity.md) | `qualifyingopportunityid` | `qualifyingopportunityid` |
| `lk_lead_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_lead_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_leadbase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_leadbase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `manualsla_lead` | [sla](sla.md) | `slaid` | `sla_lead_sla` |
| `msdyn_msdyn_leadkpiitem_lead_leadkpiid` | [msdyn_leadkpiitem](msdyn_leadkpiitem.md) | `msdyn_leadkpiid` | `msdyn_leadkpiid` |
| `msdyn_msdyn_predictivescore_lead` | [msdyn_predictivescore](msdyn_predictivescore.md) | `msdyn_predictivescoreid` | `msdyn_PredictiveScoreId` |
| `msdyn_msdyn_segment_lead` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `OriginatingCase_Lead` | [incident](incident.md) | `originatingcaseid` | `originatingcaseid` |
| `owner_leads` | [owner](owner.md) | `ownerid` | `ownerid` |
| `processstage_lead` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_lead` | [sla](sla.md) | `slainvokedid` | `slainvokedid_lead_sla` |
| `transactioncurrency_lead` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (79)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `account_originating_lead` | _n/a_ | `originatingleadid` | _n/a_ |
| `contact_originating_lead` | _n/a_ | `originatingleadid` | _n/a_ |
| `CreatedLead_BulkOperationLogs` | _n/a_ | `createdobjectid` | _n/a_ |
| `Lead_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Lead_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_addresses` | _n/a_ | `parentid` | _n/a_ |
| `lead_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Lead_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_BulkOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_CampaignResponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_connections1` | _n/a_ | `record1id` | _n/a_ |
| `lead_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Lead_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Lead_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Lead_Email_EmailSender` | _n/a_ | `emailsender` | _n/a_ |
| `Lead_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_master_lead` | _n/a_ | `masterid` | _n/a_ |
| `lead_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_Posts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Lead_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lead_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_SharepointDocumentLocation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Lead_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lk_leadtoopportunitysalesprocess_leadid` | _n/a_ | `leadid` | _n/a_ |
| `msdyn_activitymapping_lead` | _n/a_ | `msdyn_regardingobjectid` | _n/a_ |
| `msdyn_dcaengageagentresult_regarding_lead` | _n/a_ | `msdyn_regarding` | _n/a_ |
| `msdyn_engageandreadinessagentresult_lead` | _n/a_ | `msdyn_regardingid` | _n/a_ |
| `msdyn_engagereadinessagentresult_lead` | _n/a_ | `msdyn_regardingid` | _n/a_ |
| `msdyn_lead_dailyleadkpiitem_entityid` | _n/a_ | `msdyn_entityid` | _n/a_ |
| `msdyn_lead_msdyn_duplicatedetectionpluginrun_baserecordid` | _n/a_ | `msdyn_baserecordid` | _n/a_ |
| `msdyn_lead_msdyn_duplicateleadmapping` | _n/a_ | `msdyn_duplicateleadrecord` | _n/a_ |
| `msdyn_lead_msdyn_duplicateleadmapping_BaseLeadRecord` | _n/a_ | `msdyn_baseleadrecord` | _n/a_ |
| `msdyn_lead_msdyn_leadkpiitem_leadid` | _n/a_ | `msdyn_leadid` | _n/a_ |
| `msdyn_lead_msdyn_mostcontacted_regardingObjectId` | _n/a_ | `msdyn_lead_regardingobjectid` | _n/a_ |
| `msdyn_lead_msdyn_mostcontactedby_regardingObjectId` | _n/a_ | `msdyn_lead_regardingobjectid` | _n/a_ |
| `msdyn_lead_msdyn_salesroutingrun_targetobject` | _n/a_ | `msdyn_targetobject` | _n/a_ |
| `msdyn_lead_msdyn_timespent_leadlookup` | _n/a_ | `msdyn_leadlookup` | _n/a_ |
| `msdyn_leadagentresult_leadid` | _n/a_ | `msdyn_leadid` | _n/a_ |
| `msdyn_leademailextension_leadid_lead` | _n/a_ | `msdyn_leadid` | _n/a_ |
| `msdyn_linkeditemvalidity_polymorphic_leadid` | _n/a_ | `msdyn_linkeditemlookup` | _n/a_ |
| `msdyn_msdyn_salescopilotinsight_lead_msdyn_targetentityid` | _n/a_ | `msdyn_targetentityid` | _n/a_ |
| `msdyn_msdyn_taggedrecord_lead_msdyn_dynamicsrecordid` | _n/a_ | `msdyn_dynamicsrecordid` | _n/a_ |
| `msdyn_sabackupdiagnostic_lead_msdyn_target` | _n/a_ | `msdyn_target` | _n/a_ |
| `msdyn_salesagenthandover_regardingId_lead` | _n/a_ | `msdyn_regardingid` | _n/a_ |
| `msdyn_salesagentrun_lead` | _n/a_ | `msdyn_regardingid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_lead_msdyn_target` | _n/a_ | `msdyn_target` | _n/a_ |
| `msdyn_sequencetarget_lead_msdyn_target` | _n/a_ | `msdyn_target` | _n/a_ |
| `msdyn_summarysynthesizerinput_referenceobjectid_lead` | _n/a_ | `msdyn_referenceobjectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_ReferenceObjectId_lead` | _n/a_ | `msdyn_referenceobjectid` | _n/a_ |
| `msdyn_synthesizeroutput_ReferenceObjectId_lead` | _n/a_ | `msdyn_referenceobjectid` | _n/a_ |
| `msdyn_triggersalesagent_regardingid_lead` | _n/a_ | `msdyn_regardingid` | _n/a_ |
| `opportunity_originating_lead` | _n/a_ | `originatingleadid` | _n/a_ |
| `slakpiinstance_lead` | _n/a_ | `regarding` | _n/a_ |
| `SourceLead_BulkOperationLogs` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `accountleads_association` | [accountid](accountid.md) | _n/a_ | _n/a_ |
| `BulkOperation_Leads` | [regardingobjectid](regardingobjectid.md) | _n/a_ | _n/a_ |
| `CampaignActivity_Leads` | [regardingobjectid](regardingobjectid.md) | _n/a_ | _n/a_ |
| `contactleads_association` | [leadid](leadid.md) | _n/a_ | _n/a_ |
| `leadcompetitors_association` | [leadid](leadid.md) | _n/a_ | _n/a_ |
| `leadproduct_association` | [leadid](leadid.md) | _n/a_ | _n/a_ |
| `listlead_association` | [entityid](entityid.md) | _n/a_ | _n/a_ |

## Source

Generated from [lead.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/lead.md) on 2026-05-06.