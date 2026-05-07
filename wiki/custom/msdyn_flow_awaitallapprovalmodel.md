---
logical: "msdyn_flow_awaitallapprovalmodel"
display: "Modello di approvazione Attendi tutti"
entitySetName: "msdyn_flow_awaitallapprovalmodels"
primaryId: "msdyn_flow_awaitallapprovalmodelid"
primaryName: "msdyn_flow_awaitallapprovalmodel_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modello di approvazione Attendi tutti

Dati del modello di approvazione Attendi tutti associati a un'approvazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flow_awaitallapprovalmodel` |
| Display name | Modello di approvazione Attendi tutti |
| Display (plural) | Modelli di approvazione Attendi tutti |
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

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_flow_awaitallapprovalmodel_name`, `msdyn_flow_awaitallapprovalmodelid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flow_awaitallapprovalmodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flow_awaitallapprovalmodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flow_awaitallapprovalmodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flow_awaitallapprovalmodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flow_awaitallapprovalmodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flow_awaitallapprovalmodel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flow_awaitallapprovalmodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flow_awaitallapprovalmodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallapprovalmodel_SyncErrors` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_DuplicateMatchingRecord` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_DuplicateBaseRecord` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `baserecordid` | `baserecordid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_AsyncOperations` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_MailboxTrackingFolders` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_UserEntityInstanceDatas` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_ProcessSession` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_BulkDeleteFailures` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodel_PrincipalObjectAttributeAccesses` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `objectid` | `objectid_msdyn_flow_awaitallapprovalmodel` |
| `msdyn_flow_awaitallapprovalmodelrelationship_approvalsteps` | [msdyn_flow_awaitallapprovalmodel](msdyn_flow_awaitallapprovalmodel.md) | `msdyn_flow_approvalstep_model` | `msdyn_flow_approvalstep_model_msdyn_flow_awaitallapprovalmodel` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flow_awaitallmodelrelationship_systemuser` | [systemuser](systemuser.md) | _n/a_ | `msdyn_flow_awaitallmodelrelationship_systemuser` |
| `msdyn_flow_awaitallmodelrelationship_team` | [team](team.md) | _n/a_ | `msdyn_flow_awaitallmodelrelationship_team` |

## Source

Generated from [msdyn_flow_awaitallapprovalmodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flow_awaitallapprovalmodel')) on 2026-05-07.