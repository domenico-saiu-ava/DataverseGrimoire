---
logical: "msdyn_agentgroupmatchingcriteria"
display: "Agent Group Matching Criteria"
entitySetName: "msdyn_agentgroupmatchingcriterias"
primaryId: "msdyn_agentgroupmatchingcriteriaid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Agent Group Matching Criteria

Contains matching criteria of the agent groups

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentgroupmatchingcriteria` |
| Display name | Agent Group Matching Criteria |
| Display (plural) | Agent Group Matching Criterias |
| Schema name | `msdyn_agentgroupmatchingcriteria` |
| Entity set (Web API) | `msdyn_agentgroupmatchingcriterias` |
| Primary id attribute | `msdyn_agentgroupmatchingcriteriaid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentgroupmatchingcriterias?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentgroupmatchingcriterias(<guid>)
POST /api/data/v9.2/msdyn_agentgroupmatchingcriterias
PATCH /api/data/v9.2/msdyn_agentgroupmatchingcriterias(<guid>)
DELETE /api/data/v9.2/msdyn_agentgroupmatchingcriterias(<guid>)
```

## Attributes

Writable: **13** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_agentgroupid`, `msdyn_agentgroupmatchingcriteriaId`, `msdyn_matchingcriteriaid`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_agentgroupmatchingcriteria` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_agentgroupmatchingcriteria_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentgroupmatchingcriteria_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentgroupmatchingcriteria_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentgroupmatchingcriteria_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_agentgroupmatchingcriteria_agentgroupid_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_agentgroupid` | `msdyn_agentgroupid` |
| `msdyn_agentgroupmatchingcriteria_matchingcriteriaid_msdyn_matchingcriteria` | [msdyn_matchingcriteria](msdyn_matchingcriteria.md) | `msdyn_matchingcriteriaid` | `msdyn_matchingcriteriaid` |
| `owner_msdyn_agentgroupmatchingcriteria` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_agentgroupmatchingcriteria` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_agentgroupmatchingcriteria` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroupmatchingcriteria_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentgroupmatchingcriteria_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentgroupmatchingcriteria.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentgroupmatchingcriteria.md) on 2026-05-06.