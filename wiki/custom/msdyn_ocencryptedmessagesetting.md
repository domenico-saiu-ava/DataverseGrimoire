---
logical: "msdyn_ocencryptedmessagesetting"
display: "Impostazione messaggi crittografati"
entitySetName: "msdyn_ocencryptedmessagesettings"
primaryId: "msdyn_ocencryptedmessagesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione messaggi crittografati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocencryptedmessagesetting` |
| Display name | Impostazione messaggi crittografati |
| Display (plural) | Impostazione messaggi crittografati |
| Schema name | `msdyn_ocencryptedmessagesetting` |
| Entity set (Web API) | `msdyn_ocencryptedmessagesettings` |
| Primary id attribute | `msdyn_ocencryptedmessagesettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocencryptedmessagesettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocencryptedmessagesettings(<guid>)
POST /api/data/v9.2/msdyn_ocencryptedmessagesettings
PATCH /api/data/v9.2/msdyn_ocencryptedmessagesettings(<guid>)
DELETE /api/data/v9.2/msdyn_ocencryptedmessagesettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_ocencryptedmessagesettingid`, `msdyn_publickeyid`, `msdyn_publickeyurl`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocencryptedmessagesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocencryptedmessagesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocencryptedmessagesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocencryptedmessagesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocencryptedmessagesetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocencryptedmessagesetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocencryptedmessagesetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocencryptedmessagesetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocencryptedmessagesetting_SyncErrors` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_DuplicateMatchingRecord` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_DuplicateBaseRecord` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `baserecordid` | `baserecordid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_AsyncOperations` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_MailboxTrackingFolders` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_UserEntityInstanceDatas` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `objectid` | `objectid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_ProcessSession` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_BulkDeleteFailures` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocencryptedmessagesetting` |
| `msdyn_ocencryptedmessagesetting_PrincipalObjectAttributeAccesses` | [msdyn_ocencryptedmessagesetting](msdyn_ocencryptedmessagesetting.md) | `objectid` | `objectid_msdyn_ocencryptedmessagesetting` |


## Source

Generated from [msdyn_ocencryptedmessagesetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocencryptedmessagesetting')) on 2026-05-07.