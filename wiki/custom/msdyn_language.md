---
logical: "msdyn_language"
display: "Gerarchia lingua"
entitySetName: "msdyn_languages"
primaryId: "msdyn_languageid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Gerarchia lingua

Questa entità viene usata per identificare la scelta della lingua dei clienti finali. Gli utenti e i gruppi di utenti vengono decorati con la lingua e abbinati alle conversazioni per instradarli. La decorazione di utenti e gruppi di utenti supporta anche la gerarchia

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_language` |
| Display name | Gerarchia lingua |
| Display (plural) | Gerarchie lingua |
| Schema name | `msdyn_language` |
| Entity set (Web API) | `msdyn_languages` |
| Primary id attribute | `msdyn_languageid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_languages?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_languages(<guid>)
POST /api/data/v9.2/msdyn_languages
PATCH /api/data/v9.2/msdyn_languages(<guid>)
DELETE /api/data/v9.2/msdyn_languages(<guid>)
```

## Attributes

Writable: **14** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_languageid`, `msdyn_languagename`, `msdyn_localecode`, `msdyn_localeid`, `msdyn_name`, `msdyn_parentlanguageid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_language_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_language_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_language_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_language_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_language` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_language` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_language` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_language` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_language_msdyn_language_parentlanguageid` | [msdyn_language](msdyn_language.md) | `msdyn_parentlanguageid` | `msdyn_parentlanguageid` |

### One-to-Many (13)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_language_SyncErrors` | [msdyn_language](msdyn_language.md) | `regardingobjectid` | `regardingobjectid_msdyn_language` |
| `msdyn_language_DuplicateMatchingRecord` | [msdyn_language](msdyn_language.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_language` |
| `msdyn_language_DuplicateBaseRecord` | [msdyn_language](msdyn_language.md) | `baserecordid` | `baserecordid_msdyn_language` |
| `msdyn_language_AsyncOperations` | [msdyn_language](msdyn_language.md) | `regardingobjectid` | `regardingobjectid_msdyn_language` |
| `msdyn_language_MailboxTrackingFolders` | [msdyn_language](msdyn_language.md) | `regardingobjectid` | `regardingobjectid_msdyn_language` |
| `msdyn_language_UserEntityInstanceDatas` | [msdyn_language](msdyn_language.md) | `objectid` | `objectid_msdyn_language` |
| `msdyn_language_ProcessSession` | [msdyn_language](msdyn_language.md) | `regardingobjectid` | `regardingobjectid_msdyn_language` |
| `msdyn_language_BulkDeleteFailures` | [msdyn_language](msdyn_language.md) | `regardingobjectid` | `regardingobjectid_msdyn_language` |
| `msdyn_language_PrincipalObjectAttributeAccesses` | [msdyn_language](msdyn_language.md) | `objectid` | `objectid_msdyn_language` |
| `msdyn_msdyn_language_msdyn_agentgrouplanguage_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid` |
| `msdyn_msdyn_language_msdyn_agentlanguage_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid` |
| `msdyn_msdyn_language_msdyn_language_parentlanguageid` | [msdyn_language](msdyn_language.md) | `msdyn_parentlanguageid` | `msdyn_parentlanguageid` |
| `msdyn_msdyn_language_msdyn_ocliveworkitem_msdyn_languageid` | [msdyn_language](msdyn_language.md) | `msdyn_languageid` | `msdyn_languageid_msdyn_ocliveworkitem` |


## Source

Generated from [msdyn_language (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_language')) on 2026-05-07.