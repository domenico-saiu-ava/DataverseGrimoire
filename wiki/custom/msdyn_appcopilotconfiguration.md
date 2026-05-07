---
logical: "msdyn_appcopilotconfiguration"
display: "Configurazione Copilot del profilo app"
entitySetName: "msdyn_appcopilotconfigurations"
primaryId: "msdyn_appcopilotconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Copilot del profilo app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appcopilotconfiguration` |
| Display name | Configurazione Copilot del profilo app |
| Display (plural) | Configurazioni Copilot del profilo app |
| Schema name | `msdyn_appcopilotconfiguration` |
| Entity set (Web API) | `msdyn_appcopilotconfigurations` |
| Primary id attribute | `msdyn_appcopilotconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appcopilotconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appcopilotconfigurations(<guid>)
POST /api/data/v9.2/msdyn_appcopilotconfigurations
PATCH /api/data/v9.2/msdyn_appcopilotconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_appcopilotconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_appconfigurationid`, `msdyn_appcopilotconfigurationid`, `msdyn_copilotfeature`, `msdyn_enabled`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_appcopilotconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appcopilotconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appcopilotconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appcopilotconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_appcopilotconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_appcopilotconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appcopilotconfiguration_SyncErrors` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_DuplicateMatchingRecord` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_DuplicateBaseRecord` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `baserecordid` | `baserecordid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_AsyncOperations` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_MailboxTrackingFolders` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_UserEntityInstanceDatas` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `objectid` | `objectid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_ProcessSession` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_BulkDeleteFailures` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_appcopilotconfiguration` |
| `msdyn_appcopilotconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_appcopilotconfiguration](msdyn_appcopilotconfiguration.md) | `objectid` | `objectid_msdyn_appcopilotconfiguration` |


## Source

Generated from [msdyn_appcopilotconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_appcopilotconfiguration')) on 2026-05-07.