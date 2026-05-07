---
logical: "adx_externalidentity"
display: "Identità esterna"
entitySetName: "adx_externalidentities"
primaryId: "adx_externalidentityid"
primaryName: "adx_username"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Identità esterna

## Identity

| Property | Value |
| --- | --- |
| Logical name | `adx_externalidentity` |
| Display name | Identità esterna |
| Display (plural) | Identità esterne |
| Schema name | `adx_externalidentity` |
| Entity set (Web API) | `adx_externalidentities` |
| Primary id attribute | `adx_externalidentityid` |
| Primary name attribute | `adx_username` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/adx_externalidentities?$select=adx_username&$top=10
GET /api/data/v9.2/adx_externalidentities(<guid>)
POST /api/data/v9.2/adx_externalidentities
PATCH /api/data/v9.2/adx_externalidentities(<guid>)
DELETE /api/data/v9.2/adx_externalidentities(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`adx_contactid`, `adx_externalidentityid`, `adx_identityprovidername`, `adx_username`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_adx_externalidentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_adx_externalidentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_adx_externalidentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_adx_externalidentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_adx_externalidentity` | [organization](organization.md) | `organizationid` | `organizationid` |
| `adx_contact_externalidentity` | [contact](contact.md) | `adx_contactid` | `adx_contactid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_externalidentity_SyncErrors` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_externalidentity_AsyncOperations` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_externalidentity_MailboxTrackingFolders` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_externalidentity_UserEntityInstanceDatas` | [adx_externalidentity](adx_externalidentity.md) | `objectid` | `objectid_adx_externalidentity` |
| `adx_externalidentity_ProcessSession` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_externalidentity_BulkDeleteFailures` | [adx_externalidentity](adx_externalidentity.md) | `regardingobjectid` | `regardingobjectid_adx_externalidentity` |
| `adx_externalidentity_PrincipalObjectAttributeAccesses` | [adx_externalidentity](adx_externalidentity.md) | `objectid` | `objectid_adx_externalidentity` |


## Source

Generated from [adx_externalidentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='adx_externalidentity')) on 2026-05-07.