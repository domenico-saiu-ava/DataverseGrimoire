---
logical: "indexattributes"
display: "Index Attribute"
entitySetName: "indexattributes"
primaryId: "indexattributeid"
tableType: "Standard"
ownership: "None"
---

# Index Attribute

Stores index attributes

## Identity

| Property | Value |
| --- | --- |
| Logical name | `indexattributes` |
| Display name | Index Attribute |
| Display (plural) | Index Attributes |
| Schema name | `IndexAttributes` |
| Entity set (Web API) | `indexattributes` |
| Primary id attribute | `indexattributeid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/indexattributes?$select=&$top=10
GET /api/data/v9.2/indexattributes(<guid>)
POST /api/data/v9.2/indexattributes
PATCH /api/data/v9.2/indexattributes(<guid>)
DELETE /api/data/v9.2/indexattributes(<guid>)
```

## Attributes

Writable: **2** · Read-only: **2**

### Writable

`IndexAttributeId`, `IndexId`

### Read-only

`RecordId`, `VersionNumber`

## Relationships


### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `indexattributes_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `indexattributes_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `indexattributes_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `indexattributes_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `indexattributes_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [indexattributes.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/indexattributes.md) on 2026-05-06.