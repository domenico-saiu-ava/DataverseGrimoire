---
logical: "msdyn_guardrail_execution_info"
display: "msdyn_guardrail_execution_info"
entitySetName: "msdyn_guardrail_execution_infos"
primaryId: "msdyn_guardrail_execution_infoid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_guardrail_execution_info

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_guardrail_execution_info` |
| Display name | msdyn_guardrail_execution_info |
| Display (plural) | msdyn_guardrail_execution_infos |
| Schema name | `msdyn_guardrail_execution_info` |
| Entity set (Web API) | `msdyn_guardrail_execution_infos` |
| Primary id attribute | `msdyn_guardrail_execution_infoid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_guardrail_execution_infos?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_guardrail_execution_infos(<guid>)
POST /api/data/v9.2/msdyn_guardrail_execution_infos
PATCH /api/data/v9.2/msdyn_guardrail_execution_infos(<guid>)
DELETE /api/data/v9.2/msdyn_guardrail_execution_infos(<guid>)
```

## Attributes

Writable: **22** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_detectionaction`, `msdyn_error`, `msdyn_feedback`, `msdyn_guardrail_execution_infoid`, `msdyn_guardrail_ruleid`, `msdyn_guardrail_scenariotypeid`, `msdyn_isviolated`, `msdyn_name`, `msdyn_objectid`, `msdyn_reason`, `msdyn_regardingid`, `msdyn_regardingtype`, `msdyn_score`, `msdyn_shadowmode`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_guardrail_execution_info_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_guardrail_execution_info_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_guardrail_execution_info_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_guardrail_execution_info_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_guardrail_execution_info` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_guardrail_execution_info` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_guardrail_execution_info` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_guardrail_execution_info` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_guardrail_execution_info_msdyn_guardrail_ruleid_msdyn_guardrail_rule` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `msdyn_guardrail_ruleid` | `msdyn_guardrail_ruleid` |
| `msdyn_guardrail_execution_info_msdyn_guardrail_scenariotypeid_msdyn_guardrail_scenarioty` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `msdyn_guardrail_scenariotypeid` | `msdyn_guardrail_scenariotypeid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_guardrail_execution_info_SyncErrors` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_DuplicateMatchingRecord` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_DuplicateBaseRecord` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `baserecordid` | `baserecordid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_AsyncOperations` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_MailboxTrackingFolders` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_UserEntityInstanceDatas` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `objectid` | `objectid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_ProcessSession` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_BulkDeleteFailures` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_execution_info` |
| `msdyn_guardrail_execution_info_PrincipalObjectAttributeAccesses` | [msdyn_guardrail_execution_info](msdyn_guardrail_execution_info.md) | `objectid` | `objectid_msdyn_guardrail_execution_info` |


## Source

Generated from [msdyn_guardrail_execution_info (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_guardrail_execution_info')) on 2026-05-07.