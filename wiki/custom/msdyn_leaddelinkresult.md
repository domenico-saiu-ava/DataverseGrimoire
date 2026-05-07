---
logical: "msdyn_leaddelinkresult"
display: "Risultato scollegamento lead"
entitySetName: "msdyn_leaddelinkresults"
primaryId: "msdyn_leaddelinkresultid"
primaryName: "msdyn_leadid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato scollegamento lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leaddelinkresult` |
| Display name | Risultato scollegamento lead |
| Display (plural) | Risultato scollegamento lead |
| Schema name | `msdyn_leaddelinkresult` |
| Entity set (Web API) | `msdyn_leaddelinkresults` |
| Primary id attribute | `msdyn_leaddelinkresultid` |
| Primary name attribute | `msdyn_leadid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leaddelinkresults?$select=msdyn_leadid&$top=10
GET /api/data/v9.2/msdyn_leaddelinkresults(<guid>)
POST /api/data/v9.2/msdyn_leaddelinkresults
PATCH /api/data/v9.2/msdyn_leaddelinkresults(<guid>)
DELETE /api/data/v9.2/msdyn_leaddelinkresults(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accountid`, `msdyn_contactid`, `msdyn_isaccountdelinked`, `msdyn_iscontactdelinked`, `msdyn_leaddelinkresultid`, `msdyn_leadid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leaddelinkresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leaddelinkresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leaddelinkresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leaddelinkresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_leaddelinkresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_leaddelinkresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_leaddelinkresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_leaddelinkresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leaddelinkresult_SyncErrors` | [msdyn_leaddelinkresult](msdyn_leaddelinkresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leaddelinkresult` |
| `msdyn_leaddelinkresult_AsyncOperations` | [msdyn_leaddelinkresult](msdyn_leaddelinkresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leaddelinkresult` |
| `msdyn_leaddelinkresult_MailboxTrackingFolders` | [msdyn_leaddelinkresult](msdyn_leaddelinkresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leaddelinkresult` |
| `msdyn_leaddelinkresult_UserEntityInstanceDatas` | [msdyn_leaddelinkresult](msdyn_leaddelinkresult.md) | `objectid` | `objectid_msdyn_leaddelinkresult` |
| `msdyn_leaddelinkresult_ProcessSession` | [msdyn_leaddelinkresult](msdyn_leaddelinkresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leaddelinkresult` |
| `msdyn_leaddelinkresult_BulkDeleteFailures` | [msdyn_leaddelinkresult](msdyn_leaddelinkresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_leaddelinkresult` |
| `msdyn_leaddelinkresult_PrincipalObjectAttributeAccesses` | [msdyn_leaddelinkresult](msdyn_leaddelinkresult.md) | `objectid` | `objectid_msdyn_leaddelinkresult` |


## Source

Generated from [msdyn_leaddelinkresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leaddelinkresult')) on 2026-05-07.