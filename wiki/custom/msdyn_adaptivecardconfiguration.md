---
logical: "msdyn_adaptivecardconfiguration"
display: "Configurazione scheda adattiva"
entitySetName: "msdyn_adaptivecardconfigurations"
primaryId: "msdyn_adaptivecardconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione scheda adattiva

Configurazione scheda adattiva

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_adaptivecardconfiguration` |
| Display name | Configurazione scheda adattiva |
| Display (plural) | Configurazione scheda adattiva |
| Schema name | `msdyn_adaptivecardconfiguration` |
| Entity set (Web API) | `msdyn_adaptivecardconfigurations` |
| Primary id attribute | `msdyn_adaptivecardconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_adaptivecardconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_adaptivecardconfigurations(<guid>)
POST /api/data/v9.2/msdyn_adaptivecardconfigurations
PATCH /api/data/v9.2/msdyn_adaptivecardconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_adaptivecardconfigurations(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_adaptivecardconfigurationid`, `msdyn_adaptivecardtemplate`, `msdyn_name`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_adaptivecardconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_adaptivecardconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_adaptivecardconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_adaptivecardconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_adaptivecardconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_adaptivecardconfiguration_SyncErrors` | [msdyn_adaptivecardconfiguration](msdyn_adaptivecardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_adaptivecardconfiguration` |
| `msdyn_adaptivecardconfiguration_AsyncOperations` | [msdyn_adaptivecardconfiguration](msdyn_adaptivecardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_adaptivecardconfiguration` |
| `msdyn_adaptivecardconfiguration_MailboxTrackingFolders` | [msdyn_adaptivecardconfiguration](msdyn_adaptivecardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_adaptivecardconfiguration` |
| `msdyn_adaptivecardconfiguration_UserEntityInstanceDatas` | [msdyn_adaptivecardconfiguration](msdyn_adaptivecardconfiguration.md) | `objectid` | `objectid_msdyn_adaptivecardconfiguration` |
| `msdyn_adaptivecardconfiguration_ProcessSession` | [msdyn_adaptivecardconfiguration](msdyn_adaptivecardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_adaptivecardconfiguration` |
| `msdyn_adaptivecardconfiguration_BulkDeleteFailures` | [msdyn_adaptivecardconfiguration](msdyn_adaptivecardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_adaptivecardconfiguration` |
| `msdyn_adaptivecardconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_adaptivecardconfiguration](msdyn_adaptivecardconfiguration.md) | `objectid` | `objectid_msdyn_adaptivecardconfiguration` |


## Source

Generated from [msdyn_adaptivecardconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_adaptivecardconfiguration')) on 2026-05-07.