---
logical: "msdyn_guardrail_rule_version"
display: "msdyn_guardrail_rule_version"
entitySetName: "msdyn_guardrail_rule_versions"
primaryId: "msdyn_guardrail_rule_versionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_guardrail_rule_version

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_guardrail_rule_version` |
| Display name | msdyn_guardrail_rule_version |
| Display (plural) | msdyn_guardrail_rule_versions |
| Schema name | `msdyn_guardrail_rule_version` |
| Entity set (Web API) | `msdyn_guardrail_rule_versions` |
| Primary id attribute | `msdyn_guardrail_rule_versionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_guardrail_rule_versions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_guardrail_rule_versions(<guid>)
POST /api/data/v9.2/msdyn_guardrail_rule_versions
PATCH /api/data/v9.2/msdyn_guardrail_rule_versions(<guid>)
DELETE /api/data/v9.2/msdyn_guardrail_rule_versions(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_decisionthreshold`, `msdyn_guardrail_rule_versionid`, `msdyn_guardrail_ruleid`, `msdyn_name`, `msdyn_policystatement`, `msdyn_prompt`, `msdyn_ruledefinition`, `msdyn_version`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_guardrail_rule_version_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_guardrail_rule_version_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_guardrail_rule_version_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_guardrail_rule_version_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_guardrail_rule_version` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_guardrail_rule_version` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_guardrail_rule_version` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_guardrail_rule_version` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_guardrail_rule_version_msdyn_guardrail_ruleid_msdyn_guardrail_rule` | [msdyn_guardrail_rule](msdyn_guardrail_rule.md) | `msdyn_guardrail_ruleid` | `msdyn_guardrail_ruleid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_guardrail_rule_version_SyncErrors` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_DuplicateMatchingRecord` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_DuplicateBaseRecord` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `baserecordid` | `baserecordid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_AsyncOperations` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_MailboxTrackingFolders` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_UserEntityInstanceDatas` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `objectid` | `objectid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_ProcessSession` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_BulkDeleteFailures` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `regardingobjectid` | `regardingobjectid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_version_PrincipalObjectAttributeAccesses` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `objectid` | `objectid_msdyn_guardrail_rule_version` |
| `msdyn_guardrail_rule_msdyn_active_versionid_msdyn_guardrail_rule_version` | [msdyn_guardrail_rule_version](msdyn_guardrail_rule_version.md) | `msdyn_active_versionid` | `msdyn_active_versionid` |


## Source

Generated from [msdyn_guardrail_rule_version (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_guardrail_rule_version')) on 2026-05-07.