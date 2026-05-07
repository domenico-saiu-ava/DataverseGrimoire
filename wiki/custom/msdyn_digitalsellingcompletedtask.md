---
logical: "msdyn_digitalsellingcompletedtask"
display: "DigitalSellingCompletedTask"
entitySetName: "msdyn_digitalsellingcompletedtasks"
primaryId: "msdyn_digitalsellingcompletedtaskid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DigitalSellingCompletedTask

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_digitalsellingcompletedtask` |
| Display name | DigitalSellingCompletedTask |
| Display (plural) | DigitalSellingCompletedTasks |
| Schema name | `msdyn_digitalsellingcompletedtask` |
| Entity set (Web API) | `msdyn_digitalsellingcompletedtasks` |
| Primary id attribute | `msdyn_digitalsellingcompletedtaskid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_digitalsellingcompletedtasks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_digitalsellingcompletedtasks(<guid>)
POST /api/data/v9.2/msdyn_digitalsellingcompletedtasks
PATCH /api/data/v9.2/msdyn_digitalsellingcompletedtasks(<guid>)
DELETE /api/data/v9.2/msdyn_digitalsellingcompletedtasks(<guid>)
```

## Attributes

Writable: **15** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_correlationid`, `msdyn_customapiname`, `msdyn_digitalsellingcompletedtaskid`, `msdyn_endtime`, `msdyn_inputparameters`, `msdyn_inputtime`, `msdyn_name`, `msdyn_retentiontime`, `msdyn_starttime`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_digitalsellingcompletedtask_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_digitalsellingcompletedtask_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_digitalsellingcompletedtask_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_digitalsellingcompletedtask_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_digitalsellingcompletedtask` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_digitalsellingcompletedtask_SyncErrors` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_DuplicateMatchingRecord` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_DuplicateBaseRecord` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `baserecordid` | `baserecordid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_AsyncOperations` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_MailboxTrackingFolders` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_UserEntityInstanceDatas` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `objectid` | `objectid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_ProcessSession` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_BulkDeleteFailures` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingcompletedtask` |
| `msdyn_digitalsellingcompletedtask_PrincipalObjectAttributeAccesses` | [msdyn_digitalsellingcompletedtask](msdyn_digitalsellingcompletedtask.md) | `objectid` | `objectid_msdyn_digitalsellingcompletedtask` |


## Source

Generated from [msdyn_digitalsellingcompletedtask (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_digitalsellingcompletedtask')) on 2026-05-07.