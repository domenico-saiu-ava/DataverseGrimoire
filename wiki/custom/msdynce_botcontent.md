---
logical: "msdynce_botcontent"
display: "BotContent"
entitySetName: "msdynce_botcontents"
primaryId: "msdynce_botcontentid"
primaryName: "msdynce_autonumber"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# BotContent

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdynce_botcontent` |
| Display name | BotContent |
| Display (plural) | BotContents |
| Schema name | `msdynce_botcontent` |
| Entity set (Web API) | `msdynce_botcontents` |
| Primary id attribute | `msdynce_botcontentid` |
| Primary name attribute | `msdynce_autonumber` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdynce_botcontents?$select=msdynce_autonumber&$top=10
GET /api/data/v9.2/msdynce_botcontents(<guid>)
POST /api/data/v9.2/msdynce_botcontents
PATCH /api/data/v9.2/msdynce_botcontents(<guid>)
DELETE /api/data/v9.2/msdynce_botcontents(<guid>)
```

## Attributes

Writable: **11** · Read-only: **10**

### Writable

`importsequencenumber`, `msdynce_autonumber`, `msdynce_botcontentid`, `msdynce_botid`, `msdynce_state`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdynce_botcontent_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdynce_botcontent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdynce_botcontent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdynce_botcontent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdynce_botcontent` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdynce_botcontent` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdynce_botcontent` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdynce_botcontent` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynce_botcontent_SyncErrors` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msdynce_botcontent_AsyncOperations` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msdynce_botcontent_MailboxTrackingFolders` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msdynce_botcontent_UserEntityInstanceDatas` | [msdynce_botcontent](msdynce_botcontent.md) | `objectid` | `objectid_msdynce_botcontent` |
| `msdynce_botcontent_ProcessSession` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msdynce_botcontent_BulkDeleteFailures` | [msdynce_botcontent](msdynce_botcontent.md) | `regardingobjectid` | `regardingobjectid_msdynce_botcontent` |
| `msdynce_botcontent_PrincipalObjectAttributeAccesses` | [msdynce_botcontent](msdynce_botcontent.md) | `objectid` | `objectid_msdynce_botcontent` |


## Source

Generated from [msdynce_botcontent (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdynce_botcontent')) on 2026-05-07.