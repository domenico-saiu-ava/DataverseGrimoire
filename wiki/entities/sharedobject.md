---
logical: "sharedobject"
display: "Shared Object"
entitySetName: "sharedobjects"
primaryId: "sharedobjectid"
primaryName: "objectname"
tableType: "Standard"
ownership: "None"
---

# Shared Object

A record that is being shared in a real time collaboration session.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sharedobject` |
| Display name | Shared Object |
| Display (plural) | Shared Objects |
| Schema name | `sharedobject` |
| Entity set (Web API) | `sharedobjects` |
| Primary id attribute | `sharedobjectid` |
| Primary name attribute | `objectname` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/sharedobjects?$select=objectname&$top=10
GET /api/data/v9.2/sharedobjects(<guid>)
POST /api/data/v9.2/sharedobjects
PATCH /api/data/v9.2/sharedobjects(<guid>)
DELETE /api/data/v9.2/sharedobjects(<guid>)
```

## Attributes

Writable: **11** · Read-only: **7**

### Writable

`ImportSequenceNumber`, `ObjectId`, `ObjectName`, `ObjectType`, `OverriddenCreatedOn`, `sharedobjectId`, `SharedWorkspaceId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedobject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedobject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedobject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedobject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sharedworkspace_sharedobject` | [sharedworkspace](sharedworkspace.md) | `sharedworkspaceid` | `SharedWorkspaceId` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedobject_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedobject_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedobject_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedobject_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `sharedobject_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `sharedobject_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [sharedobject.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sharedobject.md) on 2026-05-06.