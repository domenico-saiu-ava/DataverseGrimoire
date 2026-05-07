---
logical: "bulkarchiveoperation"
display: "BulkArchiveOperation"
entitySetName: "bulkarchiveoperations"
primaryId: "bulkarchiveoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# BulkArchiveOperation

This is Deprecated Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkarchiveoperation` |
| Display name | BulkArchiveOperation |
| Display (plural) | BulkArchiveOperations |
| Schema name | `BulkArchiveOperation` |
| Entity set (Web API) | `bulkarchiveoperations` |
| Primary id attribute | `bulkarchiveoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bulkarchiveoperations?$select=name&$top=10
GET /api/data/v9.2/bulkarchiveoperations(<guid>)
POST /api/data/v9.2/bulkarchiveoperations
PATCH /api/data/v9.2/bulkarchiveoperations(<guid>)
DELETE /api/data/v9.2/bulkarchiveoperations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`additionaldetails`, `archivedcount`, `asyncoperationid`, `bulkarchiveconfigid`, `bulkarchiveoperationid`, `criteria`, `endtime`, `failedcount`, `importsequencenumber`, `lastmarkedversionnumber`, `name`, `overriddencreatedon`, `ownerid`, `pagingcookie`, `rootentitylogicalname`, `starttime`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_bulkarchiveoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_bulkarchiveoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_bulkarchiveoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_bulkarchiveoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_bulkarchiveoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_bulkarchiveoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_bulkarchiveoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_bulkarchiveoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `bulkarchiveconfig_bulkarchiveoperation_BulkArchiveConfigId` | [bulkarchiveconfig](bulkarchiveconfig.md) | `bulkarchiveconfigid` | `BulkArchiveConfigId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bulkarchiveoperation_SyncErrors` | [bulkarchiveoperation](bulkarchiveoperation.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperation` |
| `bulkarchiveoperation_DuplicateMatchingRecord` | [bulkarchiveoperation](bulkarchiveoperation.md) | `duplicaterecordid` | `duplicaterecordid_bulkarchiveoperation` |
| `bulkarchiveoperation_DuplicateBaseRecord` | [bulkarchiveoperation](bulkarchiveoperation.md) | `baserecordid` | `baserecordid_bulkarchiveoperation` |
| `bulkarchiveoperation_AsyncOperations` | [bulkarchiveoperation](bulkarchiveoperation.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperation` |
| `bulkarchiveoperation_MailboxTrackingFolders` | [bulkarchiveoperation](bulkarchiveoperation.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperation` |
| `bulkarchiveoperation_UserEntityInstanceDatas` | [bulkarchiveoperation](bulkarchiveoperation.md) | `objectid` | `objectid_bulkarchiveoperation` |
| `bulkarchiveoperation_ProcessSession` | [bulkarchiveoperation](bulkarchiveoperation.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperation` |
| `bulkarchiveoperation_BulkDeleteFailures` | [bulkarchiveoperation](bulkarchiveoperation.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperation` |
| `bulkarchiveoperation_PrincipalObjectAttributeAccesses` | [bulkarchiveoperation](bulkarchiveoperation.md) | `objectid` | `objectid_bulkarchiveoperation` |
| `bulkarchiveoperation_bulkarchiveoperationdetail_BulkArchiveOperationId` | [bulkarchiveoperation](bulkarchiveoperation.md) | `bulkarchiveoperationid` | `BulkArchiveOperationId` |


## Source

Generated from [bulkarchiveoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bulkarchiveoperation')) on 2026-05-07.