---
logical: "msdyn_dmssyncrequest"
display: "Richiesta di sincronizzazione Servizio Migrazione del database"
entitySetName: "msdyn_dmssyncrequests"
primaryId: "msdyn_dmssyncrequestid"
primaryName: "msdyn_requestuniquename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Richiesta di sincronizzazione Servizio Migrazione del database

Entità per salvare le richieste di sincronizzazione DMS.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dmssyncrequest` |
| Display name | Richiesta di sincronizzazione Servizio Migrazione del database |
| Display (plural) | Richiesta di sincronizzazione Servizio Migrazione del database |
| Schema name | `msdyn_dmssyncrequest` |
| Entity set (Web API) | `msdyn_dmssyncrequests` |
| Primary id attribute | `msdyn_dmssyncrequestid` |
| Primary name attribute | `msdyn_requestuniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dmssyncrequests?$select=msdyn_requestuniquename&$top=10
GET /api/data/v9.2/msdyn_dmssyncrequests(<guid>)
POST /api/data/v9.2/msdyn_dmssyncrequests
PATCH /api/data/v9.2/msdyn_dmssyncrequests(<guid>)
DELETE /api/data/v9.2/msdyn_dmssyncrequests(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_additionalproperties`, `msdyn_correlationid`, `msdyn_dmssyncrequestid`, `msdyn_entitymapping`, `msdyn_requesttype`, `msdyn_requestuniquename`, `msdyn_syncparameters`, `msdyn_syncscenario`, `msdyn_userobjectid`, `msdyn_usertenantid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_dmssyncrequest_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dmssyncrequest_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dmssyncrequest_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dmssyncrequest_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_dmssyncrequest` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_dmssyncrequest` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_dmssyncrequest` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_dmssyncrequest` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dmssyncrequest_SyncErrors` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncrequest_AsyncOperations` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncrequest_MailboxTrackingFolders` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncrequest_UserEntityInstanceDatas` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `objectid` | `objectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncrequest_ProcessSession` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncrequest_BulkDeleteFailures` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `regardingobjectid` | `regardingobjectid_msdyn_dmssyncrequest` |
| `msdyn_dmssyncrequest_PrincipalObjectAttributeAccesses` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `objectid` | `objectid_msdyn_dmssyncrequest` |
| `msdyn_lookupfield_dmssyncrequest` | [msdyn_dmssyncrequest](msdyn_dmssyncrequest.md) | `msdyn_lookupfield_dmssyncrequest` | `msdyn_lookupfield_dmssyncrequest` |


## Source

Generated from [msdyn_dmssyncrequest (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_dmssyncrequest')) on 2026-05-07.