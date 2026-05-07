---
logical: "msdyn_flow_actionapprovalmodel"
display: "Action Approval Model"
entitySetName: "msdyn_flow_actionapprovalmodels"
primaryId: "msdyn_flow_actionapprovalmodelid"
primaryName: "msdyn_flow_actionapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Action Approval Model

The action approval model data attached to an action approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_actionapprovalmodel` |
| Display name | Action Approval Model |
| Display (plural) | Action Approval Models |
| Schema name | `msdyn_flow_actionapprovalmodel` |
| Entity set (Web API) | `msdyn_flow_actionapprovalmodels` |
| Primary id attribute | `msdyn_flow_actionapprovalmodelid` |
| Primary name attribute | `msdyn_flow_actionapprovalmodel_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_actionapprovalmodels?$select=msdyn_flow_actionapprovalmodel_name&$top=10
GET /api/data/v9.2/msdyn_flow_actionapprovalmodels(<guid>)
POST /api/data/v9.2/msdyn_flow_actionapprovalmodels
PATCH /api/data/v9.2/msdyn_flow_actionapprovalmodels(<guid>)
DELETE /api/data/v9.2/msdyn_flow_actionapprovalmodels(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_actionapprovalmodel_name`, `msdyn_flow_actionapprovalmodel_options`, `msdyn_flow_actionapprovalmodelId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_actionapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_actionapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_actionapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_actionapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_actionapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_flow_actionapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_actionapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_actionapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_actionapprovalmodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_actionapprovalmodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_actionapprovalmodel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_actionapprovalmodel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_actionapprovalmodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_actionapprovalmodel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_actionapprovalmodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_actionapprovalmodel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_actionapprovalmodelrelationship_approvalsteps` | _n/a_ | `msdyn_flow_approvalstep_model` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_actionapprovalmodelrelationship_systemuser` | [msdyn_flow_actionapprovalmodelid](msdyn_flow_actionapprovalmodelid.md) | _n/a_ | _n/a_ |
| `msdyn_flow_actionapprovalmodelrelationship_team` | [msdyn_flow_actionapprovalmodelid](msdyn_flow_actionapprovalmodelid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_flow_actionapprovalmodel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_actionapprovalmodel.md) on 2026-05-06.