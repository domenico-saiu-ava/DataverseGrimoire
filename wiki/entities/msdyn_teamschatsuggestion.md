---
logical: "msdyn_teamschatsuggestion"
display: "Microsoft Teams chat suggestion"
entitySetName: "msdyn_teamschatsuggestions"
primaryId: "msdyn_teamschatsuggestionid"
primaryName: "msdyn_teamschatsuggestionname"
tableType: "Standard"
ownership: "None"
---

# Microsoft Teams chat suggestion

For internal use only

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_teamschatsuggestion` |
| Display name | Microsoft Teams chat suggestion |
| Display (plural) | Microsoft Teams chat suggestions |
| Schema name | `msdyn_teamschatsuggestion` |
| Entity set (Web API) | `msdyn_teamschatsuggestions` |
| Primary id attribute | `msdyn_teamschatsuggestionid` |
| Primary name attribute | `msdyn_teamschatsuggestionname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_teamschatsuggestions?$select=msdyn_teamschatsuggestionname&$top=10
GET /api/data/v9.2/msdyn_teamschatsuggestions(<guid>)
POST /api/data/v9.2/msdyn_teamschatsuggestions
PATCH /api/data/v9.2/msdyn_teamschatsuggestions(<guid>)
DELETE /api/data/v9.2/msdyn_teamschatsuggestions(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `msdyn_computationstate`, `msdyn_computedon`, `msdyn_regardingobjectid`, `msdyn_regardingobjectname`, `msdyn_suggestions`, `msdyn_teamschatsuggestionId`, `msdyn_teamschatsuggestionname`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_teamschatsuggestion_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_teamschatsuggestion_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_teamschatsuggestion_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_teamschatsuggestion_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_teamschatsuggestion_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatsuggestion_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatsuggestion_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_teamschatsuggestion_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_teamschatsuggestion_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_teamschatsuggestion.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_teamschatsuggestion.md) on 2026-05-06.