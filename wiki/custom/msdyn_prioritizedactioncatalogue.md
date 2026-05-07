---
logical: "msdyn_prioritizedactioncatalogue"
display: "Prioritized Action Catalogue"
entitySetName: "msdyn_prioritizedactioncatalogues"
primaryId: "msdyn_prioritizedactioncatalogueid"
primaryName: "msdyn_actionid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Prioritized Action Catalogue

Stores the result of scoring done by recommended action agent for each action.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_prioritizedactioncatalogue` |
| Display name | Prioritized Action Catalogue |
| Display (plural) | Prioritized Action Catalogues |
| Schema name | `msdyn_prioritizedactioncatalogue` |
| Entity set (Web API) | `msdyn_prioritizedactioncatalogues` |
| Primary id attribute | `msdyn_prioritizedactioncatalogueid` |
| Primary name attribute | `msdyn_actionid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_prioritizedactioncatalogues?$select=msdyn_actionid&$top=10
GET /api/data/v9.2/msdyn_prioritizedactioncatalogues(<guid>)
POST /api/data/v9.2/msdyn_prioritizedactioncatalogues
PATCH /api/data/v9.2/msdyn_prioritizedactioncatalogues(<guid>)
DELETE /api/data/v9.2/msdyn_prioritizedactioncatalogues(<guid>)
```

## Attributes

Writable: **18** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actionid`, `msdyn_actionscore`, `msdyn_actionuipayload`, `msdyn_actionuistatus`, `msdyn_hascrossedceiling`, `msdyn_hascrossedfloor`, `msdyn_prioritizedactioncatalogueid`, `msdyn_rawactioncatalogueid`, `msdyn_scoredetails`, `msdyn_sourceagentconfig`, `msdyn_targetentity`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_prioritizedactioncatalogue_opportunity` | [opportunity](opportunity.md) | `msdyn_targetentity` | `msdyn_targetentity_opportunity` |
| `msdyn_prioritizedactioncatalogue_lead` | [lead](lead.md) | `msdyn_targetentity` | `msdyn_targetentity_lead` |
| `msdyn_prioritizedactioncatalogue_msdyn_rawactioncatalogue` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `msdyn_rawactioncatalogueid` | `msdyn_rawactioncatalogueid` |
| `msdyn_prioritizedactioncatalogue_msdyn_recommendedactionsourceagentconfig` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `msdyn_sourceagentconfig` | `msdyn_sourceagentconfig` |
| `lk_msdyn_prioritizedactioncatalogue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_prioritizedactioncatalogue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_prioritizedactioncatalogue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_prioritizedactioncatalogue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_prioritizedactioncatalogue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_prioritizedactioncatalogue` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_prioritizedactioncatalogue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_prioritizedactioncatalogue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_prioritizedactioncatalogue_DuplicateMatchingRecord` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_DuplicateBaseRecord` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `baserecordid` | `baserecordid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_SyncErrors` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_AsyncOperations` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_MailboxTrackingFolders` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_UserEntityInstanceDatas` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `objectid` | `objectid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_ProcessSession` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_BulkDeleteFailures` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_prioritizedactioncatalogue` |
| `msdyn_prioritizedactioncatalogue_PrincipalObjectAttributeAccesses` | [msdyn_prioritizedactioncatalogue](msdyn_prioritizedactioncatalogue.md) | `objectid` | `objectid_msdyn_prioritizedactioncatalogue` |


## Source

Generated from [msdyn_prioritizedactioncatalogue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_prioritizedactioncatalogue')) on 2026-05-07.