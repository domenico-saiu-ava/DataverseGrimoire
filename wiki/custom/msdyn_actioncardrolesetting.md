---
logical: "msdyn_actioncardrolesetting"
display: "Action Card Role Setting"
entitySetName: "msdyn_actioncardrolesettings"
primaryId: "msdyn_actioncardrolesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Action Card Role Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_actioncardrolesetting` |
| Display name | Action Card Role Setting |
| Display (plural) | Action Card Role Settings |
| Schema name | `msdyn_actioncardrolesetting` |
| Entity set (Web API) | `msdyn_actioncardrolesettings` |
| Primary id attribute | `msdyn_actioncardrolesettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_actioncardrolesettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_actioncardrolesettings(<guid>)
POST /api/data/v9.2/msdyn_actioncardrolesettings
PATCH /api/data/v9.2/msdyn_actioncardrolesettings(<guid>)
DELETE /api/data/v9.2/msdyn_actioncardrolesettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actioncardrolesettingid`, `msdyn_cardtypeid`, `msdyn_isdisabled`, `msdyn_name`, `msdyn_roleid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_actioncardrolesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardrolesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardrolesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardrolesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_actioncardrolesetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_actioncardrolesetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_actioncardrolesetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_actioncardrolesetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_cardtypeid` | [cardtype](cardtype.md) | `msdyn_cardtypeid` | `msdyn_cardtypeid` |
| `lk_msdyn_roleid` | [role](role.md) | `msdyn_roleid` | `msdyn_Roleid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardrolesetting_SyncErrors` | [msdyn_actioncardrolesetting](msdyn_actioncardrolesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardrolesetting` |
| `msdyn_actioncardrolesetting_AsyncOperations` | [msdyn_actioncardrolesetting](msdyn_actioncardrolesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardrolesetting` |
| `msdyn_actioncardrolesetting_MailboxTrackingFolders` | [msdyn_actioncardrolesetting](msdyn_actioncardrolesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardrolesetting` |
| `msdyn_actioncardrolesetting_UserEntityInstanceDatas` | [msdyn_actioncardrolesetting](msdyn_actioncardrolesetting.md) | `objectid` | `objectid_msdyn_actioncardrolesetting` |
| `msdyn_actioncardrolesetting_ProcessSession` | [msdyn_actioncardrolesetting](msdyn_actioncardrolesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardrolesetting` |
| `msdyn_actioncardrolesetting_BulkDeleteFailures` | [msdyn_actioncardrolesetting](msdyn_actioncardrolesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_actioncardrolesetting` |
| `msdyn_actioncardrolesetting_PrincipalObjectAttributeAccesses` | [msdyn_actioncardrolesetting](msdyn_actioncardrolesetting.md) | `objectid` | `objectid_msdyn_actioncardrolesetting` |


## Source

Generated from [msdyn_actioncardrolesetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_actioncardrolesetting')) on 2026-05-07.