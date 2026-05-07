---
logical: "msdyn_conversationactionlocale"
display: "Impostazioni locali azione conversazione"
entitySetName: "msdyn_conversationactionlocales"
primaryId: "msdyn_conversationactionlocaleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni locali azione conversazione

Informazioni di localizzazione associate all'azione di conversazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationactionlocale` |
| Display name | Impostazioni locali azione conversazione |
| Display (plural) | Impostazioni locali azione conversazione |
| Schema name | `msdyn_conversationactionlocale` |
| Entity set (Web API) | `msdyn_conversationactionlocales` |
| Primary id attribute | `msdyn_conversationactionlocaleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationactionlocales?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationactionlocales(<guid>)
POST /api/data/v9.2/msdyn_conversationactionlocales
PATCH /api/data/v9.2/msdyn_conversationactionlocales(<guid>)
DELETE /api/data/v9.2/msdyn_conversationactionlocales(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_conversationactionkey`, `msdyn_conversationactionlocaleid`, `msdyn_label`, `msdyn_locale_picklist`, `msdyn_name`, `msdyn_slashcommands`, `msdyn_tooltip`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey` | [msdyn_conversationaction](msdyn_conversationaction.md) | `msdyn_conversationactionkey` | `msdyn_conversationactionkey` |
| `lk_msdyn_conversationactionlocale_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationactionlocale_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationactionlocale_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationactionlocale_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationactionlocale` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationactionlocale` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationactionlocale` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationactionlocale` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationactionlocale_SyncErrors` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_DuplicateMatchingRecord` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_DuplicateBaseRecord` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `baserecordid` | `baserecordid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_AsyncOperations` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_MailboxTrackingFolders` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_UserEntityInstanceDatas` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `objectid` | `objectid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_ProcessSession` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_BulkDeleteFailures` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationactionlocale` |
| `msdyn_conversationactionlocale_PrincipalObjectAttributeAccesses` | [msdyn_conversationactionlocale](msdyn_conversationactionlocale.md) | `objectid` | `objectid_msdyn_conversationactionlocale` |


## Source

Generated from [msdyn_conversationactionlocale (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationactionlocale')) on 2026-05-07.