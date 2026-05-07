---
logical: "msdyn_soundfile"
display: "File audio"
entitySetName: "msdyn_soundfiles"
primaryId: "msdyn_soundfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# File audio

Entità per archiviare tutti i file audio per Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_soundfile` |
| Display name | File audio |
| Display (plural) | File audio |
| Schema name | `msdyn_soundfile` |
| Entity set (Web API) | `msdyn_soundfiles` |
| Primary id attribute | `msdyn_soundfileid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_soundfiles?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_soundfiles(<guid>)
POST /api/data/v9.2/msdyn_soundfiles
PATCH /api/data/v9.2/msdyn_soundfiles(<guid>)
DELETE /api/data/v9.2/msdyn_soundfiles(<guid>)
```

## Attributes

Writable: **9** · Read-only: **15**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_name`, `msdyn_soundfileid`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_uploadsoundfile`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_soundfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_soundfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_soundfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_soundfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_soundfile` | [organization](organization.md) | `organizationid` | `organizationid` |
| `FileAttachment_msdyn_soundfile_msdyn_Uploadsoundfile` | [fileattachment](fileattachment.md) | `msdyn_uploadsoundfile` | `msdyn_uploadsoundfile` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_soundnotificationsetting_linksoundf` | [msdyn_soundfile](msdyn_soundfile.md) | `msdyn_linksoundfile` | `msdyn_linksoundfile` |
| `msdyn_Personalsoundsetting_msdyn_linksoun` | [msdyn_soundfile](msdyn_soundfile.md) | `msdyn_linksoundfile` | `msdyn_linksoundfile` |
| `msdyn_soundfile_SyncErrors` | [msdyn_soundfile](msdyn_soundfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundfile` |
| `msdyn_soundfile_DuplicateMatchingRecord` | [msdyn_soundfile](msdyn_soundfile.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_soundfile` |
| `msdyn_soundfile_DuplicateBaseRecord` | [msdyn_soundfile](msdyn_soundfile.md) | `baserecordid` | `baserecordid_msdyn_soundfile` |
| `msdyn_soundfile_AsyncOperations` | [msdyn_soundfile](msdyn_soundfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundfile` |
| `msdyn_soundfile_MailboxTrackingFolders` | [msdyn_soundfile](msdyn_soundfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundfile` |
| `msdyn_soundfile_UserEntityInstanceDatas` | [msdyn_soundfile](msdyn_soundfile.md) | `objectid` | `objectid_msdyn_soundfile` |
| `msdyn_soundfile_ProcessSession` | [msdyn_soundfile](msdyn_soundfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundfile` |
| `msdyn_soundfile_BulkDeleteFailures` | [msdyn_soundfile](msdyn_soundfile.md) | `regardingobjectid` | `regardingobjectid_msdyn_soundfile` |
| `msdyn_soundfile_PrincipalObjectAttributeAccesses` | [msdyn_soundfile](msdyn_soundfile.md) | `objectid` | `objectid_msdyn_soundfile` |
| `msdyn_soundfile_FileAttachments` | [msdyn_soundfile](msdyn_soundfile.md) | `objectid` | `objectid_msdyn_soundfile` |
| `msdyn_soundfile_Annotations` | [msdyn_soundfile](msdyn_soundfile.md) | `objectid` | `objectid_msdyn_soundfile` |


## Source

Generated from [msdyn_soundfile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_soundfile')) on 2026-05-07.