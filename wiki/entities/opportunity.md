---
logical: "opportunity"
display: "Opportunity"
entitySetName: "opportunities"
primaryId: "opportunityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["opportunita", "opportunita di vendita", "trattativa", "deal"]
synonyms_en: ["opportunity", "sales opportunity", "deal", "pipeline"]
---

# Opportunity

Potential revenue-generating event, or sale to an account, which needs to be tracked through a sales process to completion.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `opportunity` |
| Display name | Opportunity |
| Display (plural) | Opportunities |
| Schema name | `Opportunity` |
| Entity set (Web API) | `opportunities` |
| Primary id attribute | `opportunityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/opportunities?$select=name&$top=10
GET /api/data/v9.2/opportunities(<guid>)
POST /api/data/v9.2/opportunities
PATCH /api/data/v9.2/opportunities(<guid>)
DELETE /api/data/v9.2/opportunities(<guid>)
```

## Attributes

Writable: **94** · Read-only: **32**

### Writable

`ActualCloseDate`, `ActualValue`, `BudgetAmount`, `BudgetStatus`, `CampaignId`, `CaptureProposalFeedback`, `CloseProbability`, `CompleteFinalProposal`, `CompleteInternalReview`, `ConfirmInterest`, `CurrentSituation`, `CustomerId`, `CustomerIdType`, `CustomerNeed`, `CustomerPainPoints`, `DecisionMaker`, `Description`, `DevelopProposal`, `DiscountAmount`, `DiscountPercentage`, `EmailAddress`, `EstimatedCloseDate`, `EstimatedValue`, `EvaluateFit`, `FileDebrief`, `FinalDecisionDate`, `FreightAmount`, `IdentifyCompetitors`, `IdentifyCustomerContacts`, `IdentifyPursuitTeam`, `ImportSequenceNumber`, `InitialCommunication`, `IsRevenueSystemCalculated`, `LastOnHoldTime`, `msdyn_forecastcategory`, `msdyn_gdproptout`, `msdyn_OpportunityGrade`, `msdyn_opportunitykpiid`, `msdyn_OpportunityScore`, `msdyn_OpportunityScoreTrend`, `msdyn_PredictiveScoreId`, `msdyn_ScoreHistory`, `msdyn_ScoreReasons`, `msdyn_segmentid`, `msdyn_similaropportunities`, `Name`, `Need`, `OpportunityId`, `OpportunityRatingCode`, `OriginatingLeadId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentAccountId`, `ParentContactId`, `ParticipatesInWorkflow`, `PresentFinalProposal`, `PresentProposal`, `PriceLevelId`, `PricingErrorCode`, `PriorityCode`, `ProcessId`, `ProposedSolution`, `PurchaseProcess`, `PurchaseTimeframe`, `PursuitDecision`, `QualificationComments`, `QuoteComments`, `ResolveFeedback`, `SalesStage`, `SalesStageCode`, `ScheduleFollowup_Prospect`, `ScheduleFollowup_Qualify`, `ScheduleProposalMeeting`, `SendThankYouNote`, `SkipPriceCalculation`, `SLAId`, `StageId`, `StateCode`, `StatusCode`, `StepId`, `StepName`, `TeamsFollowed`, `TimeLine`, `TimeZoneRuleVersionNumber`, `TotalAmount`, `TotalAmountLessFreight`, `TotalDiscountAmount`, `TotalLineItemAmount`, `TotalLineItemDiscountAmount`, `TotalTax`, `TransactionCurrencyId`, `TraversedPath`, `UTCConversionTimeZoneCode`

### Read-only

