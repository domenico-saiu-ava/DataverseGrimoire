---
logical: "managedidentity"
display: "Managed Identity"
entitySetName: "managedidentities"
primaryId: "managedidentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Managed Identity

Contains data to represent an Azure Active Directory Application used to connect to secure web-hosted resources.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `managedidentity` |
| Display name | Managed Identity |
| Display (plural) | Managed Identities |
| Schema name | `ManagedIdentity` |
| Entity set (Web API) | `managedidentities` |
| Primary id attribute | `managedidentityid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/managedidentities?$select=name&$top=10
GET /api/data/v9.2/managedidentities(<guid>)
POST /api/data/v9.2/managedidentities
PATCH /api/data/v9.2/managedidentities(<guid>)
DELETE /api/data/v9.2/managedidentities(<guid>)
```

## Attributes

Writable: **19** · Read-only: **19**

### Writable

`ApplicationId`, `ClientSecret`, `CredentialSource`, `IdentityType`, `ImportSequenceNumber`, `IsCustomizable`, `KeyVaultReferenceId`, `ManagedIdentityId`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `SubjectScope`, `TenantId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `Version`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `ObjectId`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_managedidentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `keyvaultreference_ManagedIdentity` | [keyvaultreference](keyvaultreference.md) | `keyvaultreferenceid` | `keyvaultreferenceid` |
| `lk_managedidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_managedidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_managedidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_managedidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_managedidentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_managedidentity` | [team](team.md) | `owningteam` | `owningteam` |
| `user_managedidentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ComponentId_CertificateCredential_Managedidentity` | _n/a_ | `componentid` | _n/a_ |
| `managedidentity_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `managedidentity_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `managedidentity_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `managedidentity_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `managedidentity_emailserverprofile_acsmanagedidentityid` | _n/a_ | `acsmanagedidentityid` | _n/a_ |
| `managedidentity_emailserverprofile_managedidentityid` | _n/a_ | `managedidentityid` | _n/a_ |
| `managedidentity_emailserverprofile_purviewmanagedidentityid` | _n/a_ | `purviewmanagedidentityid` | _n/a_ |
| `managedidentity_KeyVaultReference` | _n/a_ | `managedidentityid` | _n/a_ |
| `managedidentity_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `managedidentity_PluginAssembly` | _n/a_ | `managedidentityid` | _n/a_ |
| `managedidentity_pluginpackage` | _n/a_ | `managedidentityid` | _n/a_ |
| `managedidentity_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `managedidentity_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `managedidentity_ServiceEndpoint` | _n/a_ | `managedidentityid` | _n/a_ |
| `ManagedIdentity_SharePointManagedIdentity_ManagedIdentityId` | _n/a_ | `managedidentityid` | _n/a_ |
| `managedidentity_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `PowerPagesManagedIdentity_ManagedIdentity_ManagedIdentity` | _n/a_ | `managedidentity` | _n/a_ |


## Source

Generated from [managedidentity.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/managedidentity.md) on 2026-05-06.