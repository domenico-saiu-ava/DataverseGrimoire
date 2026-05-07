---
logical: "msdyn_opportunityresearchresult"
display: "Opportunity Research Result"
entitySetName: "msdyn_opportunityresearchresults"
primaryId: "msdyn_opportunityresearchresultid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
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

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_customresearchinsightconfigid`, `msdyn_IsResearchStale`, `msdyn_macroagentorchestrationid`, `msdyn_Name`, `msdyn_Opportunity`, `msdyn_OpportunityId`, `msdyn_OpportunityResearchResultId`, `msdyn_OpportunityResearchTopic`, `msdyn_OpportunityResearchTopicResult`, `msdyn_SalesAgentRunId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunityresearchresult_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchresult_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchresult_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchresult_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_OpportunityResearchResult_Opportunity_Opportunity` | [opportunity](opportunity.md) | `msdyn_opportunity` | `msdyn_Opportunity` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchresult_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchresult_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchresult_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchresult_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_opportunityresearchresult_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchresult_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_opportunityresearchresult.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_opportunityresearchresult.md) on 2026-05-06.