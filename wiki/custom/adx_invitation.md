---
logical: "adx_invitation"
display: "Invito"
entitySetName: "adx_invitations"
primaryId: "adx_invitationid"
primaryName: "adx_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Invito

Invia inviti a indirizzi e-mail o contatti esistenti e assegnali a ruoli Web dopo il riscatto.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_invitation` |
| Display name | Invito |
| Display (plural) | Inviti |
| Schema name | `adx_invitation` |
| Entity set (Web API) | `adx_invitations` |
| Primary id attribute | `adx_invitationid` |
| Primary name attribute | `adx_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_invitations?$select=adx_name&$top=10
GET /api/data/v9.2/adx_invitations(<guid>)
POST /api/data/v9.2/adx_invitations
PATCH /api/data/v9.2/adx_invitations(<guid>)
DELETE /api/data/v9.2/adx_invitations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`adx_assigntoaccount`, `adx_expirydate`, `adx_invitationcode`, `adx_invitationid`, `adx_invitecontact`, `adx_invitercontact`, `adx_maximumredemptions`, `adx_name`, `adx_redeemedcontact`, `adx_redemptions`, `adx_redemptionworkflow`, `adx_type`, `importsequencenumber`, `mspp_websiteid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_adx_invitation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_invitation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_invitation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_invitation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_adx_invitation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_adx_invitation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_adx_invitation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_adx_invitation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `adx_invitation_assigntoaccount` | [account](account.md) | `adx_assigntoaccount` | `adx_assignToAccount` |
| `adx_invitation_invitecontact` | [contact](contact.md) | `adx_invitecontact` | `adx_inviteContact` |
| `adx_invitation_invitercontact` | [contact](contact.md) | `adx_invitercontact` | `adx_invitercontact` |
| `adx_invitation_redeemedContact` | [contact](contact.md) | `adx_redeemedcontact` | `adx_redeemedContact` |
| `adx_invitation_redemptionworkflow` | [workflow](workflow.md) | `adx_redemptionworkflow` | `adx_redemptionWorkflow` |
| `powerpagesite_mspp_websiteid_adx_invitation` | [powerpagesite](powerpagesite.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (40)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_msdyn_bookingalerts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_bookingalert` |
| `adx_invitation_OpportunityCloses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_opportunityclose` |
| `adx_invitation_OrderCloses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_orderclose` |
| `adx_invitation_IncidentResolutions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_incidentresolution` |
| `adx_invitation_QuoteCloses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_quoteclose` |
| `adx_invitation_ServiceAppointments` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_serviceappointment` |
| `adx_invitation_msdyn_copilottranscripts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_copilottranscript` |
| `adx_invitation_BulkOperations` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_bulkoperation` |
| `adx_invitation_msdyn_ocliveworkitems` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_ocliveworkitem` |
| `adx_invitation_CampaignActivities` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_campaignactivity` |
| `adx_invitation_ActivityPointers` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_invitation_chats` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_chat` |
| `adx_invitation_SyncErrors` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_invitation_DuplicateMatchingRecord` | [adx_invitation](adx_invitation.md) | `duplicaterecordid` | `duplicaterecordid_adx_invitation` |
| `adx_invitation_DuplicateBaseRecord` | [adx_invitation](adx_invitation.md) | `baserecordid` | `baserecordid_adx_invitation` |
| `adx_invitation_AsyncOperations` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_invitation_MailboxTrackingFolders` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_invitation_UserEntityInstanceDatas` | [adx_invitation](adx_invitation.md) | `objectid` | `objectid_adx_invitation` |
| `adx_invitation_ProcessSession` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_invitation_BulkDeleteFailures` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation` |
| `adx_invitation_PrincipalObjectAttributeAccesses` | [adx_invitation](adx_invitation.md) | `objectid` | `objectid_adx_invitation` |
| `adx_invitation_Appointments` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_appointment` |
| `adx_invitation_Emails` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_email` |
| `adx_invitation_Faxes` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_fax` |
| `adx_invitation_Letters` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_letter` |
| `adx_invitation_PhoneCalls` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_phonecall` |
| `adx_invitation_Tasks` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_task` |
| `adx_invitation_RecurringAppointmentMasters` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_recurringappointmentmaster` |
| `adx_invitation_SocialActivities` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_socialactivity` |
| `adx_invitation_connections1` | [adx_invitation](adx_invitation.md) | `record1id` | `record1id_adx_invitation` |
| `adx_invitation_connections2` | [adx_invitation](adx_invitation.md) | `record2id` | `record2id_adx_invitation` |
| `adx_invitation_Annotations` | [adx_invitation](adx_invitation.md) | `objectid` | `objectid_adx_invitation` |
| `adx_invitation_adx_inviteredemptions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_adx_inviteredemption` |
| `adx_invitation_CampaignResponses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_campaignresponse` |
| `adx_invitation_adx_portalcomments` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_adx_portalcomment` |
| `adx_invitation_msdyn_ocsessions` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msdyn_ocsession` |
| `adx_invitation_cai_genericcontacts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_cai_genericcontact` |
| `adx_invitation_msfp_alerts` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_alert` |
| `adx_invitation_msfp_surveyinvites` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_surveyinvite` |
| `adx_invitation_msfp_surveyresponses` | [adx_invitation](adx_invitation.md) | `regardingobjectid` | `regardingobjectid_adx_invitation_msfp_surveyresponse` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_invitecontacts` | [contact](contact.md) | _n/a_ | `adx_invitation_invitecontacts` |
| `adx_invitation_redeemedcontacts` | [contact](contact.md) | _n/a_ | `adx_invitation_redeemedcontacts` |
| `adx_invitation_mspp_webrole_powerpagecomponent` | [powerpagecomponent](powerpagecomponent.md) | _n/a_ | `adx_invitation_mspp_webrole_powerpagecomponent` |

## Source

Generated from [adx_invitation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_invitation')) on 2026-05-07.