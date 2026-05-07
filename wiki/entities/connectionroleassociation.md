---
logical: "connectionroleassociation"
display: "connectionroleassociation"
entitySetName: "connectionroleassociations"
primaryId: "connectionroleassociationid"
tableType: "Standard"
ownership: "None"
---

# connectionroleassociation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connectionroleassociation` |
| Display name | connectionroleassociation |
| Schema name | `ConnectionRoleAssociation` |
| Entity set (Web API) | `connectionroleassociations` |
| Primary id attribute | `connectionroleassociationid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/connectionroleassociations?$select=&$top=10
GET /api/data/v9.2/connectionroleassociations(<guid>)
POST /api/data/v9.2/connectionroleassociations
PATCH /api/data/v9.2/connectionroleassociations(<guid>)
DELETE /api/data/v9.2/connectionroleassociations(<guid>)
```

## Attributes

Writable: **4** · Read-only: **7**

### Writable

`AssociatedConnectionRoleId`, `ConnectionRoleAssociationId`, `ConnectionRoleId`, `IsCustomizable`

### Read-only

`ComponentIdUnique`, `ComponentState`, `IsManaged`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `connectionroleassociation_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [connectionroleassociation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/connectionroleassociation.md) on 2026-05-06.