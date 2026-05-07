---
logical: "msdyn_inboxcardconfiguration"
display: "Configurazione della scheda della posta in arrivo"
entitySetName: "msdyn_inboxcardconfigurations"
primaryId: "msdyn_inboxcardconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione della scheda della posta in arrivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxcardconfiguration` |
| Display name | Configurazione della scheda della posta in arrivo |
| Display (plural) | Configurazioni scheda posta in arrivo |
| Schema name | `msdyn_inboxcardconfiguration` |
| Entity set (Web API) | `msdyn_inboxcardconfigurations` |
| Primary id attribute | `msdyn_inboxcardconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxcardconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxcardconfigurations(<guid>)
POST /api/data/v9.2/msdyn_inboxcardconfigurations
PATCH /api/data/v9.2/msdyn_inboxcardconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_inboxcardconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_cardlayout`, `msdyn_inboxcardconfigurationid`, `msdyn_name`, `msdyn_regardingentity`, `msdyn_requiredfields`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_inboxcardconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxcardconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxcardconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxcardconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_inboxcardconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxcardconfiguration_SyncErrors` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_DuplicateMatchingRecord` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_DuplicateBaseRecord` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `baserecordid` | `baserecordid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_AsyncOperations` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_MailboxTrackingFolders` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_UserEntityInstanceDatas` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `objectid` | `objectid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_ProcessSession` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_BulkDeleteFailures` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxcardconfiguration` |
| `msdyn_inboxcardconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `objectid` | `objectid_msdyn_inboxcardconfiguration` |
| `msdyn_msdyn_inboxcardconfiguration_msdyn_inboxentityconfig_inboxcardconfigurationid` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `msdyn_inboxcardconfigurationid` | `msdyn_inboxcardconfigurationid` |


## Source

Generated from [msdyn_inboxcardconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_inboxcardconfiguration')) on 2026-05-07.