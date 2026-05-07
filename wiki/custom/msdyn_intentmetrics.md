---
logical: "msdyn_intentmetrics"
display: "msdyn_intentmetrics"
entitySetName: "msdyn_intentmetricses"
primaryId: "msdyn_intentmetricsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_intentmetrics

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentmetrics` |
| Display name | msdyn_intentmetrics |
| Display (plural) | msdyn_intentmetricses |
| Schema name | `msdyn_intentmetrics` |
| Entity set (Web API) | `msdyn_intentmetricses` |
| Primary id attribute | `msdyn_intentmetricsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentmetricses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentmetricses(<guid>)
POST /api/data/v9.2/msdyn_intentmetricses
PATCH /api/data/v9.2/msdyn_intentmetricses(<guid>)
DELETE /api/data/v9.2/msdyn_intentmetricses(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_intentid`, `msdyn_intentmetricsid`, `msdyn_intentsolutionrate`, `msdyn_intentvolume`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentmetrics_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentmetrics_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentmetrics_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentmetrics_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentmetrics` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentmetrics` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentmetrics` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentmetrics` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intent_msdyn_intentmetrics_msdyn_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentmetrics_SyncErrors` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_DuplicateMatchingRecord` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_DuplicateBaseRecord` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `baserecordid` | `baserecordid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_AsyncOperations` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_MailboxTrackingFolders` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_UserEntityInstanceDatas` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `objectid` | `objectid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_ProcessSession` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_BulkDeleteFailures` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentmetrics` |
| `msdyn_intentmetrics_PrincipalObjectAttributeAccesses` | [msdyn_intentmetrics](msdyn_intentmetrics.md) | `objectid` | `objectid_msdyn_intentmetrics` |


## Source

Generated from [msdyn_intentmetrics (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentmetrics')) on 2026-05-07.