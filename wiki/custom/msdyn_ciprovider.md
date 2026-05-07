---
logical: "msdyn_ciprovider"
display: "Provider di Framework di integrazione del canale v1.0"
entitySetName: "msdyn_ciproviders"
primaryId: "msdyn_ciproviderid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Provider di Framework di integrazione del canale v1.0

Entità che contiene i dati di configurazione per un provider di canale in base a Framework di integrazione del canale v1.0

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ciprovider` |
| Display name | Provider di Framework di integrazione del canale v1.0 |
| Display (plural) | Provider di Framework di integrazione del canale v1.0 |
| Schema name | `msdyn_ciprovider` |
| Entity set (Web API) | `msdyn_ciproviders` |
| Primary id attribute | `msdyn_ciproviderid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ciproviders?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ciproviders(<guid>)
POST /api/data/v9.2/msdyn_ciproviders
PATCH /api/data/v9.2/msdyn_ciproviders(<guid>)
DELETE /api/data/v9.2/msdyn_ciproviders(<guid>)
```

## Attributes

Writable: **21** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_appselector`, `msdyn_channelprovidericon`, `msdyn_cifsolversion`, `msdyn_ciproviderapiversion`, `msdyn_ciproviderid`, `msdyn_clicktoact`, `msdyn_customparams`, `msdyn_enableanalytics`, `msdyn_label`, `msdyn_landingurl`, `msdyn_name`, `msdyn_roleselector`, `msdyn_sandboxconfiguration`, `msdyn_sortorder`, `msdyn_trusteddomain`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ciprovider_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ciprovider_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ciprovider_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ciprovider_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_ciprovider` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_webresource_ciprovider_channelprovidericon` | [webresource](webresource.md) | `msdyn_channelprovidericon` | `msdyn_channelprovidericon` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ciprovider_SyncErrors` | [msdyn_ciprovider](msdyn_ciprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_ciprovider` |
| `msdyn_ciprovider_DuplicateMatchingRecord` | [msdyn_ciprovider](msdyn_ciprovider.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_ciprovider` |
| `msdyn_ciprovider_DuplicateBaseRecord` | [msdyn_ciprovider](msdyn_ciprovider.md) | `baserecordid` | `baserecordid_msdyn_ciprovider` |
| `msdyn_ciprovider_AsyncOperations` | [msdyn_ciprovider](msdyn_ciprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_ciprovider` |
| `msdyn_ciprovider_MailboxTrackingFolders` | [msdyn_ciprovider](msdyn_ciprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_ciprovider` |
| `msdyn_ciprovider_UserEntityInstanceDatas` | [msdyn_ciprovider](msdyn_ciprovider.md) | `objectid` | `objectid_msdyn_ciprovider` |
| `msdyn_ciprovider_ProcessSession` | [msdyn_ciprovider](msdyn_ciprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_ciprovider` |
| `msdyn_ciprovider_BulkDeleteFailures` | [msdyn_ciprovider](msdyn_ciprovider.md) | `regardingobjectid` | `regardingobjectid_msdyn_ciprovider` |
| `msdyn_ciprovider_PrincipalObjectAttributeAccesses` | [msdyn_ciprovider](msdyn_ciprovider.md) | `objectid` | `objectid_msdyn_ciprovider` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ciprovider_systemuser_membership` | [systemuser](systemuser.md) | _n/a_ | `msdyn_ciprovider_systemuser_membership` |

## Source

Generated from [msdyn_ciprovider (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ciprovider')) on 2026-05-07.