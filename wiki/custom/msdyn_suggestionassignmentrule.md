---
logical: "msdyn_suggestionassignmentrule"
display: "Suggestion Assignment Rule"
entitySetName: "msdyn_suggestionassignmentrules"
primaryId: "msdyn_suggestionassignmentruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Suggestion Assignment Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionassignmentrule` |
| Display name | Suggestion Assignment Rule |
| Display (plural) | Suggestion Assignment Rules |
| Schema name | `msdyn_suggestionassignmentrule` |
| Entity set (Web API) | `msdyn_suggestionassignmentrules` |
| Primary id attribute | `msdyn_suggestionassignmentruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionassignmentrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionassignmentrules(<guid>)
POST /api/data/v9.2/msdyn_suggestionassignmentrules
PATCH /api/data/v9.2/msdyn_suggestionassignmentrules(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionassignmentrules(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_assignmentruleid`, `msdyn_associatedprimaryentity`, `msdyn_name`, `msdyn_sellerteamtype`, `msdyn_suggestionassignmentruleid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionassignmentrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionassignmentrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionassignmentrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionassignmentrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_suggestionassignmentrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_suggestionassignmentrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_suggestionassignmentrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_suggestionassignmentrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_assignmentrule_suggestionassignmentrule_lookup` | [msdyn_assignmentrule](msdyn_assignmentrule.md) | `msdyn_assignmentruleid` | `msdyn_assignmentruleid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionassignmentrule_SyncErrors` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_DuplicateMatchingRecord` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_DuplicateBaseRecord` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `baserecordid` | `baserecordid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_AsyncOperations` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_MailboxTrackingFolders` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_UserEntityInstanceDatas` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `objectid` | `objectid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_ProcessSession` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_BulkDeleteFailures` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_PrincipalObjectAttributeAccesses` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `objectid` | `objectid_msdyn_suggestionassignmentrule` |
| `msdyn_suggestionassignmentrule_suggestionsellerpriority_suggestionassignmentruleid` | [msdyn_suggestionassignmentrule](msdyn_suggestionassignmentrule.md) | `msdyn_suggestionassignmentruleid` | `msdyn_suggestionassignmentruleid` |


## Source

Generated from [msdyn_suggestionassignmentrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestionassignmentrule')) on 2026-05-07.