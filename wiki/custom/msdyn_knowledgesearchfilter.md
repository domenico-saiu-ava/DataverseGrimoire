---
logical: "msdyn_knowledgesearchfilter"
display: "Filtro di ricerca nella Knowledge Base"
entitySetName: "msdyn_knowledgesearchfilters"
primaryId: "msdyn_knowledgesearchfilterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Filtro di ricerca nella Knowledge Base

Consente di configurare e gestire le impostazioni di filtro.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgesearchfilter` |
| Display name | Filtro di ricerca nella Knowledge Base |
| Display (plural) | Filtri di ricerca nella Knowledge Base |
| Schema name | `msdyn_knowledgesearchfilter` |
| Entity set (Web API) | `msdyn_knowledgesearchfilters` |
| Primary id attribute | `msdyn_knowledgesearchfilterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgesearchfilters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_knowledgesearchfilters(<guid>)
POST /api/data/v9.2/msdyn_knowledgesearchfilters
PATCH /api/data/v9.2/msdyn_knowledgesearchfilters(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgesearchfilters(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_attributename`, `msdyn_defaultvalues`, `msdyn_enabled`, `msdyn_entityname`, `msdyn_iscustom`, `msdyn_knowledgesearchfilterid`, `msdyn_name`, `msdyn_orderid`, `msdyn_selectedvalues`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgesearchfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgesearchfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgesearchfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgesearchfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgesearchfilter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgesearchfilter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgesearchfilter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgesearchfilter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgesearchfilter_SyncErrors` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_DuplicateMatchingRecord` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_DuplicateBaseRecord` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `baserecordid` | `baserecordid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_AsyncOperations` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_MailboxTrackingFolders` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_UserEntityInstanceDatas` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `objectid` | `objectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_ProcessSession` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_BulkDeleteFailures` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgesearchfilter` |
| `msdyn_knowledgesearchfilter_PrincipalObjectAttributeAccesses` | [msdyn_knowledgesearchfilter](msdyn_knowledgesearchfilter.md) | `objectid` | `objectid_msdyn_knowledgesearchfilter` |


## Source

Generated from [msdyn_knowledgesearchfilter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgesearchfilter')) on 2026-05-07.