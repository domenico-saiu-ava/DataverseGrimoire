---
logical: "msdyn_dataflowconnectionreference"
display: "Dataflow Connection Reference"
entitySetName: "msdyn_dataflowconnectionreferences"
primaryId: "msdyn_dataflowconnectionreferenceid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Dataflow Connection Reference

Intersecting table between Dataflow and Connection Reference

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflowconnectionreference` |
| Display name | Dataflow Connection Reference |
| Display (plural) | Dataflow Connection References |
| Schema name | `msdyn_DataflowConnectionReference` |
| Entity set (Web API) | `msdyn_dataflowconnectionreferences` |
| Primary id attribute | `msdyn_dataflowconnectionreferenceid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataflowconnectionreferences?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_dataflowconnectionreferences(<guid>)
POST /api/data/v9.2/msdyn_dataflowconnectionreferences
PATCH /api/data/v9.2/msdyn_dataflowconnectionreferences(<guid>)
DELETE /api/data/v9.2/msdyn_dataflowconnectionreferences(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_ConnectionReference`, `msdyn_ConnectionReferenceDescription`, `msdyn_Dataflow`, `msdyn_DataflowConnectionDetails`, `msdyn_DataflowConnectionReferenceId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataflowconnectionreference` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataflowconnectionreference_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflowconnectionreference_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflowconnectionreference_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflowconnectionreference_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_dfcr_cr_connect` | [connectionreference](connectionreference.md) | `msdyn_connectionreference` | `msdyn_ConnectionReference` |
| `msdyn_dfcr_dataflow_connect` | [msdyn_dataflow](msdyn_dataflow.md) | `msdyn_dataflow` | `msdyn_Dataflow` |
| `owner_msdyn_dataflowconnectionreference` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataflowconnectionreference` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataflowconnectionreference` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflowconnectionreference_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowconnectionreference_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowconnectionreference_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_dataflowconnectionreference_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_dataflowconnectionreference_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowconnectionreference_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataflowconnectionreference_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowconnectionreference_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataflowconnectionreference.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dataflowconnectionreference.md) on 2026-05-06.