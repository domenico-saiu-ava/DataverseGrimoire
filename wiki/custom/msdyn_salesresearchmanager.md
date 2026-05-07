---
logical: "msdyn_salesresearchmanager"
display: "Responsabile ricerca vendite"
entitySetName: "msdyn_salesresearchmanagers"
primaryId: "msdyn_salesresearchmanagerid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Responsabile ricerca vendite

Questa tabella definisce l'accesso dell'utente a Agente di ricerca sulle vendite

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesresearchmanager` |
| Display name | Responsabile ricerca vendite |
| Display (plural) | Responsabili ricerca vendite |
| Schema name | `msdyn_salesresearchmanager` |
| Entity set (Web API) | `msdyn_salesresearchmanagers` |
| Primary id attribute | `msdyn_salesresearchmanagerid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesresearchmanagers?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesresearchmanagers(<guid>)
POST /api/data/v9.2/msdyn_salesresearchmanagers
PATCH /api/data/v9.2/msdyn_salesresearchmanagers(<guid>)
DELETE /api/data/v9.2/msdyn_salesresearchmanagers(<guid>)
```

## Attributes

Writable: **9** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_salesresearchmanagerid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesresearchmanager_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesresearchmanager_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesresearchmanager_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesresearchmanager_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_salesresearchmanager` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_salesresearchmanager` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_salesresearchmanager` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_salesresearchmanager` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesresearchmanager_SyncErrors` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_DuplicateMatchingRecord` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_DuplicateBaseRecord` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `baserecordid` | `baserecordid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_AsyncOperations` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_MailboxTrackingFolders` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_UserEntityInstanceDatas` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `objectid` | `objectid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_ProcessSession` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_BulkDeleteFailures` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesresearchmanager` |
| `msdyn_salesresearchmanager_PrincipalObjectAttributeAccesses` | [msdyn_salesresearchmanager](msdyn_salesresearchmanager.md) | `objectid` | `objectid_msdyn_salesresearchmanager` |


## Source

Generated from [msdyn_salesresearchmanager (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesresearchmanager')) on 2026-05-07.