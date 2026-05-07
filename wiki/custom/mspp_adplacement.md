---
logical: "mspp_adplacement"
display: "Posizionamento annuncio"
entitySetName: "mspp_adplacements"
primaryId: "mspp_adplacementid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Posizionamento annuncio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_adplacement` |
| Display name | Posizionamento annuncio |
| Display (plural) | Posizionamenti annunci |
| Schema name | `mspp_adplacement` |
| Entity set (Web API) | `mspp_adplacements` |
| Primary id attribute | `mspp_adplacementid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_adplacements?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_adplacements(<guid>)
POST /api/data/v9.2/mspp_adplacements
PATCH /api/data/v9.2/mspp_adplacements(<guid>)
DELETE /api/data/v9.2/mspp_adplacements(<guid>)
```

## Attributes

Writable: **10** · Read-only: **0**

### Writable

`mspp_adplacementid`, `mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_websiteid`, `mspp_webtemplateid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_adplacement_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_adplacement_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_adplacement` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_webtemplate_adplacement` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_webtemplateid` | `mspp_webtemplateid` |

### One-to-Many (28)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_adplacement_msdyn_bookingalerts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_bookingalert` |
| `mspp_adplacement_OpportunityCloses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_opportunityclose` |
| `mspp_adplacement_OrderCloses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_orderclose` |
| `mspp_adplacement_IncidentResolutions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_incidentresolution` |
| `mspp_adplacement_QuoteCloses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_quoteclose` |
| `mspp_adplacement_ServiceAppointments` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_serviceappointment` |
| `mspp_adplacement_msdyn_copilottranscripts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_copilottranscript` |
| `mspp_adplacement_BulkOperations` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_bulkoperation` |
| `mspp_adplacement_msdyn_ocliveworkitems` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_ocliveworkitem` |
| `mspp_adplacement_CampaignActivities` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_campaignactivity` |
| `mspp_adplacement_CampaignResponses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_campaignresponse` |
| `mspp_adplacement_msdyn_ocsessions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msdyn_ocsession` |
| `mspp_adplacement_cai_genericcontacts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_cai_genericcontact` |
| `mspp_adplacement_msfp_alerts` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_alert` |
| `mspp_adplacement_msfp_surveyinvites` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_surveyinvite` |
| `mspp_adplacement_msfp_surveyresponses` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_msfp_surveyresponse` |
| `mspp_adplacement_ActivityPointers` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement` |
| `mspp_adplacement_adx_inviteredemptions` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_adx_inviteredemption` |
| `mspp_adplacement_adx_portalcomments` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_adx_portalcomment` |
| `mspp_adplacement_chats` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_chat` |
| `mspp_adplacement_Appointments` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_appointment` |
| `mspp_adplacement_Emails` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_email` |
| `mspp_adplacement_Faxes` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_fax` |
| `mspp_adplacement_Letters` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_letter` |
| `mspp_adplacement_PhoneCalls` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_phonecall` |
| `mspp_adplacement_Tasks` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_task` |
| `mspp_adplacement_RecurringAppointmentMasters` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_recurringappointmentmaster` |
| `mspp_adplacement_SocialActivities` | [mspp_adplacement](mspp_adplacement.md) | `regardingobjectid` | `regardingobjectid_mspp_adplacement_socialactivity` |


## Source

Generated from [mspp_adplacement (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_adplacement')) on 2026-05-07.