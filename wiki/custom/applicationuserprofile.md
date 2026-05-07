---
logical: "applicationuserprofile"
display: "applicationuserprofile"
entitySetName: "applicationuserprofileset"
primaryId: "applicationuserprofileid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`applicationuserid`, `applicationuserprofileid`, `componentidunique`, `componentstate`, `fieldsecurityprofileid`, `ismanaged`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuserprofile` | [applicationuser](applicationuser.md) | _n/a_ | `applicationuserprofile` |

## Source

Generated from [applicationuserprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='applicationuserprofile')) on 2026-05-07.