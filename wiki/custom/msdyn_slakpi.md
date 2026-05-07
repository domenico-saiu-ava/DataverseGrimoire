---
logical: "msdyn_slakpi"
display: "KPI contratto di servizio"
entitySetName: "msdyn_slakpis"
primaryId: "msdyn_slakpiid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# KPI contratto di servizio

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_slakpi` |
| Display name | KPI contratto di servizio |
| Display (plural) | KPI contratti di servizio |
| Schema name | `msdyn_slakpi` |
| Entity set (Web API) | `msdyn_slakpis` |
| Primary id attribute | `msdyn_slakpiid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_slakpis?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_slakpis(<guid>)
POST /api/data/v9.2/msdyn_slakpis
PATCH /api/data/v9.2/msdyn_slakpis(<guid>)
DELETE /api/data/v9.2/msdyn_slakpis(<guid>)
```

## Attributes

Writable: **19** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_advancedpauseconfiguration`, `msdyn_applicablefromdisplayname`, `msdyn_applicablefromfield`, `msdyn_description`, `msdyn_entitydisplayname`, `msdyn_entityname`, `msdyn_kpifield`, `msdyn_name`, `msdyn_pauseconfigurationxml`, `msdyn_slakpiid`, `msdyn_workflowinfo`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_slakpi_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_slakpi_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_slakpi_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_slakpi_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_slakpi` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_slakpi` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_slakpi` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_slakpi` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_slakpi_SyncErrors` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_slakpi_DuplicateMatchingRecord` | [msdyn_slakpi](msdyn_slakpi.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_slakpi` |
| `msdyn_slakpi_DuplicateBaseRecord` | [msdyn_slakpi](msdyn_slakpi.md) | `baserecordid` | `baserecordid_msdyn_slakpi` |
| `msdyn_slakpi_AsyncOperations` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_slakpi_MailboxTrackingFolders` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_slakpi_UserEntityInstanceDatas` | [msdyn_slakpi](msdyn_slakpi.md) | `objectid` | `objectid_msdyn_slakpi` |
| `msdyn_slakpi_ProcessSession` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_slakpi_BulkDeleteFailures` | [msdyn_slakpi](msdyn_slakpi.md) | `regardingobjectid` | `regardingobjectid_msdyn_slakpi` |
| `msdyn_slakpi_PrincipalObjectAttributeAccesses` | [msdyn_slakpi](msdyn_slakpi.md) | `objectid` | `objectid_msdyn_slakpi` |
| `msdyn_msdyn_slakpi_slaitem` | [msdyn_slakpi](msdyn_slakpi.md) | `msdyn_slakpiid` | `msdyn_SLAKPIID` |


## Source

Generated from [msdyn_slakpi (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_slakpi')) on 2026-05-07.