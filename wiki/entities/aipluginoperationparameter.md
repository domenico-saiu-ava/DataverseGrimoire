---
logical: "aipluginoperationparameter"
display: "AIPluginOperationParameter"
entitySetName: "aipluginoperationparameters"
primaryId: "aipluginoperationparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **18** · Read-only: **18**

### Writable

`AIPluginOperation`, `AIPluginOperationParameterId`, `Description`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `Path`, `PropertyDetails`, `PropertyName`, `PropertyValue`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginOperationParameter_AIPluginO` | [aipluginoperation](aipluginoperation.md) | `aipluginoperation` | `AIPluginOperation` |
| `business_unit_aipluginoperationparameter` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginoperationparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginoperationparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginoperationparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginoperationparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginoperationparameter` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginoperationparameter` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginoperationparameter` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginoperationparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationparameter_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `aipluginoperationparameter_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `aipluginoperationparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginoperationparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [aipluginoperationparameter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginoperationparameter.md) on 2026-05-06.