---
logical: "mspp_columnpermissionprofile_webrole"
display: "mspp_columnpermissionprofile_webrole"
entitySetName: "mspp_columnpermissionprofile_webroleset"
primaryId: "mspp_columnpermissionprofile_webroleid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# mspp_columnpermissionprofile_webrole

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspp_columnpermissionprofile_webrole` |
| Display name | mspp_columnpermissionprofile_webrole |
| Schema name | `mspp_columnpermissionprofile_webrole` |
| Entity set (Web API) | `mspp_columnpermissionprofile_webroleset` |
| Primary id attribute | `mspp_columnpermissionprofile_webroleid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/mspp_columnpermissionprofile_webroleset?$select=&$top=10
GET /api/data/v9.2/mspp_columnpermissionprofile_webroleset(<guid>)
POST /api/data/v9.2/mspp_columnpermissionprofile_webroleset
PATCH /api/data/v9.2/mspp_columnpermissionprofile_webroleset(<guid>)
DELETE /api/data/v9.2/mspp_columnpermissionprofile_webroleset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`mspp_columnpermissionprofile_webroleid`, `mspp_columnpermissionprofileid`, `mspp_webroleid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_columnpermissionprofile_webrole` | [mspp_webrole](mspp_webrole.md) | _n/a_ | `mspp_columnpermissionprofile_webrole` |

## Source

Generated from [mspp_columnpermissionprofile_webrole (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspp_columnpermissionprofile_webrole')) on 2026-05-07.