---
logical: "reconciliationinfo"
display: "ReconciliationInfo"
entitySetName: "reconciliationinfos"
primaryId: "reconciliationinfoid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ReconciliationInfo

Information about data lake reconciliation operation. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `reconciliationinfo` |
| Display name | ReconciliationInfo |
| Display (plural) | ReconciliationInfos |
| Schema name | `reconciliationinfo` |
| Entity set (Web API) | `reconciliationinfos` |
| Primary id attribute | `reconciliationinfoid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/reconciliationinfos?$select=name&$top=10
GET /api/data/v9.2/reconciliationinfos(<guid>)
POST /api/data/v9.2/reconciliationinfos
PATCH /api/data/v9.2/reconciliationinfos(<guid>)
DELETE /api/data/v9.2/reconciliationinfos(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`completedon`, `importsequencenumber`, `message`, `name`, `overriddencreatedon`, `ownerid`, `profileid`, `reconciliationinfoid`, `statecode`, `statuscode`, `submittedon`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_reconciliationinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_reconciliationinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_reconciliationinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_reconciliationinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_reconciliationinfo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_reconciliationinfo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_reconciliationinfo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_reconciliationinfo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `reconciliationinfo_SyncErrors` | [reconciliationinfo](reconciliationinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationinfo` |
| `reconciliationinfo_DuplicateMatchingRecord` | [reconciliationinfo](reconciliationinfo.md) | `duplicaterecordid` | `duplicaterecordid_reconciliationinfo` |
| `reconciliationinfo_DuplicateBaseRecord` | [reconciliationinfo](reconciliationinfo.md) | `baserecordid` | `baserecordid_reconciliationinfo` |
| `reconciliationinfo_AsyncOperations` | [reconciliationinfo](reconciliationinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationinfo` |
| `reconciliationinfo_MailboxTrackingFolders` | [reconciliationinfo](reconciliationinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationinfo` |
| `reconciliationinfo_UserEntityInstanceDatas` | [reconciliationinfo](reconciliationinfo.md) | `objectid` | `objectid_reconciliationinfo` |
| `reconciliationinfo_ProcessSession` | [reconciliationinfo](reconciliationinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationinfo` |
| `reconciliationinfo_BulkDeleteFailures` | [reconciliationinfo](reconciliationinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationinfo` |
| `reconciliationinfo_PrincipalObjectAttributeAccesses` | [reconciliationinfo](reconciliationinfo.md) | `objectid` | `objectid_reconciliationinfo` |
| `reconciliationinfo_reconciliationentityinfo_ReconciliationInfoId` | [reconciliationinfo](reconciliationinfo.md) | `reconciliationinfoid` | `ReconciliationInfoId` |


## Source

Generated from [reconciliationinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='reconciliationinfo')) on 2026-05-07.