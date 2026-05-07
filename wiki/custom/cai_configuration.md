---
logical: "cai_configuration"
display: "Configurazione"
entitySetName: "cai_configurations"
primaryId: "cai_configurationid"
primaryName: "cai_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione

Parametri di configurazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cai_configuration` |
| Display name | Configurazione |
| Display (plural) | Configurazioni |
| Schema name | `cai_configuration` |
| Entity set (Web API) | `cai_configurations` |
| Primary id attribute | `cai_configurationid` |
| Primary name attribute | `cai_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cai_configurations?$select=cai_name&$top=10
GET /api/data/v9.2/cai_configurations(<guid>)
POST /api/data/v9.2/cai_configurations
PATCH /api/data/v9.2/cai_configurations(<guid>)
DELETE /api/data/v9.2/cai_configurations(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`cai_code`, `cai_configurationid`, `cai_name`, `cai_value`, `importsequencenumber`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cai_configuration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cai_configuration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cai_configuration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cai_configuration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_cai_configuration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cai_configuration_SyncErrors` | [cai_configuration](cai_configuration.md) | `regardingobjectid` | `regardingobjectid_cai_configuration` |
| `cai_configuration_DuplicateMatchingRecord` | [cai_configuration](cai_configuration.md) | `duplicaterecordid` | `duplicaterecordid_cai_configuration` |
| `cai_configuration_DuplicateBaseRecord` | [cai_configuration](cai_configuration.md) | `baserecordid` | `baserecordid_cai_configuration` |
| `cai_configuration_AsyncOperations` | [cai_configuration](cai_configuration.md) | `regardingobjectid` | `regardingobjectid_cai_configuration` |
| `cai_configuration_MailboxTrackingFolders` | [cai_configuration](cai_configuration.md) | `regardingobjectid` | `regardingobjectid_cai_configuration` |
| `cai_configuration_UserEntityInstanceDatas` | [cai_configuration](cai_configuration.md) | `objectid` | `objectid_cai_configuration` |
| `cai_configuration_ProcessSession` | [cai_configuration](cai_configuration.md) | `regardingobjectid` | `regardingobjectid_cai_configuration` |
| `cai_configuration_BulkDeleteFailures` | [cai_configuration](cai_configuration.md) | `regardingobjectid` | `regardingobjectid_cai_configuration` |
| `cai_configuration_PrincipalObjectAttributeAccesses` | [cai_configuration](cai_configuration.md) | `objectid` | `objectid_cai_configuration` |


## Source

Generated from [cai_configuration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cai_configuration')) on 2026-05-07.