---
logical: "msdyn_intentattributeset"
display: "intentattributeset"
entitySetName: "msdyn_intentattributesets"
primaryId: "msdyn_intentattributesetid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# intentattributeset

Acquisisce gli attributi obbligatori per completare una determinata finalità

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentattributeset` |
| Display name | intentattributeset |
| Display (plural) | intentattributesets |
| Schema name | `msdyn_intentattributeset` |
| Entity set (Web API) | `msdyn_intentattributesets` |
| Primary id attribute | `msdyn_intentattributesetid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentattributesets?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentattributesets(<guid>)
POST /api/data/v9.2/msdyn_intentattributesets
PATCH /api/data/v9.2/msdyn_intentattributesets(<guid>)
DELETE /api/data/v9.2/msdyn_intentattributesets(<guid>)
```

## Attributes

Writable: **19** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_intentattributeid`, `msdyn_intentattributesetid`, `msdyn_intentfamilyid`, `msdyn_intentid`, `msdyn_ismandatory`, `msdyn_name`, `msdyn_occurrencecount`, `msdyn_occurrencecount_last12months`, `msdyn_occurrencecount_last30days`, `msdyn_reviewstate`, `msdyn_source`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_intentattributeset_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentattributeset_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentattributeset_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentattributeset_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_intentattributeset` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_intentattributeset` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_intentattributeset` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_intentattributeset` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_intent_msdyn_intentattributeset_intentid` | [msdyn_intent](msdyn_intent.md) | `msdyn_intentid` | `msdyn_intentid` |
| `msdyn_msdyn_intentattribute_msdyn_intentattributeset_intentattributeid` | [msdyn_intentattribute](msdyn_intentattribute.md) | `msdyn_intentattributeid` | `msdyn_intentattributeid` |
| `msdyn_intentattributeset_intentfamilyid_msdyn_intentfamily` | [msdyn_intentfamily](msdyn_intentfamily.md) | `msdyn_intentfamilyid` | `msdyn_intentfamilyid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_intentattributeset_SyncErrors` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_DuplicateMatchingRecord` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_DuplicateBaseRecord` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `baserecordid` | `baserecordid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_AsyncOperations` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_MailboxTrackingFolders` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_UserEntityInstanceDatas` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `objectid` | `objectid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_ProcessSession` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_BulkDeleteFailures` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `regardingobjectid` | `regardingobjectid_msdyn_intentattributeset` |
| `msdyn_intentattributeset_PrincipalObjectAttributeAccesses` | [msdyn_intentattributeset](msdyn_intentattributeset.md) | `objectid` | `objectid_msdyn_intentattributeset` |


## Source

Generated from [msdyn_intentattributeset (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_intentattributeset')) on 2026-05-07.