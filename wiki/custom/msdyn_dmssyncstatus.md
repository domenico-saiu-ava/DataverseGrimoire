---
logical: "msdyn_dmssyncstatus"
display: "Stato sincronizzazione Servizio Migrazione del database"
entitySetName: "msdyn_dmssyncstatuses"
primaryId: "msdyn_dmssyncstatusid"
primaryName: "msdyn_statusuniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato sincronizzazione Servizio Migrazione del database

Entità per salvare gli stati di sincronizzazione DMS.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmssyncstatus` |
| Display name | Stato sincronizzazione Servizio Migrazione del database |
| Display (plural) | Stato sincronizzazione Servizio Migrazione del database |
| Schema name | `msdyn_dmssyncstatus` |
| Entity set (Web API) | `msdyn_dmssyncstatuses` |
| Primary id attribute | `msdyn_dmssyncstatusid` |
| Primary name attribute | `msdyn_statusuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmssyncstatuses?$select=msdyn_statusuniquename&$top=10
GET /api/data/v9.2/msdyn_dmssyncstatuses(<guid>)
POST /api/data/v9.2/msdyn_dmssyncstatuses
PATCH /api/data/v9.2/msdyn_dmssyncstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_dmssyncstatuses(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_dmssyncstatusid`, `msdyn_endtime`, `msdyn_errordetails`, `msdyn_lookupfield_dmssyncrequest`, `msdyn_starttime`, `msdyn_statusuniquename`, `msdyn_syncdetails`, `msdyn_syncstatus`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dmssyncstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmssyncstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmssyncstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmssyncstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dmssyncstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dmssyncstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dmssyncstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dmssyncstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_lookupfield_dmssyncrequest` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `msdyn_lookupfield_dmssyncrequest` | `msdyn_lookupfield_dmssyncrequest` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmssyncstatus_SyncErrors` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_dmssyncstatus_AsyncOperations` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_dmssyncstatus_MailboxTrackingFolders` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_dmssyncstatus_UserEntityInstanceDatas` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `objectid` | `objectid_msdyn_dmssyncstatus` |
| `msdyn_dmssyncstatus_ProcessSession` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_dmssyncstatus_BulkDeleteFailures` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncstatus` |
| `msdyn_dmssyncstatus_PrincipalObjectAttributeAccesses` | [msdyn_dmssyncstatus](msdyn_dmssyncstatus.md) | `objectid` | `objectid_msdyn_dmssyncstatus` |


## Source

Generated from [msdyn_dmssyncstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dmssyncstatus')) on 2026-05-07.