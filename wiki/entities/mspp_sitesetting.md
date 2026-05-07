---
logical: "mspp_sitesetting"
display: "Site Setting"
entitySetName: "mspp_sitesettings"
primaryId: "mspp_sitesettingid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Site Setting

Site specific settings or variables refferenced by the web site code files.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_sitesetting` |
| Display name | Site Setting |
| Display (plural) | Site Settings |
| Schema name | `mspp_sitesetting` |
| Entity set (Web API) | `mspp_sitesettings` |
| Primary id attribute | `mspp_sitesettingid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_sitesettings?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_sitesettings(<guid>)
POST /api/data/v9.2/mspp_sitesettings
PATCH /api/data/v9.2/mspp_sitesettings(<guid>)
DELETE /api/data/v9.2/mspp_sitesettings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_description`, `mspp_environmentvariable`, `mspp_envvar_schema`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_sitesettingId`, `mspp_source`, `mspp_value`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_environmentvariabledefinition_mspp_sitesetting_environmentvariable` | [environmentvariabledefinition](environmentvariabledefinition.md) | `mspp_environmentvariable` | `EnvironmentValue` |
| `mspp_systemuser_mspp_sitesetting_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_sitesetting_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_sitesetting` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |



## Source

Generated from [mspp_sitesetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_sitesetting.md) on 2026-05-06.