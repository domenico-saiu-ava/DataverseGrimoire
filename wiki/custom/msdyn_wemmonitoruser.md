---
logical: "msdyn_wemmonitoruser"
display: "Utente monitoraggio WEM"
entitySetName: "msdyn_wemmonitorusers"
primaryId: "msdyn_wemmonitoruserid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Utente monitoraggio WEM

Tabella bridge tra il monitoraggio WEM e l'utente.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_wemmonitoruser` |
| Display name | Utente monitoraggio WEM |
| Display (plural) | Utenti monitoraggio WEM |
| Schema name | `msdyn_wemmonitoruser` |
| Entity set (Web API) | `msdyn_wemmonitorusers` |
| Primary id attribute | `msdyn_wemmonitoruserid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_wemmonitorusers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_wemmonitorusers(<guid>)
POST /api/data/v9.2/msdyn_wemmonitorusers
PATCH /api/data/v9.2/msdyn_wemmonitorusers(<guid>)
DELETE /api/data/v9.2/msdyn_wemmonitorusers(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_expireson`, `msdyn_monitoredby`, `msdyn_name`, `msdyn_wemmonitor`, `msdyn_wemmonitoruserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_wemmonitoruser_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_wemmonitoruser_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_wemmonitoruser_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_wemmonitoruser_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_wemmonitoruser` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_wemmonitoruser` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_wemmonitoruser` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_wemmonitoruser` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_wemmonitoruser_msdyn_wemmonitor_msdyn_wemmonitor` | [msdyn_wemmonitor](msdyn_wemmonitor.md) | `msdyn_wemmonitor` | `msdyn_wemmonitor` |
| `msdyn_wemmonitoruser_monitoredby_SystemUser` | [systemuser](systemuser.md) | `msdyn_monitoredby` | `msdyn_monitoredby` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_wemmonitoruser_SyncErrors` | [msdyn_wemmonitoruser](msdyn_wemmonitoruser.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitoruser` |
| `msdyn_wemmonitoruser_AsyncOperations` | [msdyn_wemmonitoruser](msdyn_wemmonitoruser.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitoruser` |
| `msdyn_wemmonitoruser_MailboxTrackingFolders` | [msdyn_wemmonitoruser](msdyn_wemmonitoruser.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitoruser` |
| `msdyn_wemmonitoruser_UserEntityInstanceDatas` | [msdyn_wemmonitoruser](msdyn_wemmonitoruser.md) | `objectid` | `objectid_msdyn_wemmonitoruser` |
| `msdyn_wemmonitoruser_ProcessSession` | [msdyn_wemmonitoruser](msdyn_wemmonitoruser.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitoruser` |
| `msdyn_wemmonitoruser_BulkDeleteFailures` | [msdyn_wemmonitoruser](msdyn_wemmonitoruser.md) | `regardingobjectid` | `regardingobjectid_msdyn_wemmonitoruser` |
| `msdyn_wemmonitoruser_PrincipalObjectAttributeAccesses` | [msdyn_wemmonitoruser](msdyn_wemmonitoruser.md) | `objectid` | `objectid_msdyn_wemmonitoruser` |


## Source

Generated from [msdyn_wemmonitoruser (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_wemmonitoruser')) on 2026-05-07.