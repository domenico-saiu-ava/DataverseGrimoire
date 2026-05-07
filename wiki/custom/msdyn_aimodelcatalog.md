---
logical: "msdyn_aimodelcatalog"
display: "AI Model Catalog"
entitySetName: "msdyn_aimodelcatalogs"
primaryId: "msdyn_aimodelcatalogid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Model Catalog

This table contains records of AI Model Catalogs used for BYOM

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aimodelcatalog` |
| Display name | AI Model Catalog |
| Display (plural) | aimodelcatalogs |
| Schema name | `msdyn_aimodelcatalog` |
| Entity set (Web API) | `msdyn_aimodelcatalogs` |
| Primary id attribute | `msdyn_aimodelcatalogid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aimodelcatalogs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aimodelcatalogs(<guid>)
POST /api/data/v9.2/msdyn_aimodelcatalogs
PATCH /api/data/v9.2/msdyn_aimodelcatalogs(<guid>)
DELETE /api/data/v9.2/msdyn_aimodelcatalogs(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_aimodelcatalogid`, `msdyn_connectionreferenceid`, `msdyn_modelconfiguration`, `msdyn_modeldescription`, `msdyn_modelsubmissiontype`, `msdyn_modeltasktype`, `msdyn_name`, `msdyn_providertype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_basemodelname`, `msdyn_canuseconnection`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aimodelcatalog_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aimodelcatalog_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aimodelcatalog_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aimodelcatalog_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aimodelcatalog` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aimodelcatalog` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aimodelcatalog` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aimodelcatalog` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_connectionreference_msdyn_aimodelcatalog_ConnectionReferenceId` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_connectionreferenceid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aimodelcatalog_SyncErrors` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_DuplicateMatchingRecord` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_DuplicateBaseRecord` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `baserecordid` | `baserecordid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_AsyncOperations` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_MailboxTrackingFolders` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_UserEntityInstanceDatas` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `objectid` | `objectid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_ProcessSession` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_BulkDeleteFailures` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_PrincipalObjectAttributeAccesses` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `objectid` | `objectid_msdyn_aimodelcatalog` |
| `msdyn_aimodelcatalog_msdyn_aimodel` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `msdyn_aimodelcatalog` | `msdyn_AIModelCatalog` |


## Source

Generated from [msdyn_aimodelcatalog (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aimodelcatalog')) on 2026-05-07.