---
logical: "msdyn_vivaentitysetting"
display: "msdyn_vivaentitysetting"
entitySetName: "msdyn_vivaentitysettings"
primaryId: "msdyn_vivaentitysettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# msdyn_vivaentitysetting

Entity level settings for Copilot for Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_vivaentitysetting` |
| Display name | msdyn_vivaentitysetting |
| Display (plural) | msdyn_vivaentitysettings |
| Schema name | `msdyn_vivaentitysetting` |
| Entity set (Web API) | `msdyn_vivaentitysettings` |
| Primary id attribute | `msdyn_vivaentitysettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_vivaentitysettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_vivaentitysettings(<guid>)
POST /api/data/v9.2/msdyn_vivaentitysettings
PATCH /api/data/v9.2/msdyn_vivaentitysettings(<guid>)
DELETE /api/data/v9.2/msdyn_vivaentitysettings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_description`, `msdyn_entitysettings`, `msdyn_entitytype`, `msdyn_featurename`, `msdyn_name`, `msdyn_orgid`, `msdyn_producttype`, `msdyn_settingname`, `msdyn_settingscreatedby`, `msdyn_settingsmodifiedby`, `msdyn_vivaentitysettingid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_vivaentitysetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_vivaentitysetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_vivaentitysetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_vivaentitysetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_vivaentitysetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_vivaentitysetting_SyncErrors` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_DuplicateMatchingRecord` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_DuplicateBaseRecord` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `baserecordid` | `baserecordid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_AsyncOperations` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_MailboxTrackingFolders` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_UserEntityInstanceDatas` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `objectid` | `objectid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_ProcessSession` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_BulkDeleteFailures` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_vivaentitysetting` |
| `msdyn_vivaentitysetting_PrincipalObjectAttributeAccesses` | [msdyn_vivaentitysetting](msdyn_vivaentitysetting.md) | `objectid` | `objectid_msdyn_vivaentitysetting` |


## Source

Generated from [msdyn_vivaentitysetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_vivaentitysetting')) on 2026-05-07.