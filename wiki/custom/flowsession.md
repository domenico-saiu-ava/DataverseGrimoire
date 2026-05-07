---
logical: "flowsession"
display: "Sessione flusso"
entitySetName: "flowsessions"
primaryId: "flowsessionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sessione flusso

Entità per archiviare le informazioni generate quando viene eseguito un flusso di Power Automate Desktop.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `flowsession` |
| Display name | Sessione flusso |
| Display (plural) | Sessioni flusso |
| Schema name | `flowsession` |
| Entity set (Web API) | `flowsessions` |
| Primary id attribute | `flowsessionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/flowsessions?$select=name&$top=10
GET /api/data/v9.2/flowsessions(<guid>)
POST /api/data/v9.2/flowsessions
PATCH /api/data/v9.2/flowsessions(<guid>)
DELETE /api/data/v9.2/flowsessions(<guid>)
```

## Attributes

Writable: **46** · Read-only: **13**

### Writable

`callbackurl`, `clienttrackingid`, `completedon`, `computeruseagentid`, `connectionid`, `context`, `correlationid`, `credentials`, `errorcode`, `errordetails`, `errorinnererror`, `errormessage`, `flowsessionid`, `flowtestsessionid`, `flowtriggerid`, `gateway`, `importsequencenumber`, `machinegroupid`, `machineid`, `machinepercentcpuusage`, `machinepercentramusage`, `machineramusage`, `name`, `overriddencreatedon`, `ownerid`, `parentcloudflowrunsequenceid`, `parentdesktopflowrunguid`, `parentdesktopflowrunid`, `parentworkflowid`, `processversion`, `regardingobjectid`, `rundetails`, `runduration`, `runexecutionduration`, `runmode`, `runsessionmode`, `runwaitduration`, `sessionusername`, `sessionusersid`, `startedon`, `statecode`, `statuscode`, `subcategory`, `timezoneruleversionnumber`, `triggertype`, `utcconversiontimezonecode`

### Read-only

`additionalcontext`, `createdby`, `createdon`, `createdonbehalfby`, `inputs`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `outputs`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_flowsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_flowsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_flowsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_flowsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_flowsession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_flowsession` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_flowsession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_flowsession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_FlowSession_AdditionalContext` | [fileattachment](fileattachment.md) | `additionalcontext` | `additionalcontext` |
| `FileAttachment_FlowSession_Outputs` | [fileattachment](fileattachment.md) | `outputs` | `outputs` |
| `FileAttachment_FlowSession_Inputs` | [fileattachment](fileattachment.md) | `inputs` | `inputs` |
| `flowsession_flowsession_parentdesktopflowrunid` | [flowsession](flowsession.md) | `parentdesktopflowrunid` | `parentdesktopflowrunid` |
| `regardingobjectid_process` | [workflow](workflow.md) | `regardingobjectid` | `regardingobjectid_process` |
| `flowmachine_flowsession_MachineId` | [flowmachine](flowmachine.md) | `machineid` | `MachineId` |
| `flowmachinegroup_flowsession_MachineGroupId` | [flowmachinegroup](flowmachinegroup.md) | `machinegroupid` | `MachineGroupId` |
| `flowtestsession_flowsession` | [flowtestsession](flowtestsession.md) | `flowtestsessionid` | `flowtestsessionid` |
| `flowtrigger_flowsession_flowtriggerid` | [flowtrigger](flowtrigger.md) | `flowtriggerid` | `flowtriggerid` |
| `computeruseagent_flowsession_ComputerUseAgentId` | [computeruseagent](computeruseagent.md) | `computeruseagentid` | `ComputerUseAgentId` |

### One-to-Many (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `flowsession_flowlog_parentobjectid` | [flowsession](flowsession.md) | `parentobjectid` | `parentobjectid` |
| `flowsession_flowlog_flowsessionid` | [flowsession](flowsession.md) | `flowsessionid` | `flowsessionid` |
| `flowsession_flowsessionbinary_FlowSessionId` | [flowsession](flowsession.md) | `flowsessionid` | `flowsessionid` |
| `flowsession_SyncErrors` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsession_AsyncOperations` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsession_MailboxTrackingFolders` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsession_UserEntityInstanceDatas` | [flowsession](flowsession.md) | `objectid` | `objectid_flowsession` |
| `flowsession_BulkDeleteFailures` | [flowsession](flowsession.md) | `regardingobjectid` | `regardingobjectid_flowsession` |
| `flowsession_PrincipalObjectAttributeAccesses` | [flowsession](flowsession.md) | `objectid` | `objectid_flowsession` |
| `flowsession_FileAttachments` | [flowsession](flowsession.md) | `objectid` | `objectid_flowsession` |
| `flowsession_workflowbinary_FlowSessionId` | [flowsession](flowsession.md) | `flowsessionid` | `FlowSessionId` |
| `flowsession_flowsession_parentdesktopflowrunid` | [flowsession](flowsession.md) | `parentdesktopflowrunid` | `parentdesktopflowrunid` |
| `flowevent_flowsession` | [flowsession](flowsession.md) | `parentobjectid` | `parentobjectid_flowsession` |
| `taggedflowsession_FlowSession_flowsession` | [flowsession](flowsession.md) | `flowsession` | `FlowSession` |


## Source

Generated from [flowsession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='flowsession')) on 2026-05-07.