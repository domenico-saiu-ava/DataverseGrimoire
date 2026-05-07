---
logical: "adminsettingsentity"
display: "admin_settings_entity"
entitySetName: "new_admin_settings_entities"
primaryId: "adminsettingsentityid"
primaryName: "new_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **10** · Read-only: **12**

### Writable

`adminsettingsentityId`, `ImportSequenceNumber`, `new_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_adminsettingsentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_adminsettingsentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adminsettingsentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adminsettingsentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adminsettingsentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_adminsettingsentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_adminsettingsentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_adminsettingsentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adminsettingsentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adminsettingsentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adminsettingsentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `adminsettingsentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `adminsettingsentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adminsettingsentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `adminsettingsentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `adminsettingsentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [adminsettingsentity.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/adminsettingsentity.md) on 2026-05-06.