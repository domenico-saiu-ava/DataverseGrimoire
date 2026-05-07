---
logical: "mspp_shortcut"
display: "Shortcut"
entitySetName: "mspp_shortcuts"
primaryId: "mspp_shortcutid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Shortcut

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_shortcut` |
| Display name | Shortcut |
| Display (plural) | Shortcuts |
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

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_disabletargetvalidation`, `mspp_displayorder`, `mspp_externalurl`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_parentpage_webpageid`, `mspp_shortcutId`, `mspp_title`, `mspp_webfileid`, `mspp_webpageid`, `mspp_websiteid`, `statecode`, `statuscode`

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

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_shortcut_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_connections1` | _n/a_ | `record1id` | _n/a_ |
| `mspp_shortcut_connections2` | _n/a_ | `record2id` | _n/a_ |
| `mspp_shortcut_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_shortcut_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mspp_shortcut.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_shortcut.md) on 2026-05-06.