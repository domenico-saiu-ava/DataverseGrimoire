---
logical: "msdyn_emailclassificationcategoryversion"
display: "emailclassificationcategoryversion"
entitySetName: "msdyn_emailclassificationcategoryversions"
primaryId: "msdyn_emailclassificationcategoryversionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# emailclassificationcategoryversion

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_emailclassificationcategoryversion` |
| Display name | emailclassificationcategoryversion |
| Display (plural) | Record emailclassificationcategoryversion |
| Schema name | `msdyn_emailclassificationcategoryversion` |
| Entity set (Web API) | `msdyn_emailclassificationcategoryversions` |
| Primary id attribute | `msdyn_emailclassificationcategoryversionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_emailclassificationcategoryversions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_emailclassificationcategoryversions(<guid>)
POST /api/data/v9.2/msdyn_emailclassificationcategoryversions
PATCH /api/data/v9.2/msdyn_emailclassificationcategoryversions(<guid>)
DELETE /api/data/v9.2/msdyn_emailclassificationcategoryversions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_categorydescription`, `msdyn_categoryversion`, `msdyn_emailclassificationcategory`, `msdyn_emailclassificationcategoryversionid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_emailclassificationcategoryversion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_emailclassificationcategoryversion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_emailclassificationcategoryversion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_emailclassificationcategoryversion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_emailclassificationcategoryversion` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_emailclassificationcategoryversion` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_emailclassificationcategoryversion` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_emailclassificationcategoryversion` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_emailclassificationcategory_msdyn_emailclassificationcategory_msdyn_emailclassificationc` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `msdyn_emailclassificationcategory` | `msdyn_emailclassificationcategory` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_emailclassificationcategoryversion_SyncErrors` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_DuplicateMatchingRecord` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_DuplicateBaseRecord` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `baserecordid` | `baserecordid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_AsyncOperations` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_MailboxTrackingFolders` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_UserEntityInstanceDatas` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `objectid` | `objectid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_ProcessSession` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_BulkDeleteFailures` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategoryversion_PrincipalObjectAttributeAccesses` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `objectid` | `objectid_msdyn_emailclassificationcategoryversion` |
| `msdyn_emailclassificationcategory_msdyn_ActiveVersion_msdyn_emailclassificationcategoryversion` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `msdyn_activeversion` | `msdyn_ActiveVersion` |


## Source

Generated from [msdyn_emailclassificationcategoryversion (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_emailclassificationcategoryversion')) on 2026-05-07.