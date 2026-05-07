---
logical: "msdyn_inboxconfiguration"
display: "Configurazione della posta in arrivo"
entitySetName: "msdyn_inboxconfigurations"
primaryId: "msdyn_inboxconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione della posta in arrivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxconfiguration` |
| Display name | Configurazione della posta in arrivo |
| Display (plural) | Configurazioni della posta in arrivo |
| Schema name | `msdyn_inboxconfiguration` |
| Entity set (Web API) | `msdyn_inboxconfigurations` |
| Primary id attribute | `msdyn_inboxconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxconfigurations(<guid>)
POST /api/data/v9.2/msdyn_inboxconfigurations
PATCH /api/data/v9.2/msdyn_inboxconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_inboxconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`enablecrosspartition`, `importsequencenumber`, `iscustomizable`, `msdyn_appconfigurationid`, `msdyn_configuration`, `msdyn_defaultsort`, `msdyn_inboxconfigurationid`, `msdyn_isdefault`, `msdyn_isvisible`, `msdyn_name`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_inboxconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_inboxconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_appconfiguration_msdyn_inboxconfiguration` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxconfiguration_SyncErrors` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_DuplicateMatchingRecord` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_DuplicateBaseRecord` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `baserecordid` | `baserecordid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_AsyncOperations` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_MailboxTrackingFolders` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_UserEntityInstanceDatas` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `objectid` | `objectid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_ProcessSession` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_BulkDeleteFailures` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxconfiguration` |
| `msdyn_inboxconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_inboxconfiguration](msdyn_inboxconfiguration.md) | `objectid` | `objectid_msdyn_inboxconfiguration` |


## Source

Generated from [msdyn_inboxconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_inboxconfiguration')) on 2026-05-07.