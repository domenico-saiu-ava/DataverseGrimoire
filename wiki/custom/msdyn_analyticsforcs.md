---
logical: "msdyn_analyticsforcs"
display: "[Deprecata] Dynamics Customer Service Analytics"
entitySetName: "msdyn_analyticsforcs"
primaryId: "msdyn_analyticsforcsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# [Deprecata] Dynamics Customer Service Analytics

[Deprecata] Controlla l'accesso alla mappa del sito dei report di analisi nell'app Dynamics Customer Service

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_analyticsforcs` |
| Display name | [Deprecata] Dynamics Customer Service Analytics |
| Display (plural) | [Deprecata] Dynamics Customer Service Analytics |
| Schema name | `msdyn_analyticsforcs` |
| Entity set (Web API) | `msdyn_analyticsforcs` |
| Primary id attribute | `msdyn_analyticsforcsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_analyticsforcs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_analyticsforcs(<guid>)
POST /api/data/v9.2/msdyn_analyticsforcs
PATCH /api/data/v9.2/msdyn_analyticsforcs(<guid>)
DELETE /api/data/v9.2/msdyn_analyticsforcs(<guid>)
```

## Attributes

Writable: **10** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_analyticsforcsid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_analyticsforcs_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_analyticsforcs_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_analyticsforcs_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_analyticsforcs_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_analyticsforcs` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_analyticsforcs` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_analyticsforcs` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_analyticsforcs` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_analyticsforcs_SyncErrors` | [msdyn_analyticsforcs](msdyn_analyticsforcs.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsforcs` |
| `msdyn_analyticsforcs_AsyncOperations` | [msdyn_analyticsforcs](msdyn_analyticsforcs.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsforcs` |
| `msdyn_analyticsforcs_MailboxTrackingFolders` | [msdyn_analyticsforcs](msdyn_analyticsforcs.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsforcs` |
| `msdyn_analyticsforcs_UserEntityInstanceDatas` | [msdyn_analyticsforcs](msdyn_analyticsforcs.md) | `objectid` | `objectid_msdyn_analyticsforcs` |
| `msdyn_analyticsforcs_ProcessSession` | [msdyn_analyticsforcs](msdyn_analyticsforcs.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsforcs` |
| `msdyn_analyticsforcs_BulkDeleteFailures` | [msdyn_analyticsforcs](msdyn_analyticsforcs.md) | `regardingobjectid` | `regardingobjectid_msdyn_analyticsforcs` |
| `msdyn_analyticsforcs_PrincipalObjectAttributeAccesses` | [msdyn_analyticsforcs](msdyn_analyticsforcs.md) | `objectid` | `objectid_msdyn_analyticsforcs` |


## Source

Generated from [msdyn_analyticsforcs (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_analyticsforcs')) on 2026-05-07.