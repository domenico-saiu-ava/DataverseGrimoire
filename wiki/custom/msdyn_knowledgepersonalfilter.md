---
logical: "msdyn_knowledgepersonalfilter"
display: "Configurazione filtro personale ricerca nella Knowledge Base"
entitySetName: "msdyn_knowledgepersonalfilters"
primaryId: "msdyn_knowledgepersonalfilterid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione filtro personale ricerca nella Knowledge Base

Consente di configurare e gestire le impostazioni di filtro personali.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgepersonalfilter` |
| Display name | Configurazione filtro personale ricerca nella Knowledge Base |
| Display (plural) | Filtri personali ricerca nella Knowledge Base |
| Schema name | `msdyn_knowledgepersonalfilter` |
| Entity set (Web API) | `msdyn_knowledgepersonalfilters` |
| Primary id attribute | `msdyn_knowledgepersonalfilterid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgepersonalfilters?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_knowledgepersonalfilters(<guid>)
POST /api/data/v9.2/msdyn_knowledgepersonalfilters
PATCH /api/data/v9.2/msdyn_knowledgepersonalfilters(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgepersonalfilters(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_attributename`, `msdyn_enabled`, `msdyn_entityname`, `msdyn_knowledgepersonalfilterid`, `msdyn_name`, `msdyn_preferredvalues`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgepersonalfilter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgepersonalfilter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgepersonalfilter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgepersonalfilter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgepersonalfilter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgepersonalfilter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgepersonalfilter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgepersonalfilter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgepersonalfilter_SyncErrors` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_DuplicateMatchingRecord` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_DuplicateBaseRecord` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `baserecordid` | `baserecordid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_AsyncOperations` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_MailboxTrackingFolders` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_UserEntityInstanceDatas` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `objectid` | `objectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_ProcessSession` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_BulkDeleteFailures` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgepersonalfilter` |
| `msdyn_knowledgepersonalfilter_PrincipalObjectAttributeAccesses` | [msdyn_knowledgepersonalfilter](msdyn_knowledgepersonalfilter.md) | `objectid` | `objectid_msdyn_knowledgepersonalfilter` |


## Source

Generated from [msdyn_knowledgepersonalfilter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgepersonalfilter')) on 2026-05-07.