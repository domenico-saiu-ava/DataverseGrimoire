---
logical: "msdyn_contactsuggestionrule"
display: "Contact suggestion rule"
entitySetName: "msdyn_contactsuggestionrules"
primaryId: "msdyn_contactsuggestionruleid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contact suggestion rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_contactsuggestionrule` |
| Display name | Contact suggestion rule |
| Display (plural) | Contact suggestion rules |
| Schema name | `msdyn_contactsuggestionrule` |
| Entity set (Web API) | `msdyn_contactsuggestionrules` |
| Primary id attribute | `msdyn_contactsuggestionruleid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_contactsuggestionrules?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_contactsuggestionrules(<guid>)
POST /api/data/v9.2/msdyn_contactsuggestionrules
PATCH /api/data/v9.2/msdyn_contactsuggestionrules(<guid>)
DELETE /api/data/v9.2/msdyn_contactsuggestionrules(<guid>)
```

## Attributes

Writable: **21** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_contactsuggestionruleid`, `msdyn_contactsuggestionrulesetid`, `msdyn_customactioninputs`, `msdyn_customactionname`, `msdyn_descriptiontemplate`, `msdyn_descriptiontemplateplaceholders`, `msdyn_fetchxml`, `msdyn_name`, `msdyn_pathtotarget`, `msdyn_rank`, `msdyn_ruletype`, `msdyn_top`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_contactsuggestionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_contactsuggestionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_contactsuggestionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_contactsuggestionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_contactsuggestionrule` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_contactsuggestionrule` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_contactsuggestionrule` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_contactsuggestionrule` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_contactsuggestionruleset_msdyn_contactsuggestionrule_contactsuggestionrulesetid` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `msdyn_contactsuggestionrulesetid` | `msdyn_contactsuggestionrulesetid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_contactsuggestionrule_SyncErrors` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_DuplicateMatchingRecord` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_DuplicateBaseRecord` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `baserecordid` | `baserecordid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_AsyncOperations` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_MailboxTrackingFolders` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_UserEntityInstanceDatas` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `objectid` | `objectid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_ProcessSession` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_BulkDeleteFailures` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionrule` |
| `msdyn_contactsuggestionrule_PrincipalObjectAttributeAccesses` | [msdyn_contactsuggestionrule](msdyn_contactsuggestionrule.md) | `objectid` | `objectid_msdyn_contactsuggestionrule` |


## Source

Generated from [msdyn_contactsuggestionrule (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_contactsuggestionrule')) on 2026-05-07.