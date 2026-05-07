---
logical: "mspp_redirect"
display: "Redirect"
entitySetName: "mspp_redirects"
primaryId: "mspp_redirectid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Redirect

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_redirect` |
| Display name | Redirect |
| Display (plural) | Redirects |
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

`mspp_createdby`, `mspp_createdon`, `mspp_inboundurl`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_redirectId`, `mspp_redirecturl`, `mspp_sitemarkerid`, `mspp_statuscode`, `mspp_webpageid`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_sitemarker_redirect` | [mspp_sitemarker](mspp_sitemarker.md) | `mspp_sitemarkerid` | `mspp_sitemarkerid` |
| `mspp_systemuser_mspp_redirect_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_redirect_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webpage_redirect` | [mspp_webpage](mspp_webpage.md) | `mspp_webpageid` | `mspp_webpageid` |
| `mspp_website_redirect` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_redirect_ActivityPointers` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_adx_inviteredemptions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_adx_portalcomments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_Appointments` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_chats` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_Emails` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_Faxes` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_Letters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_PhoneCalls` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_RecurringAppointmentMasters` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_SocialActivities` | _n/a_ | `regardingobjectid` | _n/a_ |
| `mspp_redirect_Tasks` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [mspp_redirect.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_redirect.md) on 2026-05-06.