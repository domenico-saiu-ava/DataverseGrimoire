---
logical: "appactionrule_webresource_scripts"
display: "appactionrule_webresource_scripts"
entitySetName: "appactionrule_webresource_scriptsset"
primaryId: "appactionrule_webresource_scriptsid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`appactionrule_webresource_scriptsId`, `appactionruleid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`, `webresourceid`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appactionrule_webresource_scripts` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [appactionrule_webresource_scripts.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appactionrule_webresource_scripts.md) on 2026-05-06.