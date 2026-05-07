---
logical: "msdyn_oobaccountresearchresult"
display: "Risultato ricerca account OOB predefinito"
entitySetName: "msdyn_oobaccountresearchresults"
primaryId: "msdyn_oobaccountresearchresultid"
primaryName: "msdyn_oobaccountname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato ricerca account OOB predefinito

Risultati della ricerca predefinita per l'account associato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oobaccountresearchresult` |
| Display name | Risultato ricerca account OOB predefinito |
| Display (plural) | Risultati ricerca account OOB predefinita |
| Schema name | `msdyn_oobaccountresearchresult` |
| Entity set (Web API) | `msdyn_oobaccountresearchresults` |
| Primary id attribute | `msdyn_oobaccountresearchresultid` |
| Primary name attribute | `msdyn_oobaccountname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_oobaccountresearchresults?$select=msdyn_oobaccountname&$top=10
GET /api/data/v9.2/msdyn_oobaccountresearchresults(<guid>)
POST /api/data/v9.2/msdyn_oobaccountresearchresults
PATCH /api/data/v9.2/msdyn_oobaccountresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_oobaccountresearchresults(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_oobaccountdomainname`, `msdyn_oobaccountfinances`, `msdyn_oobaccountname`, `msdyn_oobaccountnews`, `msdyn_oobaccountoverview`, `msdyn_oobaccountresearchagentlastrun`, `msdyn_oobaccountresearchresultid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_oobaccountresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oobaccountresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oobaccountresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oobaccountresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_oobaccountresearchresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_oobaccountresearchresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_oobaccountresearchresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_oobaccountresearchresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_oobaccountresearchresult_SyncErrors` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_DuplicateMatchingRecord` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_DuplicateBaseRecord` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `baserecordid` | `baserecordid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_AsyncOperations` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_MailboxTrackingFolders` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_UserEntityInstanceDatas` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `objectid` | `objectid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_ProcessSession` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_BulkDeleteFailures` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_oobaccountresearchresult` |
| `msdyn_oobaccountresearchresult_PrincipalObjectAttributeAccesses` | [msdyn_oobaccountresearchresult](msdyn_oobaccountresearchresult.md) | `objectid` | `objectid_msdyn_oobaccountresearchresult` |


## Source

Generated from [msdyn_oobaccountresearchresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_oobaccountresearchresult')) on 2026-05-07.