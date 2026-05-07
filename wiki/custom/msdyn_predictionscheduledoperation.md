---
logical: "msdyn_predictionscheduledoperation"
display: "Operazione pianificata di previsione"
entitySetName: "msdyn_predictionscheduledoperations"
primaryId: "msdyn_predictionscheduledoperationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Operazione pianificata di previsione

Contiene i metadati relativi alle operazioni pianificate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictionscheduledoperation` |
| Display name | Operazione pianificata di previsione |
| Display (plural) | Operazioni pianificate di previsione |
| Schema name | `msdyn_predictionscheduledoperation` |
| Entity set (Web API) | `msdyn_predictionscheduledoperations` |
| Primary id attribute | `msdyn_predictionscheduledoperationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictionscheduledoperations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictionscheduledoperations(<guid>)
POST /api/data/v9.2/msdyn_predictionscheduledoperations
PATCH /api/data/v9.2/msdyn_predictionscheduledoperations(<guid>)
DELETE /api/data/v9.2/msdyn_predictionscheduledoperations(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionaldetails`, `msdyn_created`, `msdyn_name`, `msdyn_nextscheduledtime`, `msdyn_operationconfig`, `msdyn_operationid`, `msdyn_operationtype`, `msdyn_predictionscheduledoperationid`, `msdyn_regardingobjectid`, `msdyn_retrycounter`, `msdyn_scheduledintervalinminutes`, `msdyn_schedulingcount`, `msdyn_status`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictionscheduledoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictionscheduledoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictionscheduledoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictionscheduledoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_predictionscheduledoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_predictionscheduledoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_predictionscheduledoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_predictionscheduledoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictionscheduledoperation_SyncErrors` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_DuplicateMatchingRecord` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_DuplicateBaseRecord` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `baserecordid` | `baserecordid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_AsyncOperations` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_MailboxTrackingFolders` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_UserEntityInstanceDatas` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `objectid` | `objectid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_ProcessSession` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_BulkDeleteFailures` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictionscheduledoperation` |
| `msdyn_predictionscheduledoperation_PrincipalObjectAttributeAccesses` | [msdyn_predictionscheduledoperation](msdyn_predictionscheduledoperation.md) | `objectid` | `objectid_msdyn_predictionscheduledoperation` |


## Source

Generated from [msdyn_predictionscheduledoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_predictionscheduledoperation')) on 2026-05-07.