---
logical: "msdyn_flow_approvalstep"
display: "Passaggio di approvazione"
entitySetName: "msdyn_flow_approvalsteps"
primaryId: "msdyn_flow_approvalstepid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Passaggio di approvazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_approvalstep` |
| Display name | Passaggio di approvazione |
| Display (plural) | Passaggio di approvazione |
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

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_approvalstep_approval`, `msdyn_flow_approvalstep_approvalid`, `msdyn_flow_approvalstep_model`, `msdyn_flow_approvalstep_modeltype`, `msdyn_flow_approvalstep_number`, `msdyn_flow_approvalstep_result`, `msdyn_flow_approvalstep_stage`, `msdyn_flow_approvalstepid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_approvalstep_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_approvalstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_approvalstep_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_approvalstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_approvalstep` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_approvalstep` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_approvalstep` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_approvalstep` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_flow_actionapprovalmodelrelationship_approvalsteps` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_approvalrelationship_approvalsteps` | [msdyn_flow_approval](msdyn_flow_approval.md) | `msdyn_flow_approvalstep_approval` | `msdyn_flow_approvalstep_approval` |
| `msdyn_flow_awaitallactionapprovalmodelrelationship_approvalsteps` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodelrelationship_approvalsteps` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_basicapprovalmodelrelationship_approvalsteps` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_basicapprovalmodel` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_approvalstep_SyncErrors` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_DuplicateMatchingRecord` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_DuplicateBaseRecord` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `baserecordid` | `baserecordid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_AsyncOperations` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_MailboxTrackingFolders` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_UserEntityInstanceDatas` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `objectid` | `objectid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_ProcessSession` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_BulkDeleteFailures` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_approvalstep` |
| `msdyn_flow_approvalstep_PrincipalObjectAttributeAccesses` | [msdyn_flow_approvalstep](msdyn_flow_approvalstep.md) | `objectid` | `objectid_msdyn_flow_approvalstep` |


## Source

Generated from [msdyn_flow_approvalstep (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_approvalstep')) on 2026-05-07.