---
logical: "userquery"
display: "Saved View"
entitySetName: "userqueries"
primaryId: "userqueryid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Saved View

Saved database query that is owned by a user.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `userquery` |
| Display name | Saved View |
| Display (plural) | Saved Views |
| Schema name | `UserQuery` |
| Entity set (Web API) | `userqueries` |
| Primary id attribute | `userqueryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/userqueries?$select=name&$top=10
GET /api/data/v9.2/userqueries(<guid>)
POST /api/data/v9.2/userqueries
PATCH /api/data/v9.2/userqueries(<guid>)
DELETE /api/data/v9.2/userqueries(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`AdvancedGroupBy`, `ColumnSetXml`, `ConditionalFormatting`, `Description`, `EnableCrossPartition`, `FetchXml`, `LayoutJson`, `LayoutXml`, `Name`, `OfflineSqlQuery`, `OwnerId`, `OwnerIdType`, `ParentQueryId`, `QueryType`, `ReturnedTypeCode`, `StateCode`, `StatusCode`, `UserQueryId`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_userquery` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_userquery_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_userquery_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_userquery_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_userquery_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_userquerys` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_userquery` | [team](team.md) | `owningteam` | `owningteam` |
| `user_userquery` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `UserQuery_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `UserQuery_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `UserQuery_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [userquery.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/userquery.md) on 2026-05-06.