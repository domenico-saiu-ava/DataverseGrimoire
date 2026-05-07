---
logical: "msdyn_sequencetargetstep"
display: "Sequence Target Step"
entitySetName: "msdyn_sequencetargetsteps"
primaryId: "msdyn_sequencetargetstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sequence Target Step

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencetargetstep` |
| Display name | Sequence Target Step |
| Display (plural) | Sequence Target Steps |
| Schema name | `msdyn_sequencetargetstep` |
| Entity set (Web API) | `msdyn_sequencetargetsteps` |
| Primary id attribute | `msdyn_sequencetargetstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequencetargetsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequencetargetsteps(<guid>)
POST /api/data/v9.2/msdyn_sequencetargetsteps
PATCH /api/data/v9.2/msdyn_sequencetargetsteps(<guid>)
DELETE /api/data/v9.2/msdyn_sequencetargetsteps(<guid>)
```

## Attributes

Writable: **28** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_advancedfromstep`, `msdyn_advancedfromwaitstate`, `msdyn_completedon`, `msdyn_convertedtomanualfrom`, `msdyn_description`, `msdyn_duetime`, `msdyn_errorstate`, `msdyn_linkedactivityid`, `msdyn_name`, `msdyn_operationparameter`, `msdyn_sequenceduetime`, `msdyn_sequencestepId`, `msdyn_sequencetarget`, `msdyn_sequencetargetstepId`, `msdyn_snoozecount`, `msdyn_subtype`, `msdyn_triggeroutcome`, `msdyn_type`, `msdyn_waitskippedon`, `msdyn_waitstate`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sequencetargetstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sequencetargetstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencetargetstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencetargetstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencetargetstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_advancedfromstep_msdyn_sequencetargetstep` | [msdyn_sequencetargetstep](msdyn_sequencetargetstep.md) | `msdyn_advancedfromstep` | `msdyn_advancedfromstep` |
| `msdyn_sequencetarget_sequencetargetstep` | [msdyn_sequencetarget](msdyn_sequencetarget.md) | `msdyn_sequencetarget` | `msdyn_sequencetarget` |
| `owner_msdyn_sequencetargetstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sequencetargetstep` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sequencetargetstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_advancedfromstep_msdyn_sequencetarget` | _n/a_ | `msdyn_advancedfromstep` | _n/a_ |
| `msdyn_advancedfromstep_msdyn_sequencetargetstep` | _n/a_ | `msdyn_advancedfromstep` | _n/a_ |
| `msdyn_sequencetargetstep_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetargetstep_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetargetstep_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetargetstep_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sequencetargetstep_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetargetstep_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sequencetargetstep.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sequencetargetstep.md) on 2026-05-06.