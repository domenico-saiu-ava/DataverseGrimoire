---
logical: "msdyn_occhannelconfiguration"
display: "Configurazione canale"
entitySetName: "msdyn_occhannelconfigurations"
primaryId: "msdyn_occhannelconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione canale

Configurazione canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelconfiguration` |
| Display name | Configurazione canale |
| Display (plural) | Configurazioni canale |
| Schema name | `msdyn_occhannelconfiguration` |
| Entity set (Web API) | `msdyn_occhannelconfigurations` |
| Primary id attribute | `msdyn_occhannelconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelconfigurations(<guid>)
POST /api/data/v9.2/msdyn_occhannelconfigurations
PATCH /api/data/v9.2/msdyn_occhannelconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_closeconversationifoooh`, `msdyn_enabletransfertoooohqueue`, `msdyn_engagementcontext`, `msdyn_name`, `msdyn_occhannelconfigurationid`, `msdyn_privacytermsaccepted`, `msdyn_privacytermsversion`, `msdyn_streamsource`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_occhannelconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_occhannelconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_occhannelconfiguration_msdyn_agentresourceforecasting_channel` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `msdyn_channel` | `msdyn_channel` |
| `msdyn_occhannelconfiguration_SyncErrors` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_DuplicateMatchingRecord` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_DuplicateBaseRecord` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `baserecordid` | `baserecordid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_AsyncOperations` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_MailboxTrackingFolders` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_UserEntityInstanceDatas` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `objectid` | `objectid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_ProcessSession` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_BulkDeleteFailures` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_occhannelconfiguration` |
| `msdyn_occhannelconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `objectid` | `objectid_msdyn_occhannelconfiguration` |
| `msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `msdyn_occhannelconfigurationid` | `msdyn_occhannelconfigurationid` |


## Source

Generated from [msdyn_occhannelconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_occhannelconfiguration')) on 2026-05-07.