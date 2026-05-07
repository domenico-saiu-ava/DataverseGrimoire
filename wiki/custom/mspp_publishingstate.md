---
logical: "mspp_publishingstate"
display: "Stato pubblicazione"
entitySetName: "mspp_publishingstates"
primaryId: "mspp_publishingstateid"
primaryName: "mspp_name"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato pubblicazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_publishingstate` |
| Display name | Stato pubblicazione |
| Display (plural) | Stati pubblicazione |
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

`mspp_createdby`, `mspp_createdon`, `mspp_displayorder`, `mspp_isdefault`, `mspp_isvisible`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_name`, `mspp_publishingstateid`, `mspp_websiteid`, `statecode`, `statuscode`

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
| `mspp_frompublishingstate_statetransition` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_fromstate_publishingstateid` | `mspp_FromState_PublishingStateId` |
| `mspp_mspp_publishingstate_mspp_websitelanguage_PublishingState` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstate` | `mspp_PublishingState` |
| `mspp_publishingstate_webfile` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_publishingstate_weblink` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_publishingstate_weblinkset` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_publishingstate_webpage` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_publishingstateid` | `mspp_publishingstateid` |
| `mspp_topublishingstate_statetransition` | [mspp_publishingstate](mspp_publishingstate.md) | `mspp_tostate_publishingstateid` | `mspp_ToState_PublishingStateId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_accesscontrolrule_publishingstate` | [mspp_webpageaccesscontrolrule](mspp_webpageaccesscontrolrule.md) | _n/a_ | `mspp_accesscontrolrule_publishingstate` |

## Source

Generated from [mspp_publishingstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_publishingstate')) on 2026-05-07.