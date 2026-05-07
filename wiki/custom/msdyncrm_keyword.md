---
logical: "msdyncrm_keyword"
display: "Tag"
entitySetName: "msdyncrm_keywords"
primaryId: "msdyncrm_keywordid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_keyword` |
| Display name | Tag |
| Display (plural) | Tag |
| Schema name | `msdyncrm_keyword` |
| Entity set (Web API) | `msdyncrm_keywords` |
| Primary id attribute | `msdyncrm_keywordid` |
| Primary name attribute | `msdyncrm_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyncrm_keywords?$select=msdyncrm_name&$top=10
GET /api/data/v9.2/msdyncrm_keywords(<guid>)
POST /api/data/v9.2/msdyncrm_keywords
PATCH /api/data/v9.2/msdyncrm_keywords(<guid>)
DELETE /api/data/v9.2/msdyncrm_keywords(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyncrm_keywordid`, `msdyncrm_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyncrm_keyword_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_keyword_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_keyword_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_keyword_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyncrm_keyword` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyncrm_keyword` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyncrm_keyword` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyncrm_keyword` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_keyword_SyncErrors` | [msdyncrm_keyword](msdyncrm_keyword.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_keyword` |
| `msdyncrm_keyword_AsyncOperations` | [msdyncrm_keyword](msdyncrm_keyword.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_keyword` |
| `msdyncrm_keyword_MailboxTrackingFolders` | [msdyncrm_keyword](msdyncrm_keyword.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_keyword` |
| `msdyncrm_keyword_UserEntityInstanceDatas` | [msdyncrm_keyword](msdyncrm_keyword.md) | `objectid` | `objectid_msdyncrm_keyword` |
| `msdyncrm_keyword_ProcessSession` | [msdyncrm_keyword](msdyncrm_keyword.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_keyword` |
| `msdyncrm_keyword_BulkDeleteFailures` | [msdyncrm_keyword](msdyncrm_keyword.md) | `regardingobjectid` | `regardingobjectid_msdyncrm_keyword` |
| `msdyncrm_keyword_PrincipalObjectAttributeAccesses` | [msdyncrm_keyword](msdyncrm_keyword.md) | `objectid` | `objectid_msdyncrm_keyword` |
| `msdyncrm_keyword_DuplicateMatchingRecord` | [msdyncrm_keyword](msdyncrm_keyword.md) | `duplicaterecordid` | `duplicaterecordid_msdyncrm_keyword` |
| `msdyncrm_keyword_DuplicateBaseRecord` | [msdyncrm_keyword](msdyncrm_keyword.md) | `baserecordid` | `baserecordid_msdyncrm_keyword` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_file](msdyncrm_file.md) | _n/a_ | `msdyncrm_msdyncrm_keyword_msdyncrm_file` |
| `AITags_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_file](msdyncrm_file.md) | _n/a_ | `AITags_msdyncrm_keyword_msdyncrm_file` |

## Source

Generated from [msdyncrm_keyword (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyncrm_keyword')) on 2026-05-07.