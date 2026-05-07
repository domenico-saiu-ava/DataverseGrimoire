---
logical: "msdyn_guardrail_consumer_mapping"
display: "msdyn_guardrail_consumer_mapping"
entitySetName: "msdyn_guardrail_consumer_mappings"
primaryId: "msdyn_guardrail_consumer_mappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_guardrail_consumer_mapping

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_guardrail_consumer_mapping` |
| Display name | msdyn_guardrail_consumer_mapping |
| Display (plural) | msdyn_guardrail_consumer_mappings |
| Schema name | `msdyn_guardrail_consumer_mapping` |
| Entity set (Web API) | `msdyn_guardrail_consumer_mappings` |
| Primary id attribute | `msdyn_guardrail_consumer_mappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_guardrail_consumer_mappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_guardrail_consumer_mappings(<guid>)
POST /api/data/v9.2/msdyn_guardrail_consumer_mappings
PATCH /api/data/v9.2/msdyn_guardrail_consumer_mappings(<guid>)
DELETE /api/data/v9.2/msdyn_guardrail_consumer_mappings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_applicablewhen`, `msdyn_detectionaction`, `msdyn_guardrail_consumer_mappingid`, `msdyn_guardrail_ruleid`, `msdyn_guardrail_scenariotypeid`, `msdyn_isenabled`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_guardrail_consumer_mapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_guardrail_consumer_mapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_guardrail_consumer_mapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_guardrail_consumer_mapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_guardrail_consumer_mapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_guardrail_consumer_mapping` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_guardrail_consumer_mapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_guardrail_consumer_mapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_guardrail_consumer_mapping_msdyn_guardrail_ruleid_msdyn_guardrail_rule` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `msdyn_guardrail_ruleid` | `msdyn_guardrail_ruleid` |
| `msdyn_guardrail_consumer_mapping_msdyn_guardrail_scenariotypeid_msdyn_guardrail_scenario` | [msdyn_guardrail_scenariotype](msdyn_guardrail_scenariotype.md) | `msdyn_guardrail_scenariotypeid` | `msdyn_guardrail_scenariotypeid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_guardrail_consumer_mapping_SyncErrors` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_DuplicateMatchingRecord` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_DuplicateBaseRecord` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `baserecordid` | `baserecordid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_AsyncOperations` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_MailboxTrackingFolders` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_UserEntityInstanceDatas` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `objectid` | `objectid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_ProcessSession` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_BulkDeleteFailures` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_consumer_mapping` |
| `msdyn_guardrail_consumer_mapping_PrincipalObjectAttributeAccesses` | [msdyn_guardrail_consumer_mapping](msdyn_guardrail_consumer_mapping.md) | `objectid` | `objectid_msdyn_guardrail_consumer_mapping` |


## Source

Generated from [msdyn_guardrail_consumer_mapping (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_guardrail_consumer_mapping')) on 2026-05-07.