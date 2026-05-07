---
logical: "trait"
display: "trait"
entitySetName: "traits"
primaryId: "traitid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# trait

## Identity

| Property | Value |
| --- | --- |
| Logical name | `trait` |
| Display name | trait |
| Display (plural) | traits |
| Schema name | `trait` |
| Entity set (Web API) | `traits` |
| Primary id attribute | `traitid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/traits?$select=name&$top=10
GET /api/data/v9.2/traits(<guid>)
POST /api/data/v9.2/traits
PATCH /api/data/v9.2/traits(<guid>)
DELETE /api/data/v9.2/traits(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`AlternativeKey`, `Contents`, `ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `Properties`, `traitId`, `TraitType`, `TTLInSeconds`, `UserId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_trait` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_trait_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_trait_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_trait_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_trait_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_trait` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_trait` | [team](team.md) | `owningteam` | `owningteam` |
| `user_trait` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [trait.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/trait.md) on 2026-05-06.