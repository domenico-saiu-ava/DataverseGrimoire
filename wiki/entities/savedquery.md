---
logical: "savedquery"
display: "View"
entitySetName: "savedqueries"
primaryId: "savedqueryid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# View

Saved query against the database.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `savedquery` |
| Display name | View |
| Display (plural) | Views |
| Schema name | `SavedQuery` |
| Entity set (Web API) | `savedqueries` |
| Primary id attribute | `savedqueryid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/savedqueries?$select=name&$top=10
GET /api/data/v9.2/savedqueries(<guid>)
POST /api/data/v9.2/savedqueries
PATCH /api/data/v9.2/savedqueries(<guid>)
DELETE /api/data/v9.2/savedqueries(<guid>)
```

## Attributes

Writable: **22** · Read-only: **19**

### Writable

`AdvancedGroupBy`, `CanBeDeleted`, `ColumnSetXml`, `ConditionalFormatting`, `Description`, `EnableCrossPartition`, `FetchXml`, `IntroducedVersion`, `IsCustomizable`, `IsDefault`, `IsQuickFindQuery`, `LayoutJson`, `LayoutXml`, `Name`, `OfflineSqlQuery`, `QueryAppUsage`, `QueryType`, `ReturnedTypeCode`, `RoleDisplayConditionsXml`, `SavedQueryId`, `StateCode`, `StatusCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsCustom`, `IsManaged`, `IsPrivate`, `IsUserDefined`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OrganizationTabOrder`, `OverwriteTime`, `QueryAPI`, `SavedQueryIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_savedquery_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_savedquery_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_savedquerybase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_savedquerybase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_saved_queries` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mobileofflineprofileitem_savedquery` | _n/a_ | `profileitemrule` | _n/a_ |
| `SavedQuery_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SavedQuery_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SavedQuery_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [savedquery.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/savedquery.md) on 2026-05-06.