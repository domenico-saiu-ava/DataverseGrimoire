---
logical: "mspp_columnpermissionprofile"
display: "Profilo autorizzazioni colonna"
entitySetName: "mspp_columnpermissionprofiles"
primaryId: "mspp_columnpermissionprofileid"
primaryName: "mspp_profilename"
tableType: "Virtual"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Profilo autorizzazioni colonna

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_columnpermissionprofile` |
| Display name | Profilo autorizzazioni colonna |
| Display (plural) | Profili autorizzazioni colonna |
| Schema name | `mspp_columnpermissionprofile` |
| Entity set (Web API) | `mspp_columnpermissionprofiles` |
| Primary id attribute | `mspp_columnpermissionprofileid` |
| Primary name attribute | `mspp_profilename` |
| Table type | Virtual |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/mspp_columnpermissionprofiles?$select=mspp_profilename&$top=10
GET /api/data/v9.2/mspp_columnpermissionprofiles(<guid>)
POST /api/data/v9.2/mspp_columnpermissionprofiles
PATCH /api/data/v9.2/mspp_columnpermissionprofiles(<guid>)
DELETE /api/data/v9.2/mspp_columnpermissionprofiles(<guid>)
```

## Attributes

Writable: **11** · Read-only: **0**

### Writable

`mspp_allcolumnpermissions`, `mspp_columnpermissionprofileid`, `mspp_createdby`, `mspp_createdon`, `mspp_modifiedby`, `mspp_modifiedon`, `mspp_profilename`, `mspp_tablename`, `mspp_websiteid`, `statecode`, `statuscode`

## Relationships

### Many-to-One (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermissionprofile_website` | [mspp_website](mspp_website.md) | `mspp_websiteid` | `mspp_websiteid` |
| `mspp_systemuser_mspp_columnpermissionprofile_createdby` | [systemuser](systemuser.md) | `mspp_createdby` | `mspp_createdby` |
| `mspp_systemuser_mspp_columnpermissionprofile_modifiedby` | [systemuser](systemuser.md) | `mspp_modifiedby` | `mspp_modifiedby` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermission_columnpermissionprofile` | [mspp_columnpermissionprofile](mspp_columnpermissionprofile.md) | `mspp_columnpermissionprofileid` | `mspp_columnpermissionprofileid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermissionprofile_webrole` | [mspp_webrole](mspp_webrole.md) | _n/a_ | `mspp_columnpermissionprofile_webrole` |

## Source

Generated from [mspp_columnpermissionprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_columnpermissionprofile')) on 2026-05-07.