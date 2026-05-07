---
logical: "msdyn_flow_awaitallactionapprovalmodel"
display: "Await All Action Approval Model"
entitySetName: "msdyn_flow_awaitallactionapprovalmodels"
primaryId: "msdyn_flow_awaitallactionapprovalmodelid"
primaryName: "msdyn_flow_awaitallactionapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Await All Action Approval Model

The await all action approval model data attached to an action approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_awaitallactionapprovalmodel` |
| Display name | Await All Action Approval Model |
| Display (plural) | Await All Action Approval Models |
| Schema name | `msdyn_flow_awaitallactionapprovalmodel` |
| Entity set (Web API) | `msdyn_flow_awaitallactionapprovalmodels` |
| Primary id attribute | `msdyn_flow_awaitallactionapprovalmodelid` |
| Primary name attribute | `msdyn_flow_awaitallactionapprovalmodel_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodels?$select=msdyn_flow_awaitallactionapprovalmodel_name&$top=10
GET /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodels(<guid>)
POST /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodels
PATCH /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodels(<guid>)
DELETE /api/data/v9.2/msdyn_flow_awaitallactionapprovalmodels(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_awaitallactionapprovalmodel_name`, `msdyn_flow_awaitallactionapprovalmodel_options`, `msdyn_flow_awaitallactionapprovalmodelId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_awaitallactionapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_awaitallactionapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_awaitallactionapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_awaitallactionapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_awaitallactionapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_flow_awaitallactionapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_awaitallactionapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_awaitallactionapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallactionapprovalmodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_awaitallactionapprovalmodelrelationship_approvalsteps` | _n/a_ | `msdyn_flow_approvalstep_model` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallactionmodelrelationship_team` | [msdyn_flow_awaitallactionapprovalmodelid](msdyn_flow_awaitallactionapprovalmodelid.md) | _n/a_ | _n/a_ |
| `msdyn_flow_awaitallactionmodelrelationship_user` | [msdyn_flow_awaitallactionapprovalmodelid](msdyn_flow_awaitallactionapprovalmodelid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_flow_awaitallactionapprovalmodel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_awaitallactionapprovalmodel.md) on 2026-05-06.