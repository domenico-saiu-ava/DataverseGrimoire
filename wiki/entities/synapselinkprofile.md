---
logical: "synapselinkprofile"
display: "Synapse Link Profile"
entitySetName: "synapselinkprofiles"
primaryId: "synapselinkprofileid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Synapse Link Profile

Synapse Link Profile

## Identity

| Property | Value |
| --- | --- |
| Logical name | `synapselinkprofile` |
| Display name | Synapse Link Profile |
| Display (plural) | Synapse Link Profiles |
| Schema name | `synapselinkprofile` |
| Entity set (Web API) | `synapselinkprofiles` |
| Primary id attribute | `synapselinkprofileid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/synapselinkprofiles?$select=name&$top=10
GET /api/data/v9.2/synapselinkprofiles(<guid>)
POST /api/data/v9.2/synapselinkprofiles
PATCH /api/data/v9.2/synapselinkprofiles(<guid>)
DELETE /api/data/v9.2/synapselinkprofiles(<guid>)
```

## Attributes

Writable: **21** · Read-only: **14**

### Writable

`ActivationTime`, `CopyAttachments`, `CopyFiles`, `datalakefolder`, `DestinationSyncState`, `ExtendedProperties`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `ProfileState`, `ProfileType`, `ProfileUpdatedTime`, `ProfileVersion`, `SnapshotsToPersist`, `statecode`, `statuscode`, `synapselinkprofileId`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_synapselinkprofile_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_synapselinkprofile_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_synapselinkprofile_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_synapselinkprofile_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_synapselinkprofile` | [organization](organization.md) | `organizationid` | `organizationid` |
| `synapselinkprofiles` | [datalakefolder](datalakefolder.md) | `datalakefolder` | `datalakefolder` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `profileentities` | _n/a_ | `profile` | _n/a_ |
| `profileentitystates` | _n/a_ | `profile` | _n/a_ |
| `profileschedules` | _n/a_ | `profile` | _n/a_ |
| `synapselinkprofile_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofile_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofile_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `synapselinkprofile_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `synapselinkprofile_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofile_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `synapselinkprofile_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `synapselinkprofile_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [synapselinkprofile.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/synapselinkprofile.md) on 2026-05-06.