---
logical: "msdyn_salescopilotknowledgebase"
display: "Knowledge Base di Sales Copilot"
entitySetName: "msdyn_salescopilotknowledgebases"
primaryId: "msdyn_salescopilotknowledgebaseid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Knowledge Base di Sales Copilot

Entità utilizzata per archiviare la domanda estratta dai messaggi e-mail e la risposta corrispondente recuperata da varie origini

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotknowledgebase` |
| Display name | Knowledge Base di Sales Copilot |
| Display (plural) | Knowledge Base di Sales Copilot |
| Schema name | `msdyn_salescopilotknowledgebase` |
| Entity set (Web API) | `msdyn_salescopilotknowledgebases` |
| Primary id attribute | `msdyn_salescopilotknowledgebaseid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotknowledgebases?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotknowledgebases(<guid>)
POST /api/data/v9.2/msdyn_salescopilotknowledgebases
PATCH /api/data/v9.2/msdyn_salescopilotknowledgebases(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotknowledgebases(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_answer`, `msdyn_answerfetched`, `msdyn_citations`, `msdyn_name`, `msdyn_question`, `msdyn_salescopilotemailinsightid`, `msdyn_salescopilotknowledgebaseid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotknowledgebase_msdyn_salescopilotemailinsight_msdyn_salescopilotemailinsightid` | [msdyn_salescopilotemailinsight](msdyn_salescopilotemailinsight.md) | `msdyn_salescopilotemailinsightid` | `msdyn_salescopilotemailinsightid` |
| `lk_msdyn_salescopilotknowledgebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotknowledgebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotknowledgebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotknowledgebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salescopilotknowledgebase` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salescopilotknowledgebase` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salescopilotknowledgebase` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salescopilotknowledgebase` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotknowledgebase_SyncErrors` | [msdyn_salescopilotknowledgebase](msdyn_salescopilotknowledgebase.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotknowledgebase` |
| `msdyn_salescopilotknowledgebase_AsyncOperations` | [msdyn_salescopilotknowledgebase](msdyn_salescopilotknowledgebase.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotknowledgebase` |
| `msdyn_salescopilotknowledgebase_MailboxTrackingFolders` | [msdyn_salescopilotknowledgebase](msdyn_salescopilotknowledgebase.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotknowledgebase` |
| `msdyn_salescopilotknowledgebase_UserEntityInstanceDatas` | [msdyn_salescopilotknowledgebase](msdyn_salescopilotknowledgebase.md) | `objectid` | `objectid_msdyn_salescopilotknowledgebase` |
| `msdyn_salescopilotknowledgebase_ProcessSession` | [msdyn_salescopilotknowledgebase](msdyn_salescopilotknowledgebase.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotknowledgebase` |
| `msdyn_salescopilotknowledgebase_BulkDeleteFailures` | [msdyn_salescopilotknowledgebase](msdyn_salescopilotknowledgebase.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotknowledgebase` |
| `msdyn_salescopilotknowledgebase_PrincipalObjectAttributeAccesses` | [msdyn_salescopilotknowledgebase](msdyn_salescopilotknowledgebase.md) | `objectid` | `objectid_msdyn_salescopilotknowledgebase` |


## Source

Generated from [msdyn_salescopilotknowledgebase (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescopilotknowledgebase')) on 2026-05-07.