---
logical: "msdyn_vivaorgsetting"
display: "msdyn_vivaorgsetting"
entitySetName: "msdyn_vivaorgsettings"
primaryId: "msdyn_vivaorgsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_vivaorgsetting

Org level settings for Copilot for Sales app

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_vivaorgsetting` |
| Display name | msdyn_vivaorgsetting |
| Display (plural) | msdyn_vivaorgsettings |
| Schema name | `msdyn_vivaorgsetting` |
| Entity set (Web API) | `msdyn_vivaorgsettings` |
| Primary id attribute | `msdyn_vivaorgsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_vivaorgsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_vivaorgsettings(<guid>)
POST /api/data/v9.2/msdyn_vivaorgsettings
PATCH /api/data/v9.2/msdyn_vivaorgsettings(<guid>)
DELETE /api/data/v9.2/msdyn_vivaorgsettings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_environmentmode`, `msdyn_featurename`, `msdyn_name`, `msdyn_orgid`, `msdyn_orgsettings`, `msdyn_producttype`, `msdyn_settingscreatedby`, `msdyn_settingsmodifiedby`, `msdyn_spserviceurl`, `msdyn_vivaorgsettingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_vivaorgsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_vivaorgsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_vivaorgsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_vivaorgsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_vivaorgsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_vivaorgsetting_SyncErrors` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_DuplicateMatchingRecord` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_DuplicateBaseRecord` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `baserecordid` | `baserecordid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_AsyncOperations` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_MailboxTrackingFolders` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_UserEntityInstanceDatas` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `objectid` | `objectid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_ProcessSession` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_BulkDeleteFailures` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaorgsetting` |
| `msdyn_vivaorgsetting_PrincipalObjectAttributeAccesses` | [msdyn_vivaorgsetting](msdyn_vivaorgsetting.md) | `objectid` | `objectid_msdyn_vivaorgsetting` |


## Source

Generated from [msdyn_vivaorgsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_vivaorgsetting')) on 2026-05-07.