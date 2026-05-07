---
logical: "msdyn_recomputetracker"
display: "Recompute Tracker"
entitySetName: "msdyn_recomputetrackers"
primaryId: "msdyn_recomputetrackerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Recompute Tracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_recomputetracker` |
| Display name | Recompute Tracker |
| Display (plural) | Recompute Tracker |
| Schema name | `msdyn_recomputetracker` |
| Entity set (Web API) | `msdyn_recomputetrackers` |
| Primary id attribute | `msdyn_recomputetrackerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_recomputetrackers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_recomputetrackers(<guid>)
POST /api/data/v9.2/msdyn_recomputetrackers
PATCH /api/data/v9.2/msdyn_recomputetrackers(<guid>)
DELETE /api/data/v9.2/msdyn_recomputetrackers(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_forecastconfigurationid`, `msdyn_lastprocessedchangestill`, `msdyn_name`, `msdyn_recomputetrackerid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_recomputetracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_recomputetracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_recomputetracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_recomputetracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_recomputetracker` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_msdyn_forecastconfiguration_msdyn_recomputetracker_forecastconfigurationid` | [msdyn_forecastconfiguration](msdyn_forecastconfiguration.md) | `msdyn_forecastconfigurationid` | `msdyn_forecastconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_recomputetracker_SyncErrors` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_DuplicateMatchingRecord` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_DuplicateBaseRecord` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `baserecordid` | `baserecordid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_AsyncOperations` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_MailboxTrackingFolders` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_UserEntityInstanceDatas` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `objectid` | `objectid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_ProcessSession` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_BulkDeleteFailures` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `regardingobjectid` | `regardingobjectid_msdyn_recomputetracker` |
| `msdyn_recomputetracker_PrincipalObjectAttributeAccesses` | [msdyn_recomputetracker](msdyn_recomputetracker.md) | `objectid` | `objectid_msdyn_recomputetracker` |


## Source

Generated from [msdyn_recomputetracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_recomputetracker')) on 2026-05-07.