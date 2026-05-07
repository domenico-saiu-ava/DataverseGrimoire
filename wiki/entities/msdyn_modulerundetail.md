---
logical: "msdyn_modulerundetail"
display: "Module Run Detail"
entitySetName: "msdyn_modulerundetails"
primaryId: "msdyn_modulerundetailid"
primaryName: "msdyn_modelrunid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Module Run Detail

Result of execution of a MEF model

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_modulerundetail` |
| Display name | Module Run Detail |
| Display (plural) | Module Run Details |
| Schema name | `msdyn_modulerundetail` |
| Entity set (Web API) | `msdyn_modulerundetails` |
| Primary id attribute | `msdyn_modulerundetailid` |
| Primary name attribute | `msdyn_modelrunid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_modulerundetails?$select=msdyn_modelrunid&$top=10
GET /api/data/v9.2/msdyn_modulerundetails(<guid>)
POST /api/data/v9.2/msdyn_modulerundetails
PATCH /api/data/v9.2/msdyn_modulerundetails(<guid>)
DELETE /api/data/v9.2/msdyn_modulerundetails(<guid>)
```

## Attributes

Writable: **20** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_EndTime`, `msdyn_IsCompleted`, `msdyn_ModelRunId`, `msdyn_ModuleConfigId`, `msdyn_ModuleConfigIdVersion`, `msdyn_ModuleEndpointResults`, `msdyn_ModuleResultCodes`, `msdyn_modulerundetailId`, `msdyn_OutputModelJsonPath`, `msdyn_QueuedTime`, `msdyn_StartTime`, `msdyn_SynapseSchemaSyncJobId`, `msdyn_Version`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_modulerundetail_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_modulerundetail_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_modulerundetail_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_modulerundetail_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_modulerundetail` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_modulerundetail_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modulerundetail_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modulerundetail_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_modulerundetail_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_modulerundetail_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modulerundetail_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_modulerundetail_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_modulerundetail_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_modulerundetail.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_modulerundetail.md) on 2026-05-06.