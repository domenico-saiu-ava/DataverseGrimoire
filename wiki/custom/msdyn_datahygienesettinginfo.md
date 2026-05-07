---
logical: "msdyn_datahygienesettinginfo"
display: "Informazioni sull'impostazione di igiene dei dati"
entitySetName: "msdyn_datahygienesettinginfo"
primaryId: "msdyn_datahygienesettinginfoid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni sull'impostazione di igiene dei dati

Informazioni sull'impostazione di igiene dei dati

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_datahygienesettinginfo` |
| Display name | Informazioni sull'impostazione di igiene dei dati |
| Display (plural) | Informazioni sull'impostazione di igiene dei dati |
| Schema name | `msdyn_datahygienesettinginfo` |
| Entity set (Web API) | `msdyn_datahygienesettinginfo` |
| Primary id attribute | `msdyn_datahygienesettinginfoid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_datahygienesettinginfo?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_datahygienesettinginfo(<guid>)
POST /api/data/v9.2/msdyn_datahygienesettinginfo
PATCH /api/data/v9.2/msdyn_datahygienesettinginfo(<guid>)
DELETE /api/data/v9.2/msdyn_datahygienesettinginfo(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_attribute_info`, `msdyn_datahygienesettinginfoid`, `msdyn_name`, `msdyn_runtime_setting`, `msdyn_setting_type`, `msdyn_validatefrom_days`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_datahygienesettinginfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_datahygienesettinginfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_datahygienesettinginfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_datahygienesettinginfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_datahygienesettinginfo` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_datahygienesettinginfo_SyncErrors` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_DuplicateMatchingRecord` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_DuplicateBaseRecord` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `baserecordid` | `baserecordid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_AsyncOperations` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_MailboxTrackingFolders` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_UserEntityInstanceDatas` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `objectid` | `objectid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_ProcessSession` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_BulkDeleteFailures` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `regardingobjectid` | `regardingobjectid_msdyn_datahygienesettinginfo` |
| `msdyn_datahygienesettinginfo_PrincipalObjectAttributeAccesses` | [msdyn_datahygienesettinginfo](msdyn_datahygienesettinginfo.md) | `objectid` | `objectid_msdyn_datahygienesettinginfo` |


## Source

Generated from [msdyn_datahygienesettinginfo (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_datahygienesettinginfo')) on 2026-05-07.