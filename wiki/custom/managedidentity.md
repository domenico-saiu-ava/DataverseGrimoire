---
logical: "managedidentity"
display: "Managed Identity"
entitySetName: "managedidentities"
primaryId: "managedidentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **18** · Read-only: **17**

### Writable

`applicationid`, `clientsecret`, `credentialsource`, `identitytype`, `importsequencenumber`, `iscustomizable`, `keyvaultreferenceid`, `managedidentityid`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `subjectscope`, `tenantid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `version`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `objectid`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_managedidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_managedidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_managedidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_managedidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_managedidentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_managedidentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_managedidentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_managedidentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `keyvaultreference_ManagedIdentity` | [keyvaultreference](keyvaultreference.md) | `keyvaultreferenceid` | `keyvaultreferenceid` |

### One-to-Many (22)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ComponentId_CertificateCredential_Managedidentity` | [managedidentity](managedidentity.md) | `componentid` | `ComponentId_managedidentity` |
| `ManagedIdentity_MCPServer_ManagedIdentityId` | [managedidentity](managedidentity.md) | `managedidentityid` | `ManagedIdentityId` |
| `managedidentity_emailserverprofile_managedidentityid` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `managedidentity_emailserverprofile_acsmanagedidentityid` | [managedidentity](managedidentity.md) | `acsmanagedidentityid` | `acsmanagedidentityid` |
| `managedidentity_emailserverprofile_purviewmanagedidentityid` | [managedidentity](managedidentity.md) | `purviewmanagedidentityid` | `purviewmanagedidentityid` |
| `ManagedIdentity_SharePointManagedIdentity_ManagedIdentityId` | [managedidentity](managedidentity.md) | `managedidentityid` | `ManagedIdentityId` |
| `managedidentity_emailserverprofile_powerplatformmanagedidentityid` | [managedidentity](managedidentity.md) | `powerplatformmanagedidentityid` | `powerplatformmanagedidentityid` |
| `PowerPagesManagedIdentity_ManagedIdentity_ManagedIdentity` | [managedidentity](managedidentity.md) | `managedidentity` | `ManagedIdentity` |
| `managedidentity_SyncErrors` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `managedidentity_DuplicateMatchingRecord` | [managedidentity](managedidentity.md) | `duplicaterecordid` | `duplicaterecordid_managedidentity` |
| `managedidentity_DuplicateBaseRecord` | [managedidentity](managedidentity.md) | `baserecordid` | `baserecordid_managedidentity` |
| `managedidentity_AsyncOperations` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `managedidentity_MailboxTrackingFolders` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `managedidentity_UserEntityInstanceDatas` | [managedidentity](managedidentity.md) | `objectid` | `objectid_managedidentity` |
| `managedidentity_ProcessSession` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `managedidentity_BulkDeleteFailures` | [managedidentity](managedidentity.md) | `regardingobjectid` | `regardingobjectid_managedidentity` |
| `managedidentity_PrincipalObjectAttributeAccesses` | [managedidentity](managedidentity.md) | `objectid` | `objectid_managedidentity` |
| `managedidentity_PluginAssembly` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `managedidentity_KeyVaultReference` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `managedidentity_ServiceEndpoint` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `managedidentity_pluginpackage` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `managedidentity_githubappconfig_ManagedIdentityId` | [managedidentity](managedidentity.md) | `managedidentityid` | `ManagedIdentityId` |


## Source

Generated from [managedidentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='managedidentity')) on 2026-05-07.