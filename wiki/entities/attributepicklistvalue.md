---
logical: "attributepicklistvalue"
display: "Option Set Value"
entitySetName: "AttributePicklistValues"
primaryId: "attributepicklistvalueid"
tableType: "Standard"
ownership: "None"
---

# Option Set Value

Option Set Value

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attributepicklistvalue` |
| Display name | Option Set Value |
| Display (plural) | Option Set Values |
| Schema name | `AttributePicklistValue` |
| Entity set (Web API) | `AttributePicklistValues` |
| Primary id attribute | `attributepicklistvalueid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/AttributePicklistValues?$select=&$top=10
GET /api/data/v9.2/AttributePicklistValues(<guid>)
POST /api/data/v9.2/AttributePicklistValues
PATCH /api/data/v9.2/AttributePicklistValues(<guid>)
DELETE /api/data/v9.2/AttributePicklistValues(<guid>)
```

## Attributes

Writable: **2** · Read-only: **4**

### Writable

`AttributePicklistValueId`, `IsHidden`

### Read-only

`ComponentState`, `OverwriteTime`, `SolutionId`, `VersionNumber`

## Relationships


### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attributepicklistvalue_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributepicklistvalue_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributepicklistvalue_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `attributepicklistvalue_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `attributepicklistvalue_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [attributepicklistvalue.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/attributepicklistvalue.md) on 2026-05-06.