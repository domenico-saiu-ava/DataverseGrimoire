---
logical: "msdyn_kbattachment"
display: "Allegato articolo della Knowledge Base"
entitySetName: "msdyn_kbattachments"
primaryId: "msdyn_kbattachmentid"
primaryName: "msdyn_filename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato articolo della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_kbattachment` |
| Display name | Allegato articolo della Knowledge Base |
| Display (plural) | Allegati articolo della Knowledge Base |
| Schema name | `msdyn_kbattachment` |
| Entity set (Web API) | `msdyn_kbattachments` |
| Primary id attribute | `msdyn_kbattachmentid` |
| Primary name attribute | `msdyn_filename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_kbattachments?$select=msdyn_filename&$top=10
GET /api/data/v9.2/msdyn_kbattachments(<guid>)
POST /api/data/v9.2/msdyn_kbattachments
PATCH /api/data/v9.2/msdyn_kbattachments(<guid>)
DELETE /api/data/v9.2/msdyn_kbattachments(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_filename`, `msdyn_filesize`, `msdyn_filetype`, `msdyn_kbattachmentid`, `msdyn_relatedannotations`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_fileattachment`, `msdyn_fileiconid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_kbattachment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_kbattachment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_kbattachment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_kbattachment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_kbattachment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_kbattachment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_kbattachment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_kbattachment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_kbattachment_msdyn_fileattachment` | [fileattachment](fileattachment.md) | `msdyn_fileattachment` | `msdyn_fileattachment` |
| `ImageDescriptor_msdyn_kbattachment_msdyn_fileicon` | [imagedescriptor](imagedescriptor.md) | `msdyn_fileiconid` | `msdyn_fileiconid_imagedescriptor` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_kbattachment_SyncErrors` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kbattachment_DuplicateMatchingRecord` | [msdyn_kbattachment](msdyn_kbattachment.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_kbattachment` |
| `msdyn_kbattachment_DuplicateBaseRecord` | [msdyn_kbattachment](msdyn_kbattachment.md) | `baserecordid` | `baserecordid_msdyn_kbattachment` |
| `msdyn_kbattachment_AsyncOperations` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kbattachment_MailboxTrackingFolders` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kbattachment_UserEntityInstanceDatas` | [msdyn_kbattachment](msdyn_kbattachment.md) | `objectid` | `objectid_msdyn_kbattachment` |
| `msdyn_kbattachment_ProcessSession` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kbattachment_BulkDeleteFailures` | [msdyn_kbattachment](msdyn_kbattachment.md) | `regardingobjectid` | `regardingobjectid_msdyn_kbattachment` |
| `msdyn_kbattachment_PrincipalObjectAttributeAccesses` | [msdyn_kbattachment](msdyn_kbattachment.md) | `objectid` | `objectid_msdyn_kbattachment` |
| `msdyn_kbattachment_FileAttachments` | [msdyn_kbattachment](msdyn_kbattachment.md) | `objectid` | `objectid_msdyn_kbattachment` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_kbattachment_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | _n/a_ | `msdyn_msdyn_kbattachment_knowledgearticle` |

## Source

Generated from [msdyn_kbattachment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_kbattachment')) on 2026-05-07.