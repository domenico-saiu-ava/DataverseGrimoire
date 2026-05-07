---
logical: "aitags_msdyncrm_keyword_msdyncrm_file"
display: "aitags_msdyncrm_keyword_msdyncrm_file"
entitySetName: "aitags_msdyncrm_keyword_msdyncrm_fileset"
primaryId: "aitags_msdyncrm_keyword_msdyncrm_fileid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# aitags_msdyncrm_keyword_msdyncrm_file

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aitags_msdyncrm_keyword_msdyncrm_file` |
| Display name | aitags_msdyncrm_keyword_msdyncrm_file |
| Schema name | `AITags_msdyncrm_keyword_msdyncrm_file` |
| Entity set (Web API) | `aitags_msdyncrm_keyword_msdyncrm_fileset` |
| Primary id attribute | `aitags_msdyncrm_keyword_msdyncrm_fileid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/aitags_msdyncrm_keyword_msdyncrm_fileset?$select=&$top=10
GET /api/data/v9.2/aitags_msdyncrm_keyword_msdyncrm_fileset(<guid>)
POST /api/data/v9.2/aitags_msdyncrm_keyword_msdyncrm_fileset
PATCH /api/data/v9.2/aitags_msdyncrm_keyword_msdyncrm_fileset(<guid>)
DELETE /api/data/v9.2/aitags_msdyncrm_keyword_msdyncrm_fileset(<guid>)
```

## Attributes

Writable: **0** · Read-only: **4**

### Read-only

`aitags_msdyncrm_keyword_msdyncrm_fileid`, `msdyncrm_fileid`, `msdyncrm_keywordid`, `versionnumber`

## Relationships



### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AITags_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_file](msdyncrm_file.md) | _n/a_ | `AITags_msdyncrm_keyword_msdyncrm_file` |

## Source

Generated from [aitags_msdyncrm_keyword_msdyncrm_file (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aitags_msdyncrm_keyword_msdyncrm_file')) on 2026-05-07.