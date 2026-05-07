---
logical: "sharedworkspace"
display: "Shared Workspace"
entitySetName: "sharedworkspaces"
primaryId: "sharedworkspaceid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`discoveryendpoint`, `importsequencenumber`, `lastmanaged`, `lastused`, `name`, `ordererendpoint`, `overriddencreatedon`, `sharedworkspaceid`, `statecode`, `statuscode`, `storageendpoint`, `tenantid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `workspaceschema`, `workspaceschemaversion`

### Read-only

`accesstoken`, `createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedworkspace_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedworkspace_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedworkspace_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedworkspace_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedworkspace_SyncErrors` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspace_AsyncOperations` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspace_MailboxTrackingFolders` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspace_UserEntityInstanceDatas` | [sharedworkspace](sharedworkspace.md) | `objectid` | `objectid_sharedworkspace` |
| `sharedworkspace_ProcessSession` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspace_BulkDeleteFailures` | [sharedworkspace](sharedworkspace.md) | `regardingobjectid` | `regardingobjectid_sharedworkspace` |
| `sharedworkspace_PrincipalObjectAttributeAccesses` | [sharedworkspace](sharedworkspace.md) | `objectid` | `objectid_sharedworkspace` |
| `sharedworkspace_sharedobject` | [sharedworkspace](sharedworkspace.md) | `sharedworkspaceid` | `SharedWorkspaceId` |


## Source

Generated from [sharedworkspace (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sharedworkspace')) on 2026-05-07.