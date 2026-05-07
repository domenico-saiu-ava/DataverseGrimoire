---
logical: "retentionoperation"
display: "RetentionOperation"
entitySetName: "retentionoperations"
primaryId: "retentionoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RetentionOperation

Retention policy execution details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionoperation` |
| Display name | RetentionOperation |
| Display (plural) | RetentionOperation |
| Schema name | `retentionoperation` |
| Entity set (Web API) | `retentionoperations` |
| Primary id attribute | `retentionoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionoperations?$select=name&$top=10
GET /api/data/v9.2/retentionoperations(<guid>)
POST /api/data/v9.2/retentionoperations
PATCH /api/data/v9.2/retentionoperations(<guid>)
DELETE /api/data/v9.2/retentionoperations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`additionaldetails`, `asyncoperationid`, `criteria`, `endtime`, `failedcount`, `importsequencenumber`, `lastmarkedversionnumber`, `name`, `overriddencreatedon`, `ownerid`, `pagingcookie`, `retentionconfigid`, `retentioncount`, `retentionoperationid`, `rootentitylogicalname`, `starttime`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retentionoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_retentionoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_retentionoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_retentionoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_retentionoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `retentionconfig_retentionoperatio` | [retentionconfig](retentionconfig.md) | `retentionconfigid` | `retentionconfigid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionoperation_SyncErrors` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperation_DuplicateMatchingRecord` | [retentionoperation](retentionoperation.md) | `duplicaterecordid` | `duplicaterecordid_retentionoperation` |
| `retentionoperation_DuplicateBaseRecord` | [retentionoperation](retentionoperation.md) | `baserecordid` | `baserecordid_retentionoperation` |
| `retentionoperation_AsyncOperations` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperation_MailboxTrackingFolders` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperation_UserEntityInstanceDatas` | [retentionoperation](retentionoperation.md) | `objectid` | `objectid_retentionoperation` |
| `retentionoperation_ProcessSession` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperation_BulkDeleteFailures` | [retentionoperation](retentionoperation.md) | `regardingobjectid` | `regardingobjectid_retentionoperation` |
| `retentionoperation_PrincipalObjectAttributeAccesses` | [retentionoperation](retentionoperation.md) | `objectid` | `objectid_retentionoperation` |
| `retentionoperation_retentionopera` | [retentionoperation](retentionoperation.md) | `retentionoperationid` | `RetentionOperationId` |


## Source

Generated from [retentionoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retentionoperation')) on 2026-05-07.