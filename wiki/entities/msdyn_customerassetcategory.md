---
logical: "msdyn_customerassetcategory"
display: "Customer Asset Category"
entitySetName: "msdyn_customerassetcategories"
primaryId: "msdyn_customerassetcategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Asset Category

The Category of Customer Asset.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerassetcategory` |
| Display name | Customer Asset Category |
| Display (plural) | Customer Asset Categories |
| Schema name | `msdyn_customerassetcategory` |
| Entity set (Web API) | `msdyn_customerassetcategories` |
| Primary id attribute | `msdyn_customerassetcategoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerassetcategories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customerassetcategories(<guid>)
POST /api/data/v9.2/msdyn_customerassetcategories
PATCH /api/data/v9.2/msdyn_customerassetcategories(<guid>)
DELETE /api/data/v9.2/msdyn_customerassetcategories(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_customerassetcategoryId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customerassetcategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_customerassetcategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerassetcategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerassetcategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerassetcategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_customerassetcategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customerassetcategory` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customerassetcategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerassetcategory_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetcategory_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetcategory_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customerassetcategory_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customerassetcategory_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetcategory_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerassetcategory_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetcategory_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_customerassetcategory_msdyn_assetcategorytemplateassociation_customerassetproperty` | _n/a_ | `msdyn_customerassetcategory` | _n/a_ |
| `msdyn_msdyn_customerassetcategory_msdyn_customerasset_CustomerAssetCategory` | _n/a_ | `msdyn_customerassetcategory` | _n/a_ |


## Source

Generated from [msdyn_customerassetcategory.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customerassetcategory.md) on 2026-05-06.