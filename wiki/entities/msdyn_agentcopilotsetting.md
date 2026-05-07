---
logical: "msdyn_agentcopilotsetting"
display: "Representative Copilot Setting"
entitySetName: "msdyn_agentcopilotsettings"
primaryId: "msdyn_agentcopilotsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Representative Copilot Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentcopilotsetting` |
| Display name | Representative Copilot Setting |
| Display (plural) | Representative Copilot Settings |
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

Writable: **82** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_adminprompts`, `msdyn_agentassistanyentityconfig`, `msdyn_agentassistenabled`, `msdyn_agentassistkbfilter`, `msdyn_agentassistkbfilterlive`, `msdyn_agentassisturl`, `msdyn_agentcopilotsettingId`, `msdyn_agentlist`, `msdyn_allagentsenabled`, `msdyn_allowcrossgeo`, `msdyn_allowtranslation`, `msdyn_allworkstreamsenabled`, `msdyn_answerassistenabled`, `msdyn_answerassistkbfilter`, `msdyn_answerassistkbfilterlive`, `msdyn_answerassisturl`, `msdyn_autocaseclosureenabled`, `msdyn_autocaseclosuresettings`, `msdyn_casetocaseresolutionmanualflowenabled`, `msdyn_companyscopeurls`, `msdyn_consentacceptanceby`, `msdyn_consentacceptedon`, `msdyn_conversationtocaseautonomousflowenabled`, `msdyn_conversationtocasemanualflowenabled`, `msdyn_copilotcustomconfiguration`, `msdyn_copilotemailenabledmode`, `msdyn_copilotembedsettings`, `msdyn_copilotenabled`, `msdyn_copilotrecommendedemailtemplatesenabled`, `msdyn_csplugindefaultonstatus`, `msdyn_customactionwebresources`, `msdyn_custominstruction`, `msdyn_defaultonoptout`, `msdyn_disablecopilotengagedanalytics`, `msdyn_displayname`, `msdyn_dvcopilotstatus`, `msdyn_dynamicfilterconfig`, `msdyn_dynamicfilterconfiglive`, `msdyn_emailassistconfiguration`, `msdyn_emailassistenabled`, `msdyn_emailassistkbfilter`, `msdyn_emailassistkbfilterlive`, `msdyn_emailassisturl`, `msdyn_emailsentimentenabled`, `msdyn_emailtocasemanualflowenabled`, `msdyn_embeddablecopilotwidgetconfiguration`, `msdyn_followuppromptsenabled`, `msdyn_includespecifictemplatesforcopilotrecommendationenabled`, `msdyn_interactionsenabled`, `msdyn_isdeterministicknowledgeenabled`, `msdyn_isdvcopilotenabled`, `msdyn_isemaildefaultonenabledone`, `msdyn_isknowledgehubconnectorsourceenabled`, `msdyn_kbenabled`, `msdyn_kbfilterallowagentedit`, `msdyn_kbfilterforpersonalization`, `msdyn_kbfilterforpersonalizationlive`, `msdyn_knowledgearticlecountlive`, `msdyn_knowledgearticlesourceenabled`, `msdyn_knowledgeconnectorpublishstatus`, `msdyn_lasttrainingstatus`, `msdyn_lasttrainingtime`, `msdyn_logknowledgesnippet`, `msdyn_name`, `msdyn_orgpromptfilterattribute`, `msdyn_pluginconfiguration`, `msdyn_proactivepromptsenabled`, `msdyn_searchconfiguration`, `msdyn_sharepointsourceenabled`, `msdyn_suggestedpromptsenabled`, `msdyn_systemstatus`, `msdyn_transcriptenabled`, `msdyn_uniquekey`, `msdyn_useagentlanguage`, `msdyn_workstreamlist`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentcopilotsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentcopilotsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentcopilotsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentcopilotsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_agentcopilotsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentcopilotsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_agentcopilotsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_agentcopilotsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_agentcopilotsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_agentcopilotsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_agentcopilotsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_agentcopilotsetting.md) on 2026-05-06.