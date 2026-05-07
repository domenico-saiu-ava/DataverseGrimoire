---
logical: "powerpagesmanagedidentity"
display: "PowerPagesManagedIdentity"
entitySetName: "powerpagesmanagedidentities"
primaryId: "powerpagesmanagedidentityid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `managedidentity`, `name`, `overriddencreatedon`, `ownerid`, `portalid`, `powerpagesmanagedidentityid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_powerpagesmanagedidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesmanagedidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesmanagedidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesmanagedidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_powerpagesmanagedidentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_powerpagesmanagedidentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_powerpagesmanagedidentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_powerpagesmanagedidentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `PowerPagesManagedIdentity_ManagedIdentity_ManagedIdentity` | [managedidentity](managedidentity.md) | `managedidentity` | `ManagedIdentity` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesmanagedidentity_SyncErrors` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_DuplicateMatchingRecord` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `duplicaterecordid` | `duplicaterecordid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_DuplicateBaseRecord` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `baserecordid` | `baserecordid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_AsyncOperations` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_MailboxTrackingFolders` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_UserEntityInstanceDatas` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `objectid` | `objectid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_ProcessSession` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_BulkDeleteFailures` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `regardingobjectid` | `regardingobjectid_powerpagesmanagedidentity` |
| `powerpagesmanagedidentity_PrincipalObjectAttributeAccesses` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `objectid` | `objectid_powerpagesmanagedidentity` |
| `ComponentId_CertificateCredential_PowerPagesManagedIdentity` | [powerpagesmanagedidentity](powerpagesmanagedidentity.md) | `componentid` | `ComponentId_PowerPagesManagedIdentity` |


## Source

Generated from [powerpagesmanagedidentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='powerpagesmanagedidentity')) on 2026-05-07.