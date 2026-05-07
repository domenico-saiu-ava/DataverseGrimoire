---
logical: "mspp_webform"
display: "Multistep Form"
entitySetName: "mspp_webforms"
primaryId: "mspp_webformid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Multistep Form

Defines the necessary properties and relationships to the other key entities in order to control the initialization of the form within a web portal.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_webform` |
| Display name | Multistep Form |
| Display (plural) | Multistep Forms |
| Schema name | `mspp_webform` |
| Entity set (Web API) | `mspp_webforms` |
| Primary id attribute | `mspp_webformid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_webforms?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_webforms(<guid>)
POST /api/data/v9.2/mspp_webforms
PATCH /api/data/v9.2/mspp_webforms(<guid>)
DELETE /api/data/v9.2/mspp_webforms(<guid>)
```

## Attributes

Writable: **26** · Read-only: **0**

### Writable

`mspp_authenticationrequired`, `mspp_createdby`, `mspp_createdon`, `mspp_editexistingrecordpermitted`, `mspp_editexpiredmessage`, `mspp_editexpiredstatecode`, `mspp_editexpiredstatuscode`, `mspp_editnotpermittedmessage`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_multiplerecordsperuserpermitted`, `mspp_name`, `mspp_progressindicatorenabled`, `mspp_progressindicatorignorelaststep`, `mspp_progressindicatorposition`, `mspp_progressindicatorprependstepnum`, `mspp_progressindicatortype`, `mspp_provisionedlanguages`, `mspp_savechangeswarningmessage`, `mspp_savechangeswarningonclose`, `mspp_startnewsessiononload`, `mspp_startstep`, `mspp_webformId`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_webform_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_webform_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_webform_startstep` | [mspp_webformstep](mspp_webformstep.md) | `mspp_startstep` | `mspp_startstep` |
| `mspp_website_webform` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_webform_webformmetadata_entityformforcreate` | _n/a_ | `mspp_entityformforcreate` | _n/a_ |
| `mspp_webformstep_webform` | _n/a_ | `mspp_webform` | _n/a_ |
| `mspp_webpage_webform` | _n/a_ | `mspp_webform` | _n/a_ |


## Source

Generated from [mspp_webform.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_webform.md) on 2026-05-06.