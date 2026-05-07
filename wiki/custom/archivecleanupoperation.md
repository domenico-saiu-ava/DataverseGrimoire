---
logical: "archivecleanupoperation"
display: "ArchiveCleanupOperation"
entitySetName: "archivecleanupoperations"
primaryId: "archivecleanupoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ArchiveCleanupOperation

This is Deprecated Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `archivecleanupoperation` |
| Display name | ArchiveCleanupOperation |
| Display (plural) | ArchiveCleanupOperation |
| Schema name | `ArchiveCleanupOperation` |
| Entity set (Web API) | `archivecleanupoperations` |
| Primary id attribute | `archivecleanupoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/archivecleanupoperations?$select=name&$top=10
GET /api/data/v9.2/archivecleanupoperations(<guid>)
POST /api/data/v9.2/archivecleanupoperations
PATCH /api/data/v9.2/archivecleanupoperations(<guid>)
DELETE /api/data/v9.2/archivecleanupoperations(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`archivecleanupoperationid`, `criteria`, `endtime`, `entitylogicalname`, `failedcount`, `fromversion`, `importsequencenumber`, `message`, `name`, `operationname`, `overriddencreatedon`, `ownerid`, `recordcount`, `starttime`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `toversion`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_archivecleanupoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_archivecleanupoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_archivecleanupoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_archivecleanupoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_archivecleanupoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_archivecleanupoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_archivecleanupoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_archivecleanupoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `archivecleanupoperation_SyncErrors` | [archivecleanupoperation](archivecleanupoperation.md) | `regardingobjectid` | `regardingobjectid_archivecleanupoperation` |
| `archivecleanupoperation_DuplicateMatchingRecord` | [archivecleanupoperation](archivecleanupoperation.md) | `duplicaterecordid` | `duplicaterecordid_archivecleanupoperation` |
| `archivecleanupoperation_DuplicateBaseRecord` | [archivecleanupoperation](archivecleanupoperation.md) | `baserecordid` | `baserecordid_archivecleanupoperation` |
| `archivecleanupoperation_AsyncOperations` | [archivecleanupoperation](archivecleanupoperation.md) | `regardingobjectid` | `regardingobjectid_archivecleanupoperation` |
| `archivecleanupoperation_MailboxTrackingFolders` | [archivecleanupoperation](archivecleanupoperation.md) | `regardingobjectid` | `regardingobjectid_archivecleanupoperation` |
| `archivecleanupoperation_UserEntityInstanceDatas` | [archivecleanupoperation](archivecleanupoperation.md) | `objectid` | `objectid_archivecleanupoperation` |
| `archivecleanupoperation_ProcessSession` | [archivecleanupoperation](archivecleanupoperation.md) | `regardingobjectid` | `regardingobjectid_archivecleanupoperation` |
| `archivecleanupoperation_BulkDeleteFailures` | [archivecleanupoperation](archivecleanupoperation.md) | `regardingobjectid` | `regardingobjectid_archivecleanupoperation` |
| `archivecleanupoperation_PrincipalObjectAttributeAccesses` | [archivecleanupoperation](archivecleanupoperation.md) | `objectid` | `objectid_archivecleanupoperation` |


## Source

Generated from [archivecleanupoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='archivecleanupoperation')) on 2026-05-07.