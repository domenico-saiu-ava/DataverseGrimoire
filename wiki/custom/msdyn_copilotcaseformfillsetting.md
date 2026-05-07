---
logical: "msdyn_copilotcaseformfillsetting"
display: "Impostazioni compilazione modulo caso assistita di Copilot"
entitySetName: "msdyn_copilotcaseformfillsettings"
primaryId: "msdyn_copilotcaseformfillsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni compilazione modulo caso assistita di Copilot

Impostazioni compilazione modulo caso assistita di Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotcaseformfillsetting` |
| Display name | Impostazioni compilazione modulo caso assistita di Copilot |
| Display (plural) | Impostazioni compilazione modulo caso assistita di Copilot |
| Schema name | `msdyn_copilotcaseformfillsetting` |
| Entity set (Web API) | `msdyn_copilotcaseformfillsettings` |
| Primary id attribute | `msdyn_copilotcaseformfillsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotcaseformfillsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotcaseformfillsettings(<guid>)
POST /api/data/v9.2/msdyn_copilotcaseformfillsettings
PATCH /api/data/v9.2/msdyn_copilotcaseformfillsettings(<guid>)
DELETE /api/data/v9.2/msdyn_copilotcaseformfillsettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_caseresolutionconfiguration`, `msdyn_copilotcaseformfillsettingid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotcaseformfillsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotcaseformfillsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotcaseformfillsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotcaseformfillsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_copilotcaseformfillsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_copilotcaseformfillsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_copilotcaseformfillsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_copilotcaseformfillsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotcaseformfillsetting_SyncErrors` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_DuplicateMatchingRecord` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_DuplicateBaseRecord` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `baserecordid` | `baserecordid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_AsyncOperations` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_MailboxTrackingFolders` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_UserEntityInstanceDatas` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `objectid` | `objectid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_ProcessSession` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_BulkDeleteFailures` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotcaseformfillsetting` |
| `msdyn_copilotcaseformfillsetting_PrincipalObjectAttributeAccesses` | [msdyn_copilotcaseformfillsetting](msdyn_copilotcaseformfillsetting.md) | `objectid` | `objectid_msdyn_copilotcaseformfillsetting` |


## Source

Generated from [msdyn_copilotcaseformfillsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotcaseformfillsetting')) on 2026-05-07.