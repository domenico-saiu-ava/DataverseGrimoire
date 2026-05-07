---
logical: "msdyn_pmprocessusersettings"
display: "Impostazioni utente processo mining di processo"
entitySetName: "msdyn_pmprocessusersettings"
primaryId: "msdyn_pmprocessusersettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni utente processo mining di processo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocessusersettings` |
| Display name | Impostazioni utente processo mining di processo |
| Display (plural) | Impostazioni utente processo mining di processo |
| Schema name | `msdyn_pmprocessusersettings` |
| Entity set (Web API) | `msdyn_pmprocessusersettings` |
| Primary id attribute | `msdyn_pmprocessusersettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocessusersettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocessusersettings(<guid>)
POST /api/data/v9.2/msdyn_pmprocessusersettings
PATCH /api/data/v9.2/msdyn_pmprocessusersettings(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocessusersettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_parenttask`, `msdyn_pmprocessusersettingsid`, `msdyn_sendanalyticsemails`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_pmprocessusersettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocessusersettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocessusersettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocessusersettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_pmprocessusersettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_pmprocessusersettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_pmprocessusersettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_pmprocessusersettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_pminferredtask_msdyn_pmprocessusersettings_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocessusersettings_SyncErrors` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_DuplicateMatchingRecord` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_DuplicateBaseRecord` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `baserecordid` | `baserecordid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_AsyncOperations` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_MailboxTrackingFolders` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_UserEntityInstanceDatas` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `objectid` | `objectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_ProcessSession` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_BulkDeleteFailures` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_pmprocessusersettings` |
| `msdyn_pmprocessusersettings_PrincipalObjectAttributeAccesses` | [msdyn_pmprocessusersettings](msdyn_pmprocessusersettings.md) | `objectid` | `objectid_msdyn_pmprocessusersettings` |


## Source

Generated from [msdyn_pmprocessusersettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_pmprocessusersettings')) on 2026-05-07.