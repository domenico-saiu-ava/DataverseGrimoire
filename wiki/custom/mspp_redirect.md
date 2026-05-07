---
logical: "mspp_redirect"
display: "Reindirizzamento"
entitySetName: "mspp_redirects"
primaryId: "mspp_redirectid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Reindirizzamento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_redirect` |
| Display name | Reindirizzamento |
| Display (plural) | Reindirizzamenti |
| Schema name | `mspp_redirect` |
| Entity set (Web API) | `mspp_redirects` |
| Primary id attribute | `mspp_redirectid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_redirects?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_redirects(<guid>)
POST /api/data/v9.2/mspp_redirects
PATCH /api/data/v9.2/mspp_redirects(<guid>)
DELETE /api/data/v9.2/mspp_redirects(<guid>)
```

## Attributes

Writable: **14** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_inboundurl`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_redirectid`, `mspp_redirecturl`, `mspp_sitemarkerid`, `mspp_statuscode`, `mspp_webpageid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_sitemarker_redirect` | [mspp_sitemarker](mspp_sitemarker.md) | `mspp_sitemarkerid` | `mspp_sitemarkerid` |
| `mspp_systemuser_mspp_redirect_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_redirect_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webpage_redirect` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageid` | `mspp_webpageid` |
| `mspp_website_redirect` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (28)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_redirect_msdyn_bookingalerts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_bookingalert` |
| `mspp_redirect_OpportunityCloses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_opportunityclose` |
| `mspp_redirect_OrderCloses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_orderclose` |
| `mspp_redirect_IncidentResolutions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_incidentresolution` |
| `mspp_redirect_QuoteCloses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_quoteclose` |
| `mspp_redirect_ServiceAppointments` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_serviceappointment` |
| `mspp_redirect_msdyn_copilottranscripts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_copilottranscript` |
| `mspp_redirect_BulkOperations` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_bulkoperation` |
| `mspp_redirect_msdyn_ocliveworkitems` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_ocliveworkitem` |
| `mspp_redirect_CampaignActivities` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_campaignactivity` |
| `mspp_redirect_CampaignResponses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_campaignresponse` |
| `mspp_redirect_msdyn_ocsessions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msdyn_ocsession` |
| `mspp_redirect_cai_genericcontacts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_cai_genericcontact` |
| `mspp_redirect_msfp_alerts` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_alert` |
| `mspp_redirect_msfp_surveyinvites` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_surveyinvite` |
| `mspp_redirect_msfp_surveyresponses` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_msfp_surveyresponse` |
| `mspp_redirect_ActivityPointers` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect` |
| `mspp_redirect_adx_inviteredemptions` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_adx_inviteredemption` |
| `mspp_redirect_adx_portalcomments` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_adx_portalcomment` |
| `mspp_redirect_chats` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_chat` |
| `mspp_redirect_Appointments` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_appointment` |
| `mspp_redirect_Emails` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_email` |
| `mspp_redirect_Faxes` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_fax` |
| `mspp_redirect_Letters` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_letter` |
| `mspp_redirect_PhoneCalls` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_phonecall` |
| `mspp_redirect_Tasks` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_task` |
| `mspp_redirect_RecurringAppointmentMasters` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_recurringappointmentmaster` |
| `mspp_redirect_SocialActivities` | [mspp_redirect](mspp_redirect.md) | `regardingobjectid` | `regardingobjectid_mspp_redirect_socialactivity` |


## Source

Generated from [mspp_redirect (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_redirect')) on 2026-05-07.