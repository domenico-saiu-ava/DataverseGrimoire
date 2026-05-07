---
logical: "retentionfailuredetail"
display: "RetentionFailureDetail"
entitySetName: "retentionfailuredetails"
primaryId: "retentionfailuredetailid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# RetentionFailureDetail

Retention failure details.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `retentionfailuredetail` |
| Display name | RetentionFailureDetail |
| Display (plural) | RetentionFailureDetail |
| Schema name | `retentionfailuredetail` |
| Entity set (Web API) | `retentionfailuredetails` |
| Primary id attribute | `retentionfailuredetailid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/retentionfailuredetails?$select=name&$top=10
GET /api/data/v9.2/retentionfailuredetails(<guid>)
POST /api/data/v9.2/retentionfailuredetails
PATCH /api/data/v9.2/retentionfailuredetails(<guid>)
DELETE /api/data/v9.2/retentionfailuredetails(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`EntityLogicalName`, `ImportSequenceNumber`, `Message`, `Name`, `Operation`, `OperationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RecordId`, `retentionfailuredetailId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_retentionfailuredetail` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_retentionfailuredetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_retentionfailuredetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_retentionfailuredetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_retentionfailuredetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_retentionfailuredetail` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_retentionfailuredetail` | [team](team.md) | `owningteam` | `owningteam` |
| `user_retentionfailuredetail` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `retentionfailuredetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionfailuredetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionfailuredetail_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `retentionfailuredetail_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `retentionfailuredetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionfailuredetail_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `retentionfailuredetail_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `retentionfailuredetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [retentionfailuredetail.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/retentionfailuredetail.md) on 2026-05-06.