`AccountId`, `ActualValue_Base`, `BudgetAmount_Base`, `ContactId`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomerIdName`, `CustomerIdYomiName`, `DiscountAmount_Base`, `EstimatedValue_Base`, `ExchangeRate`, `FreightAmount_Base`, `IsPrivate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OnHoldTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SLAInvokedId`, `TimeSpentByMeOnEmailAndMeetings`, `TotalAmount_Base`, `TotalAmountLessFreight_Base`, `TotalDiscountAmount_Base`, `TotalLineItemAmount_Base`, `TotalLineItemDiscountAmount_Base`, `TotalTax_Base`, `VersionNumber`

## Relationships

### Many-to-One (22)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_opportunities` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `campaign_opportunities` | [campaign](campaign.md) | `campaignid` | `campaignid` |
| `lk_opportunity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_opportunity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_opportunitybase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_opportunitybase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `manualsla_opportunity` | [sla](sla.md) | `slaid` | `sla_opportunity_sla` |
| `msdyn_msdyn_opportunitykpiitem_opportunity_opportunitykpiid` | [msdyn_opportunitykpiitem](msdyn_opportunitykpiitem.md) | `msdyn_opportunitykpiid` | `msdyn_opportunitykpiid` |
| `msdyn_msdyn_predictivescore_opportunity` | [msdyn_predictivescore](msdyn_predictivescore.md) | `msdyn_predictivescoreid` | `msdyn_PredictiveScoreId` |
| `msdyn_msdyn_segment_opportunity` | [msdyn_segment](msdyn_segment.md) | `msdyn_segmentid` | `msdyn_segmentid` |
| `opportunity_customer_accounts` | [account](account.md) | `customerid` | `customerid_account` |
| `opportunity_customer_contacts` | [contact](contact.md) | `customerid` | `customerid_contact` |
| `opportunity_originating_lead` | [lead](lead.md) | `originatingleadid` | `originatingleadid` |
| `opportunity_owning_user` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `opportunity_parent_account` | [account](account.md) | `parentaccountid` | `parentaccountid` |
| `opportunity_parent_contact` | [contact](contact.md) | `parentcontactid` | `parentcontactid` |
| `owner_opportunitys` | [owner](owner.md) | `ownerid` | `ownerid` |
| `price_level_opportunties` | [pricelevel](pricelevel.md) | `pricelevelid` | `pricelevelid` |
| `processstage_opportunity` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `sla_opportunity` | [sla](sla.md) | `slainvokedid` | `slainvokedid_opportunity_sla` |
| `team_opportunities` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_opportunity` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (71)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `CreatedOpportunity_BulkOperationLogs` | _n/a_ | `createdobjectid` | _n/a_ |
| `lead_qualifying_opportunity` | _n/a_ | `qualifyingopportunityid` | _n/a_ |
| `lk_leadtoopportunitysalesprocess_opportunityid` | _n/a_ | `opportunityid` | _n/a_ |
| `lk_opportunitysalesprocess_opportunityid` | _n/a_ | `opportunityid` | _n/a_ |
| `msdyn_activitymapping_opportunity` | _n/a_ | `msdyn_regardingobjectid` | _n/a_ |
| `msdyn_dcaengageagentresult_regarding_opportunity` | _n/a_ | `msdyn_regarding` | _n/a_ |
| `msdyn_msdyn_salescopilotinsight_opportunity_msdyn_targetentityid` | _n/a_ | `msdyn_targetentityid` | _n/a_ |
| `msdyn_opportunity_dailyopportunitykpiitem_entityid` | _n/a_ | `msdyn_entityid` | _n/a_ |
| `msdyn_opportunity_msdyn_mostcontacted_regardingObjectId` | _n/a_ | `msdyn_opportunity_regardingobjectid` | _n/a_ |
| `msdyn_opportunity_msdyn_mostcontactedby_regardingObjectId` | _n/a_ | `msdyn_opportunity_regardingobjectid` | _n/a_ |
| `msdyn_opportunity_msdyn_opportunitykpiitem_opportunityid` | _n/a_ | `msdyn_opportunityid` | _n/a_ |
| `msdyn_opportunity_msdyn_salesroutingrun_targetobject` | _n/a_ | `msdyn_targetobject` | _n/a_ |
| `msdyn_opportunity_msdyn_timespent_opplookup` | _n/a_ | `msdyn_opplookup` | _n/a_ |
| `msdyn_OpportunityResearchIndicator_Opportunity_Opportunity` | _n/a_ | `msdyn_opportunity` | _n/a_ |
| `msdyn_OpportunityResearchResult_Opportunity_Opportunity` | _n/a_ | `msdyn_opportunity` | _n/a_ |
| `msdyn_OpportunityResearchUserInteractions_Opportunity_Opportunity` | _n/a_ | `msdyn_opportunity` | _n/a_ |
| `msdyn_sabackupdiagnostic_opportunity_msdyn_target` | _n/a_ | `msdyn_target` | _n/a_ |
| `msdyn_salesagentprocessingstate_regardingentity_opportunity` | _n/a_ | `msdyn_regardingentity` | _n/a_ |
| `msdyn_salesagentrun_opportunity` | _n/a_ | `msdyn_regardingid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_opportunity_msdyn_target` | _n/a_ | `msdyn_target` | _n/a_ |
| `msdyn_salessuggestion_opportunity_qualifiedrecord` | _n/a_ | `msdyn_qualifiedrecord` | _n/a_ |
| `msdyn_sequencetarget_opportunity_msdyn_target` | _n/a_ | `msdyn_target` | _n/a_ |
| `msdyn_summarysynthesizerinput_referenceobjectid_opportunity` | _n/a_ | `msdyn_referenceobjectid` | _n/a_ |
| `msdyn_summarysynthesizeroutput_ReferenceObjectId_opportunity` | _n/a_ | `msdyn_referenceobjectid` | _n/a_ |
| `msdyn_synthesizeroutput_ReferenceObjectId_opportunity` | _n/a_ | `msdyn_referenceobjectid` | _n/a_ |
| `opportunity_actioncard` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Opportunity_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Opportunity_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_connections1` | _n/a_ | `record1id` | _n/a_ |
| `opportunity_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Opportunity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Opportunity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Opportunity_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_invoices` | _n/a_ | `opportunityid` | _n/a_ |
| `Opportunity_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_OpportunityClose` | _n/a_ | `opportunityid` | _n/a_ |
| `opportunity_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_PostFollows` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_PostRegardings` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_Posts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Opportunity_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_quotes` | _n/a_ | `opportunityid` | _n/a_ |
| `Opportunity_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_sales_orders` | _n/a_ | `opportunityid` | _n/a_ |
| `Opportunity_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_SharepointDocumentLocation` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Opportunity_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `opportunity_Teams` | _n/a_ | `regardingobjectid` | _n/a_ |
| `product_opportunities` | _n/a_ | `opportunityid` | _n/a_ |
| `slakpiinstance_opportunity` | _n/a_ | `regarding` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `opportunitycompetitors_association` | [opportunityid](opportunityid.md) | _n/a_ | _n/a_ |

## Source

Generated from [opportunity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/opportunity.md) on 2026-05-06.