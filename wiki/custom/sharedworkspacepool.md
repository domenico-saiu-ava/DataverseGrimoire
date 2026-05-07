---
logical: "sharedworkspacepool"
display: "Shared Workspace Pool"
entitySetName: "sharedworkspacepools"
primaryId: "sharedworkspacepoolid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`claimed`, `discoveryendpoint`, `importsequencenumber`, `name`, `ordererendpoint`, `overriddencreatedon`, `sharedworkspacepoolid`, `statecode`, `statuscode`, `storageendpoint`, `tenantid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedworkspacepool_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedworkspacepool_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedworkspacepool_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedworkspacepool_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedworkspacepool_SyncErrors` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `sharedworkspacepool_AsyncOperations` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `sharedworkspacepool_MailboxTrackingFolders` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `sharedworkspacepool_UserEntityInstanceDatas` | [sharedworkspacepool](sharedworkspacepool.md) | `objectid` | `objectid_sharedworkspacepool` |
| `sharedworkspacepool_ProcessSession` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `sharedworkspacepool_BulkDeleteFailures` | [sharedworkspacepool](sharedworkspacepool.md) | `regardingobjectid` | `regardingobjectid_sharedworkspacepool` |
| `sharedworkspacepool_PrincipalObjectAttributeAccesses` | [sharedworkspacepool](sharedworkspacepool.md) | `objectid` | `objectid_sharedworkspacepool` |


## Source

Generated from [sharedworkspacepool (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sharedworkspacepool')) on 2026-05-07.