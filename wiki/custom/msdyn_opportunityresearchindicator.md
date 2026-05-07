---
logical: "msdyn_opportunityresearchindicator"
display: "Opportunity Research Indicator"
entitySetName: "msdyn_opportunityresearchindicators"
primaryId: "msdyn_opportunityresearchindicatorid"
primaryName: "msdyn_opportunityid"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Opportunity Research Indicator

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunityresearchindicator` |
| Display name | Opportunity Research Indicator |
| Display (plural) | Opportunity Research Indicators |
| Schema name | `msdyn_OpportunityResearchIndicator` |
| Entity set (Web API) | `msdyn_opportunityresearchindicators` |
| Primary id attribute | `msdyn_opportunityresearchindicatorid` |
| Primary name attribute | `msdyn_opportunityid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunityresearchindicators?$select=msdyn_opportunityid&$top=10
GET /api/data/v9.2/msdyn_opportunityresearchindicators(<guid>)
POST /api/data/v9.2/msdyn_opportunityresearchindicators
PATCH /api/data/v9.2/msdyn_opportunityresearchindicators(<guid>)
DELETE /api/data/v9.2/msdyn_opportunityresearchindicators(<guid>)
```

## Attributes

Writable: **15** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_dealimportance`, `msdyn_dealrisk`, `msdyn_opportunity`, `msdyn_opportunityid`, `msdyn_opportunityresearchindicatorid`, `msdyn_risktype`, `msdyn_salesagentprofile`, `msdyn_totalnumberofactiverisks`, `msdyn_totalnumberofrisks`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `ownerid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunityresearchindicator_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchindicator_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchindicator_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchindicator_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_OpportunityResearchIndicator_SalesAgentProfile_msdyn_salesagentprofile` | [msdyn_salesagentprofile](msdyn_salesagentprofile.md) | `msdyn_salesagentprofile` | `msdyn_SalesAgentProfile` |
| `msdyn_OpportunityResearchIndicator_Opportunity_Opportunity` | [opportunity](opportunity.md) | `msdyn_opportunity` | `msdyn_Opportunity` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchindicator_SyncErrors` | [msdyn_opportunityresearchindicator](msdyn_opportunityresearchindicator.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchindicator` |
| `msdyn_opportunityresearchindicator_AsyncOperations` | [msdyn_opportunityresearchindicator](msdyn_opportunityresearchindicator.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchindicator` |
| `msdyn_opportunityresearchindicator_MailboxTrackingFolders` | [msdyn_opportunityresearchindicator](msdyn_opportunityresearchindicator.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchindicator` |
| `msdyn_opportunityresearchindicator_UserEntityInstanceDatas` | [msdyn_opportunityresearchindicator](msdyn_opportunityresearchindicator.md) | `objectid` | `objectid_msdyn_opportunityresearchindicator` |
| `msdyn_opportunityresearchindicator_ProcessSession` | [msdyn_opportunityresearchindicator](msdyn_opportunityresearchindicator.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchindicator` |
| `msdyn_opportunityresearchindicator_BulkDeleteFailures` | [msdyn_opportunityresearchindicator](msdyn_opportunityresearchindicator.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunityresearchindicator` |
| `msdyn_opportunityresearchindicator_PrincipalObjectAttributeAccesses` | [msdyn_opportunityresearchindicator](msdyn_opportunityresearchindicator.md) | `objectid` | `objectid_msdyn_opportunityresearchindicator` |


## Source

Generated from [msdyn_opportunityresearchindicator (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunityresearchindicator')) on 2026-05-07.