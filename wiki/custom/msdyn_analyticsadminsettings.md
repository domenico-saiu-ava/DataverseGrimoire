---
logical: "msdyn_analyticsadminsettings"
display: "Impostazioni di amministrazione analisi dei dati (deprecato)"
entitySetName: "msdyn_analyticsadminsettings"
primaryId: "msdyn_analyticsadminsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni di amministrazione analisi dei dati (deprecato)

Impostazioni di amministrazione analisi dei dati (deprecato)

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analyticsadminsettings` |
| Display name | Impostazioni di amministrazione analisi dei dati (deprecato) |
| Display (plural) | Impostazioni di amministrazione analisi dei dati (deprecato) |
| Schema name | `msdyn_analyticsadminsettings` |
| Entity set (Web API) | `msdyn_analyticsadminsettings` |
| Primary id attribute | `msdyn_analyticsadminsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analyticsadminsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analyticsadminsettings(<guid>)
POST /api/data/v9.2/msdyn_analyticsadminsettings
PATCH /api/data/v9.2/msdyn_analyticsadminsettings(<guid>)
DELETE /api/data/v9.2/msdyn_analyticsadminsettings(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_analyticsadminsettingsid`, `msdyn_enableanalytics`, `msdyn_name`, `msdyn_reportgroup`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analyticsadminsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analyticsadminsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analyticsadminsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analyticsadminsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analyticsadminsettings` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analyticsadminsettings` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analyticsadminsettings` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analyticsadminsettings` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analyticsadminsettings_SyncErrors` | [msdyn_analyticsadminsettings](msdyn_analyticsadminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsadminsettings` |
| `msdyn_analyticsadminsettings_AsyncOperations` | [msdyn_analyticsadminsettings](msdyn_analyticsadminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsadminsettings` |
| `msdyn_analyticsadminsettings_MailboxTrackingFolders` | [msdyn_analyticsadminsettings](msdyn_analyticsadminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsadminsettings` |
| `msdyn_analyticsadminsettings_UserEntityInstanceDatas` | [msdyn_analyticsadminsettings](msdyn_analyticsadminsettings.md) | `objectid` | `objectid_msdyn_analyticsadminsettings` |
| `msdyn_analyticsadminsettings_ProcessSession` | [msdyn_analyticsadminsettings](msdyn_analyticsadminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsadminsettings` |
| `msdyn_analyticsadminsettings_BulkDeleteFailures` | [msdyn_analyticsadminsettings](msdyn_analyticsadminsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsadminsettings` |
| `msdyn_analyticsadminsettings_PrincipalObjectAttributeAccesses` | [msdyn_analyticsadminsettings](msdyn_analyticsadminsettings.md) | `objectid` | `objectid_msdyn_analyticsadminsettings` |


## Source

Generated from [msdyn_analyticsadminsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analyticsadminsettings')) on 2026-05-07.