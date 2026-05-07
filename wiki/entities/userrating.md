---
logical: "userrating"
display: "User Rating"
entitySetName: "userratings"
primaryId: "userratingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# User Rating

## Identity

| Property | Value |
| --- | --- |
| Logical name | `userrating` |
| Display name | User Rating |
| Display (plural) | User Ratings |
| Schema name | `userrating` |
| Entity set (Web API) | `userratings` |
| Primary id attribute | `userratingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/userratings?$select=name&$top=10
GET /api/data/v9.2/userratings(<guid>)
POST /api/data/v9.2/userratings
PATCH /api/data/v9.2/userratings(<guid>)
DELETE /api/data/v9.2/userratings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **8**

### Writable

`AppModuleId`, `Browser`, `Comment`, `Device`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `Score`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `userratingId`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmodule_userrating_app` | [appmodule](appmodule.md) | `appmoduleid` | `AppModuleId` |
| `lk_userrating_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_userrating_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_userrating_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_userrating_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_userrating` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `userrating_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `userrating_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `userrating_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `userrating_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `userrating_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `userrating_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `userrating_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `userrating_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [userrating.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/userrating.md) on 2026-05-06.