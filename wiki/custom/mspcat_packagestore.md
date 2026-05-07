---
logical: "mspcat_packagestore"
display: "Archivio invii pacchetti"
entitySetName: "mspcat_packagestores"
primaryId: "mspcat_packagestoreid"
primaryName: "mspcat_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Archivio invii pacchetti

Gestisce gli invii al catalogo e al provisioning

## Identity

| Property | Value |
| --- | --- |
| Logical name | `mspcat_packagestore` |
| Display name | Archivio invii pacchetti |
| Display (plural) | Archivi invii pacchetti |
| Schema name | `mspcat_PackageStore` |
| Entity set (Web API) | `mspcat_packagestores` |
| Primary id attribute | `mspcat_packagestoreid` |
| Primary name attribute | `mspcat_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/mspcat_packagestores?$select=mspcat_name&$top=10
GET /api/data/v9.2/mspcat_packagestores(<guid>)
POST /api/data/v9.2/mspcat_packagestores
PATCH /api/data/v9.2/mspcat_packagestores(<guid>)
DELETE /api/data/v9.2/mspcat_packagestores(<guid>)
```

## Attributes

Writable: **14** · Read-only: **11**

### Writable

`importsequencenumber`, `mspcat_asyncoperationid`, `mspcat_intendeddeploymenttype`, `mspcat_name`, `mspcat_operation`, `mspcat_packagestoreid`, `mspcat_processingmessage`, `mspcat_solutionuniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `mspcat_packagefile`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_mspcat_packagestore_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_mspcat_packagestore_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_mspcat_packagestore_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_mspcat_packagestore_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_mspcat_packagestore` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_mspcat_packagestore` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_mspcat_packagestore` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_mspcat_packagestore` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_mspcat_PackageStore_mspcat_PackageFile` | [fileattachment](fileattachment.md) | `mspcat_packagefile` | `mspcat_packagefile` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspcat_packagestore_SyncErrors` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `mspcat_packagestore_DuplicateMatchingRecord` | [mspcat_packagestore](mspcat_packagestore.md) | `duplicaterecordid` | `duplicaterecordid_mspcat_packagestore` |
| `mspcat_packagestore_DuplicateBaseRecord` | [mspcat_packagestore](mspcat_packagestore.md) | `baserecordid` | `baserecordid_mspcat_packagestore` |
| `mspcat_packagestore_AsyncOperations` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `mspcat_packagestore_MailboxTrackingFolders` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `mspcat_packagestore_UserEntityInstanceDatas` | [mspcat_packagestore](mspcat_packagestore.md) | `objectid` | `objectid_mspcat_packagestore` |
| `mspcat_packagestore_ProcessSession` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `mspcat_packagestore_BulkDeleteFailures` | [mspcat_packagestore](mspcat_packagestore.md) | `regardingobjectid` | `regardingobjectid_mspcat_packagestore` |
| `mspcat_packagestore_PrincipalObjectAttributeAccesses` | [mspcat_packagestore](mspcat_packagestore.md) | `objectid` | `objectid_mspcat_packagestore` |
| `mspcat_packagestore_FileAttachments` | [mspcat_packagestore](mspcat_packagestore.md) | `objectid` | `objectid_mspcat_packagestore` |
| `mspcat_mspcat_catalogsubmissionfiles_PackageStor` | [mspcat_packagestore](mspcat_packagestore.md) | `mspcat_packagestore` | `mspcat_PackageStore` |


## Source

Generated from [mspcat_packagestore (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='mspcat_packagestore')) on 2026-05-07.