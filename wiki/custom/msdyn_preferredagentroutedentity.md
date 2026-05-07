---
logical: "msdyn_preferredagentroutedentity"
display: "Entità routing agente preferito"
entitySetName: "msdyn_preferredagentroutedentities"
primaryId: "msdyn_preferredagentroutedentityid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Entità routing agente preferito

Tabella routing dell'agente preferito utilizzata per archiviare informazioni sul nome della tabella con routing e sulla colonna ID cliente della tabella

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_preferredagentroutedentity` |
| Display name | Entità routing agente preferito |
| Display (plural) | Entità routing agente preferito |
| Schema name | `msdyn_preferredagentroutedentity` |
| Entity set (Web API) | `msdyn_preferredagentroutedentities` |
| Primary id attribute | `msdyn_preferredagentroutedentityid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_preferredagentroutedentities?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_preferredagentroutedentities(<guid>)
POST /api/data/v9.2/msdyn_preferredagentroutedentities
PATCH /api/data/v9.2/msdyn_preferredagentroutedentities(<guid>)
DELETE /api/data/v9.2/msdyn_preferredagentroutedentities(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_customeridentifiername`, `msdyn_name`, `msdyn_preferredagentroutedentityid`, `msdyn_routedentityname`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_preferredagentroutedentity_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_preferredagentroutedentity_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_preferredagentroutedentity_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_preferredagentroutedentity_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_preferredagentroutedentity` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_preferredagentroutedentity` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_preferredagentroutedentity` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_preferredagentroutedentity` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_preferredagentroutedentity_SyncErrors` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_DuplicateMatchingRecord` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_DuplicateBaseRecord` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `baserecordid` | `baserecordid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_AsyncOperations` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_MailboxTrackingFolders` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_UserEntityInstanceDatas` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `objectid` | `objectid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_ProcessSession` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_BulkDeleteFailures` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `regardingobjectid` | `regardingobjectid_msdyn_preferredagentroutedentity` |
| `msdyn_preferredagentroutedentity_PrincipalObjectAttributeAccesses` | [msdyn_preferredagentroutedentity](msdyn_preferredagentroutedentity.md) | `objectid` | `objectid_msdyn_preferredagentroutedentity` |


## Source

Generated from [msdyn_preferredagentroutedentity (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_preferredagentroutedentity')) on 2026-05-07.