---
logical: "msdyn_provider"
display: "Provider"
entitySetName: "msdyn_providers"
primaryId: "msdyn_providerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Provider

Elenco di provider di terze parti che portano funzionalità nell'applicazione. 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_provider` |
| Display name | Provider |
| Display (plural) | Provider |
| Schema name | `msdyn_provider` |
| Entity set (Web API) | `msdyn_providers` |
| Primary id attribute | `msdyn_providerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_providers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_providers(<guid>)
POST /api/data/v9.2/msdyn_providers
PATCH /api/data/v9.2/msdyn_providers(<guid>)
DELETE /api/data/v9.2/msdyn_providers(<guid>)
```

## Attributes

Writable: **8** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_providerid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_provider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_provider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_provider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_provider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_provider` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_provider_msdyn_channelcapability_Provider` | [msdyn_provider](msdyn_provider.md) | `msdyn_provider` | `msdyn_Provider` |
| `msdyn_provider_SyncErrors` | [msdyn_provider](msdyn_provider.md) | `regardingobjectid` | `regardingobjectid_msdyn_provider` |
| `msdyn_provider_DuplicateMatchingRecord` | [msdyn_provider](msdyn_provider.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_provider` |
| `msdyn_provider_DuplicateBaseRecord` | [msdyn_provider](msdyn_provider.md) | `baserecordid` | `baserecordid_msdyn_provider` |
| `msdyn_provider_AsyncOperations` | [msdyn_provider](msdyn_provider.md) | `regardingobjectid` | `regardingobjectid_msdyn_provider` |
| `msdyn_provider_MailboxTrackingFolders` | [msdyn_provider](msdyn_provider.md) | `regardingobjectid` | `regardingobjectid_msdyn_provider` |
| `msdyn_provider_UserEntityInstanceDatas` | [msdyn_provider](msdyn_provider.md) | `objectid` | `objectid_msdyn_provider` |
| `msdyn_provider_ProcessSession` | [msdyn_provider](msdyn_provider.md) | `regardingobjectid` | `regardingobjectid_msdyn_provider` |
| `msdyn_provider_BulkDeleteFailures` | [msdyn_provider](msdyn_provider.md) | `regardingobjectid` | `regardingobjectid_msdyn_provider` |
| `msdyn_provider_PrincipalObjectAttributeAccesses` | [msdyn_provider](msdyn_provider.md) | `objectid` | `objectid_msdyn_provider` |


## Source

Generated from [msdyn_provider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_provider')) on 2026-05-07.