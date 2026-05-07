---
logical: "knowledgesourceconsumer"
display: "Knowledge Source Consumer"
entitySetName: "knowledgesourceconsumers"
primaryId: "knowledgesourceconsumerid"
primaryName: "consumerid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Knowledge Source Consumer

## Identity

| Property | Value |
| --- | --- |
| Logical name | `knowledgesourceconsumer` |
| Display name | Knowledge Source Consumer |
| Display (plural) | Knowledge Source Consumer |
| Schema name | `KnowledgeSourceConsumer` |
| Entity set (Web API) | `knowledgesourceconsumers` |
| Primary id attribute | `knowledgesourceconsumerid` |
| Primary name attribute | `consumerid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/knowledgesourceconsumers?$select=consumerid&$top=10
GET /api/data/v9.2/knowledgesourceconsumers(<guid>)
POST /api/data/v9.2/knowledgesourceconsumers
PATCH /api/data/v9.2/knowledgesourceconsumers(<guid>)
DELETE /api/data/v9.2/knowledgesourceconsumers(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`active`, `channel`, `consumerid`, `description`, `importsequencenumber`, `knowledgesourceconsumerid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_knowledgesourceconsumer_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_knowledgesourceconsumer_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_knowledgesourceconsumer_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_knowledgesourceconsumer_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_knowledgesourceconsumer` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_knowledgesourceconsumer` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_knowledgesourceconsumer` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_knowledgesourceconsumer` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `knowledgesourceconsumer_dvtablesearch_knowledgesourceconsumerid` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `knowledgesourceconsumerid` | `knowledgesourceconsumerid` |
| `knowledgesourceconsumer_SyncErrors` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_DuplicateMatchingRecord` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `duplicaterecordid` | `duplicaterecordid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_DuplicateBaseRecord` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `baserecordid` | `baserecordid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_AsyncOperations` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_MailboxTrackingFolders` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_UserEntityInstanceDatas` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `objectid` | `objectid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_ProcessSession` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_BulkDeleteFailures` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `regardingobjectid` | `regardingobjectid_knowledgesourceconsumer` |
| `knowledgesourceconsumer_PrincipalObjectAttributeAccesses` | [knowledgesourceconsumer](knowledgesourceconsumer.md) | `objectid` | `objectid_knowledgesourceconsumer` |


## Source

Generated from [knowledgesourceconsumer (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='knowledgesourceconsumer')) on 2026-05-07.