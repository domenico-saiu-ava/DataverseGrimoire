---
logical: "mspp_websiteaccess"
display: "Website Access"
entitySetName: "mspp_websiteaccesses"
primaryId: "mspp_websiteaccessid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Website Access

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_websiteaccess` |
| Display name | Website Access |
| Display (plural) | Website Access Permissions |
| Schema name | `mspp_websiteaccess` |
| Entity set (Web API) | `mspp_websiteaccesses` |
| Primary id attribute | `mspp_websiteaccessid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_websiteaccesses?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_websiteaccesses(<guid>)
POST /api/data/v9.2/mspp_websiteaccesses
PATCH /api/data/v9.2/mspp_websiteaccesses(<guid>)
DELETE /api/data/v9.2/mspp_websiteaccesses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_managecontentsnippets`, `mspp_managesitemarkers`, `mspp_manageweblinksets`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_previewunpublishedentities`, `mspp_websiteaccessId`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_websiteaccess_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_websiteaccess_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_websiteaccess` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |


### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_websiteaccess_webrole` | [mspp_websiteaccessid](mspp_websiteaccessid.md) | _n/a_ | _n/a_ |

## Source

Generated from [mspp_websiteaccess.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_websiteaccess.md) on 2026-05-06.