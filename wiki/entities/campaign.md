---
logical: "campaign"
display: "Campaign"
entitySetName: "campaigns"
primaryId: "campaignid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["campagna", "campagne", "campagna marketing"]
synonyms_en: ["campaign", "marketing campaign"]
---

# Campaign

Container for campaign activities and responses, sales literature, products, and lists to create, plan, execute, and track the results of a specific marketing campaign through its life.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `campaign` |
| Display name | Campaign |
| Display (plural) | Campaigns |
| Schema name | `Campaign` |
| Entity set (Web API) | `campaigns` |
| Primary id attribute | `campaignid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/campaigns?$select=name&$top=10
GET /api/data/v9.2/campaigns(<guid>)
POST /api/data/v9.2/campaigns
PATCH /api/data/v9.2/campaigns(<guid>)
DELETE /api/data/v9.2/campaigns(<guid>)
```

## Attributes

Writable: **34** · Read-only: **23**

### Writable

`ActualEnd`, `ActualStart`, `BudgetedCost`, `CampaignId`, `CodeName`, `Description`, `EmailAddress`, `EntityImage`, `ExpectedResponse`, `ExpectedRevenue`, `ImportSequenceNumber`, `IsTemplate`, `Message`, `msdyn_gdproptout`, `Name`, `Objective`, `OtherCost`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PriceListId`, `ProcessId`, `PromotionCodeName`, `ProposedEnd`, `ProposedStart`, `StageId`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `TmpRegardingObjectId`, `TransactionCurrencyId`, `TraversedPath`, `TypeCode`, `UTCConversionTimeZoneCode`

### Read-only

`BudgetedCost_Base`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `ExpectedRevenue_Base`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OtherCost_Base`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `TotalActualCost`, `TotalActualCost_Base`, `TotalCampaignActivityActualCost`, `TotalCampaignActivityActualCost_Base`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `BusinessUnit_Campaigns` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_campaign_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_campaign_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_campaign_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_campaign_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_campaigns` | [owner](owner.md) | `ownerid` | `ownerid` |
| `PriceList_Campaigns` | [pricelevel](pricelevel.md) | `pricelistid` | `pricelistid` |
| `processstage_campaigns` | [processstage](processstage.md) | `stageid` | `stageid_processstage` |
| `SystemUser_Campaigns` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_Campaigns` | [team](team.md) | `owningteam` | `owningteam` |
| `transactioncurrency_campaign` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |

### One-to-Many (41)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaign_activity_parties` | _n/a_ | `partyid` | _n/a_ |
| `Campaign_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Campaign_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_CampaignActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_CampaignResponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_connections1` | _n/a_ | `record1id` | _n/a_ |
| `campaign_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Campaign_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Campaign_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `Campaign_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_IncidentResolutions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_leads` | _n/a_ | `campaignid` | _n/a_ |
| `Campaign_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_MailboxTrackingFolder` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_opportunities` | _n/a_ | `campaignid` | _n/a_ |
| `campaign_OpportunityCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_OrderCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_orders` | _n/a_ | `campaignid` | _n/a_ |
| `Campaign_Phonecalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Campaign_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_QuoteCloses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_quotes` | _n/a_ | `campaignid` | _n/a_ |
| `Campaign_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `campaign_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Campaign_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `campaigncampaign_association` | _n/a_ | _n/a_ | _n/a_ |
| `campaignlist_association` | [campaignid](campaignid.md) | _n/a_ | _n/a_ |
| `campaignproduct_association` | [campaignid](campaignid.md) | _n/a_ | _n/a_ |
| `campaignsalesliterature_association` | [campaignid](campaignid.md) | _n/a_ | _n/a_ |

## Source

Generated from [campaign.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/campaign.md) on 2026-05-06.