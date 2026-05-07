---
logical: "applicationroles"
display: "applicationroles"
entitySetName: "applicationrolesset"
primaryId: "applicationrolesid"
tableType: "Standard"
ownership: "None"
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

Writable: **0** · Read-only: **10**

### Read-only

`applicationid`, `ApplicationRolesId`, `ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `roleid`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `application_role` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [applicationroles.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/applicationroles.md) on 2026-05-06.