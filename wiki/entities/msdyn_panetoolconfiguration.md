---
logical: "msdyn_panetoolconfiguration"
display: "Pane tool configuration"
entitySetName: "msdyn_panetoolconfigurations"
primaryId: "msdyn_panetoolconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Pane tool configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_panetoolconfiguration` |
| Display name | Pane tool configuration |
| Display (plural) | Pane tool configurations |
| Schema name | `msdyn_panetoolconfiguration` |
| Entity set (Web API) | `msdyn_panetoolconfigurations` |
| Primary id attribute | `msdyn_panetoolconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_panetoolconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_panetoolconfigurations(<guid>)
POST /api/data/v9.2/msdyn_panetoolconfigurations
PATCH /api/data/v9.2/msdyn_panetoolconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_panetoolconfigurations(<guid>)
```

## Attributes

Writable: **21** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_category`, `msdyn_controlname`, `msdyn_data`, `msdyn_defaulticon`, `msdyn_description`, `msdyn_icon`, `msdyn_isConfigurable`, `msdyn_isglobal`, `msdyn_learnmorelink`, `msdyn_name`, `msdyn_panetoolconfigurationId`, `msdyn_toolConfigurationEntity`, `msdyn_type`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_panetoolconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_panetoolconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_panetoolconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_panetoolconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_webresource_msdyn_toolconfig_icon` | [webresource](webresource.md) | `msdyn_icon` | `msdyn_icon` |
| `organization_msdyn_panetoolconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_toolconfig_msdyn_tabconfig` | _n/a_ | `msdyn_toolid` | _n/a_ |
| `msdyn_panetoolconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetoolconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetoolconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_panetoolconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_panetoolconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetoolconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_panetoolconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_panetoolconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_panetoolconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_panetoolconfiguration.md) on 2026-05-06.