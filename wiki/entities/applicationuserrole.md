---
logical: "applicationuserrole"
display: "applicationuserrole"
entitySetName: "applicationuserroleset"
primaryId: "applicationuserroleid"
tableType: "Standard"
ownership: "None"
---

# applicationuserrole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `applicationuserrole` |
| Display name | applicationuserrole |
| Schema name | `applicationuserrole` |
| Entity set (Web API) | `applicationuserroleset` |
| Primary id attribute | `applicationuserroleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/applicationuserroleset?$select=&$top=10
GET /api/data/v9.2/applicationuserroleset(<guid>)
POST /api/data/v9.2/applicationuserroleset
PATCH /api/data/v9.2/applicationuserroleset(<guid>)
DELETE /api/data/v9.2/applicationuserroleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`applicationuserid`, `applicationuserroleId`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `roleid`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuserrole` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [applicationuserrole.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/applicationuserrole.md) on 2026-05-06.