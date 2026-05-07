---
logical: "role"
display: "Security Role"
entitySetName: "roles"
primaryId: "roleid"
primaryName: "name"
tableType: "Standard"
ownership: "BusinessOwned"
synonyms_it: ["ruolo", "ruolo sicurezza", "ruoli"]
synonyms_en: ["role", "security role"]
---

# Security Role

Grouping of security privileges. Users are assigned roles that authorize their access to the Microsoft CRM system.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `role` |
| Display name | Security Role |
| Display (plural) | Security Roles |
| Schema name | `Role` |
| Entity set (Web API) | `roles` |
| Primary id attribute | `roleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/roles?$select=name&$top=10
GET /api/data/v9.2/roles(<guid>)
POST /api/data/v9.2/roles
PATCH /api/data/v9.2/roles(<guid>)
DELETE /api/data/v9.2/roles(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`ApplicationId`, `AppliesTo`, `BusinessUnitId`, `CanBeDeleted`, `Description`, `ImportSequenceNumber`, `IsAutoAssigned`, `IsCustomizable`, `IsInherited`, `IsSystemGenerated`, `Name`, `OverriddenCreatedOn`, `RoleId`, `SummaryofCoreTablePermissions`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OrganizationIdName`, `OverwriteTime`, `ParentRoleId`, `ParentRootRoleId`, `RoleIdUnique`, `RoleTemplateId`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_roles` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `lk_role_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_role_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_rolebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_rolebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_roles` | [organization](organization.md) | `organizationid` | `organizationid_organization` |
| `role_parent_role` | [role](role.md) | `parentroleid` | `parentroleid` |
| `role_parent_root_role` | [role](role.md) | `parentrootroleid` | `parentrootroleid` |
| `role_template_roles` | [roletemplate](roletemplate.md) | `roletemplateid` | `roletemplateid` |
| `solution_role` | [solution](solution.md) | `solutionid` | `solution_role` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Role_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Role_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `role_parent_role` | _n/a_ | `parentroleid` | _n/a_ |
| `role_parent_root_role` | _n/a_ | `parentrootroleid` | _n/a_ |
| `Role_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `application_role` | [roleid](roleid.md) | _n/a_ | _n/a_ |
| `applicationuserrole` | [roleid](roleid.md) | _n/a_ | _n/a_ |
| `appmoduleroles_association` | [roleid](roleid.md) | _n/a_ | _n/a_ |
| `roleprivileges_association` | [roleid](roleid.md) | _n/a_ | _n/a_ |
| `systemuserroles_association` | [roleid](roleid.md) | _n/a_ | _n/a_ |
| `teamroles_association` | [roleid](roleid.md) | _n/a_ | _n/a_ |

## Source

Generated from [role.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/role.md) on 2026-05-06.