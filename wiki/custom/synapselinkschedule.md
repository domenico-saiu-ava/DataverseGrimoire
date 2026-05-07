---
logical: "synapselinkschedule"
display: "Synapse Link Schedule"
entitySetName: "synapselinkschedules"
primaryId: "synapselinkscheduleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Synapse Link Schedule

Synapse link schedules

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkschedule` |
| Display name | Synapse Link Schedule |
| Display (plural) | Synapse Link Schedules |
| Schema name | `synapselinkschedule` |
| Entity set (Web API) | `synapselinkschedules` |
| Primary id attribute | `synapselinkscheduleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkschedules?$select=name&$top=10
GET /api/data/v9.2/synapselinkschedules(<guid>)
POST /api/data/v9.2/synapselinkschedules
PATCH /api/data/v9.2/synapselinkschedules(<guid>)
DELETE /api/data/v9.2/synapselinkschedules(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`entityname`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `profile`, `recurrenceinterval`, `recurrenceunit`, `starttime`, `statecode`, `statuscode`, `synapselinkscheduleid`, `timezoneruleversionnumber`, `type`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapselinkschedule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkschedule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkschedule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkschedule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkschedule` | [organization](organization.md) | `organizationid` | `organizationid` |
| `profileschedules` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkschedule_SyncErrors` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `synapselinkschedule_DuplicateMatchingRecord` | [synapselinkschedule](synapselinkschedule.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkschedule` |
| `synapselinkschedule_DuplicateBaseRecord` | [synapselinkschedule](synapselinkschedule.md) | `baserecordid` | `baserecordid_synapselinkschedule` |
| `synapselinkschedule_AsyncOperations` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `synapselinkschedule_MailboxTrackingFolders` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `synapselinkschedule_UserEntityInstanceDatas` | [synapselinkschedule](synapselinkschedule.md) | `objectid` | `objectid_synapselinkschedule` |
| `synapselinkschedule_ProcessSession` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `synapselinkschedule_BulkDeleteFailures` | [synapselinkschedule](synapselinkschedule.md) | `regardingobjectid` | `regardingobjectid_synapselinkschedule` |
| `synapselinkschedule_PrincipalObjectAttributeAccesses` | [synapselinkschedule](synapselinkschedule.md) | `objectid` | `objectid_synapselinkschedule` |


## Source

Generated from [synapselinkschedule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='synapselinkschedule')) on 2026-05-07.