---
logical: "msdyn_digitalsellingactivetask"
display: "DigitalSellingActiveTask"
entitySetName: "msdyn_digitalsellingactivetasks"
primaryId: "msdyn_digitalsellingactivetaskid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# DigitalSellingActiveTask

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_digitalsellingactivetask` |
| Display name | DigitalSellingActiveTask |
| Display (plural) | DigitalSellingActiveTasks |
| Schema name | `msdyn_digitalsellingactivetask` |
| Entity set (Web API) | `msdyn_digitalsellingactivetasks` |
| Primary id attribute | `msdyn_digitalsellingactivetaskid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_digitalsellingactivetasks?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_digitalsellingactivetasks(<guid>)
POST /api/data/v9.2/msdyn_digitalsellingactivetasks
PATCH /api/data/v9.2/msdyn_digitalsellingactivetasks(<guid>)
DELETE /api/data/v9.2/msdyn_digitalsellingactivetasks(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_correlationid`, `msdyn_currentstate`, `msdyn_customapiname`, `msdyn_digitalsellingactivetaskid`, `msdyn_entitytype`, `msdyn_inputparameters`, `msdyn_inputtime`, `msdyn_name`, `msdyn_recordid`, `msdyn_retentiontimeindays`, `msdyn_tasktype`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_digitalsellingactivetask_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_digitalsellingactivetask_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_digitalsellingactivetask_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_digitalsellingactivetask_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_digitalsellingactivetask` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_digitalsellingactivetask_SyncErrors` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_DuplicateMatchingRecord` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_DuplicateBaseRecord` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `baserecordid` | `baserecordid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_AsyncOperations` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_MailboxTrackingFolders` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_UserEntityInstanceDatas` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `objectid` | `objectid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_ProcessSession` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_BulkDeleteFailures` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `regardingobjectid` | `regardingobjectid_msdyn_digitalsellingactivetask` |
| `msdyn_digitalsellingactivetask_PrincipalObjectAttributeAccesses` | [msdyn_digitalsellingactivetask](msdyn_digitalsellingactivetask.md) | `objectid` | `objectid_msdyn_digitalsellingactivetask` |


## Source

Generated from [msdyn_digitalsellingactivetask (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_digitalsellingactivetask')) on 2026-05-07.