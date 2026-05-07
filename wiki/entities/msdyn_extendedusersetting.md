---
logical: "msdyn_extendedusersetting"
display: "Extended User Setting"
entitySetName: "msdyn_extendedusersettings"
primaryId: "msdyn_extendedusersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Extended User Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_extendedusersetting` |
| Display name | Extended User Setting |
| Display (plural) | Extended User Settings |
| Schema name | `msdyn_extendedusersetting` |
| Entity set (Web API) | `msdyn_extendedusersettings` |
| Primary id attribute | `msdyn_extendedusersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_extendedusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_extendedusersettings(<guid>)
POST /api/data/v9.2/msdyn_extendedusersettings
PATCH /api/data/v9.2/msdyn_extendedusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_extendedusersettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_CalendarId`, `msdyn_extendedusersettingId`, `msdyn_Name`, `msdyn_UserId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_extendedusersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_extendedusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_extendedusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_extendedusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_extendedusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_extendedusersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_extendedusersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_extendedusersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_extendedusersetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_extendedusersetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_extendedusersetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_extendedusersetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_extendedusersetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_extendedusersetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_extendedusersetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_extendedusersetting.md) on 2026-05-06.