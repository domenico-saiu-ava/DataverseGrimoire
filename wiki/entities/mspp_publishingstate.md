---
logical: "mspp_publishingstate"
display: "Publishing State"
entitySetName: "mspp_publishingstates"
primaryId: "mspp_publishingstateid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
---

# Publishing State

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_publishingstate` |
| Display name | Publishing State |
| Display (plural) | Publishing States |
| Schema name | `mspp_publishingstate` |
| Entity set (Web API) | `mspp_publishingstates` |
| Primary id attribute | `mspp_publishingstateid` |
| Primary name attribute | `mspp_name` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_publishingstates?$select=mspp_name&$top=10
GET /api/data/v9.2/mspp_publishingstates(<guid>)
POST /api/data/v9.2/mspp_publishingstates
PATCH /api/data/v9.2/mspp_publishingstates(<guid>)
DELETE /api/data/v9.2/mspp_publishingstates(<guid>)
```

## Attributes

Writable: **12** · Read-only: **0**

### Writable

`mspp_createdby`, `mspp_createdon`, `mspp_displayorder`, `mspp_isdefault`, `mspp_isvisible`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_publishingstateId`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_systemuser_mspp_publishingstate_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_publishingstate_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |
| `mspp_website_publishingstate` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_frompublishingstate_statetransition` | _n/a_ | `mspp_fromstate_publishingstateid` | _n/a_ |
| `mspp_mspp_publishingstate_mspp_websitelanguage_PublishingState` | _n/a_ | `mspp_publishingstate` | _n/a_ |
| `mspp_publishingstate_webfile` | _n/a_ | `mspp_publishingstateid` | _n/a_ |
| `mspp_publishingstate_weblink` | _n/a_ | `mspp_publishingstateid` | _n/a_ |
| `mspp_publishingstate_weblinkset` | _n/a_ | `mspp_publishingstateid` | _n/a_ |
| `mspp_publishingstate_webpage` | _n/a_ | `mspp_publishingstateid` | _n/a_ |
| `mspp_topublishingstate_statetransition` | _n/a_ | `mspp_tostate_publishingstateid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_accesscontrolrule_publishingstate` | [mspp_publishingstateid](mspp_publishingstateid.md) | _n/a_ | _n/a_ |

## Source

Generated from [mspp_publishingstate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/mspp_publishingstate.md) on 2026-05-06.