---
logical: "msdyn_competitorwebresearchagenttrigger"
display: "Trigger agente di ricerca Web"
entitySetName: "msdyn_competitorwebresearchagenttriggers"
primaryId: "msdyn_competitorwebresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger agente di ricerca Web

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_competitorwebresearchagenttrigger` |
| Display name | Trigger agente di ricerca Web |
| Display (plural) | Trigger agente di ricerca Web |
| Schema name | `msdyn_competitorwebresearchagenttrigger` |
| Entity set (Web API) | `msdyn_competitorwebresearchagenttriggers` |
| Primary id attribute | `msdyn_competitorwebresearchagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_competitorwebresearchagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_competitorwebresearchagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_competitorwebresearchagenttriggers
PATCH /api/data/v9.2/msdyn_competitorwebresearchagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_competitorwebresearchagenttriggers(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_competitorwebresearchagenttriggerid`, `msdyn_input`, `msdyn_leadcompany`, `msdyn_name`, `msdyn_reference_id`, `msdyn_retrycount`, `msdyn_sellercompany`, `msdyn_trigger_source`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_competitorwebresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_competitorwebresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_competitorwebresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_competitorwebresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_competitorwebresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_competitorwebresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_competitorwebresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_competitorwebresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_competitorwebresearchagenttrigger_SyncErrors` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_DuplicateMatchingRecord` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_DuplicateBaseRecord` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `baserecordid` | `baserecordid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_AsyncOperations` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_MailboxTrackingFolders` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_UserEntityInstanceDatas` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `objectid` | `objectid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_ProcessSession` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_BulkDeleteFailures` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorwebresearchagenttrigger` |
| `msdyn_competitorwebresearchagenttrigger_PrincipalObjectAttributeAccesses` | [msdyn_competitorwebresearchagenttrigger](msdyn_competitorwebresearchagenttrigger.md) | `objectid` | `objectid_msdyn_competitorwebresearchagenttrigger` |


## Source

Generated from [msdyn_competitorwebresearchagenttrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_competitorwebresearchagenttrigger')) on 2026-05-07.