---
logical: "aiinsightcard"
display: "Scheda di informazioni dettagliate IA"
entitySetName: "aiinsightcards"
primaryId: "aiinsightcardid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Scheda di informazioni dettagliate IA

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aiinsightcard` |
| Display name | Scheda di informazioni dettagliate IA |
| Display (plural) | AIInsightCards |
| Schema name | `aiinsightcard` |
| Entity set (Web API) | `aiinsightcards` |
| Primary id attribute | `aiinsightcardid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aiinsightcards?$select=name&$top=10
GET /api/data/v9.2/aiinsightcards(<guid>)
POST /api/data/v9.2/aiinsightcards
PATCH /api/data/v9.2/aiinsightcards(<guid>)
DELETE /api/data/v9.2/aiinsightcards(<guid>)
```

## Attributes

Writable: **16** · Read-only: **16**

### Writable

`aiinsightcardid`, `aiskillid`, `controlconfig`, `description`, `entityid`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `surface`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aiinsightcard_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aiinsightcard_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aiinsightcard_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aiinsightcard_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aiinsightcard` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aiinsightcard` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aiinsightcard` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aiinsightcard` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `aiskillconfig_aiinsightcard_aiskillid` | [aiskillconfig](aiskillconfig.md) | `aiskillid` | `aiskillid` |
| `entity_aiinsightcard_entityid` | [entity](entity.md) | `entityid` | `entityid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aiinsightcard_SyncErrors` | [aiinsightcard](aiinsightcard.md) | `regardingobjectid` | `regardingobjectid_aiinsightcard` |
| `aiinsightcard_AsyncOperations` | [aiinsightcard](aiinsightcard.md) | `regardingobjectid` | `regardingobjectid_aiinsightcard` |
| `aiinsightcard_MailboxTrackingFolders` | [aiinsightcard](aiinsightcard.md) | `regardingobjectid` | `regardingobjectid_aiinsightcard` |
| `aiinsightcard_UserEntityInstanceDatas` | [aiinsightcard](aiinsightcard.md) | `objectid` | `objectid_aiinsightcard` |
| `aiinsightcard_ProcessSession` | [aiinsightcard](aiinsightcard.md) | `regardingobjectid` | `regardingobjectid_aiinsightcard` |
| `aiinsightcard_BulkDeleteFailures` | [aiinsightcard](aiinsightcard.md) | `regardingobjectid` | `regardingobjectid_aiinsightcard` |
| `aiinsightcard_PrincipalObjectAttributeAccesses` | [aiinsightcard](aiinsightcard.md) | `objectid` | `objectid_aiinsightcard` |


## Source

Generated from [aiinsightcard (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aiinsightcard')) on 2026-05-07.