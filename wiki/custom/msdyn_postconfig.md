---
logical: "msdyn_postconfig"
display: "Configurazione post"
entitySetName: "msdyn_postconfigs"
primaryId: "msdyn_postconfigid"
primaryName: "msdyn_entitydisplayname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione post

Abilita o disabilita entità per la collaborazione tra Feed attività e Yammer.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_postconfig` |
| Display name | Configurazione post |
| Display (plural) | Configurazioni dei post |
| Schema name | `msdyn_PostConfig` |
| Entity set (Web API) | `msdyn_postconfigs` |
| Primary id attribute | `msdyn_postconfigid` |
| Primary name attribute | `msdyn_entitydisplayname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_postconfigs?$select=msdyn_entitydisplayname&$top=10
GET /api/data/v9.2/msdyn_postconfigs(<guid>)
POST /api/data/v9.2/msdyn_postconfigs
PATCH /api/data/v9.2/msdyn_postconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_postconfigs(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_configurewall`, `msdyn_entitydisplayname`, `msdyn_entityname`, `msdyn_followingviewid`, `msdyn_followingviewid2`, `msdyn_otc`, `msdyn_postconfigid`, `msdyn_status`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_postconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_postconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_postconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_postconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_postconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_postconfig_SyncErrors` | [msdyn_postconfig](msdyn_postconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postconfig` |
| `msdyn_postconfig_AsyncOperations` | [msdyn_postconfig](msdyn_postconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postconfig` |
| `msdyn_postconfig_MailboxTrackingFolders` | [msdyn_postconfig](msdyn_postconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postconfig` |
| `msdyn_postconfig_UserEntityInstanceDatas` | [msdyn_postconfig](msdyn_postconfig.md) | `objectid` | `objectid_msdyn_postconfig` |
| `msdyn_postconfig_ProcessSession` | [msdyn_postconfig](msdyn_postconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postconfig` |
| `msdyn_postconfig_BulkDeleteFailures` | [msdyn_postconfig](msdyn_postconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_postconfig` |
| `msdyn_postconfig_PrincipalObjectAttributeAccesses` | [msdyn_postconfig](msdyn_postconfig.md) | `objectid` | `objectid_msdyn_postconfig` |
| `msdyn_postconfig_msdyn_postruleconfig` | [msdyn_postconfig](msdyn_postconfig.md) | `msdyn_postconfigid` | `msdyn_PostConfigId` |
| `msdyn_postconfig_wallsavedquery` | [msdyn_postconfig](msdyn_postconfig.md) | `msdyn_postconfigurationid` | `msdyn_postconfigurationid` |


## Source

Generated from [msdyn_postconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_postconfig')) on 2026-05-07.