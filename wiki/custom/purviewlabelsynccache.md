---
logical: "purviewlabelsynccache"
display: "Purview Label Sync Cache"
entitySetName: "purviewlabelsynccaches"
primaryId: "purviewlabelsynccacheid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Purview Label Sync Cache

Purview Label Sync Cache

## Identity

| Property | Value |
| --- | --- |
| Logical name | `purviewlabelsynccache` |
| Display name | Purview Label Sync Cache |
| Display (plural) | Purview Label Sync Caches |
| Schema name | `purviewlabelsynccache` |
| Entity set (Web API) | `purviewlabelsynccaches` |
| Primary id attribute | `purviewlabelsynccacheid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/purviewlabelsynccaches?$select=name&$top=10
GET /api/data/v9.2/purviewlabelsynccaches(<guid>)
POST /api/data/v9.2/purviewlabelsynccaches
PATCH /api/data/v9.2/purviewlabelsynccaches(<guid>)
DELETE /api/data/v9.2/purviewlabelsynccaches(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`continuationtoken`, `importsequencenumber`, `isdatamapsynctriggerpresent`, `labelsynctime`, `name`, `overriddencreatedon`, `purviewlabelsynccacheid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_purviewlabelsynccache_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_purviewlabelsynccache_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_purviewlabelsynccache_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_purviewlabelsynccache_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_purviewlabelsynccache` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `purviewlabelsynccache_SyncErrors` | [purviewlabelsynccache](purviewlabelsynccache.md) | `regardingobjectid` | `regardingobjectid_purviewlabelsynccache` |
| `purviewlabelsynccache_DuplicateMatchingRecord` | [purviewlabelsynccache](purviewlabelsynccache.md) | `duplicaterecordid` | `duplicaterecordid_purviewlabelsynccache` |
| `purviewlabelsynccache_DuplicateBaseRecord` | [purviewlabelsynccache](purviewlabelsynccache.md) | `baserecordid` | `baserecordid_purviewlabelsynccache` |
| `purviewlabelsynccache_AsyncOperations` | [purviewlabelsynccache](purviewlabelsynccache.md) | `regardingobjectid` | `regardingobjectid_purviewlabelsynccache` |
| `purviewlabelsynccache_MailboxTrackingFolders` | [purviewlabelsynccache](purviewlabelsynccache.md) | `regardingobjectid` | `regardingobjectid_purviewlabelsynccache` |
| `purviewlabelsynccache_UserEntityInstanceDatas` | [purviewlabelsynccache](purviewlabelsynccache.md) | `objectid` | `objectid_purviewlabelsynccache` |
| `purviewlabelsynccache_ProcessSession` | [purviewlabelsynccache](purviewlabelsynccache.md) | `regardingobjectid` | `regardingobjectid_purviewlabelsynccache` |
| `purviewlabelsynccache_BulkDeleteFailures` | [purviewlabelsynccache](purviewlabelsynccache.md) | `regardingobjectid` | `regardingobjectid_purviewlabelsynccache` |
| `purviewlabelsynccache_PrincipalObjectAttributeAccesses` | [purviewlabelsynccache](purviewlabelsynccache.md) | `objectid` | `objectid_purviewlabelsynccache` |


## Source

Generated from [purviewlabelsynccache (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='purviewlabelsynccache')) on 2026-05-07.