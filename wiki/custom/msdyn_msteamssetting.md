---
logical: "msdyn_msteamssetting"
display: "msdyn_msteamssetting"
entitySetName: "msdyn_msteamssettings"
primaryId: "msdyn_msteamssettingid"
primaryName: "msdyn_msteamssettingsname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_msteamssetting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_msteamssetting` |
| Display name | msdyn_msteamssetting |
| Display (plural) | msdyn_msteamssetting |
| Schema name | `msdyn_msteamssetting` |
| Entity set (Web API) | `msdyn_msteamssettings` |
| Primary id attribute | `msdyn_msteamssettingid` |
| Primary name attribute | `msdyn_msteamssettingsname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_msteamssettings?$select=msdyn_msteamssettingsname&$top=10
GET /api/data/v9.2/msdyn_msteamssettings(<guid>)
POST /api/data/v9.2/msdyn_msteamssettings
PATCH /api/data/v9.2/msdyn_msteamssettings(<guid>)
DELETE /api/data/v9.2/msdyn_msteamssettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **9**

### Writable

`createdby`, `importsequencenumber`, `msdyn_msteamssettingid`, `msdyn_msteamssettingsid`, `msdyn_msteamssettingsname`, `msdyn_tabserviceurl`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_msteamssetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_msteamssetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_msteamssetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_msteamssetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_msteamssetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_msteamssetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_msteamssetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_msteamssetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msteamssetting_SyncErrors` | [msdyn_msteamssetting](msdyn_msteamssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssetting` |
| `msdyn_msteamssetting_AsyncOperations` | [msdyn_msteamssetting](msdyn_msteamssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssetting` |
| `msdyn_msteamssetting_MailboxTrackingFolders` | [msdyn_msteamssetting](msdyn_msteamssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssetting` |
| `msdyn_msteamssetting_UserEntityInstanceDatas` | [msdyn_msteamssetting](msdyn_msteamssetting.md) | `objectid` | `objectid_msdyn_msteamssetting` |
| `msdyn_msteamssetting_ProcessSession` | [msdyn_msteamssetting](msdyn_msteamssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssetting` |
| `msdyn_msteamssetting_BulkDeleteFailures` | [msdyn_msteamssetting](msdyn_msteamssetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_msteamssetting` |
| `msdyn_msteamssetting_PrincipalObjectAttributeAccesses` | [msdyn_msteamssetting](msdyn_msteamssetting.md) | `objectid` | `objectid_msdyn_msteamssetting` |


## Source

Generated from [msdyn_msteamssetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_msteamssetting')) on 2026-05-07.