---
logical: "aipluginoperation"
display: "AIPluginOperation"
entitySetName: "aipluginoperations"
primaryId: "aipluginoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# AIPluginOperation

AIPluginOperations component

## Identity

| Property | Value |
| --- | --- |
| Logical name | `aipluginoperation` |
| Display name | AIPluginOperation |
| Display (plural) | AIPluginOperations |
| Schema name | `AIPluginOperation` |
| Entity set (Web API) | `aipluginoperations` |
| Primary id attribute | `aipluginoperationid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/aipluginoperations?$select=name&$top=10
GET /api/data/v9.2/aipluginoperations(<guid>)
POST /api/data/v9.2/aipluginoperations
PATCH /api/data/v9.2/aipluginoperations(<guid>)
DELETE /api/data/v9.2/aipluginoperations(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`AIPlugin`, `AIPluginOperationExportKey`, `AIPluginOperationId`, `AIPluginOperationResponseTemplate`, `CustomAPI`, `Description`, `DVFileSearch`, `DVTableSearch`, `Entity`, `ImportSequenceNumber`, `IsConsequential`, `IsCustomizable`, `msdyn_AIModel`, `Name`, `OperationId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `ReferencedOperationId`, `ResponseSemantics`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`, `Workflow`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginOperation_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `AIPluginOperation_CustomAPI_CustomAPI` | [customapi](customapi.md) | `customapi` | `CustomAPI` |
| `AIPluginOperation_DVFileSearch_DVFileSear` | [dvfilesearch](dvfilesearch.md) | `dvfilesearch` | `DVFileSearch` |
| `AIPluginOperation_DVTableSearch_DVTableSe` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `AIPluginOperation_Entity_Entity` | [entity](entity.md) | `entity` | `Entity` |
| `AIPluginOperation_Workflow_Workflow` | [workflow](workflow.md) | `workflow` | `Workflow` |
| `business_unit_aipluginoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_aipluginoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_AIPluginOperation_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodel` | `msdyn_AIModel` |
| `operationresponsetemplate_aipluginoperation` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `aipluginoperationresponsetemplate` | `AIPluginOperationResponseTemplate` |
| `owner_aipluginoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_aipluginoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_aipluginoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `aipluginoperation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `aipluginoperation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `aipluginoperation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `AIPluginOperationParameter_AIPluginO` | _n/a_ | `aipluginoperation` | _n/a_ |
| `fabricaiskill_aipluginoperationid` | _n/a_ | `aipluginoperationid` | _n/a_ |
| `msdyn_knowledgeassetconfiguration_aipluginoperationid` | _n/a_ | `msdyn_aipluginoperationid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_aipluginoperation` | [aipluginoperationid](aipluginoperationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [aipluginoperation.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/aipluginoperation.md) on 2026-05-06.