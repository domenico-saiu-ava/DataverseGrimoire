---
logical: "msfp_alertrule"
display: "Regola di avviso di Customer Voice"
entitySetName: "msfp_alertrules"
primaryId: "msfp_alertruleid"
primaryName: "msfp_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Regola di avviso di Customer Voice

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msfp_alertrule` |
| Display name | Regola di avviso di Customer Voice |
| Display (plural) | Regole di avviso Customer Voice |
| Schema name | `msfp_alertrule` |
| Entity set (Web API) | `msfp_alertrules` |
| Primary id attribute | `msfp_alertruleid` |
| Primary name attribute | `msfp_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msfp_alertrules?$select=msfp_name&$top=10
GET /api/data/v9.2/msfp_alertrules(<guid>)
POST /api/data/v9.2/msfp_alertrules
PATCH /api/data/v9.2/msfp_alertrules(<guid>)
DELETE /api/data/v9.2/msfp_alertrules(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msfp_alertruleid`, `msfp_expression`, `msfp_name`, `msfp_project`, `msfp_satisfactionmetric`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msfp_alertrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msfp_alertrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msfp_alertrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msfp_alertrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msfp_alertrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msfp_alertrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msfp_alertrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msfp_alertrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msfp_msfp_project_msfp_alertrule_project` | [msfp_project](msfp_project.md) | `msfp_project` | `msfp_project` |
| `msfp_msfp_satisfactionmetric_msfp_alertrule` | [msfp_satisfactionmetric](msfp_satisfactionmetric.md) | `msfp_satisfactionmetric` | `msfp_satisfactionmetric` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msfp_alertrule_SyncErrors` | [msfp_alertrule](msfp_alertrule.md) | `regardingobjectid` | `regardingobjectid_msfp_alertrule` |
| `msfp_alertrule_DuplicateMatchingRecord` | [msfp_alertrule](msfp_alertrule.md) | `duplicaterecordid` | `duplicaterecordid_msfp_alertrule` |
| `msfp_alertrule_DuplicateBaseRecord` | [msfp_alertrule](msfp_alertrule.md) | `baserecordid` | `baserecordid_msfp_alertrule` |
| `msfp_alertrule_AsyncOperations` | [msfp_alertrule](msfp_alertrule.md) | `regardingobjectid` | `regardingobjectid_msfp_alertrule` |
| `msfp_alertrule_MailboxTrackingFolders` | [msfp_alertrule](msfp_alertrule.md) | `regardingobjectid` | `regardingobjectid_msfp_alertrule` |
| `msfp_alertrule_UserEntityInstanceDatas` | [msfp_alertrule](msfp_alertrule.md) | `objectid` | `objectid_msfp_alertrule` |
| `msfp_alertrule_ProcessSession` | [msfp_alertrule](msfp_alertrule.md) | `regardingobjectid` | `regardingobjectid_msfp_alertrule` |
| `msfp_alertrule_BulkDeleteFailures` | [msfp_alertrule](msfp_alertrule.md) | `regardingobjectid` | `regardingobjectid_msfp_alertrule` |
| `msfp_alertrule_PrincipalObjectAttributeAccesses` | [msfp_alertrule](msfp_alertrule.md) | `objectid` | `objectid_msfp_alertrule` |
| `msfp_msfp_alertrule_msfp_alert_alertrule` | [msfp_alertrule](msfp_alertrule.md) | `msfp_alertrule` | `msfp_alertrule` |


## Source

Generated from [msfp_alertrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msfp_alertrule')) on 2026-05-07.