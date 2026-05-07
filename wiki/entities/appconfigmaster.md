---
logical: "appconfigmaster"
display: "App Config Master"
entitySetName: "appconfigmasters"
primaryId: "appconfigmasterid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Config Master

Contains the master list of all properties that can be customized for apps in Dynamics 365. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appconfigmaster` |
| Display name | App Config Master |
| Display (plural) | App Config Master |
| Schema name | `AppConfigMaster` |
| Entity set (Web API) | `appconfigmasters` |
| Primary id attribute | `appconfigmasterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appconfigmasters?$select=name&$top=10
GET /api/data/v9.2/appconfigmasters(<guid>)
POST /api/data/v9.2/appconfigmasters
PATCH /api/data/v9.2/appconfigmasters(<guid>)
DELETE /api/data/v9.2/appconfigmasters(<guid>)
```

## Attributes

Writable: **0** · Read-only: **16**

### Read-only

`AppConfigMasterId`, `ConfigType`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `DefaultValue`, `ImportSequenceNumber`, `IsNavigationSetting`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverriddenCreatedOn`, `ParentAppConfigMasterId`, `Validator`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_appconfigmaster_createdby` | [systemuser](systemuser.md) | `createdby` | `appconfigmaster_createdby` |
| `lk_appconfigmaster_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `appconfigmaster_createdonbehalfby` |
| `lk_appconfigmaster_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `appconfigmaster_modifiedby` |
| `lk_appconfigmaster_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `appconfigmaster_modifiedonbehalfby` |
| `organization_appconfigmaster` | [organization](organization.md) | `organizationid` | `organization_appconfigmaster_appconfigmaster` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appconfigmaster_appconfiginstance` | _n/a_ | `appconfigmasterid` | _n/a_ |


## Source

Generated from [appconfigmaster.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appconfigmaster.md) on 2026-05-06.