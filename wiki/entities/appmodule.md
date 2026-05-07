---
logical: "appmodule"
display: "Model-driven App"
entitySetName: "appmodules"
primaryId: "appmoduleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Model-driven App

A role-based, modular business app that provides task-based functionality for a particular area of work.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appmodule` |
| Display name | Model-driven App |
| Display (plural) | Model-driven Apps |
| Schema name | `AppModule` |
| Entity set (Web API) | `appmodules` |
| Primary id attribute | `appmoduleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appmodules?$select=name&$top=10
GET /api/data/v9.2/appmodules(<guid>)
POST /api/data/v9.2/appmodules
PATCH /api/data/v9.2/appmodules(<guid>)
DELETE /api/data/v9.2/appmodules(<guid>)
```

## Attributes

Writable: **28** · Read-only: **14**

### Writable

`aiappdescription`, `aidescriptiongeneratedon`, `appgraph`, `AppModuleId`, `AppModuleIdUnique`, `AppModuleVersion`, `AppModuleXmlManaged`, `ClientType`, `ConfigXML`, `Description`, `EventHandlers`, `FormFactor`, `ImportSequenceNumber`, `IntroducedVersion`, `IsDefault`, `IsFeatured`, `Name`, `NavigationType`, `OptimizedFor`, `OverriddenCreatedOn`, `PublishedOn`, `PublisherId`, `statecode`, `statuscode`, `UniqueName`, `URL`, `WebResourceId`, `WelcomePageId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `Descriptor`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appmodule_createdby` | [systemuser](systemuser.md) | `createdby` | `appmodule_createdby` |
| `lk_appmodule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `appmodule_createdonbehalfby` |
| `lk_appmodule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `appmodule_modifiedby` |
| `lk_appmodule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `appmodule_modifiedonbehalfby` |
| `organization_appmodule` | [organization](organization.md) | `organizationid` | `organization_appmodule_appmodule` |
| `publisher_appmodule` | [publisher](publisher.md) | `publisherid` | `publisher_appmodule_appmodule` |

### One-to-Many (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmodule_appaction_appmoduleid` | _n/a_ | `appmoduleid` | _n/a_ |
| `appmodule_appconfig` | _n/a_ | `appmoduleid` | _n/a_ |
| `appmodule_appmodulecomponent` | _n/a_ | `appmoduleidunique` | _n/a_ |
| `appmodule_appnotification_app` | _n/a_ | `appmoduleid` | _n/a_ |
| `appmodule_userrating_app` | _n/a_ | `appmoduleid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appmoduleroles_association` | [appmoduleid](appmoduleid.md) | _n/a_ | _n/a_ |
| `serviceplan_appmodule` | [appmoduleid](appmoduleid.md) | _n/a_ | _n/a_ |

## Source

Generated from [appmodule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appmodule.md) on 2026-05-06.