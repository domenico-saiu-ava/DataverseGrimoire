---
logical: "msdyn_salessuggestion"
display: "Informazioni dettagliate"
entitySetName: "msdyn_salessuggestions"
primaryId: "msdyn_salessuggestionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni dettagliate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salessuggestion` |
| Display name | Informazioni dettagliate |
| Display (plural) | Informazioni dettagliate |
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

Writable: **27** · Read-only: **12**

### Writable

`emailaddress`, `importsequencenumber`, `msdyn_customdata`, `msdyn_expirydate`, `msdyn_feedbackreason`, `msdyn_insight`, `msdyn_modelid`, `msdyn_name`, `msdyn_potentialrevenue`, `msdyn_qualifiedrecord`, `msdyn_relatedrecord`, `msdyn_salesmotion`, `msdyn_salesplay`, `msdyn_salessuggestionid`, `msdyn_score`, `msdyn_sequencecontact`, `msdyn_solutionarea`, `msdyn_suggesteddate`, `msdyn_suggestionreason`, `msdyn_suggestionsource`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `transactioncurrencyid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `exchangerate`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_potentialrevenue_base`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salessuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salessuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salessuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salessuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salessuggestion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salessuggestion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salessuggestion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salessuggestion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `TransactionCurrency_msdyn_salessuggestion` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `msdyn_salessuggestion_account` | [account](account.md) | `msdyn_relatedrecord` | `msdyn_relatedrecord` |
| `msdyn_salessuggestion_opportunity_qualifiedrecord` | [opportunity](opportunity.md) | `msdyn_qualifiedrecord` | `msdyn_qualifiedrecord` |
| `msdyn_contact_msdyn_salessuggestion` | [contact](contact.md) | `msdyn_sequencecontact` | `msdyn_sequencecontact` |

### One-to-Many (40)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salessuggestion_msdyn_bookingalerts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_bookingalert` |
| `msdyn_salessuggestion_msdyn_copilottranscripts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_copilottranscript` |
| `msdyn_salessuggestion_cai_genericcontacts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_cai_genericcontact` |
| `msdyn_salessuggestion_PostRegardings` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_PostFollows` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_PostRoles` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_Posts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_msdyn_salesroutingrun_targetobject` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `msdyn_targetobject` | `msdyn_targetobject_msdyn_salessuggestion` |
| `msdyn_salessuggestion_suggestionprincipalobjectaccess_salessuggestionid` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `msdyn_salessuggestionid` | `msdyn_salessuggestionid` |
| `msdyn_salessuggestion_ActivityPointers` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_msfp_alerts` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_alert` |
| `msdyn_salessuggestion_adx_inviteredemptions` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_adx_inviteredemption` |
| `msdyn_salessuggestion_msdyn_ocsessions` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_ocsession` |
| `msdyn_salessuggestion_msfp_surveyinvites` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_surveyinvite` |
| `msdyn_salessuggestion_msdyn_ocliveworkitems` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msdyn_ocliveworkitem` |
| `msdyn_salessuggestion_msfp_surveyresponses` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_msfp_surveyresponse` |
| `msdyn_salessuggestion_adx_portalcomments` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_adx_portalcomment` |
| `msdyn_salessuggestion_chats` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_chat` |
| `msdyn_salessuggestion_SyncErrors` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_ActivityParties` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `partyid` | `partyid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_DuplicateMatchingRecord` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_DuplicateBaseRecord` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `baserecordid` | `baserecordid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_AsyncOperations` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_MailboxTrackingFolders` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_UserEntityInstanceDatas` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `objectid` | `objectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_ProcessSession` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_BulkDeleteFailures` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_PrincipalObjectAttributeAccesses` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `objectid` | `objectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_Appointments` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_appointment` |
| `msdyn_salessuggestion_Emails` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_email` |
| `msdyn_salessuggestion_Faxes` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_fax` |
| `msdyn_salessuggestion_Letters` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_letter` |
| `msdyn_salessuggestion_PhoneCalls` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_phonecall` |
| `msdyn_salessuggestion_Tasks` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_task` |
| `msdyn_salessuggestion_RecurringAppointmentMasters` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_recurringappointmentmaster` |
| `msdyn_salessuggestion_SocialActivities` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_socialactivity` |
| `msdyn_salessuggestion_connections1` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `record1id` | `record1id_msdyn_salessuggestion` |
| `msdyn_salessuggestion_connections2` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `record2id` | `record2id_msdyn_salessuggestion` |
| `msdyn_salessuggestion_Annotations` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `objectid` | `objectid_msdyn_salessuggestion` |
| `msdyn_salessuggestion_ServiceAppointments` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `regardingobjectid` | `regardingobjectid_msdyn_salessuggestion_serviceappointment` |


## Source

Generated from [msdyn_salessuggestion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salessuggestion')) on 2026-05-07.