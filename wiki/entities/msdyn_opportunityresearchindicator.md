---
logical: "msdyn_opportunityresearchindicator"
display: "Opportunity Research Indicator"
entitySetName: "msdyn_opportunityresearchindicators"
primaryId: "msdyn_opportunityresearchindicatorid"
primaryName: "msdyn_opportunityid"
tableType: "Standard"
ownership: "None"
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_DealImportance`, `msdyn_DealRisk`, `msdyn_Opportunity`, `msdyn_OpportunityId`, `msdyn_OpportunityResearchIndicatorId`, `msdyn_risktype`, `msdyn_totalnumberofrisks`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunityresearchindicator_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchindicator_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchindicator_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchindicator_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_OpportunityResearchIndicator_Opportunity_Opportunity` | [opportunity](opportunity.md) | `msdyn_opportunity` | `msdyn_Opportunity` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchindicator_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchindicator_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchindicator_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchindicator_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_opportunityresearchindicator_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchindicator_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_opportunityresearchindicator.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_opportunityresearchindicator.md) on 2026-05-06.