---
logical: "roletemplateprivileges"
display: "roletemplateprivileges"
entitySetName: "roletemplateprivilegescollection"
primaryId: "roletemplateprivilegeid"
tableType: "Standard"
ownership: "None"
---

# roletemplateprivileges

## Identity

| Property | Value |
| --- | --- |
| Logical name | `roletemplateprivileges` |
| Display name | roletemplateprivileges |
| Schema name | `RoleTemplatePrivileges` |
| Entity set (Web API) | `roletemplateprivilegescollection` |
| Primary id attribute | `roletemplateprivilegeid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/roletemplateprivilegescollection?$select=&$top=10
GET /api/data/v9.2/roletemplateprivilegescollection(<guid>)
POST /api/data/v9.2/roletemplateprivilegescollection
PATCH /api/data/v9.2/roletemplateprivilegescollection(<guid>)
DELETE /api/data/v9.2/roletemplateprivilegescollection(<guid>)
```

## Attributes

Writable: **5** · Read-only: **3**

### Writable

`IsBasic`, `IsDeep`, `IsGlobal`, `IsLocal`, `RoleTemplatePrivilegeId`

### Read-only

`PrivilegeId`, `RoleTemplateId`, `Upgrading`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `roletemplateprivileges_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [roletemplateprivileges.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/roletemplateprivileges.md) on 2026-05-06.