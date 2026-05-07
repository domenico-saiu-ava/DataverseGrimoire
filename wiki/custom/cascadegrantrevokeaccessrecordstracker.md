---
logical: "cascadegrantrevokeaccessrecordstracker"
display: "CascadeGrantRevokeAccessRecordsTracker"
entitySetName: "cascadegrantrevokeaccessrecordstrackers"
primaryId: "cascadegrantrevokeaccessrecordstrackerid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# CascadeGrantRevokeAccessRecordsTracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `cascadegrantrevokeaccessrecordstracker` |
| Display name | CascadeGrantRevokeAccessRecordsTracker |
| Display (plural) | CascadeGrantRevokeAccessRecordsTrackers |
| Schema name | `cascadegrantrevokeaccessrecordstracker` |
| Entity set (Web API) | `cascadegrantrevokeaccessrecordstrackers` |
| Primary id attribute | `cascadegrantrevokeaccessrecordstrackerid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/cascadegrantrevokeaccessrecordstrackers?$select=name&$top=10
GET /api/data/v9.2/cascadegrantrevokeaccessrecordstrackers(<guid>)
POST /api/data/v9.2/cascadegrantrevokeaccessrecordstrackers
PATCH /api/data/v9.2/cascadegrantrevokeaccessrecordstrackers(<guid>)
DELETE /api/data/v9.2/cascadegrantrevokeaccessrecordstrackers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **7**

### Writable

`cascadegrantrevokeaccessrecordstrackerid`, `importsequencenumber`, `name`, `overriddencreatedon`, `processedrecords`, `recordsjson`, `statecode`, `statuscode`, `synctrackerid`, `timezoneruleversionnumber`, `totalrecords`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `recordsattachment`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment` | [fileattachment](fileattachment.md) | `recordsattachment` | `recordsattachment` |
| `SyncTrackerIdLookup` | [cascadegrantrevokeaccessversiontracker](cascadegrantrevokeaccessversiontracker.md) | `synctrackerid` | `SyncTrackerId` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `cascadegrantrevokeaccessrecordstracker_SyncErrors` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_DuplicateMatchingRecord` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `duplicaterecordid` | `duplicaterecordid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_DuplicateBaseRecord` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `baserecordid` | `baserecordid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_AsyncOperations` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_MailboxTrackingFolders` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_UserEntityInstanceDatas` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `objectid` | `objectid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_ProcessSession` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_BulkDeleteFailures` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_PrincipalObjectAttributeAccesses` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `objectid` | `objectid_cascadegrantrevokeaccessrecordstracker` |
| `cascadegrantrevokeaccessrecordstracker_FileAttachments` | [cascadegrantrevokeaccessrecordstracker](cascadegrantrevokeaccessrecordstracker.md) | `objectid` | `objectid_cascadegrantrevokeaccessrecordstracker` |


## Source

Generated from [cascadegrantrevokeaccessrecordstracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='cascadegrantrevokeaccessrecordstracker')) on 2026-05-07.