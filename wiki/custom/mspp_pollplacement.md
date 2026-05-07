---
logical: "mspp_pollplacement"
display: "Posizionamento sondaggio"
entitySetName: "mspp_pollplacements"
primaryId: "mspp_pollplacementid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Posizionamento sondaggio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_pollplacement` |
| Display name | Posizionamento sondaggio |
| Display (plural) | Posizionamenti sondaggi |
| Schema name | `mspp_pollplacement` |
| Entity set (Web API) | `mspp_pollplacements` |
| Primary id attribute | `mspp_pollplacementid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_pollplacements?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_pollplacements(<guid>)
POST /api/data/v9.2/mspp_pollplacements
PATCH /api/data/v9.2/mspp_pollplacements(<guid>)
DELETE /api/data/v9.2/mspp_pollplacements(<guid>)
```

## Attributes

Writable: **10** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_pollplacementid`, `mspp_websiteid`, `mspp_webtemplateid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_pollplacement_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_pollplacement_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_pollplacement` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_webtemplate_pollplacement` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |

### One-to-Many (28)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_pollplacement_msdyn_bookingalerts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_bookingalert` |
| `mspp_pollplacement_OpportunityCloses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_opportunityclose` |
| `mspp_pollplacement_OrderCloses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_orderclose` |
| `mspp_pollplacement_IncidentResolutions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_incidentresolution` |
| `mspp_pollplacement_QuoteCloses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_quoteclose` |
| `mspp_pollplacement_ServiceAppointments` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_serviceappointment` |
| `mspp_pollplacement_msdyn_copilottranscripts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_copilottranscript` |
| `mspp_pollplacement_BulkOperations` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_bulkoperation` |
| `mspp_pollplacement_msdyn_ocliveworkitems` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_ocliveworkitem` |
| `mspp_pollplacement_CampaignActivities` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_campaignactivity` |
| `mspp_pollplacement_CampaignResponses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_campaignresponse` |
| `mspp_pollplacement_msdyn_ocsessions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msdyn_ocsession` |
| `mspp_pollplacement_cai_genericcontacts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_cai_genericcontact` |
| `mspp_pollplacement_msfp_alerts` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_alert` |
| `mspp_pollplacement_msfp_surveyinvites` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_surveyinvite` |
| `mspp_pollplacement_msfp_surveyresponses` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_msfp_surveyresponse` |
| `mspp_pollplacement_ActivityPointers` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement` |
| `mspp_pollplacement_adx_inviteredemptions` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_adx_inviteredemption` |
| `mspp_pollplacement_adx_portalcomments` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_adx_portalcomment` |
| `mspp_pollplacement_chats` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_chat` |
| `mspp_pollplacement_Appointments` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_appointment` |
| `mspp_pollplacement_Emails` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_email` |
| `mspp_pollplacement_Faxes` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_fax` |
| `mspp_pollplacement_Letters` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_letter` |
| `mspp_pollplacement_PhoneCalls` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_phonecall` |
| `mspp_pollplacement_Tasks` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_task` |
| `mspp_pollplacement_RecurringAppointmentMasters` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_recurringappointmentmaster` |
| `mspp_pollplacement_SocialActivities` | [mspp_pollplacement](mspp_pollplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_pollplacement_socialactivity` |


## Source

Generated from [mspp_pollplacement (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_pollplacement')) on 2026-05-07.