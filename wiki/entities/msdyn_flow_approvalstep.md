---
logical: "msdyn_flow_approvalstep"
display: "Approval Step"
entitySetName: "msdyn_flow_approvalsteps"
primaryId: "msdyn_flow_approvalstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Approval Step

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approvalstep` |
| Display name | Approval Step |
| Display (plural) | Approval Step |
| Schema name | `msdyn_flow_approvalstep` |
| Entity set (Web API) | `msdyn_flow_approvalsteps` |
| Primary id attribute | `msdyn_flow_approvalstepid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flow_approvalsteps?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_flow_approvalsteps(<guid>)
POST /api/data/v9.2/msdyn_flow_approvalsteps
PATCH /api/data/v9.2/msdyn_flow_approvalsteps(<guid>)
DELETE /api/data/v9.2/msdyn_flow_approvalsteps(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flow_approvalstep_approval`, `msdyn_flow_approvalstep_approvalid`, `msdyn_flow_approvalstep_model`, `msdyn_flow_approvalstep_modelIdType`, `msdyn_flow_approvalstep_modeltype`, `msdyn_flow_approvalstep_number`, `msdyn_flow_approvalstep_result`, `msdyn_flow_approvalstep_stage`, `msdyn_flow_approvalstepId`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_flow_approvalstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_flow_approvalstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approvalstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approvalstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approvalstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_flow_actionapprovalmodelrelationship_approvalsteps` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approvalrelationship_approvalsteps` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalstep_approval` | `msdyn_flow_approvalstep_approval` |
| `msdyn_flow_awaitallactionapprovalmodelrelationship_approvalsteps` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodelrelationship_approvalsteps` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodelrelationship_approvalsteps` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_basicapprovalmodel` |
| `owner_msdyn_flow_approvalstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_flow_approvalstep` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_flow_approvalstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_approvalstep_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalstep_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalstep_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_flow_approvalstep_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_flow_approvalstep_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalstep_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_flow_approvalstep_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_flow_approvalstep_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_flow_approvalstep.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_flow_approvalstep.md) on 2026-05-06.