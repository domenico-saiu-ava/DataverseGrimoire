---
logical: "pdfsetting"
display: "Impostazione PDF"
entitySetName: "pdfsettings"
primaryId: "pdfsettingid"
primaryName: "entityname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione PDF

Impostazioni PDF per salvare le entità PDF abilitate

## Identity

| Property | Value |
| --- | --- |
| Logical name | `pdfsetting` |
| Display name | Impostazione PDF |
| Display (plural) | Impostazioni PDF |
| Schema name | `PDFSetting` |
| Entity set (Web API) | `pdfsettings` |
| Primary id attribute | `pdfsettingid` |
| Primary name attribute | `entityname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/pdfsettings?$select=entityname&$top=10
GET /api/data/v9.2/pdfsettings(<guid>)
POST /api/data/v9.2/pdfsettings
PATCH /api/data/v9.2/pdfsettings(<guid>)
DELETE /api/data/v9.2/pdfsettings(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`entityname`, `importsequencenumber`, `ispdfsettingenabled`, `overriddencreatedon`, `ownerid`, `pdfsettingid`, `pdfsettingsjson`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_pdfsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_pdfsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_pdfsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_pdfsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_pdfsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_pdfsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_pdfsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_pdfsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `pdfsetting_SyncErrors` | [pdfsetting](pdfsetting.md) | `regardingobjectid` | `regardingobjectid_pdfsetting` |
| `pdfsetting_AsyncOperations` | [pdfsetting](pdfsetting.md) | `regardingobjectid` | `regardingobjectid_pdfsetting` |
| `pdfsetting_MailboxTrackingFolders` | [pdfsetting](pdfsetting.md) | `regardingobjectid` | `regardingobjectid_pdfsetting` |
| `pdfsetting_UserEntityInstanceDatas` | [pdfsetting](pdfsetting.md) | `objectid` | `objectid_pdfsetting` |
| `pdfsetting_ProcessSession` | [pdfsetting](pdfsetting.md) | `regardingobjectid` | `regardingobjectid_pdfsetting` |
| `pdfsetting_BulkDeleteFailures` | [pdfsetting](pdfsetting.md) | `regardingobjectid` | `regardingobjectid_pdfsetting` |
| `pdfsetting_PrincipalObjectAttributeAccesses` | [pdfsetting](pdfsetting.md) | `objectid` | `objectid_pdfsetting` |


## Source

Generated from [pdfsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='pdfsetting')) on 2026-05-07.