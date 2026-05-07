---
logical: "msdyn_actioncardrolesetting"
display: "Action Card Role Setting"
entitySetName: "msdyn_actioncardrolesettings"
primaryId: "msdyn_actioncardrolesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actioncardrolesettingId`, `msdyn_cardtypeid`, `msdyn_IsDisabled`, `msdyn_name`, `msdyn_Roleid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_actioncardrolesetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_actioncardrolesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_actioncardrolesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_actioncardrolesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_actioncardrolesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_msdyn_roleid` | [role](role.md) | `msdyn_roleid` | `msdyn_Roleid` |
| `owner_msdyn_actioncardrolesetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_actioncardrolesetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_actioncardrolesetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_actioncardrolesetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardrolesetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardrolesetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardrolesetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_actioncardrolesetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_actioncardrolesetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_actioncardrolesetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_actioncardrolesetting.md) on 2026-05-06.