---
logical: "aipluginoperationresponsetemplate"
display: "AIPluginOperationResponseTemplate"
entitySetName: "aipluginoperationresponsetemplates"
primaryId: "aipluginoperationresponsetemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPluginOperationResponseTemplate

Content for the AI Plugin Operation Response Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginoperationresponsetemplate` |
| Display name | AIPluginOperationResponseTemplate |
| Display (plural) | AIPluginOperationResponseTemplates |
| Schema name | `AIPluginOperationResponseTemplate` |
| Entity set (Web API) | `aipluginoperationresponsetemplates` |
| Primary id attribute | `aipluginoperationresponsetemplateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginoperationresponsetemplates?$select=name&$top=10
GET /api/data/v9.2/aipluginoperationresponsetemplates(<guid>)
POST /api/data/v9.2/aipluginoperationresponsetemplates
PATCH /api/data/v9.2/aipluginoperationresponsetemplates(<guid>)
DELETE /api/data/v9.2/aipluginoperationresponsetemplates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **16**

### Writable

`aipluginoperationresponsetemplateid`, `content`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginoperationresponsetemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginoperationresponsetemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginoperationresponsetemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginoperationresponsetemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginoperationresponsetemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginoperationresponsetemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginoperationresponsetemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginoperationresponsetemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginoperationresponsetemplate_SyncErrors` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_DuplicateMatchingRecord` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `duplicaterecordid` | `duplicaterecordid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_DuplicateBaseRecord` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `baserecordid` | `baserecordid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_AsyncOperations` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_MailboxTrackingFolders` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_UserEntityInstanceDatas` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `objectid` | `objectid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_ProcessSession` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_BulkDeleteFailures` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationresponsetemplate` |
| `aipluginoperationresponsetemplate_PrincipalObjectAttributeAccesses` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `objectid` | `objectid_aipluginoperationresponsetemplate` |
| `operationresponsetemplate_aipluginoperation` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `aipluginoperationresponsetemplate` | `AIPluginOperationResponseTemplate` |


## Source

Generated from [aipluginoperationresponsetemplate (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginoperationresponsetemplate')) on 2026-05-07.