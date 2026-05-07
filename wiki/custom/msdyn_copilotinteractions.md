---
logical: "msdyn_copilotinteractions"
display: "Copilot Interactions"
entitySetName: "msdyn_copilotinteractionses"
primaryId: "msdyn_copilotinteractionsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Copilot Interactions

Data table of previous copilot interactions.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotinteractions` |
| Display name | Copilot Interactions |
| Display (plural) | Copilot Interactions |
| Schema name | `msdyn_CopilotInteractions` |
| Entity set (Web API) | `msdyn_copilotinteractionses` |
| Primary id attribute | `msdyn_copilotinteractionsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotinteractionses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotinteractionses(<guid>)
POST /api/data/v9.2/msdyn_copilotinteractionses
PATCH /api/data/v9.2/msdyn_copilotinteractionses(<guid>)
DELETE /api/data/v9.2/msdyn_copilotinteractionses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_context`, `msdyn_copilotinteractionsid`, `msdyn_copilotname`, `msdyn_customerid`, `msdyn_engineversion`, `msdyn_name`, `msdyn_outcome`, `msdyn_result`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotinteractions_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotinteractions_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotinteractions_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotinteractions_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_copilotinteractions` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_copilotinteractions` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_copilotinteractions` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_copilotinteractions` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotinteractions_SyncErrors` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_DuplicateMatchingRecord` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_DuplicateBaseRecord` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `baserecordid` | `baserecordid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_AsyncOperations` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_MailboxTrackingFolders` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_UserEntityInstanceDatas` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `objectid` | `objectid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_ProcessSession` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_BulkDeleteFailures` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractions` |
| `msdyn_copilotinteractions_PrincipalObjectAttributeAccesses` | [msdyn_copilotinteractions](msdyn_copilotinteractions.md) | `objectid` | `objectid_msdyn_copilotinteractions` |


## Source

Generated from [msdyn_copilotinteractions (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotinteractions')) on 2026-05-07.