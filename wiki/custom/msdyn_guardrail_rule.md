---
logical: "msdyn_guardrail_rule"
display: "msdyn_guardrail_rule"
entitySetName: "msdyn_guardrail_rules"
primaryId: "msdyn_guardrail_ruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_guardrail_rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_guardrail_rule` |
| Display name | msdyn_guardrail_rule |
| Display (plural) | msdyn_guardrail_rules |
| Schema name | `msdyn_guardrail_rule` |
| Entity set (Web API) | `msdyn_guardrail_rules` |
| Primary id attribute | `msdyn_guardrail_ruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_guardrail_rules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_guardrail_rules(<guid>)
POST /api/data/v9.2/msdyn_guardrail_rules
PATCH /api/data/v9.2/msdyn_guardrail_rules(<guid>)
DELETE /api/data/v9.2/msdyn_guardrail_rules(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_active_version`, `msdyn_active_versionid`, `msdyn_guardrail_ruleid`, `msdyn_isenabled`, `msdyn_name`, `msdyn_ruletype`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_guardrail_rule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_guardrail_rule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_guardrail_rule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_guardrail_rule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_guardrail_rule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_guardrail_rule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_guardrail_rule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_guardrail_rule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_guardrail_rule_msdyn_active_versionid_msdyn_guardrail_rule_version` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `msdyn_active_versionid` | `msdyn_active_versionid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_guardrail_rule_SyncErrors` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_DuplicateMatchingRecord` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_DuplicateBaseRecord` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `baserecordid` | `baserecordid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_AsyncOperations` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_MailboxTrackingFolders` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_UserEntityInstanceDatas` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `objectid` | `objectid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_ProcessSession` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_BulkDeleteFailures` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule` |
| `msdyn_guardrail_rule_PrincipalObjectAttributeAccesses` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `objectid` | `objectid_msdyn_guardrail_rule` |
| `msdyn_guardrail_consumer_mapping_msdyn_guardrail_ruleid_msdyn_guardrail_rule` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `msdyn_guardrail_ruleid` | `msdyn_guardrail_ruleid` |
| `msdyn_guardrail_execution_info_msdyn_guardrail_ruleid_msdyn_guardrail_rule` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `msdyn_guardrail_ruleid` | `msdyn_guardrail_ruleid` |
| `msdyn_guardrail_rule_version_msdyn_guardrail_ruleid_msdyn_guardrail_rule` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `msdyn_guardrail_ruleid` | `msdyn_guardrail_ruleid` |


## Source

Generated from [msdyn_guardrail_rule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_guardrail_rule')) on 2026-05-07.