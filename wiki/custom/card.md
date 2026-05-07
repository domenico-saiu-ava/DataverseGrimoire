---
logical: "card"
display: "Scheda"
entitySetName: "cards"
primaryId: "cardid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Scheda

Scheda

## Identity

| Property | Value |
| --- | --- |
| Logical name | `card` |
| Display name | Scheda |
| Display (plural) | Scheda |
| Schema name | `card` |
| Entity set (Web API) | `cards` |
| Primary id attribute | `cardid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/cards?$select=name&$top=10
GET /api/data/v9.2/cards(<guid>)
POST /api/data/v9.2/cards
PATCH /api/data/v9.2/cards(<guid>)
DELETE /api/data/v9.2/cards(<guid>)
```

## Attributes

Writable: **20** · Read-only: **16**

### Writable

`appdefinition`, `cardid`, `coowners`, `description`, `hiddentags`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `publishdate`, `publishsourceid`, `remixsourceid`, `schemaversion`, `sizes`, `statecode`, `statuscode`, `tags`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_card_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_card_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_card_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_card_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_card` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_card` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_card` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_card` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `card_SyncErrors` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `card_DuplicateMatchingRecord` | [card](card.md) | `duplicaterecordid` | `duplicaterecordid_card` |
| `card_DuplicateBaseRecord` | [card](card.md) | `baserecordid` | `baserecordid_card` |
| `card_AsyncOperations` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `card_MailboxTrackingFolders` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `card_UserEntityInstanceDatas` | [card](card.md) | `objectid` | `objectid_card` |
| `card_ProcessSession` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `card_BulkDeleteFailures` | [card](card.md) | `regardingobjectid` | `regardingobjectid_card` |
| `card_PrincipalObjectAttributeAccesses` | [card](card.md) | `objectid` | `objectid_card` |
| `msdyn_formmapping_cardid` | [card](card.md) | `cardid` | `cardid` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `card_entity_connections` | [entity](entity.md) | _n/a_ | `card_entity_connections` |
| `workflow_card_connections` | [workflow](workflow.md) | _n/a_ | `workflow_card_connections` |

## Source

Generated from [card (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='card')) on 2026-05-07.