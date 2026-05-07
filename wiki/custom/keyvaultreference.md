---
logical: "keyvaultreference"
display: "Key Vault Reference"
entitySetName: "keyvaultreferences"
primaryId: "keyvaultreferenceid"
primaryName: "keyvaulturi"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `isvalidated`, `keyname`, `keytype`, `keyvaultreferenceid`, `keyvaulturi`, `managedidentityid`, `overriddencreatedon`, `ownerid`, `preauthorizedapplicationtype`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_keyvaultreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_keyvaultreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_keyvaultreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_keyvaultreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_keyvaultreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_keyvaultreference` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_keyvaultreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_keyvaultreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `managedidentity_KeyVaultReference` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `keyvaultreference_emailserverprofile_keyvaultreferenceid` | [keyvaultreference](keyvaultreference.md) | `keyvaultreferenceid` | `keyvaultreferenceid` |
| `keyvaultreference_SyncErrors` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `keyvaultreference_DuplicateMatchingRecord` | [keyvaultreference](keyvaultreference.md) | `duplicaterecordid` | `duplicaterecordid_keyvaultreference` |
| `keyvaultreference_DuplicateBaseRecord` | [keyvaultreference](keyvaultreference.md) | `baserecordid` | `baserecordid_keyvaultreference` |
| `keyvaultreference_AsyncOperations` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `keyvaultreference_MailboxTrackingFolders` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `keyvaultreference_UserEntityInstanceDatas` | [keyvaultreference](keyvaultreference.md) | `objectid` | `objectid_keyvaultreference` |
| `keyvaultreference_ProcessSession` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `keyvaultreference_BulkDeleteFailures` | [keyvaultreference](keyvaultreference.md) | `regardingobjectid` | `regardingobjectid_keyvaultreference` |
| `keyvaultreference_PrincipalObjectAttributeAccesses` | [keyvaultreference](keyvaultreference.md) | `objectid` | `objectid_keyvaultreference` |
| `keyvaultreference_ManagedIdentity` | [keyvaultreference](keyvaultreference.md) | `keyvaultreferenceid` | `keyvaultreferenceid` |
| `keyvaultreference_ServiceEndpoint` | [keyvaultreference](keyvaultreference.md) | `keyvaultreferenceid` | `keyvaultreferenceid` |


## Source

Generated from [keyvaultreference (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='keyvaultreference')) on 2026-05-07.