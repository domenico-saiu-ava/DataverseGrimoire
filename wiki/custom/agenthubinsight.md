---
logical: "agenthubinsight"
display: "Informazioni dettagliate hub agenti"
entitySetName: "agenthubinsights"
primaryId: "agenthubinsightid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Informazioni dettagliate hub agenti

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agenthubinsight` |
| Display name | Informazioni dettagliate hub agenti |
| Display (plural) | Informazioni dettagliate hub agenti |
| Schema name | `agenthubinsight` |
| Entity set (Web API) | `agenthubinsights` |
| Primary id attribute | `agenthubinsightid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agenthubinsights?$select=name&$top=10
GET /api/data/v9.2/agenthubinsights(<guid>)
POST /api/data/v9.2/agenthubinsights
PATCH /api/data/v9.2/agenthubinsights(<guid>)
DELETE /api/data/v9.2/agenthubinsights(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`agenthubinsightid`, `agentids`, `aggregationwindow`, `appid`, `details`, `goalid`, `importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `payload`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agenthubinsight_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agenthubinsight_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agenthubinsight_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agenthubinsight_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agenthubinsight` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agenthubinsight` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agenthubinsight` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agenthubinsight` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `agenthubinsight_goalid_agenthubgoal` | [agenthubgoal](agenthubgoal.md) | `goalid` | `goalid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agenthubinsight_SyncErrors` | [agenthubinsight](agenthubinsight.md) | `regardingobjectid` | `regardingobjectid_agenthubinsight` |
| `agenthubinsight_DuplicateMatchingRecord` | [agenthubinsight](agenthubinsight.md) | `duplicaterecordid` | `duplicaterecordid_agenthubinsight` |
| `agenthubinsight_DuplicateBaseRecord` | [agenthubinsight](agenthubinsight.md) | `baserecordid` | `baserecordid_agenthubinsight` |
| `agenthubinsight_AsyncOperations` | [agenthubinsight](agenthubinsight.md) | `regardingobjectid` | `regardingobjectid_agenthubinsight` |
| `agenthubinsight_MailboxTrackingFolders` | [agenthubinsight](agenthubinsight.md) | `regardingobjectid` | `regardingobjectid_agenthubinsight` |
| `agenthubinsight_UserEntityInstanceDatas` | [agenthubinsight](agenthubinsight.md) | `objectid` | `objectid_agenthubinsight` |
| `agenthubinsight_ProcessSession` | [agenthubinsight](agenthubinsight.md) | `regardingobjectid` | `regardingobjectid_agenthubinsight` |
| `agenthubinsight_BulkDeleteFailures` | [agenthubinsight](agenthubinsight.md) | `regardingobjectid` | `regardingobjectid_agenthubinsight` |
| `agenthubinsight_PrincipalObjectAttributeAccesses` | [agenthubinsight](agenthubinsight.md) | `objectid` | `objectid_agenthubinsight` |


## Source

Generated from [agenthubinsight (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agenthubinsight')) on 2026-05-07.