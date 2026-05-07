---
logical: "msdyn_chtprofileconfiguration"
display: "CHT App Profile Configuration"
entitySetName: "msdyn_chtprofileconfigurations"
primaryId: "msdyn_chtprofileconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# CHT App Profile Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_chtprofileconfiguration` |
| Display name | CHT App Profile Configuration |
| Display (plural) | CHT App Profile Configuration |
| Schema name | `msdyn_chtprofileconfiguration` |
| Entity set (Web API) | `msdyn_chtprofileconfigurations` |
| Primary id attribute | `msdyn_chtprofileconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_chtprofileconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_chtprofileconfigurations(<guid>)
POST /api/data/v9.2/msdyn_chtprofileconfigurations
PATCH /api/data/v9.2/msdyn_chtprofileconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_chtprofileconfigurations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_appconfigurationid`, `msdyn_chtfeature`, `msdyn_chtprofileconfigurationId`, `msdyn_enabled`, `msdyn_name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_chtprofileconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_chtprofileconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_chtprofileconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_chtprofileconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_chtappcopilotconfig_msdyn_appconfig` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |
| `organization_msdyn_chtprofileconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_chtprofileconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_chtprofileconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_chtprofileconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_chtprofileconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_chtprofileconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_chtprofileconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_chtprofileconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_chtprofileconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_chtprofileconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_chtprofileconfiguration.md) on 2026-05-06.