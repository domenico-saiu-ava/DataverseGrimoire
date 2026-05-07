---
logical: "msdyn_favoriteknowledgearticle"
display: "Articolo della Knowledge Base preferito"
entitySetName: "msdyn_favoriteknowledgearticles"
primaryId: "msdyn_favoriteknowledgearticleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Articolo della Knowledge Base preferito

Entità per articoli della Knowledge Base preferiti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_favoriteknowledgearticle` |
| Display name | Articolo della Knowledge Base preferito |
| Display (plural) | Articoli della Knowledge Base preferiti |
| Schema name | `msdyn_favoriteknowledgearticle` |
| Entity set (Web API) | `msdyn_favoriteknowledgearticles` |
| Primary id attribute | `msdyn_favoriteknowledgearticleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_favoriteknowledgearticles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_favoriteknowledgearticles(<guid>)
POST /api/data/v9.2/msdyn_favoriteknowledgearticles
PATCH /api/data/v9.2/msdyn_favoriteknowledgearticles(<guid>)
DELETE /api/data/v9.2/msdyn_favoriteknowledgearticles(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_favoriteknowledgearticleid`, `msdyn_knowledgearticleid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_favoriteknowledgearticle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_favoriteknowledgearticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_favoriteknowledgearticle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_favoriteknowledgearticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_favoriteknowledgearticle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_favoriteknowledgearticle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_favoriteknowledgearticle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_favoriteknowledgearticle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_knowledgearticle_favoriteknowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_knowledgearticleid` | `msdyn_knowledgearticleid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_favoriteknowledgearticle_SyncErrors` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_DuplicateMatchingRecord` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_DuplicateBaseRecord` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `baserecordid` | `baserecordid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_AsyncOperations` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_MailboxTrackingFolders` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_UserEntityInstanceDatas` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `objectid` | `objectid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_ProcessSession` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_BulkDeleteFailures` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_favoriteknowledgearticle` |
| `msdyn_favoriteknowledgearticle_PrincipalObjectAttributeAccesses` | [msdyn_favoriteknowledgearticle](msdyn_favoriteknowledgearticle.md) | `objectid` | `objectid_msdyn_favoriteknowledgearticle` |


## Source

Generated from [msdyn_favoriteknowledgearticle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_favoriteknowledgearticle')) on 2026-05-07.