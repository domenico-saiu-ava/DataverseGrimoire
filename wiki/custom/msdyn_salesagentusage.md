---
logical: "msdyn_salesagentusage"
display: "SalesAgentUsage"
entitySetName: "msdyn_salesagentusages"
primaryId: "msdyn_salesagentusageid"
primaryName: "msdyn_eventid"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# SalesAgentUsage

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagentusage` |
| Display name | SalesAgentUsage |
| Display (plural) | SalesAgentUsages |
| Schema name | `msdyn_SalesAgentUsage` |
| Entity set (Web API) | `msdyn_salesagentusages` |
| Primary id attribute | `msdyn_salesagentusageid` |
| Primary name attribute | `msdyn_eventid` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagentusages?$select=msdyn_eventid&$top=10
GET /api/data/v9.2/msdyn_salesagentusages(<guid>)
POST /api/data/v9.2/msdyn_salesagentusages
PATCH /api/data/v9.2/msdyn_salesagentusages(<guid>)
DELETE /api/data/v9.2/msdyn_salesagentusages(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentname`, `msdyn_eventdate`, `msdyn_eventid`, `msdyn_eventjson`, `msdyn_salesagentusageid`, `msdyn_userid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagentusage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagentusage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagentusage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagentusage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagentusage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagentusage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagentusage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagentusage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagentusage_SyncErrors` | [msdyn_salesagentusage](msdyn_salesagentusage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentusage` |
| `msdyn_salesagentusage_AsyncOperations` | [msdyn_salesagentusage](msdyn_salesagentusage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentusage` |
| `msdyn_salesagentusage_MailboxTrackingFolders` | [msdyn_salesagentusage](msdyn_salesagentusage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentusage` |
| `msdyn_salesagentusage_UserEntityInstanceDatas` | [msdyn_salesagentusage](msdyn_salesagentusage.md) | `objectid` | `objectid_msdyn_salesagentusage` |
| `msdyn_salesagentusage_ProcessSession` | [msdyn_salesagentusage](msdyn_salesagentusage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentusage` |
| `msdyn_salesagentusage_BulkDeleteFailures` | [msdyn_salesagentusage](msdyn_salesagentusage.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagentusage` |
| `msdyn_salesagentusage_PrincipalObjectAttributeAccesses` | [msdyn_salesagentusage](msdyn_salesagentusage.md) | `objectid` | `objectid_msdyn_salesagentusage` |


## Source

Generated from [msdyn_salesagentusage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagentusage')) on 2026-05-07.