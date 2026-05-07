---
logical: "msdyn_cskeyvalueconfig"
display: "Configurazione del valore chiave di Customer Service"
entitySetName: "msdyn_cskeyvalueconfigs"
primaryId: "msdyn_cskeyvalueconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione del valore chiave di Customer Service

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_cskeyvalueconfig` |
| Display name | Configurazione del valore chiave di Customer Service |
| Display (plural) | Configurazioni del valore chiave di Customer Service |
| Schema name | `msdyn_cskeyvalueconfig` |
| Entity set (Web API) | `msdyn_cskeyvalueconfigs` |
| Primary id attribute | `msdyn_cskeyvalueconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_cskeyvalueconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_cskeyvalueconfigs(<guid>)
POST /api/data/v9.2/msdyn_cskeyvalueconfigs
PATCH /api/data/v9.2/msdyn_cskeyvalueconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_cskeyvalueconfigs(<guid>)
```

## Attributes

Writable: **10** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_configkey`, `msdyn_configvalue`, `msdyn_cskeyvalueconfigid`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_cskeyvalueconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_cskeyvalueconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_cskeyvalueconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_cskeyvalueconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_cskeyvalueconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_cskeyvalueconfig_SyncErrors` | [msdyn_cskeyvalueconfig](msdyn_cskeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_cskeyvalueconfig` |
| `msdyn_cskeyvalueconfig_AsyncOperations` | [msdyn_cskeyvalueconfig](msdyn_cskeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_cskeyvalueconfig` |
| `msdyn_cskeyvalueconfig_MailboxTrackingFolders` | [msdyn_cskeyvalueconfig](msdyn_cskeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_cskeyvalueconfig` |
| `msdyn_cskeyvalueconfig_UserEntityInstanceDatas` | [msdyn_cskeyvalueconfig](msdyn_cskeyvalueconfig.md) | `objectid` | `objectid_msdyn_cskeyvalueconfig` |
| `msdyn_cskeyvalueconfig_ProcessSession` | [msdyn_cskeyvalueconfig](msdyn_cskeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_cskeyvalueconfig` |
| `msdyn_cskeyvalueconfig_BulkDeleteFailures` | [msdyn_cskeyvalueconfig](msdyn_cskeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_cskeyvalueconfig` |
| `msdyn_cskeyvalueconfig_PrincipalObjectAttributeAccesses` | [msdyn_cskeyvalueconfig](msdyn_cskeyvalueconfig.md) | `objectid` | `objectid_msdyn_cskeyvalueconfig` |


## Source

Generated from [msdyn_cskeyvalueconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_cskeyvalueconfig')) on 2026-05-07.