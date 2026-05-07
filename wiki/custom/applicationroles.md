---
logical: "applicationroles"
display: "applicationroles"
entitySetName: "applicationrolesset"
primaryId: "applicationrolesid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# applicationroles

## Identity

| Property | Value |
| --- | --- |
| Logical name | `applicationroles` |
| Display name | applicationroles |
| Schema name | `ApplicationRoles` |
| Entity set (Web API) | `applicationrolesset` |
| Primary id attribute | `applicationrolesid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/applicationrolesset?$select=&$top=10
GET /api/data/v9.2/applicationrolesset(<guid>)
POST /api/data/v9.2/applicationrolesset
PATCH /api/data/v9.2/applicationrolesset(<guid>)
DELETE /api/data/v9.2/applicationrolesset(<guid>)
```

## Attributes

Writable: **1** · Read-only: **10**

### Writable

`iscustomizable`

### Read-only

`applicationid`, `applicationrolesid`, `componentidunique`, `componentstate`, `ismanaged`, `overwritetime`, `roleid`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `application_role` | [application](application.md) | _n/a_ | `application_role` |

## Source

Generated from [applicationroles (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='applicationroles')) on 2026-05-07.