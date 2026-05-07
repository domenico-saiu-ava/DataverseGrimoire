---
logical: "msdyn_copilotsummarizationsetting"
display: "Copilot Summarization Setting"
entitySetName: "msdyn_copilotsummarizationsettings"
primaryId: "msdyn_copilotsummarizationsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Copilot Summarization Setting

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotsummarizationsetting` |
| Display name | Copilot Summarization Setting |
| Display (plural) | Copilot Summarization Settings |
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

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_allowcreatecase`, `msdyn_allowcrossgeo`, `msdyn_allowtranslation`, `msdyn_applicableformslist`, `msdyn_autoenabled`, `msdyn_autoenableddone`, `msdyn_casesummaryconfiguration`, `msdyn_casesummaryenabled`, `msdyn_consentacceptedon`, `msdyn_conversationsummaryconfiguration`, `msdyn_copilotsummarizationsettingId`, `msdyn_disabledforplatformsummary`, `msdyn_enabled`, `msdyn_excludeformslist`, `msdyn_featureaccessrolelist`, `msdyn_interactiondatadisabled`, `msdyn_interactionsenabled`, `msdyn_isdefaultconfig`, `msdyn_name`, `msdyn_ondemandenabled`, `msdyn_relatedrecordconfiguration`, `msdyn_summarytype`, `msdyn_systemmetadata`, `msdyn_useagentlanguage`, `msdyn_whenagentjoinsenabled`, `msdyn_whenconversationendsenabled`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotsummarizationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotsummarizationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotsummarizationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotsummarizationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_copilotsummarizationsetting` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotsummarizationsetting_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotsummarizationsetting_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotsummarizationsetting_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_copilotsummarizationsetting_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_copilotsummarizationsetting_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotsummarizationsetting_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_copilotsummarizationsetting_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_copilotsummarizationsetting_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_copilotsummarizationsetting.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_copilotsummarizationsetting.md) on 2026-05-06.