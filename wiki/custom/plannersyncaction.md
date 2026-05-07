---
logical: "plannersyncaction"
display: "Planner Sync Action"
entitySetName: "plannersyncactions"
primaryId: "plannersyncactionid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **25** · Read-only: **4**

### Writable

`assignments`, `duedatetime`, `externalbucketid`, `externalreferences`, `groupid`, `importsequencenumber`, `lastattemptedon`, `lastsyncerror`, `notes`, `overriddencreatedon`, `ownerid`, `pendingattempts`, `percentcomplete`, `plannerbusinessscenarioid`, `plannersyncactionid`, `priority`, `queuedon`, `sourcerecordentitylogicalname`, `sourcerecordid`, `startdatetime`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `title`, `utcconversiontimezonecode`

### Read-only

`owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `user_plannersyncaction` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_plannersyncaction` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_plannersyncaction` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_plannersyncaction` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `plannerbusinessscenario_plannersyncaction_plannerbusinessscenarioid` | [plannerbusinessscenario](plannerbusinessscenario.md) | `plannerbusinessscenarioid` | `plannerbusinessscenarioid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `plannersyncaction_SyncErrors` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plannersyncaction_AsyncOperations` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plannersyncaction_MailboxTrackingFolders` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plannersyncaction_UserEntityInstanceDatas` | [plannersyncaction](plannersyncaction.md) | `objectid` | `objectid_plannersyncaction` |
| `plannersyncaction_ProcessSession` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plannersyncaction_BulkDeleteFailures` | [plannersyncaction](plannersyncaction.md) | `regardingobjectid` | `regardingobjectid_plannersyncaction` |
| `plannersyncaction_PrincipalObjectAttributeAccesses` | [plannersyncaction](plannersyncaction.md) | `objectid` | `objectid_plannersyncaction` |


## Source

Generated from [plannersyncaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='plannersyncaction')) on 2026-05-07.