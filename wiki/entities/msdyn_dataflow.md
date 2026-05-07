---
logical: "msdyn_dataflow"
display: "Dataflow"
entitySetName: "msdyn_dataflows"
primaryId: "msdyn_dataflowid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Dataflow

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflow` |
| Display name | Dataflow |
| Display (plural) | Dataflows |
| Schema name | `msdyn_dataflow` |
| Entity set (Web API) | `msdyn_dataflows` |
| Primary id attribute | `msdyn_dataflowid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataflows?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataflows(<guid>)
POST /api/data/v9.2/msdyn_dataflows
PATCH /api/data/v9.2/msdyn_dataflows(<guid>)
DELETE /api/data/v9.2/msdyn_dataflows(<guid>)
```

## Attributes

Writable: **21** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_dataflowId`, `msdyn_Description`, `msdyn_DestinationADLS`, `msdyn_EmailSettings`, `msdyn_GatewayObjectId`, `msdyn_InternalVersion`, `msdyn_MashupDocument`, `msdyn_MashupSettings`, `msdyn_name`, `msdyn_OriginalDataflowId`, `msdyn_RefreshHistory`, `msdyn_RefreshSettings`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataflow` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataflow_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflow_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflow_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflow_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dataflow` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataflow` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataflow` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflow_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_dataflowschedule` | _n/a_ | `msdyn_scheduleidref` | _n/a_ |
| `msdyn_dataflow_datalakefolder_dataflow` | _n/a_ | `msdyn_dataflow` | _n/a_ |
| `msdyn_dataflow_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dataflow_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dataflow_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataflow_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflow_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dfcr_dataflow_connect` | _n/a_ | `msdyn_dataflow` | _n/a_ |


## Source

Generated from [msdyn_dataflow.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dataflow.md) on 2026-05-06.