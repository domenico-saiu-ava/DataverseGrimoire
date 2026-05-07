---
logical: "msdyn_triggersalesagent"
display: "Agente di vendita di attivazione"
entitySetName: "msdyn_triggersalesagents"
primaryId: "msdyn_triggersalesagentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Agente di vendita di attivazione

Questa tabella contiene i record degli agenti di vendita di attivazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_triggersalesagent` |
| Display name | Agente di vendita di attivazione |
| Display (plural) | Agenti di vendita di attivazione |
| Schema name | `msdyn_triggersalesagent` |
| Entity set (Web API) | `msdyn_triggersalesagents` |
| Primary id attribute | `msdyn_triggersalesagentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_triggersalesagents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_triggersalesagents(<guid>)
POST /api/data/v9.2/msdyn_triggersalesagents
PATCH /api/data/v9.2/msdyn_triggersalesagents(<guid>)
DELETE /api/data/v9.2/msdyn_triggersalesagents(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_macroagentorchestrationid`, `msdyn_name`, `msdyn_regardingid`, `msdyn_salesagentprofile`, `msdyn_triggerpayload`, `msdyn_triggersalesagentid`, `msdyn_triggertype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_triggersalesagent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_triggersalesagent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_triggersalesagent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_triggersalesagent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_triggersalesagent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_triggersalesagent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_triggersalesagent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_triggersalesagent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_triggersalesagent_regardingid_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingid` |
| `msdyn_triggersalesagent_salesagentprofile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_salesagentprofile` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_triggersalesagent_SyncErrors` | [msdyn_triggersalesagent](msdyn_triggersalesagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_triggersalesagent` |
| `msdyn_triggersalesagent_AsyncOperations` | [msdyn_triggersalesagent](msdyn_triggersalesagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_triggersalesagent` |
| `msdyn_triggersalesagent_MailboxTrackingFolders` | [msdyn_triggersalesagent](msdyn_triggersalesagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_triggersalesagent` |
| `msdyn_triggersalesagent_UserEntityInstanceDatas` | [msdyn_triggersalesagent](msdyn_triggersalesagent.md) | `objectid` | `objectid_msdyn_triggersalesagent` |
| `msdyn_triggersalesagent_ProcessSession` | [msdyn_triggersalesagent](msdyn_triggersalesagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_triggersalesagent` |
| `msdyn_triggersalesagent_BulkDeleteFailures` | [msdyn_triggersalesagent](msdyn_triggersalesagent.md) | `regardingobjectid` | `regardingobjectid_msdyn_triggersalesagent` |
| `msdyn_triggersalesagent_PrincipalObjectAttributeAccesses` | [msdyn_triggersalesagent](msdyn_triggersalesagent.md) | `objectid` | `objectid_msdyn_triggersalesagent` |


## Source

Generated from [msdyn_triggersalesagent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_triggersalesagent')) on 2026-05-07.