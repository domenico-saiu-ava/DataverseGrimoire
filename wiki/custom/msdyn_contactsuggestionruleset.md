---
logical: "msdyn_contactsuggestionruleset"
display: "Contact suggestion ruleset"
entitySetName: "msdyn_contactsuggestionrulesets"
primaryId: "msdyn_contactsuggestionrulesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contact suggestion ruleset

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_contactsuggestionruleset` |
| Display name | Contact suggestion ruleset |
| Display (plural) | Contact suggestion rulesets |
| Schema name | `msdyn_contactsuggestionruleset` |
| Entity set (Web API) | `msdyn_contactsuggestionrulesets` |
| Primary id attribute | `msdyn_contactsuggestionrulesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_contactsuggestionrulesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_contactsuggestionrulesets(<guid>)
POST /api/data/v9.2/msdyn_contactsuggestionrulesets
PATCH /api/data/v9.2/msdyn_contactsuggestionrulesets(<guid>)
DELETE /api/data/v9.2/msdyn_contactsuggestionrulesets(<guid>)
```

## Attributes

Writable: **12** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_contactsuggestionrulesetid`, `msdyn_entitytype`, `msdyn_name`, `msdyn_uniquename`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_contactsuggestionruleset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_contactsuggestionruleset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_contactsuggestionruleset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_contactsuggestionruleset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_contactsuggestionruleset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_contactsuggestionruleset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_contactsuggestionruleset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_contactsuggestionruleset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_entity_msdyn_contactsuggestionruleset_entitytype` | [entity](entity.md) | `msdyn_entitytype` | `msdyn_entitytype` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_contactsuggestionruleset_SyncErrors` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_DuplicateMatchingRecord` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_DuplicateBaseRecord` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `baserecordid` | `baserecordid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_AsyncOperations` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_MailboxTrackingFolders` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_UserEntityInstanceDatas` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `objectid` | `objectid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_ProcessSession` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_BulkDeleteFailures` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `regardingobjectid` | `regardingobjectid_msdyn_contactsuggestionruleset` |
| `msdyn_contactsuggestionruleset_PrincipalObjectAttributeAccesses` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `objectid` | `objectid_msdyn_contactsuggestionruleset` |
| `msdyn_msdyn_contactsuggestionruleset_msdyn_contactsuggestionrule_contactsuggestionrulesetid` | [msdyn_contactsuggestionruleset](msdyn_contactsuggestionruleset.md) | `msdyn_contactsuggestionrulesetid` | `msdyn_contactsuggestionrulesetid` |


## Source

Generated from [msdyn_contactsuggestionruleset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_contactsuggestionruleset')) on 2026-05-07.