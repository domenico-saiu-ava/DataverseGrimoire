---
logical: "msdyn_opportunityresearchagenttrigger"
display: "Opportunity Research Agent Trigger"
entitySetName: "msdyn_opportunityresearchagenttriggers"
primaryId: "msdyn_opportunityresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Opportunity Research Agent Trigger

Opportunity Research Agent Trigger

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunityresearchagenttrigger` |
| Display name | Opportunity Research Agent Trigger |
| Display (plural) | Opportunity Research Agent Triggers |
| Schema name | `msdyn_OpportunityResearchAgentTrigger` |
| Entity set (Web API) | `msdyn_opportunityresearchagenttriggers` |
| Primary id attribute | `msdyn_opportunityresearchagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunityresearchagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_opportunityresearchagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_opportunityresearchagenttriggers
PATCH /api/data/v9.2/msdyn_opportunityresearchagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_opportunityresearchagenttriggers(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_input`, `msdyn_macroagentorchestrationid`, `msdyn_name`, `msdyn_opportunityid`, `msdyn_opportunityresearchagenttriggerid`, `msdyn_opportunityresearchtopic`, `msdyn_retrycount`, `msdyn_salesagentprofile`, `msdyn_salesagentrunid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunityresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_opportunityresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_opportunityresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_opportunityresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_opportunityresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_OpportunityResearchAgentTrigger_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchagenttrigger_SyncErrors` | [msdyn_opportunityresearchagenttrigger](msdyn_opportunityresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchagenttrigger` |
| `msdyn_opportunityresearchagenttrigger_AsyncOperations` | [msdyn_opportunityresearchagenttrigger](msdyn_opportunityresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchagenttrigger` |
| `msdyn_opportunityresearchagenttrigger_MailboxTrackingFolders` | [msdyn_opportunityresearchagenttrigger](msdyn_opportunityresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchagenttrigger` |
| `msdyn_opportunityresearchagenttrigger_UserEntityInstanceDatas` | [msdyn_opportunityresearchagenttrigger](msdyn_opportunityresearchagenttrigger.md) | `objectid` | `objectid_msdyn_opportunityresearchagenttrigger` |
| `msdyn_opportunityresearchagenttrigger_ProcessSession` | [msdyn_opportunityresearchagenttrigger](msdyn_opportunityresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchagenttrigger` |
| `msdyn_opportunityresearchagenttrigger_BulkDeleteFailures` | [msdyn_opportunityresearchagenttrigger](msdyn_opportunityresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchagenttrigger` |
| `msdyn_opportunityresearchagenttrigger_PrincipalObjectAttributeAccesses` | [msdyn_opportunityresearchagenttrigger](msdyn_opportunityresearchagenttrigger.md) | `objectid` | `objectid_msdyn_opportunityresearchagenttrigger` |


## Source

Generated from [msdyn_opportunityresearchagenttrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunityresearchagenttrigger')) on 2026-05-07.