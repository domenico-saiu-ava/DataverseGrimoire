---
logical: "appaction_appactionrule_classicrules"
display: "appaction_appactionrule_classicrules"
entitySetName: "appaction_appactionrule_classicrulesset"
primaryId: "appaction_appactionrule_classicrulesid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`appaction_appactionrule_classicrulesId`, `appactionid`, `appactionruleid`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appactionrule_classicrules` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [appaction_appactionrule_classicrules.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appaction_appactionrule_classicrules.md) on 2026-05-06.