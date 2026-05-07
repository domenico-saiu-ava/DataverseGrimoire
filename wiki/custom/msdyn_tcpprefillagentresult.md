---
logical: "msdyn_tcpprefillagentresult"
display: "Risultato agente precompilazione profilo cliente di destinazione"
entitySetName: "msdyn_tcpprefillagentresults"
primaryId: "msdyn_tcpprefillagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato agente precompilazione profilo cliente di destinazione

Archivia i dati dei trigger e dei risultati generati dall'agente profilo cliente di destinazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_tcpprefillagentresult` |
| Display name | Risultato agente precompilazione profilo cliente di destinazione |
| Display (plural) | Risultati agente precompilazione profilo cliente di destinazione |
| Schema name | `msdyn_tcpprefillagentresult` |
| Entity set (Web API) | `msdyn_tcpprefillagentresults` |
| Primary id attribute | `msdyn_tcpprefillagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_tcpprefillagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_tcpprefillagentresults(<guid>)
POST /api/data/v9.2/msdyn_tcpprefillagentresults
PATCH /api/data/v9.2/msdyn_tcpprefillagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_tcpprefillagentresults(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentinput`, `msdyn_agentlastrun`, `msdyn_name`, `msdyn_progress`, `msdyn_suggestedcriteria`, `msdyn_tcpprefillagentresultid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_tcpprefillagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_tcpprefillagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_tcpprefillagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_tcpprefillagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_tcpprefillagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_tcpprefillagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_tcpprefillagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_tcpprefillagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_tcpprefillagentresult_SyncErrors` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_DuplicateMatchingRecord` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_DuplicateBaseRecord` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `baserecordid` | `baserecordid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_AsyncOperations` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_MailboxTrackingFolders` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_UserEntityInstanceDatas` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `objectid` | `objectid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_ProcessSession` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_BulkDeleteFailures` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_tcpprefillagentresult` |
| `msdyn_tcpprefillagentresult_PrincipalObjectAttributeAccesses` | [msdyn_tcpprefillagentresult](msdyn_tcpprefillagentresult.md) | `objectid` | `objectid_msdyn_tcpprefillagentresult` |


## Source

Generated from [msdyn_tcpprefillagentresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_tcpprefillagentresult')) on 2026-05-07.