---
logical: "msdyn_copilotknowledgeinteraction"
display: "Interazione Knowledge Base Copilot"
entitySetName: "msdyn_copilotknowledgeinteractions"
primaryId: "msdyn_copilotknowledgeinteractionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "None"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Interazione Knowledge Base Copilot

Record di Copilot che utilizza l'articolo della Knowledge Base

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotknowledgeinteraction` |
| Display name | Interazione Knowledge Base Copilot |
| Display (plural) | Interazioni Knowledge Base Copilot |
| Schema name | `msdyn_copilotknowledgeinteraction` |
| Entity set (Web API) | `msdyn_copilotknowledgeinteractions` |
| Primary id attribute | `msdyn_copilotknowledgeinteractionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotknowledgeinteractions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotknowledgeinteractions(<guid>)
POST /api/data/v9.2/msdyn_copilotknowledgeinteractions
PATCH /api/data/v9.2/msdyn_copilotknowledgeinteractions(<guid>)
DELETE /api/data/v9.2/msdyn_copilotknowledgeinteractions(<guid>)
```

## Attributes

Writable: **9** · Read-only: **7**

### Writable

`importsequencenumber`, `msdyn_copilotknowledgeinteractionid`, `msdyn_knowledgearticleid`, `msdyn_name`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `versionnumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotknowledgeinteraction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotknowledgeinteraction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotknowledgeinteraction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotknowledgeinteraction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_copilotknowledgeinteraction_knowledgearticleid_knowledgearticle` | [knowledgearticle](knowledgearticle.md) | `msdyn_knowledgearticleid` | `msdyn_knowledgearticleid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotknowledgeinteraction_SyncErrors` | [msdyn_copilotknowledgeinteraction](msdyn_copilotknowledgeinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotknowledgeinteraction` |
| `msdyn_copilotknowledgeinteraction_AsyncOperations` | [msdyn_copilotknowledgeinteraction](msdyn_copilotknowledgeinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotknowledgeinteraction` |
| `msdyn_copilotknowledgeinteraction_MailboxTrackingFolders` | [msdyn_copilotknowledgeinteraction](msdyn_copilotknowledgeinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotknowledgeinteraction` |
| `msdyn_copilotknowledgeinteraction_UserEntityInstanceDatas` | [msdyn_copilotknowledgeinteraction](msdyn_copilotknowledgeinteraction.md) | `objectid` | `objectid_msdyn_copilotknowledgeinteraction` |
| `msdyn_copilotknowledgeinteraction_ProcessSession` | [msdyn_copilotknowledgeinteraction](msdyn_copilotknowledgeinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotknowledgeinteraction` |
| `msdyn_copilotknowledgeinteraction_BulkDeleteFailures` | [msdyn_copilotknowledgeinteraction](msdyn_copilotknowledgeinteraction.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotknowledgeinteraction` |
| `msdyn_copilotknowledgeinteraction_PrincipalObjectAttributeAccesses` | [msdyn_copilotknowledgeinteraction](msdyn_copilotknowledgeinteraction.md) | `objectid` | `objectid_msdyn_copilotknowledgeinteraction` |


## Source

Generated from [msdyn_copilotknowledgeinteraction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotknowledgeinteraction')) on 2026-05-07.