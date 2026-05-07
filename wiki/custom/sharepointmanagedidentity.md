---
logical: "sharepointmanagedidentity"
display: "Identità gestita di SharePoint"
entitySetName: "sharepointmanagedidentities"
primaryId: "sharepointmanagedidentityid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Identità gestita di SharePoint

Entità che rappresenta un'identità gestita per SharePoint, utilizzata a scopo di autenticazione e autorizzazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharepointmanagedidentity` |
| Display name | Identità gestita di SharePoint |
| Display (plural) | Identità gestite di SharePoint |
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

`importsequencenumber`, `iscustomizable`, `managedidentityid`, `name`, `overriddencreatedon`, `sharepointmanagedidentityid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharepointmanagedidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharepointmanagedidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharepointmanagedidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharepointmanagedidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sharepointmanagedidentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `ManagedIdentity_SharePointManagedIdentity_ManagedIdentityId` | [managedidentity](managedidentity.md) | `managedidentityid` | `ManagedIdentityId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharepointmanagedidentity_SyncErrors` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `sharepointmanagedidentity_AsyncOperations` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `sharepointmanagedidentity_MailboxTrackingFolders` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `sharepointmanagedidentity_UserEntityInstanceDatas` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `objectid` | `objectid_sharepointmanagedidentity` |
| `sharepointmanagedidentity_ProcessSession` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `sharepointmanagedidentity_BulkDeleteFailures` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_sharepointmanagedidentity` |
| `sharepointmanagedidentity_PrincipalObjectAttributeAccesses` | [sharepointmanagedidentity](sharepointmanagedidentity.md) | `objectid` | `objectid_sharepointmanagedidentity` |


## Source

Generated from [sharepointmanagedidentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sharepointmanagedidentity')) on 2026-05-07.