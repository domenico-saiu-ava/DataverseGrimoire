---
logical: "msdyn_ocsessionsentiment"
display: "Valutazione della sessione"
entitySetName: "msdyn_ocsessionsentiments"
primaryId: "msdyn_ocsessionsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valutazione della sessione

Archivia la valutazione del livello di sessione per le interazioni del cliente calcolate tramite intelligenza artificiale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocsessionsentiment` |
| Display name | Valutazione della sessione |
| Display (plural) | Valutazioni della sessione |
| Schema name | `msdyn_ocsessionsentiment` |
| Entity set (Web API) | `msdyn_ocsessionsentiments` |
| Primary id attribute | `msdyn_ocsessionsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocsessionsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocsessionsentiments(<guid>)
POST /api/data/v9.2/msdyn_ocsessionsentiments
PATCH /api/data/v9.2/msdyn_ocsessionsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_ocsessionsentiments(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_ocsessionsentimentid`, `msdyn_omnichannelsession`, `msdyn_predictedlanguage`, `msdyn_sentimentmodelversion`, `msdyn_sentimentpulse`, `msdyn_sentimenttransition`, `msdyn_sentimentzone`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocsessionsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocsessionsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocsessionsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocsessionsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocsessionsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocsessionsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocsessionsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocsessionsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocsession_msdyn_ocsessionsentiment_omnichannelsession` | [msdyn_ocsession](msdyn_ocsession.md) | `msdyn_omnichannelsession` | `msdyn_omnichannelsession` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocsessionsentiment_SyncErrors` | [msdyn_ocsessionsentiment](msdyn_ocsessionsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionsentiment` |
| `msdyn_ocsessionsentiment_AsyncOperations` | [msdyn_ocsessionsentiment](msdyn_ocsessionsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionsentiment` |
| `msdyn_ocsessionsentiment_MailboxTrackingFolders` | [msdyn_ocsessionsentiment](msdyn_ocsessionsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionsentiment` |
| `msdyn_ocsessionsentiment_UserEntityInstanceDatas` | [msdyn_ocsessionsentiment](msdyn_ocsessionsentiment.md) | `objectid` | `objectid_msdyn_ocsessionsentiment` |
| `msdyn_ocsessionsentiment_ProcessSession` | [msdyn_ocsessionsentiment](msdyn_ocsessionsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionsentiment` |
| `msdyn_ocsessionsentiment_BulkDeleteFailures` | [msdyn_ocsessionsentiment](msdyn_ocsessionsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocsessionsentiment` |
| `msdyn_ocsessionsentiment_PrincipalObjectAttributeAccesses` | [msdyn_ocsessionsentiment](msdyn_ocsessionsentiment.md) | `objectid` | `objectid_msdyn_ocsessionsentiment` |


## Source

Generated from [msdyn_ocsessionsentiment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocsessionsentiment')) on 2026-05-07.