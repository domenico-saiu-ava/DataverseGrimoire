---
logical: "msdyn_engagereadinessagentresult"
display: "Risultato agente di engagement e idoneità V2"
entitySetName: "msdyn_engagereadinessagentresults"
primaryId: "msdyn_engagereadinessagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato agente di engagement e idoneità V2

Questa tabella contiene i record dei risultati dell'agente di engagement e idoneità.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_engagereadinessagentresult` |
| Display name | Risultato agente di engagement e idoneità V2 |
| Display (plural) | Risultati agente di engagement e idoneità V2 |
| Schema name | `msdyn_engagereadinessagentresult` |
| Entity set (Web API) | `msdyn_engagereadinessagentresults` |
| Primary id attribute | `msdyn_engagereadinessagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_engagereadinessagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_engagereadinessagentresults(<guid>)
POST /api/data/v9.2/msdyn_engagereadinessagentresults
PATCH /api/data/v9.2/msdyn_engagereadinessagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_engagereadinessagentresults(<guid>)
```

## Attributes

Writable: **22** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_agentrespondedquerycount`, `msdyn_bantdata`, `msdyn_customeraskedquerycount`, `msdyn_engagereadinessagentresultid`, `msdyn_executiondetails`, `msdyn_followupdetails`, `msdyn_lastengageagentresponse`, `msdyn_lastprocessedactivityid`, `msdyn_lastprocessedactivitytype`, `msdyn_name`, `msdyn_purchaseintentdata`, `msdyn_regardingid`, `msdyn_runafterdate`, `msdyn_salesagentrun`, `msdyn_standardsinterviewed`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_lastprocessedtimestamp`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_engagereadinessagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_engagereadinessagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_engagereadinessagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_engagereadinessagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_engagereadinessagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_engagereadinessagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_engagereadinessagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_engagereadinessagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_engagereadinessagentresult_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid_lead` |
| `msdyn_salesagentrun_msdyn_engagereadinessagentresult` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_engagereadinessagentresult_SyncErrors` | [msdyn_engagereadinessagentresult](msdyn_engagereadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engagereadinessagentresult` |
| `msdyn_engagereadinessagentresult_AsyncOperations` | [msdyn_engagereadinessagentresult](msdyn_engagereadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engagereadinessagentresult` |
| `msdyn_engagereadinessagentresult_MailboxTrackingFolders` | [msdyn_engagereadinessagentresult](msdyn_engagereadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engagereadinessagentresult` |
| `msdyn_engagereadinessagentresult_UserEntityInstanceDatas` | [msdyn_engagereadinessagentresult](msdyn_engagereadinessagentresult.md) | `objectid` | `objectid_msdyn_engagereadinessagentresult` |
| `msdyn_engagereadinessagentresult_ProcessSession` | [msdyn_engagereadinessagentresult](msdyn_engagereadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engagereadinessagentresult` |
| `msdyn_engagereadinessagentresult_BulkDeleteFailures` | [msdyn_engagereadinessagentresult](msdyn_engagereadinessagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_engagereadinessagentresult` |
| `msdyn_engagereadinessagentresult_PrincipalObjectAttributeAccesses` | [msdyn_engagereadinessagentresult](msdyn_engagereadinessagentresult.md) | `objectid` | `objectid_msdyn_engagereadinessagentresult` |


## Source

Generated from [msdyn_engagereadinessagentresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_engagereadinessagentresult')) on 2026-05-07.