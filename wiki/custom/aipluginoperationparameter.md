---
logical: "aipluginoperationparameter"
display: "AIPluginOperationParameter"
entitySetName: "aipluginoperationparameters"
primaryId: "aipluginoperationparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# AIPluginOperationParameter

Parameter overrides for AI Operation

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginoperationparameter` |
| Display name | AIPluginOperationParameter |
| Display (plural) | AIPluginOperationParameters |
| Schema name | `AIPluginOperationParameter` |
| Entity set (Web API) | `aipluginoperationparameters` |
| Primary id attribute | `aipluginoperationparameterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginoperationparameters?$select=name&$top=10
GET /api/data/v9.2/aipluginoperationparameters(<guid>)
POST /api/data/v9.2/aipluginoperationparameters
PATCH /api/data/v9.2/aipluginoperationparameters(<guid>)
DELETE /api/data/v9.2/aipluginoperationparameters(<guid>)
```

## Attributes

Writable: **17** · Read-only: **16**

### Writable

`aipluginoperation`, `aipluginoperationparameterid`, `description`, `importsequencenumber`, `iscustomizable`, `name`, `overriddencreatedon`, `ownerid`, `path`, `propertydetails`, `propertyname`, `propertyvalue`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_aipluginoperationparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginoperationparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginoperationparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginoperationparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginoperationparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginoperationparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginoperationparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginoperationparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `AIPluginOperationParameter_AIPluginO` | [aipluginoperation](aipluginoperation.md) | `aipluginoperation` | `AIPluginOperation` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginoperationparameter_SyncErrors` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationparameter_DuplicateMatchingRecord` | [aipluginoperationparameter](aipluginoperationparameter.md) | `duplicaterecordid` | `duplicaterecordid_aipluginoperationparameter` |
| `aipluginoperationparameter_DuplicateBaseRecord` | [aipluginoperationparameter](aipluginoperationparameter.md) | `baserecordid` | `baserecordid_aipluginoperationparameter` |
| `aipluginoperationparameter_AsyncOperations` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationparameter_MailboxTrackingFolders` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationparameter_UserEntityInstanceDatas` | [aipluginoperationparameter](aipluginoperationparameter.md) | `objectid` | `objectid_aipluginoperationparameter` |
| `aipluginoperationparameter_ProcessSession` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationparameter_BulkDeleteFailures` | [aipluginoperationparameter](aipluginoperationparameter.md) | `regardingobjectid` | `regardingobjectid_aipluginoperationparameter` |
| `aipluginoperationparameter_PrincipalObjectAttributeAccesses` | [aipluginoperationparameter](aipluginoperationparameter.md) | `objectid` | `objectid_aipluginoperationparameter` |


## Source

Generated from [aipluginoperationparameter (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginoperationparameter')) on 2026-05-07.