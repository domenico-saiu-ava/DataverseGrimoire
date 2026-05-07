---
logical: "mspcat_catalogsubmissionfiles"
display: "File di invio catalogo"
entitySetName: "mspcat_catalogsubmissionfileses"
primaryId: "mspcat_catalogsubmissionfilesid"
primaryName: "mspcat_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File di invio catalogo

File associati al pacchetto che verranno usati come parte dell'invio al sistema catalogo.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspcat_catalogsubmissionfiles` |
| Display name | File di invio catalogo |
| Display (plural) | File di invio catalogo |
| Schema name | `mspcat_CatalogSubmissionFiles` |
| Entity set (Web API) | `mspcat_catalogsubmissionfileses` |
| Primary id attribute | `mspcat_catalogsubmissionfilesid` |
| Primary name attribute | `mspcat_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mspcat_catalogsubmissionfileses?$select=mspcat_name&$top=10
GET /api/data/v9.2/mspcat_catalogsubmissionfileses(<guid>)
POST /api/data/v9.2/mspcat_catalogsubmissionfileses
PATCH /api/data/v9.2/mspcat_catalogsubmissionfileses(<guid>)
DELETE /api/data/v9.2/mspcat_catalogsubmissionfileses(<guid>)
```

## Attributes

Writable: **13** · Read-only: **11**

### Writable

`importsequencenumber`, `mspcat_catalogsubmissionfilesid`, `mspcat_description`, `mspcat_filetype`, `mspcat_imagesize`, `mspcat_name`, `mspcat_packagestore`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `mspcat_file`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mspcat_catalogsubmissionfiles_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mspcat_catalogsubmissionfiles_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mspcat_catalogsubmissionfiles_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mspcat_catalogsubmissionfiles_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_mspcat_catalogsubmissionfiles` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_mspcat_catalogsubmissionfiles` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_mspcat_catalogsubmissionfiles` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_mspcat_catalogsubmissionfiles` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_mspcat_CatalogSubmissionFiles_mspcat_File` | [fileattachment](fileattachment.md) | `mspcat_file` | `mspcat_file` |
| `mspcat_mspcat_catalogsubmissionfiles_PackageStor` | [mspcat_packagestore](mspcat_packagestore.md) | `mspcat_packagestore` | `mspcat_PackageStore` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspcat_catalogsubmissionfiles_SyncErrors` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_DuplicateMatchingRecord` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `duplicaterecordid` | `duplicaterecordid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_DuplicateBaseRecord` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `baserecordid` | `baserecordid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_AsyncOperations` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_MailboxTrackingFolders` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_UserEntityInstanceDatas` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `objectid` | `objectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_ProcessSession` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_BulkDeleteFailures` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `regardingobjectid` | `regardingobjectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_PrincipalObjectAttributeAccesses` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `objectid` | `objectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_FileAttachments` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `objectid` | `objectid_mspcat_catalogsubmissionfiles` |
| `mspcat_catalogsubmissionfiles_Annotations` | [mspcat_catalogsubmissionfiles](mspcat_catalogsubmissionfiles.md) | `objectid` | `objectid_mspcat_catalogsubmissionfiles` |


## Source

Generated from [mspcat_catalogsubmissionfiles (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspcat_catalogsubmissionfiles')) on 2026-05-07.