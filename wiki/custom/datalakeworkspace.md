---
logical: "datalakeworkspace"
display: "Area di lavoro Data Lake"
entitySetName: "datalakeworkspaces"
primaryId: "datalakeworkspaceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Area di lavoro Data Lake

Un'area di lavoro è un luogo per archiviare i dati in Azure Data Lake.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `datalakeworkspace` |
| Display name | Area di lavoro Data Lake |
| Display (plural) | Aree di lavoro Data Lake |
| Schema name | `datalakeworkspace` |
| Entity set (Web API) | `datalakeworkspaces` |
| Primary id attribute | `datalakeworkspaceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/datalakeworkspaces?$select=name&$top=10
GET /api/data/v9.2/datalakeworkspaces(<guid>)
POST /api/data/v9.2/datalakeworkspaces
PATCH /api/data/v9.2/datalakeworkspaces(<guid>)
DELETE /api/data/v9.2/datalakeworkspaces(<guid>)
```

## Attributes

Writable: **14** · Read-only: **18**

### Writable

`datalakeworkspace_uniquename`, `datalakeworkspaceid`, `importsequencenumber`, `iscustomercapacity`, `iscustomizable`, `isdeepcopyenabled`, `isprivate`, `name`, `overriddencreatedon`, `owningappid`, `tenantid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `whitelistedappid`

### Read-only

`componentidunique`, `componentstate`, `containerendpoint`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `path`, `solutionid`, `statecode`, `statuscode`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_datalakeworkspace_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_datalakeworkspace_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_datalakeworkspace_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_datalakeworkspace_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_datalakeworkspace` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `datalakeworkspace_SyncErrors` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspace_DuplicateMatchingRecord` | [datalakeworkspace](datalakeworkspace.md) | `duplicaterecordid` | `duplicaterecordid_datalakeworkspace` |
| `datalakeworkspace_DuplicateBaseRecord` | [datalakeworkspace](datalakeworkspace.md) | `baserecordid` | `baserecordid_datalakeworkspace` |
| `datalakeworkspace_AsyncOperations` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspace_MailboxTrackingFolders` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspace_UserEntityInstanceDatas` | [datalakeworkspace](datalakeworkspace.md) | `objectid` | `objectid_datalakeworkspace` |
| `datalakeworkspace_ProcessSession` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspace_BulkDeleteFailures` | [datalakeworkspace](datalakeworkspace.md) | `regardingobjectid` | `regardingobjectid_datalakeworkspace` |
| `datalakeworkspace_PrincipalObjectAttributeAccesses` | [datalakeworkspace](datalakeworkspace.md) | `objectid` | `objectid_datalakeworkspace` |
| `datalakeworkspace_workspacepermission` | [datalakeworkspace](datalakeworkspace.md) | `workspaceid` | `workspaceid` |


## Source

Generated from [datalakeworkspace (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='datalakeworkspace')) on 2026-05-07.