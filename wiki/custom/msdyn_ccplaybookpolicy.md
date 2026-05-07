---
logical: "msdyn_ccplaybookpolicy"
display: "CC Playbook Policy"
entitySetName: "msdyn_ccplaybookpolicies"
primaryId: "msdyn_ccplaybookpolicyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CC Playbook Policy

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ccplaybookpolicy` |
| Display name | CC Playbook Policy |
| Display (plural) | CC Playbook Policies |
| Schema name | `msdyn_ccplaybookpolicy` |
| Entity set (Web API) | `msdyn_ccplaybookpolicies` |
| Primary id attribute | `msdyn_ccplaybookpolicyid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ccplaybookpolicies?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ccplaybookpolicies(<guid>)
POST /api/data/v9.2/msdyn_ccplaybookpolicies
PATCH /api/data/v9.2/msdyn_ccplaybookpolicies(<guid>)
DELETE /api/data/v9.2/msdyn_ccplaybookpolicies(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_cceventingscenarioid`, `msdyn_ccplaybookpolicyid`, `msdyn_entitytype`, `msdyn_eventtype`, `msdyn_mode`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ccplaybookpolicy_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ccplaybookpolicy_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ccplaybookpolicy_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ccplaybookpolicy_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ccplaybookpolicy` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ccplaybookpolicy` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ccplaybookpolicy` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ccplaybookpolicy` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_ccplaybookpolicy_cceventingscenarioid_msdyn_cceventingscenario` | [msdyn_cceventingscenario](msdyn_cceventingscenario.md) | `msdyn_cceventingscenarioid` | `msdyn_cceventingscenarioid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ccplaybookpolicy_SyncErrors` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccplaybookpolicy` |
| `msdyn_ccplaybookpolicy_AsyncOperations` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccplaybookpolicy` |
| `msdyn_ccplaybookpolicy_MailboxTrackingFolders` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccplaybookpolicy` |
| `msdyn_ccplaybookpolicy_UserEntityInstanceDatas` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `objectid` | `objectid_msdyn_ccplaybookpolicy` |
| `msdyn_ccplaybookpolicy_ProcessSession` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccplaybookpolicy` |
| `msdyn_ccplaybookpolicy_BulkDeleteFailures` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `regardingobjectid` | `regardingobjectid_msdyn_ccplaybookpolicy` |
| `msdyn_ccplaybookpolicy_PrincipalObjectAttributeAccesses` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `objectid` | `objectid_msdyn_ccplaybookpolicy` |
| `msdyn_ccuserprompt_ccplaybookpolicyid_msdyn_ccplaybookpolicy` | [msdyn_ccplaybookpolicy](msdyn_ccplaybookpolicy.md) | `msdyn_ccplaybookpolicyid` | `msdyn_ccplaybookpolicyid` |


## Source

Generated from [msdyn_ccplaybookpolicy (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ccplaybookpolicy')) on 2026-05-07.