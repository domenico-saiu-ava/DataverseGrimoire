---
logical: "msdyn_omnichannelconfiguration"
display: "Omnichannel Configuration"
entitySetName: "msdyn_omnichannelconfigurations"
primaryId: "msdyn_omnichannelconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Omnichannel Configuration

Configuration for Omnichannel

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_omnichannelconfiguration` |
| Display name | Omnichannel Configuration |
| Display (plural) | Omnichannel Configurations |
| Schema name | `msdyn_omnichannelconfiguration` |
| Entity set (Web API) | `msdyn_omnichannelconfigurations` |
| Primary id attribute | `msdyn_omnichannelconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_omnichannelconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_omnichannelconfigurations(<guid>)
POST /api/data/v9.2/msdyn_omnichannelconfigurations
PATCH /api/data/v9.2/msdyn_omnichannelconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_omnichannelconfigurations(<guid>)
```

## Attributes

Writable: **61** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_consulttoqueuemessagingtimeoutvalue`, `msdyn_consulttoqueuevoicetimeoutvalue`, `msdyn_defaultAgentInputLanguage`, `msdyn_delegated_prioritization_migration`, `msdyn_dnd_presence_lookup`, `msdyn_enable_advance_entity_routing`, `msdyn_enable_agent_reject_notifications`, `msdyn_enable_missed_notifications`, `msdyn_enable_new_consult_exp`, `msdyn_enable_preferred_agent_routing`, `msdyn_enable_supervisor_assign`, `msdyn_enable_supervisor_forceclose`, `msdyn_enable_supervisor_monitor`, `msdyn_enable_supervisor_transfer`, `msdyn_enable_unified_routing_diagnostic`, `msdyn_enable_visitorjourney`, `msdyn_enablemarkdown`, `msdyn_enablenewconversationform`, `msdyn_EnableRealTimeTranslation`, `msdyn_enablesoundnotifications`, `msdyn_encryptmaskedmessages`, `msdyn_inactive_presence_lookup`, `msdyn_isconsultcapacityblocking`, `msdyn_isconsulttoagentenabled`, `msdyn_isconsulttoagentenabledformessaging`, `msdyn_isconsulttoagentenabledforvoice`, `msdyn_isconsulttoqueueenabled`, `msdyn_isconsulttoqueueenabledformessaging`, `msdyn_isconsulttoqueueenabledforvoice`, `msdyn_isdefaultpersonamapped`, `msdyn_ispersonalizationofsoundenabled`, `msdyn_isPersonalMessagesEnabled`, `msdyn_ispersonasecurityrolemappingenabled`, `msdyn_IsSkillBasedRoutingEnabled`, `msdyn_istransfertoagentenabled`, `msdyn_istransfertoagentenabledformessaging`, `msdyn_istransfertoagentenabledforvoice`, `msdyn_istransfertoqueueenabled`, `msdyn_istransfertoqueueenabledformessaging`, `msdyn_istransfertoqueueenabledforvoice`, `msdyn_IsUpdateSkillsEnabled`, `msdyn_IsWEMShiftBasedRoutingEnabled`, `msdyn_maskforagent`, `msdyn_maskforcustomer`, `msdyn_maskingpermission`, `msdyn_maximumnumberofattemptsforconsulttoqueue`, `msdyn_name`, `msdyn_number_of_declines_allowed`, `msdyn_omnichannelconfigurationId`, `msdyn_preferredagentbackupmode`, `msdyn_publickeyurl`, `msdyn_SoundFormControl`, `msdyn_timeoutrulecsroverride`, `msdyn_translationwebresourceurl`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_omnichannelconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_omnichannelconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_omnichannelconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_omnichannelconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup` | [msdyn_presence](msdyn_presence.md) | `msdyn_dnd_presence_lookup` | `msdyn_dnd_presence_lookup` |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup` | [msdyn_presence](msdyn_presence.md) | `msdyn_inactive_presence_lookup` | `msdyn_inactive_presence_lookup` |
| `organization_msdyn_omnichannelconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_omnichannelconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_omnichannelconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_omnichannelconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_omnichannelconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_omnichannelconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_omnichannelconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_omnichannelconfiguration.md) on 2026-05-06.