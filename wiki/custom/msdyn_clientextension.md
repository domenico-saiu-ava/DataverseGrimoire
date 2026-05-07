---
logical: "msdyn_clientextension"
display: "Estensione client"
entitySetName: "msdyn_clientextensions"
primaryId: "msdyn_clientextensionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Estensione client

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_clientextension` |
| Display name | Estensione client |
| Display (plural) | Estensioni client |
| Schema name | `msdyn_clientextension` |
| Entity set (Web API) | `msdyn_clientextensions` |
| Primary id attribute | `msdyn_clientextensionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_clientextensions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_clientextensions(<guid>)
POST /api/data/v9.2/msdyn_clientextensions
PATCH /api/data/v9.2/msdyn_clientextensions(<guid>)
DELETE /api/data/v9.2/msdyn_clientextensions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_clientextensionid`, `msdyn_extensiontype`, `msdyn_name`, `msdyn_rank`, `msdyn_scheduleboardsettingid`, `msdyn_webresource`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_clientextension_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_clientextension_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_clientextension_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_clientextension_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_clientextension` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_clientextension` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_clientextension` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_clientextension` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_scheduleboardsetting_msdyn_clientextension_scheduleboardsettingid` | [msdyn_scheduleboardsetting](msdyn_scheduleboardsetting.md) | `msdyn_scheduleboardsettingid` | `msdyn_scheduleboardsettingid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_clientextension_DuplicateMatchingRecord` | [msdyn_clientextension](msdyn_clientextension.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_clientextension` |
| `msdyn_clientextension_DuplicateBaseRecord` | [msdyn_clientextension](msdyn_clientextension.md) | `baserecordid` | `baserecordid_msdyn_clientextension` |
| `msdyn_clientextension_SyncErrors` | [msdyn_clientextension](msdyn_clientextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_clientextension` |
| `msdyn_clientextension_AsyncOperations` | [msdyn_clientextension](msdyn_clientextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_clientextension` |
| `msdyn_clientextension_MailboxTrackingFolders` | [msdyn_clientextension](msdyn_clientextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_clientextension` |
| `msdyn_clientextension_UserEntityInstanceDatas` | [msdyn_clientextension](msdyn_clientextension.md) | `objectid` | `objectid_msdyn_clientextension` |
| `msdyn_clientextension_ProcessSession` | [msdyn_clientextension](msdyn_clientextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_clientextension` |
| `msdyn_clientextension_BulkDeleteFailures` | [msdyn_clientextension](msdyn_clientextension.md) | `regardingobjectid` | `regardingobjectid_msdyn_clientextension` |
| `msdyn_clientextension_PrincipalObjectAttributeAccesses` | [msdyn_clientextension](msdyn_clientextension.md) | `objectid` | `objectid_msdyn_clientextension` |


## Source

Generated from [msdyn_clientextension (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_clientextension')) on 2026-05-07.