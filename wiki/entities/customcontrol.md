---
logical: "customcontrol"
display: "Custom Control"
entitySetName: "customcontrols"
primaryId: "customcontrolid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Custom Control

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customcontrol` |
| Display name | Custom Control |
| Display (plural) | Custom Controls |
| Schema name | `CustomControl` |
| Entity set (Web API) | `customcontrols` |
| Primary id attribute | `customcontrolid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/customcontrols?$select=name&$top=10
GET /api/data/v9.2/customcontrols(<guid>)
POST /api/data/v9.2/customcontrols
PATCH /api/data/v9.2/customcontrols(<guid>)
DELETE /api/data/v9.2/customcontrols(<guid>)
```

## Attributes

Writable: **9** · Read-only: **14**

### Writable

`AuthoringManifest`, `ClientJson`, `CompatibleDataTypes`, `CustomControlId`, `IntroducedVersion`, `Manifest`, `Name`, `SupportedPlatform`, `Version`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomControlIdUnique`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customcontrol_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_customcontrol_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customcontrol_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customcontrol_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customcontrol_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customcontrol_resource_id` | _n/a_ | `customcontrolid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceplan_customcontrol` | [customcontrolid](customcontrolid.md) | _n/a_ | _n/a_ |

## Source

Generated from [customcontrol.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/customcontrol.md) on 2026-05-06.