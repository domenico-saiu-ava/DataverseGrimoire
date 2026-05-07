---
logical: "bulkarchiveconfig"
display: "BulkArchiveConfig"
entitySetName: "bulkarchiveconfigs"
primaryId: "bulkarchiveconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# BulkArchiveConfig

This is Deprecated Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkarchiveconfig` |
| Display name | BulkArchiveConfig |
| Display (plural) | BulkArchiveConfig |
| Schema name | `BulkArchiveConfig` |
| Entity set (Web API) | `bulkarchiveconfigs` |
| Primary id attribute | `bulkarchiveconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/bulkarchiveconfigs?$select=name&$top=10
GET /api/data/v9.2/bulkarchiveconfigs(<guid>)
POST /api/data/v9.2/bulkarchiveconfigs
PATCH /api/data/v9.2/bulkarchiveconfigs(<guid>)
DELETE /api/data/v9.2/bulkarchiveconfigs(<guid>)
```

## Attributes

Writable: **19** · Read-only: **16**

### Writable

`asyncoperationid`, `bulkarchiveconfigid`, `criteria`, `entitylogicalname`, `importsequencenumber`, `iscustomizable`, `name`, `nextrun`, `overriddencreatedon`, `ownerid`, `recurrence`, `referenceconfigid`, `starttime`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `viewid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_bulkarchiveconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_bulkarchiveconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_bulkarchiveconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_bulkarchiveconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_bulkarchiveconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_bulkarchiveconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_bulkarchiveconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_bulkarchiveconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bulkarchiveconfig_SyncErrors` | [bulkarchiveconfig](bulkarchiveconfig.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveconfig` |
| `bulkarchiveconfig_DuplicateMatchingRecord` | [bulkarchiveconfig](bulkarchiveconfig.md) | `duplicaterecordid` | `duplicaterecordid_bulkarchiveconfig` |
| `bulkarchiveconfig_DuplicateBaseRecord` | [bulkarchiveconfig](bulkarchiveconfig.md) | `baserecordid` | `baserecordid_bulkarchiveconfig` |
| `bulkarchiveconfig_AsyncOperations` | [bulkarchiveconfig](bulkarchiveconfig.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveconfig` |
| `bulkarchiveconfig_MailboxTrackingFolders` | [bulkarchiveconfig](bulkarchiveconfig.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveconfig` |
| `bulkarchiveconfig_UserEntityInstanceDatas` | [bulkarchiveconfig](bulkarchiveconfig.md) | `objectid` | `objectid_bulkarchiveconfig` |
| `bulkarchiveconfig_ProcessSession` | [bulkarchiveconfig](bulkarchiveconfig.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveconfig` |
| `bulkarchiveconfig_BulkDeleteFailures` | [bulkarchiveconfig](bulkarchiveconfig.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveconfig` |
| `bulkarchiveconfig_PrincipalObjectAttributeAccesses` | [bulkarchiveconfig](bulkarchiveconfig.md) | `objectid` | `objectid_bulkarchiveconfig` |
| `bulkarchiveconfig_bulkarchiveoperation_BulkArchiveConfigId` | [bulkarchiveconfig](bulkarchiveconfig.md) | `bulkarchiveconfigid` | `BulkArchiveConfigId` |


## Source

Generated from [bulkarchiveconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bulkarchiveconfig')) on 2026-05-07.