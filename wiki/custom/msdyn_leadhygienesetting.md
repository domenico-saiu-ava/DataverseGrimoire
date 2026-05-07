---
logical: "msdyn_leadhygienesetting"
display: "Impostazione di ottimizzazione lead"
entitySetName: "msdyn_leadhygienesettings"
primaryId: "msdyn_leadhygienesettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione di ottimizzazione lead

Impostazione ottimizzazione lead

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_leadhygienesetting` |
| Display name | Impostazione di ottimizzazione lead |
| Display (plural) | Impostazioni di ottimizzazione lead |
| Schema name | `msdyn_leadhygienesetting` |
| Entity set (Web API) | `msdyn_leadhygienesettings` |
| Primary id attribute | `msdyn_leadhygienesettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_leadhygienesettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_leadhygienesettings(<guid>)
POST /api/data/v9.2/msdyn_leadhygienesettings
PATCH /api/data/v9.2/msdyn_leadhygienesettings(<guid>)
DELETE /api/data/v9.2/msdyn_leadhygienesettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_isduplicatedetectionenabled`, `msdyn_lastschemapublishedtimestamp`, `msdyn_leadhygienesettingid`, `msdyn_name`, `msdyn_querytop`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_leadhygienesetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_leadhygienesetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_leadhygienesetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_leadhygienesetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_leadhygienesetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_leadhygienesetting_SyncErrors` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_DuplicateMatchingRecord` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_DuplicateBaseRecord` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `baserecordid` | `baserecordid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_AsyncOperations` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_MailboxTrackingFolders` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_UserEntityInstanceDatas` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `objectid` | `objectid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_ProcessSession` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_BulkDeleteFailures` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_leadhygienesetting` |
| `msdyn_leadhygienesetting_PrincipalObjectAttributeAccesses` | [msdyn_leadhygienesetting](msdyn_leadhygienesetting.md) | `objectid` | `objectid_msdyn_leadhygienesetting` |


## Source

Generated from [msdyn_leadhygienesetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_leadhygienesetting')) on 2026-05-07.