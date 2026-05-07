---
logical: "msdyn_pmsimulation"
display: "PM Simulation"
entitySetName: "msdyn_pmsimulations"
primaryId: "msdyn_pmsimulationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Simulation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmsimulation` |
| Display name | PM Simulation |
| Display (plural) | PM Simulations |
| Schema name | `msdyn_pmsimulation` |
| Entity set (Web API) | `msdyn_pmsimulations` |
| Primary id attribute | `msdyn_pmsimulationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmsimulations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmsimulations(<guid>)
POST /api/data/v9.2/msdyn_pmsimulations
PATCH /api/data/v9.2/msdyn_pmsimulations(<guid>)
DELETE /api/data/v9.2/msdyn_pmsimulations(<guid>)
```

## Attributes

Writable: **22** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_description`, `msdyn_end`, `msdyn_generatelog`, `msdyn_name`, `msdyn_pminferredtaskid`, `msdyn_pmsimulationId`, `msdyn_pmviewid`, `msdyn_psesimulationid`, `msdyn_result`, `msdyn_setting`, `msdyn_start`, `msdyn_state`, `msdyn_version`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmsimulation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmsimulation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmsimulation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmsimulation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmsimulation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_pmsimulation_pminferredtaskid_msdyn_pminferredtask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |
| `msdyn_pmsimulation_pmviewid_msdyn_pmview` | [msdyn_pmview](msdyn_pmview.md) | `msdyn_pmviewid` | `msdyn_pmviewid` |
| `owner_msdyn_pmsimulation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmsimulation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmsimulation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmsimulation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmsimulation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmsimulation_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmsimulation_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmsimulation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmsimulation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmsimulation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmsimulation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmsimulation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmsimulation.md) on 2026-05-06.