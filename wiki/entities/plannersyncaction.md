---
logical: "plannersyncaction"
display: "Planner Sync Action"
entitySetName: "plannersyncactions"
primaryId: "plannersyncactionid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
---

# Planner Sync Action

The Planner Sync Action to be executed.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `plannersyncaction` |
| Display name | Planner Sync Action |
| Display (plural) | Planner Sync Actions |
| Schema name | `PlannerSyncAction` |
| Entity set (Web API) | `plannersyncactions` |
| Primary id attribute | `plannersyncactionid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/plannersyncactions?$select=title&$top=10
GET /api/data/v9.2/plannersyncactions(<guid>)
POST /api/data/v9.2/plannersyncactions
PATCH /api/data/v9.2/plannersyncactions(<guid>)
DELETE /api/data/v9.2/plannersyncactions(<guid>)
```

## Attributes

Writable: **26** · Read-only: **6**

### Writable

`Assignments`, `DueDateTime`, `ExternalBucketId`, `ExternalReferences`, `GroupId`, `ImportSequenceNumber`, `LastAttemptedOn`, `LastSyncError`, `Notes`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PendingAttempts`, `PercentComplete`, `PlannerBusinessScenarioId`, `PlannerSyncActionId`, `Priority`, `QueuedOn`, `SourceRecordEntityLogicalName`, `SourceRecordId`, `StartDateTime`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Title`, `UTCConversionTimeZoneCode`

### Read-only

`OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_plannersyncaction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `owner_plannersyncaction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `plannerbusinessscenario_plannersyncaction_plannerbusinessscenarioid` | [plannerbusinessscenario](plannerbusinessscenario.md) | `plannerbusinessscenarioid` | `plannerbusinessscenarioid` |
| `team_plannersyncaction` | [team](team.md) | `owningteam` | `owningteam` |
| `user_plannersyncaction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `plannersyncaction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannersyncaction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannersyncaction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannersyncaction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `plannersyncaction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannersyncaction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [plannersyncaction.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/plannersyncaction.md) on 2026-05-06.