---
logical: "entityindex"
display: "Entity Index"
entitySetName: "entityindexes"
primaryId: "indexid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Entity Index

Metadata describing index of an entity

## Identity

| Property | Value |
| --- | --- |
| Logical name | `entityindex` |
| Display name | Entity Index |
| Display (plural) | Entity Indexes |
| Schema name | `EntityIndex` |
| Entity set (Web API) | `entityindexes` |
| Primary id attribute | `indexid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/entityindexes?$select=name&$top=10
GET /api/data/v9.2/entityindexes(<guid>)
POST /api/data/v9.2/entityindexes
PATCH /api/data/v9.2/entityindexes(<guid>)
DELETE /api/data/v9.2/entityindexes(<guid>)
```

## Attributes

Writable: **3** · Read-only: **5**

### Writable

`IndexId`, `Name`, `SequentialKeyStatus`

### Read-only

`ComponentState`, `OverwriteTime`, `RecordId`, `SolutionId`, `VersionNumber`

## Relationships


### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entityindex_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityindex_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityindex_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `entityindex_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `entityindex_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [entityindex.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/entityindex.md) on 2026-05-06.