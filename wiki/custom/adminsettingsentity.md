---
logical: "adminsettingsentity"
display: "admin_settings_entity"
entitySetName: "new_admin_settings_entities"
primaryId: "adminsettingsentityid"
primaryName: "new_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# admin_settings_entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adminsettingsentity` |
| Display name | admin_settings_entity |
| Display (plural) | admin_settings_entities |
| Schema name | `adminsettingsentity` |
| Entity set (Web API) | `new_admin_settings_entities` |
| Primary id attribute | `adminsettingsentityid` |
| Primary name attribute | `new_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/new_admin_settings_entities?$select=new_name&$top=10
GET /api/data/v9.2/new_admin_settings_entities(<guid>)
POST /api/data/v9.2/new_admin_settings_entities
PATCH /api/data/v9.2/new_admin_settings_entities(<guid>)
DELETE /api/data/v9.2/new_admin_settings_entities(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`adminsettingsentityid`, `importsequencenumber`, `new_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_adminsettingsentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adminsettingsentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adminsettingsentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adminsettingsentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_adminsettingsentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_adminsettingsentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_adminsettingsentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_adminsettingsentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adminsettingsentity_SyncErrors` | [adminsettingsentity](adminsettingsentity.md) | `regardingobjectid` | `regardingobjectid_adminsettingsentity` |
| `adminsettingsentity_DuplicateMatchingRecord` | [adminsettingsentity](adminsettingsentity.md) | `duplicaterecordid` | `duplicaterecordid_adminsettingsentity` |
| `adminsettingsentity_DuplicateBaseRecord` | [adminsettingsentity](adminsettingsentity.md) | `baserecordid` | `baserecordid_adminsettingsentity` |
| `adminsettingsentity_AsyncOperations` | [adminsettingsentity](adminsettingsentity.md) | `regardingobjectid` | `regardingobjectid_adminsettingsentity` |
| `adminsettingsentity_MailboxTrackingFolders` | [adminsettingsentity](adminsettingsentity.md) | `regardingobjectid` | `regardingobjectid_adminsettingsentity` |
| `adminsettingsentity_UserEntityInstanceDatas` | [adminsettingsentity](adminsettingsentity.md) | `objectid` | `objectid_adminsettingsentity` |
| `adminsettingsentity_ProcessSession` | [adminsettingsentity](adminsettingsentity.md) | `regardingobjectid` | `regardingobjectid_adminsettingsentity` |
| `adminsettingsentity_BulkDeleteFailures` | [adminsettingsentity](adminsettingsentity.md) | `regardingobjectid` | `regardingobjectid_adminsettingsentity` |
| `adminsettingsentity_PrincipalObjectAttributeAccesses` | [adminsettingsentity](adminsettingsentity.md) | `objectid` | `objectid_adminsettingsentity` |


## Source

Generated from [adminsettingsentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adminsettingsentity')) on 2026-05-07.