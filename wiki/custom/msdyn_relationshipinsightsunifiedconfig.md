---
logical: "msdyn_relationshipinsightsunifiedconfig"
display: "msdyn_relationshipinsightsunifiedconfig"
entitySetName: "msdyn_relationshipinsightsunifiedconfigs"
primaryId: "msdyn_relationshipinsightsunifiedconfigid"
primaryName: "new_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_relationshipinsightsunifiedconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_relationshipinsightsunifiedconfig` |
| Display name | msdyn_relationshipinsightsunifiedconfig |
| Display (plural) | msdyn_relationshipinsightsunifiedconfigs |
| Schema name | `msdyn_relationshipinsightsunifiedconfig` |
| Entity set (Web API) | `msdyn_relationshipinsightsunifiedconfigs` |
| Primary id attribute | `msdyn_relationshipinsightsunifiedconfigid` |
| Primary name attribute | `new_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_relationshipinsightsunifiedconfigs?$select=new_name&$top=10
GET /api/data/v9.2/msdyn_relationshipinsightsunifiedconfigs(<guid>)
POST /api/data/v9.2/msdyn_relationshipinsightsunifiedconfigs
PATCH /api/data/v9.2/msdyn_relationshipinsightsunifiedconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_relationshipinsightsunifiedconfigs(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_relationshipinsightsunifiedconfigid`, `msdyn_usenewconfigexperience`, `new_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_relationshipinsightsunifiedconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_relationshipinsightsunifiedconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_relationshipinsightsunifiedconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_relationshipinsightsunifiedconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_relationshipinsightsunifiedconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_relationshipinsightsunifiedconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_relationshipinsightsunifiedconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_relationshipinsightsunifiedconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_relationshipinsightsunifiedconfig_SyncErrors` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_DuplicateMatchingRecord` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_DuplicateBaseRecord` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `baserecordid` | `baserecordid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_AsyncOperations` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_MailboxTrackingFolders` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_UserEntityInstanceDatas` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `objectid` | `objectid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_ProcessSession` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_BulkDeleteFailures` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_relationshipinsightsunifiedconfig` |
| `msdyn_relationshipinsightsunifiedconfig_PrincipalObjectAttributeAccesses` | [msdyn_relationshipinsightsunifiedconfig](msdyn_relationshipinsightsunifiedconfig.md) | `objectid` | `objectid_msdyn_relationshipinsightsunifiedconfig` |


## Source

Generated from [msdyn_relationshipinsightsunifiedconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_relationshipinsightsunifiedconfig')) on 2026-05-07.