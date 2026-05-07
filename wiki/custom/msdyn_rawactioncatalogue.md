---
logical: "msdyn_rawactioncatalogue"
display: "rawactioncatalogue"
entitySetName: "msdyn_rawactioncatalogues"
primaryId: "msdyn_rawactioncatalogueid"
primaryName: "msdyn_actionid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# rawactioncatalogue

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_rawactioncatalogue` |
| Display name | rawactioncatalogue |
| Display (plural) | rawactioncatalogues |
| Schema name | `msdyn_rawactioncatalogue` |
| Entity set (Web API) | `msdyn_rawactioncatalogues` |
| Primary id attribute | `msdyn_rawactioncatalogueid` |
| Primary name attribute | `msdyn_actionid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_rawactioncatalogues?$select=msdyn_actionid&$top=10
GET /api/data/v9.2/msdyn_rawactioncatalogues(<guid>)
POST /api/data/v9.2/msdyn_rawactioncatalogues
PATCH /api/data/v9.2/msdyn_rawactioncatalogues(<guid>)
DELETE /api/data/v9.2/msdyn_rawactioncatalogues(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actionid`, `msdyn_actionreason`, `msdyn_actionuipayload`, `msdyn_prioritizationdata`, `msdyn_rawactioncatalogueid`, `msdyn_sourceagentconfig`, `msdyn_targetentityid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rawactioncatalogue_lead_msdyn_TargetentityId` | [lead](lead.md) | `msdyn_targetentityid` | `msdyn_TargetentityId_lead` |
| `msdyn_rawactioncatalogue_opportunity_msdyn_TargetentityId` | [opportunity](opportunity.md) | `msdyn_targetentityid` | `msdyn_TargetentityId_opportunity` |
| `msdyn_rawactioncatalogue_msdyn_recommendedactionsourceagentconfig` | [msdyn_recommendedactionsourceagentconfig](msdyn_recommendedactionsourceagentconfig.md) | `msdyn_sourceagentconfig` | `msdyn_sourceagentconfig` |
| `lk_msdyn_rawactioncatalogue_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_rawactioncatalogue_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_rawactioncatalogue_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_rawactioncatalogue_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_rawactioncatalogue` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_rawactioncatalogue` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_rawactioncatalogue` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_rawactioncatalogue` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_rawactioncatalogue_DuplicateMatchingRecord` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_rawactioncatalogue` |
| `msdyn_rawactioncatalogue_DuplicateBaseRecord` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `baserecordid` | `baserecordid_msdyn_rawactioncatalogue` |
| `msdyn_recommendedactionrundetails_msdyn_rawactioncatalogue` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `msdyn_rawactioncatalogueid` | `msdyn_rawactioncatalogueid` |
| `msdyn_prioritizedactioncatalogue_msdyn_rawactioncatalogue` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `msdyn_rawactioncatalogueid` | `msdyn_rawactioncatalogueid` |
| `msdyn_rawactioncatalogue_SyncErrors` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawactioncatalogue` |
| `msdyn_rawactioncatalogue_AsyncOperations` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawactioncatalogue` |
| `msdyn_rawactioncatalogue_MailboxTrackingFolders` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawactioncatalogue` |
| `msdyn_rawactioncatalogue_UserEntityInstanceDatas` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `objectid` | `objectid_msdyn_rawactioncatalogue` |
| `msdyn_rawactioncatalogue_ProcessSession` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawactioncatalogue` |
| `msdyn_rawactioncatalogue_BulkDeleteFailures` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `regardingobjectid` | `regardingobjectid_msdyn_rawactioncatalogue` |
| `msdyn_rawactioncatalogue_PrincipalObjectAttributeAccesses` | [msdyn_rawactioncatalogue](msdyn_rawactioncatalogue.md) | `objectid` | `objectid_msdyn_rawactioncatalogue` |


## Source

Generated from [msdyn_rawactioncatalogue (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_rawactioncatalogue')) on 2026-05-07.