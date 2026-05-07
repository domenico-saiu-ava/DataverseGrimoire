---
logical: "reconciliationentitystepinfo"
display: "ReconciliationEntityStepInfo"
entitySetName: "reconciliationentitystepinfos"
primaryId: "reconciliationentitystepinfoid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ReconciliationEntityStepInfo

Step level details of the data lake reconciliation process. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `reconciliationentitystepinfo` |
| Display name | ReconciliationEntityStepInfo |
| Display (plural) | ReconciliationEntityStepInfos |
| Schema name | `reconciliationentitystepinfo` |
| Entity set (Web API) | `reconciliationentitystepinfos` |
| Primary id attribute | `reconciliationentitystepinfoid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/reconciliationentitystepinfos?$select=name&$top=10
GET /api/data/v9.2/reconciliationentitystepinfos(<guid>)
POST /api/data/v9.2/reconciliationentitystepinfos
PATCH /api/data/v9.2/reconciliationentitystepinfos(<guid>)
DELETE /api/data/v9.2/reconciliationentitystepinfos(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`entitylogicalname`, `filename`, `formattedcriteria`, `hasmorerecords`, `importsequencenumber`, `inputcriteria`, `message`, `name`, `overriddencreatedon`, `ownerid`, `pagingcookie`, `reconciliationentityinfoid`, `reconciliationentitystepinfoid`, `reconciliationinfoid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_reconciliationentitystepinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_reconciliationentitystepinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_reconciliationentitystepinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_reconciliationentitystepinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_reconciliationentitystepinfo` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_reconciliationentitystepinfo` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_reconciliationentitystepinfo` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_reconciliationentitystepinfo` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `reconciliationentitystepinfo_SyncErrors` | [reconciliationentitystepinfo](reconciliationentitystepinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentitystepinfo` |
| `reconciliationentitystepinfo_AsyncOperations` | [reconciliationentitystepinfo](reconciliationentitystepinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentitystepinfo` |
| `reconciliationentitystepinfo_MailboxTrackingFolders` | [reconciliationentitystepinfo](reconciliationentitystepinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentitystepinfo` |
| `reconciliationentitystepinfo_UserEntityInstanceDatas` | [reconciliationentitystepinfo](reconciliationentitystepinfo.md) | `objectid` | `objectid_reconciliationentitystepinfo` |
| `reconciliationentitystepinfo_ProcessSession` | [reconciliationentitystepinfo](reconciliationentitystepinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentitystepinfo` |
| `reconciliationentitystepinfo_BulkDeleteFailures` | [reconciliationentitystepinfo](reconciliationentitystepinfo.md) | `regardingobjectid` | `regardingobjectid_reconciliationentitystepinfo` |
| `reconciliationentitystepinfo_PrincipalObjectAttributeAccesses` | [reconciliationentitystepinfo](reconciliationentitystepinfo.md) | `objectid` | `objectid_reconciliationentitystepinfo` |


## Source

Generated from [reconciliationentitystepinfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='reconciliationentitystepinfo')) on 2026-05-07.