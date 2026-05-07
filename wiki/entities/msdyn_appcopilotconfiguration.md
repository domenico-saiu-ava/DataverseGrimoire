---
logical: "msdyn_appcopilotconfiguration"
display: "App Profile Copilot Configuration"
entitySetName: "msdyn_appcopilotconfigurations"
primaryId: "msdyn_appcopilotconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# App Profile Copilot Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_appcopilotconfiguration` |
| Display name | App Profile Copilot Configuration |
| Display (plural) | App Profile Copilot Configurations |
| Schema name | `msdyn_appcopilotconfiguration` |
| Entity set (Web API) | `msdyn_appcopilotconfigurations` |
| Primary id attribute | `msdyn_appcopilotconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_appcopilotconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_appcopilotconfigurations(<guid>)
POST /api/data/v9.2/msdyn_appcopilotconfigurations
PATCH /api/data/v9.2/msdyn_appcopilotconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_appcopilotconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_appconfigurationid`, `msdyn_appcopilotconfigurationId`, `msdyn_copilotfeature`, `msdyn_enabled`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_appcopilotconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_appcopilotconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_appcopilotconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_appcopilotconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_appcopilotconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |
| `organization_msdyn_appcopilotconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_appcopilotconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appcopilotconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appcopilotconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_appcopilotconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_appcopilotconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appcopilotconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_appcopilotconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_appcopilotconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_appcopilotconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_appcopilotconfiguration.md) on 2026-05-06.