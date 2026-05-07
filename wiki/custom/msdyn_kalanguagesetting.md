---
logical: "msdyn_kalanguagesetting"
display: "Impostazione lingua articolo della Knowledge Base"
entitySetName: "msdyn_kalanguagesettings"
primaryId: "msdyn_kalanguagesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione lingua articolo della Knowledge Base

Consente di selezionare la lingua predefinita per la creazione nella Knowledge Base.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kalanguagesetting` |
| Display name | Impostazione lingua articolo della Knowledge Base |
| Display (plural) | Impostazione lingua articolo della Knowledge Base |
| Schema name | `msdyn_kalanguagesetting` |
| Entity set (Web API) | `msdyn_kalanguagesettings` |
| Primary id attribute | `msdyn_kalanguagesettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kalanguagesettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_kalanguagesettings(<guid>)
POST /api/data/v9.2/msdyn_kalanguagesettings
PATCH /api/data/v9.2/msdyn_kalanguagesettings(<guid>)
DELETE /api/data/v9.2/msdyn_kalanguagesettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_agentid`, `msdyn_kalanguagesettingid`, `msdyn_languagelocaleid`, `msdyn_name`, `msdyn_useOrgUILanguage`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kalanguagesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kalanguagesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kalanguagesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kalanguagesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_kalanguagesetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_kalanguagesetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_kalanguagesetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_kalanguagesetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kalanguagesetting_SyncErrors` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_DuplicateMatchingRecord` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_DuplicateBaseRecord` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `baserecordid` | `baserecordid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_AsyncOperations` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_MailboxTrackingFolders` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_UserEntityInstanceDatas` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `objectid` | `objectid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_ProcessSession` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_BulkDeleteFailures` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_kalanguagesetting` |
| `msdyn_kalanguagesetting_PrincipalObjectAttributeAccesses` | [msdyn_kalanguagesetting](msdyn_kalanguagesetting.md) | `objectid` | `objectid_msdyn_kalanguagesetting` |


## Source

Generated from [msdyn_kalanguagesetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kalanguagesetting')) on 2026-05-07.