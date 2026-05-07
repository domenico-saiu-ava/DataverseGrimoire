---
logical: "msdyn_priority"
display: "Priorità"
entitySetName: "msdyn_priorities"
primaryId: "msdyn_priorityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Priorità

Priorità da usare nelle prenotazioni. È inoltre possibile specificare un colore per ogni tipo di priorità, che verrà visualizzato nella scheda di pianificazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_priority` |
| Display name | Priorità |
| Display (plural) | Priorità |
| Schema name | `msdyn_priority` |
| Entity set (Web API) | `msdyn_priorities` |
| Primary id attribute | `msdyn_priorityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_priorities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_priorities(<guid>)
POST /api/data/v9.2/msdyn_priorities
PATCH /api/data/v9.2/msdyn_priorities(<guid>)
DELETE /api/data/v9.2/msdyn_priorities(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_levelofimportance`, `msdyn_name`, `msdyn_prioritycolor`, `msdyn_priorityid`, `msdyn_priorityvalue`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_priority_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_priority_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_priority_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_priority_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_priority` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_priority` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_priority` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_priority` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_priority_SyncErrors` | [msdyn_priority](msdyn_priority.md) | `regardingobjectid` | `regardingobjectid_msdyn_priority` |
| `msdyn_priority_DuplicateMatchingRecord` | [msdyn_priority](msdyn_priority.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_priority` |
| `msdyn_priority_DuplicateBaseRecord` | [msdyn_priority](msdyn_priority.md) | `baserecordid` | `baserecordid_msdyn_priority` |
| `msdyn_priority_AsyncOperations` | [msdyn_priority](msdyn_priority.md) | `regardingobjectid` | `regardingobjectid_msdyn_priority` |
| `msdyn_priority_MailboxTrackingFolders` | [msdyn_priority](msdyn_priority.md) | `regardingobjectid` | `regardingobjectid_msdyn_priority` |
| `msdyn_priority_UserEntityInstanceDatas` | [msdyn_priority](msdyn_priority.md) | `objectid` | `objectid_msdyn_priority` |
| `msdyn_priority_ProcessSession` | [msdyn_priority](msdyn_priority.md) | `regardingobjectid` | `regardingobjectid_msdyn_priority` |
| `msdyn_priority_BulkDeleteFailures` | [msdyn_priority](msdyn_priority.md) | `regardingobjectid` | `regardingobjectid_msdyn_priority` |
| `msdyn_priority_PrincipalObjectAttributeAccesses` | [msdyn_priority](msdyn_priority.md) | `objectid` | `objectid_msdyn_priority` |
| `msdyn_priority_Annotations` | [msdyn_priority](msdyn_priority.md) | `objectid` | `objectid_msdyn_priority` |
| `msdyn_msdyn_priority_msdyn_resourcerequirement_Priority` | [msdyn_priority](msdyn_priority.md) | `msdyn_priority` | `msdyn_Priority` |


## Source

Generated from [msdyn_priority (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_priority')) on 2026-05-07.