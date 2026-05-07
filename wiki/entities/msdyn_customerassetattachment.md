---
logical: "msdyn_customerassetattachment"
display: "Customer Asset Attachment"
entitySetName: "msdyn_customerassetattachments"
primaryId: "msdyn_customerassetattachmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Customer Asset Attachment

Attachments for Customer Asset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerassetattachment` |
| Display name | Customer Asset Attachment |
| Display (plural) | Customer Asset Attachment |
| Schema name | `msdyn_customerassetattachment` |
| Entity set (Web API) | `msdyn_customerassetattachments` |
| Primary id attribute | `msdyn_customerassetattachmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_customerassetattachments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_customerassetattachments(<guid>)
POST /api/data/v9.2/msdyn_customerassetattachments
PATCH /api/data/v9.2/msdyn_customerassetattachments(<guid>)
DELETE /api/data/v9.2/msdyn_customerassetattachments(<guid>)
```

## Attributes

Writable: **14** · Read-only: **17**

### Writable

`ImportSequenceNumber`, `msdyn_AttachmentType`, `msdyn_Category`, `msdyn_CustomerAsset`, `msdyn_customerassetattachmentId`, `msdyn_Image`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_File`, `msdyn_File_Name`, `msdyn_Image_Timestamp`, `msdyn_Image_URL`, `msdyn_ImageId`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_customerassetattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_customerassetattachment_msdyn_File` | [fileattachment](fileattachment.md) | `msdyn_file` | `msdyn_file` |
| `lk_msdyn_customerassetattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerassetattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerassetattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerassetattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_customerasset_msdyn_customerassetattachment_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |
| `owner_msdyn_customerassetattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_customerassetattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_customerassetattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerassetattachment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetattachment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetattachment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_customerassetattachment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_customerassetattachment_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerassetattachment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetattachment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_customerassetattachment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_customerassetattachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_customerassetattachment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_customerassetattachment.md) on 2026-05-06.