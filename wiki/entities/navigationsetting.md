---
logical: "navigationsetting"
display: "Navigation Setting"
entitySetName: "navigationsettings"
primaryId: "navigationsettingid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Navigation Setting

Navigation Setting: A setting page or group of pages available for configuration within an app. A record representing a group of pages is regarded as the parent navigation setting of one or more other records. For internal use only.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `navigationsetting` |
| Display name | Navigation Setting |
| Display (plural) | Navigation Settings |
| Schema name | `NavigationSetting` |
| Entity set (Web API) | `navigationsettings` |
| Primary id attribute | `navigationsettingid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/navigationsettings?$select=name&$top=10
GET /api/data/v9.2/navigationsettings(<guid>)
POST /api/data/v9.2/navigationsettings
PATCH /api/data/v9.2/navigationsettings(<guid>)
DELETE /api/data/v9.2/navigationsettings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **14**

### Writable

`AdvancedSettingOrder`, `AppConfigId`, `AppConfigIdUnique`, `Description`, `GroupName`, `IconResourceId`, `IntroducedVersion`, `Name`, `NavigationSettingId`, `NavigationSettingIdUnique`, `ObjectTypeCode`, `PageUrl`, `ParentNavigationSettingId`, `Privileges`, `ProgressState`, `QuickSettingOrder`, `ResourceId`, `SettingType`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ImportSequenceNumber`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverriddenCreatedOn`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_navigationsetting_createdby` | [systemuser](systemuser.md) | `createdby` | `navigationsetting_createdby` |
| `lk_navigationsetting_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `navigationsetting_createdonbehalfby` |
| `lk_navigationsetting_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `navigationsetting_modifiedby` |
| `lk_navigationsetting_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `navigationsetting_modifiedonbehalfby` |
| `navigationsetting_appconfig` | [appconfig](appconfig.md) | `appconfigid` | `navigationsetting_appconfig` |
| `organization_navigationsetting` | [organization](organization.md) | `organizationid` | `organization_navigationsetting_navigationsetting` |



## Source

Generated from [navigationsetting.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/navigationsetting.md) on 2026-05-06.