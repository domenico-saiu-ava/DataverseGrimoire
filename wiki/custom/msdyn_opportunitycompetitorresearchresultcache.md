---
logical: "msdyn_opportunitycompetitorresearchresultcache"
display: "Opportunity Competitor Research Result Cache"
entitySetName: "msdyn_opportunitycompetitorresearchresultcaches"
primaryId: "msdyn_opportunitycompetitorresearchresultcacheid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Opportunity Competitor Research Result Cache

Tiered cache for competitor research results

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_opportunitycompetitorresearchresultcache` |
| Display name | Opportunity Competitor Research Result Cache |
| Display (plural) | Opportunity Competitor Research Result Caches |
| Schema name | `msdyn_OpportunityCompetitorResearchResultCache` |
| Entity set (Web API) | `msdyn_opportunitycompetitorresearchresultcaches` |
| Primary id attribute | `msdyn_opportunitycompetitorresearchresultcacheid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_opportunitycompetitorresearchresultcaches?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_opportunitycompetitorresearchresultcaches(<guid>)
POST /api/data/v9.2/msdyn_opportunitycompetitorresearchresultcaches
PATCH /api/data/v9.2/msdyn_opportunitycompetitorresearchresultcaches(<guid>)
DELETE /api/data/v9.2/msdyn_opportunitycompetitorresearchresultcaches(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_accountid`, `msdyn_cachetier`, `msdyn_competitorname`, `msdyn_competitorresult`, `msdyn_expireson`, `msdyn_localecode`, `msdyn_name`, `msdyn_opportunitycompetitorresearchresultcacheid`, `msdyn_productslist`, `msdyn_sellerdomain`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_opportunitycompetitorresearchresultcache_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_opportunitycompetitorresearchresultcache_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_opportunitycompetitorresearchresultcache_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_opportunitycompetitorresearchresultcache_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_opportunitycompetitorresearchresultcache` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_opportunitycompetitorresearchresultcache` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_opportunitycompetitorresearchresultcache` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_opportunitycompetitorresearchresultcache` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_OpportunityCompetitorResearchResultCache_Account_AccountId` | [account](account.md) | `msdyn_accountid` | `msdyn_AccountId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_opportunitycompetitorresearchresultcache_SyncErrors` | [msdyn_opportunitycompetitorresearchresultcache](msdyn_opportunitycompetitorresearchresultcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitycompetitorresearchresultcache` |
| `msdyn_opportunitycompetitorresearchresultcache_AsyncOperations` | [msdyn_opportunitycompetitorresearchresultcache](msdyn_opportunitycompetitorresearchresultcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitycompetitorresearchresultcache` |
| `msdyn_opportunitycompetitorresearchresultcache_MailboxTrackingFolders` | [msdyn_opportunitycompetitorresearchresultcache](msdyn_opportunitycompetitorresearchresultcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitycompetitorresearchresultcache` |
| `msdyn_opportunitycompetitorresearchresultcache_UserEntityInstanceDatas` | [msdyn_opportunitycompetitorresearchresultcache](msdyn_opportunitycompetitorresearchresultcache.md) | `objectid` | `objectid_msdyn_opportunitycompetitorresearchresultcache` |
| `msdyn_opportunitycompetitorresearchresultcache_ProcessSession` | [msdyn_opportunitycompetitorresearchresultcache](msdyn_opportunitycompetitorresearchresultcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitycompetitorresearchresultcache` |
| `msdyn_opportunitycompetitorresearchresultcache_BulkDeleteFailures` | [msdyn_opportunitycompetitorresearchresultcache](msdyn_opportunitycompetitorresearchresultcache.md) | `regardingobjectid` | `regardingobjectid_msdyn_opportunitycompetitorresearchresultcache` |
| `msdyn_opportunitycompetitorresearchresultcache_PrincipalObjectAttributeAccesses` | [msdyn_opportunitycompetitorresearchresultcache](msdyn_opportunitycompetitorresearchresultcache.md) | `objectid` | `objectid_msdyn_opportunitycompetitorresearchresultcache` |


## Source

Generated from [msdyn_opportunitycompetitorresearchresultcache (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_opportunitycompetitorresearchresultcache')) on 2026-05-07.