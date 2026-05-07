---
logical: "goal"
display: "Goal"
entitySetName: "goals"
primaryId: "goalid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
synonyms_it: ["obiettivo", "obiettivi", "target"]
synonyms_en: ["goal", "target", "kpi"]
---

# Goal

Target objective for a user or a team for a specified time period.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `goal` |
| Display name | Goal |
| Display (plural) | Goals |
| Schema name | `Goal` |
| Entity set (Web API) | `goals` |
| Primary id attribute | `goalid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/goals?$select=title&$top=10
GET /api/data/v9.2/goals(<guid>)
POST /api/data/v9.2/goals
PATCH /api/data/v9.2/goals(<guid>)
DELETE /api/data/v9.2/goals(<guid>)
```

## Attributes

Writable: **54** · Read-only: **34**

### Writable

`ActualDecimal`, `ActualInteger`, `ActualMoney`, `AmountDataType`, `ConsiderOnlyGoalOwnersRecords`, `CustomRollupFieldDecimal`, `CustomRollupFieldInteger`, `CustomRollupFieldMoney`, `EntityImage`, `FiscalPeriod`, `FiscalYear`, `GoalEndDate`, `GoalId`, `GoalOwnerId`, `GoalOwnerIdType`, `GoalStartDate`, `GoalWithErrorId`, `ImportSequenceNumber`, `InProgressDecimal`, `InProgressInteger`, `InProgressMoney`, `IsAmount`, `IsFiscalPeriodGoal`, `IsOverridden`, `IsOverride`, `LastRolledupDate`, `MetricId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentGoalId`, `Percentage`, `RollupErrorCode`, `RollupOnlyFromChildGoals`, `RollUpQueryActualDecimalId`, `RollupQueryActualIntegerId`, `RollUpQueryActualMoneyId`, `RollUpQueryCustomDecimalId`, `RollUpQueryCustomIntegerId`, `RollUpQueryCustomMoneyId`, `RollUpQueryInprogressDecimalId`, `RollUpQueryInprogressIntegerId`, `RollUpQueryInprogressMoneyId`, `StateCode`, `StatusCode`, `StretchTargetDecimal`, `StretchTargetInteger`, `StretchTargetMoney`, `TargetDecimal`, `TargetInteger`, `TargetMoney`, `TimeZoneRuleVersionNumber`, `Title`, `UTCConversionTimeZoneCode`

### Read-only

`ActualMoney_Base`, `ActualString`, `ComputedTargetAsOfTodayDecimal`, `ComputedTargetAsOfTodayInteger`, `ComputedTargetAsOfTodayMoney`, `ComputedTargetAsOfTodayMoney_Base`, `ComputedTargetAsOfTodayPercentageAchieved`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomRollupFieldMoney_Base`, `CustomRollupFieldString`, `Depth`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `ExchangeRate`, `InProgressMoney_Base`, `InProgressString`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `StretchTargetMoney_Base`, `StretchTargetString`, `TargetMoney_Base`, `TargetString`, `TransactionCurrencyId`, `TreeId`, `VersionNumber`

## Relationships

### Many-to-One (23)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_goal` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `goal_parent_goal` | [goal](goal.md) | `parentgoalid` | `parentgoalid` |
| `Goal_RollupError_Goal` | [goal](goal.md) | `goalwitherrorid` | `goalwitherrorid` |
| `goal_rollupquery_actualdecimal` | [goalrollupquery](goalrollupquery.md) | `rollupqueryactualdecimalid` | `rollupqueryactualdecimalid` |
| `goal_rollupquery_actualmoney` | [goalrollupquery](goalrollupquery.md) | `rollupqueryactualmoneyid` | `rollupqueryactualmoneyid` |
| `goal_rollupquery_customdecimal` | [goalrollupquery](goalrollupquery.md) | `rollupquerycustomdecimalid` | `rollupquerycustomdecimalid` |
| `goal_rollupquery_customint` | [goalrollupquery](goalrollupquery.md) | `rollupquerycustomintegerid` | `rollupquerycustomintegerid` |
| `goal_rollupquery_custommoney` | [goalrollupquery](goalrollupquery.md) | `rollupquerycustommoneyid` | `rollupquerycustommoneyid` |
| `goal_rollupquery_inprogressdecimal` | [goalrollupquery](goalrollupquery.md) | `rollupqueryinprogressdecimalid` | `rollupqueryinprogressdecimalid` |
| `goal_rollupquery_inprogressint` | [goalrollupquery](goalrollupquery.md) | `rollupqueryinprogressintegerid` | `rollupqueryinprogressintegerid` |
| `goal_rollupquery_inprogressmoney` | [goalrollupquery](goalrollupquery.md) | `rollupqueryinprogressmoneyid` | `rollupqueryinprogressmoneyid` |
| `goalrollupquery_actualint` | [goalrollupquery](goalrollupquery.md) | `rollupqueryactualintegerid` | `rollupqueryactualintegerid` |
| `lk_goal_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_goal_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_goal_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_goal_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `metric_goal` | [metric](metric.md) | `metricid` | `metricid` |
| `owner_goal` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_goal` | [team](team.md) | `owningteam` | `owningteam` |
| `team_goal_goalowner` | [team](team.md) | `goalownerid` | `goalownerid_team` |
| `TransactionCurrency_Goal` | [transactioncurrency](transactioncurrency.md) | `transactioncurrencyid` | `transactioncurrencyid` |
| `user_goal` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `user_goal_goalowner` | [systemuser](systemuser.md) | `goalownerid` | `goalownerid_systemuser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `Goal_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `Goal_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `goal_connections1` | _n/a_ | `record1id` | _n/a_ |
| `goal_connections2` | _n/a_ | `record2id` | _n/a_ |
| `Goal_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `Goal_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `goal_parent_goal` | _n/a_ | `parentgoalid` | _n/a_ |
| `goal_principalobjectattributeaccess` | _n/a_ | `objectid` | _n/a_ |
| `Goal_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `Goal_RollupError_Goal` | _n/a_ | `goalwitherrorid` | _n/a_ |
| `Goal_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [goal.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/goal.md) on 2026-05-06.