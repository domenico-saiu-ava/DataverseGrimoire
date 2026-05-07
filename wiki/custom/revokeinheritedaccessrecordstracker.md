---
logical: "revokeinheritedaccessrecordstracker"
display: "RevokeInheritedAccessRecordsTracker"
entitySetName: "revokeinheritedaccessrecordstrackers"
primaryId: "revokeinheritedaccessrecordstrackerid"
primaryName: "revokeinheritedaccessrecordstracker"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# RevokeInheritedAccessRecordsTracker

## Identity

| Property | Value |
| --- | --- |
| Logical name | `revokeinheritedaccessrecordstracker` |
| Display name | RevokeInheritedAccessRecordsTracker |
| Display (plural) | RevokeInheritedAccessRecordsTrackers |
| Schema name | `revokeinheritedaccessrecordstracker` |
| Entity set (Web API) | `revokeinheritedaccessrecordstrackers` |
| Primary id attribute | `revokeinheritedaccessrecordstrackerid` |
| Primary name attribute | `revokeinheritedaccessrecordstracker` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/revokeinheritedaccessrecordstrackers?$select=revokeinheritedaccessrecordstracker&$top=10
GET /api/data/v9.2/revokeinheritedaccessrecordstrackers(<guid>)
POST /api/data/v9.2/revokeinheritedaccessrecordstrackers
PATCH /api/data/v9.2/revokeinheritedaccessrecordstrackers(<guid>)
DELETE /api/data/v9.2/revokeinheritedaccessrecordstrackers(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `overriddencreatedon`, `recordsjson`, `relationshipname`, `revokeinheritedaccessrecordstracker`, `revokeinheritedaccessrecordstrackerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `totalrecords`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `recordsattachment`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_revokeinheritedaccessrecordstracker_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_revokeinheritedaccessrecordstracker_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_revokeinheritedaccessrecordstracker_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_revokeinheritedaccessrecordstracker_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `FileAttachment_revokeinheritedaccessrecordstracker_RecordsAttachment` | [fileattachment](fileattachment.md) | `recordsattachment` | `RecordsAttachment` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `revokeinheritedaccessrecordstracker_SyncErrors` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_DuplicateMatchingRecord` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `duplicaterecordid` | `duplicaterecordid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_DuplicateBaseRecord` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `baserecordid` | `baserecordid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_AsyncOperations` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_MailboxTrackingFolders` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_UserEntityInstanceDatas` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `objectid` | `objectid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_ProcessSession` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_BulkDeleteFailures` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `regardingobjectid` | `regardingobjectid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_PrincipalObjectAttributeAccesses` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `objectid` | `objectid_revokeinheritedaccessrecordstracker` |
| `revokeinheritedaccessrecordstracker_FileAttachments` | [revokeinheritedaccessrecordstracker](revokeinheritedaccessrecordstracker.md) | `objectid` | `objectid_revokeinheritedaccessrecordstracker` |


## Source

Generated from [revokeinheritedaccessrecordstracker (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='revokeinheritedaccessrecordstracker')) on 2026-05-07.