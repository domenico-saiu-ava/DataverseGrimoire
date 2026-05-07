---
logical: "msdyn_flow_awaitallapprovalmodel"
display: "Await All Approval Model"
entitySetName: "msdyn_flow_awaitallapprovalmodels"
primaryId: "msdyn_flow_awaitallapprovalmodelid"
primaryName: "msdyn_flow_awaitallapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Await All Approval Model

The await all approval model data attached to an approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_awaitallapprovalmodel` |
| Display name | Await All Approval Model |
| Display (plural) | Await All Approval Models |
| Schema name | `msdyn_flow_awaitallapprovalmodel` |
| Entity set (Web API) | `msdyn_flow_awaitallapprovalmodels` |
| Primary id attribute | `msdyn_flow_awaitallapprovalmodelid` |
| Primary name attribute | `msdyn_flow_awaitallapprovalmodel_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_awaitallapprovalmodels?$select=msdyn_flow_awaitallapprovalmodel_name&$top=10
GET /api/data/v9.2/msdyn_flow_awaitallapprovalmodels(<guid>)
POST /api/data/v9.2/msdyn_flow_awaitallapprovalmodels
PATCH /api/data/v9.2/msdyn_flow_awaitallapprovalmodels(<guid>)
DELETE /api/data/v9.2/msdyn_flow_awaitallapprovalmodels(<guid>)
```

## Attributes

Writable: **10** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_awaitallapprovalmodel_name`, `msdyn_flow_awaitallapprovalmodelId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_awaitallapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_awaitallapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_awaitallapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_awaitallapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_awaitallapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_flow_awaitallapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_awaitallapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_awaitallapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallapprovalmodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallapprovalmodelrelationship_approvalsteps` | _n/a_ | `msdyn_flow_approvalstep_model` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallmodelrelationship_systemuser` | [msdyn_flow_awaitallapprovalmodelid](msdyn_flow_awaitallapprovalmodelid.md) | _n/a_ | _n/a_ |
| `msdyn_flow_awaitallmodelrelationship_team` | [msdyn_flow_awaitallapprovalmodelid](msdyn_flow_awaitallapprovalmodelid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_flow_awaitallapprovalmodel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_awaitallapprovalmodel.md) on 2026-05-06.