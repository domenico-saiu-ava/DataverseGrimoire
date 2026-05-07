---
logical: "msdyn_cceventingscenario"
display: "CC Eventing Scenario"
entitySetName: "msdyn_cceventingscenarios"
primaryId: "msdyn_cceventingscenarioid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CC Eventing Scenario

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_cceventingscenario` |
| Display name | CC Eventing Scenario |
| Display (plural) | CC Eventing Scenarios |
| Schema name | `msdyn_cceventingscenario` |
| Entity set (Web API) | `msdyn_cceventingscenarios` |
| Primary id attribute | `msdyn_cceventingscenarioid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_cceventingscenarios?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_cceventingscenarios(<guid>)
POST /api/data/v9.2/msdyn_cceventingscenarios
PATCH /api/data/v9.2/msdyn_cceventingscenarios(<guid>)
DELETE /api/data/v9.2/msdyn_cceventingscenarios(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_cceventingscenarioid`, `msdyn_name`, `msdyn_parentcceventingscenarioid`, `msdyn_scenarioname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_cceventingscenario_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_cceventingscenario_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_cceventingscenario_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_cceventingscenario_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_cceventingscenario` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_cceventingscenario` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_cceventingscenario` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_cceventingscenario` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_cceventingscenario_parentcceventingscenarioid_msdyn_cceventingscenario` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `msdyn_parentcceventingscenarioid` | `msdyn_parentcceventingscenarioid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_cceventingscenario_SyncErrors` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `regardingobjectid` | `regardingobjectid_msdyn_cceventingscenario` |
| `msdyn_cceventingscenario_AsyncOperations` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `regardingobjectid` | `regardingobjectid_msdyn_cceventingscenario` |
| `msdyn_cceventingscenario_MailboxTrackingFolders` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `regardingobjectid` | `regardingobjectid_msdyn_cceventingscenario` |
| `msdyn_cceventingscenario_UserEntityInstanceDatas` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `objectid` | `objectid_msdyn_cceventingscenario` |
| `msdyn_cceventingscenario_ProcessSession` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `regardingobjectid` | `regardingobjectid_msdyn_cceventingscenario` |
| `msdyn_cceventingscenario_BulkDeleteFailures` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `regardingobjectid` | `regardingobjectid_msdyn_cceventingscenario` |
| `msdyn_cceventingscenario_PrincipalObjectAttributeAccesses` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `objectid` | `objectid_msdyn_cceventingscenario` |
| `msdyn_cceventingscenario_parentcceventingscenarioid_msdyn_cceventingscenario` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `msdyn_parentcceventingscenarioid` | `msdyn_parentcceventingscenarioid` |
| `msdyn_ccplaybookpolicy_cceventingscenarioid_msdyn_cceventingscenario` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `msdyn_cceventingscenarioid` | `msdyn_cceventingscenarioid` |


## Source

Generated from [msdyn_cceventingscenario (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_cceventingscenario')) on 2026-05-07.