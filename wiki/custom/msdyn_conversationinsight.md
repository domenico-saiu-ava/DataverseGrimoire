---
logical: "msdyn_conversationinsight"
display: "ConversationInsight"
entitySetName: "msdyn_conversationinsights"
primaryId: "msdyn_conversationinsightid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ConversationInsight

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationinsight` |
| Display name | ConversationInsight |
| Display (plural) | ConversationInsights |
| Schema name | `msdyn_conversationinsight` |
| Entity set (Web API) | `msdyn_conversationinsights` |
| Primary id attribute | `msdyn_conversationinsightid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationinsights?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_conversationinsights(<guid>)
POST /api/data/v9.2/msdyn_conversationinsights
PATCH /api/data/v9.2/msdyn_conversationinsights(<guid>)
DELETE /api/data/v9.2/msdyn_conversationinsights(<guid>)
```

## Attributes

Writable: **20** · Read-only: **12**

### Writable

`importsequencenumber`, `msdyn_callaveragepause`, `msdyn_callinsightduration`, `msdyn_calllongestcustomermonologue`, `msdyn_callswitchesperconversation`, `msdyn_calltalkingspeed`, `msdyn_calltalktolistenratio`, `msdyn_conversationid`, `msdyn_conversationinsightid`, `msdyn_conversationinsighttarget`, `msdyn_copilotsummary`, `msdyn_copilotsummaryrequestcontext`, `msdyn_name`, `msdyn_summary`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_insights`, `msdyn_transcriptwithinsights`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_conversationinsight_msdyn_TranscriptWithInsights` | [fileattachment](fileattachment.md) | `msdyn_transcriptwithinsights` | `msdyn_transcriptwithinsights` |
| `FileAttachment_msdyn_conversationinsight_msdyn_insights` | [fileattachment](fileattachment.md) | `msdyn_insights` | `msdyn_insights` |
| `msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_conversationid` | `msdyn_ConversationId` |
| `msdyn_appointment_msdyn_conversationinsight_conversationinsighttarget` | [appointment](appointment.md) | `msdyn_conversationinsighttarget` | `msdyn_conversationinsighttarget_appointment` |
| `msdyn_phonecall_msdyn_conversationinsight_conversationinsighttarget` | [phonecall](phonecall.md) | `msdyn_conversationinsighttarget` | `msdyn_conversationinsighttarget_phonecall` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_conversationinsight_SyncErrors` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationinsight` |
| `msdyn_conversationinsight_AsyncOperations` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationinsight` |
| `msdyn_conversationinsight_MailboxTrackingFolders` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationinsight` |
| `msdyn_conversationinsight_UserEntityInstanceDatas` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `objectid` | `objectid_msdyn_conversationinsight` |
| `msdyn_conversationinsight_ProcessSession` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationinsight` |
| `msdyn_conversationinsight_BulkDeleteFailures` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `regardingobjectid` | `regardingobjectid_msdyn_conversationinsight` |
| `msdyn_conversationinsight_PrincipalObjectAttributeAccesses` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `objectid` | `objectid_msdyn_conversationinsight` |
| `msdyn_conversationinsight_FileAttachments` | [msdyn_conversationinsight](msdyn_conversationinsight.md) | `objectid` | `objectid_msdyn_conversationinsight` |


## Source

Generated from [msdyn_conversationinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationinsight')) on 2026-05-07.