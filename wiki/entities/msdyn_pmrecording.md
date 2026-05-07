---
logical: "msdyn_pmrecording"
display: "PM Recording"
entitySetName: "msdyn_pmrecordings"
primaryId: "msdyn_pmrecordingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Recording

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmrecording` |
| Display name | PM Recording |
| Display (plural) | PM Recordings |
| Schema name | `msdyn_pmrecording` |
| Entity set (Web API) | `msdyn_pmrecordings` |
| Primary id attribute | `msdyn_pmrecordingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmrecordings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmrecordings(<guid>)
POST /api/data/v9.2/msdyn_pmrecordings
PATCH /api/data/v9.2/msdyn_pmrecordings(<guid>)
DELETE /api/data/v9.2/msdyn_pmrecordings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_iterationid`, `msdyn_lasterrors`, `msdyn_name`, `msdyn_normalizedrecording`, `msdyn_parenttask`, `msdyn_pmrecordingId`, `msdyn_publishingstatus`, `msdyn_sourceworkflow`, `msdyn_type`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmrecording` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmrecording_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmrecording_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmrecording_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmrecording_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_parenttask` | `msdyn_parenttask` |
| `msdyn_workflow_msdyn_pmrecording` | [workflow](workflow.md) | `msdyn_sourceworkflow` | `msdyn_sourceworkflow` |
| `owner_msdyn_pmrecording` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmrecording` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmrecording` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmrecording_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmrecording_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmrecording_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmrecording_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmrecording_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmrecording_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmrecording_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmrecording_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmrecording.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmrecording.md) on 2026-05-06.