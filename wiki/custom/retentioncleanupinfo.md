---
logical: "retentioncleanupinfo"
display: "RetentionCleanupInfo"
entitySetName: "retentioncleanupinfos"
primaryId: "retentioncleanupinfoid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RetentionCleanupInfo

Holds watermark information about retention cleanup operations. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentioncleanupinfo` |
| Display name | RetentionCleanupInfo |
| Display (plural) | RetentionCleanupInfo |
| Schema name | `retentioncleanupinfo` |
| Entity set (Web API) | `retentioncleanupinfos` |
| Primary id attribute | `retentioncleanupinfoid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentioncleanupinfos?$select=name&$top=10
GET /api/data/v9.2/retentioncleanupinfos(<guid>)
POST /api/data/v9.2/retentioncleanupinfos
PATCH /api/data/v9.2/retentioncleanupinfos(<guid>)
DELETE /api/data/v9.2/retentioncleanupinfos(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`additionaldetails`, `entitylogicalname`, `importsequencenumber`, `lastdeletionversion`, `lastreconciliationversion`, `name`, `overriddencreatedon`, `ownerid`, `retentioncleanupinfoid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retentioncleanupinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentioncleanupinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentioncleanupinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentioncleanupinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_retentioncleanupinfo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_retentioncleanupinfo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_retentioncleanupinfo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_retentioncleanupinfo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentioncleanupinfo_SyncErrors` | [retentioncleanupinfo](retentioncleanupinfo.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupinfo` |
| `retentioncleanupinfo_DuplicateMatchingRecord` | [retentioncleanupinfo](retentioncleanupinfo.md) | `duplicaterecordid` | `duplicaterecordid_retentioncleanupinfo` |
| `retentioncleanupinfo_DuplicateBaseRecord` | [retentioncleanupinfo](retentioncleanupinfo.md) | `baserecordid` | `baserecordid_retentioncleanupinfo` |
| `retentioncleanupinfo_AsyncOperations` | [retentioncleanupinfo](retentioncleanupinfo.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupinfo` |
| `retentioncleanupinfo_MailboxTrackingFolders` | [retentioncleanupinfo](retentioncleanupinfo.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupinfo` |
| `retentioncleanupinfo_UserEntityInstanceDatas` | [retentioncleanupinfo](retentioncleanupinfo.md) | `objectid` | `objectid_retentioncleanupinfo` |
| `retentioncleanupinfo_ProcessSession` | [retentioncleanupinfo](retentioncleanupinfo.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupinfo` |
| `retentioncleanupinfo_BulkDeleteFailures` | [retentioncleanupinfo](retentioncleanupinfo.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupinfo` |
| `retentioncleanupinfo_PrincipalObjectAttributeAccesses` | [retentioncleanupinfo](retentioncleanupinfo.md) | `objectid` | `objectid_retentioncleanupinfo` |


## Source

Generated from [retentioncleanupinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retentioncleanupinfo')) on 2026-05-07.