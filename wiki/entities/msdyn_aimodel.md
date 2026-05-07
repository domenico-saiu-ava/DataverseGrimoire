---
logical: "msdyn_aimodel"
display: "AI Model"
entitySetName: "msdyn_aimodels"
primaryId: "msdyn_aimodelid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **19** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `msdyn_ActiveRunConfigurationId`, `msdyn_AIModelCatalog`, `msdyn_AIModelId`, `msdyn_ModelCreationContext`, `msdyn_Name`, `msdyn_RetrainWorkflowId`, `msdyn_ScheduleInferenceWorkflowId`, `msdyn_ShareWithOrganizationOnCreate`, `msdyn_TemplateId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_AIModelIdUnique`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_aimodel` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_aimodel_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aimodel_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aimodel_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aimodel_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_aitemplate_msdyn_aimodel` | [msdyn_aitemplate](msdyn_aitemplate.md) | `msdyn_templateid` | `msdyn_TemplateId` |
| `msdyn_retrainworkflow_msdyn_toaimodel` | [workflow](workflow.md) | `msdyn_retrainworkflowid` | `msdyn_retrainworkflowid` |
| `msdyn_scheduleinferenceworkflow_msdyn_toaimodel` | [workflow](workflow.md) | `msdyn_scheduleinferenceworkflowid` | `msdyn_scheduleinferenceworkflowid` |
| `owner_msdyn_aimodel` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_aimodel` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_aimodel` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_AIBDatasetsContainer_msdyn_AIModelI` | _n/a_ | `msdyn_aimodelid` | _n/a_ |
| `msdyn_AIBFeedbackLoop_msdyn_AIModel` | _n/a_ | `msdyn_aimodelid` | _n/a_ |
| `msdyn_aimodel_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aimodel_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aimodel_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aimodel_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aimodel_msdyn_aiconfiguration` | _n/a_ | `msdyn_aimodelid` | _n/a_ |
| `msdyn_aimodel_msdyn_aievent` | _n/a_ | `msdyn_aimodelid` | _n/a_ |
| `msdyn_aimodel_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aimodel_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aimodel_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_AIPluginOperation_AIModel` | _n/a_ | `msdyn_aimodel` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_msdyn_aimodel` | [msdyn_aimodelid](msdyn_aimodelid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_aimodel.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aimodel.md) on 2026-05-06.