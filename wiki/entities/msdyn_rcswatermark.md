---
logical: "msdyn_rcswatermark"
display: "RCS Watermark"
entitySetName: "msdyn_rcswatermarks"
primaryId: "msdyn_rcswatermarkid"
primaryName: "msdyn_ownerid"
tableType: "Standard"
ownership: "UserOwned"
---

# RCS Watermark

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rcswatermark` |
| Display name | RCS Watermark |
| Display (plural) | RCS Watermarks |
| Schema name | `msdyn_RCSWatermark` |
| Entity set (Web API) | `msdyn_rcswatermarks` |
| Primary id attribute | `msdyn_rcswatermarkid` |
| Primary name attribute | `msdyn_ownerid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rcswatermarks?$select=msdyn_ownerid&$top=10
GET /api/data/v9.2/msdyn_rcswatermarks(<guid>)
POST /api/data/v9.2/msdyn_rcswatermarks
PATCH /api/data/v9.2/msdyn_rcswatermarks(<guid>)
DELETE /api/data/v9.2/msdyn_rcswatermarks(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_OwnerId`, `msdyn_RCSWatermarkId`, `msdyn_SourceType`, `msdyn_Watermark`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_rcswatermark` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_rcswatermark_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rcswatermark_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rcswatermark_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rcswatermark_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_rcswatermark` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_rcswatermark` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_rcswatermark` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rcswatermark_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rcswatermark_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rcswatermark_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rcswatermark_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_rcswatermark_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_rcswatermark_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_rcswatermark.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_rcswatermark.md) on 2026-05-06.