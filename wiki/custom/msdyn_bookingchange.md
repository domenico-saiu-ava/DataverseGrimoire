---
logical: "msdyn_bookingchange"
display: "Modifica prenotazione"
entitySetName: "msdyn_bookingchanges"
primaryId: "msdyn_bookingchangeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Modifica prenotazione

Entità interna utilizzata per tener traccia delle modifiche che influiscono sulla scheda di pianificazione.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_bookingchange` |
| Display name | Modifica prenotazione |
| Display (plural) | Modifiche prenotazione |
| Schema name | `msdyn_bookingchange` |
| Entity set (Web API) | `msdyn_bookingchanges` |
| Primary id attribute | `msdyn_bookingchangeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_bookingchanges?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_bookingchanges(<guid>)
POST /api/data/v9.2/msdyn_bookingchanges
PATCH /api/data/v9.2/msdyn_bookingchanges(<guid>)
DELETE /api/data/v9.2/msdyn_bookingchanges(<guid>)
```

## Attributes

Writable: **10** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_bookingchangeid`, `msdyn_changesjson`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_bookingchange_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_bookingchange_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_bookingchange_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_bookingchange_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_bookingchange` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_bookingchange` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_bookingchange` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_bookingchange` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_bookingchange_SyncErrors` | [msdyn_bookingchange](msdyn_bookingchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingchange` |
| `msdyn_bookingchange_AsyncOperations` | [msdyn_bookingchange](msdyn_bookingchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingchange` |
| `msdyn_bookingchange_MailboxTrackingFolders` | [msdyn_bookingchange](msdyn_bookingchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingchange` |
| `msdyn_bookingchange_UserEntityInstanceDatas` | [msdyn_bookingchange](msdyn_bookingchange.md) | `objectid` | `objectid_msdyn_bookingchange` |
| `msdyn_bookingchange_ProcessSession` | [msdyn_bookingchange](msdyn_bookingchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingchange` |
| `msdyn_bookingchange_BulkDeleteFailures` | [msdyn_bookingchange](msdyn_bookingchange.md) | `regardingobjectid` | `regardingobjectid_msdyn_bookingchange` |
| `msdyn_bookingchange_PrincipalObjectAttributeAccesses` | [msdyn_bookingchange](msdyn_bookingchange.md) | `objectid` | `objectid_msdyn_bookingchange` |


## Source

Generated from [msdyn_bookingchange (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_bookingchange')) on 2026-05-07.