---
logical: "processstageparameter"
display: "ProcessStageParameter"
entitySetName: "processstageparameters"
primaryId: "processstageparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# ProcessStageParameter

## Identity

| Property | Value |
| --- | --- |
| Logical name | `processstageparameter` |
| Display name | ProcessStageParameter |
| Display (plural) | ProcessStageParameters |
| Schema name | `processstageparameter` |
| Entity set (Web API) | `processstageparameters` |
| Primary id attribute | `processstageparameterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/processstageparameters?$select=name&$top=10
GET /api/data/v9.2/processstageparameters(<guid>)
POST /api/data/v9.2/processstageparameters
PATCH /api/data/v9.2/processstageparameters(<guid>)
DELETE /api/data/v9.2/processstageparameters(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `name`, `overriddencreatedon`, `ownerid`, `processstageid`, `processstageparameterid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `value`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_processstageparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_processstageparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_processstageparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_processstageparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_processstageparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_processstageparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_processstageparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_processstageparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `processstage_processstageparameter` | [processstage](processstage.md) | `processstageid` | `ProcessStageId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `processstageparameter_SyncErrors` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `processstageparameter_AsyncOperations` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `processstageparameter_MailboxTrackingFolders` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `processstageparameter_UserEntityInstanceDatas` | [processstageparameter](processstageparameter.md) | `objectid` | `objectid_processstageparameter` |
| `processstageparameter_ProcessSession` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `processstageparameter_BulkDeleteFailures` | [processstageparameter](processstageparameter.md) | `regardingobjectid` | `regardingobjectid_processstageparameter` |
| `processstageparameter_PrincipalObjectAttributeAccesses` | [processstageparameter](processstageparameter.md) | `objectid` | `objectid_processstageparameter` |


## Source

Generated from [processstageparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='processstageparameter')) on 2026-05-07.