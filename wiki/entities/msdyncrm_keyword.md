---
logical: "msdyncrm_keyword"
display: "Tag"
entitySetName: "msdyncrm_keywords"
primaryId: "msdyncrm_keywordid"
primaryName: "msdyncrm_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyncrm_keyword` |
| Display name | Tag |
| Display (plural) | Tags |
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

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyncrm_keywordId`, `msdyncrm_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyncrm_keyword` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyncrm_keyword_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyncrm_keyword_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyncrm_keyword_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyncrm_keyword_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyncrm_keyword` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyncrm_keyword` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyncrm_keyword` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyncrm_keyword_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_keyword_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_keyword_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyncrm_keyword_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyncrm_keyword_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_keyword_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyncrm_keyword_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyncrm_keyword_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AITags_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_keywordid](msdyncrm_keywordid.md) | _n/a_ | _n/a_ |
| `msdyncrm_msdyncrm_keyword_msdyncrm_file` | [msdyncrm_keywordid](msdyncrm_keywordid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyncrm_keyword.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyncrm_keyword.md) on 2026-05-06.