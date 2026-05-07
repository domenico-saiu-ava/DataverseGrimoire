---
logical: "msdyncrm_msdyncrm_keyword_msdyncrm_file"
display: "msdyncrm_msdyncrm_keyword_msdyncrm_file"
entitySetName: "msdyncrm_msdyncrm_keyword_msdyncrm_fileset"
primaryId: "msdyncrm_msdyncrm_keyword_msdyncrm_fileid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyncrm_msdyncrm_keyword_msdyncrm_file

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_msdyncrm_keyword_msdyncrm_file` |
| Display name | msdyncrm_msdyncrm_keyword_msdyncrm_file |
| Schema name | `msdyncrm_msdyncrm_keyword_msdyncrm_file` |
| Entity set (Web API) | `msdyncrm_msdyncrm_keyword_msdyncrm_fileset` |
| Primary id attribute | `msdyncrm_msdyncrm_keyword_msdyncrm_fileid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_msdyncrm_keyword_msdyncrm_fileset?$select=&$top=10
GET /api/data/v9.2/msdyncrm_msdyncrm_keyword_msdyncrm_fileset(<guid>)
POST /api/data/v9.2/msdyncrm_msdyncrm_keyword_msdyncrm_fileset
PATCH /api/data/v9.2/msdyncrm_msdyncrm_keyword_msdyncrm_fileset(<guid>)
DELETE /api/data/v9.2/msdyncrm_msdyncrm_keyword_msdyncrm_fileset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`msdyncrm_fileid`, `msdyncrm_keywordid`, `msdyncrm_msdyncrm_keyword_msdyncrm_fileid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_file](msdyncrm_file.md) | _n/a_ | `msdyncrm_msdyncrm_keyword_msdyncrm_file` |

## Source

Generated from [msdyncrm_msdyncrm_keyword_msdyncrm_file (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_msdyncrm_keyword_msdyncrm_file')) on 2026-05-07.