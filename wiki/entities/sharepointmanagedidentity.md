---
logical: "sharepointmanagedidentity"
display: "SharePoint Managed Identity"
entitySetName: "sharepointmanagedidentities"
primaryId: "sharepointmanagedidentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# SharePoint Managed Identity

Entity representing a managed identity for SharePoint, used for authentication and authorization purposes.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharepointmanagedidentity` |
| Display name | SharePoint Managed Identity |
| Display (plural) | SharePoint Managed Identities |
| Schema name | `SharePointManagedIdentity` |
| Entity set (Web API) | `sharepointmanagedidentities` |
| Primary id attribute | `sharepointmanagedidentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sharepointmanagedidentities?$select=name&$top=10
GET /api/data/v9.2/sharepointmanagedidentities(<guid>)
POST /api/data/v9.2/sharepointmanagedidentities
PATCH /api/data/v9.2/sharepointmanagedidentities(<guid>)
DELETE /api/data/v9.2/sharepointmanagedidentities(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `ManagedIdentityId`, `Name`, `OverriddenCreatedOn`, `SharePointManagedIdentityId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharepointmanagedidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharepointmanagedidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharepointmanagedidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharepointmanagedidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `ManagedIdentity_SharePointManagedIdentity_ManagedIdentityId` | [managedidentity](managedidentity.md) | `managedidentityid` | `ManagedIdentityId` |
| `organization_sharepointmanagedidentity` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharepointmanagedidentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharepointmanagedidentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharepointmanagedidentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharepointmanagedidentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sharepointmanagedidentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharepointmanagedidentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sharepointmanagedidentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharepointmanagedidentity.md) on 2026-05-06.