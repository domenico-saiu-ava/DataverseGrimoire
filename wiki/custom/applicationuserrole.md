---
logical: "applicationuserrole"
display: "applicationuserrole"
entitySetName: "applicationuserroleset"
primaryId: "applicationuserroleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`applicationuserid`, `applicationuserroleid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `roleid`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuserrole` | [applicationuser](applicationuser.md) | _n/a_ | `applicationuserrole` |

## Source

Generated from [applicationuserrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='applicationuserrole')) on 2026-05-07.