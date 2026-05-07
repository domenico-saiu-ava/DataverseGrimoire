---
logical: "msdyn_dcaengageagentresult"
display: "Risultato agente di engagement di Agente chiusura vendite"
entitySetName: "msdyn_dcaengageagentresults"
primaryId: "msdyn_dcaengageagentresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Risultato agente di engagement di Agente chiusura vendite

In questa tabella viene visualizzato l'esito delle interazioni gestite dall'agente di engagement nell'ambito del processo di Agente di chiusura vendite.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dcaengageagentresult` |
| Display name | Risultato agente di engagement di Agente chiusura vendite |
| Display (plural) | Risultati agente di engagement di Agente chiusura vendite |
| Schema name | `msdyn_dcaengageagentresult` |
| Entity set (Web API) | `msdyn_dcaengageagentresults` |
| Primary id attribute | `msdyn_dcaengageagentresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dcaengageagentresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dcaengageagentresults(<guid>)
POST /api/data/v9.2/msdyn_dcaengageagentresults
PATCH /api/data/v9.2/msdyn_dcaengageagentresults(<guid>)
DELETE /api/data/v9.2/msdyn_dcaengageagentresults(<guid>)
```

## Attributes

Writable: **20** · Read-only: **11**

### Writable

`additionaldata`, `importsequencenumber`, `msdyn_dcaengageagentresultid`, `msdyn_engageagentresponsehistory`, `msdyn_executiondetails`, `msdyn_followupdetails`, `msdyn_lastengageagentresponse`, `msdyn_lastprocessedactivityid`, `msdyn_lastprocessedactivitytype`, `msdyn_name`, `msdyn_regarding`, `msdyn_runafterdate`, `msdyn_salesagentrun`, `overriddencreatedon`, `ownerid`, `prevstatuscode`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_lastprocessedtimestamp`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dcaengageagentresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dcaengageagentresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dcaengageagentresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dcaengageagentresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dcaengageagentresult` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dcaengageagentresult` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dcaengageagentresult` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dcaengageagentresult` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_dcaengageagentresult_regarding_account` | [account](account.md) | `msdyn_regarding` | `msdyn_regarding_account` |
| `msdyn_dcaengageagentresult_regarding_contact` | [contact](contact.md) | `msdyn_regarding` | `msdyn_regarding_contact` |
| `msdyn_dcaengageagentresult_regarding_lead` | [lead](lead.md) | `msdyn_regarding` | `msdyn_regarding_lead` |
| `msdyn_dcaengageagentresult_salesagentrun_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `msdyn_dcaengageagentresult_regarding_opportunity` | [opportunity](opportunity.md) | `msdyn_regarding` | `msdyn_regarding_opportunity` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dcaengageagentresult_SyncErrors` | [msdyn_dcaengageagentresult](msdyn_dcaengageagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_dcaengageagentresult` |
| `msdyn_dcaengageagentresult_AsyncOperations` | [msdyn_dcaengageagentresult](msdyn_dcaengageagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_dcaengageagentresult` |
| `msdyn_dcaengageagentresult_MailboxTrackingFolders` | [msdyn_dcaengageagentresult](msdyn_dcaengageagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_dcaengageagentresult` |
| `msdyn_dcaengageagentresult_UserEntityInstanceDatas` | [msdyn_dcaengageagentresult](msdyn_dcaengageagentresult.md) | `objectid` | `objectid_msdyn_dcaengageagentresult` |
| `msdyn_dcaengageagentresult_ProcessSession` | [msdyn_dcaengageagentresult](msdyn_dcaengageagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_dcaengageagentresult` |
| `msdyn_dcaengageagentresult_BulkDeleteFailures` | [msdyn_dcaengageagentresult](msdyn_dcaengageagentresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_dcaengageagentresult` |
| `msdyn_dcaengageagentresult_PrincipalObjectAttributeAccesses` | [msdyn_dcaengageagentresult](msdyn_dcaengageagentresult.md) | `objectid` | `objectid_msdyn_dcaengageagentresult` |


## Source

Generated from [msdyn_dcaengageagentresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dcaengageagentresult')) on 2026-05-07.