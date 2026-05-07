---
logical: "msdyn_salesagenthandover"
display: "Trasferimento Agente di vendita"
entitySetName: "msdyn_salesagenthandovers"
primaryId: "msdyn_salesagenthandoverid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Trasferimento Agente di vendita

Questa tabella contiene i record dei trasferimenti dell'Agente di vendita.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesagenthandover` |
| Display name | Trasferimento Agente di vendita |
| Display (plural) | Trasferimenti Agente di vendita |
| Schema name | `msdyn_salesagenthandover` |
| Entity set (Web API) | `msdyn_salesagenthandovers` |
| Primary id attribute | `msdyn_salesagenthandoverid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesagenthandovers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesagenthandovers(<guid>)
POST /api/data/v9.2/msdyn_salesagenthandovers
PATCH /api/data/v9.2/msdyn_salesagenthandovers(<guid>)
DELETE /api/data/v9.2/msdyn_salesagenthandovers(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_handoveractions`, `msdyn_handoverintent`, `msdyn_leadrating`, `msdyn_name`, `msdyn_regardingid`, `msdyn_salesagenthandoverid`, `msdyn_salesagenthandovertarget`, `msdyn_salesagentrun`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesagenthandover_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesagenthandover_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesagenthandover_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesagenthandover_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesagenthandover` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesagenthandover` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesagenthandover` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesagenthandover` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_salesagenthandover_msdyn_salesagentrun` | [msdyn_salesagentrun](msdyn_salesagentrun.md) | `msdyn_salesagentrun` | `msdyn_salesagentrun` |
| `msdyn_salesagenthandover_regardingId_lead` | [lead](lead.md) | `msdyn_regardingid` | `msdyn_regardingId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesagenthandover_SyncErrors` | [msdyn_salesagenthandover](msdyn_salesagenthandover.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagenthandover` |
| `msdyn_salesagenthandover_AsyncOperations` | [msdyn_salesagenthandover](msdyn_salesagenthandover.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagenthandover` |
| `msdyn_salesagenthandover_MailboxTrackingFolders` | [msdyn_salesagenthandover](msdyn_salesagenthandover.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagenthandover` |
| `msdyn_salesagenthandover_UserEntityInstanceDatas` | [msdyn_salesagenthandover](msdyn_salesagenthandover.md) | `objectid` | `objectid_msdyn_salesagenthandover` |
| `msdyn_salesagenthandover_ProcessSession` | [msdyn_salesagenthandover](msdyn_salesagenthandover.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagenthandover` |
| `msdyn_salesagenthandover_BulkDeleteFailures` | [msdyn_salesagenthandover](msdyn_salesagenthandover.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesagenthandover` |
| `msdyn_salesagenthandover_PrincipalObjectAttributeAccesses` | [msdyn_salesagenthandover](msdyn_salesagenthandover.md) | `objectid` | `objectid_msdyn_salesagenthandover` |


## Source

Generated from [msdyn_salesagenthandover (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesagenthandover')) on 2026-05-07.