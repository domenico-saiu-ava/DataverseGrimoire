---
logical: "msdyn_opportunityresearchuserinteractions"
display: "Opportunity Research User Interactions"
entitySetName: "msdyn_opportunityresearchuserinteractionses"
primaryId: "msdyn_opportunityresearchuserinteractionsid"
primaryName: "msdyn_opportunityresearchuserinteractions"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Opportunity Research User Interactions

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunityresearchuserinteractions` |
| Display name | Opportunity Research User Interactions |
| Display (plural) | Opportunity Research User Interactions |
| Schema name | `msdyn_OpportunityResearchUserInteractions` |
| Entity set (Web API) | `msdyn_opportunityresearchuserinteractionses` |
| Primary id attribute | `msdyn_opportunityresearchuserinteractionsid` |
| Primary name attribute | `msdyn_opportunityresearchuserinteractions` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunityresearchuserinteractionses?$select=msdyn_opportunityresearchuserinteractions&$top=10
GET /api/data/v9.2/msdyn_opportunityresearchuserinteractionses(<guid>)
POST /api/data/v9.2/msdyn_opportunityresearchuserinteractionses
PATCH /api/data/v9.2/msdyn_opportunityresearchuserinteractionses(<guid>)
DELETE /api/data/v9.2/msdyn_opportunityresearchuserinteractionses(<guid>)
```

## Attributes

Writable: **20** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_feedback`, `msdyn_isdone`, `msdyn_isseen`, `msdyn_lastupdatetimestamp`, `msdyn_macroagentorchestrationid`, `msdyn_opportunity`, `msdyn_opportunityid`, `msdyn_opportunityresearchuserinteractions`, `msdyn_opportunityresearchuserinteractionsid`, `msdyn_result`, `msdyn_salesagentprofile`, `msdyn_sarid`, `msdyn_topic`, `msdyn_uiitemid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_OpportunityResearchUserInteractions_Opportunity_Opportunity` | [opportunity](opportunity.md) | `msdyn_opportunity` | `msdyn_Opportunity` |
| `lk_msdyn_opportunityresearchuserinteractions_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchuserinteractions_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchuserinteractions_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchuserinteractions_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_OpportunityResearchUserInteractions_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchuserinteractions_SyncErrors` | [msdyn_opportunityresearchuserinteractions](msdyn_opportunityresearchuserinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchuserinteractions` |
| `msdyn_opportunityresearchuserinteractions_AsyncOperations` | [msdyn_opportunityresearchuserinteractions](msdyn_opportunityresearchuserinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchuserinteractions` |
| `msdyn_opportunityresearchuserinteractions_MailboxTrackingFolders` | [msdyn_opportunityresearchuserinteractions](msdyn_opportunityresearchuserinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchuserinteractions` |
| `msdyn_opportunityresearchuserinteractions_UserEntityInstanceDatas` | [msdyn_opportunityresearchuserinteractions](msdyn_opportunityresearchuserinteractions.md) | `objectid` | `objectid_msdyn_opportunityresearchuserinteractions` |
| `msdyn_opportunityresearchuserinteractions_ProcessSession` | [msdyn_opportunityresearchuserinteractions](msdyn_opportunityresearchuserinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchuserinteractions` |
| `msdyn_opportunityresearchuserinteractions_BulkDeleteFailures` | [msdyn_opportunityresearchuserinteractions](msdyn_opportunityresearchuserinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchuserinteractions` |
| `msdyn_opportunityresearchuserinteractions_PrincipalObjectAttributeAccesses` | [msdyn_opportunityresearchuserinteractions](msdyn_opportunityresearchuserinteractions.md) | `objectid` | `objectid_msdyn_opportunityresearchuserinteractions` |


## Source

Generated from [msdyn_opportunityresearchuserinteractions (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunityresearchuserinteractions')) on 2026-05-07.