---
logical: "userqueryvisualization"
display: "User Chart"
entitySetName: "userqueryvisualizations"
primaryId: "userqueryvisualizationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# User Chart

Chart attached to an entity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `userqueryvisualization` |
| Display name | User Chart |
| Display (plural) | User Charts |
| Schema name | `UserQueryVisualization` |
| Entity set (Web API) | `userqueryvisualizations` |
| Primary id attribute | `userqueryvisualizationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/userqueryvisualizations?$select=name&$top=10
GET /api/data/v9.2/userqueryvisualizations(<guid>)
POST /api/data/v9.2/userqueryvisualizations
PATCH /api/data/v9.2/userqueryvisualizations(<guid>)
DELETE /api/data/v9.2/userqueryvisualizations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **11**

### Writable

`ChartType`, `DataDescription`, `Description`, `EnableCrossPartition`, `IsDefault`, `isNLGenerated`, `Name`, `OwnerId`, `OwnerIdType`, `PresentationDescription`, `PrimaryEntityTypeCode`, `UserQueryVisualizationId`, `WebResourceId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_userqueryvisualizations` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_userqueryvisualization_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_userqueryvisualization_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_userqueryvisualizationbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_userqueryvisualizationbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_userqueryvisualizations` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_userqueryvisualizations` | [team](team.md) | `owningteam` | `owningteam` |
| `user_userqueryvisualizations` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `webresource_userqueryvisualizations` | [webresource](webresource.md) | `webresourceid` | `webresourceid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `UserQueryVisualization_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [userqueryvisualization.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/userqueryvisualization.md) on 2026-05-06.