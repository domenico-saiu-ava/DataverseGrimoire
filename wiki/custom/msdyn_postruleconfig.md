---
logical: "msdyn_postruleconfig"
display: "Configurazione delle regole per i post"
entitySetName: "msdyn_postruleconfigs"
primaryId: "msdyn_postruleconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione delle regole per i post

Abilita o disabilita regole per i post per un'entità per Feed attività e Yammer.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_postruleconfig` |
| Display name | Configurazione delle regole per i post |
| Display (plural) | Configurazioni delle regole per i post |
| Schema name | `msdyn_PostRuleConfig` |
| Entity set (Web API) | `msdyn_postruleconfigs` |
| Primary id attribute | `msdyn_postruleconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_postruleconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_postruleconfigs(<guid>)
POST /api/data/v9.2/msdyn_postruleconfigs
PATCH /api/data/v9.2/msdyn_postruleconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_postruleconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_formatid`, `msdyn_name`, `msdyn_postconfigid`, `msdyn_postruleconfigid`, `msdyn_posttoyammer`, `msdyn_ruleid`, `msdyn_rulesource`, `msdyn_stepid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_postruleconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_postruleconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_postruleconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_postruleconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_postruleconfig` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_postconfig_msdyn_postruleconfig` | [msdyn_postconfig](msdyn_postconfig.md) | `msdyn_postconfigid` | `msdyn_PostConfigId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_postruleconfig_SyncErrors` | [msdyn_postruleconfig](msdyn_postruleconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postruleconfig` |
| `msdyn_postruleconfig_AsyncOperations` | [msdyn_postruleconfig](msdyn_postruleconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postruleconfig` |
| `msdyn_postruleconfig_MailboxTrackingFolders` | [msdyn_postruleconfig](msdyn_postruleconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postruleconfig` |
| `msdyn_postruleconfig_UserEntityInstanceDatas` | [msdyn_postruleconfig](msdyn_postruleconfig.md) | `objectid` | `objectid_msdyn_postruleconfig` |
| `msdyn_postruleconfig_ProcessSession` | [msdyn_postruleconfig](msdyn_postruleconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postruleconfig` |
| `msdyn_postruleconfig_BulkDeleteFailures` | [msdyn_postruleconfig](msdyn_postruleconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postruleconfig` |
| `msdyn_postruleconfig_PrincipalObjectAttributeAccesses` | [msdyn_postruleconfig](msdyn_postruleconfig.md) | `objectid` | `objectid_msdyn_postruleconfig` |


## Source

Generated from [msdyn_postruleconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_postruleconfig')) on 2026-05-07.