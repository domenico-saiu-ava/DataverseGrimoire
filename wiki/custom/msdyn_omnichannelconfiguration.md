---
logical: "msdyn_omnichannelconfiguration"
display: "Configurazione Multicanale"
entitySetName: "msdyn_omnichannelconfigurations"
primaryId: "msdyn_omnichannelconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Configurazione Multicanale

Configurazione per Multicanale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_omnichannelconfiguration` |
| Display name | Configurazione Multicanale |
| Display (plural) | Configurazioni Multicanale |
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

Writable: **74** · Read-only: **14**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_consultagentfilterconfig`, `msdyn_consultqueuefilterconfig`, `msdyn_consulttoqueuemessagingtimeoutvalue`, `msdyn_consulttoqueuevoicetimeoutvalue`, `msdyn_defaultagentinputlanguage`, `msdyn_delegated_prioritization_migration`, `msdyn_dnd_presence_lookup`, `msdyn_enable_advance_entity_routing`, `msdyn_enable_agent_reject_notifications`, `msdyn_enable_conversation_orchestration`, `msdyn_enable_missed_notifications`, `msdyn_enable_new_consult_exp`, `msdyn_enable_preferred_agent_routing`, `msdyn_enable_supervisor_assign`, `msdyn_enable_supervisor_forceclose`, `msdyn_enable_supervisor_monitor`, `msdyn_enable_supervisor_transfer`, `msdyn_enable_unified_routing_diagnostic`, `msdyn_enable_visitorjourney`, `msdyn_enablemarkdown`, `msdyn_enablenewconversationform`, `msdyn_enablerealtimetranslation`, `msdyn_enablesoundnotifications`, `msdyn_encryptmaskedmessages`, `msdyn_inactive_presence_lookup`, `msdyn_isconsultagentfilterenabled`, `msdyn_isconsultcapacityblocking`, `msdyn_isconsultqueuefilterenabled`, `msdyn_isconsulttoagentenabled`, `msdyn_isconsulttoagentenabledformessaging`, `msdyn_isconsulttoagentenabledforvoice`, `msdyn_isconsulttoqueueenabled`, `msdyn_isconsulttoqueueenabledformessaging`, `msdyn_isconsulttoqueueenabledforvoice`, `msdyn_isconsultwithaiagentenabled`, `msdyn_isdefaultpersonamapped`, `msdyn_isnextpresenceenabled`, `msdyn_ispersonalizationofsoundenabled`, `msdyn_ispersonalmessagesenabled`, `msdyn_ispersonasecurityrolemappingenabled`, `msdyn_isskillbasedroutingenabled`, `msdyn_istransferagentfilterenabled`, `msdyn_istransferqueuefilterenabled`, `msdyn_istransfertoagentenabled`, `msdyn_istransfertoagentenabledformessaging`, `msdyn_istransfertoagentenabledforvoice`, `msdyn_istransfertoqueueawtdisplayenabled`, `msdyn_istransfertoqueueenabled`, `msdyn_istransfertoqueueenabledformessaging`, `msdyn_istransfertoqueueenabledforvoice`, `msdyn_isupdateskillsenabled`, `msdyn_iswemshiftbasedroutingenabled`, `msdyn_maskforagent`, `msdyn_maskforcustomer`, `msdyn_maskingpermission`, `msdyn_maximumnumberofattemptsforconsulttoqueue`, `msdyn_name`, `msdyn_number_of_declines_allowed`, `msdyn_omnichannelconfigurationid`, `msdyn_preferredagentbackupmode`, `msdyn_publickeyurl`, `msdyn_shouldhonourwrapupduringtransfer`, `msdyn_soundformcontrol`, `msdyn_timeoutrulecsroverride`, `msdyn_transferagentfilterconfig`, `msdyn_transferqueuefilterconfig`, `msdyn_translationwebresourceurl`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup` | [msdyn_presence](msdyn_presence.md) | `msdyn_inactive_presence_lookup` | `msdyn_inactive_presence_lookup` |
| `msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup` | [msdyn_presence](msdyn_presence.md) | `msdyn_dnd_presence_lookup` | `msdyn_dnd_presence_lookup` |
| `lk_msdyn_omnichannelconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_omnichannelconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_omnichannelconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_omnichannelconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_omnichannelconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_omnichannelconfiguration_SyncErrors` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_DuplicateMatchingRecord` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_DuplicateBaseRecord` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `baserecordid` | `baserecordid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_AsyncOperations` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_MailboxTrackingFolders` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_UserEntityInstanceDatas` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `objectid` | `objectid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_ProcessSession` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_BulkDeleteFailures` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `regardingobjectid` | `regardingobjectid_msdyn_omnichannelconfiguration` |
| `msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses` | [msdyn_omnichannelconfiguration](msdyn_omnichannelconfiguration.md) | `objectid` | `objectid_msdyn_omnichannelconfiguration` |


## Source

Generated from [msdyn_omnichannelconfiguration (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_omnichannelconfiguration')) on 2026-05-07.