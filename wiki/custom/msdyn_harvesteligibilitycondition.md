---
logical: "msdyn_harvesteligibilitycondition"
display: "Harvest Eligibility Condition"
entitySetName: "msdyn_harvesteligibilityconditions"
primaryId: "msdyn_harvesteligibilityconditionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Harvest Eligibility Condition

Stores excluded conditions for knowledge harvesting eligibility

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_harvesteligibilitycondition` |
| Display name | Harvest Eligibility Condition |
| Display (plural) | Harvest Eligibility Conditions |
| Schema name | `msdyn_harvesteligibilitycondition` |
| Entity set (Web API) | `msdyn_harvesteligibilityconditions` |
| Primary id attribute | `msdyn_harvesteligibilityconditionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_harvesteligibilityconditions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_harvesteligibilityconditions(<guid>)
POST /api/data/v9.2/msdyn_harvesteligibilityconditions
PATCH /api/data/v9.2/msdyn_harvesteligibilityconditions(<guid>)
DELETE /api/data/v9.2/msdyn_harvesteligibilityconditions(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_excludedconditions`, `msdyn_harvesteligibilityconditionid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_harvesteligibilitycondition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_harvesteligibilitycondition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_harvesteligibilitycondition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_harvesteligibilitycondition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_harvesteligibilitycondition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_harvesteligibilitycondition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_harvesteligibilitycondition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_harvesteligibilitycondition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_harvesteligibilitycondition_SyncErrors` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_DuplicateMatchingRecord` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_DuplicateBaseRecord` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `baserecordid` | `baserecordid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_AsyncOperations` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_MailboxTrackingFolders` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_UserEntityInstanceDatas` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `objectid` | `objectid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_ProcessSession` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_BulkDeleteFailures` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvesteligibilitycondition` |
| `msdyn_harvesteligibilitycondition_PrincipalObjectAttributeAccesses` | [msdyn_harvesteligibilitycondition](msdyn_harvesteligibilitycondition.md) | `objectid` | `objectid_msdyn_harvesteligibilitycondition` |


## Source

Generated from [msdyn_harvesteligibilitycondition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_harvesteligibilitycondition')) on 2026-05-07.