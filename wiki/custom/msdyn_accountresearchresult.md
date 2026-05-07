---
logical: "msdyn_accountresearchresult"
display: "Risultato della ricerca account"
entitySetName: "msdyn_accountresearchresults"
primaryId: "msdyn_accountresearchresultid"
primaryName: "msdyn_accountname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato della ricerca account

Risultati della ricerca per l'account associato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_accountresearchresult` |
| Display name | Risultato della ricerca account |
| Display (plural) | Risultato della ricerca account |
| Schema name | `msdyn_accountresearchresult` |
| Entity set (Web API) | `msdyn_accountresearchresults` |
| Primary id attribute | `msdyn_accountresearchresultid` |
| Primary name attribute | `msdyn_accountname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_accountresearchresults?$select=msdyn_accountname&$top=10
GET /api/data/v9.2/msdyn_accountresearchresults(<guid>)
POST /api/data/v9.2/msdyn_accountresearchresults
PATCH /api/data/v9.2/msdyn_accountresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_accountresearchresults(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accountdomainname`, `msdyn_accountfinances`, `msdyn_accountname`, `msdyn_accountnews`, `msdyn_accountoverview`, `msdyn_accountresearchagentlastrun`, `msdyn_accountresearchresultid`, `msdyn_customresearchconfigid`, `msdyn_customresearchresults`, `msdyn_salesagentprofileid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_accountresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_accountresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_accountresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_accountresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_accountresearchresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_accountresearchresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_accountresearchresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_accountresearchresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_accountresearchresult_SyncErrors` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_DuplicateMatchingRecord` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_DuplicateBaseRecord` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `baserecordid` | `baserecordid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_AsyncOperations` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_MailboxTrackingFolders` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_UserEntityInstanceDatas` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `objectid` | `objectid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_ProcessSession` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_BulkDeleteFailures` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_accountresearchresult` |
| `msdyn_accountresearchresult_PrincipalObjectAttributeAccesses` | [msdyn_accountresearchresult](msdyn_accountresearchresult.md) | `objectid` | `objectid_msdyn_accountresearchresult` |


## Source

Generated from [msdyn_accountresearchresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_accountresearchresult')) on 2026-05-07.