---
logical: "plannerbusinessscenario"
display: "Planner Business Scenario"
entitySetName: "plannerbusinessscenarios"
primaryId: "plannerbusinessscenarioid"
primaryName: "uniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# Planner Business Scenario

For internal use only. The Business Scenario record to be created in Planner.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `plannerbusinessscenario` |
| Display name | Planner Business Scenario |
| Display (plural) | Planner Business Scenarios |
| Schema name | `plannerbusinessscenario` |
| Entity set (Web API) | `plannerbusinessscenarios` |
| Primary id attribute | `plannerbusinessscenarioid` |
| Primary name attribute | `uniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/plannerbusinessscenarios?$select=uniquename&$top=10
GET /api/data/v9.2/plannerbusinessscenarios(<guid>)
POST /api/data/v9.2/plannerbusinessscenarios
PATCH /api/data/v9.2/plannerbusinessscenarios(<guid>)
DELETE /api/data/v9.2/plannerbusinessscenarios(<guid>)
```

## Attributes

Writable: **14** · Read-only: **6**

### Writable

`Buckets`, `DisplayName`, `ImportSequenceNumber`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `plannerbusinessscenarioId`, `statecode`, `statuscode`, `SyncEnabled`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `WebResourceName`

### Read-only

`OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_plannerbusinessscenario` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `owner_plannerbusinessscenario` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_plannerbusinessscenario` | [team](team.md) | `owningteam` | `owningteam` |
| `user_plannerbusinessscenario` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `plannerbusinessscenario_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannerbusinessscenario_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannerbusinessscenario_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannerbusinessscenario_plannersyncaction_plannerbusinessscenarioid` | _n/a_ | `plannerbusinessscenarioid` | _n/a_ |
| `plannerbusinessscenario_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `plannerbusinessscenario_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `plannerbusinessscenario_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [plannerbusinessscenario.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/plannerbusinessscenario.md) on 2026-05-06.