---
logical: "msdyn_suggestionsellerpriority"
display: "Suggestion Seller Priority"
entitySetName: "msdyn_suggestionsellerpriorities"
primaryId: "msdyn_suggestionsellerpriorityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Suggestion Seller Priority

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionsellerpriority` |
| Display name | Suggestion Seller Priority |
| Display (plural) | suggestionsellerpriorities |
| Schema name | `msdyn_suggestionsellerpriority` |
| Entity set (Web API) | `msdyn_suggestionsellerpriorities` |
| Primary id attribute | `msdyn_suggestionsellerpriorityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionsellerpriorities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionsellerpriorities(<guid>)
POST /api/data/v9.2/msdyn_suggestionsellerpriorities
PATCH /api/data/v9.2/msdyn_suggestionsellerpriorities(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionsellerpriorities(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_priorityvalue`, `msdyn_sellerxml`, `msdyn_suggestionassignmentruleid`, `msdyn_suggestionsellerpriorityid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionsellerpriority_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionsellerpriority_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionsellerpriority_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionsellerpriority_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_suggestionsellerpriority` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_suggestionsellerpriority` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_suggestionsellerpriority` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_suggestionsellerpriority` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_suggestionassignmentrule_suggestionsellerpriority_suggestionassignmentruleid` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `msdyn_suggestionassignmentruleid` | `msdyn_suggestionassignmentruleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionsellerpriority_SyncErrors` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_DuplicateMatchingRecord` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_DuplicateBaseRecord` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `baserecordid` | `baserecordid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_AsyncOperations` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_MailboxTrackingFolders` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_UserEntityInstanceDatas` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `objectid` | `objectid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_ProcessSession` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_BulkDeleteFailures` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionsellerpriority` |
| `msdyn_suggestionsellerpriority_PrincipalObjectAttributeAccesses` | [msdyn_suggestionsellerpriority](msdyn_suggestionsellerpriority.md) | `objectid` | `objectid_msdyn_suggestionsellerpriority` |


## Source

Generated from [msdyn_suggestionsellerpriority (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestionsellerpriority')) on 2026-05-07.