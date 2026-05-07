---
logical: "exchangesyncidmapping"
display: "Exchange Sync Id Mapping"
entitySetName: "exchangesyncidmappings"
primaryId: "exchangesyncidmappingid"
tableType: "Standard"
ownership: "UserOwned"
---

# Exchange Sync Id Mapping

The mapping used to keep track of the IDs for items synced between CRM and Exchange.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `exchangesyncidmapping` |
| Display name | Exchange Sync Id Mapping |
| Display (plural) | Exchange Sync Id Mappings |
| Schema name | `ExchangeSyncIdMapping` |
| Entity set (Web API) | `exchangesyncidmappings` |
| Primary id attribute | `exchangesyncidmappingid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/exchangesyncidmappings?$select=&$top=10
GET /api/data/v9.2/exchangesyncidmappings(<guid>)
POST /api/data/v9.2/exchangesyncidmappings
PATCH /api/data/v9.2/exchangesyncidmappings(<guid>)
DELETE /api/data/v9.2/exchangesyncidmappings(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`ExchangeEntryId`, `ExchangeSyncIdmappingId`, `FromCrmChangeType`, `IsDeletedInExchange`, `IsUnlinkedInCRM`, `ItemSubject`, `LastSyncError`, `LastSyncErrorCode`, `LastSyncErrorOccurredOn`, `ObjectId`, `ObjectTypeCode`, `OwnerId`, `OwnerIdType`, `Retries`, `ToCrmChangeType`, `UserDecision`

### Read-only

`CreatedOn`, `ModifiedOn`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_exchangesyncidmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `owner_exchangesyncidmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_exchangesyncidmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_exchangesyncidmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [exchangesyncidmapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/exchangesyncidmapping.md) on 2026-05-06.