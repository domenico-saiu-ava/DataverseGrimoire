---
logical: "mspp_shortcut"
display: "Collegamento"
entitySetName: "mspp_shortcuts"
primaryId: "mspp_shortcutid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Collegamento

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_shortcut` |
| Display name | Collegamento |
| Display (plural) | Collegamenti |
| Schema name | `mspp_shortcut` |
| Entity set (Web API) | `mspp_shortcuts` |
| Primary id attribute | `mspp_shortcutid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_shortcuts?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_shortcuts(<guid>)
POST /api/data/v9.2/mspp_shortcuts
PATCH /api/data/v9.2/mspp_shortcuts(<guid>)
DELETE /api/data/v9.2/mspp_shortcuts(<guid>)
```

## Attributes

Writable: **17** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_disabletargetvalidation`, `mspp_displayorder`, `mspp_externalurl`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_parentpage_webpageid`, `mspp_shortcutid`, `mspp_title`, `mspp_webfileid`, `mspp_webpageid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_parentwebpage_shortcut` | [mspp_webpage](mspp_webpage.md) | `mspp_parentpage_webpageid` | `mspp_ParentPage_webpageId` |
| `mspp_systemuser_mspp_shortcut_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_shortcut_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webfile_shortcut` | [mspp_webfile](mspp_webfile.md) | `mspp_webfileid` | `mspp_WebFileId` |
| `mspp_webpage_shortcut` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageid` | `mspp_WebPageId` |
| `mspp_website_shortcut` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_WebsiteId` |

### One-to-Many (30)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_shortcut_msdyn_bookingalerts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_bookingalert` |
| `mspp_shortcut_OpportunityCloses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_opportunityclose` |
| `mspp_shortcut_OrderCloses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_orderclose` |
| `mspp_shortcut_IncidentResolutions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_incidentresolution` |
| `mspp_shortcut_QuoteCloses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_quoteclose` |
| `mspp_shortcut_ServiceAppointments` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_serviceappointment` |
| `mspp_shortcut_msdyn_copilottranscripts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_copilottranscript` |
| `mspp_shortcut_BulkOperations` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_bulkoperation` |
| `mspp_shortcut_msdyn_ocliveworkitems` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_ocliveworkitem` |
| `mspp_shortcut_CampaignActivities` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_campaignactivity` |
| `mspp_shortcut_CampaignResponses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_campaignresponse` |
| `mspp_shortcut_msdyn_ocsessions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msdyn_ocsession` |
| `mspp_shortcut_cai_genericcontacts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_cai_genericcontact` |
| `mspp_shortcut_msfp_alerts` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_alert` |
| `mspp_shortcut_msfp_surveyinvites` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_surveyinvite` |
| `mspp_shortcut_msfp_surveyresponses` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_msfp_surveyresponse` |
| `mspp_shortcut_ActivityPointers` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut` |
| `mspp_shortcut_adx_inviteredemptions` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_adx_inviteredemption` |
| `mspp_shortcut_adx_portalcomments` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_adx_portalcomment` |
| `mspp_shortcut_chats` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_chat` |
| `mspp_shortcut_Appointments` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_appointment` |
| `mspp_shortcut_Emails` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_email` |
| `mspp_shortcut_Faxes` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_fax` |
| `mspp_shortcut_Letters` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_letter` |
| `mspp_shortcut_PhoneCalls` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_phonecall` |
| `mspp_shortcut_Tasks` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_task` |
| `mspp_shortcut_RecurringAppointmentMasters` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_recurringappointmentmaster` |
| `mspp_shortcut_SocialActivities` | [mspp_shortcut](mspp_shortcut.md) | `regardingobjectid` | `regardingobjectid_mspp_shortcut_socialactivity` |
| `mspp_shortcut_connections1` | [mspp_shortcut](mspp_shortcut.md) | `record1id` | `record1id_mspp_shortcut` |
| `mspp_shortcut_connections2` | [mspp_shortcut](mspp_shortcut.md) | `record2id` | `record2id_mspp_shortcut` |


## Source

Generated from [mspp_shortcut (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_shortcut')) on 2026-05-07.