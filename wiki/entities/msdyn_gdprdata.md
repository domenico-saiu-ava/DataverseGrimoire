---
logical: "msdyn_gdprdata"
display: "GDPRData"
entitySetName: "msdyn_gdprdataset"
primaryId: "msdyn_gdprdataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# GDPRData

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_gdprdata` |
| Display name | GDPRData |
| Display (plural) | GDPRData |
| Schema name | `msdyn_gdprdata` |
| Entity set (Web API) | `msdyn_gdprdataset` |
| Primary id attribute | `msdyn_gdprdataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_gdprdataset?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_gdprdataset(<guid>)
POST /api/data/v9.2/msdyn_gdprdataset
PATCH /api/data/v9.2/msdyn_gdprdataset(<guid>)
DELETE /api/data/v9.2/msdyn_gdprdataset(<guid>)
```

## Attributes

Writable: **14** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_Data`, `msdyn_DataHeader`, `msdyn_EntityId`, `msdyn_EntityType`, `msdyn_gdprdataId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_gdprdata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_gdprdata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_gdprdata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_gdprdata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_gdprdata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_gdprdata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_gdprdata` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_gdprdata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_gdprdata_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_gdprdata_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_gdprdata_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_gdprdata_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_gdprdata_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_gdprdata_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_gdprdata.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_gdprdata.md) on 2026-05-06.