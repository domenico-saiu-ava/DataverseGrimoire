---
logical: "msdyn_knowledgearticlecustomentity"
display: "Entità personalizzata articolo knowledge base"
entitySetName: "msdyn_knowledgearticlecustomentities"
primaryId: "msdyn_knowledgearticlecustomentityid"
primaryName: "msdyn_entityname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Entità personalizzata articolo knowledge base

Tabella per facilitare il collegamento di articoli della knowledge base a origini di entità personalizzate.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_knowledgearticlecustomentity` |
| Display name | Entità personalizzata articolo knowledge base |
| Display (plural) | Entità personalizzate articolo knowledge base |
| Schema name | `msdyn_knowledgearticlecustomentity` |
| Entity set (Web API) | `msdyn_knowledgearticlecustomentities` |
| Primary id attribute | `msdyn_knowledgearticlecustomentityid` |
| Primary name attribute | `msdyn_entityname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_knowledgearticlecustomentities?$select=msdyn_entityname&$top=10
GET /api/data/v9.2/msdyn_knowledgearticlecustomentities(<guid>)
POST /api/data/v9.2/msdyn_knowledgearticlecustomentities
PATCH /api/data/v9.2/msdyn_knowledgearticlecustomentities(<guid>)
DELETE /api/data/v9.2/msdyn_knowledgearticlecustomentities(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_entityid`, `msdyn_entityname`, `msdyn_knowledgearticlecustomentityid`, `msdyn_knowledgearticleid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_knowledgearticlecustomentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_knowledgearticlecustomentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_knowledgearticlecustomentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_knowledgearticlecustomentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_knowledgearticlecustomentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_knowledgearticlecustomentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_knowledgearticlecustomentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_knowledgearticlecustomentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_knowledgearticlecustomentity_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_knowledgearticleid` | `msdyn_knowledgearticleid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_knowledgearticlecustomentity_SyncErrors` | [msdyn_knowledgearticlecustomentity](msdyn_knowledgearticlecustomentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticlecustomentity` |
| `msdyn_knowledgearticlecustomentity_AsyncOperations` | [msdyn_knowledgearticlecustomentity](msdyn_knowledgearticlecustomentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticlecustomentity` |
| `msdyn_knowledgearticlecustomentity_MailboxTrackingFolders` | [msdyn_knowledgearticlecustomentity](msdyn_knowledgearticlecustomentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticlecustomentity` |
| `msdyn_knowledgearticlecustomentity_UserEntityInstanceDatas` | [msdyn_knowledgearticlecustomentity](msdyn_knowledgearticlecustomentity.md) | `objectid` | `objectid_msdyn_knowledgearticlecustomentity` |
| `msdyn_knowledgearticlecustomentity_ProcessSession` | [msdyn_knowledgearticlecustomentity](msdyn_knowledgearticlecustomentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticlecustomentity` |
| `msdyn_knowledgearticlecustomentity_BulkDeleteFailures` | [msdyn_knowledgearticlecustomentity](msdyn_knowledgearticlecustomentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_knowledgearticlecustomentity` |
| `msdyn_knowledgearticlecustomentity_PrincipalObjectAttributeAccesses` | [msdyn_knowledgearticlecustomentity](msdyn_knowledgearticlecustomentity.md) | `objectid` | `objectid_msdyn_knowledgearticlecustomentity` |


## Source

Generated from [msdyn_knowledgearticlecustomentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_knowledgearticlecustomentity')) on 2026-05-07.