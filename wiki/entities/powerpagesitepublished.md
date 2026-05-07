---
logical: "powerpagesitepublished"
display: "Power Pages Site Published"
entitySetName: "powerpagesitepublisheds"
primaryId: "powerpagesitepublishedid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Power Pages Site Published

## Identity

| Property | Value |
| --- | --- |
| Logical name | `powerpagesitepublished` |
| Display name | Power Pages Site Published |
| Display (plural) | Power Pages Site Published |
| Schema name | `powerpagesitepublished` |
| Entity set (Web API) | `powerpagesitepublisheds` |
| Primary id attribute | `powerpagesitepublishedid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/powerpagesitepublisheds?$select=name&$top=10
GET /api/data/v9.2/powerpagesitepublisheds(<guid>)
POST /api/data/v9.2/powerpagesitepublisheds
PATCH /api/data/v9.2/powerpagesitepublisheds(<guid>)
DELETE /api/data/v9.2/powerpagesitepublisheds(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PowerPageSiteId`, `powerpagesitepublishedId`, `publishedrecords`, `State`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `Version`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `publishedmetadata`, `publishedmetadata_Name`, `publishedsource`, `publishedsource_Name`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_powerpagesitepublished` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_powerpagesitepublished_publishedmetadata` | [fileattachment](fileattachment.md) | `publishedmetadata` | `publishedmetadata` |
| `FileAttachment_powerpagesitepublished_publishedsource` | [fileattachment](fileattachment.md) | `publishedsource` | `publishedsource` |
| `lk_powerpagesitepublished_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_powerpagesitepublished_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_powerpagesitepublished_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_powerpagesitepublished_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_powerpagesitepublished` | [owner](owner.md) | `ownerid` | `ownerid` |
| `powerpagesite_powerpagesitepublished_powerpagesiteid` | [powerpagesite](powerpagesite.md) | `powerpagesiteid` | `PowerPageSiteId` |
| `team_powerpagesitepublished` | [team](team.md) | `owningteam` | `owningteam` |
| `user_powerpagesitepublished` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `powerpagesitepublished_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitepublished_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitepublished_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesitepublished_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitepublished_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `powerpagesitepublished_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `powerpagesitepublished_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [powerpagesitepublished.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/powerpagesitepublished.md) on 2026-05-06.