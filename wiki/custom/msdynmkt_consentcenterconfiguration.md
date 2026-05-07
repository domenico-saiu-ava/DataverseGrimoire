---
logical: "msdynmkt_consentcenterconfiguration"
display: "Configurazione Centro consenso CXP"
entitySetName: "msdynmkt_consentcenterconfigurations"
primaryId: "msdynmkt_consentcenterconfigurationid"
primaryName: "msdynmkt_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Centro consenso CXP

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynmkt_consentcenterconfiguration` |
| Display name | Configurazione Centro consenso CXP |
| Display (plural) | Configurazioni Centro consenso CXP |
| Schema name | `msdynmkt_consentcenterconfiguration` |
| Entity set (Web API) | `msdynmkt_consentcenterconfigurations` |
| Primary id attribute | `msdynmkt_consentcenterconfigurationid` |
| Primary name attribute | `msdynmkt_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynmkt_consentcenterconfigurations?$select=msdynmkt_name&$top=10
GET /api/data/v9.2/msdynmkt_consentcenterconfigurations(<guid>)
POST /api/data/v9.2/msdynmkt_consentcenterconfigurations
PATCH /api/data/v9.2/msdynmkt_consentcenterconfigurations(<guid>)
DELETE /api/data/v9.2/msdynmkt_consentcenterconfigurations(<guid>)
```

## Attributes

Writable: **8** · Read-only: **8**

### Writable

`importsequencenumber`, `msdynmkt_consentcenterconfigurationid`, `msdynmkt_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynmkt_consentcenterconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynmkt_consentcenterconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynmkt_consentcenterconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynmkt_consentcenterconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdynmkt_consentcenterconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_consentcenterconfiguration_SyncErrors` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_DuplicateMatchingRecord` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_DuplicateBaseRecord` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `baserecordid` | `baserecordid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_AsyncOperations` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_MailboxTrackingFolders` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_UserEntityInstanceDatas` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `objectid` | `objectid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_ProcessSession` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_BulkDeleteFailures` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdynmkt_consentcenterconfiguration` |
| `msdynmkt_consentcenterconfiguration_PrincipalObjectAttributeAccesses` | [msdynmkt_consentcenterconfiguration](msdynmkt_consentcenterconfiguration.md) | `objectid` | `objectid_msdynmkt_consentcenterconfiguration` |


## Source

Generated from [msdynmkt_consentcenterconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynmkt_consentcenterconfiguration')) on 2026-05-07.