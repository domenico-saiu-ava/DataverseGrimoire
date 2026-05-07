---
logical: "appaction_appactionrule_classicrules"
display: "appaction_appactionrule_classicrules"
entitySetName: "appaction_appactionrule_classicrulesset"
primaryId: "appaction_appactionrule_classicrulesid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# appaction_appactionrule_classicrules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appaction_appactionrule_classicrules` |
| Display name | appaction_appactionrule_classicrules |
| Schema name | `appaction_appactionrule_classicrules` |
| Entity set (Web API) | `appaction_appactionrule_classicrulesset` |
| Primary id attribute | `appaction_appactionrule_classicrulesid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/appaction_appactionrule_classicrulesset?$select=&$top=10
GET /api/data/v9.2/appaction_appactionrule_classicrulesset(<guid>)
POST /api/data/v9.2/appaction_appactionrule_classicrulesset
PATCH /api/data/v9.2/appaction_appactionrule_classicrulesset(<guid>)
DELETE /api/data/v9.2/appaction_appactionrule_classicrulesset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`appaction_appactionrule_classicrulesid`, `appactionid`, `appactionruleid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appactionrule_classicrules` | [appaction](appaction.md) | _n/a_ | `appaction_appactionrule_classicrules` |

## Source

Generated from [appaction_appactionrule_classicrules (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appaction_appactionrule_classicrules')) on 2026-05-07.