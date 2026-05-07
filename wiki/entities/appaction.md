---
logical: "appaction"
display: "App Action"
entitySetName: "appactions"
primaryId: "appactionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Action

Contains Modern Command Information

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appaction` |
| Display name | App Action |
| Display (plural) | App Actions |
| Schema name | `appaction` |
| Entity set (Web API) | `appactions` |
| Primary id attribute | `appactionid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appactions?$select=name&$top=10
GET /api/data/v9.2/appactions(<guid>)
POST /api/data/v9.2/appactions
PATCH /api/data/v9.2/appactions(<guid>)
DELETE /api/data/v9.2/appactions(<guid>)
```

## Attributes

Writable: **44** · Read-only: **14**

### Writable

`appactionId`, `AppModuleId`, `ButtonAccessibilityText`, `ButtonLabelText`, `ButtonSequencePriority`, `ButtonTooltipDescription`, `ButtonTooltipTitle`, `ClientType`, `Context`, `ContextEntity`, `ContextValue`, `FontIcon`, `GroupTitle`, `Hidden`, `IconWebResourceId`, `ImportSequenceNumber`, `IsCustomizable`, `IsDisabled`, `isGroupTitleHidden`, `Location`, `name`, `OnClickEventFormulaComponentLibrary`, `OnClickEventFormulaComponentLibraryId`, `OnClickEventFormulaComponentName`, `OnClickEventFormulaFunctionName`, `OnClickEventJavaScriptFunctionName`, `OnClickEventJavaScriptParameters`, `OnClickEventJavaScriptWebResourceId`, `OnClickEventType`, `Origin`, `OverriddenCreatedOn`, `ParentAppActionId`, `Sequence`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UniqueName`, `UTCConversionTimeZoneCode`, `VisibilityFormulaComponentLibrary`, `VisibilityFormulaComponentLibraryId`, `VisibilityFormulaComponentName`, `VisibilityFormulaFunctionName`, `VisibilityType`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appaction` | [appaction](appaction.md) | `parentappactionid` | `ParentAppActionId` |
| `appmodule_appaction_appmoduleid` | [appmodule](appmodule.md) | `appmoduleid` | `AppModuleId` |
| `canvasapp_appaction_onclickeventformulacomponentlibraryid` | [canvasapp](canvasapp.md) | `onclickeventformulacomponentlibraryid` | `OnClickEventFormulaComponentLibraryId` |
| `canvasapp_appaction_visibilityformulacomponentlibraryid` | [canvasapp](canvasapp.md) | `visibilityformulacomponentlibraryid` | `VisibilityFormulaComponentLibraryId` |
| `entity_appaction_ContextEntity` | [entity](entity.md) | `contextentity` | `ContextEntity` |
| `lk_appaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appaction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `webresource_appaction_iconwebresourceid` | [webresource](webresource.md) | `iconwebresourceid` | `IconWebResourceId` |
| `webresource_appaction_onclickeventjavascriptwebresourceid` | [webresource](webresource.md) | `onclickeventjavascriptwebresourceid` | `OnClickEventJavaScriptWebResourceId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appaction` | _n/a_ | `parentappactionid` | _n/a_ |
| `appaction_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appaction_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appaction_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appaction_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `appaction_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appaction_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appactionrule_classicrules` | [appactionid](appactionid.md) | _n/a_ | _n/a_ |

## Source

Generated from [appaction.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appaction.md) on 2026-05-06.