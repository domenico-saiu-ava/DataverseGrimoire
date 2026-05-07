---
logical: "appmodulecomponent"
display: "App Module Component"
entitySetName: "appmodulecomponents"
primaryId: "appmodulecomponentid"
tableType: "Standard"
ownership: "None"
---

# App Module Component

A component available in a business app such as entity, dashboard, form, view, chart, and business process.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appmodulecomponent` |
| Display name | App Module Component |
| Display (plural) | App Module Components |
| Schema name | `AppModuleComponent` |
| Entity set (Web API) | `appmodulecomponents` |
| Primary id attribute | `appmodulecomponentid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/appmodulecomponents?$select=&$top=10
GET /api/data/v9.2/appmodulecomponents(<guid>)
POST /api/data/v9.2/appmodulecomponents
PATCH /api/data/v9.2/appmodulecomponents(<guid>)
DELETE /api/data/v9.2/appmodulecomponents(<guid>)
```

## Attributes

Writable: **12** · Read-only: **9**

### Writable

`AppModuleComponentId`, `AppModuleComponentIdUnique`, `AppModuleIdUnique`, `ComponentType`, `IntroducedVersion`, `IsDefault`, `IsMetadata`, `ObjectId`, `RootAppModuleComponentId`, `RootComponentBehavior`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ExchangeRate`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmodule_appmodulecomponent` | [appmodule](appmodule.md) | `appmoduleidunique` | `appmoduleid` |
| `lk_appmodulecomponent_createdby` | [systemuser](systemuser.md) | `createdby` | `appmodulecomponent_createdby` |
| `lk_appmodulecomponent_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appmodulecomponent_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `appmodulecomponent_modifiedby` |
| `lk_appmodulecomponent_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [appmodulecomponent.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appmodulecomponent.md) on 2026-05-06.