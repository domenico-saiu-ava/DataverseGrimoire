---
logical: "recyclebinconfig"
display: "Configurazione di Ripristina record eliminati"
entitySetName: "recyclebinconfigs"
primaryId: "recyclebinconfigid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione di Ripristina record eliminati

Contiene la configurazione di Ripristina record eliminati per le entità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recyclebinconfig` |
| Display name | Configurazione di Ripristina record eliminati |
| Display (plural) | Configurazioni di Ripristina record eliminati |
| Schema name | `RecycleBinConfig` |
| Entity set (Web API) | `recyclebinconfigs` |
| Primary id attribute | `recyclebinconfigid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/recyclebinconfigs?$select=name&$top=10
GET /api/data/v9.2/recyclebinconfigs(<guid>)
POST /api/data/v9.2/recyclebinconfigs
PATCH /api/data/v9.2/recyclebinconfigs(<guid>)
DELETE /api/data/v9.2/recyclebinconfigs(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`cleanupintervalindays`, `extensionofrecordid`, `importsequencenumber`, `iscustomizable`, `isreadyforrecyclebin`, `name`, `overriddencreatedon`, `recyclebinconfigid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`bintablename`, `componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_recyclebinconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_recyclebinconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_recyclebinconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_recyclebinconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_recyclebinconfig` | [organization](organization.md) | `organizationid` | `organizationid` |
| `recyclebinconfig_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `recyclebinconfig_SyncErrors` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `recyclebinconfig_AsyncOperations` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `recyclebinconfig_MailboxTrackingFolders` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `recyclebinconfig_UserEntityInstanceDatas` | [recyclebinconfig](recyclebinconfig.md) | `objectid` | `objectid_recyclebinconfig` |
| `recyclebinconfig_ProcessSession` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `recyclebinconfig_BulkDeleteFailures` | [recyclebinconfig](recyclebinconfig.md) | `regardingobjectid` | `regardingobjectid_recyclebinconfig` |
| `recyclebinconfig_PrincipalObjectAttributeAccesses` | [recyclebinconfig](recyclebinconfig.md) | `objectid` | `objectid_recyclebinconfig` |
| `RecycleBinConfig_DeletedItemReference_DeletedObject` | [recyclebinconfig](recyclebinconfig.md) | `deletedobject` | `DeletedObject` |


## Source

Generated from [recyclebinconfig (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='recyclebinconfig')) on 2026-05-07.