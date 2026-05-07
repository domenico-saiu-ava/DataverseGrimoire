---
logical: "retentionoperationdetail"
display: "RetentionOperationDetail"
entitySetName: "retentionoperationdetails"
primaryId: "retentionoperationdetailid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
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

`EntityLogicalName`, `FailedCount`, `ImportSequenceNumber`, `IsRootEntity`, `Name`, `OverriddenCreatedOn`, `RetentionCount`, `retentionoperationdetailId`, `RetentionOperationId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

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

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionoperationdetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperationdetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperationdetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperationdetail_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `retentionoperationdetail_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionoperationdetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [retentionoperationdetail.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/retentionoperationdetail.md) on 2026-05-06.