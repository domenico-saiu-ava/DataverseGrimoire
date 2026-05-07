---
logical: "aipluginoperationresponsetemplate"
display: "AIPluginOperationResponseTemplate"
entitySetName: "aipluginoperationresponsetemplates"
primaryId: "aipluginoperationresponsetemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
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

Writable: **12** · Read-only: **18**

### Writable

`AIPluginOperationResponseTemplateId`, `Content`, `ImportSequenceNumber`, `IsCustomizable`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_aipluginoperationresponsetemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginoperationresponsetemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginoperationresponsetemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginoperationresponsetemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginoperationresponsetemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_aipluginoperationresponsetemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginoperationresponsetemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginoperationresponsetemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginoperationresponsetemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationresponsetemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationresponsetemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `aipluginoperationresponsetemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `aipluginoperationresponsetemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationresponsetemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginoperationresponsetemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperationresponsetemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `operationresponsetemplate_aipluginoperation` | _n/a_ | `aipluginoperationresponsetemplate` | _n/a_ |


## Source

Generated from [aipluginoperationresponsetemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginoperationresponsetemplate.md) on 2026-05-06.