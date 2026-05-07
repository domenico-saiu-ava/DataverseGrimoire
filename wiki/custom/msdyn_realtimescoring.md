---
logical: "msdyn_realtimescoring"
display: "Punteggio in tempo reale"
entitySetName: "msdyn_realtimescorings"
primaryId: "msdyn_realtimescoringid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Punteggio in tempo reale

Archivia le informazioni sui metadati per il punteggio in tempo reale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_realtimescoring` |
| Display name | Punteggio in tempo reale |
| Display (plural) | Punteggi in tempo reale |
| Schema name | `msdyn_realtimescoring` |
| Entity set (Web API) | `msdyn_realtimescorings` |
| Primary id attribute | `msdyn_realtimescoringid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_realtimescorings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_realtimescorings(<guid>)
POST /api/data/v9.2/msdyn_realtimescorings
PATCH /api/data/v9.2/msdyn_realtimescorings(<guid>)
DELETE /api/data/v9.2/msdyn_realtimescorings(<guid>)
```

## Attributes

Writable: **13** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_lastcreatedon`, `msdyn_lastversionnumber`, `msdyn_name`, `msdyn_predictionname`, `msdyn_realtimescoringid`, `msdyn_trainingconfig`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_realtimescoring_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_realtimescoring_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_realtimescoring_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_realtimescoring_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_realtimescoring` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_realtimescoring` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_realtimescoring` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_realtimescoring` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_realtimescoring_SyncErrors` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_DuplicateMatchingRecord` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_DuplicateBaseRecord` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `baserecordid` | `baserecordid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_AsyncOperations` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_MailboxTrackingFolders` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_UserEntityInstanceDatas` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `objectid` | `objectid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_ProcessSession` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_BulkDeleteFailures` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `regardingobjectid` | `regardingobjectid_msdyn_realtimescoring` |
| `msdyn_realtimescoring_PrincipalObjectAttributeAccesses` | [msdyn_realtimescoring](msdyn_realtimescoring.md) | `objectid` | `objectid_msdyn_realtimescoring` |


## Source

Generated from [msdyn_realtimescoring (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_realtimescoring')) on 2026-05-07.