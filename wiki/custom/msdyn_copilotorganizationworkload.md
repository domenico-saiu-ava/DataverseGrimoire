---
logical: "msdyn_copilotorganizationworkload"
display: "Copilot Organization Workload"
entitySetName: "msdyn_copilotorganizationworkloads"
primaryId: "msdyn_copilotorganizationworkloadid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Copilot Organization Workload

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotorganizationworkload` |
| Display name | Copilot Organization Workload |
| Display (plural) | Copilot Organization Workloads |
| Schema name | `msdyn_copilotorganizationworkload` |
| Entity set (Web API) | `msdyn_copilotorganizationworkloads` |
| Primary id attribute | `msdyn_copilotorganizationworkloadid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotorganizationworkloads?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotorganizationworkloads(<guid>)
POST /api/data/v9.2/msdyn_copilotorganizationworkloads
PATCH /api/data/v9.2/msdyn_copilotorganizationworkloads(<guid>)
DELETE /api/data/v9.2/msdyn_copilotorganizationworkloads(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_columns`, `msdyn_copilotorganizationworkloadid`, `msdyn_fetchxml`, `msdyn_name`, `msdyn_prompt`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotorganizationworkload_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotorganizationworkload_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotorganizationworkload_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotorganizationworkload_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotorganizationworkload` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotorganizationworkload_SyncErrors` | [msdyn_copilotorganizationworkload](msdyn_copilotorganizationworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotorganizationworkload` |
| `msdyn_copilotorganizationworkload_AsyncOperations` | [msdyn_copilotorganizationworkload](msdyn_copilotorganizationworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotorganizationworkload` |
| `msdyn_copilotorganizationworkload_MailboxTrackingFolders` | [msdyn_copilotorganizationworkload](msdyn_copilotorganizationworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotorganizationworkload` |
| `msdyn_copilotorganizationworkload_UserEntityInstanceDatas` | [msdyn_copilotorganizationworkload](msdyn_copilotorganizationworkload.md) | `objectid` | `objectid_msdyn_copilotorganizationworkload` |
| `msdyn_copilotorganizationworkload_ProcessSession` | [msdyn_copilotorganizationworkload](msdyn_copilotorganizationworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotorganizationworkload` |
| `msdyn_copilotorganizationworkload_BulkDeleteFailures` | [msdyn_copilotorganizationworkload](msdyn_copilotorganizationworkload.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotorganizationworkload` |
| `msdyn_copilotorganizationworkload_PrincipalObjectAttributeAccesses` | [msdyn_copilotorganizationworkload](msdyn_copilotorganizationworkload.md) | `objectid` | `objectid_msdyn_copilotorganizationworkload` |


## Source

Generated from [msdyn_copilotorganizationworkload (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotorganizationworkload')) on 2026-05-07.