---
logical: "msdyn_salescopilotorgsettings"
display: "Impostazioni a livello di organizzazione per le app Sales Copilot"
entitySetName: "msdyn_salescopilotorgsettingsset"
primaryId: "msdyn_salescopilotorgsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni a livello di organizzazione per le app Sales Copilot

Impostazioni a livello di organizzazione per le app Sales Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotorgsettings` |
| Display name | Impostazioni a livello di organizzazione per le app Sales Copilot |
| Display (plural) | Impostazioni a livello di organizzazione per le app Sales Copilot |
| Schema name | `msdyn_salescopilotorgsettings` |
| Entity set (Web API) | `msdyn_salescopilotorgsettingsset` |
| Primary id attribute | `msdyn_salescopilotorgsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotorgsettingsset?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotorgsettingsset(<guid>)
POST /api/data/v9.2/msdyn_salescopilotorgsettingsset
PATCH /api/data/v9.2/msdyn_salescopilotorgsettingsset(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotorgsettingsset(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_entitylogicalname`, `msdyn_featurename`, `msdyn_name`, `msdyn_salescopilotorgsettingsid`, `msdyn_settingsdata`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salescopilotorgsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotorgsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotorgsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotorgsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salescopilotorgsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotorgsettings_SyncErrors` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_DuplicateMatchingRecord` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_DuplicateBaseRecord` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `baserecordid` | `baserecordid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_AsyncOperations` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_MailboxTrackingFolders` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_UserEntityInstanceDatas` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `objectid` | `objectid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_ProcessSession` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_BulkDeleteFailures` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotorgsettings` |
| `msdyn_salescopilotorgsettings_PrincipalObjectAttributeAccesses` | [msdyn_salescopilotorgsettings](msdyn_salescopilotorgsettings.md) | `objectid` | `objectid_msdyn_salescopilotorgsettings` |


## Source

Generated from [msdyn_salescopilotorgsettings (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescopilotorgsettings')) on 2026-05-07.