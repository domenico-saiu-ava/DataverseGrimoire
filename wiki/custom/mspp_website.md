---
logical: "mspp_website"
display: "Sito Web"
entitySetName: "mspp_websites"
primaryId: "mspp_websiteid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sito Web

Portale Web

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_website` |
| Display name | Sito Web |
| Display (plural) | Siti Web |
| Schema name | `mspp_website` |
| Entity set (Web API) | `mspp_websites` |
| Primary id attribute | `mspp_websiteid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_websites?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_websites(<guid>)
POST /api/data/v9.2/mspp_websites
PATCH /api/data/v9.2/mspp_websites(<guid>)
DELETE /api/data/v9.2/mspp_websites(<guid>)
```

## Attributes

Writable: **16** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_defaultlanguage`, `mspp_footerwebtemplateid`, `mspp_headerwebtemplateid`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_parentwebsiteid`, `mspp_partialurl`, `mspp_primarydomainname`, `mspp_website_language`, `mspp_website_version`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_mspp_websitelanguage_mspp_website_DefaultLanguage` | [mspp_websitelanguage](mspp_websitelanguage.md) | `mspp_defaultlanguage` | `mspp_DefaultLanguage` |
| `mspp_systemuser_mspp_website_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_website_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_parentwebsite` | [mspp_website](mspp_website.md) | `mspp_parentwebsiteid` | `mspp_parentwebsiteid` |
| `mspp_webtemplate_website_footer` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_footerwebtemplateid` | `mspp_footerwebtemplateid` |
| `mspp_webtemplate_website_header` | [mspp_webtemplate](mspp_webtemplate.md) | `mspp_headerwebtemplateid` | `mspp_headerwebtemplateid` |

### One-to-Many (56)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_website_msdyn_bookingalerts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_bookingalert` |
| `mspp_columnpermissionprofile_website` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_mspp_website_mspp_websitelanguage` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_WebsiteId` |
| `mspp_website_OpportunityCloses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_opportunityclose` |
| `mspp_website_adplacement` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_OrderCloses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_orderclose` |
| `mspp_website_IncidentResolutions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_incidentresolution` |
| `mspp_website_contentsnippet` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_entityform` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_entitylist` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_mspp_entitypermission` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_mspp_webtemplate` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_pagetemplate` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_parentwebsite` | [mspp_website](mspp_website.md) | `mspp_parentwebsiteid` | `mspp_parentwebsiteid` |
| `mspp_website_pollplacement` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_publishingstate` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_publishingstatetransition` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_WebsiteId` |
| `mspp_website_redirect` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_shortcut` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_WebsiteId` |
| `mspp_website_sitemarker` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_sitesetting` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_webfile` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_webform` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_weblinkset` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_webpage` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_webpageaccesscontrolrule` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_webrole` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_websiteaccess` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_website_QuoteCloses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_quoteclose` |
| `mspp_website_ServiceAppointments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_serviceappointment` |
| `mspp_website_msdyn_copilottranscripts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_copilottranscript` |
| `mspp_website_BulkOperations` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_bulkoperation` |
| `mspp_website_msdyn_ocliveworkitems` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_ocliveworkitem` |
| `mspp_website_CampaignActivities` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_campaignactivity` |
| `mspp_website_CampaignResponses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_campaignresponse` |
| `mspp_website_msdyn_ocsessions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msdyn_ocsession` |
| `mspp_website_SharePointDocuments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website` |
| `mspp_website_cai_genericcontacts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_cai_genericcontact` |
| `mspp_website_msfp_alerts` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_alert` |
| `mspp_website_msfp_surveyinvites` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_surveyinvite` |
| `mspp_website_msfp_surveyresponses` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_msfp_surveyresponse` |
| `mspp_website_ActivityPointers` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website` |
| `mspp_website_adx_inviteredemptions` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_adx_inviteredemption` |
| `mspp_website_adx_portalcomments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_adx_portalcomment` |
| `mspp_website_chats` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_chat` |
| `mspp_website_SharePointDocumentLocations` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website` |
| `mspp_website_Appointments` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_appointment` |
| `mspp_website_Emails` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_email` |
| `mspp_website_Faxes` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_fax` |
| `mspp_website_Letters` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_letter` |
| `mspp_website_PhoneCalls` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_phonecall` |
| `mspp_website_Tasks` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_task` |
| `mspp_website_RecurringAppointmentMasters` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_recurringappointmentmaster` |
| `mspp_website_SocialActivities` | [mspp_website](mspp_website.md) | `regardingobjectid` | `regardingobjectid_mspp_website_socialactivity` |
| `mspp_website_connections1` | [mspp_website](mspp_website.md) | `record1id` | `record1id_mspp_website` |
| `mspp_website_connections2` | [mspp_website](mspp_website.md) | `record2id` | `record2id_mspp_website` |


## Source

Generated from [mspp_website (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_website')) on 2026-05-07.