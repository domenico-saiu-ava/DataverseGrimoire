---
logical: "msdyn_agentmatchingcriteria"
display: "Agent Matching Criteria"
entitySetName: "msdyn_agentmatchingcriterias"
primaryId: "msdyn_agentmatchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Matching Criteria

Contains matching criteria for agents

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentmatchingcriteria` |
| Display name | Agent Matching Criteria |
| Display (plural) | Agent Matching Criterias |
| Schema name | `msdyn_agentmatchingcriteria` |
| Entity set (Web API) | `msdyn_agentmatchingcriterias` |
| Primary id attribute | `msdyn_agentmatchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentmatchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentmatchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_agentmatchingcriterias
PATCH /api/data/v9.2/msdyn_agentmatchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_agentmatchingcriterias(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentmatchingcriteriaId`, `msdyn_matchingcriteriaid`, `msdyn_name`, `msdyn_systemuserid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentmatchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentmatchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentmatchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentmatchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentmatchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_agentmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |
| `msdyn_agentmatchingcriteria_systemuserid_systemuser` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |
| `owner_msdyn_agentmatchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentmatchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentmatchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentmatchingcriteria_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentmatchingcriteria_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentmatchingcriteria_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentmatchingcriteria_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentmatchingcriteria_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentmatchingcriteria_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentmatchingcriteria_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentmatchingcriteria_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentmatchingcriteria.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentmatchingcriteria.md) on 2026-05-06.