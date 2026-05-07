---
logical: "msdyn_richtextfile"
display: "Rich Text Attachment"
entitySetName: "msdyn_richtextfiles"
primaryId: "msdyn_richtextfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Rich Text Attachment

Image or file attached to a rich text field

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_richtextfile` |
| Display name | Rich Text Attachment |
| Display (plural) | Rich Text Attachments |
| Schema name | `msdyn_richtextfile` |
| Entity set (Web API) | `msdyn_richtextfiles` |
| Primary id attribute | `msdyn_richtextfileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_richtextfiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_richtextfiles(<guid>)
POST /api/data/v9.2/msdyn_richtextfiles
PATCH /api/data/v9.2/msdyn_richtextfiles(<guid>)
DELETE /api/data/v9.2/msdyn_richtextfiles(<guid>)
```

## Attributes

Writable: **14** · Read-only: **17**

### Writable

`ImportSequenceNumber`, `msdyn_imageblob`, `msdyn_name`, `msdyn_parententity_fieldname`, `msdyn_parententityname`, `msdyn_parentid`, `msdyn_richtextfileId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_fileblob`, `msdyn_fileblob_Name`, `msdyn_imageblob_Timestamp`, `msdyn_imageblob_URL`, `msdyn_imageblobId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_richtextfile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_richtextfile_msdyn_fileblob` | [fileattachment](fileattachment.md) | `msdyn_fileblob` | `msdyn_fileblob` |
| `lk_msdyn_richtextfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_richtextfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_richtextfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_richtextfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_richtextfile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_richtextfile` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_richtextfile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_richtextfile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_richtextfile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_richtextfile_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_richtextfile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_richtextfile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_richtextfile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_richtextfile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_richtextfile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_richtextfile.md) on 2026-05-06.