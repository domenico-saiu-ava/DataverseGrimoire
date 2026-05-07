---
logical: "msdyn_salesinsightssettings"
display: "salesinsightssettings"
entitySetName: "msdyn_salesinsightssettings"
primaryId: "msdyn_salesinsightssettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# salesinsightssettings

Storing settings for studio feature

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesinsightssettings` |
| Display name | salesinsightssettings |
| Display (plural) | salesinsightssettings |
| Schema name | `msdyn_salesinsightssettings` |
| Entity set (Web API) | `msdyn_salesinsightssettings` |
| Primary id attribute | `msdyn_salesinsightssettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesinsightssettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesinsightssettings(<guid>)
POST /api/data/v9.2/msdyn_salesinsightssettings
PATCH /api/data/v9.2/msdyn_salesinsightssettings(<guid>)
DELETE /api/data/v9.2/msdyn_salesinsightssettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_islicensepurchased`, `msdyn_isoctpreviewenabled`, `msdyn_ispreviewenabled`, `msdyn_name`, `msdyn_salesinsightssettingsid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesinsightssettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesinsightssettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesinsightssettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesinsightssettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesinsightssettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesinsightssettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesinsightssettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesinsightssettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesinsightssettings_SyncErrors` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_DuplicateMatchingRecord` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_DuplicateBaseRecord` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `baserecordid` | `baserecordid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_AsyncOperations` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_MailboxTrackingFolders` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_UserEntityInstanceDatas` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `objectid` | `objectid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_ProcessSession` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_BulkDeleteFailures` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesinsightssettings` |
| `msdyn_salesinsightssettings_PrincipalObjectAttributeAccesses` | [msdyn_salesinsightssettings](msdyn_salesinsightssettings.md) | `objectid` | `objectid_msdyn_salesinsightssettings` |


## Source

Generated from [msdyn_salesinsightssettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesinsightssettings')) on 2026-05-07.