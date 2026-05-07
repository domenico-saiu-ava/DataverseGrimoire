---
logical: "msdyn_activityanalysiscleanupstate"
display: "Activity Analysis CleanUp State"
entitySetName: "msdyn_activityanalysiscleanupstates"
primaryId: "msdyn_activityanalysiscleanupstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Activity Analysis CleanUp State

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_activityanalysiscleanupstate` |
| Display name | Activity Analysis CleanUp State |
| Display (plural) | Activity Analysis CleanUp States |
| Schema name | `msdyn_activityanalysiscleanupstate` |
| Entity set (Web API) | `msdyn_activityanalysiscleanupstates` |
| Primary id attribute | `msdyn_activityanalysiscleanupstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_activityanalysiscleanupstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_activityanalysiscleanupstates(<guid>)
POST /api/data/v9.2/msdyn_activityanalysiscleanupstates
PATCH /api/data/v9.2/msdyn_activityanalysiscleanupstates(<guid>)
DELETE /api/data/v9.2/msdyn_activityanalysiscleanupstates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_AccountKPICleanUpBatchNum`, `msdyn_AccountKPICleanUpStatus`, `msdyn_activityanalysiscleanupstateId`, `msdyn_ContactKPICleanUpBatchNum`, `msdyn_ContactKPICleanUpStatus`, `msdyn_LeadKPICleanUpBatchNum`, `msdyn_LeadKPICleanUpStatus`, `msdyn_name`, `msdyn_OpportunityKPICleanUpBatchNum`, `msdyn_OpportunityKPICleanUpStatus`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_activityanalysiscleanupstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_activityanalysiscleanupstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_activityanalysiscleanupstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_activityanalysiscleanupstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_activityanalysiscleanupstate` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_activityanalysiscleanupstate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysiscleanupstate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysiscleanupstate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysiscleanupstate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_activityanalysiscleanupstate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_activityanalysiscleanupstate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_activityanalysiscleanupstate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_activityanalysiscleanupstate.md) on 2026-05-06.