---
logical: "msdyn_paneconfiguration"
display: "Productivity pane configuration"
entitySetName: "msdyn_paneconfigurations"
primaryId: "msdyn_paneconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Productivity pane configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_paneconfiguration` |
| Display name | Productivity pane configuration |
| Display (plural) | Productivity pane configurations |
| Schema name | `msdyn_paneconfiguration` |
| Entity set (Web API) | `msdyn_paneconfigurations` |
| Primary id attribute | `msdyn_paneconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_paneconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_paneconfigurations(<guid>)
POST /api/data/v9.2/msdyn_paneconfigurations
PATCH /api/data/v9.2/msdyn_paneconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_paneconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_paneconfigurationId`, `msdyn_panemode`, `msdyn_panestate`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_paneconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_paneconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_paneconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_paneconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_paneconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_paneconfig_msdyn_tabconfig` | _n/a_ | `msdyn_productivitypaneid` | _n/a_ |
| `msdyn_paneconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paneconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paneconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_paneconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_paneconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paneconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_paneconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_paneconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |

### Many-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_paneconfig_msdyn_appconfig` | [msdyn_paneconfigurationid](msdyn_paneconfigurationid.md) | _n/a_ | _n/a_ |

## Source

Generated from [msdyn_paneconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_paneconfiguration.md) on 2026-05-06.