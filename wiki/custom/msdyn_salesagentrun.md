---
logical: "msdyn_salesagentrun"
display: "Esecuzione agente di vendita"
entitySetName: "msdyn_salesagentruns"
primaryId: "msdyn_salesagentrunid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Esecuzione agente di vendita

Questa tabella contiene i record delle esecuzioni dell'Agente di vendita.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentrun` |
| Display name | Esecuzione agente di vendita |
| Display (plural) | Esecuzioni Agente di vendita |
| Schema name | `msdyn_salesagentrun` |
| Entity set (Web API) | `msdyn_salesagentruns` |
| Primary id attribute | `msdyn_salesagentrunid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentruns?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagentruns(<guid>)
POST /api/data/v9.2/msdyn_salesagentruns
PATCH /api/data/v9.2/msdyn_salesagentruns(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentruns(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentoutputentityid`, `msdyn_agentoutputentityname`, `msdyn_agenttype`, `msdyn_endtime`, `msdyn_macroagentorchestrationid`, `msdyn_name`, `msdyn_previoussalesagentrunid`, `msdyn_regardingid`, `msdyn_runafterdate`, `msdyn_salesagentprofileid`, `msdyn_salesagentrunid`, `msdyn_starttime`, `msdyn_stepentityid`, `msdyn_stepentityname`, `msdyn_triggers`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagentrun_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentrun_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentrun_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentrun_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagentrun` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagentrun` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagentrun` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagentrun` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salesagentrun_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid_lead` |
| `msdyn_salesagentrun_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_previoussalesagentrunid` | `msdyn_previoussalesagentrunid` |
| `msdyn_salesagentprofile_msdyn_salesagentrun_SalesAgentProfile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofileid` | `msdyn_salesagentprofileid` |
| `msdyn_salesagentrun_contact` | [contact](contact.md) | `msdyn_regardingid` | `msdyn_regardingid_contact` |
| `msdyn_salesagentrun_account` | [account](account.md) | `msdyn_regardingid` | `msdyn_regardingid_account` |
| `msdyn_salesagentrun_opportunity` | [opportunity](opportunity.md) | `msdyn_regardingid` | `msdyn_regardingid_opportunity` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentrun_msdyn_engageandreadinessagentresult` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `msdyn_dcaengageagentresult_salesagentrun_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `msdyn_salesagentrun_SyncErrors` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentrun` |
| `msdyn_salesagentrun_AsyncOperations` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentrun` |
| `msdyn_salesagentrun_MailboxTrackingFolders` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentrun` |
| `msdyn_salesagentrun_UserEntityInstanceDatas` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `objectid` | `objectid_msdyn_salesagentrun` |
| `msdyn_salesagentrun_ProcessSession` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentrun` |
| `msdyn_salesagentrun_BulkDeleteFailures` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentrun` |
| `msdyn_salesagentrun_PrincipalObjectAttributeAccesses` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `objectid` | `objectid_msdyn_salesagentrun` |
| `msdyn_salesagentrun_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_previoussalesagentrunid` | `msdyn_previoussalesagentrunid` |
| `msdyn_salesagenthandover_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `msdyn_salesagentrun_msdyn_engagereadinessagentresult` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |


## Source

Generated from [msdyn_salesagentrun (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagentrun')) on 2026-05-07.