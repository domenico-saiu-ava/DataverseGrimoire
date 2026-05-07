---
logical: "msdyn_flow_awaitallactionapprovalmodel"
display: "Modello di approvazione dell'azione Attendi tutti"
entitySetName: "msdyn_flow_awaitallactionapprovalmodels"
primaryId: "msdyn_flow_awaitallactionapprovalmodelid"
primaryName: "msdyn_flow_awaitallactionapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di approvazione dell'azione Attendi tutti

Dati del modello di approvazione dell'azione Attendi tutti associati a un'approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_awaitallactionapprovalmodel` |
| Display name | Modello di approvazione dell'azione Attendi tutti |
| Display (plural) | Modelli di approvazione dell'azione Attendi tutti |
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

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_awaitallactionapprovalmodel_name`, `msdyn_flow_awaitallactionapprovalmodel_options`, `msdyn_flow_awaitallactionapprovalmodelid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_awaitallactionapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_awaitallactionapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_awaitallactionapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_awaitallactionapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_awaitallactionapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_awaitallactionapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_awaitallactionapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_awaitallactionapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallactionapprovalmodel_SyncErrors` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_AsyncOperations` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_UserEntityInstanceDatas` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_ProcessSession` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_BulkDeleteFailures` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_awaitallactionapprovalmodel` |
| `msdyn_flow_awaitallactionapprovalmodelrelationship_approvalsteps` | [msdyn_flow_awaitallactionapprovalmodel](msdyn_flow_awaitallactionapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_awaitallactionapprovalmodel` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallactionmodelrelationship_team` | [team](team.md) | _n/a_ | `msdyn_flow_awaitallactionmodelrelationship_team` |
| `msdyn_flow_awaitallactionmodelrelationship_user` | [systemuser](systemuser.md) | _n/a_ | `msdyn_flow_awaitallactionmodelrelationship_user` |

## Source

Generated from [msdyn_flow_awaitallactionapprovalmodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_awaitallactionapprovalmodel')) on 2026-05-07.