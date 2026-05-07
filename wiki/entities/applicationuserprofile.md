---
logical: "applicationuserprofile"
display: "applicationuserprofile"
entitySetName: "applicationuserprofileset"
primaryId: "applicationuserprofileid"
tableType: "Standard"
ownership: "None"
---

# applicationuserprofile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `applicationuserprofile` |
| Display name | applicationuserprofile |
| Schema name | `applicationuserprofile` |
| Entity set (Web API) | `applicationuserprofileset` |
| Primary id attribute | `applicationuserprofileid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/applicationuserprofileset?$select=&$top=10
GET /api/data/v9.2/applicationuserprofileset(<guid>)
POST /api/data/v9.2/applicationuserprofileset
PATCH /api/data/v9.2/applicationuserprofileset(<guid>)
DELETE /api/data/v9.2/applicationuserprofileset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **10**

### Read-only

`applicationuserid`, `applicationuserprofileId`, `ComponentIdUnique`, `ComponentState`, `fieldsecurityprofileid`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuserprofile` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [applicationuserprofile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/applicationuserprofile.md) on 2026-05-06.