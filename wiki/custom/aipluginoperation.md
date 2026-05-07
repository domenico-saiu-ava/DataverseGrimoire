---
logical: "aipluginoperation"
display: "AIPluginOperation"
entitySetName: "aipluginoperations"
primaryId: "aipluginoperationid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **24** · Read-only: **16**

### Writable

`aiplugin`, `aipluginoperationexportkey`, `aipluginoperationid`, `aipluginoperationresponsetemplate`, `customapi`, `description`, `dvfilesearch`, `dvtablesearch`, `entity`, `importsequencenumber`, `isconsequential`, `iscustomizable`, `msdyn_aimodel`, `name`, `operationid`, `overriddencreatedon`, `ownerid`, `referencedoperationid`, `responsesemantics`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`, `workflow`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (16)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_AIPluginOperation_AIModel` | [msdyn_aimodel](msdyn_aimodel.md) | `msdyn_aimodel` | `msdyn_AIModel` |
| `lk_aipluginoperation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_aipluginoperation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_aipluginoperation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_aipluginoperation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_aipluginoperation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_aipluginoperation` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_aipluginoperation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_aipluginoperation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `AIPluginOperation_AIPlugin_AIPlugin` | [aiplugin](aiplugin.md) | `aiplugin` | `AIPlugin` |
| `AIPluginOperation_CustomAPI_CustomAPI` | [customapi](customapi.md) | `customapi` | `CustomAPI` |
| `AIPluginOperation_DVFileSearch_DVFileSear` | [dvfilesearch](dvfilesearch.md) | `dvfilesearch` | `DVFileSearch` |
| `AIPluginOperation_DVTableSearch_DVTableSe` | [dvtablesearch](dvtablesearch.md) | `dvtablesearch` | `DVTableSearch` |
| `AIPluginOperation_Entity_Entity` | [entity](entity.md) | `entity` | `Entity` |
| `AIPluginOperation_Workflow_Workflow` | [workflow](workflow.md) | `workflow` | `Workflow` |
| `operationresponsetemplate_aipluginoperation` | [aipluginoperationresponsetemplate](aipluginoperationresponsetemplate.md) | `aipluginoperationresponsetemplate` | `AIPluginOperationResponseTemplate` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_aipluginoperation_msdyn_servicecopilotpluginaction_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `msdyn_aipluginoperationid` | `msdyn_aipluginoperationid` |
| `aipluginoperation_SyncErrors` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperation_AsyncOperations` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperation_MailboxTrackingFolders` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperation_UserEntityInstanceDatas` | [aipluginoperation](aipluginoperation.md) | `objectid` | `objectid_aipluginoperation` |
| `aipluginoperation_ProcessSession` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperation_BulkDeleteFailures` | [aipluginoperation](aipluginoperation.md) | `regardingobjectid` | `regardingobjectid_aipluginoperation` |
| `aipluginoperation_PrincipalObjectAttributeAccesses` | [aipluginoperation](aipluginoperation.md) | `objectid` | `objectid_aipluginoperation` |
| `msdyn_knowledgeassetconfiguration_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `msdyn_aipluginoperationid` | `msdyn_aipluginoperationid` |
| `fabricaiskill_aipluginoperationid` | [aipluginoperation](aipluginoperation.md) | `aipluginoperationid` | `aipluginoperationid` |
| `AIPluginOperationParameter_AIPluginO` | [aipluginoperation](aipluginoperation.md) | `aipluginoperation` | `AIPluginOperation` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `botcomponent_aipluginoperation` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_aipluginoperation` |

## Source

Generated from [aipluginoperation (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='aipluginoperation')) on 2026-05-07.