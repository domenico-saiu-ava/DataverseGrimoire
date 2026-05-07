---
logical: "msdyn_salesaccelerationsettings"
display: "Sales Acceleration settings"
entitySetName: "msdyn_salesaccelerationsettingset"
primaryId: "msdyn_salesaccelerationsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sales Acceleration settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesaccelerationsettings` |
| Display name | Sales Acceleration settings |
| Display (plural) | Sales Acceleration settings set |
| Schema name | `msdyn_salesaccelerationsettings` |
| Entity set (Web API) | `msdyn_salesaccelerationsettingset` |
| Primary id attribute | `msdyn_salesaccelerationsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesaccelerationsettingset?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesaccelerationsettingset(<guid>)
POST /api/data/v9.2/msdyn_salesaccelerationsettingset
PATCH /api/data/v9.2/msdyn_salesaccelerationsettingset(<guid>)
DELETE /api/data/v9.2/msdyn_salesaccelerationsettingset(<guid>)
```

## Attributes

Writable: **25** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_CalendarType`, `msdyn_DisableWQAutoRefreshOnMarkComplete`, `msdyn_EntityConfiguration`, `msdyn_IsAutoCreatePhoneCallEnabled`, `msdyn_IsDefaultSetting`, `msdyn_IsFCCEnabled`, `msdyn_IsSignalRNotificationEnabled`, `msdyn_iswaittimecomputationenabled`, `msdyn_IsWorkScheduleEnabled`, `msdyn_linkingconfiguration`, `msdyn_LinkSequenceStepToActivity`, `msdyn_MigrationStatus`, `msdyn_name`, `msdyn_RecommendationSecurityRoles`, `msdyn_salesaccelerationsettingsId`, `msdyn_SecurityRoles`, `msdyn_SecurityRolesAssignmentRules`, `msdyn_SecurityRolesNew`, `msdyn_SequenceConfiguration`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesaccelerationsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesaccelerationsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesaccelerationsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesaccelerationsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salesaccelerationsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesaccelerationsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesaccelerationsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesaccelerationsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesaccelerationsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesaccelerationsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesaccelerationsettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesaccelerationsettings.md) on 2026-05-06.