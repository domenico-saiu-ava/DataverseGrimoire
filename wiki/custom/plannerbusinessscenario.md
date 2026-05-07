---
logical: "plannerbusinessscenario"
display: "Planner Business Scenario"
entitySetName: "plannerbusinessscenarios"
primaryId: "plannerbusinessscenarioid"
primaryName: "uniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **13** · Read-only: **4**

### Writable

`buckets`, `displayname`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `plannerbusinessscenarioid`, `statecode`, `statuscode`, `syncenabled`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `webresourcename`

### Read-only

`owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `user_plannerbusinessscenario` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_plannerbusinessscenario` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_plannerbusinessscenario` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_plannerbusinessscenario` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `plannerbusinessscenario_SyncErrors` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannerbusinessscenario_AsyncOperations` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannerbusinessscenario_MailboxTrackingFolders` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannerbusinessscenario_UserEntityInstanceDatas` | [plannerbusinessscenario](plannerbusinessscenario.md) | `objectid` | `objectid_plannerbusinessscenario` |
| `plannerbusinessscenario_ProcessSession` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannerbusinessscenario_BulkDeleteFailures` | [plannerbusinessscenario](plannerbusinessscenario.md) | `regardingobjectid` | `regardingobjectid_plannerbusinessscenario` |
| `plannerbusinessscenario_PrincipalObjectAttributeAccesses` | [plannerbusinessscenario](plannerbusinessscenario.md) | `objectid` | `objectid_plannerbusinessscenario` |
| `plannerbusinessscenario_plannersyncaction_plannerbusinessscenarioid` | [plannerbusinessscenario](plannerbusinessscenario.md) | `plannerbusinessscenarioid` | `plannerbusinessscenarioid` |


## Source

Generated from [plannerbusinessscenario (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='plannerbusinessscenario')) on 2026-05-07.