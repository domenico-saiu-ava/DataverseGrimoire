---
logical: "sharedworkspacepool"
display: "Shared Workspace Pool"
entitySetName: "sharedworkspacepools"
primaryId: "sharedworkspacepoolid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Shared Workspace Pool

Contains metadata about a container used to store real-time collaboration data. Once claimed, a sharedworkspace record would be created with copied metadata.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharedworkspacepool` |
| Display name | Shared Workspace Pool |
| Display (plural) | Shared Workspace Pools |
| Schema name | `sharedworkspacepool` |
| Entity set (Web API) | `sharedworkspacepools` |
| Primary id attribute | `sharedworkspacepoolid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/sharedworkspacepools?$select=name&$top=10
GET /api/data/v9.2/sharedworkspacepools(<guid>)
POST /api/data/v9.2/sharedworkspacepools
PATCH /api/data/v9.2/sharedworkspacepools(<guid>)
DELETE /api/data/v9.2/sharedworkspacepools(<guid>)
```

## Attributes

Writable: **13** · Read-only: **7**

### Writable

`Claimed`, `DiscoveryEndpoint`, `ImportSequenceNumber`, `Name`, `OrdererEndpoint`, `OverriddenCreatedOn`, `sharedworkspacepoolId`, `statecode`, `statuscode`, `StorageEndpoint`, `TenantId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedworkspacepool_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedworkspacepool_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedworkspacepool_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedworkspacepool_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedworkspacepool_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspacepool_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspacepool_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspacepool_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sharedworkspacepool_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspacepool_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sharedworkspacepool.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharedworkspacepool.md) on 2026-05-06.