---
logical: "goalrollupquery"
display: "Rollup Query"
entitySetName: "goalrollupqueries"
primaryId: "goalrollupqueryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rollup Query

Query that is used to filter the results of the goal rollup.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `goalrollupquery` |
| Display name | Rollup Query |
| Display (plural) | Rollup Queries |
| Schema name | `GoalRollupQuery` |
| Entity set (Web API) | `goalrollupqueries` |
| Primary id attribute | `goalrollupqueryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/goalrollupqueries?$select=name&$top=10
GET /api/data/v9.2/goalrollupqueries(<guid>)
POST /api/data/v9.2/goalrollupqueries
PATCH /api/data/v9.2/goalrollupqueries(<guid>)
DELETE /api/data/v9.2/goalrollupqueries(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`FetchXml`, `GoalRollupQueryId`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `QueryEntityType`, `StateCode`, `StatusCode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_goalrollupquery` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_goalrollupquery_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_goalrollupquery_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_goalrollupquery_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_goalrollupquery_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_goalrollupquery` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_goalrollupquery` | [team](team.md) | `owningteam` | `owningteam` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `goal_rollupquery_actualdecimal` | _n/a_ | `rollupqueryactualdecimalid` | _n/a_ |
| `goal_rollupquery_actualmoney` | _n/a_ | `rollupqueryactualmoneyid` | _n/a_ |
| `goal_rollupquery_customdecimal` | _n/a_ | `rollupquerycustomdecimalid` | _n/a_ |
| `goal_rollupquery_customint` | _n/a_ | `rollupquerycustomintegerid` | _n/a_ |
| `goal_rollupquery_custommoney` | _n/a_ | `rollupquerycustommoneyid` | _n/a_ |
| `goal_rollupquery_inprogressdecimal` | _n/a_ | `rollupqueryinprogressdecimalid` | _n/a_ |
| `goal_rollupquery_inprogressint` | _n/a_ | `rollupqueryinprogressintegerid` | _n/a_ |
| `goal_rollupquery_inprogressmoney` | _n/a_ | `rollupqueryinprogressmoneyid` | _n/a_ |
| `goalrollupquery_actualint` | _n/a_ | `rollupqueryactualintegerid` | _n/a_ |
| `goalrollupquery_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `GoalRollupQuery_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `GoalRollupQuery_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `goalrollupquery_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `GoalRollupQuery_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [goalrollupquery.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/goalrollupquery.md) on 2026-05-06.