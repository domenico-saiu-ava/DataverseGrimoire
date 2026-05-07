---
logical: "datalakeworkspacepermission"
display: "Autorizzazione dell'area di lavoro Data Lake"
entitySetName: "datalakeworkspacepermissions"
primaryId: "datalakeworkspacepermissionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Autorizzazione dell'area di lavoro Data Lake

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakeworkspacepermission` |
| Display name | Autorizzazione dell'area di lavoro Data Lake |
| Display (plural) | Autorizzazioni dell'area di lavoro Data Lake |
| Schema name | `datalakeworkspacepermission` |
| Entity set (Web API) | `datalakeworkspacepermissions` |
| Primary id attribute | `datalakeworkspacepermissionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/datalakeworkspacepermissions?$select=name&$top=10
GET /api/data/v9.2/datalakeworkspacepermissions(<guid>)
POST /api/data/v9.2/datalakeworkspacepermissions
PATCH /api/data/v9.2/datalakeworkspacepermissions(<guid>)
DELETE /api/data/v9.2/datalakeworkspacepermissions(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`appid`, `canexecute`, `canread`, `canwrite`, `datalakeworkspacepermission_uniquename`, `datalakeworkspacepermissionid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `tenantid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `whitelistedappid`, `workspaceid`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `statecode`, `statuscode`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_datalakeworkspacepermission_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakeworkspacepermission_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakeworkspacepermission_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakeworkspacepermission_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_datalakeworkspacepermission` | [organization](organization.md) | `organizationid` | `organizationid` |
| `datalakeworkspace_workspacepermission` | [datalakeworkspace](datalakeworkspace.md) | `workspaceid` | `workspaceid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakeworkspacepermission_SyncErrors` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_DuplicateMatchingRecord` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `duplicaterecordid` | `duplicaterecordid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_DuplicateBaseRecord` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `baserecordid` | `baserecordid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_AsyncOperations` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_MailboxTrackingFolders` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_UserEntityInstanceDatas` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `objectid` | `objectid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_ProcessSession` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_BulkDeleteFailures` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspacepermission` |
| `datalakeworkspacepermission_PrincipalObjectAttributeAccesses` | [datalakeworkspacepermission](datalakeworkspacepermission.md) | `objectid` | `objectid_datalakeworkspacepermission` |


## Source

Generated from [datalakeworkspacepermission (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='datalakeworkspacepermission')) on 2026-05-07.