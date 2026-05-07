---
logical: "msdyn_agentlanguage"
display: "Lingua agente"
entitySetName: "msdyn_agentlanguages"
primaryId: "msdyn_agentlanguageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Lingua agente

Rappresenta l'associazione degli utenti alla lingua 

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_agentlanguage` |
| Display name | Lingua agente |
| Display (plural) | Lingue agente |
| Schema name | `msdyn_agentlanguage` |
| Entity set (Web API) | `msdyn_agentlanguages` |
| Primary id attribute | `msdyn_agentlanguageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_agentlanguages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_agentlanguages(<guid>)
POST /api/data/v9.2/msdyn_agentlanguages
PATCH /api/data/v9.2/msdyn_agentlanguages(<guid>)
DELETE /api/data/v9.2/msdyn_agentlanguages(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_agentlanguageid`, `msdyn_languageid`, `msdyn_name`, `msdyn_systemuserid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_agentlanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_agentlanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_agentlanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_agentlanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_agentlanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_agentlanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_agentlanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_agentlanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_language_msdyn_agentlanguage_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid` |
| `msdyn_systemuser_msdyn_agentlanguage_systemuserid` | [systemuser](systemuser.md) | `msdyn_systemuserid` | `msdyn_systemuserid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentlanguage_SyncErrors` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_DuplicateMatchingRecord` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_DuplicateBaseRecord` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `baserecordid` | `baserecordid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_AsyncOperations` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_MailboxTrackingFolders` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_UserEntityInstanceDatas` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `objectid` | `objectid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_ProcessSession` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_BulkDeleteFailures` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_agentlanguage` |
| `msdyn_agentlanguage_PrincipalObjectAttributeAccesses` | [msdyn_agentlanguage](msdyn_agentlanguage.md) | `objectid` | `objectid_msdyn_agentlanguage` |


## Source

Generated from [msdyn_agentlanguage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_agentlanguage')) on 2026-05-07.