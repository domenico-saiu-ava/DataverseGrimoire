---
logical: "retentionoperationdetail"
display: "RetentionOperationDetail"
entitySetName: "retentionoperationdetails"
primaryId: "retentionoperationdetailid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RetentionOperationDetail

Table level details of retention execution.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionoperationdetail` |
| Display name | RetentionOperationDetail |
| Display (plural) | RetentionOperationDetail |
| Schema name | `retentionoperationdetail` |
| Entity set (Web API) | `retentionoperationdetails` |
| Primary id attribute | `retentionoperationdetailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionoperationdetails?$select=name&$top=10
GET /api/data/v9.2/retentionoperationdetails(<guid>)
POST /api/data/v9.2/retentionoperationdetails
PATCH /api/data/v9.2/retentionoperationdetails(<guid>)
DELETE /api/data/v9.2/retentionoperationdetails(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`entitylogicalname`, `failedcount`, `importsequencenumber`, `isrootentity`, `name`, `overriddencreatedon`, `retentioncount`, `retentionoperationdetailid`, `retentionoperationid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_retentionoperationdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionoperationdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionoperationdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionoperationdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_retentionoperationdetail` | [organization](organization.md) | `organizationid` | `organizationid` |
| `retentionoperation_retentionopera` | [retentionoperation](retentionoperation.md) | `retentionoperationid` | `RetentionOperationId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionoperationdetail_SyncErrors` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionoperationdetail_AsyncOperations` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionoperationdetail_MailboxTrackingFolders` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionoperationdetail_UserEntityInstanceDatas` | [retentionoperationdetail](retentionoperationdetail.md) | `objectid` | `objectid_retentionoperationdetail` |
| `retentionoperationdetail_ProcessSession` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionoperationdetail_BulkDeleteFailures` | [retentionoperationdetail](retentionoperationdetail.md) | `regardingobjectid` | `regardingobjectid_retentionoperationdetail` |
| `retentionoperationdetail_PrincipalObjectAttributeAccesses` | [retentionoperationdetail](retentionoperationdetail.md) | `objectid` | `objectid_retentionoperationdetail` |


## Source

Generated from [retentionoperationdetail (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='retentionoperationdetail')) on 2026-05-07.