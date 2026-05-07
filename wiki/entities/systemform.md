---
logical: "systemform"
display: "System Form"
entitySetName: "systemforms"
primaryId: "formid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# System Form

Organization-owned entity customizations including form layout and dashboards.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `systemform` |
| Display name | System Form |
| Display (plural) | System Forms |
| Schema name | `SystemForm` |
| Entity set (Web API) | `systemforms` |
| Primary id attribute | `formid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/systemforms?$select=name&$top=10
GET /api/data/v9.2/systemforms(<guid>)
POST /api/data/v9.2/systemforms
PATCH /api/data/v9.2/systemforms(<guid>)
DELETE /api/data/v9.2/systemforms(<guid>)
```

## Attributes

Writable: **19** · Read-only: **10**

### Writable

`AncestorFormId`, `CanBeDeleted`, `Description`, `FormActivationState`, `FormId`, `FormJson`, `FormPresentation`, `FormXml`, `IntroducedVersion`, `IsAIRMerged`, `IsCustomizable`, `IsDefault`, `IsDesktopEnabled`, `IsTabletEnabled`, `Name`, `ObjectTypeCode`, `Type`, `UniqueName`, `Version`

### Read-only

`ComponentState`, `FormIdUnique`, `FormXmlManaged`, `IsManaged`, `OrganizationId`, `OverwriteTime`, `PublishedOn`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (2)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `form_ancestor_form` | [systemform](systemform.md) | `ancestorformid` | `ancestorformid` |
| `organization_systemforms` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `form_ancestor_form` | _n/a_ | `ancestorformid` | _n/a_ |
| `processtrigger_systemform` | _n/a_ | `formid` | _n/a_ |
| `SystemForm_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `SystemForm_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [systemform.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/systemform.md) on 2026-05-06.