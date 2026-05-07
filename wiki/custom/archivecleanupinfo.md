---
logical: "archivecleanupinfo"
display: "ArchiveCleanupInfo"
entitySetName: "ArchiveCleanupInfos"
primaryId: "archivecleanupinfoid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ArchiveCleanupInfo

This is Deprecated Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `archivecleanupinfo` |
| Display name | ArchiveCleanupInfo |
| Display (plural) | ArchiveCleanupInfo |
| Schema name | `ArchiveCleanupInfo` |
| Entity set (Web API) | `ArchiveCleanupInfos` |
| Primary id attribute | `archivecleanupinfoid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/ArchiveCleanupInfos?$select=name&$top=10
GET /api/data/v9.2/ArchiveCleanupInfos(<guid>)
POST /api/data/v9.2/ArchiveCleanupInfos
PATCH /api/data/v9.2/ArchiveCleanupInfos(<guid>)
DELETE /api/data/v9.2/ArchiveCleanupInfos(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`additionaldetails`, `archivecleanupinfoid`, `entitylogicalname`, `importsequencenumber`, `lastdeletionversion`, `lastreconciliationversion`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_archivecleanupinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_archivecleanupinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_archivecleanupinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_archivecleanupinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_archivecleanupinfo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_archivecleanupinfo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_archivecleanupinfo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_archivecleanupinfo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `archivecleanupinfo_SyncErrors` | [archivecleanupinfo](archivecleanupinfo.md) | `regardingobjectid` | `regardingobjectid_archivecleanupinfo` |
| `archivecleanupinfo_DuplicateMatchingRecord` | [archivecleanupinfo](archivecleanupinfo.md) | `duplicaterecordid` | `duplicaterecordid_archivecleanupinfo` |
| `archivecleanupinfo_DuplicateBaseRecord` | [archivecleanupinfo](archivecleanupinfo.md) | `baserecordid` | `baserecordid_archivecleanupinfo` |
| `archivecleanupinfo_AsyncOperations` | [archivecleanupinfo](archivecleanupinfo.md) | `regardingobjectid` | `regardingobjectid_archivecleanupinfo` |
| `archivecleanupinfo_MailboxTrackingFolders` | [archivecleanupinfo](archivecleanupinfo.md) | `regardingobjectid` | `regardingobjectid_archivecleanupinfo` |
| `archivecleanupinfo_UserEntityInstanceDatas` | [archivecleanupinfo](archivecleanupinfo.md) | `objectid` | `objectid_archivecleanupinfo` |
| `archivecleanupinfo_ProcessSession` | [archivecleanupinfo](archivecleanupinfo.md) | `regardingobjectid` | `regardingobjectid_archivecleanupinfo` |
| `archivecleanupinfo_BulkDeleteFailures` | [archivecleanupinfo](archivecleanupinfo.md) | `regardingobjectid` | `regardingobjectid_archivecleanupinfo` |
| `archivecleanupinfo_PrincipalObjectAttributeAccesses` | [archivecleanupinfo](archivecleanupinfo.md) | `objectid` | `objectid_archivecleanupinfo` |


## Source

Generated from [archivecleanupinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='archivecleanupinfo')) on 2026-05-07.