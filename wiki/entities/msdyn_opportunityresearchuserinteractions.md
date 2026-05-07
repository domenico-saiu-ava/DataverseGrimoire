---
logical: "msdyn_opportunityresearchuserinteractions"
display: "Opportunity Research User Interactions"
entitySetName: "msdyn_opportunityresearchuserinteractionses"
primaryId: "msdyn_opportunityresearchuserinteractionsid"
primaryName: "msdyn_opportunityresearchuserinteractions"
tableType: "Standard"
ownership: "None"
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

Writable: **19** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Feedback`, `msdyn_IsDone`, `msdyn_IsSeen`, `msdyn_LastUpdateTimestamp`, `msdyn_macroagentorchestrationid`, `msdyn_Opportunity`, `msdyn_OpportunityId`, `msdyn_OpportunityResearchUserInteractions`, `msdyn_OpportunityResearchUserInteractionsId`, `msdyn_Result`, `msdyn_SARId`, `msdyn_Topic`, `msdyn_UIItemId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunityresearchuserinteractions_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchuserinteractions_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchuserinteractions_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchuserinteractions_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_OpportunityResearchUserInteractions_Opportunity_Opportunity` | [opportunity](opportunity.md) | `msdyn_opportunity` | `msdyn_Opportunity` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchuserinteractions_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchuserinteractions_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchuserinteractions_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchuserinteractions_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_opportunityresearchuserinteractions_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchuserinteractions_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_opportunityresearchuserinteractions.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_opportunityresearchuserinteractions.md) on 2026-05-06.