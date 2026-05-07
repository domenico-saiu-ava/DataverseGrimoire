---
logical: "recentlyused"
display: "Recently Used"
entitySetName: "recentlyused"
primaryId: "recentlyusedid"
primaryName: "name"
tableType: "Elastic"
ownership: "UserOwned"
---

# Recently Used

Most recently used data table.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `recentlyused` |
| Display name | Recently Used |
| Display (plural) | Recently Used |
| Schema name | `recentlyused` |
| Entity set (Web API) | `recentlyused` |
| Primary id attribute | `recentlyusedid` |
| Primary name attribute | `name` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/recentlyused?$select=name&$top=10
GET /api/data/v9.2/recentlyused(<guid>)
POST /api/data/v9.2/recentlyused
PATCH /api/data/v9.2/recentlyused(<guid>)
DELETE /api/data/v9.2/recentlyused(<guid>)
```

## Attributes

Writable: **19** · Read-only: **13**

### Writable

`AppId`, `ImageUrl`, `ImportSequenceNumber`, `name`, `ObjectId`, `ObjectPartitionId`, `ObjectType`, `ObjectTypeDisplayName`, `ObjectTypeId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PartitionId`, `recentlyusedId`, `RecordUrl`, `SubTitle`, `Title`, `TTLInSeconds`, `UserId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `LastAccessed`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_recentlyused` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_recentlyused_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_recentlyused_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_recentlyused_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_recentlyused_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_recentlyused` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_recentlyused` | [team](team.md) | `owningteam` | `owningteam` |
| `user_recentlyused` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |



## Source

Generated from [recentlyused.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/recentlyused.md) on 2026-05-06.