---
logical: "appactionrule_webresource_scripts"
display: "appactionrule_webresource_scripts"
entitySetName: "appactionrule_webresource_scriptsset"
primaryId: "appactionrule_webresource_scriptsid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# appactionrule_webresource_scripts

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appactionrule_webresource_scripts` |
| Display name | appactionrule_webresource_scripts |
| Schema name | `appactionrule_webresource_scripts` |
| Entity set (Web API) | `appactionrule_webresource_scriptsset` |
| Primary id attribute | `appactionrule_webresource_scriptsid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/appactionrule_webresource_scriptsset?$select=&$top=10
GET /api/data/v9.2/appactionrule_webresource_scriptsset(<guid>)
POST /api/data/v9.2/appactionrule_webresource_scriptsset
PATCH /api/data/v9.2/appactionrule_webresource_scriptsset(<guid>)
DELETE /api/data/v9.2/appactionrule_webresource_scriptsset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`appactionrule_webresource_scriptsid`, `appactionruleid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`, `webresourceid`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appactionrule_webresource_scripts` | [appactionrule](appactionrule.md) | _n/a_ | `appactionrule_webresource_scripts` |

## Source

Generated from [appactionrule_webresource_scripts (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appactionrule_webresource_scripts')) on 2026-05-07.