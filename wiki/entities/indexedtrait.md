---
logical: "indexedtrait"
display: "indexedtrait"
entitySetName: "indexedtraits"
primaryId: "indexedtraitid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# indexedtrait

## Identity

| Property | Value |
| --- | --- |
| Logical name | `indexedtrait` |
| Display name | indexedtrait |
| Display (plural) | indexedtraits |
| Schema name | `indexedtrait` |
| Entity set (Web API) | `indexedtraits` |
| Primary id attribute | `indexedtraitid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/indexedtraits?$select=name&$top=10
GET /api/data/v9.2/indexedtraits(<guid>)
POST /api/data/v9.2/indexedtraits
PATCH /api/data/v9.2/indexedtraits(<guid>)
DELETE /api/data/v9.2/indexedtraits(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`AlternativeKey`, `DetailedContents`, `FilterCriteria`, `ImportSequenceNumber`, `indexedtraitId`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `Properties`, `SearchContents`, `TraitType`, `TTLInSeconds`, `UserId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_indexedtrait` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_indexedtrait_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_indexedtrait_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_indexedtrait_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_indexedtrait_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_indexedtrait` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_indexedtrait` | [team](team.md) | `owningteam` | `owningteam` |
| `user_indexedtrait` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [indexedtrait.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/indexedtrait.md) on 2026-05-06.