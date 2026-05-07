---
logical: "connectionrole"
display: "Connection Role"
entitySetName: "connectionroles"
primaryId: "connectionroleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Connection Role

Role describing a relationship between a two records.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `connectionrole` |
| Display name | Connection Role |
| Display (plural) | Connection Roles |
| Schema name | `ConnectionRole` |
| Entity set (Web API) | `connectionroles` |
| Primary id attribute | `connectionroleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/connectionroles?$select=name&$top=10
GET /api/data/v9.2/connectionroles(<guid>)
POST /api/data/v9.2/connectionroles
PATCH /api/data/v9.2/connectionroles(<guid>)
DELETE /api/data/v9.2/connectionroles(<guid>)
```

## Attributes

Writable: **9** · Read-only: **14**

### Writable

`Category`, `ConnectionRoleId`, `Description`, `ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `Name`, `StateCode`, `StatusCode`

### Read-only

`ComponentState`, `ConnectionRoleIdUnique`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_connection_role` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_connectionrolebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_connectionrolebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_connection_role` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_connection_roles` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Connection_Role_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `connection_role_connections1` | _n/a_ | `record1roleid` | _n/a_ |
| `connection_role_connections2` | _n/a_ | `record2roleid` | _n/a_ |
| `ConnectionRole_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ConnectionRole_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `connectionroleassociation_association` | _n/a_ | _n/a_ | _n/a_ |

## Source

Generated from [connectionrole.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/connectionrole.md) on 2026-05-06.