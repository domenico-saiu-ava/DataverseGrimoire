---
logical: "activitymimeattachment"
display: "Attachment"
entitySetName: "activitymimeattachments"
primaryId: "activitymimeattachmentid"
primaryName: "filename"
tableType: "Standard"
ownership: "None"
---

# Attachment

MIME attachment for an activity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `activitymimeattachment` |
| Display name | Attachment |
| Display (plural) | Attachments |
| Schema name | `ActivityMimeAttachment` |
| Entity set (Web API) | `activitymimeattachments` |
| Primary id attribute | `activitymimeattachmentid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/activitymimeattachments?$select=filename&$top=10
GET /api/data/v9.2/activitymimeattachments(<guid>)
POST /api/data/v9.2/activitymimeattachments
PATCH /api/data/v9.2/activitymimeattachments(<guid>)
DELETE /api/data/v9.2/activitymimeattachments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **15**

### Writable

`ActivityId`, `ActivityMimeAttachmentId`, `ActivityMimeAttachmentIdUnique`, `AttachmentContentId`, `AttachmentId`, `AttachmentNumber`, `Body`, `FileName`, `MimeType`, `ObjectId`, `ObjectTypeCode`, `Subject`

### Read-only

`ActivitySubject`, `AnonymousLink`, `ComponentState`, `FileSize`, `IsFollowed`, `IsManaged`, `OverwriteTime`, `OwnerId`, `OwnerIdName`, `OwnerIdType`, `OwningBusinessUnit`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `activity_pointer_activity_mime_attachment` | [activitypointer](activitypointer.md) | `objectid` | `objectid_activitypointer` |
| `appointment_activity_mime_attachment` | [appointment](appointment.md) | `objectid` | `objectid_appointment` |
| `attachment_activity_mime_attachments` | [attachment](attachment.md) | `attachmentid` | `attachmentid` |
| `email_activity_mime_attachment` | [email](email.md) | `objectid` | `objectid_email` |
| `template_activity_mime_attachments` | [template](template.md) | `objectid` | `objectid_template` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `ActivityMimeAttachment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ActivityMimeAttachment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `ActivityMimeAttachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [activitymimeattachment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/activitymimeattachment.md) on 2026-05-06.