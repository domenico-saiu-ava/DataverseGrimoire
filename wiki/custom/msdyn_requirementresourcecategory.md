---
logical: "msdyn_requirementresourcecategory"
display: "Categoria requisito di risorsa"
entitySetName: "msdyn_requirementresourcecategories"
primaryId: "msdyn_requirementresourcecategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Categoria requisito di risorsa

Categoria requisito di risorsa

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_requirementresourcecategory` |
| Display name | Categoria requisito di risorsa |
| Display (plural) | Categoria requisito di risorsa |
| Schema name | `msdyn_requirementresourcecategory` |
| Entity set (Web API) | `msdyn_requirementresourcecategories` |
| Primary id attribute | `msdyn_requirementresourcecategoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_requirementresourcecategories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_requirementresourcecategories(<guid>)
POST /api/data/v9.2/msdyn_requirementresourcecategories
PATCH /api/data/v9.2/msdyn_requirementresourcecategories(<guid>)
DELETE /api/data/v9.2/msdyn_requirementresourcecategories(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_requirementresourcecategoryid`, `msdyn_resourcecategory`, `msdyn_resourcerequirement`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookableresourcecategory_requirementresourcecategory_ResourceCategory` | [bookableresourcecategory](bookableresourcecategory.md) | `msdyn_resourcecategory` | `msdyn_ResourceCategory` |
| `msdyn_resourcerequirement_requirementresourcecategory_resourcerequirement` | [msdyn_resourcerequirement](msdyn_resourcerequirement.md) | `msdyn_resourcerequirement` | `msdyn_ResourceRequirement` |
| `lk_msdyn_requirementresourcecategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_requirementresourcecategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_requirementresourcecategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_requirementresourcecategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_requirementresourcecategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_requirementresourcecategory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_requirementresourcecategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_requirementresourcecategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_requirementresourcecategory_DuplicateMatchingRecord` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_DuplicateBaseRecord` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `baserecordid` | `baserecordid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_Annotations` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `objectid` | `objectid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_SyncErrors` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_AsyncOperations` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_MailboxTrackingFolders` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_UserEntityInstanceDatas` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `objectid` | `objectid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_ProcessSession` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_BulkDeleteFailures` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_requirementresourcecategory` |
| `msdyn_requirementresourcecategory_PrincipalObjectAttributeAccesses` | [msdyn_requirementresourcecategory](msdyn_requirementresourcecategory.md) | `objectid` | `objectid_msdyn_requirementresourcecategory` |


## Source

Generated from [msdyn_requirementresourcecategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_requirementresourcecategory')) on 2026-05-07.