---
logical: "msdyn_sikeyvalueconfig"
display: "SI Key Value Config"
entitySetName: "msdyn_sikeyvalueconfigs"
primaryId: "msdyn_sikeyvalueconfigid"
primaryName: "msdyn_configkey"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SI Key Value Config

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sikeyvalueconfig` |
| Display name | SI Key Value Config |
| Display (plural) | SI Key Value Configs |
| Schema name | `msdyn_sikeyvalueconfig` |
| Entity set (Web API) | `msdyn_sikeyvalueconfigs` |
| Primary id attribute | `msdyn_sikeyvalueconfigid` |
| Primary name attribute | `msdyn_configkey` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sikeyvalueconfigs?$select=msdyn_configkey&$top=10
GET /api/data/v9.2/msdyn_sikeyvalueconfigs(<guid>)
POST /api/data/v9.2/msdyn_sikeyvalueconfigs
PATCH /api/data/v9.2/msdyn_sikeyvalueconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_sikeyvalueconfigs(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_configkey`, `msdyn_configvalue`, `msdyn_sikeyvalueconfigid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sikeyvalueconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sikeyvalueconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sikeyvalueconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sikeyvalueconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sikeyvalueconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sikeyvalueconfig_SyncErrors` | [msdyn_sikeyvalueconfig](msdyn_sikeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_sikeyvalueconfig` |
| `msdyn_sikeyvalueconfig_AsyncOperations` | [msdyn_sikeyvalueconfig](msdyn_sikeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_sikeyvalueconfig` |
| `msdyn_sikeyvalueconfig_MailboxTrackingFolders` | [msdyn_sikeyvalueconfig](msdyn_sikeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_sikeyvalueconfig` |
| `msdyn_sikeyvalueconfig_UserEntityInstanceDatas` | [msdyn_sikeyvalueconfig](msdyn_sikeyvalueconfig.md) | `objectid` | `objectid_msdyn_sikeyvalueconfig` |
| `msdyn_sikeyvalueconfig_ProcessSession` | [msdyn_sikeyvalueconfig](msdyn_sikeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_sikeyvalueconfig` |
| `msdyn_sikeyvalueconfig_BulkDeleteFailures` | [msdyn_sikeyvalueconfig](msdyn_sikeyvalueconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_sikeyvalueconfig` |
| `msdyn_sikeyvalueconfig_PrincipalObjectAttributeAccesses` | [msdyn_sikeyvalueconfig](msdyn_sikeyvalueconfig.md) | `objectid` | `objectid_msdyn_sikeyvalueconfig` |


## Source

Generated from [msdyn_sikeyvalueconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sikeyvalueconfig')) on 2026-05-07.