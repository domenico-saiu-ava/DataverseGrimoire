---
logical: "fieldsecurityprofile"
display: "Field Security Profile"
entitySetName: "fieldsecurityprofiles"
primaryId: "fieldsecurityprofileid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Field Security Profile

Profile which defines access level for secured attributes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `fieldsecurityprofile` |
| Display name | Field Security Profile |
| Display (plural) | Field Security Profiles |
| Schema name | `FieldSecurityProfile` |
| Entity set (Web API) | `fieldsecurityprofiles` |
| Primary id attribute | `fieldsecurityprofileid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/fieldsecurityprofiles?$select=name&$top=10
GET /api/data/v9.2/fieldsecurityprofiles(<guid>)
POST /api/data/v9.2/fieldsecurityprofiles
PATCH /api/data/v9.2/fieldsecurityprofiles(<guid>)
DELETE /api/data/v9.2/fieldsecurityprofiles(<guid>)
```

## Attributes

Writable: **3** · Read-only: **14**

### Writable

`Description`, `FieldSecurityProfileId`, `Name`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FieldSecurityProfileIdUnique`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_fieldsecurityprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_fieldsecurityprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_fieldsecurityprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_fieldsecurityprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_fieldsecurityprofile_organizationid` | [organization](organization.md) | `organizationid` | `organizationid` |
| `solution_fieldsecurityprofile` | [solution](solution.md) | `solutionid` | `solution_fieldsecurityprofile` |

### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FieldSecurityProfile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `lk_fieldpermission_fieldsecurityprofileid` | _n/a_ | `fieldsecurityprofileid` | _n/a_ |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuserprofile` | [fieldsecurityprofileid](fieldsecurityprofileid.md) | _n/a_ | _n/a_ |
| `systemuserprofiles_association` | [fieldsecurityprofileid](fieldsecurityprofileid.md) | _n/a_ | _n/a_ |
| `teamprofiles_association` | [fieldsecurityprofileid](fieldsecurityprofileid.md) | _n/a_ | _n/a_ |

## Source

Generated from [fieldsecurityprofile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/fieldsecurityprofile.md) on 2026-05-06.