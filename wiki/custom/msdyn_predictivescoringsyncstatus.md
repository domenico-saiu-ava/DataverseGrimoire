---
logical: "msdyn_predictivescoringsyncstatus"
display: "Stato sincronizzazione punteggio predittivo"
entitySetName: "msdyn_predictivescoringsyncstatuses"
primaryId: "msdyn_predictivescoringsyncstatusid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Stato sincronizzazione punteggio predittivo

Entità interna utilizzata per archiviare lo stato di sincronizzazione per le entità di base del punteggio predittivo.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_predictivescoringsyncstatus` |
| Display name | Stato sincronizzazione punteggio predittivo |
| Display (plural) | Stati di sincronizzazione del punteggio predittivo |
| Schema name | `msdyn_predictivescoringsyncstatus` |
| Entity set (Web API) | `msdyn_predictivescoringsyncstatuses` |
| Primary id attribute | `msdyn_predictivescoringsyncstatusid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_predictivescoringsyncstatuses?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_predictivescoringsyncstatuses(<guid>)
POST /api/data/v9.2/msdyn_predictivescoringsyncstatuses
PATCH /api/data/v9.2/msdyn_predictivescoringsyncstatuses(<guid>)
DELETE /api/data/v9.2/msdyn_predictivescoringsyncstatuses(<guid>)
```

## Attributes

Writable: **12** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_calculatedfieldcount`, `msdyn_eacstatusmodifiedon`, `msdyn_eacsyncstatus`, `msdyn_name`, `msdyn_predictivescoringsyncstatusid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_predictivescoringsyncstatus_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_predictivescoringsyncstatus_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_predictivescoringsyncstatus_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_predictivescoringsyncstatus_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_predictivescoringsyncstatus` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_predictivescoringsyncstatus` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_predictivescoringsyncstatus` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_predictivescoringsyncstatus` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_predictivescoringsyncstatus_SyncErrors` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_DuplicateMatchingRecord` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_DuplicateBaseRecord` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `baserecordid` | `baserecordid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_AsyncOperations` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_MailboxTrackingFolders` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_UserEntityInstanceDatas` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `objectid` | `objectid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_ProcessSession` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_BulkDeleteFailures` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `regardingobjectid` | `regardingobjectid_msdyn_predictivescoringsyncstatus` |
| `msdyn_predictivescoringsyncstatus_PrincipalObjectAttributeAccesses` | [msdyn_predictivescoringsyncstatus](msdyn_predictivescoringsyncstatus.md) | `objectid` | `objectid_msdyn_predictivescoringsyncstatus` |


## Source

Generated from [msdyn_predictivescoringsyncstatus (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_predictivescoringsyncstatus')) on 2026-05-07.