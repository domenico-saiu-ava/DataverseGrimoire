---
logical: "applicationuser"
display: "ApplicationUser"
entitySetName: "applicationusers"
primaryId: "applicationuserid"
primaryName: "applicationname"
tableType: "Standard"
ownership: "BusinessOwned"
---

# ApplicationUser

Application User that has non-interactive access to the CDS system

## Identity

| Property | Value |
| --- | --- |
| Logical name | `applicationuser` |
| Display name | ApplicationUser |
| Display (plural) | ApplicationUsers |
| Schema name | `ApplicationUser` |
| Entity set (Web API) | `applicationusers` |
| Primary id attribute | `applicationuserid` |
| Primary name attribute | `applicationname` |
| Table type | Standard |
| Ownership | BusinessOwned |

## Web API examples

```http
GET /api/data/v9.2/applicationusers?$select=applicationname&$top=10
GET /api/data/v9.2/applicationusers(<guid>)
POST /api/data/v9.2/applicationusers
PATCH /api/data/v9.2/applicationusers(<guid>)
DELETE /api/data/v9.2/applicationusers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **13**

### Writable

`ApplicationId`, `ApplicationName`, `ApplicationType`, `ApplicationUserId`, `BusinessUnitId`, `CanImpersonateAsSystemUser`, `ImportSequenceNumber`, `IsCustomizable`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_applicationuser` | [businessunit](businessunit.md) | `businessunitid` | `businessunitid` |
| `lk_applicationuser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_applicationuser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_applicationuser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_applicationuser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuser_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `applicationuser_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `applicationuser_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `applicationuser_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `applicationuser_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `applicationuser_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `applicationuser_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `applicationuser_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `applicationuserprofile` | [applicationuserid](applicationuserid.md) | _n/a_ | _n/a_ |
| `applicationuserrole` | [applicationuserid](applicationuserid.md) | _n/a_ | _n/a_ |

## Source

Generated from [applicationuser.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/applicationuser.md) on 2026-05-06.