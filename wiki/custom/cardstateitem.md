---
logical: "cardstateitem"
display: "Elemento stato scheda"
entitySetName: "cardstateitems"
primaryId: "cardstateitemid"
primaryName: "name"
tableType: "Elastic"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento stato scheda

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cardstateitem` |
| Display name | Elemento stato scheda |
| Display (plural) | Elementi stato scheda |
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

`cache`, `cardid`, `cardinstanceid`, `cardstateitemid`, `data`, `importsequencenumber`, `name`, `overriddencreatedon`, `partitionid`, `scope`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_cardstateitem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_cardstateitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_cardstateitem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_cardstateitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [cardstateitem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cardstateitem')) on 2026-05-07.