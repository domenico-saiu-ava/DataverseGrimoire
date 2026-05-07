---
logical: "msdyn_casesentimentsetting"
display: "Impostazioni valutazione caso"
entitySetName: "msdyn_casesentimentsettings"
primaryId: "msdyn_casesentimentsettingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Impostazioni valutazione caso

Impostazioni valutazione caso

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_casesentimentsetting` |
| Display name | Impostazioni valutazione caso |
| Display (plural) | Impostazioni valutazione caso |
| Schema name | `msdyn_casesentimentsetting` |
| Entity set (Web API) | `msdyn_casesentimentsettings` |
| Primary id attribute | `msdyn_casesentimentsettingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_casesentimentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_casesentimentsettings(<guid>)
POST /api/data/v9.2/msdyn_casesentimentsettings
PATCH /api/data/v9.2/msdyn_casesentimentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_casesentimentsettings(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`channelweightage`, `chatweightage`, `emailweightage`, `enablechat`, `enableemail`, `enablevoice`, `importsequencenumber`, `iscustomizable`, `msdyn_casesentimentsettingid`, `msdyn_name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `voiceweightage`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_casesentimentsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_casesentimentsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_casesentimentsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_casesentimentsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_casesentimentsetting` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_casesentimentsetting` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_casesentimentsetting` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_casesentimentsetting` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_casesentimentsetting_SyncErrors` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_DuplicateMatchingRecord` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_DuplicateBaseRecord` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `baserecordid` | `baserecordid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_AsyncOperations` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_MailboxTrackingFolders` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_UserEntityInstanceDatas` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `objectid` | `objectid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_ProcessSession` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_BulkDeleteFailures` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `regardingobjectid` | `regardingobjectid_msdyn_casesentimentsetting` |
| `msdyn_casesentimentsetting_PrincipalObjectAttributeAccesses` | [msdyn_casesentimentsetting](msdyn_casesentimentsetting.md) | `objectid` | `objectid_msdyn_casesentimentsetting` |


## Source

Generated from [msdyn_casesentimentsetting (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_casesentimentsetting')) on 2026-05-07.