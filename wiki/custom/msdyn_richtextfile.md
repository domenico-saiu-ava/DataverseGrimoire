---
logical: "msdyn_richtextfile"
display: "Allegato RTF"
entitySetName: "msdyn_richtextfiles"
primaryId: "msdyn_richtextfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Allegato RTF

Immagine o file allegato a un campo di testo RTF

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_richtextfile` |
| Display name | Allegato RTF |
| Display (plural) | Allegati RTF |
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

Writable: **12** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_parententity_fieldname`, `msdyn_parententityname`, `msdyn_parentid`, `msdyn_richtextfileid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_fileblob`, `msdyn_imageblobid`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_richtextfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_richtextfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_richtextfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_richtextfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_richtextfile` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_richtextfile` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_richtextfile` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_richtextfile` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `ImageDescriptor_msdyn_richtextfile_msdyn_imageblob` | [imagedescriptor](imagedescriptor.md) | `msdyn_imageblobid` | `msdyn_imageblobid_imagedescriptor` |
| `FileAttachment_msdyn_richtextfile_msdyn_fileblob` | [fileattachment](fileattachment.md) | `msdyn_fileblob` | `msdyn_fileblob` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_richtextfile_SyncErrors` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_richtextfile_AsyncOperations` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_richtextfile_MailboxTrackingFolders` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_richtextfile_UserEntityInstanceDatas` | [msdyn_richtextfile](msdyn_richtextfile.md) | `objectid` | `objectid_msdyn_richtextfile` |
| `msdyn_richtextfile_ProcessSession` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_richtextfile_BulkDeleteFailures` | [msdyn_richtextfile](msdyn_richtextfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_richtextfile` |
| `msdyn_richtextfile_PrincipalObjectAttributeAccesses` | [msdyn_richtextfile](msdyn_richtextfile.md) | `objectid` | `objectid_msdyn_richtextfile` |
| `msdyn_richtextfile_FileAttachments` | [msdyn_richtextfile](msdyn_richtextfile.md) | `objectid` | `objectid_msdyn_richtextfile` |


## Source

Generated from [msdyn_richtextfile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_richtextfile')) on 2026-05-07.