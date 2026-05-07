---
logical: "msdyn_channelmessageattachment"
display: "Channel Message Attachment"
entitySetName: "msdyn_channelmessageattachments"
primaryId: "msdyn_channelmessageattachmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Channel Message Attachment

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelmessageattachment` |
| Display name | Channel Message Attachment |
| Display (plural) | Channel Message Attachments |
| Schema name | `msdyn_ChannelMessageAttachment` |
| Entity set (Web API) | `msdyn_channelmessageattachments` |
| Primary id attribute | `msdyn_channelmessageattachmentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelmessageattachments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelmessageattachments(<guid>)
POST /api/data/v9.2/msdyn_channelmessageattachments
PATCH /api/data/v9.2/msdyn_channelmessageattachments(<guid>)
DELETE /api/data/v9.2/msdyn_channelmessageattachments(<guid>)
```

## Attributes

Writable: **10** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `msdyn_ChannelMessageAttachmentId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_FileAttachment`, `msdyn_FileAttachment_Name`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_channelmessageattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_ChannelMessageAttachment_msdyn_FileAttachment` | [fileattachment](fileattachment.md) | `msdyn_fileattachment` | `msdyn_fileattachment` |
| `lk_msdyn_channelmessageattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelmessageattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelmessageattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelmessageattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_channelmessageattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_channelmessageattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_channelmessageattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelmessageattachment_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessageattachment_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessageattachment_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_channelmessageattachment_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_channelmessageattachment_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelmessageattachment_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessageattachment_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_channelmessageattachment_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_channelmessageattachment_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_channelmessageattachment.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_channelmessageattachment.md) on 2026-05-06.