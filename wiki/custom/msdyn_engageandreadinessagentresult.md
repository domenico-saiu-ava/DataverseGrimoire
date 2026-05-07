---
logical: "msdyn_engageandreadinessagentresult"
display: "Risultato agente engagement e idoneità"
entitySetName: "msdyn_engageandreadinessagentresults"
primaryId: "msdyn_engageandreadinessagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato agente engagement e idoneità

Questa tabella contiene i record dei risultati dell'agente di engagement e idoneità.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_engageandreadinessagentresult` |
| Display name | Risultato agente engagement e idoneità |
| Display (plural) | Risultati agente engagement e idoneità |
| Schema name | `msdyn_engageandreadinessagentresult` |
| Entity set (Web API) | `msdyn_engageandreadinessagentresults` |
| Primary id attribute | `msdyn_engageandreadinessagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_engageandreadinessagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_engageandreadinessagentresults(<guid>)
POST /api/data/v9.2/msdyn_engageandreadinessagentresults
PATCH /api/data/v9.2/msdyn_engageandreadinessagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_engageandreadinessagentresults(<guid>)
```

## Attributes

Writable: **17** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_bantdata`, `msdyn_engageandreadinessagentresultid`, `msdyn_executiondetails`, `msdyn_lastengageagentresponse`, `msdyn_lastprocessedactivityid`, `msdyn_lastprocessedactivitytype`, `msdyn_name`, `msdyn_purchaseintentdata`, `msdyn_regardingid`, `msdyn_salesagentrun`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_lastprocessedtimestamp`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_engageandreadinessagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_engageandreadinessagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_engageandreadinessagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_engageandreadinessagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_engageandreadinessagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_engageandreadinessagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_engageandreadinessagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_engageandreadinessagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_engageandreadinessagentresult_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid_lead` |
| `msdyn_salesagentrun_msdyn_engageandreadinessagentresult` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_engageandreadinessagentresult_SyncErrors` | [msdyn_engageandreadinessagentresult](msdyn_engageandreadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engageandreadinessagentresult` |
| `msdyn_engageandreadinessagentresult_AsyncOperations` | [msdyn_engageandreadinessagentresult](msdyn_engageandreadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engageandreadinessagentresult` |
| `msdyn_engageandreadinessagentresult_MailboxTrackingFolders` | [msdyn_engageandreadinessagentresult](msdyn_engageandreadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engageandreadinessagentresult` |
| `msdyn_engageandreadinessagentresult_UserEntityInstanceDatas` | [msdyn_engageandreadinessagentresult](msdyn_engageandreadinessagentresult.md) | `objectid` | `objectid_msdyn_engageandreadinessagentresult` |
| `msdyn_engageandreadinessagentresult_ProcessSession` | [msdyn_engageandreadinessagentresult](msdyn_engageandreadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engageandreadinessagentresult` |
| `msdyn_engageandreadinessagentresult_BulkDeleteFailures` | [msdyn_engageandreadinessagentresult](msdyn_engageandreadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engageandreadinessagentresult` |
| `msdyn_engageandreadinessagentresult_PrincipalObjectAttributeAccesses` | [msdyn_engageandreadinessagentresult](msdyn_engageandreadinessagentresult.md) | `objectid` | `objectid_msdyn_engageandreadinessagentresult` |


## Source

Generated from [msdyn_engageandreadinessagentresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_engageandreadinessagentresult')) on 2026-05-07.