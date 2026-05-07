---
logical: "msdyn_ocliveworkitemsentiment"
display: "Valutazione sulla conversazione"
entitySetName: "msdyn_ocliveworkitemsentiments"
primaryId: "msdyn_ocliveworkitemsentimentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Valutazione sulla conversazione

Archivia la valutazione del cliente generata dall'apprendimento automatico della comunicazione tra l'utente e il cliente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocliveworkitemsentiment` |
| Display name | Valutazione sulla conversazione |
| Display (plural) | Valutazione sulla conversazione |
| Schema name | `msdyn_ocliveworkitemsentiment` |
| Entity set (Web API) | `msdyn_ocliveworkitemsentiments` |
| Primary id attribute | `msdyn_ocliveworkitemsentimentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocliveworkitemsentiments?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocliveworkitemsentiments(<guid>)
POST /api/data/v9.2/msdyn_ocliveworkitemsentiments
PATCH /api/data/v9.2/msdyn_ocliveworkitemsentiments(<guid>)
DELETE /api/data/v9.2/msdyn_ocliveworkitemsentiments(<guid>)
```

## Attributes

Writable: **15** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_name`, `msdyn_ocliveworkitemid`, `msdyn_ocliveworkitemsentimentid`, `msdyn_predictedlanguage`, `msdyn_sentimentmodelversion`, `msdyn_sentimentpulse`, `msdyn_sentimenttransition`, `msdyn_sentimentzone`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_ocliveworkitemsentiment_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocliveworkitemsentiment_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocliveworkitemsentiment_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocliveworkitemsentiment_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_ocliveworkitemsentiment` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_ocliveworkitemsentiment` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_ocliveworkitemsentiment` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_ocliveworkitemsentiment` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid` | [msdyn_ocliveworkitem](msdyn_ocliveworkitem.md) | `msdyn_ocliveworkitemid` | `msdyn_ocliveworkitemid` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocliveworkitemsentiment_SyncErrors` | [msdyn_ocliveworkitemsentiment](msdyn_ocliveworkitemsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemsentiment` |
| `msdyn_ocliveworkitemsentiment_AsyncOperations` | [msdyn_ocliveworkitemsentiment](msdyn_ocliveworkitemsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemsentiment` |
| `msdyn_ocliveworkitemsentiment_MailboxTrackingFolders` | [msdyn_ocliveworkitemsentiment](msdyn_ocliveworkitemsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemsentiment` |
| `msdyn_ocliveworkitemsentiment_UserEntityInstanceDatas` | [msdyn_ocliveworkitemsentiment](msdyn_ocliveworkitemsentiment.md) | `objectid` | `objectid_msdyn_ocliveworkitemsentiment` |
| `msdyn_ocliveworkitemsentiment_ProcessSession` | [msdyn_ocliveworkitemsentiment](msdyn_ocliveworkitemsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemsentiment` |
| `msdyn_ocliveworkitemsentiment_BulkDeleteFailures` | [msdyn_ocliveworkitemsentiment](msdyn_ocliveworkitemsentiment.md) | `regardingobjectid` | `regardingobjectid_msdyn_ocliveworkitemsentiment` |
| `msdyn_ocliveworkitemsentiment_PrincipalObjectAttributeAccesses` | [msdyn_ocliveworkitemsentiment](msdyn_ocliveworkitemsentiment.md) | `objectid` | `objectid_msdyn_ocliveworkitemsentiment` |


## Source

Generated from [msdyn_ocliveworkitemsentiment (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_ocliveworkitemsentiment')) on 2026-05-07.