---
logical: "msdyn_entityattachment"
display: "Entity Attachment"
entitySetName: "msdyn_entityattachments"
primaryId: "msdyn_entityattachmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Entity Attachment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_entityattachment` |
| Display name | Entity Attachment |
| Display (plural) | Entity Attachments |
| Schema name | `msdyn_entityattachment` |
| Entity set (Web API) | `msdyn_entityattachments` |
| Primary id attribute | `msdyn_entityattachmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_entityattachments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_entityattachments(<guid>)
POST /api/data/v9.2/msdyn_entityattachments
PATCH /api/data/v9.2/msdyn_entityattachments(<guid>)
DELETE /api/data/v9.2/msdyn_entityattachments(<guid>)
```

## Attributes

Writable: **11** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_entityattachmentId`, `msdyn_name`, `msdyn_relatedentity`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_FileBlob`, `msdyn_FileBlob_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_entityattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_entityattachment_msdyn_FileBlob` | [fileattachment](fileattachment.md) | `msdyn_fileblob` | `msdyn_fileblob` |
| `lk_msdyn_entityattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_entityattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_entityattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_entityattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_relatedentity_msdyn_entityattachment` | [incident](incident.md) | `msdyn_relatedentity` | `msdyn_relatedentity` |
| `owner_msdyn_entityattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_entityattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_entityattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_entityattachment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattachment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattachment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_entityattachment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_entityattachment_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityattachment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattachment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_entityattachment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_entityattachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_entityattachment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_entityattachment.md) on 2026-05-06.