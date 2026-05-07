---
logical: "msdyn_wkwconfig"
display: "wkwconfig"
entitySetName: "msdyn_wkwconfigs"
primaryId: "msdyn_wkwconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# wkwconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wkwconfig` |
| Display name | wkwconfig |
| Display (plural) | wkwconfigs |
| Schema name | `msdyn_wkwconfig` |
| Entity set (Web API) | `msdyn_wkwconfigs` |
| Primary id attribute | `msdyn_wkwconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wkwconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wkwconfigs(<guid>)
POST /api/data/v9.2/msdyn_wkwconfigs
PATCH /api/data/v9.2/msdyn_wkwconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_wkwconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_currentstatus`, `msdyn_emailtemplateid`, `msdyn_isfrecomplete`, `msdyn_isWKWEnabled`, `msdyn_name`, `msdyn_wkwconfigId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_wkwconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_wkwconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wkwconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wkwconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wkwconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_wkwconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_wkwconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_wkwconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wkwconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_wkwconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_wkwconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_wkwconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_wkwconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_wkwconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_wkwconfig.md) on 2026-05-06.