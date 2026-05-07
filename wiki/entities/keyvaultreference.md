---
logical: "keyvaultreference"
display: "Key Vault Reference"
entitySetName: "keyvaultreferences"
primaryId: "keyvaultreferenceid"
primaryName: "keyvaulturi"
tableType: "Standard"
ownership: "UserOwned"
---

# Key Vault Reference

Contains data that refers to an Azure Key Vault containing credentials used to connect to secure web-hosted resources.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `keyvaultreference` |
| Display name | Key Vault Reference |
| Display (plural) | KeyVault References |
| Schema name | `KeyVaultReference` |
| Entity set (Web API) | `keyvaultreferences` |
| Primary id attribute | `keyvaultreferenceid` |
| Primary name attribute | `keyvaulturi` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/keyvaultreferences?$select=keyvaulturi&$top=10
GET /api/data/v9.2/keyvaultreferences(<guid>)
POST /api/data/v9.2/keyvaultreferences
PATCH /api/data/v9.2/keyvaultreferences(<guid>)
DELETE /api/data/v9.2/keyvaultreferences(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `IsValidated`, `KeyName`, `KeyType`, `KeyVaultReferenceId`, `KeyVaultUri`, `ManagedIdentityId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PreAuthorizedApplicationType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_keyvaultreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_keyvaultreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_keyvaultreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_keyvaultreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_keyvaultreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `managedidentity_KeyVaultReference` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `owner_keyvaultreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_keyvaultreference` | [team](team.md) | `owningteam` | `owningteam` |
| `user_keyvaultreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `keyvaultreference_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `keyvaultreference_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `keyvaultreference_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `keyvaultreference_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `keyvaultreference_emailserverprofile_keyvaultreferenceid` | _n/a_ | `keyvaultreferenceid` | _n/a_ |
| `keyvaultreference_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `keyvaultreference_ManagedIdentity` | _n/a_ | `keyvaultreferenceid` | _n/a_ |
| `keyvaultreference_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `keyvaultreference_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `keyvaultreference_ServiceEndpoint` | _n/a_ | `keyvaultreferenceid` | _n/a_ |
| `keyvaultreference_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [keyvaultreference.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/keyvaultreference.md) on 2026-05-06.