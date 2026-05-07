---
logical: "msdyn_salesinsightssettings"
display: "salesinsightssettings"
entitySetName: "msdyn_salesinsightssettings"
primaryId: "msdyn_salesinsightssettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_islicensepurchased`, `msdyn_isoctpreviewenabled`, `msdyn_ispreviewenabled`, `msdyn_name`, `msdyn_salesinsightssettingsId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesinsightssettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesinsightssettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesinsightssettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesinsightssettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesinsightssettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salesinsightssettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesinsightssettings` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesinsightssettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesinsightssettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesinsightssettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesinsightssettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesinsightssettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesinsightssettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesinsightssettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesinsightssettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesinsightssettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesinsightssettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesinsightssettings.md) on 2026-05-06.