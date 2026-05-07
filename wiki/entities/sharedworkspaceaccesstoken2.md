---
logical: "sharedworkspaceaccesstoken2"
display: "Shared Workspace Access Token"
entitySetName: "sharedworkspaceaccesstoken2s"
primaryId: "sharedworkspaceaccesstoken2id"
primaryName: "systemuserid"
tableType: "Elastic"
ownership: "None"
---

# Shared Workspace Access Token

Contains information about the shared workspace access tokens.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharedworkspaceaccesstoken2` |
| Display name | Shared Workspace Access Token |
| Display (plural) | Shared Workspace Access Token2s |
| Schema name | `sharedworkspaceaccesstoken2` |
| Entity set (Web API) | `sharedworkspaceaccesstoken2s` |
| Primary id attribute | `sharedworkspaceaccesstoken2id` |
| Primary name attribute | `systemuserid` |
| Table type | Elastic |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/sharedworkspaceaccesstoken2s?$select=systemuserid&$top=10
GET /api/data/v9.2/sharedworkspaceaccesstoken2s(<guid>)
POST /api/data/v9.2/sharedworkspaceaccesstoken2s
PATCH /api/data/v9.2/sharedworkspaceaccesstoken2s(<guid>)
DELETE /api/data/v9.2/sharedworkspaceaccesstoken2s(<guid>)
```

## Attributes

Writable: **10** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `ObjectPartitionId`, `OverriddenCreatedOn`, `PartitionId`, `sharedworkspaceaccesstoken2Id`, `SharedWorkspaceId`, `SystemUserId`, `TenantId`, `TokenId`, `TTLInSeconds`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedworkspaceaccesstoken2_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedworkspaceaccesstoken2_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedworkspaceaccesstoken2_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedworkspaceaccesstoken2_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [sharedworkspaceaccesstoken2.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharedworkspaceaccesstoken2.md) on 2026-05-06.