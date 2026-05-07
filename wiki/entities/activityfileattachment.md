---
logical: "activityfileattachment"
display: "Activity File Attachment"
entitySetName: "activityfileattachments"
primaryId: "activityfileattachmentid"
primaryName: "filename"
tableType: "Standard"
ownership: "UserOwned"
---

# Activity File Attachment

Attachment entity with data stored in file type attribute

## Identity

| Property | Value |
| --- | --- |
| Logical name | `activityfileattachment` |
| Display name | Activity File Attachment |
| Display (plural) | Activity File Attachments |
| Schema name | `activityfileattachment` |
| Entity set (Web API) | `activityfileattachments` |
| Primary id attribute | `activityfileattachmentid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/activityfileattachments?$select=filename&$top=10
GET /api/data/v9.2/activityfileattachments(<guid>)
POST /api/data/v9.2/activityfileattachments
PATCH /api/data/v9.2/activityfileattachments(<guid>)
DELETE /api/data/v9.2/activityfileattachments(<guid>)
```

## Attributes

Writable: **14** · Read-only: **20**

### Writable

`activityfileattachmentId`, `filename`, `ImportSequenceNumber`, `IsCustomizable`, `ObjectTypeCode`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ParentId`, `ParentIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FileContent`, `FileContent_Name`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_activityfileattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_activityfileattachment_FileContent` | [fileattachment](fileattachment.md) | `filecontent` | `filecontent` |
| `lk_activityfileattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_activityfileattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_activityfileattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_activityfileattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_activityfileattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `post_activity_file_attachment` | [post](post.md) | `parentid` | `parentid_post` |
| `post_comment_activity_file_attachment` | [postcomment](postcomment.md) | `parentid` | `parentid_postcomment` |
| `team_activityfileattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_activityfileattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activityfileattachment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activityfileattachment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activityfileattachment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `activityfileattachment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `activityfileattachment_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `activityfileattachment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activityfileattachment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `activityfileattachment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `activityfileattachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [activityfileattachment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/activityfileattachment.md) on 2026-05-06.