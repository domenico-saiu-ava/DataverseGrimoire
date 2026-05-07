---
logical: "msdyn_emailclassificationcategory"
display: "emailclassificationcategory"
entitySetName: "msdyn_emailclassificationcategories"
primaryId: "msdyn_emailclassificationcategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# emailclassificationcategory

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_emailclassificationcategory` |
| Display name | emailclassificationcategory |
| Display (plural) | Record emailclassificationcategory |
| Schema name | `msdyn_emailclassificationcategory` |
| Entity set (Web API) | `msdyn_emailclassificationcategories` |
| Primary id attribute | `msdyn_emailclassificationcategoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_emailclassificationcategories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_emailclassificationcategories(<guid>)
POST /api/data/v9.2/msdyn_emailclassificationcategories
PATCH /api/data/v9.2/msdyn_emailclassificationcategories(<guid>)
DELETE /api/data/v9.2/msdyn_emailclassificationcategories(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_activeversion`, `msdyn_categorystatus`, `msdyn_emailclassificationcategoryid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_emailclassificationcategory_msdyn_ActiveVersion_msdyn_emailclassificationcategoryversion` | [msdyn_emailclassificationcategoryversion](msdyn_emailclassificationcategoryversion.md) | `msdyn_activeversion` | `msdyn_ActiveVersion` |
| `lk_msdyn_emailclassificationcategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_emailclassificationcategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_emailclassificationcategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_emailclassificationcategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_emailclassificationcategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_emailclassificationcategory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_emailclassificationcategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_emailclassificationcategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_emailclassificationcategory_SyncErrors` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_DuplicateMatchingRecord` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_DuplicateBaseRecord` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `baserecordid` | `baserecordid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_AsyncOperations` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_MailboxTrackingFolders` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_UserEntityInstanceDatas` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `objectid` | `objectid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_ProcessSession` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_BulkDeleteFailures` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_emailclassificationcategory` |
| `msdyn_emailclassificationcategory_PrincipalObjectAttributeAccesses` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `objectid` | `objectid_msdyn_emailclassificationcategory` |
| `msdyn_Email_msdyn_emailclassificationcategory_msdyn_emailclassificationcategory` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `msdyn_emailclassificationcategory` | `msdyn_emailclassificationcategory_Email` |
| `msdyn_emailclassificationcategory_msdyn_emailclassificationcategory_msdyn_emailclassificationc` | [msdyn_emailclassificationcategory](msdyn_emailclassificationcategory.md) | `msdyn_emailclassificationcategory` | `msdyn_emailclassificationcategory` |


## Source

Generated from [msdyn_emailclassificationcategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_emailclassificationcategory')) on 2026-05-07.