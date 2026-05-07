---
logical: "msdyn_occhannelstateconfiguration"
display: "Channel State Configuration"
entitySetName: "msdyn_occhannelstateconfigurations"
primaryId: "msdyn_occhannelstateconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Channel State Configuration

Channel State Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelstateconfiguration` |
| Display name | Channel State Configuration |
| Display (plural) | Channel State Configurations |
| Schema name | `msdyn_occhannelstateconfiguration` |
| Entity set (Web API) | `msdyn_occhannelstateconfigurations` |
| Primary id attribute | `msdyn_occhannelstateconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelstateconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelstateconfigurations(<guid>)
POST /api/data/v9.2/msdyn_occhannelstateconfigurations
PATCH /api/data/v9.2/msdyn_occhannelstateconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelstateconfigurations(<guid>)
```

## Attributes

Writable: **13** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_autocloseliveworkitemafter`, `msdyn_name`, `msdyn_occhannelconfigurationid`, `msdyn_occhannelstateconfigurationId`, `msdyn_ocliveworkitemstate`, `msdyn_showconfirmationonsessionclose`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_occhannelstateconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelstateconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelstateconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelstateconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid` | [msdyn_occhannelconfiguration](msdyn_occhannelconfiguration.md) | `msdyn_occhannelconfigurationid` | `msdyn_occhannelconfigurationid` |
| `organization_msdyn_occhannelstateconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_occhannelstateconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelstateconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelstateconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_occhannelstateconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_occhannelstateconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_occhannelstateconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelstateconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_occhannelstateconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_occhannelstateconfiguration.md) on 2026-05-06.