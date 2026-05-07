---
logical: "msdyn_consumingapplication"
display: "Applicazione di utilizzo"
entitySetName: "msdyn_consumingapplications"
primaryId: "msdyn_consumingapplicationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Applicazione di utilizzo

Applicazione di utilizzo con il canale unificato

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_consumingapplication` |
| Display name | Applicazione di utilizzo |
| Display (plural) | Applicazioni di utilizzo |
| Schema name | `msdyn_ConsumingApplication` |
| Entity set (Web API) | `msdyn_consumingapplications` |
| Primary id attribute | `msdyn_consumingapplicationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_consumingapplications?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_consumingapplications(<guid>)
POST /api/data/v9.2/msdyn_consumingapplications
PATCH /api/data/v9.2/msdyn_consumingapplications(<guid>)
DELETE /api/data/v9.2/msdyn_consumingapplications(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_consumingapplicationid`, `msdyn_inboundurltemplate`, `msdyn_name`, `msdyn_notificationurltemplate`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_consumingapplication_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_consumingapplication_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_consumingapplication_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_consumingapplication_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_consumingapplication` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_consumingapplication` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_consumingapplication` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_consumingapplication` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_consumingapplication_SyncErrors` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `regardingobjectid` | `regardingobjectid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_DuplicateMatchingRecord` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_DuplicateBaseRecord` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `baserecordid` | `baserecordid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_AsyncOperations` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `regardingobjectid` | `regardingobjectid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_MailboxTrackingFolders` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `regardingobjectid` | `regardingobjectid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_UserEntityInstanceDatas` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `objectid` | `objectid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_ProcessSession` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `regardingobjectid` | `regardingobjectid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_BulkDeleteFailures` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `regardingobjectid` | `regardingobjectid_msdyn_consumingapplication` |
| `msdyn_consumingapplication_PrincipalObjectAttributeAccesses` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `objectid` | `objectid_msdyn_consumingapplication` |
| `msdyn_msdyn_channelinstance_ConsumingApplication_msdyn_a` | [msdyn_consumingapplication](msdyn_consumingapplication.md) | `msdyn_consumingapplicationid` | `msdyn_ConsumingApplicationId` |


## Source

Generated from [msdyn_consumingapplication (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_consumingapplication')) on 2026-05-07.