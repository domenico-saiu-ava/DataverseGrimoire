---
logical: "msdyn_flow_actionapprovalmodel"
display: "Modello di approvazione azione"
entitySetName: "msdyn_flow_actionapprovalmodels"
primaryId: "msdyn_flow_actionapprovalmodelid"
primaryName: "msdyn_flow_actionapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di approvazione azione

Dati del modello di approvazione azione associati a un'approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_actionapprovalmodel` |
| Display name | Modello di approvazione azione |
| Display (plural) | Modelli di approvazione azione |
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

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_actionapprovalmodel_name`, `msdyn_flow_actionapprovalmodel_options`, `msdyn_flow_actionapprovalmodelid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_actionapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_actionapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_actionapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_actionapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_actionapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_actionapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_actionapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_actionapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_actionapprovalmodel_SyncErrors` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_AsyncOperations` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_UserEntityInstanceDatas` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_ProcessSession` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_BulkDeleteFailures` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_actionapprovalmodel` |
| `msdyn_flow_actionapprovalmodelrelationship_approvalsteps` | [msdyn_flow_actionapprovalmodel](msdyn_flow_actionapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_actionapprovalmodel` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_actionapprovalmodelrelationship_systemuser` | [systemuser](systemuser.md) | _n/a_ | `msdyn_flow_actionapprovalmodelrelationship_systemuser` |
| `msdyn_flow_actionapprovalmodelrelationship_team` | [team](team.md) | _n/a_ | `msdyn_flow_actionapprovalmodelrelationship_team` |

## Source

Generated from [msdyn_flow_actionapprovalmodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_actionapprovalmodel')) on 2026-05-07.