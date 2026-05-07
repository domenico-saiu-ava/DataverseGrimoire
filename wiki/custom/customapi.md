---
logical: "customapi"
display: "API personalizzata"
entitySetName: "customapis"
primaryId: "customapiid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# API personalizzata

Entità che definisce un'API personalizzata

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customapi` |
| Display name | API personalizzata |
| Display (plural) | API personalizzate |
| Schema name | `CustomAPI` |
| Entity set (Web API) | `customapis` |
| Primary id attribute | `customapiid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/customapis?$select=name&$top=10
GET /api/data/v9.2/customapis(<guid>)
POST /api/data/v9.2/customapis
PATCH /api/data/v9.2/customapis(<guid>)
DELETE /api/data/v9.2/customapis(<guid>)
```

## Attributes

Writable: **24** · Read-only: **16**

### Writable

`allowedcustomprocessingsteptype`, `bindingtype`, `boundentitylogicalname`, `customapiid`, `description`, `displayname`, `executeprivilegename`, `fxexpressionid`, `importsequencenumber`, `iscustomizable`, `isfunction`, `isprivate`, `name`, `overriddencreatedon`, `ownerid`, `plugintypeid`, `powerfxruleid`, `sdkmessageid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `uniquename`, `utcconversiontimezonecode`, `workflowsdkstepenabled`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_customapi_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customapi_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customapi_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customapi_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_customapi` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_customapi` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_customapi` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_customapi` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `sdkmessage_customapi` | [sdkmessage](sdkmessage.md) | `sdkmessageid` | `SdkMessageId` |
| `plugintype_customapi` | [plugintype](plugintype.md) | `plugintypeid` | `PluginTypeId` |
| `fxexpression_customapi` | [fxexpression](fxexpression.md) | `fxexpressionid` | `fxexpression` |
| `powerfxrule_customapi` | [powerfxrule](powerfxrule.md) | `powerfxruleid` | `powerfxrule` |

### One-to-Many (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdynmkt_customapi_eventmetadata` | [customapi](customapi.md) | `msdynmkt_customapiid` | `msdynmkt_customapiid` |
| `customapi_serviceplanmapping` | [customapi](customapi.md) | `customapi` | `CustomAPI` |
| `customapi_plugin_CustomAPI` | [customapi](customapi.md) | `customapi` | `CustomAPI` |
| `customapi_msdyn_function_customapi` | [customapi](customapi.md) | `customapi` | `customapi` |
| `MCPTool_CustomAPI_CustomAPI` | [customapi](customapi.md) | `customapiid` | `CustomAPI` |
| `customapi_SyncErrors` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapi_AsyncOperations` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapi_MailboxTrackingFolders` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapi_UserEntityInstanceDatas` | [customapi](customapi.md) | `objectid` | `objectid_customapi` |
| `customapi_ProcessSession` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapi_BulkDeleteFailures` | [customapi](customapi.md) | `regardingobjectid` | `regardingobjectid_customapi` |
| `customapi_PrincipalObjectAttributeAccesses` | [customapi](customapi.md) | `objectid` | `objectid_customapi` |
| `msdyn_customapi_msdyn_customapirulesetconfiguration_CustomAPI` | [customapi](customapi.md) | `msdyn_customapi` | `msdyn_CustomAPI` |
| `customapi_customapirequestparameter` | [customapi](customapi.md) | `customapiid` | `CustomAPIId` |
| `customapi_customapiresponseproperty` | [customapi](customapi.md) | `customapiid` | `CustomAPIId` |
| `catalogassignment_customapi` | [customapi](customapi.md) | `object` | `CustomAPIId` |
| `msdyn_formmapping_customapiid` | [customapi](customapi.md) | `customapiid` | `customapiid` |
| `msdyn_customapi_msdyn_pmbusinessruleautomationconfig_CustomApiId` | [customapi](customapi.md) | `customapiid` | `CustomApiId` |
| `msdyn_knowledgeassetconfiguration_customapiid` | [customapi](customapi.md) | `msdyn_customapiid` | `msdyn_customapiid` |
| `fabricaiskill_customapiid` | [customapi](customapi.md) | `customapiid` | `CustomApiId` |
| `AIPluginOperation_CustomAPI_CustomAPI` | [customapi](customapi.md) | `customapi` | `CustomAPI` |


## Source

Generated from [customapi (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='customapi')) on 2026-05-07.