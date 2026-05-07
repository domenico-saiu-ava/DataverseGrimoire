---
logical: "msdyn_inboxconfiguration"
display: "Inbox Configuration"
entitySetName: "msdyn_inboxconfigurations"
primaryId: "msdyn_inboxconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Inbox Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_inboxconfiguration` |
| Display name | Inbox Configuration |
| Display (plural) | Inbox Configurations |
| Schema name | `msdyn_inboxconfiguration` |
| Entity set (Web API) | `msdyn_inboxconfigurations` |
| Primary id attribute | `msdyn_inboxconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_inboxconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_inboxconfigurations(<guid>)
POST /api/data/v9.2/msdyn_inboxconfigurations
PATCH /api/data/v9.2/msdyn_inboxconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_inboxconfigurations(<guid>)
```

## Attributes

Writable: **16** · Read-only: **14**

### Writable

`EnableCrossPartition`, `ImportSequenceNumber`, `IsCustomizable`, `msdyn_appconfigurationid`, `msdyn_configuration`, `msdyn_defaultsort`, `msdyn_inboxconfigurationId`, `msdyn_isdefault`, `msdyn_isvisible`, `msdyn_name`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_inboxconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_inboxconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_inboxconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_inboxconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_appconfiguration_msdyn_inboxconfiguration` | [msdyn_appconfiguration](msdyn_appconfiguration.md) | `msdyn_appconfigurationid` | `msdyn_appconfigurationid` |
| `organization_msdyn_inboxconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_inboxconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_inboxconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_inboxconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_inboxconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_inboxconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_inboxconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_inboxconfiguration.md) on 2026-05-06.