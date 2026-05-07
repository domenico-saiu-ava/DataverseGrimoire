---
logical: "msdyn_guardrail_scenariotype"
display: "msdyn_guardrail_scenariotype"
entitySetName: "msdyn_guardrail_scenariotypes"
primaryId: "msdyn_guardrail_scenariotypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_guardrail_scenariotype

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_guardrail_scenariotype` |
| Display name | msdyn_guardrail_scenariotype |
| Display (plural) | msdyn_guardrail_scenariotypes |
| Schema name | `msdyn_guardrail_scenariotype` |
| Entity set (Web API) | `msdyn_guardrail_scenariotypes` |
| Primary id attribute | `msdyn_guardrail_scenariotypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_guardrail_scenariotypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_guardrail_scenariotypes(<guid>)
POST /api/data/v9.2/msdyn_guardrail_scenariotypes
PATCH /api/data/v9.2/msdyn_guardrail_scenariotypes(<guid>)
DELETE /api/data/v9.2/msdyn_guardrail_scenariotypes(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_channel`, `msdyn_guardrail_scenariotypeid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_guardrail_scenariotype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_guardrail_scenariotype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_guardrail_scenariotype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_guardrail_scenariotype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_guardrail_scenariotype` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_guardrail_scenariotype` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_guardrail_scenariotype` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_guardrail_scenariotype` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_guardrail_scenariotype_SyncErrors` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_DuplicateMatchingRecord` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_DuplicateBaseRecord` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `baserecordid` | `baserecordid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_AsyncOperations` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_MailboxTrackingFolders` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_UserEntityInstanceDatas` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `objectid` | `objectid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_ProcessSession` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_BulkDeleteFailures` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_scenariotype_PrincipalObjectAttributeAccesses` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `objectid` | `objectid_msdyn_guardrail_scenariotype` |
| `msdyn_guardrail_consumer_mapping_msdyn_guardrail_scenariotypeid_msdyn_guardrail_scenario` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `msdyn_guardrail_scenariotypeid` | `msdyn_guardrail_scenariotypeid` |
| `msdyn_guardrail_execution_info_msdyn_guardrail_scenariotypeid_msdyn_guardrail_scenarioty` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `msdyn_guardrail_scenariotypeid` | `msdyn_guardrail_scenariotypeid` |


## Source

Generated from [msdyn_guardrail_scenariotype (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_guardrail_scenariotype')) on 2026-05-07.