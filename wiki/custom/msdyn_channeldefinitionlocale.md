---
logical: "msdyn_channeldefinitionlocale"
display: "Impostazione locale definizione canale"
entitySetName: "msdyn_channeldefinitionlocales"
primaryId: "msdyn_channeldefinitionlocaleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione locale definizione canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channeldefinitionlocale` |
| Display name | Impostazione locale definizione canale |
| Display (plural) | Impostazioni locali definizione canale |
| Schema name | `msdyn_ChannelDefinitionLocale` |
| Entity set (Web API) | `msdyn_channeldefinitionlocales` |
| Primary id attribute | `msdyn_channeldefinitionlocaleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channeldefinitionlocales?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channeldefinitionlocales(<guid>)
POST /api/data/v9.2/msdyn_channeldefinitionlocales
PATCH /api/data/v9.2/msdyn_channeldefinitionlocales(<guid>)
DELETE /api/data/v9.2/msdyn_channeldefinitionlocales(<guid>)
```

## Attributes

Writable: **13** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_channeldefinitionid`, `msdyn_channeldefinitionlocaleid`, `msdyn_localecontent`, `msdyn_localeid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channeldefinitionlocale_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channeldefinitionlocale_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channeldefinitionlocale_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channeldefinitionlocale_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channeldefinitionlocale` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channeldefinitionlocale` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channeldefinitionlocale` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channeldefinitionlocale` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_channeldefinitionlocale_ChannelDefi` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channeldefinitionlocale_SyncErrors` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_DuplicateMatchingRecord` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_DuplicateBaseRecord` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `baserecordid` | `baserecordid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_AsyncOperations` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_MailboxTrackingFolders` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_UserEntityInstanceDatas` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `objectid` | `objectid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_ProcessSession` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_BulkDeleteFailures` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinitionlocale` |
| `msdyn_channeldefinitionlocale_PrincipalObjectAttributeAccesses` | [msdyn_channeldefinitionlocale](msdyn_channeldefinitionlocale.md) | `objectid` | `objectid_msdyn_channeldefinitionlocale` |


## Source

Generated from [msdyn_channeldefinitionlocale (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channeldefinitionlocale')) on 2026-05-07.