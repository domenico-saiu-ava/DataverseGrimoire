---
logical: "unstructuredfilesearchrecord"
display: "UnstructuredFileSearchRecord"
entitySetName: "unstructuredfilesearchrecords"
primaryId: "unstructuredfilesearchrecordid"
primaryName: "columnname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **16** · Read-only: **11**

### Writable

`attributetype`, `citationlink`, `columnname`, `content`, `fileid`, `filename`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `recordid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `unstructuredfilesearchentityid`, `unstructuredfilesearchrecordid`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `filedata`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_unstructuredfilesearchrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_unstructuredfilesearchrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_unstructuredfilesearchrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_unstructuredfilesearchrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_unstructuredfilesearchrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_unstructuredfilesearchrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_unstructuredfilesearchrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_unstructuredfilesearchrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_unstructuredfilesearchrecord_Filedata` | [fileattachment](fileattachment.md) | `filedata` | `filedata` |
| `unstructuredfilesearchentity_unstructuredfilesearchrecord_UnstructuredFileSearchEntityId` | [unstructuredfilesearchentity](unstructuredfilesearchentity.md) | `unstructuredfilesearchentityid` | `UnstructuredFileSearchEntityId` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `unstructuredfilesearchrecord_SyncErrors` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_DuplicateMatchingRecord` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `duplicaterecordid` | `duplicaterecordid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_DuplicateBaseRecord` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `baserecordid` | `baserecordid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_AsyncOperations` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_MailboxTrackingFolders` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_UserEntityInstanceDatas` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `objectid` | `objectid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_ProcessSession` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_BulkDeleteFailures` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `regardingobjectid` | `regardingobjectid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_PrincipalObjectAttributeAccesses` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `objectid` | `objectid_unstructuredfilesearchrecord` |
| `unstructuredfilesearchrecord_FileAttachments` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `objectid` | `objectid_unstructuredfilesearchrecord` |
| `recordstatus_filerecord_UnstructuredFileSearchRecordId` | [unstructuredfilesearchrecord](unstructuredfilesearchrecord.md) | `unstructuredfilesearchrecordid` | `UnstructuredFileSearchRecordId` |


## Source

Generated from [unstructuredfilesearchrecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='unstructuredfilesearchrecord')) on 2026-05-07.