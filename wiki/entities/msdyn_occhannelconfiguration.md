---
logical: "msdyn_occhannelconfiguration"
display: "Channel Configuration"
entitySetName: "msdyn_occhannelconfigurations"
primaryId: "msdyn_occhannelconfigurationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Channel Configuration

Channel Configuration

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_occhannelconfiguration` |
| Display name | Channel Configuration |
| Display (plural) | Channel Configurations |
| Schema name | `msdyn_occhannelconfiguration` |
| Entity set (Web API) | `msdyn_occhannelconfigurations` |
| Primary id attribute | `msdyn_occhannelconfigurationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_occhannelconfigurations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_occhannelconfigurations(<guid>)
POST /api/data/v9.2/msdyn_occhannelconfigurations
PATCH /api/data/v9.2/msdyn_occhannelconfigurations(<guid>)
DELETE /api/data/v9.2/msdyn_occhannelconfigurations(<guid>)
```

## Attributes

Writable: **15** · Read-only: **14**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_closeconversationifoooh`, `msdyn_enabletransfertoooohqueue`, `msdyn_engagementcontext`, `msdyn_name`, `msdyn_occhannelconfigurationId`, `msdyn_privacytermsaccepted`, `msdyn_privacytermsversion`, `msdyn_streamsource`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_occhannelconfiguration_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_occhannelconfiguration_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_occhannelconfiguration_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_occhannelconfiguration_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_occhannelconfiguration` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_occhannelconfiguration_msdyn_agentresourceforecasting_channel` | _n/a_ | `msdyn_channel` | _n/a_ |
| `msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid` | _n/a_ | `msdyn_occhannelconfigurationid` | _n/a_ |
| `msdyn_occhannelconfiguration_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelconfiguration_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelconfiguration_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_occhannelconfiguration_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_occhannelconfiguration_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelconfiguration_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_occhannelconfiguration_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_occhannelconfiguration_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_occhannelconfiguration.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_occhannelconfiguration.md) on 2026-05-06.