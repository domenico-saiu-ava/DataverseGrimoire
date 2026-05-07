---
logical: "msdyn_agentcopilotsetting"
display: "Impostazione Copilot rappresentante"
entitySetName: "msdyn_agentcopilotsettings"
primaryId: "msdyn_agentcopilotsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione Copilot rappresentante

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcopilotsetting` |
| Display name | Impostazione Copilot rappresentante |
| Display (plural) | Impostazioni Copilot rappresentante |
| Schema name | `msdyn_agentcopilotsetting` |
| Entity set (Web API) | `msdyn_agentcopilotsettings` |
| Primary id attribute | `msdyn_agentcopilotsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentcopilotsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentcopilotsettings(<guid>)
POST /api/data/v9.2/msdyn_agentcopilotsettings
PATCH /api/data/v9.2/msdyn_agentcopilotsettings(<guid>)
DELETE /api/data/v9.2/msdyn_agentcopilotsettings(<guid>)
```

## Attributes

Writable: **91** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_InvokeOnEmailPostCreateEnabled`, `msdyn_adminprompts`, `msdyn_agentassistanyentityconfig`, `msdyn_agentassistenabled`, `msdyn_agentassistkbfilter`, `msdyn_agentassistkbfilterlive`, `msdyn_agentassisturl`, `msdyn_agentcopilotsettingid`, `msdyn_agentlist`, `msdyn_allagentsenabled`, `msdyn_allowcrossgeo`, `msdyn_allowtranslation`, `msdyn_allworkstreamsenabled`, `msdyn_answerassistenabled`, `msdyn_answerassistkbfilter`, `msdyn_answerassistkbfilterlive`, `msdyn_answerassisturl`, `msdyn_autocaseclosureenabled`, `msdyn_autocaseclosuresettings`, `msdyn_casetocaseresolutionmanualflowenabled`, `msdyn_companyscopeurls`, `msdyn_consentacceptanceby`, `msdyn_consentacceptedon`, `msdyn_conversationtocaseautonomousflowenabled`, `msdyn_conversationtocasemanualflowenabled`, `msdyn_copilotcustomconfiguration`, `msdyn_copilotemailenabledmode`, `msdyn_copilotembedsettings`, `msdyn_copilotenabled`, `msdyn_copilotrecommendedemailtemplatesenabled`, `msdyn_csplugindefaultonstatus`, `msdyn_customactionwebresources`, `msdyn_custominstruction`, `msdyn_defaultonoptout`, `msdyn_disablecopilotengagedanalytics`, `msdyn_displayname`, `msdyn_draftwithcopilotappprofileenabled`, `msdyn_dvcopilotstatus`, `msdyn_dynamicfilterconfig`, `msdyn_dynamicfilterconfiglive`, `msdyn_emailClassificationCategoryRule`, `msdyn_emailassistconfiguration`, `msdyn_emailassistenabled`, `msdyn_emailassistkbfilter`, `msdyn_emailassistkbfilterlive`, `msdyn_emailassisturl`, `msdyn_emailsentimentenabled`, `msdyn_emailsentimentfilterfetchxml`, `msdyn_emailtocasemanualflowenabled`, `msdyn_embeddablecopilotwidgetconfiguration`, `msdyn_extendcopilotstudioagentenabled`, `msdyn_followuppromptsenabled`, `msdyn_fullpagecopilotenabled`, `msdyn_includespecifictemplatesforcopilotrecommendationenabled`, `msdyn_interactionsenabled`, `msdyn_isEmailClassificationEnabled`, `msdyn_isdeterministicknowledgeenabled`, `msdyn_isdvcopilotenabled`, `msdyn_isemaildefaultonenabledone`, `msdyn_isknowledgehubconnectorsourceenabled`, `msdyn_kbenabled`, `msdyn_kbfilterallowagentedit`, `msdyn_kbfilterforpersonalization`, `msdyn_kbfilterforpersonalizationlive`, `msdyn_knowledgearticlecountlive`, `msdyn_knowledgearticlesourceenabled`, `msdyn_knowledgeconnectorpublishstatus`, `msdyn_lasttrainingstatus`, `msdyn_lasttrainingtime`, `msdyn_logknowledgesnippet`, `msdyn_mcscontextconfiguration`, `msdyn_name`, `msdyn_orgpromptfilterattribute`, `msdyn_pluginconfiguration`, `msdyn_proactivepromptsenabled`, `msdyn_searchconfiguration`, `msdyn_sharepointsourceenabled`, `msdyn_sidecarimmersiveenabled`, `msdyn_suggestedpromptsenabled`, `msdyn_systemstatus`, `msdyn_transcriptenabled`, `msdyn_uniquekey`, `msdyn_useagentlanguage`, `msdyn_workstreamlist`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentcopilotsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcopilotsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcopilotsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcopilotsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_agentcopilotsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcopilotsetting_SyncErrors` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_DuplicateMatchingRecord` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_DuplicateBaseRecord` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `baserecordid` | `baserecordid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_AsyncOperations` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_MailboxTrackingFolders` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_UserEntityInstanceDatas` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `objectid` | `objectid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_ProcessSession` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_BulkDeleteFailures` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentcopilotsetting` |
| `msdyn_agentcopilotsetting_PrincipalObjectAttributeAccesses` | [msdyn_agentcopilotsetting](msdyn_agentcopilotsetting.md) | `objectid` | `objectid_msdyn_agentcopilotsetting` |


## Source

Generated from [msdyn_agentcopilotsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentcopilotsetting')) on 2026-05-07.