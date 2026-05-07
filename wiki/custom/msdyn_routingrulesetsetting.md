---
logical: "msdyn_routingrulesetsetting"
display: "Impostazione set di regole di gestione"
entitySetName: "msdyn_routingrulesetsettings"
primaryId: "msdyn_routingrulesetsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione set di regole di gestione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_routingrulesetsetting` |
| Display name | Impostazione set di regole di gestione |
| Display (plural) | Impostazioni set di regole di gestione |
| Schema name | `msdyn_routingrulesetsetting` |
| Entity set (Web API) | `msdyn_routingrulesetsettings` |
| Primary id attribute | `msdyn_routingrulesetsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_routingrulesetsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_routingrulesetsettings(<guid>)
POST /api/data/v9.2/msdyn_routingrulesetsettings
PATCH /api/data/v9.2/msdyn_routingrulesetsettings(<guid>)
DELETE /api/data/v9.2/msdyn_routingrulesetsettings(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_ismultipleactiveroutingrulesetallowed`, `msdyn_name`, `msdyn_routingrulesetsettingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_routingrulesetsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_routingrulesetsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_routingrulesetsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_routingrulesetsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_routingrulesetsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_routingrulesetsetting_SyncErrors` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_DuplicateMatchingRecord` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_DuplicateBaseRecord` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `baserecordid` | `baserecordid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_AsyncOperations` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_MailboxTrackingFolders` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_UserEntityInstanceDatas` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `objectid` | `objectid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_ProcessSession` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_BulkDeleteFailures` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_routingrulesetsetting` |
| `msdyn_routingrulesetsetting_PrincipalObjectAttributeAccesses` | [msdyn_routingrulesetsetting](msdyn_routingrulesetsetting.md) | `objectid` | `objectid_msdyn_routingrulesetsetting` |


## Source

Generated from [msdyn_routingrulesetsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_routingrulesetsetting')) on 2026-05-07.