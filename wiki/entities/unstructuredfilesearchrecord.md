---
logical: "unstructuredfilesearchrecord"
display: "UnstructuredFileSearchRecord"
entitySetName: "unstructuredfilesearchrecords"
primaryId: "unstructuredfilesearchrecordid"
primaryName: "columnname"
tableType: "Standard"
ownership: "UserOwned"
---

# UnstructuredFileSearchRecord

UnstructuredFileSearchRecord

## Identity

| Property | Value |
| --- | --- |
| Logical name | `unstructuredfilesearchrecord` |
| Display name | UnstructuredFileSearchRecord |
| Display (plural) | UnstructuredFileSearchRecord |
| Schema name | `unstructuredfilesearchrecord` |
| Entity set (Web API) | `unstructuredfilesearchrecords` |
| Primary id attribute | `unstructuredfilesearchrecordid` |
| Primary name attribute | `columnname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/unstructuredfilesearchrecords?$select=columnname&$top=10
GET /api/data/v9.2/unstructuredfilesearchrecords(<guid>)
POST /api/data/v9.2/unstructuredfilesearchrecords
PATCH /api/data/v9.2/unstructuredfilesearchrecords(<guid>)
DELETE /api/data/v9.2/unstructuredfilesearchrecords(<guid>)
```

## Attributes

Writable: **18** · Read-only: **20**

### Writable

`AttributeType`, `CitationLink`, `ColumnName`, `Content`, `FileId`, `FileName`, `ImportSequenceNumber`, `IsCustomizable`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `RecordId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UnstructuredFileSearchEntityId`, `unstructuredfilesearchrecordId`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Filedata`, `Filedata_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_unstructuredfilesearchrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_unstructuredfilesearchrecord_Filedata` | [fileattachment](fileattachment.md) | `filedata` | `filedata` |
| `lk_unstructuredfilesearchrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_unstructuredfilesearchrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_unstructuredfilesearchrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_unstructuredfilesearchrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_unstructuredfilesearchrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_unstructuredfilesearchrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `unstructuredfilesearchentity_unstructuredfilesearchrecord_UnstructuredFileSearchEntityId` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `unstructuredfilesearchentityid` | `UnstructuredFileSearchEntityId` |
| `user_unstructuredfilesearchrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `unstructuredfilesearchrecord_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchrecord_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchrecord_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `unstructuredfilesearchrecord_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `unstructuredfilesearchrecord_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `unstructuredfilesearchrecord_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchrecord_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `unstructuredfilesearchrecord_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `unstructuredfilesearchrecord_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [unstructuredfilesearchrecord.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/unstructuredfilesearchrecord.md) on 2026-05-06.