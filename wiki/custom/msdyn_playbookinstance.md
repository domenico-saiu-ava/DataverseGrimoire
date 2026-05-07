---
logical: "msdyn_playbookinstance"
display: "Playbook"
entitySetName: "msdyn_playbookinstances"
primaryId: "msdyn_playbookinstanceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Playbook

Istanza effettiva di un modello di playbook dopo che è stato avviato.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_playbookinstance` |
| Display name | Playbook |
| Display (plural) | Playbook |
| Schema name | `msdyn_playbookinstance` |
| Entity set (Web API) | `msdyn_playbookinstances` |
| Primary id attribute | `msdyn_playbookinstanceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_playbookinstances?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_playbookinstances(<guid>)
POST /api/data/v9.2/msdyn_playbookinstances
PATCH /api/data/v9.2/msdyn_playbookinstances(<guid>)
DELETE /api/data/v9.2/msdyn_playbookinstances(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_activitiesassociated`, `msdyn_activitiesclosed`, `msdyn_categoryid`, `msdyn_estimatedclose`, `msdyn_evaluateactivityclosure`, `msdyn_name`, `msdyn_playbookinstanceid`, `msdyn_playbooktemplateid`, `msdyn_trackprogress`, `overriddencreatedon`, `ownerid`, `regarding`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_playbookinstance_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_playbookinstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_playbookinstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_playbookinstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_playbookinstance` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_playbookinstance` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_playbookinstance` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_playbookinstance` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_playbooktemplate_msdyn_playbookinstance` | [msdyn_playbooktemplate](msdyn_playbooktemplate.md) | `msdyn_playbooktemplateid` | `msdyn_playbooktemplateid` |
| `msdyn_playbookcategory_msdyn_playbookinstance` | [msdyn_playbookcategory](msdyn_playbookcategory.md) | `msdyn_categoryid` | `msdyn_categoryid` |
| `msdyn_playbookinstance_opportunity` | [opportunity](opportunity.md) | `regarding` | `regarding_opportunity` |
| `msdyn_playbookinstance_quote` | [quote](quote.md) | `regarding` | `regarding_quote` |
| `msdyn_playbookinstance_salesorder` | [salesorder](salesorder.md) | `regarding` | `regarding_salesorder` |
| `msdyn_playbookinstance_invoice` | [invoice](invoice.md) | `regarding` | `regarding_invoice` |
| `msdyn_playbookinstance_lead` | [lead](lead.md) | `regarding` | `regarding_lead` |
| `msdyn_playbookinstance_contact` | [contact](contact.md) | `regarding` | `regarding_contact` |
| `msdyn_playbookinstance_account` | [account](account.md) | `regarding` | `regarding_account` |

### One-to-Many (34)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_playbookinstance_msdyn_bookingalerts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_bookingalert` |
| `msdyn_playbookinstance_OpportunityCloses` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_opportunityclose` |
| `msdyn_playbookinstance_OrderCloses` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_orderclose` |
| `msdyn_playbookinstance_QuoteCloses` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_quoteclose` |
| `msdyn_playbookinstance_msdyn_copilottranscripts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_copilottranscript` |
| `msdyn_playbookinstance_msdyn_ocliveworkitems` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_ocliveworkitem` |
| `msdyn_playbookinstance_ActivityPointers` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_adx_inviteredemptions` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_adx_inviteredemption` |
| `msdyn_playbookinstance_adx_portalcomments` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_adx_portalcomment` |
| `msdyn_playbookinstance_chats` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_chat` |
| `msdyn_playbookinstance_SyncErrors` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_DuplicateMatchingRecord` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_DuplicateBaseRecord` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `baserecordid` | `baserecordid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_AsyncOperations` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_MailboxTrackingFolders` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_UserEntityInstanceDatas` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `objectid` | `objectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_ProcessSession` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_BulkDeleteFailures` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_PrincipalObjectAttributeAccesses` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `objectid` | `objectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_Appointments` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_appointment` |
| `msdyn_playbookinstance_Emails` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_email` |
| `msdyn_playbookinstance_Faxes` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_fax` |
| `msdyn_playbookinstance_Letters` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_letter` |
| `msdyn_playbookinstance_PhoneCalls` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_phonecall` |
| `msdyn_playbookinstance_Tasks` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_task` |
| `msdyn_playbookinstance_RecurringAppointmentMasters` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_recurringappointmentmaster` |
| `msdyn_playbookinstance_SocialActivities` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_socialactivity` |
| `msdyn_playbookinstance_Annotations` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `objectid` | `objectid_msdyn_playbookinstance` |
| `msdyn_playbookinstance_ServiceAppointments` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_serviceappointment` |
| `msdyn_playbookinstance_msdyn_ocsessions` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msdyn_ocsession` |
| `msdyn_playbookinstance_cai_genericcontacts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_cai_genericcontact` |
| `msdyn_playbookinstance_msfp_alerts` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msfp_alert` |
| `msdyn_playbookinstance_msfp_surveyinvites` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msfp_surveyinvite` |
| `msdyn_playbookinstance_msfp_surveyresponses` | [msdyn_playbookinstance](msdyn_playbookinstance.md) | `regardingobjectid` | `regardingobjectid_msdyn_playbookinstance_msfp_surveyresponse` |


## Source

Generated from [msdyn_playbookinstance (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_playbookinstance')) on 2026-05-07.