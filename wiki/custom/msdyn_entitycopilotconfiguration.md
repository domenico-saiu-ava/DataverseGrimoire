---
logical: "msdyn_entitycopilotconfiguration"
display: "Configurazione Copilot entità"
entitySetName: "msdyn_entitycopilotconfigurations"
primaryId: "msdyn_entitycopilotconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Copilot entità

Configurazione Copilot entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entitycopilotconfiguration` |
| Display name | Configurazione Copilot entità |
| Display (plural) | Configurazione Copilot entità |
| Schema name | `msdyn_entitycopilotconfiguration` |
| Entity set (Web API) | `msdyn_entitycopilotconfigurations` |
| Primary id attribute | `msdyn_entitycopilotconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entitycopilotconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entitycopilotconfigurations(<guid>)
POST /api/data/v9.2/msdyn_entitycopilotconfigurations
PATCH /api/data/v9.2/msdyn_entitycopilotconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_entitycopilotconfigurations(<guid>)
```

## Attributes

Writable: **18** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_autotriggerproactiveinsight`, `msdyn_datacontextconfiguration`, `msdyn_displaytimer`, `msdyn_enableintent`, `msdyn_entitycopilotconfigurationid`, `msdyn_entityname`, `msdyn_name`, `msdyn_showsentimentenabled`, `msdyn_showslatimercontrolenabled`, `msdyn_summarysettingid`, `msdyn_viewconfiguration`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_entitycopilotconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entitycopilotconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entitycopilotconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entitycopilotconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_entitycopilotconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entitycopilotconfiguration_SyncErrors` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_DuplicateMatchingRecord` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_DuplicateBaseRecord` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `baserecordid` | `baserecordid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_AsyncOperations` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_MailboxTrackingFolders` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_UserEntityInstanceDatas` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `objectid` | `objectid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_ProcessSession` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_BulkDeleteFailures` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_entitycopilotconfiguration` |
| `msdyn_entitycopilotconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_entitycopilotconfiguration](msdyn_entitycopilotconfiguration.md) | `objectid` | `objectid_msdyn_entitycopilotconfiguration` |


## Source

Generated from [msdyn_entitycopilotconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_entitycopilotconfiguration')) on 2026-05-07.