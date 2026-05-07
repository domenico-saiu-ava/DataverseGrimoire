---
logical: "msdyn_csadminconfig"
display: "CSAdminConfig"
entitySetName: "msdyn_csadminconfigs"
primaryId: "msdyn_csadminconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# CSAdminConfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_csadminconfig` |
| Display name | CSAdminConfig |
| Display (plural) | CSAdminConfigs |
| Schema name | `msdyn_csadminconfig` |
| Entity set (Web API) | `msdyn_csadminconfigs` |
| Primary id attribute | `msdyn_csadminconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_csadminconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_csadminconfigs(<guid>)
POST /api/data/v9.2/msdyn_csadminconfigs
PATCH /api/data/v9.2/msdyn_csadminconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_csadminconfigs(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_configdata`, `msdyn_configtype`, `msdyn_csadminconfigId`, `msdyn_name`, `msdyn_setupstatus`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_csadminconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_csadminconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_csadminconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_csadminconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_csadminconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_csadminconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_csadminconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_csadminconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_csadminconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_csadminconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_csadminconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_csadminconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_csadminconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_csadminconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_csadminconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_csadminconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_csadminconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_csadminconfig.md) on 2026-05-06.