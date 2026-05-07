---
logical: "msdyn_omnichannelsyncconfig"
display: "Omnichannel Sync Config"
entitySetName: "msdyn_omnichannelsyncconfigs"
primaryId: "msdyn_omnichannelsyncconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Omnichannel Sync Config

Config for entities to be synced to Omnichannel

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_omnichannelsyncconfig` |
| Display name | Omnichannel Sync Config |
| Display (plural) | Omnichannel Sync Configs |
| Schema name | `msdyn_omnichannelsyncconfig` |
| Entity set (Web API) | `msdyn_omnichannelsyncconfigs` |
| Primary id attribute | `msdyn_omnichannelsyncconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_omnichannelsyncconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_omnichannelsyncconfigs(<guid>)
POST /api/data/v9.2/msdyn_omnichannelsyncconfigs
PATCH /api/data/v9.2/msdyn_omnichannelsyncconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_omnichannelsyncconfigs(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_configJson`, `msdyn_name`, `msdyn_omnichannelsyncconfigId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_omnichannelsyncconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_omnichannelsyncconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_omnichannelsyncconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_omnichannelsyncconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_omnichannelsyncconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_omnichannelsyncconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_omnichannelsyncconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_omnichannelsyncconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_omnichannelsyncconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelsyncconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelsyncconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_omnichannelsyncconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_omnichannelsyncconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelsyncconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_omnichannelsyncconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelsyncconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_omnichannelsyncconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_omnichannelsyncconfig.md) on 2026-05-06.