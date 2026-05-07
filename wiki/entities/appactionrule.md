---
logical: "appactionrule"
display: "App Action Rule"
entitySetName: "appactionrules"
primaryId: "appactionruleid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Action Rule

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appactionrule` |
| Display name | App Action Rule |
| Display (plural) | App Action Rules |
| Schema name | `appactionrule` |
| Entity set (Web API) | `appactionrules` |
| Primary id attribute | `appactionruleid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appactionrules?$select=name&$top=10
GET /api/data/v9.2/appactionrules(<guid>)
POST /api/data/v9.2/appactionrules
PATCH /api/data/v9.2/appactionrules(<guid>)
DELETE /api/data/v9.2/appactionrules(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`appactionruleId`, `Context`, `ContextEntity`, `ContextValue`, `Definition`, `ImportSequenceNumber`, `IsCustomizable`, `name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `entity_appactionrule_ContextEntity` | [entity](entity.md) | `contextentity` | `ContextEntity` |
| `lk_appactionrule_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_appactionrule_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_appactionrule_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_appactionrule_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_appactionrule` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appactionrule_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionrule_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionrule_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionrule_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `appactionrule_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `appactionrule_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appaction_appactionrule_classicrules` | [appactionruleid](appactionruleid.md) | _n/a_ | _n/a_ |
| `appactionrule_webresource_scripts` | [appactionruleid](appactionruleid.md) | _n/a_ | _n/a_ |

## Source

Generated from [appactionrule.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appactionrule.md) on 2026-05-06.