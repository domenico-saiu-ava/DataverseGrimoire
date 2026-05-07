---
logical: "msdyn_aiconfiguration"
display: "AI Configuration"
entitySetName: "msdyn_aiconfigurations"
primaryId: "msdyn_aiconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **32** · Read-only: **19**

### Writable

`importsequencenumber`, `introducedversion`, `iscustomizable`, `msdyn_aiconfigurationid`, `msdyn_aimodelid`, `msdyn_connectionreferenceid`, `msdyn_createdfromconfigurationid`, `msdyn_customconfiguration`, `msdyn_databinding`, `msdyn_lasterrors`, `msdyn_lasttrainorrundate`, `msdyn_majoriterationnumber`, `msdyn_minoriterationnumber`, `msdyn_modelaction`, `msdyn_modeldata`, `msdyn_modelglobalexplainability`, `msdyn_modelperformance`, `msdyn_modelprovisioningmetadata`, `msdyn_modelprovisioningstatus`, `msdyn_modelrundataspecification`, `msdyn_name`, `msdyn_resourceinfo`, `msdyn_runconfiguration`, `msdyn_schedulingoptions`, `msdyn_templateversion`, `msdyn_trainedmodelaiconfigurationpareid`, `msdyn_type`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_aiconfigurationidunique`, `msdyn_model`, `overwritetime`, `ownerid`, `owneridtype`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_aiconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_aiconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_aiconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_aiconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `FileAttachment_msdyn_AIConfiguration_msdyn_Model` | [fileattachment](fileattachment.md) | `msdyn_model` | `msdyn_model` |
| `msdyn_aiconfiguration_msdyn_aiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainedmodelaiconfigurationpareid` | `msdyn_TrainedModelAIConfigurationPareId` |
| `msdyn_AIConfiguration_ConnectionReference` | [connectionreference](connectionreference.md) | `msdyn_connectionreferenceid` | `msdyn_ConnectionReferenceId` |
| `msdyn_createdfromconfiguration_msdyn_toconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_createdfromconfigurationid` | `msdyn_CreatedFromConfigurationId` |
| `msdyn_aimodel_msdyn_aiconfiguration` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodelid` | `msdyn_AIModelId` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aiconfiguration_SyncErrors` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_AsyncOperations` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_MailboxTrackingFolders` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_UserEntityInstanceDatas` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `objectid` | `objectid_msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_ProcessSession` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_BulkDeleteFailures` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `objectid` | `objectid_msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_FileAttachments` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `objectid` | `objectid_msdyn_aiconfiguration` |
| `msdyn_iermltraining_publishaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_publishaiconfiguration` | `msdyn_publishaiconfiguration` |
| `msdyn_iermltraining_trainaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainaiconfiguration` | `msdyn_trainaiconfiguration` |
| `msdyn_aiconfiguration_msdyn_aiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainedmodelaiconfigurationpareid` | `msdyn_TrainedModelAIConfigurationPareId` |
| `msdyn_createdfromconfiguration_msdyn_toconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_createdfromconfigurationid` | `msdyn_CreatedFromConfigurationId` |
| `msdyn_aiconfiguration_msdyn_aievent` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |
| `msdyn_aiconfiguration_msdyn_aiconfigurationsearch` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfiguration` | `msdyn_aiconfiguration` |
| `msdyn_aiconfiguration_msdyn_aiodtrainingimage` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |
| `msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_aiconfigurationid` | `msdyn_AIConfigurationId` |
| `msdyn_ocsimltraining_publishaiconfigurati` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_publishaiconfiguration` | `msdyn_publishaiconfiguration` |
| `msdyn_ocsimltraining_trainaiconfiguration` | [msdyn_aiconfiguration](msdyn_aiconfiguration.md) | `msdyn_trainaiconfiguration` | `msdyn_trainaiconfiguration` |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aidocumenttemplate_msdyn_aiconfig` | [msdyn_aidocumenttemplate](msdyn_aidocumenttemplate.md) | _n/a_ | `msdyn_aidocumenttemplate_msdyn_aiconfig` |
| `msdyn_aiodlabel_msdyn_aiconfiguration` | [msdyn_aiodlabel](msdyn_aiodlabel.md) | _n/a_ | `msdyn_aiodlabel_msdyn_aiconfiguration` |

## Source

Generated from [msdyn_aiconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_aiconfiguration')) on 2026-05-07.