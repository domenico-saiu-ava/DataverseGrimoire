---
logical: "msdyn_aiconfiguration"
display: "AI Configuration"
entitySetName: "msdyn_aiconfigurations"
primaryId: "msdyn_aiconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
---

# AI Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_aiconfiguration` |
| Display name | AI Configuration |
| Display (plural) | AI Configurations |
| Schema name | `msdyn_AIConfiguration` |
| Entity set (Web API) | `msdyn_aiconfigurations` |
| Primary id attribute | `msdyn_aiconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_aiconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_aiconfigurations(<guid>)
POST /api/data/v9.2/msdyn_aiconfigurations
PATCH /api/data/v9.2/msdyn_aiconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_aiconfigurations(<guid>)
```

## Attributes

Writable: **32** · Read-only: **20**

### Writable

`ImportSequenceNumber`, `IntroducedVersion`, `IsCustomizable`, `msdyn_AIConfigurationId`, `msdyn_AIModelId`, `msdyn_ConnectionReferenceId`, `msdyn_CreatedFromConfigurationId`, `msdyn_CustomConfiguration`, `msdyn_DataBinding`, `msdyn_lasterrors`, `msdyn_lasttrainorrundate`, `msdyn_MajorIterationNumber`, `msdyn_MinorIterationNumber`, `msdyn_ModelAction`, `msdyn_ModelData`, `msdyn_modelglobalexplainability`, `msdyn_ModelPerformance`, `msdyn_ModelProvisioningMetadata`, `msdyn_ModelProvisioningStatus`, `msdyn_ModelRunDataSpecification`, `msdyn_Name`, `msdyn_ResourceInfo`, `msdyn_RunConfiguration`, `msdyn_SchedulingOptions`, `msdyn_TemplateVersion`, `msdyn_TrainedModelAIConfigurationPareId`, `msdyn_Type`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_AIConfigurationIdUnique`, `msdyn_Model`, `msdyn_Model_Name`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `FileAttachment_msdyn_AIConfiguration_msdyn_Model` | [fileattachment](fileattachment.md) | `msdyn_model` | `msdyn_model` |
| `lk_msdyn_aiconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIConfiguration_ConnectionReference` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_ConnectionReferenceId` |
| `msdyn_aiconfiguration_msdyn_aiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainedmodelaiconfigurationpareid` | `msdyn_TrainedModelAIConfigurationPareId` |
| `msdyn_aimodel_msdyn_aiconfiguration` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |
| `msdyn_createdfromconfiguration_msdyn_toconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_createdfromconfigurationid` | `msdyn_CreatedFromConfigurationId` |

### One-to-Many (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiconfiguration_FileAttachments` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiconfiguration_msdyn_aiconfiguration` | _n/a_ | `msdyn_trainedmodelaiconfigurationpareid` | _n/a_ |
| `msdyn_aiconfiguration_msdyn_aievent` | _n/a_ | `msdyn_aiconfigurationid` | _n/a_ |
| `msdyn_aiconfiguration_msdyn_aiodtrainingimage` | _n/a_ | `msdyn_aiconfigurationid` | _n/a_ |
| `msdyn_aiconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_aiconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_aiconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_createdfromconfiguration_msdyn_toconfiguration` | _n/a_ | `msdyn_createdfromconfigurationid` | _n/a_ |
| `msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId` | _n/a_ | `msdyn_aiconfigurationid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_msdyn_aiconfig` | [msdyn_aiconfigurationid](msdyn_aiconfigurationid.md) | _n/a_ | _n/a_ |
| `msdyn_aiodlabel_msdyn_aiconfiguration` | [msdyn_aiconfigurationid](msdyn_aiconfigurationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_aiconfiguration.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_aiconfiguration.md) on 2026-05-06.