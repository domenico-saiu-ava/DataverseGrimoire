---
logical: "reconciliationentityinfo"
display: "ReconciliationEntityInfo"
entitySetName: "reconciliationentityinfos"
primaryId: "reconciliationentityinfoid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ReconciliationEntityInfo

Table level details of the data lake reconciliation process. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `reconciliationentityinfo` |
| Display name | ReconciliationEntityInfo |
| Display (plural) | ReconciliationEntityInfos |
| Schema name | `reconciliationentityinfo` |
| Entity set (Web API) | `reconciliationentityinfos` |
| Primary id attribute | `reconciliationentityinfoid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/reconciliationentityinfos?$select=name&$top=10
GET /api/data/v9.2/reconciliationentityinfos(<guid>)
POST /api/data/v9.2/reconciliationentityinfos
PATCH /api/data/v9.2/reconciliationentityinfos(<guid>)
DELETE /api/data/v9.2/reconciliationentityinfos(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`criteria`, `entitylogicalname`, `importsequencenumber`, `lastdeltaconvertedversion`, `lastsuccessfullreconciledversion`, `message`, `name`, `overriddencreatedon`, `ownerid`, `reconciliationentityinfoid`, `reconciliationinfoid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_reconciliationentityinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_reconciliationentityinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_reconciliationentityinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_reconciliationentityinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_reconciliationentityinfo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_reconciliationentityinfo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_reconciliationentityinfo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_reconciliationentityinfo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `reconciliationinfo_reconciliationentityinfo_ReconciliationInfoId` | [reconciliationinfo](reconciliationinfo.md) | `reconciliationinfoid` | `ReconciliationInfoId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `reconciliationentityinfo_SyncErrors` | [reconciliationentityinfo](reconciliationentityinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentityinfo` |
| `reconciliationentityinfo_AsyncOperations` | [reconciliationentityinfo](reconciliationentityinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentityinfo` |
| `reconciliationentityinfo_MailboxTrackingFolders` | [reconciliationentityinfo](reconciliationentityinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentityinfo` |
| `reconciliationentityinfo_UserEntityInstanceDatas` | [reconciliationentityinfo](reconciliationentityinfo.md) | `objectid` | `objectid_reconciliationentityinfo` |
| `reconciliationentityinfo_ProcessSession` | [reconciliationentityinfo](reconciliationentityinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentityinfo` |
| `reconciliationentityinfo_BulkDeleteFailures` | [reconciliationentityinfo](reconciliationentityinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentityinfo` |
| `reconciliationentityinfo_PrincipalObjectAttributeAccesses` | [reconciliationentityinfo](reconciliationentityinfo.md) | `objectid` | `objectid_reconciliationentityinfo` |


## Source

Generated from [reconciliationentityinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='reconciliationentityinfo')) on 2026-05-07.