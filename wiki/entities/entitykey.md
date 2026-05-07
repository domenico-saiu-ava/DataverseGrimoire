---
logical: "entitykey"
display: "Entity Key"
entitySetName: "entitykeys"
primaryId: "entitykeyid"
primaryName: "logicalname"
tableType: "Standard"
ownership: "None"
---

# Entity Key

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entitykey` |
| Display name | Entity Key |
| Display (plural) | Entity Keys |
| Schema name | `EntityKey` |
| Entity set (Web API) | `entitykeys` |
| Primary id attribute | `entitykeyid` |
| Primary name attribute | `logicalname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entitykeys?$select=logicalname&$top=10
GET /api/data/v9.2/entitykeys(<guid>)
POST /api/data/v9.2/entitykeys
PATCH /api/data/v9.2/entitykeys(<guid>)
DELETE /api/data/v9.2/entitykeys(<guid>)
```

## Attributes

Writable: **3** · Read-only: **4**

### Writable

`EntityKeyId`, `LogicalName`, `Name`

### Read-only

`ComponentState`, `IsSecondaryKey`, `OverwriteTime`, `SolutionId`

## Relationships




## Source

Generated from [entitykey.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entitykey.md) on 2026-05-06.