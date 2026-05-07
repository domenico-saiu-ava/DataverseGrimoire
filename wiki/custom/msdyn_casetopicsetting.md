---
logical: "msdyn_casetopicsetting"
display: "Impostazione argomento del caso"
entitySetName: "msdyn_casetopicsettings"
primaryId: "msdyn_casetopicsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione argomento del caso

Entità impostazione argomento del caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casetopicsetting` |
| Display name | Impostazione argomento del caso |
| Display (plural) | Impostazioni argomento del caso |
| Schema name | `msdyn_casetopicsetting` |
| Entity set (Web API) | `msdyn_casetopicsettings` |
| Primary id attribute | `msdyn_casetopicsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casetopicsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casetopicsettings(<guid>)
POST /api/data/v9.2/msdyn_casetopicsettings
PATCH /api/data/v9.2/msdyn_casetopicsettings(<guid>)
DELETE /api/data/v9.2/msdyn_casetopicsettings(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_attributeinuse`, `msdyn_casetopicsettingid`, `msdyn_delimiters`, `msdyn_enabled`, `msdyn_ignorelist`, `msdyn_name`, `msdyn_selectionlocation`, `msdyn_topicautomationenabled`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casetopicsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casetopicsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casetopicsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casetopicsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_casetopicsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casetopicsetting_SyncErrors` | [msdyn_casetopicsetting](msdyn_casetopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsetting` |
| `msdyn_casetopicsetting_AsyncOperations` | [msdyn_casetopicsetting](msdyn_casetopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsetting` |
| `msdyn_casetopicsetting_MailboxTrackingFolders` | [msdyn_casetopicsetting](msdyn_casetopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsetting` |
| `msdyn_casetopicsetting_UserEntityInstanceDatas` | [msdyn_casetopicsetting](msdyn_casetopicsetting.md) | `objectid` | `objectid_msdyn_casetopicsetting` |
| `msdyn_casetopicsetting_ProcessSession` | [msdyn_casetopicsetting](msdyn_casetopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsetting` |
| `msdyn_casetopicsetting_BulkDeleteFailures` | [msdyn_casetopicsetting](msdyn_casetopicsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casetopicsetting` |
| `msdyn_casetopicsetting_PrincipalObjectAttributeAccesses` | [msdyn_casetopicsetting](msdyn_casetopicsetting.md) | `objectid` | `objectid_msdyn_casetopicsetting` |


## Source

Generated from [msdyn_casetopicsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casetopicsetting')) on 2026-05-07.