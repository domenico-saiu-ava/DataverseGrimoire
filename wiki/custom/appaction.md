---
logical: "appaction"
display: "Azione app"
entitySetName: "appactions"
primaryId: "appactionid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Azione app

Contiene informazioni sul comando moderno

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appaction` |
| Display name | Azione app |
| Display (plural) | Azioni app |
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

`appactionid`, `appmoduleid`, `buttonaccessibilitytext`, `buttonlabeltext`, `buttonsequencepriority`, `buttontooltipdescription`, `buttontooltiptitle`, `clienttype`, `context`, `contextentity`, `contextvalue`, `fonticon`, `grouptitle`, `hidden`, `iconwebresourceid`, `importsequencenumber`, `iscustomizable`, `isdisabled`, `isgrouptitlehidden`, `location`, `name`, `onclickeventformulacomponentlibrary`, `onclickeventformulacomponentlibraryid`, `onclickeventformulacomponentname`, `onclickeventformulafunctionname`, `onclickeventjavascriptfunctionname`, `onclickeventjavascriptparameters`, `onclickeventjavascriptwebresourceid`, `onclickeventtype`, `origin`, `overriddencreatedon`, `parentappactionid`, `sequence`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `uniquename`, `utcconversiontimezonecode`, `visibilityformulacomponentlibrary`, `visibilityformulacomponentlibraryid`, `visibilityformulacomponentname`, `visibilityformulafunctionname`, `visibilitytype`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `overwritetime`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (12)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appaction_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appaction_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appaction_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appaction_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appaction` | [organization](organization.md) | `organizationid` | `organizationid` |
| `appaction_appaction` | [appaction](appaction.md) | `parentappactionid` | `ParentAppActionId` |
| `appmodule_appaction_appmoduleid` | [appmodule](appmodule.md) | `appmoduleid` | `AppModuleId` |
| `canvasapp_appaction_onclickeventformulacomponentlibraryid` | [canvasapp](canvasapp.md) | `onclickeventformulacomponentlibraryid` | `OnClickEventFormulaComponentLibraryId` |
| `canvasapp_appaction_visibilityformulacomponentlibraryid` | [canvasapp](canvasapp.md) | `visibilityformulacomponentlibraryid` | `VisibilityFormulaComponentLibraryId` |
| `entity_appaction_ContextEntity` | [entity](entity.md) | `contextentity` | `ContextEntity` |
| `webresource_appaction_iconwebresourceid` | [webresource](webresource.md) | `iconwebresourceid` | `IconWebResourceId` |
| `webresource_appaction_onclickeventjavascriptwebresourceid` | [webresource](webresource.md) | `onclickeventjavascriptwebresourceid` | `OnClickEventJavaScriptWebResourceId` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_SyncErrors` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appaction_AsyncOperations` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appaction_MailboxTrackingFolders` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appaction_UserEntityInstanceDatas` | [appaction](appaction.md) | `objectid` | `objectid_appaction` |
| `appaction_ProcessSession` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appaction_BulkDeleteFailures` | [appaction](appaction.md) | `regardingobjectid` | `regardingobjectid_appaction` |
| `appaction_PrincipalObjectAttributeAccesses` | [appaction](appaction.md) | `objectid` | `objectid_appaction` |
| `appaction_appaction` | [appaction](appaction.md) | `parentappactionid` | `ParentAppActionId` |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appactionrule_classicrules` | [appactionrule](appactionrule.md) | _n/a_ | `appaction_appactionrule_classicrules` |

## Source

Generated from [appaction (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='appaction')) on 2026-05-07.