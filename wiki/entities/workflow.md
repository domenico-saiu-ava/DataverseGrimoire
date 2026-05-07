---
logical: "workflow"
display: "Process"
entitySetName: "workflows"
primaryId: "workflowid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Process

Set of logical rules that define the steps necessary to automate a specific business process, task, or set of actions to be performed.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `workflow` |
| Display name | Process |
| Display (plural) | Processes |
| Schema name | `Workflow` |
| Entity set (Web API) | `workflows` |
| Primary id attribute | `workflowid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/workflows?$select=name&$top=10
GET /api/data/v9.2/workflows(<guid>)
POST /api/data/v9.2/workflows
PATCH /api/data/v9.2/workflows(<guid>)
DELETE /api/data/v9.2/workflows(<guid>)
```

## Attributes

Writable: **64** · Read-only: **29**

### Writable

`AsyncAutoDelete`, `BillingContext`, `BusinessProcessType`, `Category`, `Claims`, `ClientData`, `ConnectionReferences`, `CreateMetadata`, `CreateStage`, `Credentials`, `Definition`, `DeleteStage`, `Dependencies`, `Description`, `DesktopFlowModules`, `DynamicsSolutionContext`, `EntityImage`, `FormId`, `InputParameters`, `Inputs`, `IntroducedVersion`, `IsCustomizable`, `IsCustomProcessingStepAllowedForOtherPublishers`, `IsTransacted`, `LanguageCode`, `Licensee`, `LicenseEntitledBy`, `Metadata`, `Mode`, `ModernFlowType`, `ModifyMetadata`, `Name`, `OnDemand`, `Outputs`, `OwnerId`, `OwnerIdType`, `PlanVerified`, `PrimaryEntity`, `ProcessOrder`, `ProcessRoleAssignment`, `ProcessTriggerFormId`, `ProcessTriggerScope`, `Rank`, `RendererObjectTypeCode`, `ResourceContainer`, `ResourceId`, `RunAs`, `SchemaVersion`, `Scope`, `StateCode`, `StatusCode`, `Subprocess`, `SuspensionReasonDetails`, `SyncWorkflowLogOnFailure`, `ThrottlingBehavior`, `TriggerOnCreate`, `TriggerOnDelete`, `TriggerOnUpdateAttributeList`, `Type`, `UIFlowType`, `UniqueName`, `UpdateStage`, `WorkflowId`, `Xaml`

### Read-only

`ActiveWorkflowId`, `ClientDataIsCompressed`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `EntityImage_Timestamp`, `EntityImage_URL`, `EntityImageId`, `IsCrmUIWorkflow`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `ParentWorkflowId`, `PluginTypeId`, `SdkMessageId`, `SolutionId`, `SupportingSolutionId`, `TrustedAccess`, `UIData`, `VersionNumber`, `WorkflowIdUnique`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_workflow` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `owner_workflows` | [owner](owner.md) | `ownerid` | `ownerid` |
| `system_user_workflow` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_workflow` | [team](team.md) | `owningteam` | `owningteam` |
| `workflow_active_workflow` | [workflow](workflow.md) | `activeworkflowid` | `activeworkflowid` |
| `workflow_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `workflow_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `Workflow_licensee` | [systemuser](systemuser.md) | `licensee` | `licensee_systemuserid` |
| `Workflow_licenseentitledby` | [workflow](workflow.md) | `licenseentitledby` | `licenseentitledby_workflowid` |
| `workflow_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `workflow_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `workflow_parent_workflow` | [workflow](workflow.md) | `parentworkflowid` | `parentworkflowid` |

### One-to-Many (38)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `adx_invitation_redemptionworkflow` | _n/a_ | `adx_redemptionworkflow` | _n/a_ |
| `AIPluginOperation_Workflow_Workflow` | _n/a_ | `workflow` | _n/a_ |
| `catalogassignment_workflow` | _n/a_ | `object` | _n/a_ |
| `flowcapacityassignment_workflow` | _n/a_ | `regarding` | _n/a_ |
| `flowevent_workflow` | _n/a_ | `parentobjectid` | _n/a_ |
| `lk_asyncoperation_workflowactivationid` | _n/a_ | `workflowactivationid` | _n/a_ |
| `lk_expiredprocess_processid` | _n/a_ | `processid` | _n/a_ |
| `lk_newprocess_processid` | _n/a_ | `processid` | _n/a_ |
| `lk_processsession_processid` | _n/a_ | `processid` | _n/a_ |
| `lk_translationprocess_processid` | _n/a_ | `processid` | _n/a_ |
| `msdyn_retrainworkflow_msdyn_toaimodel` | _n/a_ | `msdyn_retrainworkflowid` | _n/a_ |
| `msdyn_scheduleinferenceworkflow_msdyn_toaimodel` | _n/a_ | `msdyn_scheduleinferenceworkflowid` | _n/a_ |
| `msdyn_workflow_msdyn_pmrecording` | _n/a_ | `msdyn_sourceworkflow` | _n/a_ |
| `msdyn_workflow_msdyn_solutionhealthrule_resolutionaction` | _n/a_ | `msdyn_resolutionaction` | _n/a_ |
| `msdyn_workflow_msdyn_solutionhealthrule_Workflow` | _n/a_ | `msdyn_workflow` | _n/a_ |
| `msdyn_workflow_slaitem_customtimecalculationworkflowid` | _n/a_ | `msdyn_customtimecalculationworkflowid` | _n/a_ |
| `process_processstage` | _n/a_ | `processid` | _n/a_ |
| `process_processtrigger` | _n/a_ | `processid` | _n/a_ |
| `regardingobjectid_process` | _n/a_ | `regardingobjectid` | _n/a_ |
| `savingrule_workflow` | _n/a_ | `workflowid` | _n/a_ |
| `slabase_workflowid` | _n/a_ | `workflowid` | _n/a_ |
| `slaitembase_workflowid` | _n/a_ | `workflowid` | _n/a_ |
| `taggedprocess_Process_workflow` | _n/a_ | `process` | _n/a_ |
| `workflow_active_workflow` | _n/a_ | `activeworkflowid` | _n/a_ |
| `Workflow_Annotation` | _n/a_ | `objectid` | _n/a_ |
| `workflow_businessprocess` | _n/a_ | `rootworkflowid` | _n/a_ |
| `workflow_componentversionnrddatasourceset` | _n/a_ | `component` | _n/a_ |
| `workflow_componentversions` | _n/a_ | `component` | _n/a_ |
| `workflow_desktopflowbinary_Process` | _n/a_ | `process` | _n/a_ |
| `workflow_flowaggregation_workflowid` | _n/a_ | `workflowid` | _n/a_ |
| `workflow_flowlog_cloudflowid` | _n/a_ | `cloudflowid` | _n/a_ |
| `workflow_flowlog_desktopflowid` | _n/a_ | `desktopflowid` | _n/a_ |
| `workflow_flowrun_Workflow` | _n/a_ | `workflow` | _n/a_ |
| `Workflow_licenseentitledby` | _n/a_ | `licenseentitledby` | _n/a_ |
| `workflow_parent_workflow` | _n/a_ | `parentworkflowid` | _n/a_ |
| `Workflow_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `workflow_workflowbinary_Process` | _n/a_ | `process` | _n/a_ |
| `workflowmetadata_WorkflowId_workflow` | _n/a_ | `workflowid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_workflow` | [workflowid](workflowid.md) | _n/a_ | _n/a_ |
| `workflow_card_connections` | [workflowid](workflowid.md) | _n/a_ | _n/a_ |

## Source

Generated from [workflow.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/workflow.md) on 2026-05-06.