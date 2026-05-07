---
logical: "msdyn_intentgroupcondition"
display: "Condizione gruppo di finalità"
entitySetName: "msdyn_intentgroupconditions"
primaryId: "msdyn_intentgroupconditionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Condizione gruppo di finalità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentgroupcondition` |
| Display name | Condizione gruppo di finalità |
| Display (plural) | Condizioni gruppo di finalità |
| Schema name | `msdyn_intentgroupcondition` |
| Entity set (Web API) | `msdyn_intentgroupconditions` |
| Primary id attribute | `msdyn_intentgroupconditionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentgroupconditions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentgroupconditions(<guid>)
POST /api/data/v9.2/msdyn_intentgroupconditions
PATCH /api/data/v9.2/msdyn_intentgroupconditions(<guid>)
DELETE /api/data/v9.2/msdyn_intentgroupconditions(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_condition`, `msdyn_fetchxml`, `msdyn_intentfamily`, `msdyn_intentgroupconditionid`, `msdyn_name`, `msdyn_order`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentgroupcondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentgroupcondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentgroupcondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentgroupcondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentgroupcondition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentgroupcondition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentgroupcondition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentgroupcondition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentgroupcondition_msdyn_intentfamily_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamily` | `msdyn_intentfamily` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentgroupcondition_SyncErrors` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_DuplicateMatchingRecord` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_DuplicateBaseRecord` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `baserecordid` | `baserecordid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_AsyncOperations` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_MailboxTrackingFolders` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_UserEntityInstanceDatas` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `objectid` | `objectid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_ProcessSession` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_BulkDeleteFailures` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupcondition_PrincipalObjectAttributeAccesses` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `objectid` | `objectid_msdyn_intentgroupcondition` |
| `msdyn_intentgroupconditionid_msdyn_intentsolutionmap_msdyn_intentgroupcondition` | [msdyn_intentgroupcondition](msdyn_intentgroupcondition.md) | `msdyn_intentgroupconditionid` | `msdyn_intentgroupconditionid` |


## Source

Generated from [msdyn_intentgroupcondition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentgroupcondition')) on 2026-05-07.