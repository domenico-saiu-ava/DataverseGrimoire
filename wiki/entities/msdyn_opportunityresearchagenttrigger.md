---
logical: "msdyn_opportunityresearchagenttrigger"
display: "Opportunity Research Agent Trigger"
entitySetName: "msdyn_opportunityresearchagenttriggers"
primaryId: "msdyn_opportunityresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **16** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Input`, `msdyn_macroagentorchestrationid`, `msdyn_Name`, `msdyn_OpportunityId`, `msdyn_OpportunityResearchAgentTriggerId`, `msdyn_OpportunityResearchTopic`, `msdyn_RetryCount`, `msdyn_SalesAgentRunId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_opportunityresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_opportunityresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunityresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunityresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunityresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_opportunityresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_opportunityresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_opportunityresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunityresearchagenttrigger_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchagenttrigger_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchagenttrigger_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchagenttrigger_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_opportunityresearchagenttrigger_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_opportunityresearchagenttrigger_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_opportunityresearchagenttrigger.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_opportunityresearchagenttrigger.md) on 2026-05-06.