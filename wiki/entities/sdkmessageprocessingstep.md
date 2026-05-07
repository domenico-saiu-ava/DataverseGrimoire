---
logical: "sdkmessageprocessingstep"
display: "Sdk Message Processing Step"
entitySetName: "sdkmessageprocessingsteps"
primaryId: "sdkmessageprocessingstepid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sdk Message Processing Step

Stage in the execution pipeline that a plug-in is to execute.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sdkmessageprocessingstep` |
| Display name | Sdk Message Processing Step |
| Display (plural) | Sdk Message Processing Steps |
| Schema name | `SdkMessageProcessingStep` |
| Entity set (Web API) | `sdkmessageprocessingsteps` |
| Primary id attribute | `sdkmessageprocessingstepid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sdkmessageprocessingsteps?$select=name&$top=10
GET /api/data/v9.2/sdkmessageprocessingsteps(<guid>)
POST /api/data/v9.2/sdkmessageprocessingsteps
PATCH /api/data/v9.2/sdkmessageprocessingsteps(<guid>)
DELETE /api/data/v9.2/sdkmessageprocessingsteps(<guid>)
```

## Attributes

Writable: **31** · Read-only: **15**

### Writable

`AsyncAutoDelete`, `CanBeBypassed`, `CanUseReadOnlyConnection`, `Category`, `Configuration`, `Description`, `EnablePluginProfiler`, `EventExpander`, `EventHandler`, `EventHandlerTypeCode`, `FilteringAttributes`, `FxExpressionId`, `ImpersonatingUserId`, `IntroducedVersion`, `InvocationSource`, `IsCustomizable`, `IsHidden`, `Mode`, `Name`, `PluginTypeId`, `PowerfxRuleId`, `Rank`, `RuntimeIntegrationProperties`, `SdkMessageFilterId`, `SdkMessageId`, `SdkMessageProcessingStepId`, `SdkMessageProcessingStepSecureConfigId`, `Stage`, `StateCode`, `StatusCode`, `SupportedDeployment`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomizationLevel`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SdkMessageProcessingStepIdUnique`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (14)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_sdkmessageprocessingstep` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `fxexpression_sdkmessageprocessingstep` | [fxexpression](fxexpression.md) | `fxexpressionid` | `fxexpression` |
| `impersonatinguserid_sdkmessageprocessingstep` | [systemuser](systemuser.md) | `impersonatinguserid` | `impersonatinguserid` |
| `lk_sdkmessageprocessingstep_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sdkmessageprocessingstep_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_sdkmessageprocessingstep` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_sdkmessageprocessingstep` | [organization](organization.md) | `organizationid` | `organizationid` |
| `plugintype_sdkmessageprocessingstep` | [plugintype](plugintype.md) | `eventhandler` | `eventhandler_plugintype` |
| `plugintypeid_sdkmessageprocessingstep` | [plugintype](plugintype.md) | `plugintypeid` | `plugintypeid` |
| `powerfxrule_sdkmessageprocessingstep` | [powerfxrule](powerfxrule.md) | `powerfxruleid` | `powerfxrule` |
| `sdkmessagefilterid_sdkmessageprocessingstep` | [sdkmessagefilter](sdkmessagefilter.md) | `sdkmessagefilterid` | `sdkmessagefilterid` |
| `sdkmessageid_sdkmessageprocessingstep` | [sdkmessage](sdkmessage.md) | `sdkmessageid` | `sdkmessageid` |
| `sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep` | [sdkmessageprocessingstepsecureconfig](sdkmessageprocessingstepsecureconfig.md) | `sdkmessageprocessingstepsecureconfigid` | `sdkmessageprocessingstepsecureconfigid` |
| `serviceendpoint_sdkmessageprocessingstep` | [serviceendpoint](serviceendpoint.md) | `eventhandler` | `eventhandler_serviceendpoint` |

### One-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `SdkMessageProcessingStep_AsyncOperations` | _n/a_ | `owningextensionid` | _n/a_ |
| `sdkmessageprocessingstep_plugin_SdkMessageProcessingStep` | _n/a_ | `sdkmessageprocessingstep` | _n/a_ |
| `sdkmessageprocessingstepid_sdkmessageprocessingstepimage` | _n/a_ | `sdkmessageprocessingstepid` | _n/a_ |


## Source

Generated from [sdkmessageprocessingstep.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sdkmessageprocessingstep.md) on 2026-05-06.