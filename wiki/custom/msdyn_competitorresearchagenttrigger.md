---
logical: "msdyn_competitorresearchagenttrigger"
display: "Trigger agente di ricerca concorrente"
entitySetName: "msdyn_competitorresearchagenttriggers"
primaryId: "msdyn_competitorresearchagenttriggerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trigger agente di ricerca concorrente

Trigger dell'agente di ricerca concorrente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_competitorresearchagenttrigger` |
| Display name | Trigger agente di ricerca concorrente |
| Display (plural) | Trigger dell'agente di ricerca concorrente |
| Schema name | `msdyn_competitorresearchagenttrigger` |
| Entity set (Web API) | `msdyn_competitorresearchagenttriggers` |
| Primary id attribute | `msdyn_competitorresearchagenttriggerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_competitorresearchagenttriggers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_competitorresearchagenttriggers(<guid>)
POST /api/data/v9.2/msdyn_competitorresearchagenttriggers
PATCH /api/data/v9.2/msdyn_competitorresearchagenttriggers(<guid>)
DELETE /api/data/v9.2/msdyn_competitorresearchagenttriggers(<guid>)
```

## Attributes

Writable: **16** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_competitorresearchagenttriggerid`, `msdyn_input`, `msdyn_leadcompany`, `msdyn_name`, `msdyn_reference_id`, `msdyn_retrycount`, `msdyn_sellercompany`, `msdyn_trigger_source`, `msdyn_unprocessedinput`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_competitorresearchagenttrigger_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_competitorresearchagenttrigger_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_competitorresearchagenttrigger_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_competitorresearchagenttrigger_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_competitorresearchagenttrigger` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_competitorresearchagenttrigger` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_competitorresearchagenttrigger` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_competitorresearchagenttrigger` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_competitorresearchagenttrigger_SyncErrors` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_DuplicateMatchingRecord` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_DuplicateBaseRecord` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `baserecordid` | `baserecordid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_AsyncOperations` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_MailboxTrackingFolders` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_UserEntityInstanceDatas` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `objectid` | `objectid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_ProcessSession` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_BulkDeleteFailures` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `regardingobjectid` | `regardingobjectid_msdyn_competitorresearchagenttrigger` |
| `msdyn_competitorresearchagenttrigger_PrincipalObjectAttributeAccesses` | [msdyn_competitorresearchagenttrigger](msdyn_competitorresearchagenttrigger.md) | `objectid` | `objectid_msdyn_competitorresearchagenttrigger` |


## Source

Generated from [msdyn_competitorresearchagenttrigger (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_competitorresearchagenttrigger')) on 2026-05-07.