---
logical: "bulkarchiveoperationdetail"
display: "BulkArchiveOperationDetail"
entitySetName: "bulkarchiveoperationdetails"
primaryId: "bulkarchiveoperationdetailid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# BulkArchiveOperationDetail

This is Deprecated Entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `bulkarchiveoperationdetail` |
| Display name | BulkArchiveOperationDetail |
| Display (plural) | BulkArchiveOperationDetail |
| Schema name | `BulkArchiveOperationDetail` |
| Entity set (Web API) | `bulkarchiveoperationdetails` |
| Primary id attribute | `bulkarchiveoperationdetailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/bulkarchiveoperationdetails?$select=name&$top=10
GET /api/data/v9.2/bulkarchiveoperationdetails(<guid>)
POST /api/data/v9.2/bulkarchiveoperationdetails
PATCH /api/data/v9.2/bulkarchiveoperationdetails(<guid>)
DELETE /api/data/v9.2/bulkarchiveoperationdetails(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`archivedcount`, `bulkarchiveoperationdetailid`, `bulkarchiveoperationid`, `entitylogicalname`, `failedcount`, `importsequencenumber`, `isrootentity`, `name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_bulkarchiveoperationdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_bulkarchiveoperationdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_bulkarchiveoperationdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_bulkarchiveoperationdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_bulkarchiveoperationdetail` | [organization](organization.md) | `organizationid` | `organizationid` |
| `bulkarchiveoperation_bulkarchiveoperationdetail_BulkArchiveOperationId` | [bulkarchiveoperation](bulkarchiveoperation.md) | `bulkarchiveoperationid` | `BulkArchiveOperationId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bulkarchiveoperationdetail_SyncErrors` | [bulkarchiveoperationdetail](bulkarchiveoperationdetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperationdetail` |
| `bulkarchiveoperationdetail_AsyncOperations` | [bulkarchiveoperationdetail](bulkarchiveoperationdetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperationdetail` |
| `bulkarchiveoperationdetail_MailboxTrackingFolders` | [bulkarchiveoperationdetail](bulkarchiveoperationdetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperationdetail` |
| `bulkarchiveoperationdetail_UserEntityInstanceDatas` | [bulkarchiveoperationdetail](bulkarchiveoperationdetail.md) | `objectid` | `objectid_bulkarchiveoperationdetail` |
| `bulkarchiveoperationdetail_ProcessSession` | [bulkarchiveoperationdetail](bulkarchiveoperationdetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperationdetail` |
| `bulkarchiveoperationdetail_BulkDeleteFailures` | [bulkarchiveoperationdetail](bulkarchiveoperationdetail.md) | `regardingobjectid` | `regardingobjectid_bulkarchiveoperationdetail` |
| `bulkarchiveoperationdetail_PrincipalObjectAttributeAccesses` | [bulkarchiveoperationdetail](bulkarchiveoperationdetail.md) | `objectid` | `objectid_bulkarchiveoperationdetail` |


## Source

Generated from [bulkarchiveoperationdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='bulkarchiveoperationdetail')) on 2026-05-07.