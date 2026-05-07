---
logical: "dataprocessingconfiguration"
display: "Configurazione elaborazione dati"
entitySetName: "dataprocessingconfigurations"
primaryId: "dataprocessingconfigurationid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione elaborazione dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `dataprocessingconfiguration` |
| Display name | Configurazione elaborazione dati |
| Display (plural) | Configurazioni elaborazione dati |
| Schema name | `DataProcessingConfiguration` |
| Entity set (Web API) | `dataprocessingconfigurations` |
| Primary id attribute | `dataprocessingconfigurationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/dataprocessingconfigurations?$select=name&$top=10
GET /api/data/v9.2/dataprocessingconfigurations(<guid>)
POST /api/data/v9.2/dataprocessingconfigurations
PATCH /api/data/v9.2/dataprocessingconfigurations(<guid>)
DELETE /api/data/v9.2/dataprocessingconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`dataprocessingconfigurationid`, `externaldataprocessingconfigurationId`, `importsequencenumber`, `iscustomizable`, `moduleconfigurationjson`, `modulename`, `moduletype`, `moduleversion`, `name`, `overriddencreatedon`, `owningappid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_dataprocessingconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_dataprocessingconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_dataprocessingconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_dataprocessingconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_dataprocessingconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataprocessingconfiguration_msdyn_wemreport_mefdataprocessingconfiguration` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `msdyn_mefdataprocessingconfiguration` | `msdyn_mefdataprocessingconfiguration` |
| `dataprocessingconfiguration_SyncErrors` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_DuplicateMatchingRecord` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_DuplicateBaseRecord` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `baserecordid` | `baserecordid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_AsyncOperations` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_MailboxTrackingFolders` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_UserEntityInstanceDatas` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `objectid` | `objectid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_ProcessSession` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_BulkDeleteFailures` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `regardingobjectid` | `regardingobjectid_dataprocessingconfiguration` |
| `dataprocessingconfiguration_PrincipalObjectAttributeAccesses` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `objectid` | `objectid_dataprocessingconfiguration` |
| `msdyn_wemforecast_dataprocessingconfigurationid_dataprocessingconfiguration` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `msdyn_dataprocessingconfigurationid` | `msdyn_dataprocessingconfigurationid` |
| `msdyn_capacityplanning_dataprocessingconfigurationid_dataprocessingconfiguration` | [dataprocessingconfiguration](dataprocessingconfiguration.md) | `msdyn_dataprocessingconfigurationid` | `msdyn_dataprocessingconfigurationid` |


## Source

Generated from [dataprocessingconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='dataprocessingconfiguration')) on 2026-05-07.