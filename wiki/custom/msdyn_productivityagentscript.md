---
logical: "msdyn_productivityagentscript"
display: "Script"
entitySetName: "msdyn_productivityagentscripts"
primaryId: "msdyn_productivityagentscriptid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Script

Script

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivityagentscript` |
| Display name | Script |
| Display (plural) | Script |
| Schema name | `msdyn_productivityagentscript` |
| Entity set (Web API) | `msdyn_productivityagentscripts` |
| Primary id attribute | `msdyn_productivityagentscriptid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivityagentscripts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivityagentscripts(<guid>)
POST /api/data/v9.2/msdyn_productivityagentscripts
PATCH /api/data/v9.2/msdyn_productivityagentscripts(<guid>)
DELETE /api/data/v9.2/msdyn_productivityagentscripts(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_description`, `msdyn_language`, `msdyn_name`, `msdyn_productivityagentscriptid`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_productivityagentscript_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivityagentscript_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivityagentscript_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivityagentscript_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_productivityagentscript` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_productivityagentscript` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_productivityagentscript` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_productivityagentscript` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_productivityagentscript_SyncErrors` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_DuplicateMatchingRecord` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_DuplicateBaseRecord` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `baserecordid` | `baserecordid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_AsyncOperations` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_MailboxTrackingFolders` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_UserEntityInstanceDatas` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `objectid` | `objectid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_ProcessSession` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_BulkDeleteFailures` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `regardingobjectid` | `regardingobjectid_msdyn_productivityagentscript` |
| `msdyn_productivityagentscript_PrincipalObjectAttributeAccesses` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `objectid` | `objectid_msdyn_productivityagentscript` |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_agentscriptid` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `msdyn_agentscriptid` | `msdyn_agentscriptid` |
| `msdyn_msdyn_prod_agentscript_msdyn_prod_agentscriptstep_routeactionid` | [msdyn_productivityagentscript](msdyn_productivityagentscript.md) | `msdyn_routeactionid` | `msdyn_routeactionid` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` | [msdyn_sessiontemplate](msdyn_sessiontemplate.md) | _n/a_ | `msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat` |

## Source

Generated from [msdyn_productivityagentscript (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_productivityagentscript')) on 2026-05-07.