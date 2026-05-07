---
logical: "msdyn_notesanalysisconfig"
display: "Notes analysis Config"
entitySetName: "msdyn_notesanalysisconfigs"
primaryId: "msdyn_notesanalysisconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Notes analysis Config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_notesanalysisconfig` |
| Display name | Notes analysis Config |
| Display (plural) | Notes analysis Configs |
| Schema name | `msdyn_notesanalysisconfig` |
| Entity set (Web API) | `msdyn_notesanalysisconfigs` |
| Primary id attribute | `msdyn_notesanalysisconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_notesanalysisconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_notesanalysisconfigs(<guid>)
POST /api/data/v9.2/msdyn_notesanalysisconfigs
PATCH /api/data/v9.2/msdyn_notesanalysisconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_notesanalysisconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_aretermsaccepted`, `msdyn_isadminsettingenabled`, `msdyn_name`, `msdyn_notesanalysisconfigid`, `msdyn_throttlelimit`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_notesanalysisconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_notesanalysisconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_notesanalysisconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_notesanalysisconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_notesanalysisconfig` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_notesanalysisconfig` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_notesanalysisconfig` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_notesanalysisconfig` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_notesanalysisconfig_SyncErrors` | [msdyn_notesanalysisconfig](msdyn_notesanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_notesanalysisconfig` |
| `msdyn_notesanalysisconfig_AsyncOperations` | [msdyn_notesanalysisconfig](msdyn_notesanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_notesanalysisconfig` |
| `msdyn_notesanalysisconfig_MailboxTrackingFolders` | [msdyn_notesanalysisconfig](msdyn_notesanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_notesanalysisconfig` |
| `msdyn_notesanalysisconfig_UserEntityInstanceDatas` | [msdyn_notesanalysisconfig](msdyn_notesanalysisconfig.md) | `objectid` | `objectid_msdyn_notesanalysisconfig` |
| `msdyn_notesanalysisconfig_ProcessSession` | [msdyn_notesanalysisconfig](msdyn_notesanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_notesanalysisconfig` |
| `msdyn_notesanalysisconfig_BulkDeleteFailures` | [msdyn_notesanalysisconfig](msdyn_notesanalysisconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_notesanalysisconfig` |
| `msdyn_notesanalysisconfig_PrincipalObjectAttributeAccesses` | [msdyn_notesanalysisconfig](msdyn_notesanalysisconfig.md) | `objectid` | `objectid_msdyn_notesanalysisconfig` |


## Source

Generated from [msdyn_notesanalysisconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_notesanalysisconfig')) on 2026-05-07.