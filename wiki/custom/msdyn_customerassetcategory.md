---
logical: "msdyn_customerassetcategory"
display: "Categoria cespite cliente"
entitySetName: "msdyn_customerassetcategories"
primaryId: "msdyn_customerassetcategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Categoria cespite cliente

Categoria del cespite cliente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerassetcategory` |
| Display name | Categoria cespite cliente |
| Display (plural) | Categorie cespite cliente |
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

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_customerassetcategoryid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerassetcategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerassetcategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerassetcategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerassetcategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customerassetcategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customerassetcategory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customerassetcategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customerassetcategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerassetcategory_SyncErrors` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_DuplicateMatchingRecord` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_DuplicateBaseRecord` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `baserecordid` | `baserecordid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_AsyncOperations` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_MailboxTrackingFolders` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_UserEntityInstanceDatas` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `objectid` | `objectid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_ProcessSession` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_BulkDeleteFailures` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetcategory` |
| `msdyn_customerassetcategory_PrincipalObjectAttributeAccesses` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `objectid` | `objectid_msdyn_customerassetcategory` |
| `msdyn_msdyn_customerassetcategory_msdyn_assetcategorytemplateassociation_customerassetproperty` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `msdyn_customerassetcategory` | `msdyn_customerassetcategory` |
| `msdyn_msdyn_customerassetcategory_msdyn_customerasset_CustomerAssetCategory` | [msdyn_customerassetcategory](msdyn_customerassetcategory.md) | `msdyn_customerassetcategory` | `msdyn_CustomerAssetCategory` |


## Source

Generated from [msdyn_customerassetcategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customerassetcategory')) on 2026-05-07.