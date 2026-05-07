---
logical: "complexcontrol"
display: "Process Configuration"
entitySetName: "complexcontrols"
primaryId: "complexcontrolid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Process Configuration

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `complexcontrol` |
| Display name | Process Configuration |
| Display (plural) | Process Configurations |
| Schema name | `ComplexControl` |
| Entity set (Web API) | `complexcontrols` |
| Primary id attribute | `complexcontrolid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/complexcontrols?$select=name&$top=10
GET /api/data/v9.2/complexcontrols(<guid>)
POST /api/data/v9.2/complexcontrols
PATCH /api/data/v9.2/complexcontrols(<guid>)
DELETE /api/data/v9.2/complexcontrols(<guid>)
```

## Attributes

Writable: **7** · Read-only: **8**

### Writable

`ComplexControlId`, `ComplexControlXml`, `Description`, `IntroducedVersion`, `Name`, `Type`, `Version`

### Read-only

`ComplexControlIdUnique`, `ComponentState`, `IsManaged`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `organization_complexcontrols` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [complexcontrol.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/complexcontrol.md) on 2026-05-06.