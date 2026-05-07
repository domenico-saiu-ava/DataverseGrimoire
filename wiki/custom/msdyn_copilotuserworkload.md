---
logical: "msdyn_copilotuserworkload"
display: "Copilot User Workload"
entitySetName: "msdyn_copilotuserworkloads"
primaryId: "msdyn_copilotuserworkloadid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Copilot User Workload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotuserworkload` |
| Display name | Copilot User Workload |
| Display (plural) | Copilot User Workloads |
| Schema name | `msdyn_copilotuserworkload` |
| Entity set (Web API) | `msdyn_copilotuserworkloads` |
| Primary id attribute | `msdyn_copilotuserworkloadid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotuserworkloads?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotuserworkloads(<guid>)
POST /api/data/v9.2/msdyn_copilotuserworkloads
PATCH /api/data/v9.2/msdyn_copilotuserworkloads(<guid>)
DELETE /api/data/v9.2/msdyn_copilotuserworkloads(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_columns`, `msdyn_copilotuserworkloadid`, `msdyn_fetchxml`, `msdyn_name`, `msdyn_prompt`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotuserworkload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotuserworkload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotuserworkload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotuserworkload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_copilotuserworkload` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_copilotuserworkload` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_copilotuserworkload` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_copilotuserworkload` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotuserworkload_SyncErrors` | [msdyn_copilotuserworkload](msdyn_copilotuserworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotuserworkload` |
| `msdyn_copilotuserworkload_AsyncOperations` | [msdyn_copilotuserworkload](msdyn_copilotuserworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotuserworkload` |
| `msdyn_copilotuserworkload_MailboxTrackingFolders` | [msdyn_copilotuserworkload](msdyn_copilotuserworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotuserworkload` |
| `msdyn_copilotuserworkload_UserEntityInstanceDatas` | [msdyn_copilotuserworkload](msdyn_copilotuserworkload.md) | `objectid` | `objectid_msdyn_copilotuserworkload` |
| `msdyn_copilotuserworkload_ProcessSession` | [msdyn_copilotuserworkload](msdyn_copilotuserworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotuserworkload` |
| `msdyn_copilotuserworkload_BulkDeleteFailures` | [msdyn_copilotuserworkload](msdyn_copilotuserworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotuserworkload` |
| `msdyn_copilotuserworkload_PrincipalObjectAttributeAccesses` | [msdyn_copilotuserworkload](msdyn_copilotuserworkload.md) | `objectid` | `objectid_msdyn_copilotuserworkload` |


## Source

Generated from [msdyn_copilotuserworkload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotuserworkload')) on 2026-05-07.