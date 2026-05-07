---
logical: "msdyn_siconfig"
display: "siconfig"
entitySetName: "msdyn_siconfigs"
primaryId: "msdyn_siconfigid"
primaryName: "msdyn_version"
tableType: "Standard"
ownership: "UserOwned"
---

# siconfig

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_siconfig` |
| Display name | siconfig |
| Display (plural) | siconfig |
| Schema name | `msdyn_siconfig` |
| Entity set (Web API) | `msdyn_siconfigs` |
| Primary id attribute | `msdyn_siconfigid` |
| Primary name attribute | `msdyn_version` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_siconfigs?$select=msdyn_version&$top=10
GET /api/data/v9.2/msdyn_siconfigs(<guid>)
POST /api/data/v9.2/msdyn_siconfigs
PATCH /api/data/v9.2/msdyn_siconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_siconfigs(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_siconfigId`, `msdyn_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_siconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_siconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_siconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_siconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_siconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_siconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_siconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_siconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_siconfig_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_siconfig_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_siconfig_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_siconfig_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_siconfig_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_siconfig_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_siconfig_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_siconfig_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_siconfig.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_siconfig.md) on 2026-05-06.