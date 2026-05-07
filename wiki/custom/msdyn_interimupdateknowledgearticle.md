---
logical: "msdyn_interimupdateknowledgearticle"
display: "Tabella provvisoria aggiornamenti articoli knowledge base"
entitySetName: "msdyn_interimupdateknowledgearticles"
primaryId: "msdyn_interimupdateknowledgearticleid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Tabella provvisoria aggiornamenti articoli knowledge base

Tabella provvisoria per facilitare l'aggiornamento degli articoli della knowledge base dalla raccolta di informazioni.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_interimupdateknowledgearticle` |
| Display name | Tabella provvisoria aggiornamenti articoli knowledge base |
| Display (plural) | Tabella provvisoria aggiornamenti articoli knowledge base |
| Schema name | `msdyn_interimupdateknowledgearticle` |
| Entity set (Web API) | `msdyn_interimupdateknowledgearticles` |
| Primary id attribute | `msdyn_interimupdateknowledgearticleid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_interimupdateknowledgearticles?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_interimupdateknowledgearticles(<guid>)
POST /api/data/v9.2/msdyn_interimupdateknowledgearticles
PATCH /api/data/v9.2/msdyn_interimupdateknowledgearticles(<guid>)
DELETE /api/data/v9.2/msdyn_interimupdateknowledgearticles(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_compliancestatecode`, `msdyn_content`, `msdyn_creationmode`, `msdyn_interimupdateknowledgearticleid`, `msdyn_relatedrecord`, `msdyn_sourceofcreation`, `msdyn_statecode`, `msdyn_statuscode`, `msdyn_targetknowledgearticleid`, `msdyn_title`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_interimupdateknowledgearticle_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_interimupdateknowledgearticle_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_interimupdateknowledgearticle_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_interimupdateknowledgearticle_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_interimupdateknowledgearticle` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_interimupdateknowledgearticle` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_interimupdateknowledgearticle` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_interimupdateknowledgearticle` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_interimupdateknowledgearticle_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_targetknowledgearticleid` | `msdyn_targetknowledgearticleid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_interimupdateknowledgearticle_SyncErrors` | [msdyn_interimupdateknowledgearticle](msdyn_interimupdateknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_interimupdateknowledgearticle` |
| `msdyn_interimupdateknowledgearticle_AsyncOperations` | [msdyn_interimupdateknowledgearticle](msdyn_interimupdateknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_interimupdateknowledgearticle` |
| `msdyn_interimupdateknowledgearticle_MailboxTrackingFolders` | [msdyn_interimupdateknowledgearticle](msdyn_interimupdateknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_interimupdateknowledgearticle` |
| `msdyn_interimupdateknowledgearticle_UserEntityInstanceDatas` | [msdyn_interimupdateknowledgearticle](msdyn_interimupdateknowledgearticle.md) | `objectid` | `objectid_msdyn_interimupdateknowledgearticle` |
| `msdyn_interimupdateknowledgearticle_ProcessSession` | [msdyn_interimupdateknowledgearticle](msdyn_interimupdateknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_interimupdateknowledgearticle` |
| `msdyn_interimupdateknowledgearticle_BulkDeleteFailures` | [msdyn_interimupdateknowledgearticle](msdyn_interimupdateknowledgearticle.md) | `regardingobjectid` | `regardingobjectid_msdyn_interimupdateknowledgearticle` |
| `msdyn_interimupdateknowledgearticle_PrincipalObjectAttributeAccesses` | [msdyn_interimupdateknowledgearticle](msdyn_interimupdateknowledgearticle.md) | `objectid` | `objectid_msdyn_interimupdateknowledgearticle` |


## Source

Generated from [msdyn_interimupdateknowledgearticle (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_interimupdateknowledgearticle')) on 2026-05-07.