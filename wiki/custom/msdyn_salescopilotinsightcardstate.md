---
logical: "msdyn_salescopilotinsightcardstate"
display: "Stato scheda di informazioni dettagliate Sales Copilot"
entitySetName: "msdyn_salescopilotinsightcardstates"
primaryId: "msdyn_salescopilotinsightcardstateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato scheda di informazioni dettagliate Sales Copilot

Questa entità è usata per archiviare le azioni eseguite dagli utenti sull'entità, ad esempio Posponi/Ignora.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salescopilotinsightcardstate` |
| Display name | Stato scheda di informazioni dettagliate Sales Copilot |
| Display (plural) | Stati scheda di informazioni dettagliate Sales Copilot |
| Schema name | `msdyn_salescopilotinsightcardstate` |
| Entity set (Web API) | `msdyn_salescopilotinsightcardstates` |
| Primary id attribute | `msdyn_salescopilotinsightcardstateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salescopilotinsightcardstates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salescopilotinsightcardstates(<guid>)
POST /api/data/v9.2/msdyn_salescopilotinsightcardstates
PATCH /api/data/v9.2/msdyn_salescopilotinsightcardstates(<guid>)
DELETE /api/data/v9.2/msdyn_salescopilotinsightcardstates(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_insightcardstate`, `msdyn_name`, `msdyn_regardinginsightid`, `msdyn_regardinginsightlogicalname`, `msdyn_salescopilotinsightcardstateid`, `msdyn_snoozetill`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salescopilotinsightcardstate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salescopilotinsightcardstate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salescopilotinsightcardstate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salescopilotinsightcardstate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salescopilotinsightcardstate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salescopilotinsightcardstate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salescopilotinsightcardstate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salescopilotinsightcardstate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salescopilotinsightcardstate_SyncErrors` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_DuplicateMatchingRecord` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_DuplicateBaseRecord` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `baserecordid` | `baserecordid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_AsyncOperations` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_MailboxTrackingFolders` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_UserEntityInstanceDatas` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `objectid` | `objectid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_ProcessSession` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_BulkDeleteFailures` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `regardingobjectid` | `regardingobjectid_msdyn_salescopilotinsightcardstate` |
| `msdyn_salescopilotinsightcardstate_PrincipalObjectAttributeAccesses` | [msdyn_salescopilotinsightcardstate](msdyn_salescopilotinsightcardstate.md) | `objectid` | `objectid_msdyn_salescopilotinsightcardstate` |


## Source

Generated from [msdyn_salescopilotinsightcardstate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salescopilotinsightcardstate')) on 2026-05-07.