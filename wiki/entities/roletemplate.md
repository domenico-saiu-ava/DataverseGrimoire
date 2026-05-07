---
logical: "roletemplate"
display: "Role Template"
entitySetName: "roletemplates"
primaryId: "roletemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Role Template

Template for a role. Defines initial attributes that will be used when creating a new role.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `roletemplate` |
| Display name | Role Template |
| Display (plural) | Role Templates |
| Schema name | `RoleTemplate` |
| Entity set (Web API) | `roletemplates` |
| Primary id attribute | `roletemplateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/roletemplates?$select=name&$top=10
GET /api/data/v9.2/roletemplates(<guid>)
POST /api/data/v9.2/roletemplates
PATCH /api/data/v9.2/roletemplates(<guid>)
DELETE /api/data/v9.2/roletemplates(<guid>)
```

## Attributes

Writable: **2** · Read-only: **0**

### Writable

`Name`, `RoleTemplateId`

## Relationships


### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `role_template_roles` | _n/a_ | `roletemplateid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `roletemplateprivileges_association` | [roletemplateid](roletemplateid.md) | _n/a_ | _n/a_ |

## Source

Generated from [roletemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/roletemplate.md) on 2026-05-06.