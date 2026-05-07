---
logical: "retentioncleanupoperation"
display: "RetentionCleanupOperation"
entitySetName: "retentioncleanupoperations"
primaryId: "retentioncleanupoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RetentionCleanupOperation

Holds data of cleanup operations such as reconcile and purge.  For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentioncleanupoperation` |
| Display name | RetentionCleanupOperation |
| Display (plural) | RetentionCleanupOperation |
| Schema name | `retentioncleanupoperation` |
| Entity set (Web API) | `retentioncleanupoperations` |
| Primary id attribute | `retentioncleanupoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentioncleanupoperations?$select=name&$top=10
GET /api/data/v9.2/retentioncleanupoperations(<guid>)
POST /api/data/v9.2/retentioncleanupoperations
PATCH /api/data/v9.2/retentioncleanupoperations(<guid>)
DELETE /api/data/v9.2/retentioncleanupoperations(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`criteria`, `endtime`, `entitylogicalname`, `failedcount`, `fromversion`, `importsequencenumber`, `message`, `name`, `operationname`, `overriddencreatedon`, `ownerid`, `recordcount`, `retentioncleanupoperationid`, `starttime`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `toversion`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retentioncleanupoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentioncleanupoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentioncleanupoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentioncleanupoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_retentioncleanupoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_retentioncleanupoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_retentioncleanupoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_retentioncleanupoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentioncleanupoperation_SyncErrors` | [retentioncleanupoperation](retentioncleanupoperation.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupoperation` |
| `retentioncleanupoperation_DuplicateMatchingRecord` | [retentioncleanupoperation](retentioncleanupoperation.md) | `duplicaterecordid` | `duplicaterecordid_retentioncleanupoperation` |
| `retentioncleanupoperation_DuplicateBaseRecord` | [retentioncleanupoperation](retentioncleanupoperation.md) | `baserecordid` | `baserecordid_retentioncleanupoperation` |
| `retentioncleanupoperation_AsyncOperations` | [retentioncleanupoperation](retentioncleanupoperation.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupoperation` |
| `retentioncleanupoperation_MailboxTrackingFolders` | [retentioncleanupoperation](retentioncleanupoperation.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupoperation` |
| `retentioncleanupoperation_UserEntityInstanceDatas` | [retentioncleanupoperation](retentioncleanupoperation.md) | `objectid` | `objectid_retentioncleanupoperation` |
| `retentioncleanupoperation_ProcessSession` | [retentioncleanupoperation](retentioncleanupoperation.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupoperation` |
| `retentioncleanupoperation_BulkDeleteFailures` | [retentioncleanupoperation](retentioncleanupoperation.md) | `regardingobjectid` | `regardingobjectid_retentioncleanupoperation` |
| `retentioncleanupoperation_PrincipalObjectAttributeAccesses` | [retentioncleanupoperation](retentioncleanupoperation.md) | `objectid` | `objectid_retentioncleanupoperation` |


## Source

Generated from [retentioncleanupoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retentioncleanupoperation')) on 2026-05-07.