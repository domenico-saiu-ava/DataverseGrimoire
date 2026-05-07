---
logical: "msdyn_evaluationcategory"
display: "Categoria valutazione"
entitySetName: "msdyn_evaluationcategories"
primaryId: "msdyn_evaluationcategoryid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Categoria valutazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_evaluationcategory` |
| Display name | Categoria valutazione |
| Display (plural) | Categorie valutazione |
| Schema name | `msdyn_EvaluationCategory` |
| Entity set (Web API) | `msdyn_evaluationcategories` |
| Primary id attribute | `msdyn_evaluationcategoryid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_evaluationcategories?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_evaluationcategories(<guid>)
POST /api/data/v9.2/msdyn_evaluationcategories
PATCH /api/data/v9.2/msdyn_evaluationcategories(<guid>)
DELETE /api/data/v9.2/msdyn_evaluationcategories(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_criteriaversionid`, `msdyn_description`, `msdyn_descriptionmetadataid`, `msdyn_evaluationcategoryid`, `msdyn_evaluationcriteria`, `msdyn_name`, `msdyn_namemetadataid`, `msdyn_parentcategoryid`, `msdyn_rootcategoryid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_evaluationcategory_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_evaluationcategory_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_evaluationcategory_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_evaluationcategory_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_evaluationcategory` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_evaluationcategory` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_evaluationcategory` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_evaluationcategory` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_evaluationcategory_EvaluationCriteria_msdyn_evaluationcriteria` | [msdyn_evaluationcriteria](msdyn_evaluationcriteria.md) | `msdyn_evaluationcriteria` | `msdyn_EvaluationCriteria` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_evaluationcategory_SyncErrors` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcategory` |
| `msdyn_evaluationcategory_AsyncOperations` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcategory` |
| `msdyn_evaluationcategory_MailboxTrackingFolders` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcategory` |
| `msdyn_evaluationcategory_UserEntityInstanceDatas` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `objectid` | `objectid_msdyn_evaluationcategory` |
| `msdyn_evaluationcategory_ProcessSession` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcategory` |
| `msdyn_evaluationcategory_BulkDeleteFailures` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `regardingobjectid` | `regardingobjectid_msdyn_evaluationcategory` |
| `msdyn_evaluationcategory_PrincipalObjectAttributeAccesses` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `objectid` | `objectid_msdyn_evaluationcategory` |
| `msdyn_evaluationquestion_EvaluationCategory_msdyn_evaluationcategory` | [msdyn_evaluationcategory](msdyn_evaluationcategory.md) | `msdyn_evaluationcategory` | `msdyn_EvaluationCategory` |


## Source

Generated from [msdyn_evaluationcategory (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_evaluationcategory')) on 2026-05-07.