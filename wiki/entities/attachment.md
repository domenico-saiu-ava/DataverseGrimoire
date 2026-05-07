---
logical: "attachment"
display: "Attachment"
entitySetName: "attachments"
primaryId: "attachmentid"
primaryName: "filename"
tableType: "Standard"
ownership: "None"
---

# Attachment

Attachment for an email activity.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `attachment` |
| Display name | Attachment |
| Display (plural) | Attachments |
| Schema name | `Attachment` |
| Entity set (Web API) | `attachments` |
| Primary id attribute | `attachmentid` |
| Primary name attribute | `filename` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/attachments?$select=filename&$top=10
GET /api/data/v9.2/attachments(<guid>)
POST /api/data/v9.2/attachments
PATCH /api/data/v9.2/attachments(<guid>)
DELETE /api/data/v9.2/attachments(<guid>)
```

## Attributes

Writable: **5** · Read-only: **5**

### Writable

`AttachmentId`, `Body`, `FileName`, `MimeType`, `Subject`

### Read-only

`FilePointer`, `FileSize`, `Prefix`, `StoragePointer`, `VersionNumber`

## Relationships


### One-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `attachment_activity_mime_attachments` | _n/a_ | `attachmentid` | _n/a_ |
| `Attachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [attachment.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/attachment.md) on 2026-05-06.