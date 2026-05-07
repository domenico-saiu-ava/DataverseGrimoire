---
logical: "customcontroldefaultconfig"
display: "Custom Control Default Config"
entitySetName: "customcontroldefaultconfigs"
primaryId: "customcontroldefaultconfigid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Custom Control Default Config

For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customcontroldefaultconfig` |
| Display name | Custom Control Default Config |
| Display (plural) | Custom Control Default Configs |
| Schema name | `CustomControlDefaultConfig` |
| Entity set (Web API) | `customcontroldefaultconfigs` |
| Primary id attribute | `customcontroldefaultconfigid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/customcontroldefaultconfigs?$select=&$top=10
GET /api/data/v9.2/customcontroldefaultconfigs(<guid>)
POST /api/data/v9.2/customcontroldefaultconfigs
PATCH /api/data/v9.2/customcontroldefaultconfigs(<guid>)
DELETE /api/data/v9.2/customcontroldefaultconfigs(<guid>)
```

## Attributes

Writable: **6** · Read-only: **14**

### Writable

`ControlDescriptionJson`, `ControlDescriptionXML`, `CustomControlDefaultConfigId`, `EventsXml`, `IntroducedVersion`, `PrimaryEntityTypeCode`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomControlDefaultConfigIdUnique`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customcontroldefaultconfig_organization` | [organization](organization.md) | `organizationid` | `organizationid` |
| `lk_customcontroldefaultconfig_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customcontroldefaultconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customcontroldefaultconfig_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customcontroldefaultconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |



## Source

Generated from [customcontroldefaultconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/customcontroldefaultconfig.md) on 2026-05-06.