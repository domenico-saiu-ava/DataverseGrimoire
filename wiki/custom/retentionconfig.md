---
logical: "retentionconfig"
display: "RetentionConfig"
entitySetName: "retentionconfigs"
primaryId: "retentionconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RetentionConfig

Holds retention policies for a table.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionconfig` |
| Display name | RetentionConfig |
| Display (plural) | RetentionConfig |
| Schema name | `retentionconfig` |
| Entity set (Web API) | `retentionconfigs` |
| Primary id attribute | `retentionconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionconfigs?$select=name&$top=10
GET /api/data/v9.2/retentionconfigs(<guid>)
POST /api/data/v9.2/retentionconfigs
PATCH /api/data/v9.2/retentionconfigs(<guid>)
DELETE /api/data/v9.2/retentionconfigs(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`asyncoperationid`, `criteria`, `entitylogicalname`, `importsequencenumber`, `iscustomizable`, `jobcriteriakey`, `name`, `nextrun`, `overriddencreatedon`, `ownerid`, `recurrence`, `referenceconfigid`, `retentionconfigid`, `starttime`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `uniquename`, `utcconversiontimezonecode`, `viewid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retentionconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_retentionconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_retentionconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_retentionconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_retentionconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionconfig_SyncErrors` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionconfig_DuplicateMatchingRecord` | [retentionconfig](retentionconfig.md) | `duplicaterecordid` | `duplicaterecordid_retentionconfig` |
| `retentionconfig_DuplicateBaseRecord` | [retentionconfig](retentionconfig.md) | `baserecordid` | `baserecordid_retentionconfig` |
| `retentionconfig_AsyncOperations` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionconfig_MailboxTrackingFolders` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionconfig_UserEntityInstanceDatas` | [retentionconfig](retentionconfig.md) | `objectid` | `objectid_retentionconfig` |
| `retentionconfig_ProcessSession` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionconfig_BulkDeleteFailures` | [retentionconfig](retentionconfig.md) | `regardingobjectid` | `regardingobjectid_retentionconfig` |
| `retentionconfig_PrincipalObjectAttributeAccesses` | [retentionconfig](retentionconfig.md) | `objectid` | `objectid_retentionconfig` |
| `retentionconfig_retentionoperatio` | [retentionconfig](retentionconfig.md) | `retentionconfigid` | `retentionconfigid` |


## Source

Generated from [retentionconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retentionconfig')) on 2026-05-07.