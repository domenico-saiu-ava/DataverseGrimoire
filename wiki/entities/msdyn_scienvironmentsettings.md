---
logical: "msdyn_scienvironmentsettings"
display: "EnvironmentSettings"
entitySetName: "msdyn_scienvironmentsettings"
primaryId: "msdyn_scienvironmentsettingsid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# EnvironmentSettings

SCI environment level settings

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_scienvironmentsettings` |
| Display name | EnvironmentSettings |
| Display (plural) | EnvironmentSettings |
| Schema name | `msdyn_scienvironmentsettings` |
| Entity set (Web API) | `msdyn_scienvironmentsettings` |
| Primary id attribute | `msdyn_scienvironmentsettingsid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_scienvironmentsettings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_scienvironmentsettings(<guid>)
POST /api/data/v9.2/msdyn_scienvironmentsettings
PATCH /api/data/v9.2/msdyn_scienvironmentsettings(<guid>)
DELETE /api/data/v9.2/msdyn_scienvironmentsettings(<guid>)
```

## Attributes

Writable: **14** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_AzureSubscriptionId`, `msdyn_ContainerName`, `msdyn_Name`, `msdyn_RepAudioChannel`, `msdyn_scienvironmentsettingsId`, `msdyn_StorageAccountName`, `msdyn_TrackedCompetitors`, `msdyn_TrackedKeywords`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_scienvironmentsettings_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_scienvironmentsettings_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_scienvironmentsettings_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_scienvironmentsettings_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_scienvironmentsettings` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_scienvironmentsettings_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scienvironmentsettings_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scienvironmentsettings_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_scienvironmentsettings_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_scienvironmentsettings_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scienvironmentsettings_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_scienvironmentsettings_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_scienvironmentsettings_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_scienvironmentsettings.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_scienvironmentsettings.md) on 2026-05-06.