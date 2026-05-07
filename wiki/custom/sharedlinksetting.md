---
logical: "sharedlinksetting"
display: "Impostazione collegamento condiviso"
entitySetName: "sharedlinksettings"
primaryId: "sharedlinksettingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione collegamento condiviso

Impostazione collegamento condiviso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharedlinksetting` |
| Display name | Impostazione collegamento condiviso |
| Display (plural) | Impostazioni collegamento condiviso |
| Schema name | `SharedLinkSetting` |
| Entity set (Web API) | `sharedlinksettings` |
| Primary id attribute | `sharedlinksettingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sharedlinksettings?$select=name&$top=10
GET /api/data/v9.2/sharedlinksettings(<guid>)
POST /api/data/v9.2/sharedlinksettings
PATCH /api/data/v9.2/sharedlinksettings(<guid>)
DELETE /api/data/v9.2/sharedlinksettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`extensionofrecordid`, `importsequencenumber`, `iscustomizable`, `isenabledforsharedlinkcreation`, `name`, `overriddencreatedon`, `sharedlinksettingid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedlinksetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedlinksetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedlinksetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedlinksetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_sharedlinksetting` | [organization](organization.md) | `organizationid` | `organizationid` |
| `sharedlinksetting_extensionofrecordid` | [entity](entity.md) | `extensionofrecordid` | `extensionofrecordid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedlinksetting_SyncErrors` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedlinksetting_DuplicateMatchingRecord` | [sharedlinksetting](sharedlinksetting.md) | `duplicaterecordid` | `duplicaterecordid_sharedlinksetting` |
| `sharedlinksetting_DuplicateBaseRecord` | [sharedlinksetting](sharedlinksetting.md) | `baserecordid` | `baserecordid_sharedlinksetting` |
| `sharedlinksetting_AsyncOperations` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedlinksetting_MailboxTrackingFolders` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedlinksetting_UserEntityInstanceDatas` | [sharedlinksetting](sharedlinksetting.md) | `objectid` | `objectid_sharedlinksetting` |
| `sharedlinksetting_ProcessSession` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedlinksetting_BulkDeleteFailures` | [sharedlinksetting](sharedlinksetting.md) | `regardingobjectid` | `regardingobjectid_sharedlinksetting` |
| `sharedlinksetting_PrincipalObjectAttributeAccesses` | [sharedlinksetting](sharedlinksetting.md) | `objectid` | `objectid_sharedlinksetting` |


## Source

Generated from [sharedlinksetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sharedlinksetting')) on 2026-05-07.