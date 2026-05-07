---
logical: "msdyn_harvestworkitem"
display: "Harvest Work Item"
entitySetName: "msdyn_harvestworkitems"
primaryId: "msdyn_harvestworkitemid"
primaryName: "msdyn_sourcelogicalname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Harvest Work Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_harvestworkitem` |
| Display name | Harvest Work Item |
| Display (plural) | Harvest Work Items |
| Schema name | `msdyn_harvestworkitem` |
| Entity set (Web API) | `msdyn_harvestworkitems` |
| Primary id attribute | `msdyn_harvestworkitemid` |
| Primary name attribute | `msdyn_sourcelogicalname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_harvestworkitems?$select=msdyn_sourcelogicalname&$top=10
GET /api/data/v9.2/msdyn_harvestworkitems(<guid>)
POST /api/data/v9.2/msdyn_harvestworkitems
PATCH /api/data/v9.2/msdyn_harvestworkitems(<guid>)
DELETE /api/data/v9.2/msdyn_harvestworkitems(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_condensedsummary`, `msdyn_embeddingsummary`, `msdyn_embeddingvector`, `msdyn_harvestworkitemid`, `msdyn_knowledgearticleid`, `msdyn_log`, `msdyn_sourcelogicalname`, `msdyn_sourceprimaryid`, `msdyn_state`, `msdyn_summary`, `msdyn_summaryupdatedon`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_harvestworkitem_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_knowledgearticleid` | `msdyn_knowledgearticleid` |
| `lk_msdyn_harvestworkitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_harvestworkitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_harvestworkitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_harvestworkitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_harvestworkitem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_harvestworkitem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_harvestworkitem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_harvestworkitem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_harvestworkitem_SyncErrors` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_DuplicateMatchingRecord` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_DuplicateBaseRecord` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `baserecordid` | `baserecordid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_AsyncOperations` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_MailboxTrackingFolders` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_UserEntityInstanceDatas` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `objectid` | `objectid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_ProcessSession` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_BulkDeleteFailures` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `regardingobjectid` | `regardingobjectid_msdyn_harvestworkitem` |
| `msdyn_harvestworkitem_PrincipalObjectAttributeAccesses` | [msdyn_harvestworkitem](msdyn_harvestworkitem.md) | `objectid` | `objectid_msdyn_harvestworkitem` |


## Source

Generated from [msdyn_harvestworkitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_harvestworkitem')) on 2026-05-07.