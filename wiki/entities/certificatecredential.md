---
logical: "certificatecredential"
display: "CertificateCredential"
entitySetName: "certificatecredentials"
primaryId: "certificatecredentialid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# CertificateCredential

Contains data to represent an Azure Active Directory Application used to connect to secure web-hosted resources.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `certificatecredential` |
| Display name | CertificateCredential |
| Display (plural) | CertificateCredentials |
| Schema name | `CertificateCredential` |
| Entity set (Web API) | `certificatecredentials` |
| Primary id attribute | `certificatecredentialid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/certificatecredentials?$select=name&$top=10
GET /api/data/v9.2/certificatecredentials(<guid>)
POST /api/data/v9.2/certificatecredentials
PATCH /api/data/v9.2/certificatecredentials(<guid>)
DELETE /api/data/v9.2/certificatecredentials(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`CertificateCredentialId`, `ComponentId`, `ComponentIdType`, `ImportSequenceNumber`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `Thumbprint`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_certificatecredential` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ComponentId_CertificateCredential_Managedidentity` | [managedidentity](managedidentity.md) | `componentid` | `ComponentId_managedidentity` |
| `ComponentId_CertificateCredential_PowerPagesManagedIdentity` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `componentid` | `ComponentId_PowerPagesManagedIdentity` |
| `lk_certificatecredential_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_certificatecredential_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_certificatecredential_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_certificatecredential_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_certificatecredential` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_certificatecredential` | [team](team.md) | `owningteam` | `owningteam` |
| `user_certificatecredential` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `certificatecredential_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `certificatecredential_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `certificatecredential_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `certificatecredential_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `certificatecredential_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `certificatecredential_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `certificatecredential_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `certificatecredential_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [certificatecredential.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/certificatecredential.md) on 2026-05-06.