---
logical: "customcontrolresource"
display: "Custom Control Resource"
entitySetName: "customcontrolresources"
primaryId: "customcontrolresourceid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Custom Control Resource

Custom Control Resource Id

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customcontrolresource` |
| Display name | Custom Control Resource |
| Display (plural) | Custom Control Resources |
| Schema name | `CustomControlResource` |
| Entity set (Web API) | `customcontrolresources` |
| Primary id attribute | `customcontrolresourceid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/customcontrolresources?$select=name&$top=10
GET /api/data/v9.2/customcontrolresources(<guid>)
POST /api/data/v9.2/customcontrolresources
PATCH /api/data/v9.2/customcontrolresources(<guid>)
DELETE /api/data/v9.2/customcontrolresources(<guid>)
```

## Attributes

Writable: **7** · Read-only: **14**

### Writable

`CustomControlId`, `CustomControlResourceId`, `IntroducedVersion`, `Name`, `Version`, `VersionRequirement`, `WebResourceId`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomControlResourceIdUnique`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customcontrol_resource_id` | [customcontrol](customcontrol.md) | `customcontrolid` | `customcontrolid_customcontrol` |
| `customcontrolresource_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_customcontrolresource_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customcontrolresource_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customcontrolresource_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customcontrolresource_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [customcontrolresource.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/customcontrolresource.md) on 2026-05-06.