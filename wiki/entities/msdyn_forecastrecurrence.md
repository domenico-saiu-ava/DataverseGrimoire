---
logical: "msdyn_forecastrecurrence"
display: "Forecast recurrence"
entitySetName: "msdyn_forecastrecurrences"
primaryId: "msdyn_forecastrecurrenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Forecast recurrence

Stores recalculation information for each recurrence of the forecast hierarchy. For internal use.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_forecastrecurrence` |
| Display name | Forecast recurrence |
| Display (plural) | Forecast recurrences |
| Schema name | `msdyn_forecastrecurrence` |
| Entity set (Web API) | `msdyn_forecastrecurrences` |
| Primary id attribute | `msdyn_forecastrecurrenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_forecastrecurrences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_forecastrecurrences(<guid>)
POST /api/data/v9.2/msdyn_forecastrecurrences
PATCH /api/data/v9.2/msdyn_forecastrecurrences(<guid>)
DELETE /api/data/v9.2/msdyn_forecastrecurrences(<guid>)
```

## Attributes

Writable: **23** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_actualparticipatingrecordsfetchxml`, `msdyn_failureinfo`, `msdyn_forecastdefinitionid`, `msdyn_forecastrecurrenceId`, `msdyn_inprogressparticipatingrecordsfetchxml`, `msdyn_ishierarchylocked`, `msdyn_lastrecalculatedon`, `msdyn_name`, `msdyn_recalculatestatuschangedon`, `msdyn_recalculationstarttime`, `msdyn_recalculationstatus`, `msdyn_recalculationstatusdescription`, `msdyn_recurrenceindex`, `msdyn_validfrom`, `msdyn_validto`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_forecastrecurrence` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_forecastrecurrence_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_forecastrecurrence_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_forecastrecurrence_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_forecastrecurrence_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence` | [msdyn_forecastdefinition](msdyn_forecastdefinition.md) | `msdyn_forecastdefinitionid` | `msdyn_ForecastDefinitionId` |
| `owner_msdyn_forecastrecurrence` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_forecastrecurrence` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_forecastrecurrence` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_forecastrecurrence_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastrecurrence_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastrecurrence_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_forecastrecurrence_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_forecastrecurrence_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_forecastrecurrence_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_forecastrecurrence_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance` | _n/a_ | `msdyn_forecastrecurrenceid` | _n/a_ |


## Source

Generated from [msdyn_forecastrecurrence.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_forecastrecurrence.md) on 2026-05-06.