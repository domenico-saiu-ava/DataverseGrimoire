---
logical: "msdyn_soundfile"
display: "Audio File"
entitySetName: "msdyn_soundfiles"
primaryId: "msdyn_soundfileid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Audio File

Entity to store all audio files for Omnichannel

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_soundfile` |
| Display name | Audio File |
| Display (plural) | Audio Files |
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

Writable: **9** · Read-only: **16**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_Name`, `msdyn_soundfileId`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_Uploadsoundfile`, `msdyn_Uploadsoundfile_Name`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_msdyn_soundfile_msdyn_Uploadsoundfile` | [fileattachment](fileattachment.md) | `msdyn_uploadsoundfile` | `msdyn_uploadsoundfile` |
| `lk_msdyn_soundfile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_soundfile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_soundfile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_soundfile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_soundfile` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_Personalsoundsetting_msdyn_linksoun` | _n/a_ | `msdyn_linksoundfile` | _n/a_ |
| `msdyn_soundfile_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_soundfile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundfile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundfile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_soundfile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_soundfile_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_soundfile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundfile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_soundfile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundfile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_soundnotificationsetting_linksoundf` | _n/a_ | `msdyn_linksoundfile` | _n/a_ |


## Source

Generated from [msdyn_soundfile.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_soundfile.md) on 2026-05-06.