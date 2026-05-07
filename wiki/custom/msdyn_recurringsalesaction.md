---
logical: "msdyn_recurringsalesaction"
display: "Recurring Sales Action"
entitySetName: "msdyn_recurringsalesactions"
primaryId: "msdyn_recurringsalesactionid"
primaryName: "msdyn_triggername"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Recurring Sales Action

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recurringsalesaction` |
| Display name | Recurring Sales Action |
| Display (plural) | Recurring Sales Actions |
| Schema name | `msdyn_recurringsalesaction` |
| Entity set (Web API) | `msdyn_recurringsalesactions` |
| Primary id attribute | `msdyn_recurringsalesactionid` |
| Primary name attribute | `msdyn_triggername` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recurringsalesactions?$select=msdyn_triggername&$top=10
GET /api/data/v9.2/msdyn_recurringsalesactions(<guid>)
POST /api/data/v9.2/msdyn_recurringsalesactions
PATCH /api/data/v9.2/msdyn_recurringsalesactions(<guid>)
DELETE /api/data/v9.2/msdyn_recurringsalesactions(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_customactionname`, `msdyn_failurecount`, `msdyn_featurename`, `msdyn_isrecurrencepatternschedule`, `msdyn_lastexecutioninfo`, `msdyn_payload`, `msdyn_recordstate`, `msdyn_recurringsalesactionid`, `msdyn_retrycount`, `msdyn_schedule`, `msdyn_startdate`, `msdyn_triggername`, `msdyn_workloadname`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recurringsalesaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recurringsalesaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recurringsalesaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recurringsalesaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_recurringsalesaction` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recurringsalesaction_SyncErrors` | [msdyn_recurringsalesaction](msdyn_recurringsalesaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesaction` |
| `msdyn_recurringsalesaction_AsyncOperations` | [msdyn_recurringsalesaction](msdyn_recurringsalesaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesaction` |
| `msdyn_recurringsalesaction_MailboxTrackingFolders` | [msdyn_recurringsalesaction](msdyn_recurringsalesaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesaction` |
| `msdyn_recurringsalesaction_UserEntityInstanceDatas` | [msdyn_recurringsalesaction](msdyn_recurringsalesaction.md) | `objectid` | `objectid_msdyn_recurringsalesaction` |
| `msdyn_recurringsalesaction_ProcessSession` | [msdyn_recurringsalesaction](msdyn_recurringsalesaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesaction` |
| `msdyn_recurringsalesaction_BulkDeleteFailures` | [msdyn_recurringsalesaction](msdyn_recurringsalesaction.md) | `regardingobjectid` | `regardingobjectid_msdyn_recurringsalesaction` |
| `msdyn_recurringsalesaction_PrincipalObjectAttributeAccesses` | [msdyn_recurringsalesaction](msdyn_recurringsalesaction.md) | `objectid` | `objectid_msdyn_recurringsalesaction` |


## Source

Generated from [msdyn_recurringsalesaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recurringsalesaction')) on 2026-05-07.