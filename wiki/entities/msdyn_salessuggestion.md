---
logical: "msdyn_salessuggestion"
display: "Insight"
entitySetName: "msdyn_salessuggestions"
primaryId: "msdyn_salessuggestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Insight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salessuggestion` |
| Display name | Insight |
| Display (plural) | Insights |
| Schema name | `msdyn_salessuggestion` |
| Entity set (Web API) | `msdyn_salessuggestions` |
| Primary id attribute | `msdyn_salessuggestionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salessuggestions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salessuggestions(<guid>)
POST /api/data/v9.2/msdyn_salessuggestions
PATCH /api/data/v9.2/msdyn_salessuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_salessuggestions(<guid>)
```

## Attributes

Writable: **30** · Read-only: **14**

### Writable

`EmailAddress`, `ImportSequenceNumber`, `msdyn_customdata`, `msdyn_expirydate`, `msdyn_feedbackreason`, `msdyn_insight`, `msdyn_modelid`, `msdyn_name`, `msdyn_potentialrevenue`, `msdyn_qualifiedrecord`, `msdyn_qualifiedrecordIdType`, `msdyn_relatedrecord`, `msdyn_relatedrecordIdType`, `msdyn_salesmotion`, `msdyn_salesplay`, `msdyn_salessuggestionId`, `msdyn_score`, `msdyn_sequencecontact`, `msdyn_solutionarea`, `msdyn_suggesteddate`, `msdyn_suggestionreason`, `msdyn_suggestionsource`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `TransactionCurrencyId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_potentialrevenue_Base`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salessuggestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salessuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salessuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salessuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salessuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_contact_msdyn_salessuggestion` | [contact](contact.md) | `msdyn_sequencecontact` | `msdyn_sequencecontact` |
| `msdyn_salessuggestion_account` | [account](account.md) | `msdyn_relatedrecord` | `msdyn_relatedrecord` |
| `msdyn_salessuggestion_opportunity_qualifiedrecord` | [opportunity](opportunity.md) | `msdyn_qualifiedrecord` | `msdyn_qualifiedrecord` |
| `owner_msdyn_salessuggestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salessuggestion` | [team](team.md) | `owningteam` | `owningteam` |
| `TransactionCurrency_msdyn_salessuggestion` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_msdyn_salessuggestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (33)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salessuggestion_ActivityParties` | _n/a_ | `partyid` | _n/a_ |
| `msdyn_salessuggestion_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salessuggestion_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_connections1` | _n/a_ | `record1id` | _n/a_ |
| `msdyn_salessuggestion_connections2` | _n/a_ | `record2id` | _n/a_ |
| `msdyn_salessuggestion_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salessuggestion_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salessuggestion_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_msdyn_copilottranscripts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_msdyn_ocliveworkitems` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_msdyn_ocsessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_msdyn_salesroutingrun_targetobject` | _n/a_ | `msdyn_targetobject` | _n/a_ |
| `msdyn_salessuggestion_msfp_alerts` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_msfp_surveyinvites` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_msfp_surveyresponses` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salessuggestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_ServiceAppointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_suggestionprincipalobjectaccess_salessuggestionid` | _n/a_ | `msdyn_salessuggestionid` | _n/a_ |
| `msdyn_salessuggestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salessuggestion_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salessuggestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salessuggestion.md) on 2026-05-06.