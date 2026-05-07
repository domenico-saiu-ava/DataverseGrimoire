---
logical: "powerpagesmanagedidentity"
display: "PowerPagesManagedIdentity"
entitySetName: "powerpagesmanagedidentities"
primaryId: "powerpagesmanagedidentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# PowerPagesManagedIdentity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesmanagedidentity` |
| Display name | PowerPagesManagedIdentity |
| Display (plural) | PowerPagesManagedIdentities |
| Schema name | `PowerPagesManagedIdentity` |
| Entity set (Web API) | `powerpagesmanagedidentities` |
| Primary id attribute | `powerpagesmanagedidentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesmanagedidentities?$select=name&$top=10
GET /api/data/v9.2/powerpagesmanagedidentities(<guid>)
POST /api/data/v9.2/powerpagesmanagedidentities
PATCH /api/data/v9.2/powerpagesmanagedidentities(<guid>)
DELETE /api/data/v9.2/powerpagesmanagedidentities(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `ManagedIdentity`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PortalId`, `PowerPagesManagedIdentityId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagesmanagedidentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_powerpagesmanagedidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesmanagedidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesmanagedidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesmanagedidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagesmanagedidentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `PowerPagesManagedIdentity_ManagedIdentity_ManagedIdentity` | [managedidentity](managedidentity.md) | `managedidentity` | `ManagedIdentity` |
| `team_powerpagesmanagedidentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagesmanagedidentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ComponentId_CertificateCredential_PowerPagesManagedIdentity` | _n/a_ | `componentid` | _n/a_ |
| `powerpagesmanagedidentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesmanagedidentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesmanagedidentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `powerpagesmanagedidentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `powerpagesmanagedidentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesmanagedidentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesmanagedidentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesmanagedidentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerpagesmanagedidentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesmanagedidentity.md) on 2026-05-06.