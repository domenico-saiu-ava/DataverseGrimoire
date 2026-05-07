---
logical: "msdyn_inboxentityconfig"
display: "Configurazione entità posta in arrivo"
entitySetName: "msdyn_inboxentityconfigs"
primaryId: "msdyn_inboxentityconfigid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione entità posta in arrivo

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxentityconfig` |
| Display name | Configurazione entità posta in arrivo |
| Display (plural) | Configurazioni entità posta in arrivo |
| Schema name | `msdyn_inboxentityconfig` |
| Entity set (Web API) | `msdyn_inboxentityconfigs` |
| Primary id attribute | `msdyn_inboxentityconfigid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxentityconfigs?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxentityconfigs(<guid>)
POST /api/data/v9.2/msdyn_inboxentityconfigs
PATCH /api/data/v9.2/msdyn_inboxentityconfigs(<guid>)
DELETE /api/data/v9.2/msdyn_inboxentityconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_entitytypeid`, `msdyn_inboxcardconfigurationid`, `msdyn_inboxentityconfigid`, `msdyn_name`, `msdyn_uniquename`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_inboxentityconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxentityconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxentityconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxentityconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_inboxentityconfig` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_entity_msdyn_inboxentityconfig_entitytypeid` | [entity](entity.md) | `msdyn_entitytypeid` | `msdyn_entitytypeid` |
| `msdyn_msdyn_inboxcardconfiguration_msdyn_inboxentityconfig_inboxcardconfigurationid` | [msdyn_inboxcardconfiguration](msdyn_inboxcardconfiguration.md) | `msdyn_inboxcardconfigurationid` | `msdyn_inboxcardconfigurationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxentityconfig_SyncErrors` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_DuplicateMatchingRecord` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_DuplicateBaseRecord` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `baserecordid` | `baserecordid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_AsyncOperations` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_MailboxTrackingFolders` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_UserEntityInstanceDatas` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `objectid` | `objectid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_ProcessSession` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_BulkDeleteFailures` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `regardingobjectid` | `regardingobjectid_msdyn_inboxentityconfig` |
| `msdyn_inboxentityconfig_PrincipalObjectAttributeAccesses` | [msdyn_inboxentityconfig](msdyn_inboxentityconfig.md) | `objectid` | `objectid_msdyn_inboxentityconfig` |


## Source

Generated from [msdyn_inboxentityconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_inboxentityconfig')) on 2026-05-07.