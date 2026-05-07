---
logical: "msdyn_opportunityresearchresult"
display: "Opportunity Research Result"
entitySetName: "msdyn_opportunityresearchresults"
primaryId: "msdyn_opportunityresearchresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Opportunity Research Result

Opportunity Research Result

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunityresearchresult` |
| Display name | Opportunity Research Result |
| Display (plural) | Opportunity Research Results |
| Schema name | `msdyn_OpportunityResearchResult` |
| Entity set (Web API) | `msdyn_opportunityresearchresults` |
| Primary id attribute | `msdyn_opportunityresearchresultid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunityresearchresults?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_opportunityresearchresults(<guid>)
POST /api/data/v9.2/msdyn_opportunityresearchresults
PATCH /api/data/v9.2/msdyn_opportunityresearchresults(<guid>)
DELETE /api/data/v9.2/msdyn_opportunityresearchresults(<guid>)
```

## Attributes

Writable: **17** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_customresearchinsightconfigid`, `msdyn_isresearchstale`, `msdyn_macroagentorchestrationid`, `msdyn_name`, `msdyn_opportunity`, `msdyn_opportunityid`, `msdyn_opportunityresearchresultid`, `msdyn_opportunityresearchtopic`, `msdyn_opportunityresearchtopicresult`, `msdyn_salesagentprofile`, `msdyn_salesagentrunid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_OpportunityResearchResult_Opportunity_Opportunity` | [opportunity](opportunity.md) | `msdyn_opportunity` | `msdyn_Opportunity` |
| `lk_msdyn_opportunityresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_OpportunityResearchResult_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchresult_SyncErrors` | [msdyn_opportunityresearchresult](msdyn_opportunityresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchresult` |
| `msdyn_opportunityresearchresult_AsyncOperations` | [msdyn_opportunityresearchresult](msdyn_opportunityresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchresult` |
| `msdyn_opportunityresearchresult_MailboxTrackingFolders` | [msdyn_opportunityresearchresult](msdyn_opportunityresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchresult` |
| `msdyn_opportunityresearchresult_UserEntityInstanceDatas` | [msdyn_opportunityresearchresult](msdyn_opportunityresearchresult.md) | `objectid` | `objectid_msdyn_opportunityresearchresult` |
| `msdyn_opportunityresearchresult_ProcessSession` | [msdyn_opportunityresearchresult](msdyn_opportunityresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchresult` |
| `msdyn_opportunityresearchresult_BulkDeleteFailures` | [msdyn_opportunityresearchresult](msdyn_opportunityresearchresult.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchresult` |
| `msdyn_opportunityresearchresult_PrincipalObjectAttributeAccesses` | [msdyn_opportunityresearchresult](msdyn_opportunityresearchresult.md) | `objectid` | `objectid_msdyn_opportunityresearchresult` |


## Source

Generated from [msdyn_opportunityresearchresult (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunityresearchresult')) on 2026-05-07.