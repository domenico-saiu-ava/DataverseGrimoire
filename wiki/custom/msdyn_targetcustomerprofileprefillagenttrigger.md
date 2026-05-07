---
logical: "msdyn_targetcustomerprofileprefillagenttrigger"
display: "TargetCustomerProfilePrefillAgentTrigger"
entitySetName: "msdyn_targetcustomerprofileprefillagenttriggers"
primaryId: "msdyn_targetcustomerprofileprefillagenttriggerid"
primaryName: "msdyn_input"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# TargetCustomerProfilePrefillAgentTrigger

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_targetcustomerprofileprefillagenttrigger` |
| Display name | TargetCustomerProfilePrefillAgentTrigger |
| Display (plural) | TargetCustomerProfilePrefillAgentTriggers |
| Schema name | `msdyn_targetcustomerprofileprefillagenttrigger` |
| Entity set (Web API) | `msdyn_targetcustomerprofileprefillagenttriggers` |
| Primary id attribute | `msdyn_targetcustomerprofileprefillagenttriggerid` |
| Primary name attribute | `msdyn_input` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers?$select=msdyn_input&$top=10
GET /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers
PATCH /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_targetcustomerprofileprefillagenttriggers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_input`, `msdyn_input_v2`, `msdyn_name`, `msdyn_retrycount`, `msdyn_targetcustomerprofileprefillagenttriggerid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_targetcustomerprofileprefillagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_targetcustomerprofileprefillagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_targetcustomerprofileprefillagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_targetcustomerprofileprefillagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_targetcustomerprofileprefillagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_targetcustomerprofileprefillagenttrigger_SyncErrors` | [msdyn_targetcustomerprofileprefillagenttrigger](msdyn_targetcustomerprofileprefillagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_targetcustomerprofileprefillagenttrigger` |
| `msdyn_targetcustomerprofileprefillagenttrigger_AsyncOperations` | [msdyn_targetcustomerprofileprefillagenttrigger](msdyn_targetcustomerprofileprefillagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_targetcustomerprofileprefillagenttrigger` |
| `msdyn_targetcustomerprofileprefillagenttrigger_MailboxTrackingFolders` | [msdyn_targetcustomerprofileprefillagenttrigger](msdyn_targetcustomerprofileprefillagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_targetcustomerprofileprefillagenttrigger` |
| `msdyn_targetcustomerprofileprefillagenttrigger_UserEntityInstanceDatas` | [msdyn_targetcustomerprofileprefillagenttrigger](msdyn_targetcustomerprofileprefillagenttrigger.md) | `objectid` | `objectid_msdyn_targetcustomerprofileprefillagenttrigger` |
| `msdyn_targetcustomerprofileprefillagenttrigger_ProcessSession` | [msdyn_targetcustomerprofileprefillagenttrigger](msdyn_targetcustomerprofileprefillagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_targetcustomerprofileprefillagenttrigger` |
| `msdyn_targetcustomerprofileprefillagenttrigger_BulkDeleteFailures` | [msdyn_targetcustomerprofileprefillagenttrigger](msdyn_targetcustomerprofileprefillagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_targetcustomerprofileprefillagenttrigger` |
| `msdyn_targetcustomerprofileprefillagenttrigger_PrincipalObjectAttributeAccesses` | [msdyn_targetcustomerprofileprefillagenttrigger](msdyn_targetcustomerprofileprefillagenttrigger.md) | `objectid` | `objectid_msdyn_targetcustomerprofileprefillagenttrigger` |


## Source

Generated from [msdyn_targetcustomerprofileprefillagenttrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_targetcustomerprofileprefillagenttrigger')) on 2026-05-07.