---
logical: "msdyn_kbattachment"
display: "Knowledge Article Attachment"
entitySetName: "msdyn_kbattachments"
primaryId: "msdyn_kbattachmentid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
---

# Knowledge Article Attachment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kbattachment` |
| Display name | Knowledge Article Attachment |
| Display (plural) | Knowledge Article Attachments |
| Schema name | `msdyn_kbattachment` |
| Entity set (Web API) | `msdyn_kbattachments` |
| Primary id attribute | `msdyn_kbattachmentid` |
| Primary name attribute | `msdyn_filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kbattachments?$select=msdyn_filename&$top=10
GET /api/data/v9.2/msdyn_kbattachments(<guid>)
POST /api/data/v9.2/msdyn_kbattachments
PATCH /api/data/v9.2/msdyn_kbattachments(<guid>)
DELETE /api/data/v9.2/msdyn_kbattachments(<guid>)
```

## Attributes

Writable: **14** · Read-only: **17**

### Writable

`ImportSequenceNumber`, `msdyn_fileicon`, `msdyn_filename`, `msdyn_filesize`, `msdyn_filetype`, `msdyn_kbattachmentId`, `msdyn_relatedannotations`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_fileattachment`, `msdyn_fileattachment_Name`, `msdyn_fileicon_Timestamp`, `msdyn_fileicon_URL`, `msdyn_fileiconId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_kbattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_kbattachment_msdyn_fileattachment` | [fileattachment](fileattachment.md) | `msdyn_fileattachment` | `msdyn_fileattachment` |
| `lk_msdyn_kbattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kbattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kbattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kbattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_kbattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_kbattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_kbattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kbattachment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbattachment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbattachment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_kbattachment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_kbattachment_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kbattachment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbattachment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_kbattachment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_kbattachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_kbattachment_knowledgearticle` | [msdyn_kbattachmentid](msdyn_kbattachmentid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_kbattachment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_kbattachment.md) on 2026-05-06.