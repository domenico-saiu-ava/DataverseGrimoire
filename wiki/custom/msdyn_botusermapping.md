---
logical: "msdyn_botusermapping"
display: "Mapping utente del bot"
entitySetName: "msdyn_botusermappings"
primaryId: "msdyn_botusermappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Mapping utente del bot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_botusermapping` |
| Display name | Mapping utente del bot |
| Display (plural) | Mapping utente del bot |
| Schema name | `msdyn_botusermapping` |
| Entity set (Web API) | `msdyn_botusermappings` |
| Primary id attribute | `msdyn_botusermappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_botusermappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_botusermappings(<guid>)
POST /api/data/v9.2/msdyn_botusermappings
PATCH /api/data/v9.2/msdyn_botusermappings(<guid>)
DELETE /api/data/v9.2/msdyn_botusermappings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_botapplicationid`, `msdyn_botusermappingid`, `msdyn_name`, `msdyn_owningenvironmentid`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_botusermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_botusermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_botusermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_botusermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_botusermapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_botusermapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_botusermapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_botusermapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_systemuser_botusermapping_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_botusermapping_SyncErrors` | [msdyn_botusermapping](msdyn_botusermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_botusermapping` |
| `msdyn_botusermapping_DuplicateMatchingRecord` | [msdyn_botusermapping](msdyn_botusermapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_botusermapping` |
| `msdyn_botusermapping_DuplicateBaseRecord` | [msdyn_botusermapping](msdyn_botusermapping.md) | `baserecordid` | `baserecordid_msdyn_botusermapping` |
| `msdyn_botusermapping_AsyncOperations` | [msdyn_botusermapping](msdyn_botusermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_botusermapping` |
| `msdyn_botusermapping_MailboxTrackingFolders` | [msdyn_botusermapping](msdyn_botusermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_botusermapping` |
| `msdyn_botusermapping_UserEntityInstanceDatas` | [msdyn_botusermapping](msdyn_botusermapping.md) | `objectid` | `objectid_msdyn_botusermapping` |
| `msdyn_botusermapping_ProcessSession` | [msdyn_botusermapping](msdyn_botusermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_botusermapping` |
| `msdyn_botusermapping_BulkDeleteFailures` | [msdyn_botusermapping](msdyn_botusermapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_botusermapping` |
| `msdyn_botusermapping_PrincipalObjectAttributeAccesses` | [msdyn_botusermapping](msdyn_botusermapping.md) | `objectid` | `objectid_msdyn_botusermapping` |


## Source

Generated from [msdyn_botusermapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_botusermapping')) on 2026-05-07.