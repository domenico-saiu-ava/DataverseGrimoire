---
logical: "msdyn_dataflow"
display: "Dataflow"
entitySetName: "msdyn_dataflows"
primaryId: "msdyn_dataflowid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **20** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_dataflowid`, `msdyn_description`, `msdyn_destinationadls`, `msdyn_emailsettings`, `msdyn_gatewayobjectid`, `msdyn_internalversion`, `msdyn_mashupdocument`, `msdyn_mashupsettings`, `msdyn_name`, `msdyn_originaldataflowid`, `msdyn_refreshhistory`, `msdyn_refreshsettings`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dataflow_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflow_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflow_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflow_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dataflow` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dataflow` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dataflow` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dataflow` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflow_dataflowschedule` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_scheduleidref` | `msdyn_scheduleidref` |
| `msdyn_dataflow_datalakefolder_dataflow` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_dataflow` | `msdyn_Dataflow` |
| `msdyn_dfcr_dataflow_connect` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_dataflow` | `msdyn_Dataflow` |
| `msdyn_dataflow_SyncErrors` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflow_DuplicateMatchingRecord` | [msdyn_dataflow](msdyn_dataflow.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_dataflow` |
| `msdyn_dataflow_DuplicateBaseRecord` | [msdyn_dataflow](msdyn_dataflow.md) | `baserecordid` | `baserecordid_msdyn_dataflow` |
| `msdyn_dataflow_AsyncOperations` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflow_MailboxTrackingFolders` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflow_UserEntityInstanceDatas` | [msdyn_dataflow](msdyn_dataflow.md) | `objectid` | `objectid_msdyn_dataflow` |
| `msdyn_dataflow_ProcessSession` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflow_BulkDeleteFailures` | [msdyn_dataflow](msdyn_dataflow.md) | `regardingobjectid` | `regardingobjectid_msdyn_dataflow` |
| `msdyn_dataflow_PrincipalObjectAttributeAccesses` | [msdyn_dataflow](msdyn_dataflow.md) | `objectid` | `objectid_msdyn_dataflow` |


## Source

Generated from [msdyn_dataflow (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dataflow')) on 2026-05-07.