---
logical: "msdyn_federatedarticle"
display: "Articolo federato della Knowledge Base"
entitySetName: "msdyn_federatedarticles"
primaryId: "msdyn_federatedarticleid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Articolo federato della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_federatedarticle` |
| Display name | Articolo federato della Knowledge Base |
| Display (plural) | Articoli federati della Knowledge Base |
| Schema name | `msdyn_federatedarticle` |
| Entity set (Web API) | `msdyn_federatedarticles` |
| Primary id attribute | `msdyn_federatedarticleid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_federatedarticles?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_federatedarticles(<guid>)
POST /api/data/v9.2/msdyn_federatedarticles
PATCH /api/data/v9.2/msdyn_federatedarticles(<guid>)
DELETE /api/data/v9.2/msdyn_federatedarticles(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_federatedarticleid`, `msdyn_searchproviderarticleid`, `msdyn_searchproviderid`, `msdyn_title`, `msdyn_url`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_federatedarticle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_federatedarticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_federatedarticle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_federatedarticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_federatedarticle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_federatedarticle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_federatedarticle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_federatedarticle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid` | [msdyn_kmfederatedsearchconfig](msdyn_kmfederatedsearchconfig.md) | `msdyn_searchproviderid` | `msdyn_searchproviderid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_federatedarticle_SyncErrors` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_DuplicateMatchingRecord` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_DuplicateBaseRecord` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `baserecordid` | `baserecordid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_AsyncOperations` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_MailboxTrackingFolders` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_UserEntityInstanceDatas` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `objectid` | `objectid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_ProcessSession` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_BulkDeleteFailures` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_PrincipalObjectAttributeAccesses` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `objectid` | `objectid_msdyn_federatedarticle` |
| `msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `msdyn_federatedarticleid` | `msdyn_federatedarticleid` |


## Source

Generated from [msdyn_federatedarticle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_federatedarticle')) on 2026-05-07.