---
logical: "retentionsuccessdetail"
display: "RetentionSuccessDetail"
entitySetName: "retentionsuccessdetails"
primaryId: "retentionsuccessdetailid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# RetentionSuccessDetail

Retention Success details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionsuccessdetail` |
| Display name | RetentionSuccessDetail |
| Display (plural) | RetentionSuccessDetail |
| Schema name | `retentionsuccessdetail` |
| Entity set (Web API) | `retentionsuccessdetails` |
| Primary id attribute | `retentionsuccessdetailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionsuccessdetails?$select=name&$top=10
GET /api/data/v9.2/retentionsuccessdetails(<guid>)
POST /api/data/v9.2/retentionsuccessdetails
PATCH /api/data/v9.2/retentionsuccessdetails(<guid>)
DELETE /api/data/v9.2/retentionsuccessdetails(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`EntityLogicalName`, `ImportSequenceNumber`, `Name`, `OperationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RecordId`, `retentionsuccessdetailId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msft_DataState`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_retentionsuccessdetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_retentionsuccessdetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionsuccessdetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionsuccessdetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionsuccessdetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_retentionsuccessdetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_retentionsuccessdetail` | [team](team.md) | `owningteam` | `owningteam` |
| `user_retentionsuccessdetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionsuccessdetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionsuccessdetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionsuccessdetail_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `retentionsuccessdetail_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `retentionsuccessdetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionsuccessdetail_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `retentionsuccessdetail_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionsuccessdetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [retentionsuccessdetail.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/retentionsuccessdetail.md) on 2026-05-06.