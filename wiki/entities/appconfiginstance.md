---
logical: "appconfiginstance"
display: "App Configuration Instance"
entitySetName: "appconfiginstances"
primaryId: "appconfiginstanceid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Configuration Instance

Contains a property or a list of properties from the app configuration master list that can be customized for any app in Dynamics 365. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `appconfiginstance` |
| Display name | App Configuration Instance |
| Display (plural) | App Configuration Instance |
| Schema name | `AppConfigInstance` |
| Entity set (Web API) | `appconfiginstances` |
| Primary id attribute | `appconfiginstanceid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/appconfiginstances?$select=&$top=10
GET /api/data/v9.2/appconfiginstances(<guid>)
POST /api/data/v9.2/appconfiginstances
PATCH /api/data/v9.2/appconfiginstances(<guid>)
DELETE /api/data/v9.2/appconfiginstances(<guid>)
```

## Attributes

Writable: **8** · Read-only: **16**

### Writable

`AppConfigId`, `AppConfigIdUnique`, `AppConfigInstanceIdUnique`, `AppConfigMasterId`, `ComponentType`, `IntroducedVersion`, `ObjectId`, `Value`

### Read-only

`AppConfigInstanceId`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImportSequenceNumber`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverriddenCreatedOn`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `appconfig_appconfiginstance` | [appconfig](appconfig.md) | `appconfigid` | `appconfiginstance_appconfig` |
| `appconfigmaster_appconfiginstance` | [appconfigmaster](appconfigmaster.md) | `appconfigmasterid` | `appconfiginstance_appconfigmaster` |
| `lk_appconfiginstance_createdby` | [systemuser](systemuser.md) | `createdby` | `appconfiginstance_createdby` |
| `lk_appconfiginstance_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `appconfiginstance_createdonbehalfby` |
| `lk_appconfiginstance_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `appconfiginstance_modifiedby` |
| `lk_appconfiginstance_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `appconfiginstance_modifiedonbehalfby` |
| `organization_appconfiginstance` | [organization](organization.md) | `organizationid` | `organization_appconfiginstance_appconfiginstance` |



## Source

Generated from [appconfiginstance.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/appconfiginstance.md) on 2026-05-06.