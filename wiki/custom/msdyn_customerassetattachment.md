---
logical: "msdyn_customerassetattachment"
display: "Allegato cespite cliente"
entitySetName: "msdyn_customerassetattachments"
primaryId: "msdyn_customerassetattachmentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato cespite cliente

Allegati per cespite cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_customerassetattachment` |
| Display name | Allegato cespite cliente |
| Display (plural) | Allegato cespite cliente |
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

Writable: **12** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_attachmenttype`, `msdyn_category`, `msdyn_customerasset`, `msdyn_customerassetattachmentid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_file`, `msdyn_imageid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_customerassetattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_customerassetattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_customerassetattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_customerassetattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_customerassetattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_customerassetattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_customerassetattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_customerassetattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_msdyn_customerassetattachment_msdyn_Image` | [imagedescriptor](imagedescriptor.md) | `msdyn_imageid` | `msdyn_imageid_imagedescriptor` |
| `FileAttachment_msdyn_customerassetattachment_msdyn_File` | [fileattachment](fileattachment.md) | `msdyn_file` | `msdyn_file` |
| `msdyn_msdyn_customerasset_msdyn_customerassetattachment_CustomerAsset` | [msdyn_customerasset](msdyn_customerasset.md) | `msdyn_customerasset` | `msdyn_CustomerAsset` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_customerassetattachment_SyncErrors` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_DuplicateMatchingRecord` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_DuplicateBaseRecord` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `baserecordid` | `baserecordid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_AsyncOperations` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_MailboxTrackingFolders` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_UserEntityInstanceDatas` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `objectid` | `objectid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_ProcessSession` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_BulkDeleteFailures` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_PrincipalObjectAttributeAccesses` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `objectid` | `objectid_msdyn_customerassetattachment` |
| `msdyn_customerassetattachment_FileAttachments` | [msdyn_customerassetattachment](msdyn_customerassetattachment.md) | `objectid` | `objectid_msdyn_customerassetattachment` |


## Source

Generated from [msdyn_customerassetattachment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_customerassetattachment')) on 2026-05-07.