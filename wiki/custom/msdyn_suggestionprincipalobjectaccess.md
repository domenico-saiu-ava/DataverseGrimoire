---
logical: "msdyn_suggestionprincipalobjectaccess"
display: "Suggestion Principal Object Access"
entitySetName: "msdyn_suggestionprincipalobjectaccesses"
primaryId: "msdyn_suggestionprincipalobjectaccessid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Suggestion Principal Object Access

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_suggestionprincipalobjectaccess` |
| Display name | Suggestion Principal Object Access |
| Display (plural) | suggestionprincipalobjectaccesses |
| Schema name | `msdyn_suggestionprincipalobjectaccess` |
| Entity set (Web API) | `msdyn_suggestionprincipalobjectaccesses` |
| Primary id attribute | `msdyn_suggestionprincipalobjectaccessid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses(<guid>)
POST /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses
PATCH /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses(<guid>)
DELETE /api/data/v9.2/msdyn_suggestionprincipalobjectaccesses(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accessrightsmask`, `msdyn_name`, `msdyn_principalid`, `msdyn_salessuggestionid`, `msdyn_suggestionprincipalobjectaccessid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_suggestionprincipalobjectaccess_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_suggestionprincipalobjectaccess_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_suggestionprincipalobjectaccess_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_suggestionprincipalobjectaccess_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_suggestionprincipalobjectaccess` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_suggestionprincipalobjectaccess` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_suggestionprincipalobjectaccess` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_suggestionprincipalobjectaccess` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salessuggestion_suggestionprincipalobjectaccess_salessuggestionid` | [msdyn_salessuggestion](msdyn_salessuggestion.md) | `msdyn_salessuggestionid` | `msdyn_salessuggestionid` |
| `msdyn_systemuser_suggestionprincipalobjectaccess_principalid` | [systemuser](systemuser.md) | `msdyn_principalid` | `msdyn_principalid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_suggestionprincipalobjectaccess_SyncErrors` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_AsyncOperations` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_MailboxTrackingFolders` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_UserEntityInstanceDatas` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `objectid` | `objectid_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_ProcessSession` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_BulkDeleteFailures` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `regardingobjectid` | `regardingobjectid_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_PrincipalObjectAttributeAccesses` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `objectid` | `objectid_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_connections1` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `record1id` | `record1id_msdyn_suggestionprincipalobjectaccess` |
| `msdyn_suggestionprincipalobjectaccess_connections2` | [msdyn_suggestionprincipalobjectaccess](msdyn_suggestionprincipalobjectaccess.md) | `record2id` | `record2id_msdyn_suggestionprincipalobjectaccess` |


## Source

Generated from [msdyn_suggestionprincipalobjectaccess (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_suggestionprincipalobjectaccess')) on 2026-05-07.