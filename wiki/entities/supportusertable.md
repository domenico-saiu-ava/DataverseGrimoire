---
logical: "supportusertable"
display: "SupportUserTable"
entitySetName: "supportusertables"
primaryId: "supportusertableid"
primaryName: "aaduserobjectid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SupportUserTable

## Identity

| Property | Value |
| --- | --- |
| Logical name | `supportusertable` |
| Display name | SupportUserTable |
| Display (plural) | SupportUserTables |
| Schema name | `supportusertable` |
| Entity set (Web API) | `supportusertables` |
| Primary id attribute | `supportusertableid` |
| Primary name attribute | `aaduserobjectid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/supportusertables?$select=aaduserobjectid&$top=10
GET /api/data/v9.2/supportusertables(<guid>)
POST /api/data/v9.2/supportusertables
PATCH /api/data/v9.2/supportusertables(<guid>)
DELETE /api/data/v9.2/supportusertables(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`AADUserObjectId`, `EnabledforSoftDelete`, `ExpiryDateTime`, `IdentityProvider`, `ImportSequenceNumber`, `IsActive`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `supportusertableId`, `TenantId`, `TimeZoneRuleVersionNumber`, `UPN`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_supportusertable_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_supportusertable_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_supportusertable_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_supportusertable_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_supportusertable` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `supportusertable_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `supportusertable_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `supportusertable_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `supportusertable_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `supportusertable_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `supportusertable_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `supportusertable_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `supportusertable_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [supportusertable.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/supportusertable.md) on 2026-05-06.