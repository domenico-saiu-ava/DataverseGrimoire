---
logical: "sharedobject"
display: "Shared Object"
entitySetName: "sharedobjects"
primaryId: "sharedobjectid"
primaryName: "objectname"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`importsequencenumber`, `objectid`, `objectname`, `objecttype`, `overriddencreatedon`, `sharedobjectid`, `sharedworkspaceid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_sharedobject_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sharedobject_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sharedobject_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_sharedobject_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `sharedworkspace_sharedobject` | [sharedworkspace](sharedworkspace.md) | `sharedworkspaceid` | `SharedWorkspaceId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sharedobject_SyncErrors` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedobject_AsyncOperations` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedobject_MailboxTrackingFolders` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedobject_UserEntityInstanceDatas` | [sharedobject](sharedobject.md) | `objectid` | `objectid_sharedobject` |
| `sharedobject_ProcessSession` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedobject_BulkDeleteFailures` | [sharedobject](sharedobject.md) | `regardingobjectid` | `regardingobjectid_sharedobject` |
| `sharedobject_PrincipalObjectAttributeAccesses` | [sharedobject](sharedobject.md) | `objectid` | `objectid_sharedobject` |


## Source

Generated from [sharedobject (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='sharedobject')) on 2026-05-07.