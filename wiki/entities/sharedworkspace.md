---
logical: "sharedworkspace"
display: "Shared Workspace"
entitySetName: "sharedworkspaces"
primaryId: "sharedworkspaceid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Shared Workspace

References a container that stores real-time collaboration data.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharedworkspace` |
| Display name | Shared Workspace |
| Display (plural) | Shared Workspaces |
| Schema name | `sharedworkspace` |
| Entity set (Web API) | `sharedworkspaces` |
| Primary id attribute | `sharedworkspaceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/sharedworkspaces?$select=name&$top=10
GET /api/data/v9.2/sharedworkspaces(<guid>)
POST /api/data/v9.2/sharedworkspaces
PATCH /api/data/v9.2/sharedworkspaces(<guid>)
DELETE /api/data/v9.2/sharedworkspaces(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`DiscoveryEndpoint`, `ImportSequenceNumber`, `LastManaged`, `LastUsed`, `Name`, `OrdererEndpoint`, `OverriddenCreatedOn`, `sharedworkspaceId`, `statecode`, `statuscode`, `StorageEndpoint`, `TenantId`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `WorkspaceSchema`, `WorkspaceSchemaVersion`

### Read-only

`AccessToken`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedworkspace_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedworkspace_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedworkspace_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedworkspace_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedworkspace_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspace_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspace_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspace_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sharedworkspace_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedworkspace_sharedobject` | _n/a_ | `sharedworkspaceid` | _n/a_ |
| `sharedworkspace_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sharedworkspace.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharedworkspace.md) on 2026-05-06.