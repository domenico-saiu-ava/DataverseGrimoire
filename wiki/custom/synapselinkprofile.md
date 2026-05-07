---
logical: "synapselinkprofile"
display: "Synapse Link Profile"
entitySetName: "synapselinkprofiles"
primaryId: "synapselinkprofileid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

`activationtime`, `copyattachments`, `copyfiles`, `datalakefolder`, `destinationsyncstate`, `extendedproperties`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `profilestate`, `profiletype`, `profileupdatedtime`, `profileversion`, `snapshotstopersist`, `statecode`, `statuscode`, `synapselinkprofileid`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

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

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `synapselinkprofile_SyncErrors` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofile_DuplicateMatchingRecord` | [synapselinkprofile](synapselinkprofile.md) | `duplicaterecordid` | `duplicaterecordid_synapselinkprofile` |
| `synapselinkprofile_DuplicateBaseRecord` | [synapselinkprofile](synapselinkprofile.md) | `baserecordid` | `baserecordid_synapselinkprofile` |
| `synapselinkprofile_AsyncOperations` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofile_MailboxTrackingFolders` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofile_UserEntityInstanceDatas` | [synapselinkprofile](synapselinkprofile.md) | `objectid` | `objectid_synapselinkprofile` |
| `synapselinkprofile_ProcessSession` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofile_BulkDeleteFailures` | [synapselinkprofile](synapselinkprofile.md) | `regardingobjectid` | `regardingobjectid_synapselinkprofile` |
| `synapselinkprofile_PrincipalObjectAttributeAccesses` | [synapselinkprofile](synapselinkprofile.md) | `objectid` | `objectid_synapselinkprofile` |
| `profileentities` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |
| `profileentitystates` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |
| `profileschedules` | [synapselinkprofile](synapselinkprofile.md) | `profile` | `profile` |


## Source

Generated from [synapselinkprofile (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='synapselinkprofile')) on 2026-05-07.