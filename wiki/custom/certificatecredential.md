---
logical: "certificatecredential"
display: "CertificateCredential"
entitySetName: "certificatecredentials"
primaryId: "certificatecredentialid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **11** · Read-only: **10**

### Writable

`certificatecredentialid`, `componentid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `thumbprint`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_certificatecredential_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_certificatecredential_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_certificatecredential_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_certificatecredential_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_certificatecredential` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_certificatecredential` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_certificatecredential` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_certificatecredential` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ComponentId_CertificateCredential_Managedidentity` | [managedidentity](managedidentity.md) | `componentid` | `ComponentId_managedidentity` |
| `ComponentId_CertificateCredential_PowerPagesManagedIdentity` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `componentid` | `ComponentId_PowerPagesManagedIdentity` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `certificatecredential_SyncErrors` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `certificatecredential_DuplicateMatchingRecord` | [certificatecredential](certificatecredential.md) | `duplicaterecordid` | `duplicaterecordid_certificatecredential` |
| `certificatecredential_DuplicateBaseRecord` | [certificatecredential](certificatecredential.md) | `baserecordid` | `baserecordid_certificatecredential` |
| `certificatecredential_AsyncOperations` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `certificatecredential_MailboxTrackingFolders` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `certificatecredential_UserEntityInstanceDatas` | [certificatecredential](certificatecredential.md) | `objectid` | `objectid_certificatecredential` |
| `certificatecredential_ProcessSession` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `certificatecredential_BulkDeleteFailures` | [certificatecredential](certificatecredential.md) | `regardingobjectid` | `regardingobjectid_certificatecredential` |
| `certificatecredential_PrincipalObjectAttributeAccesses` | [certificatecredential](certificatecredential.md) | `objectid` | `objectid_certificatecredential` |


## Source

Generated from [certificatecredential (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='certificatecredential')) on 2026-05-07.