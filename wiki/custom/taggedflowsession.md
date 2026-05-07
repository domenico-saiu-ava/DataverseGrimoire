---
logical: "taggedflowsession"
display: "Sessione di flusso con tag"
entitySetName: "taggedflowsessions"
primaryId: "taggedflowsessionid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Sessione di flusso con tag

## Identity

| Property | Value |
| --- | --- |
| Logical name | `taggedflowsession` |
| Display name | Sessione di flusso con tag |
| Display (plural) | Sessioni di flusso con tag |
| Schema name | `taggedflowsession` |
| Entity set (Web API) | `taggedflowsessions` |
| Primary id attribute | `taggedflowsessionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/taggedflowsessions?$select=name&$top=10
GET /api/data/v9.2/taggedflowsessions(<guid>)
POST /api/data/v9.2/taggedflowsessions
PATCH /api/data/v9.2/taggedflowsessions(<guid>)
DELETE /api/data/v9.2/taggedflowsessions(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`flowsession`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `tag`, `taggedflowsessionid`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_taggedflowsession_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_taggedflowsession_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_taggedflowsession_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_taggedflowsession_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_taggedflowsession` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_taggedflowsession` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_taggedflowsession` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_taggedflowsession` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `taggedflowsession_FlowSession_flowsession` | [flowsession](flowsession.md) | `flowsession` | `FlowSession` |
| `taggedflowsession_tag_tag` | [tag](tag.md) | `tag` | `tag` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `taggedflowsession_SyncErrors` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedflowsession_AsyncOperations` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedflowsession_MailboxTrackingFolders` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedflowsession_UserEntityInstanceDatas` | [taggedflowsession](taggedflowsession.md) | `objectid` | `objectid_taggedflowsession` |
| `taggedflowsession_ProcessSession` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedflowsession_BulkDeleteFailures` | [taggedflowsession](taggedflowsession.md) | `regardingobjectid` | `regardingobjectid_taggedflowsession` |
| `taggedflowsession_PrincipalObjectAttributeAccesses` | [taggedflowsession](taggedflowsession.md) | `objectid` | `objectid_taggedflowsession` |


## Source

Generated from [taggedflowsession (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='taggedflowsession')) on 2026-05-07.