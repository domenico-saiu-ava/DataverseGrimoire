---
logical: "msdyn_aimodel"
display: "AI Model"
entitySetName: "msdyn_aimodels"
primaryId: "msdyn_aimodelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AI Model

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aimodel` |
| Display name | AI Model |
| Display (plural) | AI Models |
| Schema name | `msdyn_AIModel` |
| Entity set (Web API) | `msdyn_aimodels` |
| Primary id attribute | `msdyn_aimodelid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aimodels?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aimodels(<guid>)
POST /api/data/v9.2/msdyn_aimodels
PATCH /api/data/v9.2/msdyn_aimodels(<guid>)
DELETE /api/data/v9.2/msdyn_aimodels(<guid>)
```

## Attributes

Writable: **18** · Read-only: **16**

### Writable

`importsequencenumber`, `introducedversion`, `iscustomizable`, `msdyn_activerunconfigurationid`, `msdyn_aimodelcatalog`, `msdyn_aimodelid`, `msdyn_modelcreationcontext`, `msdyn_name`, `msdyn_retrainworkflowid`, `msdyn_scheduleinferenceworkflowid`, `msdyn_sharewithorganizationoncreate`, `msdyn_templateid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_aimodelidunique`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aimodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aimodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aimodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aimodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_aimodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_aimodel` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_aimodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_aimodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_retrainworkflow_msdyn_toaimodel` | [workflow](workflow.md) | `msdyn_retrainworkflowid` | `msdyn_retrainworkflowid` |
| `msdyn_scheduleinferenceworkflow_msdyn_toaimodel` | [workflow](workflow.md) | `msdyn_scheduleinferenceworkflowid` | `msdyn_scheduleinferenceworkflowid` |
| `msdyn_aitemplate_msdyn_aimodel` | [msdyn_aitemplate](msdyn_aitemplate.md) | `msdyn_templateid` | `msdyn_TemplateId` |
| `msdyn_aimodelcatalog_msdyn_aimodel` | [msdyn_aimodelcatalog](msdyn_aimodelcatalog.md) | `msdyn_aimodelcatalog` | `msdyn_AIModelCatalog` |

### One-to-Many (20)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aimodel_SyncErrors` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aimodel_AsyncOperations` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aimodel_MailboxTrackingFolders` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aimodel_UserEntityInstanceDatas` | [msdyn_aimodel](msdyn_aimodel.md) | `objectid` | `objectid_msdyn_aimodel` |
| `msdyn_aimodel_ProcessSession` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aimodel_BulkDeleteFailures` | [msdyn_aimodel](msdyn_aimodel.md) | `regardingobjectid` | `regardingobjectid_msdyn_aimodel` |
| `msdyn_aimodel_PrincipalObjectAttributeAccesses` | [msdyn_aimodel](msdyn_aimodel.md) | `objectid` | `objectid_msdyn_aimodel` |
| `msdyn_iermlmodel_aimodelid_msdyn` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |
| `msdyn_msdyn_aimodel_msdyn_effortpredictionresult_msdyn_aimodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |
| `msdyn_aimodel_msdyn_aiconfiguration` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `msdyn_aimodel_msdyn_aievent` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `msdyn_AIPluginOperation_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodel` | `msdyn_AIModel` |
| `msdyn_aioptimization_aimodelid_msdyn_aimodel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `msdyn_ocliveworkitemcharacteristic_mlmodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_mlmodelid` | `msdyn_mlmodelid` |
| `msdyn_aimodel_msdyn_decisionruleset_aibmodelid` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aibmodelid` | `msdyn_aibmodelid` |
| `msdyn_aimodel_Annotations` | [msdyn_aimodel](msdyn_aimodel.md) | `objectid` | `objectid_msdyn_aimodel` |
| `msdyn_AIBFeedbackLoop_msdyn_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `msdyn_aimodel_aiskillconfig_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `aimodel` | `AIModel` |
| `msdyn_ocskillidentmlmodel_aimodelid_msdyn` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_aimodelid` |
| `msdyn_AIBDatasetsContainer_msdyn_AIModelI` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_msdyn_aimodel` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_msdyn_aimodel` |

## Source

Generated from [msdyn_aimodel (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aimodel')) on 2026-05-07.