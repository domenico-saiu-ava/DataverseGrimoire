---
logical: "cardstateitem"
display: "Card State Item"
entitySetName: "cardstateitems"
primaryId: "cardstateitemid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
---

# Card State Item

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cardstateitem` |
| Display name | Card State Item |
| Display (plural) | Card State Items |
| Schema name | `cardstateitem` |
| Entity set (Web API) | `cardstateitems` |
| Primary id attribute | `cardstateitemid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/cardstateitems?$select=name&$top=10
GET /api/data/v9.2/cardstateitems(<guid>)
POST /api/data/v9.2/cardstateitems
PATCH /api/data/v9.2/cardstateitems(<guid>)
DELETE /api/data/v9.2/cardstateitems(<guid>)
```

## Attributes

Writable: **11** · Read-only: **7**

### Writable

`Cache`, `CardId`, `CardInstanceId`, `cardstateitemId`, `Data`, `ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `PartitionId`, `Scope`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cardstateitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cardstateitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cardstateitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cardstateitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [cardstateitem.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/cardstateitem.md) on 2026-05-06.