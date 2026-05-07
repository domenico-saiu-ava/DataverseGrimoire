---
logical: "fieldpermission"
display: "Field Permission"
entitySetName: "fieldpermissions"
primaryId: "fieldpermissionid"
tableType: "Standard"
ownership: "None"
---

# Field Permission

Group of privileges used to categorize users to provide appropriate access to secured columns.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fieldpermission` |
| Display name | Field Permission |
| Display (plural) | Field Permissions |
| Schema name | `FieldPermission` |
| Entity set (Web API) | `fieldpermissions` |
| Primary id attribute | `fieldpermissionid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/fieldpermissions?$select=&$top=10
GET /api/data/v9.2/fieldpermissions(<guid>)
POST /api/data/v9.2/fieldpermissions
PATCH /api/data/v9.2/fieldpermissions(<guid>)
DELETE /api/data/v9.2/fieldpermissions(<guid>)
```

## Attributes

Writable: **8** · Read-only: **8**

### Writable

`AttributeLogicalName`, `CanCreate`, `CanRead`, `CanReadUnMasked`, `CanUpdate`, `EntityName`, `FieldPermissionId`, `FieldSecurityProfileId`

### Read-only

`ComponentState`, `FieldPermissionIdUnique`, `IsManaged`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_fieldpermission_fieldsecurityprofileid` | [fieldsecurityprofile](fieldsecurityprofile.md) | `fieldsecurityprofileid` | `fieldsecurityprofileid` |
| `solution_fieldpermission` | [solution](solution.md) | `solutionid` | `solution_fieldpermission` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FieldPermission_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [fieldpermission.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/fieldpermission.md) on 2026-05-06.