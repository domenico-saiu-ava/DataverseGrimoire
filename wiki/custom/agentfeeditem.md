---
logical: "agentfeeditem"
display: "Elemento feed agente"
entitySetName: "agentfeeditems"
primaryId: "agentfeeditemid"
primaryName: "title"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Elemento feed agente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `agentfeeditem` |
| Display name | Elemento feed agente |
| Display (plural) | Elementi feed agente |
| Schema name | `agentfeeditem` |
| Entity set (Web API) | `agentfeeditems` |
| Primary id attribute | `agentfeeditemid` |
| Primary name attribute | `title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/agentfeeditems?$select=title&$top=10
GET /api/data/v9.2/agentfeeditems(<guid>)
POST /api/data/v9.2/agentfeeditems
PATCH /api/data/v9.2/agentfeeditems(<guid>)
DELETE /api/data/v9.2/agentfeeditems(<guid>)
```

## Attributes

Writable: **14** · Read-only: **10**

### Writable

`agentfeeditemid`, `assignedto`, `description`, `importsequencenumber`, `overriddencreatedon`, `ownerid`, `priority`, `state`, `statecode`, `statuscode`, `tasks`, `timezoneruleversionnumber`, `title`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_agentfeeditem_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_agentfeeditem_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_agentfeeditem_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_agentfeeditem_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_agentfeeditem` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_agentfeeditem` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_agentfeeditem` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_agentfeeditem` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `agentfeeditem_SyncErrors` | [agentfeeditem](agentfeeditem.md) | `regardingobjectid` | `regardingobjectid_agentfeeditem` |
| `agentfeeditem_DuplicateMatchingRecord` | [agentfeeditem](agentfeeditem.md) | `duplicaterecordid` | `duplicaterecordid_agentfeeditem` |
| `agentfeeditem_DuplicateBaseRecord` | [agentfeeditem](agentfeeditem.md) | `baserecordid` | `baserecordid_agentfeeditem` |
| `agentfeeditem_AsyncOperations` | [agentfeeditem](agentfeeditem.md) | `regardingobjectid` | `regardingobjectid_agentfeeditem` |
| `agentfeeditem_MailboxTrackingFolders` | [agentfeeditem](agentfeeditem.md) | `regardingobjectid` | `regardingobjectid_agentfeeditem` |
| `agentfeeditem_UserEntityInstanceDatas` | [agentfeeditem](agentfeeditem.md) | `objectid` | `objectid_agentfeeditem` |
| `agentfeeditem_ProcessSession` | [agentfeeditem](agentfeeditem.md) | `regardingobjectid` | `regardingobjectid_agentfeeditem` |
| `agentfeeditem_BulkDeleteFailures` | [agentfeeditem](agentfeeditem.md) | `regardingobjectid` | `regardingobjectid_agentfeeditem` |
| `agentfeeditem_PrincipalObjectAttributeAccesses` | [agentfeeditem](agentfeeditem.md) | `objectid` | `objectid_agentfeeditem` |
| `agentfeeditem_agenttask_agentfeeditemid` | [agentfeeditem](agentfeeditem.md) | `agentfeeditemid` | `agentfeeditemid` |


## Source

Generated from [agentfeeditem (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='agentfeeditem')) on 2026-05-07.