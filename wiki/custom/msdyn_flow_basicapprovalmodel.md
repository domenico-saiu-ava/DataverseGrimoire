---
logical: "msdyn_flow_basicapprovalmodel"
display: "Dati del modello di approvazione di base"
entitySetName: "msdyn_flow_basicapprovalmodels"
primaryId: "msdyn_flow_basicapprovalmodelid"
primaryName: "msdyn_flow_basicapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati del modello di approvazione di base

Dati del modello di approvazione di base associati a un'approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_basicapprovalmodel` |
| Display name | Dati del modello di approvazione di base |
| Display (plural) | Dati del modello di approvazione di base |
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

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_basicapprovalmodel_allmustapprove`, `msdyn_flow_basicapprovalmodel_name`, `msdyn_flow_basicapprovalmodelid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_basicapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_basicapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_basicapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_basicapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_basicapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_basicapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_basicapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_basicapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_basicapprovalmodel_SyncErrors` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_AsyncOperations` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_UserEntityInstanceDatas` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_ProcessSession` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_BulkDeleteFailures` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodelrelationship_approval` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `msdyn_flow_approval_basicapprovalmodel` | `msdyn_flow_approval_basicapprovalmodel` |
| `msdyn_flow_basicapprovalmodelrelationship_approvalsteps` | [msdyn_flow_basicapprovalmodel](msdyn_flow_basicapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_basicapprovalmodel` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_basicapprovalmodelrelationship_systemuser` | [systemuser](systemuser.md) | _n/a_ | `msdyn_flow_basicapprovalmodelrelationship_systemuser` |
| `msdyn_flow_basicapprovalmodelrelationship_team` | [team](team.md) | _n/a_ | `msdyn_flow_basicapprovalmodelrelationship_team` |

## Source

Generated from [msdyn_flow_basicapprovalmodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_basicapprovalmodel')) on 2026-05-07.