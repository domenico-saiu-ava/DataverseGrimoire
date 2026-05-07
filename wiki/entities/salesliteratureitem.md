---
logical: "salesliteratureitem"
display: "Sales Attachment"
entitySetName: "salesliteratureitems"
primaryId: "salesliteratureitemid"
primaryName: "title"
tableType: "Standard"
ownership: "None"
---

# Sales Attachment

Item in the sales literature collection.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `salesliteratureitem` |
| Display name | Sales Attachment |
| Display (plural) | Sales Attachments |
| Schema name | `SalesLiteratureItem` |
| Entity set (Web API) | `salesliteratureitems` |
| Primary id attribute | `salesliteratureitemid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/salesliteratureitems?$select=title&$top=10
GET /api/data/v9.2/salesliteratureitems(<guid>)
POST /api/data/v9.2/salesliteratureitems
PATCH /api/data/v9.2/salesliteratureitems(<guid>)
DELETE /api/data/v9.2/salesliteratureitems(<guid>)
```

## Attributes

Writable: **18** · Read-only: **9**

### Writable

`Abstract`, `AttachedDocumentUrl`, `AuthorName`, `DocumentBody`, `FileName`, `FileSize`, `FileTypeCode`, `ImportSequenceNumber`, `IsCustomerViewable`, `KeyWords`, `MimeType`, `Mode`, `OverriddenCreatedOn`, `SalesLiteratureId`, `SalesLiteratureItemId`, `TimeZoneRuleVersionNumber`, `Title`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `FileType`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_salesliteratureitem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_salesliteratureitem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_salesliteratureitembase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_salesliteratureitembase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `sales_literature_items` | [salesliterature](salesliterature.md) | `salesliteratureid` | `salesliteratureid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SalesLiteratureItem_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SalesLiteratureItem_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesliteratureitem_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesliteratureitem_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `SalesLiteratureItem_ProcessSessions` | _n/a_ | `regardingobjectid` | _n/a_ |
| `salesliteratureitem_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [salesliteratureitem.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/salesliteratureitem.md) on 2026-05-06.