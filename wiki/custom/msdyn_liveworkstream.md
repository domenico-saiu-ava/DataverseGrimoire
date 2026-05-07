---
logical: "msdyn_liveworkstream"
display: "Flusso di lavoro"
entitySetName: "msdyn_liveworkstreams"
primaryId: "msdyn_liveworkstreamid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Flusso di lavoro

Archivia le informazioni sulle proprietà degli elementi di lavoro generati da un endpoint canale univoco

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_liveworkstream` |
| Display name | Flusso di lavoro |
| Display (plural) | Flussi di lavoro |
| Schema name | `msdyn_liveworkstream` |
| Entity set (Web API) | `msdyn_liveworkstreams` |
| Primary id attribute | `msdyn_liveworkstreamid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_liveworkstreams?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_liveworkstreams(<guid>)
POST /api/data/v9.2/msdyn_liveworkstreams
PATCH /api/data/v9.2/msdyn_liveworkstreams(<guid>)
DELETE /api/data/v9.2/msdyn_liveworkstreams(<guid>)
```

## Attributes

Writable: **62** · Read-only: **19**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_allowedpresences`, `msdyn_alwaysassigntolastagent`, `msdyn_assignworkitemafterdecline`, `msdyn_autocloseafterinactivity`, `msdyn_blockcapacityforconsult`, `msdyn_blockcapacityforwrapup`, `msdyn_blockcapacityforwrapupinseconds`, `msdyn_bot_queue`, `msdyn_bot_rule`, `msdyn_bot_user`, `msdyn_botfailureactionconfig`, `msdyn_capacityformat`, `msdyn_capacityrequired`, `msdyn_customerdisconnectholddurationforopenconversation`, `msdyn_defaultqueue`, `msdyn_direction`, `msdyn_durationtoqualifyforlastagent`, `msdyn_enableagentaffinity`, `msdyn_enableautomatedmessages`, `msdyn_enableselectingfrompushbasedworkstreams`, `msdyn_entityroutingconfigurationid`, `msdyn_fallbacklanguage`, `msdyn_followupafterwaiting`, `msdyn_handlingtimethreshold`, `msdyn_intentfamilyid`, `msdyn_intentfeatureenabled`, `msdyn_isconversationcounterenabled`, `msdyn_isdefault`, `msdyn_isicdenabled`, `msdyn_liveworkstreamid`, `msdyn_masterentityroutingconfigurationid`, `msdyn_matchinglogic`, `msdyn_maxconcurrentconnection`, `msdyn_mode`, `msdyn_name`, `msdyn_notification`, `msdyn_notificationtemplate_agent_dial`, `msdyn_notificationtemplate_agent_reservation`, `msdyn_notificationtemplate_incoming_auth`, `msdyn_notificationtemplate_pre_dial`, `msdyn_outboundqueueid`, `msdyn_recordidentificationrule`, `msdyn_recordidentificationvalidationrule`, `msdyn_requiredispositioncodeforworkstreamconversations`, `msdyn_restrictdownloadrecording`, `msdyn_restrictdownloadtranscript`, `msdyn_routingcontractid`, `msdyn_screenpoptimeout`, `msdyn_screenpoptimeout_optionSet`, `msdyn_sessiontemplate_default`, `msdyn_streamsource`, `msdyn_useglobalsettingsforrequiringdispositioncode`, `msdyn_waitingtimethreshold`, `msdyn_workdistributionmode`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_skillattachmentrulescount`, `msdyn_skillattachmentrulescount_date`, `msdyn_skillattachmentrulescount_state`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (17)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_masterentityroutingconfiguration_msdyn_liveworkstream` | [msdyn_masterentityroutingconfiguration](msdyn_masterentityroutingconfiguration.md) | `msdyn_masterentityroutingconfigurationid` | `msdyn_masterentityroutingconfigurationId` |
| `msdyn_liveworkstream_decisioncontractid` | [msdyn_decisioncontract](msdyn_decisioncontract.md) | `msdyn_routingcontractid` | `msdyn_routingcontractid` |
| `msdyn_liveworkstream_defaultqueue_Queue` | [queue](queue.md) | `msdyn_defaultqueue` | `msdyn_defaultqueue` |
| `msdyn_msdyn_liveworkstream_BotFailureActionConfig_msdyn_overflowactionconfig` | [msdyn_overflowactionconfig](msdyn_overflowactionconfig.md) | `msdyn_botfailureactionconfig` | `msdyn_BotFailureActionConfig` |
| `lk_msdyn_liveworkstream_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_liveworkstream_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_liveworkstream_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_liveworkstream_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_liveworkstream` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_liveworkstream` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_liveworkstream` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_liveworkstream` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_liveworkstream_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |
| `msdyn_systemuser_msdyn_liveworkstream_msdyn_bot_user` | [systemuser](systemuser.md) | `msdyn_bot_user` | `msdyn_bot_user` |
| `msdyn_queue_msdyn_liveworkstream_msdyn_bot_queue` | [queue](queue.md) | `msdyn_bot_queue` | `msdyn_bot_queue` |
| `msdyn_queue_msdyn_liveworkstream_queueid` | [queue](queue.md) | `msdyn_outboundqueueid` | `msdyn_outboundqueueid` |
| `msdyn_entityroutingconfiguration_msdyn_liveworkstream` | [msdyn_entityroutingconfiguration](msdyn_entityroutingconfiguration.md) | `msdyn_entityroutingconfigurationid` | `msdyn_entityroutingconfigurationId` |

### One-to-Many (26)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_liveworkstream_msdyn_routingconfiguration_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_liveworkstream_msdyn_liveworkstreamcapacityprofile` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream_id` | `msdyn_workstream_id` |
| `msdyn_liveworkstream_queueitem_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_msdyn_liveworkstream_msdyn_unifiedroutingrun_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |
| `msdyn_rulesetdependencymapping_liveworkstream_referencedpolymorphicentityid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_referencedpolymorphicentityid` | `msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream` |
| `msdyn_liveworkstream_SyncErrors` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstream` |
| `msdyn_liveworkstream_AsyncOperations` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstream` |
| `msdyn_liveworkstream_MailboxTrackingFolders` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstream` |
| `msdyn_liveworkstream_UserEntityInstanceDatas` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `objectid` | `objectid_msdyn_liveworkstream` |
| `msdyn_liveworkstream_ProcessSession` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstream` |
| `msdyn_liveworkstream_BulkDeleteFailures` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `regardingobjectid` | `regardingobjectid_msdyn_liveworkstream` |
| `msdyn_liveworkstream_PrincipalObjectAttributeAccesses` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `objectid` | `objectid_msdyn_liveworkstream` |
| `msdyn_msdyn_liveworkstream_msdyn_workstream_bot` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamid` |
| `msdyn_workstream_liveconversationcountercond` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamid` |
| `msdyn_liveworkstream_skillattachmentruleitem` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstream` | `msdyn_liveworkstream` |
| `msdyn_msdyn_liveworkstream_msdyn_ocmessagemaskingrule_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_msdyn_liveworkstream_msdyn_ocautomatedactionrulesmapping_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_liveworkstream_msdyn_workstreamId_msdyn_entityWorkstreamMap` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstreamid` | `msdyn_workstreamId` |
| `msdyn_liveworkstream_msdyn_proactive_engagement_config_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |
| `msdyn_msdyn_overflowactionconfig_schedulecallbackoutboundworkstream_msdyn_liveworkstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_schedulecallbackoutboundworkstream` | `msdyn_schedulecallbackoutboundworkstream` |
| `msdyn_liveworkstream_ocruleitem` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstream` | `msdyn_liveworkstream` |
| `msdyn_msdyn_liveworkstream_msdyn_entityconfig` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_LiveWorkStreamId` |
| `msdyn_msdyn_liveworkstream_msdyn_ocliveworkitem_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_liveworkstream_msdyn_liveconversation` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_msdyn_liveworkstream_msdyn_ocliveworkstreamcontextvariable_liveworkstreamid` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_liveworkstreamid` | `msdyn_liveworkstreamid` |
| `msdyn_msdyn_liveworkstream_msdyn_urnotificationtemplatemapping_workstream` | [msdyn_liveworkstream](msdyn_liveworkstream.md) | `msdyn_workstream` | `msdyn_workstream` |

### Many-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_cannedmessage_liveworkstream` | [msdyn_cannedmessage](msdyn_cannedmessage.md) | _n/a_ | `msdyn_msdyn_cannedmessage_liveworkstream` |
| `msdyn_msdyn_liveworkstream_systemuser` | [systemuser](systemuser.md) | _n/a_ | `msdyn_msdyn_liveworkstream_systemuser` |
| `msdyn_msdyn_ocrichobject_liveworkstream` | [msdyn_ocrichobject](msdyn_ocrichobject.md) | _n/a_ | `msdyn_msdyn_ocrichobject_liveworkstream` |
| `msdyn_ocdispositioncode_liveworkstream_msdyn_liveworkstream` | [msdyn_ocdispositioncode](msdyn_ocdispositioncode.md) | _n/a_ | `msdyn_ocdispositioncode_liveworkstream_msdyn_liveworkstream` |

## Source

Generated from [msdyn_liveworkstream (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_liveworkstream')) on 2026-05-07.