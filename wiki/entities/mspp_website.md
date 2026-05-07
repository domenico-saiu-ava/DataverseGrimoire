---
logical: "mspp_website"
display: "Website"
entitySetName: "mspp_websites"
primaryId: "mspp_websiteid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Website

Web Portal

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_website` |
| Display name | Website |
| Display (plural) | Websites |
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

`mspp_createdby`, `mspp_createdon`, `mspp_defaultlanguage`, `mspp_footerwebtemplateid`, `mspp_headerwebtemplateid`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_parentwebsiteid`, `mspp_partialurl`, `mspp_primarydomainname`, `mspp_website_language`, `mspp_website_version`, `mspp_websiteId`, `statecode`, `statuscode`

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

### One-to-Many (39)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermissionprofile_website` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_mspp_website_mspp_websitelanguage` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_adplacement` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_connections1` | _n/a_ | `record1id` | _n/a_ |
| `mspp_website_connections2` | _n/a_ | `record2id` | _n/a_ |
| `mspp_website_contentsnippet` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_entityform` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_entitylist` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_mspp_entitypermission` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_mspp_webtemplate` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_pagetemplate` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_parentwebsite` | _n/a_ | `mspp_parentwebsiteid` | _n/a_ |
| `mspp_website_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_pollplacement` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_publishingstate` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_publishingstatetransition` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_redirect` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_SharePointDocumentLocations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_shortcut` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_sitemarker` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_sitesetting` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_website_webfile` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_webform` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_weblinkset` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_webpage` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_webpageaccesscontrolrule` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_webrole` | _n/a_ | `mspp_websiteid` | _n/a_ |
| `mspp_website_websiteaccess` | _n/a_ | `mspp_websiteid` | _n/a_ |


## Source

Generated from [mspp_website.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_website.md) on 2026-05-06.