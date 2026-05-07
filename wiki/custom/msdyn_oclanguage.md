---
logical: "msdyn_oclanguage"
display: "Lingua"
entitySetName: "msdyn_oclanguages"
primaryId: "msdyn_oclanguageid"
primaryName: "msdyn_languagename"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Lingua

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_oclanguage` |
| Display name | Lingua |
| Display (plural) | Lingue |
| Schema name | `msdyn_oclanguage` |
| Entity set (Web API) | `msdyn_oclanguages` |
| Primary id attribute | `msdyn_oclanguageid` |
| Primary name attribute | `msdyn_languagename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_oclanguages?$select=msdyn_languagename&$top=10
GET /api/data/v9.2/msdyn_oclanguages(<guid>)
POST /api/data/v9.2/msdyn_oclanguages
PATCH /api/data/v9.2/msdyn_oclanguages(<guid>)
DELETE /api/data/v9.2/msdyn_oclanguages(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_languagename`, `msdyn_localecode`, `msdyn_localeid`, `msdyn_oclanguageid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_oclanguage_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_oclanguage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_oclanguage_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_oclanguage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_oclanguage` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_oclanguage` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_oclanguage` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_oclanguage` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocdispositioncode_languageid_msdyn_oclanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_languageid` | `msdyn_languageid` |
| `msdyn_msdyn_oclanguage_msdyn_ocmessagemaskingrule_oclanguageid` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_oclanguageid` | `msdyn_oclanguageid` |
| `msdyn_oclanguage_SyncErrors` | [msdyn_oclanguage](msdyn_oclanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclanguage` |
| `msdyn_oclanguage_DuplicateMatchingRecord` | [msdyn_oclanguage](msdyn_oclanguage.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_oclanguage` |
| `msdyn_oclanguage_DuplicateBaseRecord` | [msdyn_oclanguage](msdyn_oclanguage.md) | `baserecordid` | `baserecordid_msdyn_oclanguage` |
| `msdyn_oclanguage_AsyncOperations` | [msdyn_oclanguage](msdyn_oclanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclanguage` |
| `msdyn_oclanguage_MailboxTrackingFolders` | [msdyn_oclanguage](msdyn_oclanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclanguage` |
| `msdyn_oclanguage_UserEntityInstanceDatas` | [msdyn_oclanguage](msdyn_oclanguage.md) | `objectid` | `objectid_msdyn_oclanguage` |
| `msdyn_oclanguage_ProcessSession` | [msdyn_oclanguage](msdyn_oclanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclanguage` |
| `msdyn_oclanguage_BulkDeleteFailures` | [msdyn_oclanguage](msdyn_oclanguage.md) | `regardingobjectid` | `regardingobjectid_msdyn_oclanguage` |
| `msdyn_oclanguage_PrincipalObjectAttributeAccesses` | [msdyn_oclanguage](msdyn_oclanguage.md) | `objectid` | `objectid_msdyn_oclanguage` |
| `msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_sourcelanguage` | `msdyn_sourcelanguage` |
| `msdyn_oclanguage_msdyn_oclocalizationdata` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_customerlanguageid` | `msdyn_customerlanguageid` |
| `msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_customerlanguageid` | `msdyn_customerlanguageid_msdyn_ocliveworkitem` |
| `msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage` | [msdyn_oclanguage](msdyn_oclanguage.md) | `msdyn_defaultlanguage` | `msdyn_defaultlanguage` |


## Source

Generated from [msdyn_oclanguage (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_oclanguage')) on 2026-05-07.