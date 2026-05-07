---
logical: "msdyn_workqueueusersetting"
display: "Work list user setting"
entitySetName: "msdyn_workqueueusersettings"
primaryId: "msdyn_workqueueusersettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Work list user setting

Entity created to store work list user setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_workqueueusersetting` |
| Display name | Work list user setting |
| Display (plural) | Work list user settings |
| Schema name | `msdyn_workqueueusersetting` |
| Entity set (Web API) | `msdyn_workqueueusersettings` |
| Primary id attribute | `msdyn_workqueueusersettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_workqueueusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_workqueueusersettings(<guid>)
POST /api/data/v9.2/msdyn_workqueueusersettings
PATCH /api/data/v9.2/msdyn_workqueueusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_workqueueusersettings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actiononmarkcomplete`, `msdyn_actiononskip`, `msdyn_linkingconfiguration`, `msdyn_name`, `msdyn_sellercardlayout`, `msdyn_sellerfilterconfiguration`, `msdyn_sellersortconfiguration`, `msdyn_suggestionsellerfilterconfiguration`, `msdyn_userid`, `msdyn_workqueueusersettingId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_workqueueusersetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_workqueueusersetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_workqueueusersetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_workqueueusersetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_workqueueusersetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_workqueueusersetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_workqueueusersetting` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_workqueueusersetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_workqueueusersetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueueusersetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueueusersetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_workqueueusersetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_workqueueusersetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueueusersetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_workqueueusersetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_workqueueusersetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_workqueueusersetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_workqueueusersetting.md) on 2026-05-06.