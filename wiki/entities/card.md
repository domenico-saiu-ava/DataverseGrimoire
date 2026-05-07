---
logical: "card"
display: "Card"
entitySetName: "cards"
primaryId: "cardid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Card

Card

## Identity

| Property | Value |
| --- | --- |
| Logical name | `card` |
| Display name | Card |
| Display (plural) | Card |
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

Writable: **21** · Read-only: **18**

### Writable

`AppDefinition`, `cardId`, `CoOwners`, `Description`, `HiddenTags`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PublishDate`, `PublishSourceId`, `RemixSourceId`, `SchemaVersion`, `Sizes`, `statecode`, `statuscode`, `Tags`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_card` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_card_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_card_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_card_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_card_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_card` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_card` | [team](team.md) | `owningteam` | `owningteam` |
| `user_card` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `card_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `card_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `card_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `card_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `card_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `card_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `card_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `card_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_formmapping_cardid` | _n/a_ | `cardid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `card_entity_connections` | [cardid](cardid.md) | _n/a_ | _n/a_ |
| `workflow_card_connections` | [cardid](cardid.md) | _n/a_ | _n/a_ |

## Source

Generated from [card.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/card.md) on 2026-05-06.