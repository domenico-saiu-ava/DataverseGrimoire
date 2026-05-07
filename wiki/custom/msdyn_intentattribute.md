---
logical: "msdyn_intentattribute"
display: "intentattribute"
entitySetName: "msdyn_intentattributes"
primaryId: "msdyn_intentattributeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# intentattribute

Acquisisce tutti gli attributi possibili in tutte le finalità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentattribute` |
| Display name | intentattribute |
| Display (plural) | intentattributes |
| Schema name | `msdyn_intentattribute` |
| Entity set (Web API) | `msdyn_intentattributes` |
| Primary id attribute | `msdyn_intentattributeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentattributes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentattributes(<guid>)
POST /api/data/v9.2/msdyn_intentattributes
PATCH /api/data/v9.2/msdyn_intentattributes(<guid>)
DELETE /api/data/v9.2/msdyn_intentattributes(<guid>)
```

## Attributes

Writable: **15** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_acronyms`, `msdyn_intentattributeid`, `msdyn_intentfamilyid`, `msdyn_locale_code`, `msdyn_name`, `msdyn_reviewstate`, `msdyn_source`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentattribute_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentattribute_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentattribute_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentattribute_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentattribute` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentattribute` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentattribute` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentattribute` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_intentattribute_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentattribute_SyncErrors` | [msdyn_intentattribute](msdyn_intentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute` |
| `msdyn_intentattribute_DuplicateMatchingRecord` | [msdyn_intentattribute](msdyn_intentattribute.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentattribute` |
| `msdyn_intentattribute_DuplicateBaseRecord` | [msdyn_intentattribute](msdyn_intentattribute.md) | `baserecordid` | `baserecordid_msdyn_intentattribute` |
| `msdyn_intentattribute_AsyncOperations` | [msdyn_intentattribute](msdyn_intentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute` |
| `msdyn_intentattribute_MailboxTrackingFolders` | [msdyn_intentattribute](msdyn_intentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute` |
| `msdyn_intentattribute_UserEntityInstanceDatas` | [msdyn_intentattribute](msdyn_intentattribute.md) | `objectid` | `objectid_msdyn_intentattribute` |
| `msdyn_intentattribute_ProcessSession` | [msdyn_intentattribute](msdyn_intentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute` |
| `msdyn_intentattribute_BulkDeleteFailures` | [msdyn_intentattribute](msdyn_intentattribute.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattribute` |
| `msdyn_intentattribute_PrincipalObjectAttributeAccesses` | [msdyn_intentattribute](msdyn_intentattribute.md) | `objectid` | `objectid_msdyn_intentattribute` |
| `msdyn_msdyn_intentattribute_msdyn_intentattribute_entity_intentattributeid` | [msdyn_intentattribute](msdyn_intentattribute.md) | `msdyn_intentattributeid` | `msdyn_intentattributeid` |
| `msdyn_msdyn_intentattribute_msdyn_intentattributeset_intentattributeid` | [msdyn_intentattribute](msdyn_intentattribute.md) | `msdyn_intentattributeid` | `msdyn_intentattributeid` |


## Source

Generated from [msdyn_intentattribute (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentattribute')) on 2026-05-07.