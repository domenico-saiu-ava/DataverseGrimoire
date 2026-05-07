---
logical: "customapi"
display: "Custom API"
entitySetName: "customapis"
primaryId: "customapiid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Custom API

Entity that defines a custom API

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customapi` |
| Display name | Custom API |
| Display (plural) | Custom APIs |
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

Writable: **25** · Read-only: **18**

### Writable

`AllowedCustomProcessingStepType`, `BindingType`, `BoundEntityLogicalName`, `CustomAPIId`, `Description`, `DisplayName`, `ExecutePrivilegeName`, `FxExpressionId`, `ImportSequenceNumber`, `IsCustomizable`, `IsFunction`, `IsPrivate`, `Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `PluginTypeId`, `PowerfxRuleId`, `SdkMessageId`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UniqueName`, `UTCConversionTimeZoneCode`, `WorkflowSdkStepEnabled`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_customapi` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `fxexpression_customapi` | [fxexpression](fxexpression.md) | `fxexpressionid` | `fxexpression` |
| `lk_customapi_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customapi_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customapi_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customapi_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_customapi` | [owner](owner.md) | `ownerid` | `ownerid` |
| `plugintype_customapi` | [plugintype](plugintype.md) | `plugintypeid` | `PluginTypeId` |
| `powerfxrule_customapi` | [powerfxrule](powerfxrule.md) | `powerfxruleid` | `powerfxrule` |
| `sdkmessage_customapi` | [sdkmessage](sdkmessage.md) | `sdkmessageid` | `SdkMessageId` |
| `team_customapi` | [team](team.md) | `owningteam` | `owningteam` |
| `user_customapi` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (18)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `AIPluginOperation_CustomAPI_CustomAPI` | _n/a_ | `customapi` | _n/a_ |
| `catalogassignment_customapi` | _n/a_ | `object` | _n/a_ |
| `customapi_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapi_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapi_customapirequestparameter` | _n/a_ | `customapiid` | _n/a_ |
| `customapi_customapiresponseproperty` | _n/a_ | `customapiid` | _n/a_ |
| `customapi_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapi_msdyn_function_customapi` | _n/a_ | `customapi` | _n/a_ |
| `customapi_plugin_CustomAPI` | _n/a_ | `customapi` | _n/a_ |
| `customapi_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `customapi_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapi_serviceplanmapping` | _n/a_ | `customapi` | _n/a_ |
| `customapi_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `fabricaiskill_customapiid` | _n/a_ | `customapiid` | _n/a_ |
| `MCPTool_CustomAPI_CustomAPI` | _n/a_ | `customapiid` | _n/a_ |
| `msdyn_customapi_msdyn_pmbusinessruleautomationconfig_CustomApiId` | _n/a_ | `customapiid` | _n/a_ |
| `msdyn_formmapping_customapiid` | _n/a_ | `customapiid` | _n/a_ |
| `msdyn_knowledgeassetconfiguration_customapiid` | _n/a_ | `msdyn_customapiid` | _n/a_ |


## Source

Generated from [customapi.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/customapi.md) on 2026-05-06.