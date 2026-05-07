---
logical: "msdyn_knowledgemanagementsetting"
display: "Impostazione di gestione delle informazioni"
entitySetName: "msdyn_knowledgemanagementsettings"
primaryId: "msdyn_knowledgemanagementsettingid"
primaryName: "msdyn_entityname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione di gestione delle informazioni

Configura la gestione delle informazioni per l'organizzazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgemanagementsetting` |
| Display name | Impostazione di gestione delle informazioni |
| Display (plural) | Impostazioni di gestione delle informazioni |
| Schema name | `msdyn_knowledgemanagementsetting` |
| Entity set (Web API) | `msdyn_knowledgemanagementsettings` |
| Primary id attribute | `msdyn_knowledgemanagementsettingid` |
| Primary name attribute | `msdyn_entityname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgemanagementsettings?$select=msdyn_entityname&$top=10
GET /api/data/v9.2/msdyn_knowledgemanagementsettings(<guid>)
POST /api/data/v9.2/msdyn_knowledgemanagementsettings
PATCH /api/data/v9.2/msdyn_knowledgemanagementsettings(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgemanagementsettings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_actionlist`, `msdyn_autosuggestionfield`, `msdyn_defaultemailrecipient`, `msdyn_entityname`, `msdyn_isautosuggestionsenabled`, `msdyn_knowledgemanagementsettingid`, `msdyn_showcontextualactions`, `msdyn_status`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgemanagementsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgemanagementsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgemanagementsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgemanagementsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgemanagementsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgemanagementsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgemanagementsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgemanagementsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgemanagementsetting_SyncErrors` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_DuplicateMatchingRecord` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_DuplicateBaseRecord` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `baserecordid` | `baserecordid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_AsyncOperations` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_MailboxTrackingFolders` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_UserEntityInstanceDatas` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `objectid` | `objectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_ProcessSession` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_BulkDeleteFailures` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgemanagementsetting` |
| `msdyn_knowledgemanagementsetting_PrincipalObjectAttributeAccesses` | [msdyn_knowledgemanagementsetting](msdyn_knowledgemanagementsetting.md) | `objectid` | `objectid_msdyn_knowledgemanagementsetting` |


## Source

Generated from [msdyn_knowledgemanagementsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgemanagementsetting')) on 2026-05-07.