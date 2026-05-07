---
logical: "msdyn_customoobresearchresult"
display: "Risultato ricerca OOB personalizzato"
entitySetName: "msdyn_customoobresearchresults"
primaryId: "msdyn_customoobresearchresultid"
primaryName: "msdyn_customoobresearchname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato ricerca OOB personalizzato

Risultati della ricerca OOB personalizzata per l'account associato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customoobresearchresult` |
| Display name | Risultato ricerca OOB personalizzato |
| Display (plural) | Risultati ricerca OOB personalizzata |
| Schema name | `msdyn_customoobresearchresult` |
| Entity set (Web API) | `msdyn_customoobresearchresults` |
| Primary id attribute | `msdyn_customoobresearchresultid` |
| Primary name attribute | `msdyn_customoobresearchname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customoobresearchresults?$select=msdyn_customoobresearchname&$top=10
GET /api/data/v9.2/msdyn_customoobresearchresults(<guid>)
POST /api/data/v9.2/msdyn_customoobresearchresults
PATCH /api/data/v9.2/msdyn_customoobresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_customoobresearchresults(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_customoobresearchagentlastrun`, `msdyn_customoobresearchdomainname`, `msdyn_customoobresearchfinances`, `msdyn_customoobresearchname`, `msdyn_customoobresearchnews`, `msdyn_customoobresearchoverview`, `msdyn_customoobresearchresultid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customoobresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customoobresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customoobresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customoobresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customoobresearchresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customoobresearchresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customoobresearchresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customoobresearchresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customoobresearchresult_SyncErrors` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_DuplicateMatchingRecord` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_DuplicateBaseRecord` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `baserecordid` | `baserecordid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_AsyncOperations` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_MailboxTrackingFolders` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_UserEntityInstanceDatas` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `objectid` | `objectid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_ProcessSession` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_BulkDeleteFailures` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_customoobresearchresult` |
| `msdyn_customoobresearchresult_PrincipalObjectAttributeAccesses` | [msdyn_customoobresearchresult](msdyn_customoobresearchresult.md) | `objectid` | `objectid_msdyn_customoobresearchresult` |


## Source

Generated from [msdyn_customoobresearchresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customoobresearchresult')) on 2026-05-07.