---
logical: "msdyn_copilotsummarizationsetting"
display: "Impostazione del riepilogo di Copilot"
entitySetName: "msdyn_copilotsummarizationsettings"
primaryId: "msdyn_copilotsummarizationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazione del riepilogo di Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotsummarizationsetting` |
| Display name | Impostazione del riepilogo di Copilot |
| Display (plural) | Impostazioni del riepilogo di Copilot |
| Schema name | `msdyn_copilotsummarizationsetting` |
| Entity set (Web API) | `msdyn_copilotsummarizationsettings` |
| Primary id attribute | `msdyn_copilotsummarizationsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotsummarizationsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotsummarizationsettings(<guid>)
POST /api/data/v9.2/msdyn_copilotsummarizationsettings
PATCH /api/data/v9.2/msdyn_copilotsummarizationsettings(<guid>)
DELETE /api/data/v9.2/msdyn_copilotsummarizationsettings(<guid>)
```

## Attributes

Writable: **33** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_allowcreatecase`, `msdyn_allowcrossgeo`, `msdyn_allowtranslation`, `msdyn_applicableformslist`, `msdyn_autoenabled`, `msdyn_autoenableddone`, `msdyn_casesummaryconfiguration`, `msdyn_casesummaryenabled`, `msdyn_consentacceptedon`, `msdyn_conversationsummaryconfiguration`, `msdyn_copilotsummarizationsettingid`, `msdyn_disabledforplatformsummary`, `msdyn_enabled`, `msdyn_excludeformslist`, `msdyn_featureaccessrolelist`, `msdyn_interactiondatadisabled`, `msdyn_interactionsenabled`, `msdyn_isdefaultconfig`, `msdyn_name`, `msdyn_ondemandenabled`, `msdyn_relatedrecordconfiguration`, `msdyn_summarytype`, `msdyn_systemmetadata`, `msdyn_useagentlanguage`, `msdyn_whenagentjoinsenabled`, `msdyn_whenconversationendsenabled`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotsummarizationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotsummarizationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotsummarizationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotsummarizationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotsummarizationsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotsummarizationsetting_SyncErrors` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_DuplicateMatchingRecord` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_DuplicateBaseRecord` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `baserecordid` | `baserecordid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_AsyncOperations` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_MailboxTrackingFolders` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_UserEntityInstanceDatas` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `objectid` | `objectid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_ProcessSession` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_BulkDeleteFailures` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotsummarizationsetting` |
| `msdyn_copilotsummarizationsetting_PrincipalObjectAttributeAccesses` | [msdyn_copilotsummarizationsetting](msdyn_copilotsummarizationsetting.md) | `objectid` | `objectid_msdyn_copilotsummarizationsetting` |


## Source

Generated from [msdyn_copilotsummarizationsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotsummarizationsetting')) on 2026-05-07.