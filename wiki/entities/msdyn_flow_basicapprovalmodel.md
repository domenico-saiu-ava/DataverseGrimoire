---
logical: "msdyn_flow_basicapprovalmodel"
display: "Basic Approval Model Data"
entitySetName: "msdyn_flow_basicapprovalmodels"
primaryId: "msdyn_flow_basicapprovalmodelid"
primaryName: "msdyn_flow_basicapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Basic Approval Model Data

The basic approval model data attached to an approval.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_basicapprovalmodel` |
| Display name | Basic Approval Model Data |
| Display (plural) | Basic Approval Model Data |
| Schema name | `msdyn_flow_basicapprovalmodel` |
| Entity set (Web API) | `msdyn_flow_basicapprovalmodels` |
| Primary id attribute | `msdyn_flow_basicapprovalmodelid` |
| Primary name attribute | `msdyn_flow_basicapprovalmodel_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_basicapprovalmodels?$select=msdyn_flow_basicapprovalmodel_name&$top=10
GET /api/data/v9.2/msdyn_flow_basicapprovalmodels(<guid>)
POST /api/data/v9.2/msdyn_flow_basicapprovalmodels
PATCH /api/data/v9.2/msdyn_flow_basicapprovalmodels(<guid>)
DELETE /api/data/v9.2/msdyn_flow_basicapprovalmodels(<guid>)
```

## Attributes

Writable: **11** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_basicapprovalmodel_allmustapprove`, `msdyn_flow_basicapprovalmodel_name`, `msdyn_flow_basicapprovalmodelId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_basicapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_basicapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_basicapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_basicapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_basicapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_flow_basicapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_basicapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_basicapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_basicapprovalmodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_basicapprovalmodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_basicapprovalmodel_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_basicapprovalmodel_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_basicapprovalmodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_basicapprovalmodel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_basicapprovalmodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_basicapprovalmodel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_basicapprovalmodelrelationship_approval` | _n/a_ | `msdyn_flow_approval_basicapprovalmodel` | _n/a_ |
| `msdyn_flow_basicapprovalmodelrelationship_approvalsteps` | _n/a_ | `msdyn_flow_approvalstep_model` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_basicapprovalmodelrelationship_systemuser` | [msdyn_flow_basicapprovalmodelid](msdyn_flow_basicapprovalmodelid.md) | _n/a_ | _n/a_ |
| `msdyn_flow_basicapprovalmodelrelationship_team` | [msdyn_flow_basicapprovalmodelid](msdyn_flow_basicapprovalmodelid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_flow_basicapprovalmodel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_basicapprovalmodel.md) on 2026-05-06.